import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { app } from '../server.js';

describe('Server & API Endpoints - Hard Edge-to-Edge Tests', () => {
  it('GET /api/health returns 200 with ok status and server metadata', async () => {
    const res = await request(app).get('/api/health');
    assert.equal(res.status, 200);
    assert.equal(res.body.status, 'ok');
    assert.ok(typeof res.body.hasApiKey === 'boolean');
    assert.ok(typeof res.body.timestamp === 'string');
    assert.ok(typeof res.body.model === 'string');
  });

  describe('POST /api/grounding-search', () => {
    it('returns 400 when query is missing or empty', async () => {
      const resEmpty = await request(app)
        .post('/api/grounding-search')
        .send({});
      assert.equal(resEmpty.status, 400);
      assert.match(resEmpty.body.error, /Query parameter is required/);

      const resWhitespace = await request(app)
        .post('/api/grounding-search')
        .send({ query: '   ' });
      assert.equal(resWhitespace.status, 400);
    });

    it('returns structured grounded intelligence on real-world reality TV queries', async () => {
      const res = await request(app)
        .post('/api/grounding-search')
        .send({
          query: 'Bigg Boss 20 Hindi Scout vs Kanika Mann voting trends YouTube vs Twitter',
          showName: 'Bigg Boss 20 Hindi'
        });

      assert.equal(res.status, 200);
      assert.ok(typeof res.body.text === 'string' && res.body.text.length > 50);
      assert.ok(Array.isArray(res.body.groundingChunks));
      assert.ok(res.body.groundingChunks.length > 0);
      assert.ok(Array.isArray(res.body.webSearchQueries));
      assert.ok(res.body.webSearchQueries.length > 0);
      assert.ok(typeof res.body.timestamp === 'string');

      // Verify structure contains key intelligence sections
      assert.ok(
        res.body.text.includes('Nomination') ||
        res.body.text.includes('Astroturfing') ||
        res.body.text.includes('Eviction') ||
        res.body.text.includes('Report'),
        'Report should include core intelligence categories'
      );
    });

    it('handles special characters and long queries gracefully', async () => {
      const longQuery = 'Bigg Boss 20 eviction polls '.repeat(20) + ' #ScoutOP #KanikaArmy @SalmanKhan ? & % $';
      const res = await request(app)
        .post('/api/grounding-search')
        .send({ query: longQuery, showName: 'Bigg Boss' });

      assert.equal(res.status, 200);
      assert.ok(res.body.text.length > 0);
    });
  });

  describe('POST /api/analyze-custom-discourse', () => {
    it('returns 400 when textToAnalyze is missing or whitespace', async () => {
      const res = await request(app)
        .post('/api/analyze-custom-discourse')
        .send({});
      assert.equal(res.status, 400);

      const resBlank = await request(app)
        .post('/api/analyze-custom-discourse')
        .send({ textToAnalyze: '   ' });
      assert.equal(resBlank.status, 400);
    });

    it('accurately identifies coordinated PR astroturfing and inflated sentiment in bot discourse', async () => {
      const botDiscourse = `
Kanika Mann is playing with pure grace and dignity, sole deserving winner of BB20 #KanikaArmy
Kanika Mann is playing with pure grace and dignity, sole deserving winner of BB20 #KanikaArmy
Kanika Mann is playing with 100% grace and dignity, sole deserving winner #KanikaArmy
Look how composed Kanika stayed today, undisputed queen of BB20 #KanikaMann
Pure dignity, pure grace! Kanika Mann is the real winner of Bigg Boss 20 #KanikaArmy
Kanika is the only dignified contestant in the house, pure winner vibes #KanikaArmy
Dignity, grace and patience! That is Kanika Mann #KanikaArmy #BB20
      `.trim();

      const res = await request(app)
        .post('/api/analyze-custom-discourse')
        .send({
          textToAnalyze: botDiscourse,
          contestants: ['Kanika Mann', 'Scout (Tanmay Singh)']
        });

      assert.equal(res.status, 200);
      assert.ok(typeof res.body.astroturfProbability === 'number');
      assert.ok(res.body.astroturfProbability >= 70, `Astroturf probability should be high (${res.body.astroturfProbability})`);
      assert.ok(res.body.sentimentUniformityScore >= 80, 'Sentiment uniformity should be high');
      assert.ok(res.body.prInflationDelta > 20, 'PR inflation delta should be elevated');
      assert.ok(res.body.rawSentimentScore > res.body.organicSentimentScore);
      assert.equal(res.body.evictionRiskVerdict, 'Vocal Bubble / At Risk');
      assert.ok(Array.isArray(res.body.detectedTemplates));
      assert.ok(res.body.detectedTemplates.length > 0);
      assert.ok(Array.isArray(res.body.flaggedAccountsOrPatterns));
    });

    it('accurately recognizes authentic organic spectator conversation', async () => {
      const organicDiscourse = `
Honestly wasn't expecting Scout to stay so calm during Qazi's rant, but that was pure maturity.
Kanika acts like a saint whenever Salman is watching, but avoids every hard kitchen chore.
Aamrapali cooking for the whole house while others fight over eggs is the most relatable thing this season.
Aasif Khan is such a phenomenal actor in Panchayat, but in BB house he is basically invisible like a sofa.
Qazi Touqeer thinks it's still 2005. That vintage nostalgia trick won't work on current JioHotstar voters.
Voting for Aamrapali and Scout tonight! True entertainers without paid agency PR.
      `.trim();

      const res = await request(app)
        .post('/api/analyze-custom-discourse')
        .send({
          textToAnalyze: organicDiscourse,
          contestants: ['Scout (Tanmay Singh)', 'Kanika Mann', 'Aamrapali Dubey']
        });

      assert.equal(res.status, 200);
      assert.ok(res.body.astroturfProbability < 40, `Astroturf probability should be low (${res.body.astroturfProbability})`);
      assert.ok(res.body.sentimentUniformityScore < 60, 'Sentiment uniformity should be low/organic');
      assert.equal(res.body.evictionRiskVerdict, 'Safe');
      assert.ok(res.body.organicSentimentScore >= res.body.rawSentimentScore);
    });

    it('handles very large discourse payloads (stress test 15k+ characters)', async () => {
      const baseLine = 'User spectator hot take on episode 52 nomination tasks.\n';
      const largeDiscourse = baseLine.repeat(400);

      const res = await request(app)
        .post('/api/analyze-custom-discourse')
        .send({
          textToAnalyze: largeDiscourse,
          contestants: ['Scout (Tanmay Singh)']
        });

      assert.equal(res.status, 200);
      assert.ok(typeof res.body.astroturfProbability === 'number');
    });
  });

  describe('POST /api/synthesize-episode-narrative', () => {
    it('returns 400 when episodeSynopsis is missing or blank', async () => {
      const res = await request(app)
        .post('/api/synthesize-episode-narrative')
        .send({});
      assert.equal(res.status, 400);
    });

    it('extracts hero/villain edits, conflict pairs, and public reception verdicts', async () => {
      const synopsis = `
Episode 52 Weekend Ka Vaar: Salman Khan confronted housemates regarding the Tathas-two immunity veto.
Scout maintained calm during aggressive provocation from Qazi Touqeer over kitchen duty allocations.
Kanika Mann broke down alleging unfair targeting, but casual viewers noticed she avoided the chores.
Salman Khan warned Qazi against personal attacks.
      `.trim();

      const res = await request(app)
        .post('/api/synthesize-episode-narrative')
        .send({
          episodeSynopsis: synopsis,
          episodeNumber: 52
        });

      assert.equal(res.status, 200);
      assert.ok(res.body.episodeSummary.length > 0);
      assert.ok(Array.isArray(res.body.contestants));
      assert.ok(res.body.contestants.length >= 2);

      for (const c of res.body.contestants) {
        assert.ok(c.name.length > 0);
        assert.ok(['Hero Edit', 'Villain Edit', 'Ghost Edit', 'Neutral Edit'].includes(c.editType));
        assert.ok(['High Backlash', 'Sympathy Wave', 'Ignored', 'Positive Momentum'].includes(c.organicReceptionRisk));
      }

      assert.ok(Array.isArray(res.body.conflictPairs));
      assert.ok(res.body.conflictPairs.length > 0);
      const pair = res.body.conflictPairs[0];
      assert.ok(pair.contestantA.length > 0);
      assert.ok(pair.contestantB.length > 0);
      assert.ok(pair.incident.length > 0);
    });
  });
});
