# RealityPulse — Architecture.md

## 1. Problem being fixed
The app currently reads all contestant, sentiment, and eviction data from one hardcoded file (`src/data/mockRealityData.ts`). It shows a fixed "Week 5" snapshot regardless of what day it actually is. Bigg Boss 20 is at Day 52 in reality — the app has no way to know that. The only "live" feature (manual sync button) writes to in-memory state that is lost on every serverless restart, and its AI call silently falls back to fabricated data when it fails.

## 2. Target behavior
- No hardcoded contestant/episode data anywhere in the frontend.
- A scheduled job runs every 2–3 hours at fixed clock times (e.g. 9am, 12pm, 3pm, 6pm, 9pm IST).
- Each run fetches real data from multiple sources, scores it, and saves a timestamped snapshot to a real database.
- The webapp always displays the latest snapshot plus a "Last updated X ago" indicator.
- Past snapshots remain queryable for historical/weekly lookback, clearly separated from the "live" view.
- The current day/week number is calculated from the show's real premiere date — never hand-typed.

## 3. Stack (all free tier)

| Layer | Choice | Why |
|---|---|---|
| Hosting | Vercel (existing, Hobby plan) | Already deployed here; no change needed |
| Database | Supabase (via Vercel Marketplace → Storage) | Free: 500MB DB, 1GB file storage; auto-wires env vars into Vercel; frequent cron hits keep the free project from idling/pausing |
| Scheduler | GitHub Actions (cron workflow) | Vercel Hobby cron only allows once/day — fails deploy on anything more frequent. GitHub Actions is free and supports fixed multi-time daily schedules |
| AI scoring | Gemini 2.5 Flash (existing key) | Already integrated; used for sentiment/astroturf scoring and summarizing fetched text — not for fetching data itself |
| News sources | Google News RSS + publisher RSS (Indian Express, HT, India Today) | Free, no key required |
| Video/comments | YouTube Data API v3 | Free quota (10,000 units/day) sufficient at this call frequency |
| Discussion | Reddit API (free app registration) | Lower frequency (every 3–6 hrs per source guide) |

Total monthly cost: ₹0.

## 4. Data flow (each scheduled run)

```
GitHub Actions (fixed times, IST)
      │  POST with secret header
      ▼
/api/cron/ingest  (Vercel serverless function)
      │
      ├─ 1. Reject if secret header doesn't match CRON_SECRET env var
      ├─ 2. Fetch: Google News RSS, publisher RSS, YouTube official channel + comments
      ├─ 3. Send fetched text to Gemini → structured JSON (sentiment, astroturf flags, summary)
      │      Gemini is NOT allowed to invent source URLs — only URLs returned by the fetch step are stored
      ├─ 4. Compute TOSS/eviction-risk via existing analyticsEngine.ts logic, fed by real platform data
      ├─ 5. Write one new row per contestant to `contestant_snapshots` (timestamped)
      ├─ 6. Write new rows to `raw_items` (deduped by source URL) and `feed_items`
      └─ 7. Only a request whose sourceUrl matches TRUSTED_BROADCASTER_DOMAINS may flip eviction/nomination status
      ▼
Supabase Postgres (persisted, survives restarts)
      ▼
Webapp reads via:
  GET /api/contestants        → latest snapshot per contestant
  GET /api/feed/latest        → latest feed_items
  GET /api/snapshot?week=N    → historical lookback (read-only, clearly labeled "past")
```

## 5. Database tables (Supabase/Postgres)

- `contestants` — id, name, status, isNominated, entry_date, eviction_week, status_verified_at, status_source_url
- `contestant_snapshots` — contestant_id, captured_at, platform metrics (per-platform sentiment/organicRatio/volume/botEstimate), toss, raw, prDelta, riskTier, evictionProbability
- `raw_items` — source_url (unique), source_domain, title, text, fetched_at, published_at
- `feed_items` — id, category, title, summary, source_url, source_domain, verified_by_broadcaster, involved_contestants, created_at
- `audit_chain` — existing hash-chain logic, same as today, but persisted instead of in-memory

## 6. Frontend changes
- Remove `import { INITIAL_CONTESTANTS } from './data/mockRealityData'` from `App.tsx`.
- Load contestants from `GET /api/contestants` on mount; show loading + error states.
- Replace hardcoded "Week 5" strings in `EvictionMatrixView.tsx` and `EvictionTimelineView.tsx` with a computed value: `Math.floor((now - premiereDate) / 7days) + 1`.
- Add a "Last updated {relativeTime}" badge sourced from the latest snapshot's `captured_at`.
- Add a week/day picker that calls `GET /api/snapshot?week=N` for lookback — this view is visually marked as historical, never mistaken for live.

## 7. Security fixes carried into this architecture
- `ADMIN_INGEST_KEY` / `CRON_SECRET` must be set in Vercel env vars with no hardcoded fallback value.
- Broadcaster-authority check (`validateBroadcasterAuthority`) stays, but Gemini output is never trusted as the `sourceUrl` directly for status changes — only URLs independently retrieved by the fetch step are eligible.
- Rate limiter moves from in-memory `Map` to a Supabase-backed check (in-memory resets on every cold start today, so it currently does nothing).

## 8. Explicitly out of scope for now
- X (Twitter) and Instagram ingestion — require paid API tiers or app review; show "not available" rather than fake data.
- Editing contestant roster/eviction history by hand — Phase 1 verifies the existing 18-contestant roster against broadcaster sources once, then it's database-driven only.

## 9. Build order (see Phases.md for scoped agent prompts)
1. Supabase wired up + frontend reads from API instead of mock file (no behavior change yet, just removes hardcoding)
2. `/api/cron/ingest` with real sources + GitHub Actions workflow calling it every 2–3 hrs
3. Gemini scoring wired into the ingest job, snapshots written on real schedule
4. Week/day computed dynamically + historical lookback view + "last updated" badge
5. Security hardening: secrets, broadcaster-URL verification, rate limiter persistence
