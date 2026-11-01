import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  INITIAL_CONTESTANTS,
  ASTROTURF_CLUSTERS,
  BIPARTITE_NODES,
  BIPARTITE_LINKS,
  EPISODE_NARRATIVES,
  SOURCE_PROVENANCE_CATALOG,
  EVICTED_CONTESTANTS_TIMELINE
} from './mockRealityData.js';

describe('Reality TV Data Grounding - Integrity & Schema Edge Tests', () => {
  it('validates all contestants have unique IDs, valid names, and valid platform metrics', () => {
    assert.equal(INITIAL_CONTESTANTS.length, 14, 'Should have exactly 14 contestants loaded (10 active, 4 evicted)');
    const ids = new Set<string>();

    for (const c of INITIAL_CONTESTANTS) {
      assert.ok(!ids.has(c.id), `Duplicate contestant id found: ${c.id}`);
      ids.add(c.id);

      assert.ok(c.name.trim().length > 0, `Contestant ${c.id} missing name`);
      assert.ok(c.nickname.trim().length > 0, `Contestant ${c.id} missing nickname`);
      assert.ok(c.avatar.startsWith('http'), `Contestant ${c.id} avatar must be a valid URL`);
      assert.ok(['Frontrunner', 'Challenger', 'Underdog', 'Wildcard', 'Polarizing'].includes(c.role));
      assert.ok(['Active', 'Evicted'].includes(c.status));
      assert.ok(typeof c.isNominated === 'boolean');

      // Dossier fields
      assert.ok(c.pastDetails && c.pastDetails.length > 20, `${c.id} must have rich past details`);
      assert.ok(Array.isArray(c.controversies) && c.controversies.length > 0, `${c.id} must have past controversies`);
      assert.ok(c.houseGameplay && c.houseGameplay.length > 20, `${c.id} must have house gameplay details`);
      assert.ok(c.strongestMove && c.strongestMove.length > 20, `${c.id} must have strongest move details`);

      // Hinglish profile fields
      assert.ok(c.hinglishProfile, `${c.id} missing hinglishProfile`);
      assert.ok(c.hinglishProfile.pastDetails && c.hinglishProfile.pastDetails.length > 20);
      assert.ok(Array.isArray(c.hinglishProfile.controversies) && c.hinglishProfile.controversies.length > 0);
      assert.ok(c.hinglishProfile.houseGameplay && c.hinglishProfile.houseGameplay.length > 20);
      assert.ok(c.hinglishProfile.strongestMove && c.hinglishProfile.strongestMove.length > 20);

      // TOSS and metrics
      assert.ok(c.rawSentiment >= 0 && c.rawSentiment <= 100);
      assert.ok(c.trueOrganicSentiment >= 0 && c.trueOrganicSentiment <= 100);
      assert.ok(c.silentMajorityIndex >= 0 && c.silentMajorityIndex <= 100);
      assert.ok(c.loudMinorityIndex >= 0 && c.loudMinorityIndex <= 100);
      assert.ok(['Safe', 'Vocal Bubble / At Risk', 'High Danger'].includes(c.evictionRiskTier));

      // 7-day sparkline vector integrity
      assert.ok(Array.isArray(c.tossTrend7d), `${c.id} tossTrend7d must be an array`);
      assert.equal(c.tossTrend7d.length, 7, `${c.id} tossTrend7d must contain exactly 7 daily scores`);
      for (const score of c.tossTrend7d) {
        assert.ok(score >= 0 && score <= 100, `Daily score ${score} out of 0-100 range in ${c.id}`);
      }

      // Platforms verification
      const platforms = ['youtube', 'xTwitter', 'instagram', 'threads', 'googleNews'] as const;
      for (const p of platforms) {
        const metric = c.platforms[p];
        assert.ok(metric, `Platform ${p} missing in ${c.id}`);
        assert.ok(metric.sentiment >= 0 && metric.sentiment <= 100);
        assert.ok(metric.organicRatio >= 0 && metric.organicRatio <= 1.0);
        assert.ok(metric.rawVolume >= 0);
        assert.ok(metric.botCountEstimate >= 0);
      }
    }

    // Specific Arshifa check as requested by user
    const arshifa = INITIAL_CONTESTANTS.find((c) => c.name.includes('Arshifa'));
    assert.ok(arshifa, 'Arshifa must be present');
    assert.ok(arshifa.houseGameplay, 'Arshifa must have houseGameplay');
    assert.ok(arshifa.hinglishProfile, 'Arshifa must have hinglishProfile');
    assert.match(arshifa.houseGameplay.toLowerCase(), /rage-bait|crying|scout|gullu|kanika/);
    assert.match(arshifa.hinglishProfile.houseGameplay.toLowerCase(), /scout|gullu|kanika|crying|sympathy/);
  });

  it('validates evicted contestants timeline sequence from Week 1 to current', () => {
    assert.ok(EVICTED_CONTESTANTS_TIMELINE.length >= 4, 'Should have at least 4 evicted contestants recorded');
    const weeksSeen = new Set<number>();

    for (const item of EVICTED_CONTESTANTS_TIMELINE) {
      assert.ok(item.week >= 1 && item.week <= 10, 'Week must be realistic');
      assert.ok(!weeksSeen.has(item.week), `Duplicate week in timeline: Week ${item.week}`);
      weeksSeen.add(item.week);

      assert.ok(item.name.length > 0);
      assert.ok(item.finalTossScore >= 0 && item.finalTossScore <= 100);
      assert.ok(item.evictionReason.length > 15);
      assert.ok(item.headlineQuote.length > 5);
      assert.ok(item.hinglishReason && item.hinglishReason.length > 15);
      assert.ok(item.hinglishHeadline && item.hinglishHeadline.length > 5);
    }
  });

  it('validates bipartite network nodes and ensures no dead links in graph topology', () => {
    assert.ok(BIPARTITE_NODES.length > 0);
    assert.ok(BIPARTITE_LINKS.length > 0);

    const nodeIds = new Set(BIPARTITE_NODES.map((n) => n.id));
    for (const link of BIPARTITE_LINKS) {
      assert.ok(nodeIds.has(link.source), `Link source ${link.source} does not exist in BIPARTITE_NODES`);
      assert.ok(nodeIds.has(link.target), `Link target ${link.target} does not exist in BIPARTITE_NODES`);
      assert.ok(link.weight > 0, `Link weight must be positive`);
      assert.equal(typeof link.isAstroturf, 'boolean');
    }
  });

  it('validates astroturf clusters and detected copy-paste templates', () => {
    assert.ok(ASTROTURF_CLUSTERS.length > 0);
    for (const cluster of ASTROTURF_CLUSTERS) {
      assert.ok(cluster.templatePhrase.length > 5);
      assert.ok(cluster.variations.length > 0);
      assert.ok(cluster.occurrences > 0);
      assert.ok(cluster.similarityScore >= 0.5 && cluster.similarityScore <= 1.0);
      assert.ok(cluster.accountAgeMedianDays >= 0);
      assert.equal(cluster.status, 'Sanitized & Discounted');
    }
  });

  it('validates episode narratives and reception deltas', () => {
    assert.ok(EPISODE_NARRATIVES.length > 0);
    for (const ep of EPISODE_NARRATIVES) {
      assert.ok(ep.episodeNumber > 0);
      assert.ok(ep.title.length > 0);
      assert.ok(ep.broadcastThemes.length > 0);
      assert.ok(ep.contestantEdits.length > 0);

      for (const edit of ep.contestantEdits) {
        assert.ok(['Hero Edit', 'Villain Edit', 'Ghost Edit', 'Neutral Edit'].includes(edit.editType));
        assert.ok(edit.airtimeMinutes > 0);
        assert.ok(typeof edit.receptionDelta === 'number');
      }

      for (const pair of ep.conflictPairs) {
        assert.ok(pair.contestantA.length > 0);
        assert.ok(pair.contestantB.length > 0);
        assert.ok(pair.incident.length > 0);
      }
    }
  });

  it('validates source provenance feeds and handles', () => {
    assert.ok(SOURCE_PROVENANCE_CATALOG.length >= 4);
    for (const prov of SOURCE_PROVENANCE_CATALOG) {
      assert.ok(prov.platform.length > 0);
      assert.ok(prov.verifiedFeedsAndHandles.length > 0);
      assert.ok(prov.samplingMethodology.length > 0);
      for (const feed of prov.verifiedFeedsAndHandles) {
        assert.ok(feed.identifier.length > 0);
        assert.ok(feed.role.length > 0);
      }
    }
  });
});
