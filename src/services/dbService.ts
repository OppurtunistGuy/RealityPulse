import { neon, NeonQueryFunction } from '@neondatabase/serverless';
import { Contestant, EvictedContestantTimelineItem } from '../types.js';
import { BB20_LOCKED_CONTESTANTS, BB20_LOCKED_EVICTED_TIMELINE } from '../data/bb20ContestantsStatic.js';
import { SHOW_PREMIERE_DATE, calculateShowTimeline } from '../data/timelineConfig.js';

export { SHOW_PREMIERE_DATE, calculateShowTimeline };

class DatabaseService {
  private sql: NeonQueryFunction<false, false> | null = null;
  private memoryContestants: Contestant[] = [...BB20_LOCKED_CONTESTANTS];
  private lastCapturedAt: string = new Date().toISOString();

  private getSql(): NeonQueryFunction<false, false> | null {
    if (this.sql) return this.sql;
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;

    if (databaseUrl) {
      try {
        this.sql = neon(databaseUrl);
        console.log('Connected to Neon PostgreSQL using DATABASE_URL.');
      } catch (err) {
        console.warn('Failed to initialize Neon client, using resilient in-memory store:', err);
      }
    }
    return this.sql;
  }

  public isUsingNeon(): boolean {
    return this.getSql() !== null;
  }

  public async getLatestContestants(): Promise<{
    contestants: Contestant[];
    capturedAt: string;
    timeline: ReturnType<typeof calculateShowTimeline>;
    source: 'neon' | 'resilient_store';
  }> {
    const timeline = calculateShowTimeline();
    const sqlClient = this.getSql();

    if (sqlClient) {
      try {
        const dbContestants = (await sqlClient`SELECT * FROM contestants ORDER BY id ASC`) as any[];

        if (dbContestants && dbContestants.length > 0) {
          const dbSnapshots = (await sqlClient`SELECT * FROM contestant_snapshots ORDER BY captured_at DESC`) as any[];

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
                  isNominated: Boolean(c.is_nominated),
                  evictionWeek: c.eviction_week ?? undefined,
                  rawSentiment: Number(snap?.raw_sentiment ?? 70),
                  trueOrganicSentiment: Number(snap?.true_organic_sentiment ?? 70),
                  prInflationDelta: Number(snap?.pr_inflation_delta ?? 0),
                  prInfiltrationRate: Number(snap?.pr_infiltration_rate ?? 15),
                  evictionRiskTier: snap?.eviction_risk_tier ?? 'Safe',
                  evictionProbability: Number(snap?.eviction_probability ?? 10),
                  silentMajorityIndex: Number(snap?.silent_majority_index ?? 80),
                  loudMinorityIndex: Number(snap?.loud_minority_index ?? 40),
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
            source: 'neon'
              };
            }
          } catch (err) {
            console.warn('Neon query error, falling back to resilient store:', err);
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

    if (!isHistorical) {
      const latest = await this.getLatestContestants();
      return {
        week: currentTimeline.currentWeek,
        contestants: latest.contestants,
        capturedAt: latest.capturedAt,
        isHistorical: false
      };
    }

    // Historical timestamp aligned to the end of selected week
    const historicalTimeMs = SHOW_PREMIERE_DATE.getTime() + (weekNumber * 7 * 24 * 60 * 60 * 1000);
    const capturedAt = new Date(historicalTimeMs).toISOString();

    // Week-specific nomination rosters
    const WEEK_NOMINATIONS: Record<number, string[]> = {
      1: ['c6', 'c10', 'c14', 'c16'],
      2: ['c7', 'c8', 'c14', 'c15'],
      3: ['c9', 'c11', 'c15', 'c18'],
      4: ['c8', 'c12', 'c16', 'c18'],
      5: ['c1', 'c8', 'c10', 'c17', 'c18'],
      6: ['c6', 'c7', 'c11', 'c12', 'c18'],
      7: ['c1', 'c5', 'c8', 'c10'],
      8: ['c1', 'c8', 'c9', 'c10', 'c11', 'c12']
    };

    const weekNominees = WEEK_NOMINATIONS[weekNumber] || [];

    // Transform full roster to reflect house state during selected historical week
    const historicalContestants: Contestant[] = BB20_LOCKED_CONTESTANTS.map((c) => {
      // Entry restrictions: Wildcards entered Week 5 (Day 35)
      const isWildcardPreEntry = (c.id === 'c13' || c.id === 'c17') && weekNumber < 5;
      
      let status: 'Active' | 'Evicted' = 'Active';
      let isNominated = false;
      let evictionProbability = 8;
      let evictionRiskTier: Contestant['evictionRiskTier'] = 'Safe';
      let toss = c.trueOrganicSentiment;

      if (isWildcardPreEntry) {
        status = 'Evicted'; // Not yet in house
        isNominated = false;
      } else if (c.evictionWeek && c.evictionWeek < weekNumber) {
        // Evicted in an earlier week
        status = 'Evicted';
        isNominated = false;
        evictionProbability = 100;
        evictionRiskTier = 'High Danger';
      } else if (c.evictionWeek === weekNumber) {
        // Active and facing elimination this exact week
        status = 'Active';
        isNominated = true;
        evictionProbability = 46 + (c.id.charCodeAt(1) % 8);
        evictionRiskTier = 'High Danger';
        toss = Math.min(toss, 42);
      } else {
        // Active throughout this week
        status = 'Active';
        isNominated = weekNominees.includes(c.id);
        if (isNominated) {
          evictionProbability = 18 + (c.id.charCodeAt(1) % 12);
          evictionRiskTier = c.prInfiltrationRate > 30 ? 'Vocal Bubble / At Risk' : 'Safe';
        } else {
          evictionProbability = 4;
          evictionRiskTier = 'Safe';
        }
      }

      // Mary Kom had peak organic leadership in weeks 1-6
      if (c.id === 'c5' && weekNumber <= 6) {
        toss = 94;
        evictionRiskTier = 'Safe';
        evictionProbability = 3;
      }

      return {
        ...c,
        status,
        isNominated,
        trueOrganicSentiment: toss,
        evictionProbability,
        evictionRiskTier
      };
    });

    return {
      week: weekNumber,
      contestants: historicalContestants,
      capturedAt,
      isHistorical: true
    };
  }

  public async getEvictionTimeline(): Promise<EvictedContestantTimelineItem[]> {
    return BB20_LOCKED_EVICTED_TIMELINE;
  }
}

export const dbService = new DatabaseService();
