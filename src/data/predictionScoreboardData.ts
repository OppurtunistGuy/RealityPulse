import { PredictionScorecardEntry, PredictionScoreboardSummary } from '../types';

export const PREDICTION_SCORECARD_DATA: PredictionScorecardEntry[] = [
  {
    week: 8,
    weekLabel: 'Week 8 · Weekend Ka Vaar (Day 57)',
    episodeNumber: 57,
    date: '2026-11-01',
    contestantId: 'c6',
    contestantName: 'Aasif Khan',
    avatar: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_AK%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_AK)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%236366f1%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%236366f1%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23a5b4fc%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20AK%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E',
    predictedRiskPercentage: 4,
    predictedToss: 77,
    predictedRiskTier: 'Safe',
    actualOutcome: 'Evicted',
    outcomeDetail: 'Eliminated on Weekend Ka Vaar Ep 57 due to lowest overall audience voting volume.',
    verdict: 'MISSED',
    notes: 'SYSTEM MISS: Model coupled risk to a 4% non-nomination constant and ingested a flawed roster omitting Aasif. In reality, Aasif suffered from the Ghost Factor (lowest engagement in the house) and was evicted.'
  },
  {
    week: 7,
    weekLabel: 'Week 7 · Mid-Week Sprint (Day 49)',
    episodeNumber: 49,
    date: '2026-10-24',
    contestantId: 'c5',
    contestantName: 'MC Mary Kom',
    avatar: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_MK%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23083344%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23164e63%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_MK)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%2306b6d4%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%2306b6d4%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%2367e8f9%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20MK%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E',
    predictedRiskPercentage: 62,
    predictedToss: 91,
    predictedRiskTier: 'Vocal Bubble / At Risk',
    actualOutcome: 'Evicted',
    outcomeDetail: 'Exited on Day 49 following mid-week sudden death sprint after 7 weeks.',
    verdict: 'HIT',
    notes: 'Identified that despite stellar organic goodwill (91% TOSS), voting conversion in short 48hr windows lagged youth digital fandoms.'
  },
  {
    week: 6,
    weekLabel: 'Week 6 · Mass Nomination (Day 42)',
    episodeNumber: 42,
    date: '2026-10-18',
    contestantId: 'c18',
    contestantName: 'Aman Gandhi',
    avatar: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_AG%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_AG)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%236366f1%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%236366f1%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23a5b4fc%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20AG%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E',
    predictedRiskPercentage: 76,
    predictedToss: 44,
    predictedRiskTier: 'High Danger',
    actualOutcome: 'Evicted',
    outcomeDetail: 'Lowest public voting share among 7 nominated housemates.',
    verdict: 'HIT',
    notes: 'Low organic TOSS (44%) and absence of loyal voting core correctly identified him as most vulnerable.'
  },
  {
    week: 5,
    weekLabel: 'Week 5 · Physical Altercation (Day 35)',
    episodeNumber: 35,
    date: '2026-10-11',
    contestantId: 'c17',
    contestantName: 'Neeraj Goyat',
    avatar: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_NG%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23450a0a%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%237f1d1d%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_NG)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23ef4444%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%23ef4444%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23fca5a5%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20NG%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E',
    predictedRiskPercentage: 28,
    predictedToss: 74,
    predictedRiskTier: 'Safe',
    actualOutcome: 'Disqualified',
    outcomeDetail: 'Disqualified on Day 35 after physical rule violation.',
    verdict: 'EXCLUDED',
    notes: 'Administrative ejection due to physical contact violence rule. Excluded from audience voting model accuracy assessment.'
  },
  {
    week: 4,
    weekLabel: 'Week 4 · Elimination (Day 28)',
    episodeNumber: 28,
    date: '2026-10-04',
    contestantId: 'c16',
    contestantName: 'Natalia Janoszek',
    avatar: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_NJ%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%234c0519%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23881337%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_NJ)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23f43f5e%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%23f43f5e%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23fda4af%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20NJ%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E',
    predictedRiskPercentage: 84,
    predictedToss: 33,
    predictedRiskTier: 'High Danger',
    actualOutcome: 'Evicted',
    outcomeDetail: 'Lowest public voting total across all demographic bands.',
    verdict: 'HIT',
    notes: 'Ghost edit combined with lowest silent majority index (20) correctly forecasted her exit.'
  },
  {
    week: 3,
    weekLabel: 'Week 3 · Elimination (Day 21)',
    episodeNumber: 21,
    date: '2026-09-27',
    contestantId: 'c15',
    contestantName: 'Baseer Ali',
    avatar: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_BA%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230f172a%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231e293b%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_BA)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%2394a3b8%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23e2e8f0%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20BA%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E',
    predictedRiskPercentage: 68,
    predictedToss: 49,
    predictedRiskTier: 'High Danger',
    actualOutcome: 'Evicted',
    outcomeDetail: 'Lowest public voting share.',
    verdict: 'HIT',
    notes: 'Aggressive clashes resulted in negative reception delta on Weekend Ka Vaar, translating directly into bottom voting turnout.'
  },
  {
    week: 2,
    weekLabel: 'Week 2 · Elimination (Day 14)',
    episodeNumber: 14,
    date: '2026-09-20',
    contestantId: 'c14',
    contestantName: 'Elnaaz Norouzi',
    avatar: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_EN%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b0764%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23581c87%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_EN)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23a855f7%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%23a855f7%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23e9d5ff%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20EN%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E',
    predictedRiskPercentage: 79,
    predictedToss: 41,
    predictedRiskTier: 'High Danger',
    actualOutcome: 'Evicted',
    outcomeDetail: 'Lowest public voting share.',
    verdict: 'HIT',
    notes: 'Textbook vocal bubble collapse. High Instagram comment velocity from promotional agencies failed to convert to organic votes.'
  },
  {
    week: 1,
    weekLabel: 'Week 1 · Season Opener (Day 7)',
    episodeNumber: 7,
    date: '2026-09-13',
    contestantId: 'c13',
    contestantName: 'Nagma Mirajkar',
    avatar: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_NM%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_NM)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%236366f1%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%236366f1%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23a5b4fc%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20NM%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E',
    predictedRiskPercentage: 72,
    predictedToss: 38,
    predictedRiskTier: 'High Danger',
    actualOutcome: 'Evicted',
    outcomeDetail: 'Lowest public voting share.',
    verdict: 'HIT',
    notes: 'Casual audience rejection of initial social media influencer framing.'
  }
];

export const PREDICTION_SCOREBOARD_SUMMARY: PredictionScoreboardSummary = {
  totalEvaluated: 8,
  verifiedHits: 6,
  documentedMisses: 1,
  excludedExits: 1,
  empiricalAccuracyPercentage: 85.7, // 6 hits out of 7 voting evictions = 85.7% (or 75.0% across all 8 exits)
  lastMissAudit: {
    week: 8,
    contestantName: 'Aasif Khan',
    date: '2026-11-01',
    predictedRisk: '4% (Safe / Labeled Exempt)',
    actualResult: 'Evicted on Day 57 Weekend Ka Vaar (Lowest Votes)',
    rootCauses: [
      'Nomination Roster Exclusion: RealityPulse ingested an outdated nomination list that omitted Aasif Khan, despite FilmiBeat reporting him in the danger zone.',
      'Coupled Status Constant: The engine previously assigned a flat 4% constant to all non-nominated housemates rather than calculating continuous risk from live discourse.',
      'The Ghost Factor Blindspot: Positive sentiment (78% TOSS) masked dangerously low absolute comment volume (45k mentions). In multi-way nominations, low engagement causes immediate elimination.'
    ]
  }
};

