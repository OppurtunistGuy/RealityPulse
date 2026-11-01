import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateTOSS,
  stringSimilarity,
  findCommentClusters,
  DEFAULT_PLATFORM_WEIGHTS
} from './analyticsEngine.js';
import { Contestant, PlatformWeightConfig } from '../types.js';

describe('Analytics Engine - calculateTOSS (Edge-to-Edge Hard Tests)', () => {
  const createMockContestant = (overrides?: Partial<Contestant>): Contestant => ({
    id: 'test-1',
    name: 'Contestant Alpha',
    nickname: 'Alpha',
    avatar: 'https://example.com/avatar.jpg',
    role: 'Frontrunner',
    status: 'Active',
    isNominated: true,
    rawSentiment: 75,
    trueOrganicSentiment: 70,
    prInflationDelta: 5,
    prInfiltrationRate: 20,
    evictionRiskTier: 'Safe',
    evictionProbability: 10,
    silentMajorityIndex: 75,
    loudMinorityIndex: 40,
    recentNarrativeEdit: 'Hero Edit',
    votingTrajectory: 'Rising',
    tossTrend7d: [65, 66, 68, 70, 72, 74, 75],
    bio: 'Test bio',
    pastDetails: 'Test past details',
    controversies: ['Test controversy'],
    houseGameplay: 'Test house gameplay',
    strongestMove: 'Test strongest move',
    detectedAstroturfPatterns: [],
    platforms: {
      youtube: { sentiment: 80, organicRatio: 0.9, rawVolume: 10000, botCountEstimate: 500 },
      xTwitter: { sentiment: 90, organicRatio: 0.4, rawVolume: 50000, botCountEstimate: 15000 },
      instagram: { sentiment: 85, organicRatio: 0.6, rawVolume: 20000, botCountEstimate: 4000 },
      threads: { sentiment: 75, organicRatio: 0.85, rawVolume: 5000, botCountEstimate: 300 },
      googleNews: { sentiment: 70, organicRatio: 0.95, rawVolume: 500, botCountEstimate: 10 }
    },
    ...overrides
  });

  it('correctly calculates raw vs sanitized TOSS and PR delta under standard weights', () => {
    const contestant = createMockContestant();
    const result = calculateTOSS(contestant);

    assert.equal(typeof result.toss, 'number');
    assert.equal(typeof result.raw, 'number');
    assert.equal(result.prDelta, result.raw - result.toss);
    assert.ok(result.toss >= 0 && result.toss <= 100);
    assert.ok(result.raw >= 0 && result.raw <= 100);
    // Twitter has 90 sentiment with only 0.4 organic ratio, so raw should exceed TOSS
    assert.ok(result.raw >= result.toss, 'Raw sentiment should be higher due to bot inflation on Twitter');
  });

  it('handles edge case: zero organic ratio across all platforms without divide-by-zero', () => {
    const zeroOrganic = createMockContestant({
      platforms: {
        youtube: { sentiment: 80, organicRatio: 0, rawVolume: 1000, botCountEstimate: 1000 },
        xTwitter: { sentiment: 90, organicRatio: 0, rawVolume: 1000, botCountEstimate: 1000 },
        instagram: { sentiment: 85, organicRatio: 0, rawVolume: 1000, botCountEstimate: 1000 },
        threads: { sentiment: 75, organicRatio: 0, rawVolume: 1000, botCountEstimate: 1000 },
        googleNews: { sentiment: 70, organicRatio: 0, rawVolume: 1000, botCountEstimate: 1000 }
      }
    });

    const result = calculateTOSS(zeroOrganic);
    assert.ok(!Number.isNaN(result.toss), 'TOSS should not be NaN');
    assert.ok(!Number.isNaN(result.raw), 'Raw should not be NaN');
    assert.equal(result.toss, result.raw, 'When all organic ratios are 0, fallback to raw weighted');
  });

  it('handles edge case: 100% organic ratio (TOSS equals raw, prDelta = 0)', () => {
    const pureOrganic = createMockContestant({
      platforms: {
        youtube: { sentiment: 85, organicRatio: 1.0, rawVolume: 10000, botCountEstimate: 0 },
        xTwitter: { sentiment: 85, organicRatio: 1.0, rawVolume: 10000, botCountEstimate: 0 },
        instagram: { sentiment: 85, organicRatio: 1.0, rawVolume: 10000, botCountEstimate: 0 },
        threads: { sentiment: 85, organicRatio: 1.0, rawVolume: 10000, botCountEstimate: 0 },
        googleNews: { sentiment: 85, organicRatio: 1.0, rawVolume: 10000, botCountEstimate: 0 }
      }
    });

    const result = calculateTOSS(pureOrganic);
    assert.equal(result.raw, 85);
    assert.equal(result.toss, 85);
    assert.equal(result.prDelta, 0);
  });

  it('handles extreme sentiment bounds (0 and 100)', () => {
    const zeroSentiment = createMockContestant({
      platforms: {
        youtube: { sentiment: 0, organicRatio: 0.9, rawVolume: 1000, botCountEstimate: 10 },
        xTwitter: { sentiment: 0, organicRatio: 0.8, rawVolume: 1000, botCountEstimate: 10 },
        instagram: { sentiment: 0, organicRatio: 0.7, rawVolume: 1000, botCountEstimate: 10 },
        threads: { sentiment: 0, organicRatio: 0.8, rawVolume: 1000, botCountEstimate: 10 },
        googleNews: { sentiment: 0, organicRatio: 0.9, rawVolume: 1000, botCountEstimate: 10 }
      }
    });
    const zeroResult = calculateTOSS(zeroSentiment);
    assert.equal(zeroResult.toss, 0);
    assert.equal(zeroResult.raw, 0);

    const maxSentiment = createMockContestant({
      platforms: {
        youtube: { sentiment: 100, organicRatio: 0.9, rawVolume: 1000, botCountEstimate: 10 },
        xTwitter: { sentiment: 100, organicRatio: 0.8, rawVolume: 1000, botCountEstimate: 10 },
        instagram: { sentiment: 100, organicRatio: 0.7, rawVolume: 1000, botCountEstimate: 10 },
        threads: { sentiment: 100, organicRatio: 0.8, rawVolume: 1000, botCountEstimate: 10 },
        googleNews: { sentiment: 100, organicRatio: 0.9, rawVolume: 1000, botCountEstimate: 10 }
      }
    });
    const maxResult = calculateTOSS(maxSentiment);
    assert.equal(maxResult.toss, 100);
    assert.equal(maxResult.raw, 100);
  });

  it('computes continuous eviction probability without hardcoded constants, varying with organic sentiment and PR noise', () => {
    const nonNominated = createMockContestant({
      isNominated: false,
      prInfiltrationRate: 85,
      silentMajorityIndex: 10,
      platforms: {
        youtube: { sentiment: 60, organicRatio: 0.8, rawVolume: 10000, botCountEstimate: 500 },
        xTwitter: { sentiment: 70, organicRatio: 0.5, rawVolume: 15000, botCountEstimate: 5000 },
        instagram: { sentiment: 65, organicRatio: 0.6, rawVolume: 12000, botCountEstimate: 3000 },
        threads: { sentiment: 60, organicRatio: 0.8, rawVolume: 5000, botCountEstimate: 200 },
        googleNews: { sentiment: 60, organicRatio: 0.9, rawVolume: 500, botCountEstimate: 10 }
      }
    });
    const result = calculateTOSS(nonNominated);
    assert.notEqual(result.evictionProbability, 4, 'Must not be a flat 4% constant');
    assert.ok(typeof result.evictionProbability === 'number');
    assert.equal(result.insufficientData, false);
  });

  it('flags insufficientData and sets evictionProbability to null when platform volume is below threshold', () => {
    const lowVolume = createMockContestant({
      platforms: {
        youtube: { sentiment: 80, organicRatio: 0.9, rawVolume: 100, botCountEstimate: 5 },
        xTwitter: { sentiment: 75, organicRatio: 0.8, rawVolume: 50, botCountEstimate: 2 },
        instagram: { sentiment: 70, organicRatio: 0.7, rawVolume: 80, botCountEstimate: 4 },
        threads: { sentiment: 65, organicRatio: 0.8, rawVolume: 40, botCountEstimate: 1 },
        googleNews: { sentiment: 70, organicRatio: 0.9, rawVolume: 10, botCountEstimate: 0 }
      }
    });
    const result = calculateTOSS(lowVolume);
    assert.equal(result.insufficientData, true);
    assert.equal(result.evictionProbability, null);
  });

  it('triggers High Danger tier when TOSS < 35 or silentMajority < 20', () => {
    const lowToss = createMockContestant({
      isNominated: true,
      silentMajorityIndex: 15,
      platforms: {
        youtube: { sentiment: 20, organicRatio: 0.9, rawVolume: 1000, botCountEstimate: 10 },
        xTwitter: { sentiment: 30, organicRatio: 0.8, rawVolume: 1000, botCountEstimate: 10 },
        instagram: { sentiment: 25, organicRatio: 0.7, rawVolume: 1000, botCountEstimate: 10 },
        threads: { sentiment: 20, organicRatio: 0.8, rawVolume: 1000, botCountEstimate: 10 },
        googleNews: { sentiment: 25, organicRatio: 0.9, rawVolume: 1000, botCountEstimate: 10 }
      }
    });
    const result = calculateTOSS(lowToss);
    assert.equal(result.riskTier, 'High Danger');
    assert.ok(result.evictionProbability >= 70 && result.evictionProbability <= 95);
  });

  it('triggers Vocal Bubble / At Risk tier when PR infiltration >= 48% and silentMajority < 45%', () => {
    const vocalBubble = createMockContestant({
      isNominated: true,
      prInfiltrationRate: 65,
      silentMajorityIndex: 35,
      platforms: {
        youtube: { sentiment: 45, organicRatio: 0.8, rawVolume: 5000, botCountEstimate: 500 },
        xTwitter: { sentiment: 92, organicRatio: 0.35, rawVolume: 80000, botCountEstimate: 35000 },
        instagram: { sentiment: 70, organicRatio: 0.5, rawVolume: 20000, botCountEstimate: 8000 },
        threads: { sentiment: 50, organicRatio: 0.7, rawVolume: 3000, botCountEstimate: 300 },
        googleNews: { sentiment: 55, organicRatio: 0.9, rawVolume: 300, botCountEstimate: 5 }
      }
    });
    const result = calculateTOSS(vocalBubble);
    assert.equal(result.riskTier, 'Vocal Bubble / At Risk');
    assert.ok(result.evictionProbability >= 50 && result.evictionProbability <= 75);
  });

  it('handles custom platform weight configurations (e.g. YouTube heavy vs Twitter heavy)', () => {
    const contestant = createMockContestant({
      platforms: {
        youtube: { sentiment: 90, organicRatio: 0.95, rawVolume: 20000, botCountEstimate: 200 },
        xTwitter: { sentiment: 40, organicRatio: 0.3, rawVolume: 50000, botCountEstimate: 25000 },
        instagram: { sentiment: 50, organicRatio: 0.5, rawVolume: 10000, botCountEstimate: 2000 },
        threads: { sentiment: 60, organicRatio: 0.8, rawVolume: 5000, botCountEstimate: 300 },
        googleNews: { sentiment: 70, organicRatio: 0.9, rawVolume: 500, botCountEstimate: 10 }
      }
    });

    const ytHeavyWeights: PlatformWeightConfig = {
      youtube: 0.8,
      googleNews: 0.05,
      xTwitter: 0.05,
      instagram: 0.05,
      threads: 0.05
    };

    const xHeavyWeights: PlatformWeightConfig = {
      youtube: 0.05,
      googleNews: 0.05,
      xTwitter: 0.8,
      instagram: 0.05,
      threads: 0.05
    };

    const ytResult = calculateTOSS(contestant, ytHeavyWeights);
    const xResult = calculateTOSS(contestant, xHeavyWeights);

    assert.ok(ytResult.toss > xResult.toss, 'YouTube heavy TOSS should be significantly higher');
    assert.ok(ytResult.toss >= 80);
  });
});

describe('Analytics Engine - stringSimilarity (Levenshtein Edge Tests)', () => {
  it('returns 1.0 for identical strings', () => {
    assert.equal(stringSimilarity('Hello World', 'Hello World'), 1.0);
  });

  it('normalizes case and trims whitespace', () => {
    assert.equal(stringSimilarity('   Vote For Scout OP   ', 'vote for scout op'), 1.0);
  });

  it('returns 0.0 when either string is empty', () => {
    assert.equal(stringSimilarity('', 'hello'), 0.0);
    assert.equal(stringSimilarity('world', ''), 0.0);
    assert.equal(stringSimilarity('', ''), 1.0);
  });

  it('detects near-identical astroturf templates with minor lexical changes', () => {
    const s1 = 'Kanika Mann is playing with pure grace and dignity, sole deserving winner #KanikaArmy';
    const s2 = 'Kanika Mann is playing with 100% grace and dignity, sole deserving winner #KanikaArmy';
    const sim = stringSimilarity(s1, s2);
    assert.ok(sim >= 0.85, `Similarity was ${sim}, expected >= 0.85`);
  });

  it('handles completely different text with low similarity score', () => {
    const s1 = 'Kanika Mann is playing with pure grace and dignity';
    const s2 = 'The kitchen was completely dirty and breakfast was delayed by 2 hours';
    const sim = stringSimilarity(s1, s2);
    assert.ok(sim < 0.35, `Similarity was ${sim}, expected < 0.35`);
  });

  it('handles unicode characters and emojis', () => {
    const s1 = 'Scout भाई एकदम सॉलिड खेल रहे हैं 🔥👑';
    const s2 = 'Scout भाई एकदम सॉलिड खेल रहे हैं 👑🔥';
    const sim = stringSimilarity(s1, s2);
    assert.ok(sim >= 0.9, `Similarity with emojis was ${sim}`);
  });
});

describe('Analytics Engine - findCommentClusters (Clustering Hard Tests)', () => {
  it('returns empty array when given empty input', () => {
    assert.deepEqual(findCommentClusters([]), []);
  });

  it('returns empty array when given single comment', () => {
    assert.deepEqual(findCommentClusters(['Single unique comment here']), []);
  });

  it('accurately groups repeated astroturf lines and sorts clusters by count', () => {
    const comments = [
      'Kanika Mann is playing with pure grace and dignity #KanikaArmy',
      'Kanika Mann is playing with 100% grace and dignity #KanikaArmy',
      'Kanika Mann is playing with pure grace and dignity #KanikaArmy',
      'Look at Scout hiding behind gaming fans again. Zero reality show talent #OverratedScout',
      'Look at Scout hiding behind gaming fans again. Zero reality show talent #OverratedScout',
      'Organic comment about food in the kitchen',
      'Another completely unrelated comment about Salman Khan hosting'
    ];

    const clusters = findCommentClusters(comments, 0.70);
    assert.ok(clusters.length >= 2, 'Should find at least 2 clusters');
    assert.ok(clusters[0].count >= clusters[1].count, 'Clusters should be sorted by descending count');
    assert.equal(clusters[0].count, 3, 'Kanika cluster should have 3 occurrences');
    assert.equal(clusters[1].count, 2, 'Scout attack cluster should have 2 occurrences');
  });

  it('handles 100+ comments without performance degradation', () => {
    const templateA = 'Coordinated PR comment template pattern 12345';
    const templateB = 'Different PR agency spam message pattern 67890';
    const largeList: string[] = [];

    for (let i = 0; i < 40; i++) {
      largeList.push(`${templateA} variation ${i % 3}`);
    }
    for (let i = 0; i < 30; i++) {
      largeList.push(`${templateB} variation ${i % 2}`);
    }
    for (let i = 0; i < 30; i++) {
      largeList.push(`Unique organic comment number ${i} with totally random thoughts`);
    }

    const start = performance.now();
    const clusters = findCommentClusters(largeList, 0.65);
    const duration = performance.now() - start;

    assert.ok(duration < 1500, `Clustering 100 comments took ${duration}ms, expected < 1500ms`);
    assert.ok(clusters.length >= 2, 'Should identify the 2 massive bot clusters');
  });
});
