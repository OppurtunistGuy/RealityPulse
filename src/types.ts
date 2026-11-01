export type Platform = 'youtube' | 'xTwitter' | 'instagram' | 'threads' | 'googleNews';

export type RiskTier = 'Safe' | 'Vocal Bubble / At Risk' | 'High Danger';

export type EditType = 'Hero Edit' | 'Villain Edit' | 'Ghost Edit' | 'Neutral Edit';

export type Language = 'en' | 'hinglish';

export interface PlatformMetric {
  sentiment: number;      // 0 - 100
  organicRatio: number;   // 0.0 - 1.0 (portion deemed authentic)
  rawVolume: number;      // count of mentions/comments
  botCountEstimate: number;
  sampleSources?: string[]; // Specific source handles or links
}

export interface ContestantHinglish {
  bio: string;
  pastDetails: string;
  controversies: string[];
  houseGameplay: string;
  strongestMove: string;
}

export type ControversyClassification =
  | 'On-Screen House Event'
  | 'External Allegation'
  | 'Direct Quote'
  | 'Official Broadcaster Penalty'
  | 'Public Denial';

export interface StructuredControversy {
  title: string;
  classification: ControversyClassification;
  detail: string;
  sourceUrl?: string;
  sourceName?: string;
  verifiedAt?: string;
  verificationStatus: 'Verified by Broadcaster' | 'Corroborated by News' | 'Unconfirmed Claim';
}

export interface VerifiedSocialHandle {
  platform: 'Instagram' | 'X (Twitter)' | 'YouTube' | 'Threads';
  handle: string;
  url: string;
  followerCount?: string;
}

export interface SourceCitation {
  label: string;
  url: string;
  tier: 'Tier 1: Broadcaster' | 'Tier 2: API / Credits' | 'Tier 3: News' | 'Tier 4: Community';
  verifiedAt: string;
}

export interface Contestant {
  id: string;
  name: string;
  nickname: string;
  avatar: string;
  role: 'Frontrunner' | 'Challenger' | 'Underdog' | 'Wildcard' | 'Polarizing';
  status: 'Active' | 'Evicted';
  isNominated: boolean;
  evictionWeek?: number;            // 1, 2, 3, 4, etc. if evicted
  rawSentiment: number;             // 0 - 100
  trueOrganicSentiment: number;     // 0 - 100 (TOSS)
  prInflationDelta: number;         // raw - TOSS (positive = inflated by PR)
  prInfiltrationRate: number;       // 0 - 100%
  evictionRiskTier: RiskTier;
  evictionProbability: number;      // 0 - 100%
  silentMajorityIndex: number;      // Casual viewer support indicator (0 - 100)
  loudMinorityIndex: number;        // Vocal echo chamber ratio (0 - 100)
  platforms: {
    youtube: PlatformMetric;
    xTwitter: PlatformMetric;
    instagram: PlatformMetric;
    threads: PlatformMetric;
    googleNews: PlatformMetric;
  };
  detectedAstroturfPatterns: string[];
  recentNarrativeEdit: EditType;
  votingTrajectory: 'Rising' | 'Stable' | 'Plummeting' | 'Vocal Illusion';
  tossTrend7d: number[];            // 7 daily scores from Day 1 to Day 7
  bio: string;

  // Deep Contestant Dossier
  pastDetails?: string;             // Past career, origins, claim to fame
  controversies?: string[];         // Past public controversies & viral internet drama
  houseGameplay?: string;           // Strategy in BB house (alliances, habits, conflicts)
  strongestMove?: string;           // Defining strongest move / task performance in house
  hinglishProfile?: ContestantHinglish;

  // Verification & Provenance (Bigg Boss 20 Trusted Sources Guide)
  profession?: string[];
  careerCredits?: string[];
  verifiedSocialHandles?: VerifiedSocialHandle[];
  statusVerifiedAt?: string;
  statusVerificationSource?: string;
  verificationState?: 'Broadcaster Verified' | 'Corroborated' | 'Unconfirmed';
  primarySourceUrls?: SourceCitation[];
  structuredControversies?: StructuredControversy[];
}

export interface EvictedContestantTimelineItem {
  week: number;
  weekLabel: string;
  evictionDate: string;
  contestantId: string;
  name: string;
  nickname: string;
  avatar: string;
  daysInHouse: number;
  finalTossScore: number;
  finalPrDelta: number;
  evictionReason: string;
  prVsOrganicCollapse: string;
  headlineQuote: string;
  hinglishReason?: string;
  hinglishHeadline?: string;

  // Broadcaster Verification (Bigg Boss 20 Trusted Sources Guide)
  broadcasterVerificationUrl?: string;
  broadcasterVerifiedAt?: string;
  verificationState?: 'Broadcaster Confirmed' | 'Corroborated' | 'Unconfirmed';
}

export interface AstroturfCluster {
  id: string;
  contestantId: string;
  contestantName: string;
  templatePhrase: string;
  variations: string[];
  occurrences: number;
  similarityScore: number;          // e.g. 0.94 (MinHash / Levenshtein)
  accountVelocity: string;          // e.g. "54 accounts / 90 seconds"
  primarySource: 'X (Twitter)' | 'Instagram' | 'Threads' | 'YouTube Comments';
  accountAgeMedianDays: number;     // e.g. 4 days old accounts
  bipartiteRingId: string;
  status: 'Sanitized & Discounted';
}

export interface BipartiteNetworkNode {
  id: string;
  label: string;
  type: 'account_cluster' | 'contestant' | 'pr_agency';
  volume: number;
  riskWeight: number;
}

export interface BipartiteNetworkLink {
  source: string;
  target: string;
  weight: number;
  isAstroturf: boolean;
}

export interface EpisodeNarrative {
  episodeNumber: number;
  title: string;
  airDate: string;
  hostFocus: string;
  broadcastThemes: string[];
  contestantEdits: {
    contestantId: string;
    contestantName: string;
    editType: EditType;
    airtimeMinutes: number;
    intendedPerception: string;
    organicPublicVerdict: string;
    receptionDelta: number;         // +20 (public defended) to -35 (backlash)
  }[];
  conflictPairs: {
    id: string;
    contestantA: string;
    contestantB: string;
    incident: string;
    producerFraming: string;
    organicAudienceWinner: string;
  }[];
  organicDriftSummary: string;
}

export interface GroundingSource {
  title: string;
  url: string;
  snippet?: string;
}

export interface GroundedIntelligenceResult {
  query: string;
  summaryText: string;
  sources: GroundingSource[];
  webQueries: string[];
  timestamp: string;
}

export interface PlatformWeightConfig {
  youtube: number;    // default 0.35 (Mass casual silent majority)
  googleNews: number; // default 0.15 (Mainstream editorial baseline)
  xTwitter: number;   // default 0.20 (Real-time speed, high bot risk)
  instagram: number;  // default 0.15 (Fandom reels & lifestyle bots)
  threads: number;    // default 0.15 (Meta organic microblogging conversations)
}

export interface SourceProvenanceItem {
  platform: 'X (Twitter)' | 'Instagram' | 'Threads' | 'YouTube' | 'Google News & Media';
  icon: string;
  description: string;
  verifiedFeedsAndHandles: {
    name: string;
    identifier: string;
    role: string;
    estimatedDailyVolume: string;
  }[];
  samplingMethodology: string;
  prRiskProfile: string;
}
