-- ====================================================================
-- RealityPulse Database Schema for Supabase (PostgreSQL)
-- Implements Phase 1–5 of RealityPulse Architecture
-- ====================================================================

-- 1. CONTESTANTS TABLE
CREATE TABLE IF NOT EXISTS public.contestants (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    nickname TEXT NOT NULL,
    avatar TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'Contestant',
    status TEXT NOT NULL DEFAULT 'Active' CHECK (status IN ('Active', 'Evicted', 'Guest', 'Wildcard')),
    is_nominated BOOLEAN NOT NULL DEFAULT false,
    entry_date TIMESTAMPTZ NOT NULL DEFAULT '2026-09-11T15:30:00Z',
    eviction_week INTEGER,
    status_verified_at TIMESTAMPTZ DEFAULT now(),
    status_source_url TEXT,
    bio TEXT,
    past_details TEXT,
    house_gameplay TEXT,
    strongest_move TEXT,
    profession JSONB DEFAULT '[]'::jsonb,
    career_credits JSONB DEFAULT '[]'::jsonb,
    verified_social_handles JSONB DEFAULT '[]'::jsonb,
    structured_controversies JSONB DEFAULT '[]'::jsonb,
    primary_source_urls JSONB DEFAULT '[]'::jsonb,
    hinglish_profile JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. CONTESTANT SNAPSHOTS (Time-Series Metric Store)
CREATE TABLE IF NOT EXISTS public.contestant_snapshots (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contestant_id TEXT NOT NULL REFERENCES public.contestants(id) ON DELETE CASCADE,
    captured_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    week_number INTEGER NOT NULL,
    day_number INTEGER NOT NULL,
    raw_sentiment NUMERIC NOT NULL,
    true_organic_sentiment NUMERIC NOT NULL,
    pr_inflation_delta NUMERIC NOT NULL,
    pr_infiltration_rate NUMERIC NOT NULL,
    eviction_risk_tier TEXT NOT NULL CHECK (eviction_risk_tier IN ('Safe', 'Vocal Bubble / At Risk', 'High Danger')),
    eviction_probability NUMERIC NOT NULL,
    silent_majority_index NUMERIC NOT NULL,
    loud_minority_index NUMERIC NOT NULL,
    recent_narrative_edit TEXT NOT NULL,
    voting_trajectory TEXT NOT NULL,
    toss_trend_7d JSONB NOT NULL DEFAULT '[]'::jsonb,
    platforms JSONB NOT NULL DEFAULT '{}'::jsonb,
    detected_astroturf_patterns JSONB DEFAULT '[]'::jsonb
);

CREATE INDEX IF NOT EXISTS idx_snapshots_contestant_captured 
ON public.contestant_snapshots(contestant_id, captured_at DESC);

CREATE INDEX IF NOT EXISTS idx_snapshots_week_day 
ON public.contestant_snapshots(week_number, day_number);

-- 3. RAW ITEMS (Deduplicated Ingested Text)
CREATE TABLE IF NOT EXISTS public.raw_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_url TEXT NOT NULL UNIQUE,
    source_domain TEXT NOT NULL,
    title TEXT NOT NULL,
    text TEXT NOT NULL,
    fetched_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    published_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_raw_items_fetched 
ON public.raw_items(fetched_at DESC);

-- 4. FEED ITEMS (Curated Chronological Updates)
CREATE TABLE IF NOT EXISTS public.feed_items (
    id TEXT PRIMARY KEY,
    category TEXT NOT NULL CHECK (category IN ('Broadcaster Update', 'Nomination Alert', 'Task Outcome', 'Audience Sentiment Shift')),
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    source_url TEXT NOT NULL,
    source_domain TEXT NOT NULL,
    verified_by_broadcaster BOOLEAN NOT NULL DEFAULT false,
    involved_contestants JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_feed_items_created 
ON public.feed_items(created_at DESC);

-- 5. AUDIT CHAIN (Persisted Cryptographic Hash Chain)
CREATE TABLE IF NOT EXISTS public.audit_chain (
    index INTEGER PRIMARY KEY,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
    previous_hash TEXT NOT NULL,
    hash TEXT NOT NULL,
    event_type TEXT NOT NULL,
    summary TEXT NOT NULL,
    verified_source_domain TEXT,
    is_broadcaster_authorized BOOLEAN NOT NULL DEFAULT false
);

-- 6. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.contestants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contestant_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.raw_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feed_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_chain ENABLE ROW LEVEL SECURITY;

-- Allow public read access to all clients
CREATE POLICY "Public contestants are readable by all" ON public.contestants FOR SELECT USING (true);
CREATE POLICY "Public snapshots are readable by all" ON public.contestant_snapshots FOR SELECT USING (true);
CREATE POLICY "Public feed is readable by all" ON public.feed_items FOR SELECT USING (true);
CREATE POLICY "Public audit chain is readable by all" ON public.audit_chain FOR SELECT USING (true);

-- Restrict insertions/updates to service_role (backend worker / cron)
CREATE POLICY "Service role can manage contestants" ON public.contestants FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role can manage snapshots" ON public.contestant_snapshots FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role can manage raw items" ON public.raw_items FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role can manage feed items" ON public.feed_items FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role can manage audit chain" ON public.audit_chain FOR ALL USING (auth.role() = 'service_role');

