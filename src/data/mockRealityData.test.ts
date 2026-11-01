import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  INITIAL_CONTESTANTS,
  ASTROTURF_CLUSTERS,
  BIPARTITE_NODES,
  BIPARTITE_LINKS,
  EPISODE_NARRATIVES,
  SOURCE_PROVENANCE_CATALOG
} from './mockRealityData.js';

describe('Reality TV Data Grounding - Integrity & Schema Edge Tests', () => {
  it('validates all contestants have unique IDs, valid names, and valid platform metrics', () => {
    assert.ok(INITIAL_CONTESTANTS.length >= 6, 'Should have at least 6 contestants loaded');
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
