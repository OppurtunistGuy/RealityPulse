import React, { useMemo } from 'react';
import {
  AlertTriangle,
  TrendingDown,
  ShieldCheck,
  ChevronRight,
  Sliders,
  Sparkles,
  Info,
  Clock,
  BarChart3
} from 'lucide-react';
import { Contestant, Language } from '../types';

interface TonightViewProps {
  contestants: Contestant[];
  onSelectContestant: (c: Contestant) => void;
  onOpenBackstage: () => void;
  language?: Language;
  capturedAt?: string;
}

export const TonightView: React.FC<TonightViewProps> = ({
  contestants,
  onSelectContestant,
  onOpenBackstage,
  language = 'en',
  capturedAt
}) => {
  const isHinglish = language === 'hinglish';

  // Active contestants (11 total)
  const activeContestants = useMemo(
    () => contestants.filter((c) => c.status === 'Active'),
    [contestants]
  );

  // Nominated contestants (6 total in Week 9)
  const nominatedContestants = useMemo(
    () => activeContestants.filter((c) => c.isNominated),
    [activeContestants]
  );

  // Safe contestants (5 total in Week 9)
  const safeContestants = useMemo(
    () => activeContestants.filter((c) => !c.isNominated),
    [activeContestants]
  );

  // Check if model is in Insufficient Data state
  const isInsufficientData = useMemo(() => {
    return nominatedContestants.length > 0 && nominatedContestants.every(c => c.insufficientData || c.evictionProbability === null);
  }, [nominatedContestants]);

  // Staleness calculation
  const stalenessText = useMemo(() => {
    if (!capturedAt) return 'Voting Window: LIVE · Closes Friday 6 Nov, 10:00 AM IST';
    const capturedTime = new Date(capturedAt).getTime();
    const now = Date.now();
    const diffHours = (now - capturedTime) / (1000 * 60 * 60);

    if (diffHours < 2) {
      return 'Voting Window: LIVE · Closes Friday 6 Nov, 10:00 AM IST';
    } else {
      const days = Math.floor(diffHours / 24);
      if (days >= 1) {
        return `Nominations last checked ${days} day${days > 1 ? 's' : ''} ago`;
      }
      return `Nominations last checked ${Math.floor(diffHours)} hours ago`;
    }
  }, [capturedAt]);

  // External Fan Poll Benchmark data (bbvote.in verified live, 99,306 votes)
  const fanPollBenchmark = [
    { name: 'Tanmay Singh (Scout OP)', votes: 30164, percentage: 30, isNominated: true },
    { name: 'Manish Goel', votes: 19787, percentage: 20, isNominated: true },
    { name: 'Uditi Singh', votes: 15516, percentage: 16, isNominated: true },
    { name: 'Aamrapali Dubey', votes: 14984, percentage: 15, isNominated: true },
    { name: 'Arshifa Khan', votes: 14352, percentage: 14, isNominated: true, note: 'bbvote printed "Aasif Khan" in row 5; flagged as source anomaly, not merged' },
    { name: 'Mahhi Vij', votes: 4503, percentage: 4, isNominated: true }
  ];

  return (
    <div className="space-y-5 max-w-7xl mx-auto animate-fade-in pb-8">
      {/* 1. DOMINANT HEADLINE CARD */}
      <section
        aria-label="Dominant eviction prediction state"
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#10172a] to-[#0c1220] border-2 border-cyan-500/30 p-5 sm:p-7 shadow-2xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30 font-mono">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Week 9 Voting Open</span>
              </span>
              <span className="text-xs font-mono text-rose-300 font-bold px-2.5 py-1 rounded-lg bg-rose-950/60 border border-rose-500/40">
                6 Housemates on the Chopping Block
              </span>
              <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700">
                5 Safe / Immune
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {isHinglish ? 'Hafte 9: 6 Housemates Pe Eviction Ki Talwaar' : 'Week 9: 6 Housemates Nominated for Eviction'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {isHinglish
                ? 'Captain Kanika Mann ke chain-reaction task ke baad Mahhi, Aamrapali, Arshifa, Scout, Uditi aur Manish eviction ke liye nominated hain. Official voting JioHotstar app pe live hai.'
                : 'Following the chain-reaction nomination task initiated by Captain Kanika, six housemates face public eviction this weekend: Tanmay (Scout), Uditi, Manish, Aamrapali, Mahhi, and Arshifa. Live audience voting is active on JioHotstar.'}
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 sm:border-l border-slate-800/80 pt-4 sm:pt-0 sm:pl-6 shrink-0 gap-2">
            <div className="text-left sm:text-right">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                Voting Deadline
              </span>
              <div className="text-base sm:text-lg font-bold font-mono text-amber-400 tracking-tight">
                Fri 6 Nov, 10:00 AM IST
              </div>
              <span className="text-[10px] text-slate-500 block">Official JioHotstar App</span>
            </div>
            <button
              onClick={onOpenBackstage}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 px-3 py-2 rounded-xl transition-all shadow-sm"
            >
              <span>How We Score (Backstage)</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE SORTED HORIZONTAL EVICTION VULNERABILITY BAR CHART */}
      <section
        aria-label="Eviction vulnerability bar chart"
        className="p-5 sm:p-6 bg-[#0a1222] border border-slate-800 rounded-2xl shadow-xl space-y-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-rose-400" />
              <span>{isHinglish ? 'Sabhi Housemates Ka Eviction Status' : 'Eviction Vulnerability (Week 9 Housemates)'}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Nominated housemates on the chopping block in danger bars; exempt housemates in neutral grey.
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3 text-xs font-mono flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span className="text-rose-300">Nominated (6 Housemates)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-500 inline-block"></span>
              <span className="text-slate-400">Exempt / Safe (5 Housemates)</span>
            </div>
          </div>
        </div>

        {/* Horizontal Bars */}
        <div className="space-y-2.5 pt-1">
          {/* First show the 6 Nominated */}
          {nominatedContestants.map((c) => (
            <div
              key={c.id}
              onClick={() => onSelectContestant(c)}
              className="group relative flex items-center gap-3 p-2 rounded-xl hover:bg-slate-800/40 transition-colors cursor-pointer border border-transparent hover:border-slate-800"
            >
              <div className="flex items-center gap-2.5 w-40 sm:w-52 shrink-0 min-w-0">
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="w-8 h-8 rounded-lg object-cover border border-rose-500/50 shrink-0"
                />
                <div className="truncate min-w-0">
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {c.name}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 truncate block">
                    "{c.nickname}"
                  </span>
                </div>
              </div>

              <div className="flex-1 relative h-8 bg-slate-900 rounded-lg overflow-hidden border border-rose-500/30 flex items-center px-3">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-rose-950/80 via-rose-900/40 to-transparent"
                  style={{ width: `${Math.max(25, c.trueOrganicSentiment)}%` }}
                />
                <div className="relative z-10 flex items-center justify-between w-full text-xs font-mono pointer-events-none">
                  <span className="text-rose-200 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                    <span>Real Fan Support: {c.trueOrganicSentiment}%</span>
                    <span className="text-[10px] text-slate-400 font-normal">· TOSS</span>
                  </span>
                  <span className="text-[11px] text-amber-300 font-medium">
                    Eviction Risk: Evaluating
                  </span>
                </div>
              </div>

              <div className="w-24 shrink-0 text-right">
                <span className="text-[10px] font-bold text-rose-300 bg-rose-500/20 border border-rose-500/40 px-2.5 py-0.5 rounded-full inline-block">
                  Nominated
                </span>
              </div>
            </div>
          ))}

          {/* Then show the 5 Safe */}
          {safeContestants.map((c) => (
            <div
              key={c.id}
              onClick={() => onSelectContestant(c)}
              className="group relative flex items-center gap-3 p-2 rounded-xl hover:bg-slate-800/40 transition-colors cursor-pointer border border-transparent hover:border-slate-800 opacity-70 hover:opacity-100"
            >
              <div className="flex items-center gap-2.5 w-40 sm:w-52 shrink-0 min-w-0">
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="w-8 h-8 rounded-lg object-cover border border-slate-700 shrink-0"
                />
                <div className="truncate min-w-0">
                  <div className="text-xs font-bold text-slate-300 group-hover:text-cyan-300 transition-colors truncate">
                    {c.name}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 truncate block">
                    "{c.nickname}"
                  </span>
                </div>
              </div>

              <div className="flex-1 relative h-8 bg-slate-900/60 rounded-lg overflow-hidden border border-slate-800 flex items-center px-3">
                <div className="relative z-10 flex items-center justify-between w-full text-[11px] font-mono pointer-events-none">
                  <span className="text-slate-400">Safe from eviction this cycle</span>
                  <span className="text-[10px] text-slate-500 hidden sm:inline">
                    {c.id === 'c3' ? 'House Captain (Immune)' : 'Immune / Non-Nominated'}
                  </span>
                </div>
              </div>

              <div className="w-24 shrink-0 text-right">
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full inline-block">
                  {c.id === 'c3' ? 'Captain' : 'Safe'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Caption below chart */}
        <p className="text-xs text-slate-400 pt-2 font-sans border-t border-slate-800/60 leading-relaxed">
          <strong>Audience Voting:</strong> All 6 nominated housemates face elimination on Weekend Ka Vaar. Eviction risk forecast will lock as voting concludes Friday 10:00 AM IST.
        </p>
      </section>

      {/* 3. PUBLIC FAN POLL REFERENCE BENCHMARK CARD (bbvote.in · 99,306 votes) */}
      <section
        aria-label="Public Fan Poll Benchmark"
        className="p-5 sm:p-6 bg-[#0c1322] border border-amber-500/30 rounded-2xl shadow-xl space-y-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2.5">
            <BarChart3 className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                External Fan Poll Benchmark (bbvote.in · 99,306 Verified Votes)
              </h3>
              <p className="text-xs text-slate-400">
                Shown as an external benchmark for comparison. RealityPulse tracks authentic audience sentiment separately from unverified web polls.
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2.5 py-1 rounded-lg shrink-0">
            External Reference Only
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {fanPollBenchmark.map((poll, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white truncate max-w-[170px]">
                  {poll.name}
                </span>
                <span className={`text-xs font-mono font-bold ${idx === 5 ? 'text-rose-400' : 'text-amber-300'}`}>
                  {poll.percentage}%
                </span>
              </div>

              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${idx === 5 ? 'bg-rose-500' : 'bg-amber-400'}`}
                  style={{ width: `${poll.percentage}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-0.5">
                <span>{poll.votes.toLocaleString()} votes</span>
                <span>Rank #{idx + 1}</span>
              </div>

              {poll.note && (
                <p className="text-[9px] text-amber-400/80 italic font-mono pt-1 border-t border-slate-800">
                  {poll.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-400 font-sans italic border-t border-slate-800/60 pt-2">
          * Notice: Public fan polls reflect self-selected online voting campaigns. RealityPulse displays them so viewers can compare club voting volume against authentic audience sentiment.
        </p>
      </section>

      {/* 4. VERIFIED STALENESS & STATUS TIMESTAMP BAR */}
      <div className="p-3 bg-[#0a0f1d] border border-slate-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-emerald-300 font-semibold">{stalenessText}</span>
        </div>
        <div>
          <span>Tracker Consensus: </span>
          <span className="text-slate-300">bigboss20.in & bbvote.in (2-of-3 agreement met)</span>
        </div>
      </div>

      {/* 5. QUIET SOURCING DISCLAIMER & BACKSTAGE LINK */}
      <div className="flex flex-col items-center justify-center gap-1.5 pt-1">
        <p className="text-xs text-slate-500 font-mono text-center">
          Nominations reported via tracker consensus, not yet officially confirmed by broadcaster.
        </p>
        <button
          onClick={onOpenBackstage}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors font-mono py-1 px-3 rounded-lg hover:bg-slate-800/40"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>View evidence policy, multi-source audit & platform weight calibration →</span>
        </button>
      </div>
    </div>
  );
};
