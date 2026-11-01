import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';
import { BB20_LOCKED_CONTESTANTS } from '../src/data/bb20ContestantsStatic.js';
import { calculateShowTimeline } from '../src/services/dbService.js';

dotenv.config();
dotenv.config({ path: '.env.local' });

async function seed() {
  const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;

  if (!databaseUrl) {
    console.error('ERROR: Missing DATABASE_URL environment variable.');
    console.error('Please configure your Neon connection string: export DATABASE_URL="postgresql://user:pass@ep-xyz.neon.tech/neondb?sslmode=require"');
    process.exit(1);
  }

  const sql = neon(databaseUrl);
  console.log('Connecting to Neon PostgreSQL...');

  // 1. Create Tables If Not Existing
  console.log('Creating database schema if not present...');
  await sql`
    CREATE TABLE IF NOT EXISTS contestants (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      nickname TEXT NOT NULL,
      avatar TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'Contestant',
      status TEXT NOT NULL DEFAULT 'Active' CHECK (status IN ('Active', 'Evicted', 'Guest', 'Wildcard')),
      is_nominated BOOLEAN NOT NULL DEFAULT false,
      entry_date TIMESTAMPTZ NOT NULL DEFAULT '2026-09-06T00:00:00+05:30',
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
  `;

  await sql`
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
  `;

  const timeline = calculateShowTimeline();
  console.log(`Current Show State: Day ${timeline.currentDay}, Week ${timeline.currentWeek}`);
  console.log(`Upserting ${BB20_LOCKED_CONTESTANTS.length} Season 20 contestants...`);

  for (const c of BB20_LOCKED_CONTESTANTS) {
    // 1. Upsert Contestant
    await sql`
      INSERT INTO contestants (
        id, name, nickname, avatar, role, status, is_nominated, eviction_week,
        bio, past_details, house_gameplay, strongest_move,
        profession, career_credits, verified_social_handles, structured_controversies,
        primary_source_urls, hinglish_profile, status_verified_at, status_source_url
      ) VALUES (
        ${c.id}, ${c.name}, ${c.nickname}, ${c.avatar}, ${c.role}, ${c.status}, ${c.isNominated}, ${c.evictionWeek ?? null},
        ${c.bio}, ${c.pastDetails ?? null}, ${c.houseGameplay ?? null}, ${c.strongestMove ?? null},
        ${JSON.stringify(c.profession ?? [])}, ${JSON.stringify(c.careerCredits ?? [])},
        ${JSON.stringify(c.verifiedSocialHandles ?? [])}, ${JSON.stringify(c.structuredControversies ?? [])},
        ${JSON.stringify(c.primarySourceUrls ?? [])}, ${JSON.stringify(c.hinglishProfile ?? null)},
        ${c.statusVerifiedAt ?? new Date().toISOString()}, ${c.statusVerificationSource ?? null}
      )
      ON CONFLICT (id) DO UPDATE SET
        name = EXCLUDED.name,
        nickname = EXCLUDED.nickname,
        avatar = EXCLUDED.avatar,
        role = EXCLUDED.role,
        status = EXCLUDED.status,
        is_nominated = EXCLUDED.is_nominated,
        eviction_week = EXCLUDED.eviction_week,
        bio = EXCLUDED.bio,
        past_details = EXCLUDED.past_details,
        house_gameplay = EXCLUDED.house_gameplay,
        strongest_move = EXCLUDED.strongest_move,
        profession = EXCLUDED.profession,
        career_credits = EXCLUDED.career_credits,
        verified_social_handles = EXCLUDED.verified_social_handles,
        structured_controversies = EXCLUDED.structured_controversies,
        primary_source_urls = EXCLUDED.primary_source_urls,
        hinglish_profile = EXCLUDED.hinglish_profile,
        status_verified_at = EXCLUDED.status_verified_at,
        status_source_url = EXCLUDED.status_source_url,
        updated_at = now();
    `;

    // 2. Insert Snapshot
    await sql`
      INSERT INTO contestant_snapshots (
        contestant_id, captured_at, week_number, day_number,
        raw_sentiment, true_organic_sentiment, pr_inflation_delta, pr_infiltration_rate,
        eviction_risk_tier, eviction_probability, silent_majority_index, loud_minority_index,
        recent_narrative_edit, voting_trajectory, toss_trend_7d, platforms, detected_astroturf_patterns
      ) VALUES (
        ${c.id}, now(), ${timeline.currentWeek}, ${timeline.currentDay},
        ${c.rawSentiment}, ${c.trueOrganicSentiment}, ${c.prInflationDelta}, ${c.prInfiltrationRate},
        ${c.evictionRiskTier}, ${c.evictionProbability}, ${c.silentMajorityIndex}, ${c.loudMinorityIndex},
        ${c.recentNarrativeEdit}, ${c.votingTrajectory}, ${JSON.stringify(c.tossTrend7d)},
        ${JSON.stringify(c.platforms)}, ${JSON.stringify(c.detectedAstroturfPatterns)}
      );
    `;
  }

  // 3. Query contestants count
  const countResult = (await sql`SELECT count(*)::int as count FROM contestants`) as any[];
  const rowCount = countResult[0]?.count ?? 0;

  // 4. Query sample full row
  const sampleRows = (await sql`SELECT * FROM contestants ORDER BY id ASC LIMIT 1`) as any[];
  const sampleRow = sampleRows[0];

  console.log('\n=============================================');
  console.log('NEON POSTGRESQL DIRECT QUERY VERIFICATION');
  console.log('=============================================');
  console.log(`TOTAL CONTESTANTS ROW COUNT: ${rowCount}`);
  console.log('\nSAMPLE FULL CONTESTANT ROW (c1):');
  console.log(JSON.stringify(sampleRow, null, 2));
  console.log('=============================================\n');
}

seed().catch(err => {
  console.error('Seed script error:', err);
  process.exit(1);
});

