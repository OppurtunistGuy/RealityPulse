import React, { useMemo } from 'react';
import {
  AlertTriangle,
  TrendingDown,
  ShieldCheck,
  ChevronRight,
  Sliders,
  Sparkles,
  Info
} from 'lucide-react';
import { Contestant, Language } from '../types';

interface TonightViewProps {
  contestants: Contestant[];
  onSelectContestant: (c: Contestant) => void;
  onOpenBackstage: () => void;
  language?: Language;
}

export const TonightView: React.FC<TonightViewProps> = ({
  contestants,
  onSelectContestant,
  onOpenBackstage,
  language = 'en'
}) => {
  const isHinglish = language === 'hinglish';

  // Active contestants
  const activeContestants = useMemo(
    () => contestants.filter((c) => c.status === 'Active'),
    [contestants]
  );

  // Nominated contestants
  const nominatedContestants = useMemo(
    () => activeContestants.filter((c) => c.isNominated),
    [activeContestants]
  );

  // Sorted by eviction vulnerability (highest risk first)
  const sortedByRisk = useMemo(() => {
    return [...activeContestants].sort((a, b) => {
      // Prioritize nominated contestants first if probability is tied
      const probA = a.evictionProbability ?? (a.isNominated ? 25 : 5);
      const probB = b.evictionProbability ?? (b.isNominated ? 25 : 5);
      return probB - probA;
    });
  }, [activeContestants]);

  // Dominant headline candidate: the person most vulnerable to leave tonight
  const primaryVulnerable = useMemo(() => {
    const nominatedSorted = [...nominatedContestants].sort((a, b) => {
      const probA = a.evictionProbability ?? 0;
      const probB = b.evictionProbability ?? 0;
      return probB - probA;
    });
    return nominatedSorted[0] || sortedByRisk[0];
  }, [nominatedContestants, sortedByRisk]);

  return (
    <div className="space-y-4 max-w-7xl mx-auto animate-fade-in pb-8">
      {/* 1. DOMINANT HEADLINE CARD (The single question a viewer came to answer) */}
      {primaryVulnerable && (
        <section
          aria-label="Dominant eviction prediction"
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-950/70 via-[#121226] to-[#0d1424] border-2 border-rose-500/40 p-5 sm:p-7 shadow-2xl shadow-rose-950/40"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            {/* Left: Dominant answer */}
            <div className="flex items-center gap-4 sm:gap-6 min-w-0">
              <div className="relative shrink-0">
                <img
                  src={primaryVulnerable.avatar}
                  alt={primaryVulnerable.name}
                  className="w-18 h-18 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-rose-500/60 shadow-lg"
                />
                <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider bg-rose-600 text-white shadow-md">
                  Nominated
                </span>
              </div>

              <div className="space-y-1 sm:space-y-1.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-mono">
                    <TrendingDown className="w-3.5 h-3.5" />
                    <span>{isHinglish ? 'Aaj Raat Eviction Khatra' : 'Most Likely to Leave Tonight'}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight truncate">
                  {primaryVulnerable.name}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  {primaryVulnerable.nickname} holds the lowest organic audience backing among tonight's nominees.
                  Silent majority index is critically depressed ({primaryVulnerable.silentMajorityIndex ?? 34}%), leaving her highly exposed in a multi-way public vote.
                </p>
              </div>
            </div>

            {/* Right: Dominant KPI Gauge */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 sm:border-l border-slate-800/80 pt-4 sm:pt-0 sm:pl-6 shrink-0 gap-2">
              <div className="text-left sm:text-right">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                  {isHinglish ? 'Immediate Khatra Score' : 'Immediate Eviction Risk'}
                </span>
                <div className="text-3xl sm:text-5xl font-black font-mono text-rose-400 tracking-tight">
                  {primaryVulnerable.evictionProbability ?? 52}%
                </div>
              </div>
              <button
                onClick={() => onSelectContestant(primaryVulnerable)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 px-3 py-2 rounded-xl transition-all shadow-sm"
              >
                <span>{isHinglish ? 'Dossier Dekho' : 'Open Housemate Dossier'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 2. SORTED HORIZONTAL EVICTION VULNERABILITY BAR CHART */}
      <section
        aria-label="Eviction vulnerability bar chart"
        className="p-5 sm:p-6 bg-[#0a1222] border border-slate-800 rounded-2xl shadow-xl space-y-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-rose-400" />
              <span>{isHinglish ? 'Sabhi Housemates Ka Eviction Khatra' : 'Eviction Vulnerability (Sorted by Immediate Risk)'}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Real fan support vs PR bot manipulation. Nominated housemates with low real support face immediate eviction tonight.
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3 text-xs font-mono flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span className="text-rose-300">Nominated (In Danger)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-500 inline-block"></span>
              <span className="text-slate-400">Exempt (Safe)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50 border border-amber-500/60 inline-block"></span>
              <span className="text-amber-300">PR Noise Gap</span>
            </div>
          </div>
        </div>

        {/* Sorted Horizontal Bars */}
        <div className="space-y-2.5 pt-1">
          {sortedByRisk.map((c) => {
            const risk = c.evictionProbability ?? (c.isNominated ? 25 : 5);
            const isNom = c.isNominated;
            const prGap = Math.max(0, c.prInflationDelta ?? 0);

            return (
              <div
                key={c.id}
                onClick={() => onSelectContestant(c)}
                className="group relative flex items-center gap-3 p-2 rounded-xl hover:bg-slate-800/40 transition-colors cursor-pointer border border-transparent hover:border-slate-800"
              >
                {/* Avatar & Name */}
                <div className="flex items-center gap-2.5 w-36 sm:w-48 shrink-0 min-w-0">
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="w-8 h-8 rounded-lg object-cover border border-slate-700 shrink-0"
                  />
                  <div className="truncate min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {c.name}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-slate-400 truncate">
                        "{c.nickname}"
                      </span>
                      {c.role === 'Wildcard' && (
                        <span className="text-[9px] font-bold text-purple-300 bg-purple-950/60 px-1 py-0.2 rounded border border-purple-500/40">
                          Wildcard
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Progress Bar Container */}
                <div className="flex-1 relative h-6 bg-slate-900 rounded-lg overflow-hidden border border-slate-800 flex items-center px-2">
                  {/* Background Bar: PR Noise / Manufactured Astroturf Gap */}
                  {prGap > 0 && (
                    <div
                      className="absolute left-0 top-0 bottom-0 bg-amber-500/20 border-r border-amber-500/40 transition-all duration-500"
                      style={{ width: `${Math.min(100, risk + prGap)}%` }}
                      title={`PR Noise Gap: +${prGap}% artificial hype`}
                    />
                  )}

                  {/* Foreground Danger/Exempt Bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 transition-all duration-500 rounded-l-lg ${
                      isNom
                        ? risk >= 40
                          ? 'bg-gradient-to-r from-rose-600 to-rose-500'
                          : 'bg-gradient-to-r from-amber-600 to-amber-500'
                        : 'bg-gradient-to-r from-slate-600 to-slate-500 opacity-60'
                    }`}
                    style={{ width: `${Math.max(4, risk)}%` }}
                  />

                  {/* Bar Value Overlays */}
                  <div className="relative z-10 flex items-center justify-between w-full text-[11px] font-mono font-bold pointer-events-none">
                    <span className={isNom ? 'text-white' : 'text-slate-300'}>
                      {c.insufficientData ? 'Insufficient data' : `${risk}% risk`}
                    </span>
                    <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">
                      Real fan support: {c.trueOrganicSentiment}%
                    </span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="w-20 shrink-0 text-right">
                  {isNom ? (
                    <span className="text-[10px] font-bold text-rose-300 bg-rose-500/20 border border-rose-500/30 px-2 py-0.5 rounded-full inline-block">
                      Nominated
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full inline-block">
                      Exempt
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Caption below chart */}
        <p className="text-xs text-slate-400 pt-1 font-sans border-t border-slate-800/60">
          <strong>How to read this chart:</strong> Red bars indicate nominated housemates whose real fan votes cannot overcome their negative sentiment deficit. The amber overlay indicates artificial bot activity attempting to mask vulnerability.
        </p>
      </section>

      {/* 3. NOMINATED HOUSEMATES SUMMARY ROW */}
      <section
        aria-label="Nominated housemates overview"
        className="p-4 bg-[#0c1322] border border-slate-800 rounded-xl space-y-2.5"
      >
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
            {isHinglish ? 'Is Hafte Ke Nominees' : 'Current Week Nominees on the Chopping Block'} ({nominatedContestants.length})
          </h4>
          <span className="text-[11px] font-mono text-cyan-400">
            Voting Window: Live
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
          {nominatedContestants.map((c) => (
            <button
              key={c.id}
              onClick={() => onSelectContestant(c)}
              className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all text-left"
            >
              <img
                src={c.avatar}
                alt={c.name}
                className="w-7 h-7 rounded-md object-cover border border-slate-700 shrink-0"
              />
              <div className="min-w-0 truncate">
                <div className="text-xs font-bold text-white truncate">{c.name.split(' ')[0]}</div>
                <div className="text-[10px] font-mono text-rose-400 font-semibold">{c.evictionProbability ?? 25}% Risk</div>
              </div>
            </button>
          ))}
        </div>

        {/* Quiet Sourcing Disclaimer */}
        <p className="text-xs text-slate-400 font-mono text-center pt-2 border-t border-slate-800/60">
          Nominations reported, not yet officially confirmed.
        </p>
      </section>

      {/* 4. QUIET LINK TO BACKSTAGE MACHINERY */}
      <div className="pt-2 flex justify-center">
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
