import React from 'react';
import {
  Trophy,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  TrendingDown,
  Info,
  Calendar,
  Sparkles
} from 'lucide-react';
import {
  PREDICTION_SCORECARD_DATA,
  PREDICTION_SCOREBOARD_SUMMARY
} from '../data/predictionScoreboardData';

export const PredictionScoreboardView: React.FC = () => {
  const summary = PREDICTION_SCOREBOARD_SUMMARY;

  const getVerdictBadge = (verdict: 'HIT' | 'MISSED' | 'EXCLUDED' | 'PENDING') => {
    switch (verdict) {
      case 'HIT':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            HIT
          </span>
        );
      case 'MISSED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse">
            <XCircle className="w-3.5 h-3.5 text-rose-400" />
            MISSED
          </span>
        );
      case 'EXCLUDED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-slate-700/50 text-slate-300 border border-slate-600">
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            EXCLUDED
          </span>
        );
      case 'PENDING':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            PENDING
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Scoreboard Header */}
      <div className="p-5 sm:p-6 bg-[#11192a] border border-slate-800 rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-bold text-white tracking-tight">
                Empirical Prediction Scoreboard: Accuracy & Calibration Ledger
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-3xl leading-relaxed">
              Every past eviction prediction recorded against the real broadcaster outcome. No quiet edits or erased forecasts.
            </p>
          </div>
          <span className="font-mono text-xs text-cyan-400 bg-cyan-950/80 px-3 py-1.5 rounded-lg border border-cyan-800 self-start sm:self-auto">
            Season 20 Benchmark
          </span>
        </div>

        {/* 4 Core Summary Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          <div className="p-4 bg-[#0a1222] border border-slate-800 rounded-xl space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-400 block">Voting Accuracy</span>
            <div className="text-2xl font-black text-emerald-400 font-mono">
              {summary.empiricalAccuracyPercentage}%
            </div>
            <span className="text-[10px] text-slate-500 block">6 of 7 voting outcomes</span>
          </div>

          <div className="p-4 bg-[#0a1222] border border-slate-800 rounded-xl space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-400 block">Verified Hits</span>
            <div className="text-2xl font-black text-cyan-400 font-mono">
              {summary.verifiedHits}
            </div>
            <span className="text-[10px] text-slate-500 block">Correctly forecasted</span>
          </div>

          <div className="p-4 bg-[#0a1222] border border-rose-950/50 rounded-xl space-y-1">
            <span className="text-[11px] font-mono uppercase text-rose-400 block">Documented Misses</span>
            <div className="text-2xl font-black text-rose-400 font-mono">
              {summary.documentedMisses}
            </div>
            <span className="text-[10px] text-rose-400/80 block">Week 8 (Aasif Khan)</span>
          </div>

          <div className="p-4 bg-[#0a1222] border border-slate-800 rounded-xl space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-400 block">Administrative Exits</span>
            <div className="text-2xl font-black text-slate-300 font-mono">
              {summary.excludedExits}
            </div>
            <span className="text-[10px] text-slate-500 block">Week 5 (Rule violation)</span>
          </div>
        </div>
      </div>

      {/* Prominent Retrospective Post-Mortem on Tonight's Miss */}
      <div className="p-5 sm:p-6 bg-gradient-to-br from-rose-950/30 via-[#101524] to-[#0a1222] border-2 border-rose-500/40 rounded-xl space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-rose-900/40 pb-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Post-Mortem: Week 8 Missed Eviction Analysis (Day 57 · Nov 1, 2026)
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 self-start sm:self-auto">
            Audit Event #01
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#0c1322] border border-rose-900/30 rounded-lg space-y-2">
            <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
              The Prediction Miss
            </span>
            <div className="flex items-center gap-3">
              <img
                src={PREDICTION_SCORECARD_DATA[0].avatar}
                alt="Aasif Khan"
                className="w-12 h-12 rounded-lg border border-slate-700"
              />
              <div>
                <h4 className="text-sm font-bold text-white">Aasif Khan</h4>
                <div className="text-xs space-y-0.5 mt-1 font-mono">
                  <div className="text-rose-400">
                    Forecast: <strong>{summary.lastMissAudit.predictedRisk}</strong>
                  </div>
                  <div className="text-slate-300">
                    Actual: <strong>{summary.lastMissAudit.actualResult}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#0c1322] border border-slate-800 rounded-lg space-y-2">
            <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
              Why the Model Failed
            </span>
            <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside leading-relaxed">
              {summary.lastMissAudit.rootCauses.map((rc, idx) => (
                <li key={idx} className="text-slate-300">
                  <span className="text-slate-200">{rc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-3 bg-rose-950/20 border border-rose-800/30 rounded-lg text-xs text-rose-200 leading-relaxed flex items-start gap-2">
          <Info className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <span>
            <strong>Calibration Remedy Implemented:</strong> The model has been severed from hardcoded constants. Eviction vulnerability is now continuously derived from ingested cross-platform comment volumes, organic sentiment, and silent majority vote bank strength.
          </span>
        </div>
      </div>

      {/* Chronological Prediction Table */}
      <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-lg">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-400" />
            Season 20 Weekly Prediction Log (Weeks 1 – {Math.max(...PREDICTION_SCORECARD_DATA.map(e => e.week))})
          </h3>
          <span className="text-xs font-mono text-slate-400">
            Chronological Order
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#0a1222] border-b border-slate-800 text-[11px] font-mono uppercase text-slate-400">
                <th className="py-3 px-4">Week & Episode</th>
                <th className="py-3 px-4">Contestant</th>
                <th className="py-3 px-4">Predicted Risk</th>
                <th className="py-3 px-4">True TOSS</th>
                <th className="py-3 px-4">Broadcaster Outcome</th>
                <th className="py-3 px-4 text-center">Score</th>
                <th className="py-3 px-4 min-w-[280px]">Model Audit Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {PREDICTION_SCORECARD_DATA.map((entry) => {
                const isMiss = entry.verdict === 'MISSED';
                return (
                  <tr
                    key={entry.week}
                    className={`transition-colors ${
                      isMiss ? 'bg-rose-950/20 hover:bg-rose-950/30' : 'hover:bg-slate-800/40'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono">
                      <div className="font-bold text-white">{entry.weekLabel}</div>
                      <div className="text-[10px] text-slate-400">{entry.date} · Ep {entry.episodeNumber}</div>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={entry.avatar}
                          alt={entry.contestantName}
                          className="w-8 h-8 rounded-lg shrink-0 border border-slate-700"
                        />
                        <span className="font-semibold text-white">{entry.contestantName}</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 font-mono font-bold">
                      <span className={isMiss ? 'text-rose-400' : 'text-amber-400'}>
                        {entry.predictedRiskPercentage != null ? `${entry.predictedRiskPercentage}%` : (entry.verdict === 'PENDING' ? 'Pending' : 'N/A')}
                      </span>
                      <span className="block text-[10px] text-slate-400 font-normal">
                        Tier: {entry.predictedRiskTier === 'Pending Evaluation' ? 'Evaluating' : entry.predictedRiskTier}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 font-mono font-semibold text-emerald-400">
                      {entry.predictedToss != null ? `${entry.predictedToss}%` : '—'}
                    </td>

                    <td className="py-3.5 px-4 text-slate-200">
                      <div className="font-semibold text-white">{entry.actualOutcome}</div>
                      <div className="text-[10px] text-slate-400">{entry.outcomeDetail}</div>
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      {getVerdictBadge(entry.verdict)}
                    </td>

                    <td className="py-3.5 px-4 text-slate-300 leading-relaxed text-[11px]">
                      {entry.notes}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

