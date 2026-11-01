# Bigg Boss 20 — Trusted Sources & Agent Integration Guide

**Prepared:** 1 November 2026  
**Timezone:** Asia/Kolkata  
**Purpose:** Build a verifiable, regularly updated contestant, episode, controversy, and audience-sentiment intelligence system.

> **Critical:** Do not assume a season roster, contestant status, episode number, or fight is confirmed because it appears in a fan site or earlier AI answer. Validate against official broadcaster content. There is no confirmed public, comprehensive Bigg Boss 20 episode/contestant API.

## 1. Primary sources — broadcaster authority

| Source | Direct link | What to retrieve | Integration approach | Caution |
|---|---|---|---|---|
| JioStar corporate newsroom | https://www.jiostar.com/news/ | Official network announcements | Monitor published pages / approved feeds | Not a full episode-data API |
| JioHotstar | https://www.jiohotstar.com/ | Official episodes, show pages, promo descriptions | Approved partner/metadata access or permitted public pages | Do not bypass DRM, access controls, or terms |
| Colors TV | https://www.colorstv.com/ | Official show and contestant announcements | Public pages / authorized feeds | Verify season and date |
| JioHotstar Reality Instagram | https://www.instagram.com/jiohotstarreality/ | Official promotional clips and statements | Instagram Graph API where eligible; otherwise permitted viewing | Public Instagram access can be restricted |
| JioHotstar Reality X | https://x.com/HotstarReality | Official posts and event announcements | X API with appropriate access | API may require paid tier |

**Rule:** Officially announced elimination, captaincy, punishment, or re-entry should require a direct broadcaster/episode source. If missing, display **unconfirmed**.

## 2. Official and documented developer APIs

| Provider | Developer documentation | Data | Credentials / limitations |
|---|---|---|---|
| YouTube Data API v3 | https://developers.google.com/youtube/v3 | Official videos, titles, comments, comment counts | Google Cloud API key or OAuth; quota |
| YouTube commentThreads.list | https://developers.google.com/youtube/v3/docs/commentThreads/list | Top-level public video comments | Some videos disable comments |
| Google Cloud API console | https://console.cloud.google.com/apis/library/youtube.googleapis.com | Enable YouTube Data API | Google Cloud project |
| TMDB API | https://developer.themoviedb.org/docs/getting-started | Acting credits, profiles, images | API credentials; check commercial-use terms |
| Wikidata SPARQL | https://query.wikidata.org/ | Public biographical claims and entity IDs | Public endpoint with rate/use limits; verify against primary sources |
| Wikimedia API | https://www.mediawiki.org/wiki/API:Main_page | Public encyclopedia metadata | Respect licenses and provenance |
| GDELT Cloud API | https://docs.gdeltcloud.com/API_DOCUMENTATION_GUIDE | News discovery and coverage | Check current key/access requirements; NOT fact verification |
| Reddit developer/data access | https://support.reddithelp.com/hc/en-us/articles/14945211791892-Developer-Platform-Accessing-Reddit-Data | Community discussions | Authorization and permitted-use restrictions |
| Meta Instagram Platform | https://developers.facebook.com/docs/instagram-platform/ | Eligible Instagram account/media data | Meta app review and permissions; not universal public comment access |
| Meta Graph API | https://developers.facebook.com/docs/graph-api/ | Authorized Facebook/Page data | Permission and app review restrictions |
| X API | https://docs.x.com/x-api | Public posts and engagement where permitted | Access tiers, cost and rate limits |
| Google Trends | https://trends.google.com/trends/ | Relative search interest | Do not assume an unrestricted official public API |

## 3. Established news publishers (secondary corroboration)

- The Indian Express — https://indianexpress.com/section/entertainment/
- India Today — https://www.indiatoday.in/television
- Hindustan Times — https://www.hindustantimes.com/entertainment
- The Times of India — https://timesofindia.indiatimes.com/entertainment
- Pinkvilla — https://www.pinkvilla.com/

Use RSS where actually provided, licensed aggregation, or publisher-permitted article retrieval. Record the **original article URL, publication timestamp, update timestamp, author, event date, and exact claim**. Two outlets repeating the same anonymous claim are not independent confirmation.

## 4. Fan / community sources (discovery only)

- BiggBoss Pulse: use as a UI/feature reference or discovery source **only after independently validating its domain and provenance**; no URL asserted here.
- Reddit: https://www.reddit.com/
- YouTube: https://www.youtube.com/
- Instagram: https://www.instagram.com/
- X: https://x.com/

Never convert polls, hashtags, paid promotion, reposts or fan voting into **official voting totals**.

## 5. Required contestant profile fields

```json
{
  "season": 20,
  "contestant_id": "stable_unique_id",
  "display_name": "",
  "legal_or_public_name": null,
  "profession": [],
  "career_credits": [],
  "verified_social_handles": [],
  "official_photo_source_url": null,
  "entry_date": null,
  "status": "unknown",
  "status_verified_at": null,
  "elimination_date": null,
  "episode_events": [],
  "controversies": [],
  "audience_sentiment": [],
  "sources": []
}
```

Each episode event should include **episode/date, involved contestants, event type, evidence URL, source type, verification status, and last checked time**. Controversies must distinguish allegation, direct quote, on-screen event, denial, and confirmed consequence.

## 6. Verification policy

1. **Official facts:** Direct episode footage, broadcaster announcement, or official verified account. Preserve URL and timestamp.
2. **Career facts:** Official contestant statement, verified credit, TMDB/IMDb where licensed, or reputable interview; cross-check identity.
3. **Controversies:** Report what happened or was alleged, identify the claimant, record responses, avoid guilt-by-coverage.
4. **Sentiment:** Show platform, sample size, sampling window, duplicates/bot-filtering method, and uncertainty. Never label it representative of all viewers.
5. **Disagreements:** Keep both claims with citations; do not silently choose one.
6. **Missing data:** Use `unknown`, `unverified`, or `not_available`; never fill with plausible guesses.
7. **Images:** Use official media with suitable rights/permissions; AI artwork must be labeled dramatized, not documentary evidence.

## 7. Suggested polling cadence

| Feed | Suggested cadence | Trigger |
|---|---|---|
| Official announcements | Every 30–60 minutes during show activity | New official post / episode |
| Entertainment news | Hourly | New relevant article |
| YouTube comments | Every 3–6 hours | Recent official video |
| Reddit/social | Every 3–6 hours, within permitted quotas | Relevant discussion |
| Episode recap | After broadcast | Official episode available |
| Contestant status | After eviction, wildcard or official announcement | Primary-source confirmation |

Use incremental retrieval, cache results, obey API limits, and record `fetched_at` separately from `published_at` and `event_at`.

## 8. Minimum implementation checklist

- [ ] Confirm the **actual Season 20 roster** against broadcaster evidence; do not seed current status from a fan list.
- [ ] Register Google Cloud project and enable YouTube Data API.
- [ ] Request TMDB API access and verify image-use licensing.
- [ ] Configure GDELT or a licensed news-discovery feed.
- [ ] Obtain Reddit/Meta/X permissions before ingesting restricted data.
- [ ] Create normalized contestant, episode, event, source, and claim tables.
- [ ] Add provenance, contradiction detection, and verification states.
- [ ] Build dashboard with explicit `Last verified` indicators.
- [ ] Keep official outcomes separate from social sentiment and predictions.

## 9. Agent instruction (copy into system prompt)

> You are a Bigg Boss Hindi Season 20 evidence-based research agent. Prioritize official JioStar/JioHotstar/Colors sources for show events and contestant status. Use established publishers for corroboration, authorized APIs for careers and social discussions, and community sites for leads only. Never invent episode details, contestants, vote counts, career claims, or controversies. Every factual claim must retain a source URL, event date, publication date, retrieval time, and verification state. When sources disagree, display the conflict and mark the outcome unresolved. Keep audience sentiment clearly separate from official show results.
