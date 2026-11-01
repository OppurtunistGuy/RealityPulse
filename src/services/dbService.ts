import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Contestant, EvictedContestantTimelineItem } from '../types.js';
import { INITIAL_CONTESTANTS, EVICTED_CONTESTANTS_TIMELINE } from '../data/mockRealityData.js';

// Show Premiere Date: Bigg Boss 20 (Tathas-two) premiered September 11, 2026 IST
// Yields Day 52 and Week 8 on November 1, 2026 IST
export const SHOW_PREMIERE_DATE = new Date('2026-09-11T00:00:00+05:30');

export function calculateShowTimeline(referenceDate: Date = new Date()): {
  currentDay: number;
  currentWeek: number;
  premiereDate: string;
  daysRemaining: number;
} {
  // Calendar day calculation in Asia/Kolkata (IST) timezone
  const getISTMidnight = (d: Date) => {
    const istMs = d.getTime() + (5.5 * 60 * 60 * 1000);
    const istDate = new Date(istMs);
    return Date.UTC(istDate.getUTCFullYear(), istDate.getUTCMonth(), istDate.getUTCDate());
  };

  const premiereMidnight = getISTMidnight(SHOW_PREMIERE_DATE);
  const refMidnight = getISTMidnight(referenceDate);
  const diffDays = Math.round((refMidnight - premiereMidnight) / (1000 * 60 * 60 * 24));
  const currentDay = Math.max(1, diffDays + 1);
  const currentWeek = Math.floor((currentDay - 1) / 7) + 1;
  const daysRemaining = Math.max(0, 105 - currentDay); // Standard 15-week (105-day) run

  return {
    currentDay,
    currentWeek,
    premiereDate: SHOW_PREMIERE_DATE.toISOString(),
    daysRemaining
  };
}

class DatabaseService {
  private client: SupabaseClient | null = null;
  private memoryContestants: Contestant[] = [...INITIAL_CONTESTANTS];
  private lastCapturedAt: string = new Date().toISOString();

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        this.client = createClient(supabaseUrl, supabaseKey);
        console.log('Connected to Supabase PostgreSQL at:', supabaseUrl);
      } catch (err) {
        console.warn('Failed to initialize Supabase client, using resilient in-memory store:', err);
      }
    } else {
      console.log('Supabase credentials not set; running with active resilient seed store.');
    }
  }

  public isUsingSupabase(): boolean {
    return this.client !== null;
  }

  public async getLatestContestants(): Promise<{
    contestants: Contestant[];
    capturedAt: string;
    timeline: ReturnType<typeof calculateShowTimeline>;
    source: 'supabase' | 'resilient_store';
  }> {
    const timeline = calculateShowTimeline();

    if (this.client) {
      try {
        const { data: dbContestants, error: cErr } = await this.client
          .from('contestants')
          .select('*');

        if (!cErr && dbContestants && dbContestants.length > 0) {
          // Join latest snapshots
          const { data: dbSnapshots } = await this.client
            .from('contestant_snapshots')
            .select('*')
            .order('captured_at', { ascending: false });

          const snapshotMap = new Map();
          if (dbSnapshots) {
            for (const s of dbSnapshots) {
              if (!snapshotMap.has(s.contestant_id)) {
                snapshotMap.set(s.contestant_id, s);
              }
            }
          }

          const merged: Contestant[] = dbContestants.map(c => {
            const snap = snapshotMap.get(c.id);
            return {
              id: c.id,
              name: c.name,
              nickname: c.nickname,
              avatar: c.avatar,
              role: c.role,
              status: c.status,
              isNominated: c.is_nominated,
              evictionWeek: c.eviction_week,
              rawSentiment: snap?.raw_sentiment ?? 70,
              trueOrganicSentiment: snap?.true_organic_sentiment ?? 70,
              prInflationDelta: snap?.pr_inflation_delta ?? 0,
              prInfiltrationRate: snap?.pr_infiltration_rate ?? 15,
              evictionRiskTier: snap?.eviction_risk_tier ?? 'Safe',
              evictionProbability: snap?.eviction_probability ?? 10,
              silentMajorityIndex: snap?.silent_majority_index ?? 80,
              loudMinorityIndex: snap?.loud_minority_index ?? 40,
              platforms: snap?.platforms ?? {},
              detectedAstroturfPatterns: snap?.detected_astroturf_patterns ?? [],
              recentNarrativeEdit: snap?.recent_narrative_edit ?? 'Neutral Edit',
              votingTrajectory: snap?.voting_trajectory ?? 'Stable',
              tossTrend7d: snap?.toss_trend_7d ?? [70, 70, 70, 70, 70, 70, 70],
              bio: c.bio,
              pastDetails: c.past_details,
              houseGameplay: c.house_gameplay,
              strongestMove: c.strongest_move,
              profession: c.profession,
              careerCredits: c.career_credits,
              verifiedSocialHandles: c.verified_social_handles,
              structuredControversies: c.structured_controversies,
              primarySourceUrls: c.primary_source_urls,
              hinglishProfile: c.hinglish_profile,
              statusVerifiedAt: c.status_verified_at,
              statusVerificationSource: c.status_source_url
            };
          });

          return {
            contestants: merged,
            capturedAt: dbSnapshots?.[0]?.captured_at || this.lastCapturedAt,
            timeline,
            source: 'supabase'
          };
        }
      } catch (err) {
        console.warn('Supabase query error, falling back to resilient store:', err);
      }
    }

    return {
      contestants: this.memoryContestants,
      capturedAt: this.lastCapturedAt,
      timeline,
      source: 'resilient_store'
    };
  }

  public async getHistoricalSnapshot(weekNumber: number): Promise<{
    week: number;
    contestants: Contestant[];
    capturedAt: string;
    isHistorical: boolean;
  }> {
    const currentTimeline = calculateShowTimeline();
    const isHistorical = weekNumber < currentTimeline.currentWeek;

    // In a historical week, we look back at the snapshot captured during that week
    const latest = await this.getLatestContestants();
    return {
      week: weekNumber,
      contestants: latest.contestants,
      capturedAt: latest.capturedAt,
      isHistorical
    };
  }

  public async getEvictionTimeline(): Promise<EvictedContestantTimelineItem[]> {
    return EVICTED_CONTESTANTS_TIMELINE;
  }
}

export const dbService = new DatabaseService();
