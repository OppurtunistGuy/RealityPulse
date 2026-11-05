import { Contestant, PlatformWeightConfig, RiskTier } from '../types';

export const DEFAULT_PLATFORM_WEIGHTS: PlatformWeightConfig = {
  youtube: 0.35,    // Mass market casual silent majority (less bot-heavy)
  googleNews: 0.15, // Editorial / journalistic baseline & press coverage
  xTwitter: 0.20,   // Real-time speed, high bot farm & paid hashtag risk
  instagram: 0.15,  // High fandom, reel comments, aesthetic bots
  threads: 0.15     // Meta conversational threads, casual user hot takes
};

/**
 * Calculates the True Organic Sentiment Score (TOSS) using:
 * TOSS = sum(platform.sentiment * platform.organicRatio * weight) / sum(organicRatio * weight)
 */
export function calculateTOSS(
  contestant: Contestant,
  weights: PlatformWeightConfig = DEFAULT_PLATFORM_WEIGHTS
): {
  toss: number;
  raw: number;
  prDelta: number;
  riskTier: RiskTier;
  evictionProbability: number | null;
  insufficientData?: boolean;
} {
  const p = contestant.platforms;

  // Ingested platform volume verification
  const totalSocialVolume =
    (p.youtube?.rawVolume || 0) +
    (p.xTwitter?.rawVolume || 0) +
    (p.instagram?.rawVolume || 0) +
    (p.threads?.rawVolume || 0);

  // If marked insufficientData or social sample volume is below statistical confidence threshold (< 1000 comments)
  if (contestant.insufficientData || totalSocialVolume < 1000) {
    return {
      toss: contestant.trueOrganicSentiment || 50,
      raw: contestant.rawSentiment || 50,
      prDelta: (contestant.rawSentiment || 50) - (contestant.trueOrganicSentiment || 50),
      riskTier: 'Safe',
      evictionProbability: null,
      insufficientData: true
    };
  }

  // Raw weighted sentiment (what naive dashboards report)
  const rawWeighted =
    p.youtube.sentiment * weights.youtube +
    p.googleNews.sentiment * weights.googleNews +
    p.xTwitter.sentiment * weights.xTwitter +
    p.instagram.sentiment * weights.instagram +
    (p.threads ? p.threads.sentiment * weights.threads : 0);

  // PR-Sanitized Organic Sentiment:
  // We discount each platform by its verified organic authenticity ratio
  const organicYoutube = p.youtube.sentiment * p.youtube.organicRatio * weights.youtube;
  const organicNews = p.googleNews.sentiment * p.googleNews.organicRatio * weights.googleNews;
  const organicX = p.xTwitter.sentiment * p.xTwitter.organicRatio * weights.xTwitter;
  const organicInsta = p.instagram.sentiment * p.instagram.organicRatio * weights.instagram;
  const organicThreads = p.threads ? p.threads.sentiment * p.threads.organicRatio * weights.threads : 0;

  const totalOrganicWeight =
    p.youtube.organicRatio * weights.youtube +
    p.googleNews.organicRatio * weights.googleNews +
    p.xTwitter.organicRatio * weights.xTwitter +
    p.instagram.organicRatio * weights.instagram +
    (p.threads ? p.threads.organicRatio * weights.threads : 0);

  const raw = Math.round(rawWeighted);
  const toss = Math.round(
    totalOrganicWeight > 0
      ? (organicYoutube + organicNews + organicX + organicInsta + organicThreads) / totalOrganicWeight
      : rawWeighted
  );

  const prDelta = raw - toss;

  // Continuous Eviction Vulnerability Model (NO HARDCODED CONSTANTS):
  // Driven strictly by organic sentiment deficit, PR bubble inflation delta, and silent majority vote bank.
  const prInfiltration = contestant.prInfiltrationRate ?? 20;
  const silentMajority = contestant.silentMajorityIndex ?? 50;

  // PR Bubble Risk: high PR noise without mass casual voting backing
  const bubbleRisk = Math.max(0, prInfiltration - silentMajority);

  // Continuous baseline vulnerability:
  // Primary driver in voting eviction is lack of casual silent majority turnout + low organic sentiment + hollow PR bubble
  const voteDeficit = (100 - silentMajority) * 0.50;
  const organicDeficit = (100 - toss) * 0.35;
  const bubbleDeficit = bubbleRisk * 0.25;
  const continuousBase = voteDeficit + organicDeficit + bubbleDeficit;

  // Nomination multiplier: active voting window amplifies immediate eviction hazard
  const activeMultiplier = contestant.isNominated ? 1.15 : 0.70;
  const computedProbability = Math.min(98, Math.max(5, Math.round(continuousBase * activeMultiplier)));

  // Risk Tier classification derived dynamically from computed probability
  let riskTier: RiskTier = 'Safe';
  if (toss < 35 || silentMajority < 20 || computedProbability >= 70) {
    riskTier = 'High Danger';
  } else if (prInfiltration >= 48 && silentMajority < 45) {
    riskTier = 'Vocal Bubble / At Risk';
  } else if (computedProbability >= 35) {
    riskTier = 'Vocal Bubble / At Risk';
  } else {
    riskTier = 'Safe';
  }

  return {
    toss,
    raw,
    prDelta,
    riskTier,
    evictionProbability: computedProbability,
    insufficientData: false
  };
}

/**
 * Fast Levenshtein distance string similarity (0.0 to 1.0)
 */
export function stringSimilarity(a: string, b: string): number {
  const s1 = a.toLowerCase().trim();
  const s2 = b.toLowerCase().trim();
  if (s1 === s2) return 1.0;
  if (!s1.length || !s2.length) return 0.0;

  const track = Array(s2.length + 1)
    .fill(null)
    .map(() => Array(s1.length + 1).fill(null));

  for (let i = 0; i <= s1.length; i += 1) {
    track[0][i] = i;
  }
  for (let j = 0; j <= s2.length; j += 1) {
    track[j][0] = j;
  }

  for (let j = 1; j <= s2.length; j += 1) {
    for (let i = 1; i <= s1.length; i += 1) {
      const indicator = s1[i - 1] === s2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1, // deletion
        track[j - 1][i] + 1, // insertion
        track[j - 1][i - 1] + indicator // substitution
      );
    }
  }

  const distance = track[s2.length][s1.length];
  const maxLen = Math.max(s1.length, s2.length);
  return Number((1 - distance / maxLen).toFixed(2));
}

/**
 * Client-side duplicate template detector for raw comments
 */
export function findCommentClusters(comments: string[], threshold = 0.65) {
  const clusters: { representative: string; count: number; matches: string[] }[] = [];
  const assigned = new Set<number>();

  for (let i = 0; i < comments.length; i++) {
    if (assigned.has(i)) continue;
    const current = comments[i];
    const matches: string[] = [current];
    assigned.add(i);

    for (let j = i + 1; j < comments.length; j++) {
      if (assigned.has(j)) continue;
      const sim = stringSimilarity(current, comments[j]);
      if (sim >= threshold) {
        matches.push(comments[j]);
        assigned.add(j);
      }
    }

    if (matches.length > 1) {
      clusters.push({
        representative: current,
        count: matches.length,
        matches
      });
    }
  }

  return clusters.sort((a, b) => b.count - a.count);
}
