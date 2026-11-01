-- ====================================================================
-- RealityPulse Database Schema for Neon PostgreSQL
-- ====================================================================

-- 1. CONTESTANTS TABLE
CREATE TABLE IF NOT EXISTS contestants (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    nickname TEXT NOT NULL,
    avatar TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'Contestant',
    status TEXT NOT NULL DEFAULT 'Active' CHECK (status IN ('Active', 'Evicted', 'Guest', 'Wildcard')),
    is_nominated BOOLEAN NOT NULL DEFAULT false,
    entry_date TIMESTAMPTZ NOT NULL DEFAULT '2026-09-11T00:00:00+05:30',
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
CREATE TABLE IF NOT EXISTS contestant_snapshots (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contestant_id TEXT NOT NULL REFERENCES contestants(id) ON DELETE CASCADE,
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
ON contestant_snapshots(contestant_id, captured_at DESC);

CREATE INDEX IF NOT EXISTS idx_snapshots_week_day 
ON contestant_snapshots(week_number, day_number);

-- 3. RAW ITEMS (Deduplicated Ingested Text)
CREATE TABLE IF NOT EXISTS raw_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_url TEXT NOT NULL UNIQUE,
    source_domain TEXT NOT NULL,
    title TEXT NOT NULL,
    text TEXT NOT NULL,
    fetched_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    published_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_raw_items_fetched 
ON raw_items(fetched_at DESC);

-- 4. FEED ITEMS (Curated Chronological Updates)
CREATE TABLE IF NOT EXISTS feed_items (
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
ON feed_items(created_at DESC);

-- 5. AUDIT CHAIN (Persisted Cryptographic Hash Chain)
CREATE TABLE IF NOT EXISTS audit_chain (
    index INTEGER PRIMARY KEY,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
    previous_hash TEXT NOT NULL,
    hash TEXT NOT NULL,
    event_type TEXT NOT NULL,
    summary TEXT NOT NULL,
    verified_source_domain TEXT,
    is_broadcaster_authorized BOOLEAN NOT NULL DEFAULT false
);

