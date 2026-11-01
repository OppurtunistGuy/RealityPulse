import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  ArrowUpDown,
  Search,
  Flame,
  Globe,
  Sliders,
  Users,
  Clock,
  Shield,
  AlertOctagon,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { Contestant, PlatformWeightConfig, Language } from '../types';
import { calculateTOSS } from '../utils/analyticsEngine';
import { Sparkline } from './Sparkline';
import { EvictionTimelineView } from './EvictionTimelineView';
import { EVICTED_CONTESTANTS_TIMELINE } from '../data/mockRealityData';
import { BB20_NOMINATION_AUDIT_DATA } from '../data/bb20ContestantsStatic';
import { calculateShowTimeline } from '../data/timelineConfig';

interface EvictionMatrixViewProps {
  contestants: Contestant[];
  onSelectContestant: (c: Contestant) => void;
  weights: PlatformWeightConfig;
  onWeightsChange: (weights: PlatformWeightConfig) => void;
  onOpenSources?: () => void;
  isNominationOnly?: boolean;
  language: Language;
  currentWeek?: number;
  currentDay?: number;
  capturedAt?: string;
  isHistorical?: boolean;
  selectedWeek?: number | null;
  onSelectWeek?: (week: number) => void;
}

export const EvictionMatrixView: React.FC<EvictionMatrixViewProps> = ({
  contestants,
  onSelectContestant,
  weights,
  onWeightsChange,
  onOpenSources,
  isNominationOnly = false,
  language,
  currentWeek = calculateShowTimeline().currentWeek,
  currentDay = calculateShowTimeline().currentDay,
  capturedAt,
  isHistorical = false,
  selectedWeek,
  onSelectWeek
}) => {
  const isHinglish = language === 'hinglish';
  const effectiveWeek = selectedWeek ?? currentWeek;
  const effectiveDay = isHistorical && selectedWeek ? selectedWeek * 7 : currentDay;

  const [viewMode, setViewMode] = useState<'matrix' | 'timeline'>('matrix');
  const [showWeightDrawer, setShowWeightDrawer] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<'toss' | 'raw' | 'prDelta' | 'evictionProbability' | 'trend'>('toss');
  const [sortAsc, setSortAsc] = useState(false);

  // Re-calculate live TOSS and Eviction Probability dynamically using weights
  const evaluatedContestants = contestants.map((c) => {
    const tossResult = calculateTOSS(c, weights);

    return {
      ...c,
      calculatedToss: tossResult.toss,
      calculatedRaw: tossResult.raw,
      calculatedPrDelta: tossResult.prDelta,
      calculatedRiskTier: tossResult.riskTier,
      calculatedEvictionProbability: tossResult.evictionProbability
    };
  });

  const activeContestants = evaluatedContestants.filter((c) => c.status === 'Active');

  const filteredContestants = evaluatedContestants
    .filter((c) => {
      // In matrix view, focus on active housemates unless explicitly searching or viewing all
      if (!searchQuery.trim() && c.status === 'Evicted') return false;
      if (isNominationOnly && !c.isNominated) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          c.name.toLowerCase().includes(q) ||
          c.nickname.toLowerCase().includes(q) ||
          c.role.toLowerCase().includes(q)
        );
      }
      return true;
    })
    .sort((a, b) => {
      let valA = 0;
      let valB = 0;
      if (sortField === 'toss') {
        valA = a.calculatedToss;
        valB = b.calculatedToss;
      } else if (sortField === 'raw') {
        valA = a.calculatedRaw;
        valB = b.calculatedRaw;
      } else if (sortField === 'prDelta') {
        valA = a.calculatedPrDelta;
        valB = b.calculatedPrDelta;
      } else if (sortField === 'evictionProbability') {
        valA = a.calculatedEvictionProbability;
        valB = b.calculatedEvictionProbability;
      } else if (sortField === 'trend') {
        const deltaA = (a.tossTrend7d?.[a.tossTrend7d.length - 1] ?? 0) - (a.tossTrend7d?.[0] ?? 0);
        const deltaB = (b.tossTrend7d?.[b.tossTrend7d.length - 1] ?? 0) - (b.tossTrend7d?.[0] ?? 0);
        valA = deltaA;
        valB = deltaB;
      }
      return sortAsc ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
    });

  // KPI calculations
  const nominatedList = activeContestants.filter((c) => c.isNominated);
  const highestPrInfiltration = [...activeContestants].sort((a, b) => b.prInfiltrationRate - a.prInfiltrationRate)[0];
  const organicFavorite = [...activeContestants].sort((a, b) => b.calculatedToss - a.calculatedToss)[0];
  const mostVulnerable = [...nominatedList].sort((a, b) => b.calculatedEvictionProbability - a.calculatedEvictionProbability)[0];

  const toggleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  // Sorted Housemates by Eviction Vulnerability (Highest Risk first)
  const sortedByVulnerability = useMemo(() => {
    return [...evaluatedContestants]
      .filter((c) => c.status === 'Active')
      .sort((a, b) => {
        const probA = a.calculatedEvictionProbability ?? -1;
        const probB = b.calculatedEvictionProbability ?? -1;
        return probB - probA;
      });
  }, [evaluatedContestants]);

  return (
    <div className="space-y-6">
      {/* Top Sub-View Switcher: Matrix vs Eviction Timeline */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-2 bg-[#0c1322] border border-slate-800 rounded-xl">
        <div className="flex flex-wrap items-center gap-2 p-1 bg-[#090f1c] border border-slate-800 rounded-lg">
          <button
            onClick={() => setViewMode('matrix')}
            className={`min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-md text-xs font-semibold transition-all ${
              viewMode === 'matrix'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="hidden sm:inline">
              {isHistorical
                ? `Active Housemates (Week ${effectiveWeek} Historical)`
                : `Active Housemates (Week ${effectiveWeek} Live)`}
            </span>
            <span className="sm:hidden">
              Active ({effectiveWeek})
            </span>
            <span className="px-2 py-0.5 text-xs bg-slate-800 rounded text-slate-300 font-mono font-bold">
              {activeContestants.length}
            </span>
          </button>

          <button
            onClick={() => setViewMode('timeline')}
            className={`min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-md text-xs font-semibold transition-all ${
              viewMode === 'timeline'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Clock className="w-4 h-4 text-rose-400 shrink-0" />
            <span className="hidden sm:inline">
              {isHinglish ? 'Eviction Timeline (History)' : 'Eviction Timeline'}
            </span>
            <span className="sm:hidden">Timeline</span>
            <span className="px-2 py-0.5 text-xs bg-rose-950/60 border border-rose-500/30 rounded text-rose-300 font-mono font-bold">
              {EVICTED_CONTESTANTS_TIMELINE.length}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400 pr-2 flex-wrap">
          {/* Historical Week Picker */}
          {onSelectWeek && (
            <div className="flex items-center gap-2 bg-[#090f1c] px-3 py-2 rounded-lg border border-slate-800 min-h-[44px]">
              <span className="text-xs text-slate-400 font-mono font-bold">Snapshot:</span>
              <select
                value={selectedWeek ?? currentWeek}
                onChange={(e) => onSelectWeek(Number(e.target.value))}
                className="bg-transparent text-cyan-300 text-xs font-mono font-bold focus:outline-none cursor-pointer"
                aria-label="Select snapshot week"
              >
                {Array.from({ length: currentWeek }, (_, i) => i + 1).map((w) => (
                  <option key={w} value={w} className="bg-slate-900 text-slate-200">
                    Week {w} {w === currentWeek ? '(Live)' : '(Historical)'}
                  </option>
                ))}
              </select>
            </div>
          )}

          <span className="font-mono text-cyan-400 font-bold">
            {isHistorical ? 'HISTORICAL SNAPSHOT' : (isHinglish ? 'Voting: LIVE' : 'Voting Window: LIVE')}
          </span>
          <span>·</span>
          <span className="font-semibold text-slate-300">Week {effectiveWeek} (Day {effectiveDay}) Phase</span>
        </div>
      </div>

      {/* Historical Lookback Notice Banner */}
      {isHistorical && (
        <div className="p-4 bg-amber-950/30 border border-amber-600/40 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-300">
          <div className="flex items-center gap-2.5">
            <span className="font-bold uppercase tracking-wider text-xs px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/40">
              Historical Lookback
            </span>
            <span>
              Viewing snapshot for <strong>Week {effectiveWeek}</strong> (Day {effectiveDay}). Cards and roster reflect verified standings for that week.
            </span>
          </div>
          {onSelectWeek && (
            <button
              onClick={() => onSelectWeek(currentWeek)}
              className="min-h-[40px] px-3 py-1.5 text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white rounded-md transition-colors shrink-0"
            >
              Return to Live Week {currentWeek}
            </button>
          )}
        </div>
      )}

      {/* Broadcaster Authority & Provenance Policy Notice */}
      <div className="p-3 bg-[#0d1627] border border-cyan-900/40 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-slate-300">
            <strong className="text-white font-semibold">{isHinglish ? 'Broadcaster Policy:' : 'Evidence Policy:'}</strong>{' '}
            {isHinglish
              ? 'Roster status official JioHotstar/Colors TV broadcasts se locked hai. Nominated aur Evicted facts pe [Official] ya [Reported] provenance tag hai.'
              : 'Official roster status and evictions are verified via JioHotstar and Colors TV. Facts carry explicit [Official] or [Reported] provenance tags.'}
          </span>
        </div>
        <span className="font-mono text-xs text-cyan-400 shrink-0">
          Last Verified: 01 Nov 2026 · Day {effectiveDay}
        </span>
      </div>

      {/* Conditionally Render Timeline or Matrix */}
      {viewMode === 'timeline' ? (
        <EvictionTimelineView
          timeline={EVICTED_CONTESTANTS_TIMELINE}
          language={language}
          currentWeek={effectiveWeek}
          currentDay={effectiveDay}
          onSelectContestantById={(id) => {
            const match = contestants.find((c) => c.id === id);
            if (match) onSelectContestant(match);
          }}
        />
      ) : (
        <>
          {/* Executive KPI Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-[#11192a] border border-slate-800 rounded-xl">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="font-semibold">{isHinglish ? 'Eviction Khatre Mein' : 'Nominated for Eviction'}</span>
                <span className="font-mono text-cyan-400 font-bold">Week {effectiveWeek}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-mono text-white tabular-nums">
                  {nominatedList.length}
                </span>
                <span className="text-xs text-slate-400">
                  of {activeContestants.length} active housemates
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                {isHistorical
                  ? `Historical ballot for Week ${effectiveWeek}`
                  : 'Reported via entertainment desk (FilmiBeat)'}
              </p>
            </div>

            <div className="p-4 bg-[#11192a] border border-slate-800 rounded-xl">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="font-semibold">{isHinglish ? 'Sabse Zyada PR Bot Inflation' : 'Highest PR Astroturfing'}</span>
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-mono text-amber-300 tabular-nums">
                  {highestPrInfiltration ? `${highestPrInfiltration.prInfiltrationRate}%` : '0%'}
                </span>
                <span className="text-xs text-slate-300 font-semibold truncate max-w-[130px]">
                  {highestPrInfiltration?.name}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Coordinated copy-paste swarms quarantined
              </p>
            </div>

            <div className="p-4 bg-[#11192a] border border-slate-800 rounded-xl">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="font-semibold">{isHinglish ? 'Asli Janta Leader (TOSS)' : 'True Organic Leader'}</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                  {organicFavorite?.calculatedToss}% TOSS
                </span>
                <span className="text-xs text-slate-300 font-semibold truncate max-w-[130px]">
                  {organicFavorite?.name}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Driven by mass YouTube polls & casual viewers
              </p>
            </div>

            <div className="p-4 bg-[#11192a] border border-slate-800 rounded-xl">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="font-semibold">{isHinglish ? 'Sabse Zyada Eviction Khatra' : 'Top Eviction Vulnerability'}</span>
                <Flame className="w-4 h-4 text-rose-400" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-mono text-rose-400 tabular-nums">
                  {mostVulnerable?.calculatedEvictionProbability}%
                </span>
                <span className="text-xs text-rose-300 font-semibold truncate max-w-[130px]">
                  {mostVulnerable?.name}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Highest vulnerability on public voting ratio
              </p>
            </div>
          </div>

          {/* Eviction Risk Matrix (Redesigned 2D Visual Scatter) */}
          <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Eviction Risk Matrix: Organic Loyalty vs Social Echo Chamber</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Plots authentic audience voting power against vocal social fandom noise. Avatars spread naturally across all 4 quadrants.
                </p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {onOpenSources && (
                  <button
                    onClick={onOpenSources}
                    className="min-h-[40px] flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/40 rounded-lg border border-cyan-800/60 transition-colors"
                    title="Inspect real source handles and media feeds"
                  >
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span>Verified Feeds</span>
                  </button>
                )}
                <button
                  onClick={() => setShowWeightDrawer(!showWeightDrawer)}
                  className="min-h-[40px] flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                >
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span>Platform Weights</span>
                </button>
              </div>
            </div>

            {/* Weights Drawer */}
            {showWeightDrawer && (
              <div className="p-4 bg-[#0d1424] border border-cyan-900/50 rounded-lg space-y-4 animate-fade-in text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-cyan-300 text-sm">
                    Calibrate Platform Weights in TOSS Formula
                  </span>
                  <span className="font-mono text-slate-400">Total: 100%</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 font-medium">YouTube (Mass Votes):</span>
                      <span className="font-mono text-cyan-400 font-bold">{(weights.youtube * 100).toFixed(0)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.10"
                      max="0.60"
                      step="0.05"
                      value={weights.youtube}
                      onChange={(e) => onWeightsChange({ ...weights, youtube: parseFloat(e.target.value) })}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 font-medium">Google News & Media:</span>
                      <span className="font-mono text-cyan-400 font-bold">{(weights.googleNews * 100).toFixed(0)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.05"
                      max="0.40"
                      step="0.05"
                      value={weights.googleNews}
                      onChange={(e) => onWeightsChange({ ...weights, googleNews: parseFloat(e.target.value) })}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 font-medium">X / Twitter (Speed/PR):</span>
                      <span className="font-mono text-cyan-400 font-bold">{(weights.xTwitter * 100).toFixed(0)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.05"
                      max="0.40"
                      step="0.05"
                      value={weights.xTwitter}
                      onChange={(e) => onWeightsChange({ ...weights, xTwitter: parseFloat(e.target.value) })}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 font-medium">Instagram (Reels):</span>
                      <span className="font-mono text-cyan-400 font-bold">{(weights.instagram * 100).toFixed(0)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.05"
                      max="0.40"
                      step="0.05"
                      value={weights.instagram}
                      onChange={(e) => onWeightsChange({ ...weights, instagram: parseFloat(e.target.value) })}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 font-medium">Threads (Discourse):</span>
                      <span className="font-mono text-cyan-400 font-bold">{(weights.threads * 100).toFixed(0)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.05"
                      max="0.40"
                      step="0.05"
                      value={weights.threads}
                      onChange={(e) => onWeightsChange({ ...weights, threads: parseFloat(e.target.value) })}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Sorted Horizontal Eviction Vulnerability Bar Chart */}
            <div className="p-4 sm:p-6 bg-[#0a1222] border border-slate-800 rounded-xl space-y-4 shadow-inner">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-rose-400" />
                    <span>Eviction Vulnerability Index (Sorted by Immediate Risk)</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Answering who is most likely going home tonight. Nominated housemates in colored danger bars; exempt housemates in neutral grey. Background bar reveals PR astroturfing noise gap.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                    <span className="text-rose-300">Nominated / Danger</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-500 inline-block"></span>
                    <span className="text-slate-400">Exempt</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50 border border-amber-500/60 inline-block"></span>
                    <span className="text-amber-300">PR Noise Gap</span>
                  </div>
                </div>
              </div>

              {/* Responsive Horizontal Bars List */}
              <div className="space-y-2.5 pt-1">
                {sortedByVulnerability.map((c, index) => {
                  const isNominated = c.isNominated;
                  const prob = c.calculatedEvictionProbability;
                  const isInsufficient = c.insufficientData || prob == null;

                  return (
                    <div
                      key={c.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`${c.name}, ${isNominated ? 'Nominated' : 'Exempt'}, Eviction Risk ${prob ?? 'insufficient data'} percent`}
                      onClick={() => onSelectContestant(c)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onSelectContestant(c);
                        }
                      }}
                      className="group p-3 rounded-lg bg-[#0e1626] hover:bg-slate-800/60 border border-slate-800/80 transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-mono font-bold text-slate-500 w-5">
                            #{index + 1}
                          </span>
                          <img
                            src={c.avatar}
                            alt={c.name}
                            className="w-7 h-7 rounded-lg object-cover border border-slate-700 shrink-0"
                          />
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {c.name}
                            </span>
                            {c.role === 'Wildcard' && (
                              <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold">
                                Wildcard
                              </span>
                            )}
                            {isNominated ? (
                              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-mono font-bold">
                                Nominated
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 text-[10px] font-mono">
                                Exempt
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Metric readout */}
                        <div className="flex items-center gap-3 text-xs font-mono self-end sm:self-auto flex-wrap">
                          <span className="text-slate-400">
                            TOSS: <strong className="text-cyan-400">{c.calculatedToss}%</strong>
                          </span>
                          <span className="text-slate-400">
                            PR: <strong className="text-amber-400">{c.prInfiltrationRate}%</strong>
                          </span>
                          {isInsufficient ? (
                            <span className="text-xs text-slate-400 italic">Insufficient data</span>
                          ) : (
                            <span className="text-xs font-bold">
                              Risk:{' '}
                              <span
                                className={
                                  isNominated
                                    ? prob >= 60
                                      ? 'text-rose-400 font-extrabold'
                                      : 'text-amber-400'
                                    : 'text-slate-400'
                                }
                              >
                                {prob}%
                              </span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bar Track */}
                      <div className="relative w-full h-3 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                        {/* Background PR Noise indicator */}
                        <div
                          className="absolute top-0 bottom-0 left-0 bg-amber-500/30 border-r border-amber-400"
                          style={{ width: `${Math.min(100, Math.max(0, c.prInfiltrationRate))}%` }}
                          title={`PR Astroturfing Noise: ${c.prInfiltrationRate}%`}
                        />
                        {/* Foreground Eviction Risk Bar */}
                        {!isInsufficient && (
                          <div
                            className={`absolute top-0 bottom-0 left-0 transition-all duration-500 rounded-full ${
                              isNominated
                                ? prob >= 60
                                  ? 'bg-gradient-to-r from-rose-600 to-rose-400 shadow-sm shadow-rose-950'
                                  : 'bg-gradient-to-r from-amber-600 to-amber-400'
                                : 'bg-gradient-to-r from-slate-600 to-slate-400'
                            }`}
                            style={{ width: `${Math.min(100, Math.max(4, prob))}%` }}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Roster & Table Section with Front-Loaded Key Columns */}
          <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Housemate Intelligence Roster & Sentiment Index
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Click or press Enter on any row to open the full dossier. Columns sortable via keyboard.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search contestant..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="min-h-[40px] pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 w-48 sm:w-60"
                  />
                </div>
              </div>
            </div>

            {/* High-Density Accessible Table */}
            <div className="overflow-x-auto border border-slate-800 rounded-lg">
              <table className="w-full text-left text-xs" role="table">
                <thead className="bg-[#0e1626] border-b border-slate-800 text-slate-400 font-semibold select-none">
                  <tr>
                    <th scope="col" className="py-3.5 px-4">Housemate</th>
                    <th scope="col" className="py-3.5 px-3">Status & Provenance</th>
                    <th
                      scope="col"
                      role="columnheader"
                      tabIndex={0}
                      aria-sort={sortField === 'toss' ? (sortAsc ? 'ascending' : 'descending') : 'none'}
                      onClick={() => toggleSort('toss')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleSort('toss');
                        }
                      }}
                      className="py-3.5 px-3 cursor-pointer hover:text-slate-200 focus:outline-none"
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-cyan-300 font-bold">True TOSS</span>
                        <ArrowUpDown className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                    </th>
                    {/* Front-loaded Eviction Risk (Now Column 4) */}
                    <th
                      scope="col"
                      role="columnheader"
                      tabIndex={0}
                      aria-sort={sortField === 'evictionProbability' ? (sortAsc ? 'ascending' : 'descending') : 'none'}
                      onClick={() => toggleSort('evictionProbability')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleSort('evictionProbability');
                        }
                      }}
                      className="py-3.5 px-3 cursor-pointer hover:text-slate-200 focus:outline-none"
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-rose-300 font-bold">Eviction Risk</span>
                        <ArrowUpDown className="w-3.5 h-3.5 text-rose-400" />
                      </div>
                    </th>
                    <th
                      scope="col"
                      role="columnheader"
                      tabIndex={0}
                      aria-sort={sortField === 'raw' ? (sortAsc ? 'ascending' : 'descending') : 'none'}
                      onClick={() => toggleSort('raw')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleSort('raw');
                        }
                      }}
                      className="py-3.5 px-3 cursor-pointer hover:text-slate-200 focus:outline-none"
                    >
                      <div className="flex items-center gap-1">
                        <span>Raw Sent.</span>
                        <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                    </th>
                    <th
                      scope="col"
                      role="columnheader"
                      tabIndex={0}
                      aria-sort={sortField === 'prDelta' ? (sortAsc ? 'ascending' : 'descending') : 'none'}
                      onClick={() => toggleSort('prDelta')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleSort('prDelta');
                        }
                      }}
                      className="py-3.5 px-3 cursor-pointer hover:text-slate-200 focus:outline-none"
                    >
                      <div className="flex items-center gap-1">
                        <span>PR Delta</span>
                        <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                    </th>
                    <th
                      scope="col"
                      role="columnheader"
                      tabIndex={0}
                      aria-sort={sortField === 'trend' ? (sortAsc ? 'ascending' : 'descending') : 'none'}
                      onClick={() => toggleSort('trend')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleSort('trend');
                        }
                      }}
                      className="py-3.5 px-3 cursor-pointer hover:text-slate-200 focus:outline-none"
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-slate-300">7-Day Trend</span>
                        <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                    </th>
                    <th scope="col" className="py-3.5 px-3">Audience Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 bg-[#11192a]">
                  {filteredContestants.map((c) => {
                    const isDanger = c.calculatedRiskTier === 'High Danger';
                    const isBubble = c.calculatedRiskTier === 'Vocal Bubble / At Risk';
                    const isEvicted = c.status === 'Evicted';

                    return (
                      <tr
                        key={c.id}
                        role="button"
                        tabIndex={0}
                        aria-label={`Open dossier for ${c.name}, ${c.calculatedRiskTier}, True TOSS ${c.calculatedToss} percent`}
                        onClick={() => onSelectContestant(c)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onSelectContestant(c);
                          }
                        }}
                        className="hover:bg-slate-800/40 cursor-pointer transition-colors focus:outline-none focus:bg-slate-800/60"
                      >
                        {/* Contestant */}
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={c.avatar}
                              alt={c.name}
                              className="w-10 h-10 rounded-lg object-cover border border-slate-700/80 shrink-0"
                            />
                            <div className="min-w-0">
                              <div className="font-bold text-white tracking-tight flex items-center gap-1.5 whitespace-nowrap">
                                <span>{c.name}</span>
                                {c.nickname && !c.name.includes(c.nickname) && (
                                  <span className="text-xs text-slate-400 font-mono">"{c.nickname}"</span>
                                )}
                              </div>
                              {c.role === 'Wildcard' && (
                                <span className="inline-block mt-0.5 px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold">
                                  Wildcard
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Status & Provenance */}
                        <td className="py-3 px-3 whitespace-nowrap">
                          {isEvicted ? (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-md">
                              Evicted (Wk {c.evictionWeek})
                              <span className="text-[10px] text-slate-400 font-mono">
                                [{c.statusProvenance === 'official' ? 'Official' : 'Reported'}]
                              </span>
                            </span>
                          ) : c.nominationProvenance === 'disputed' ? (
                            <span
                              className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 bg-amber-500/15 border border-amber-500/40 px-2 py-0.5 rounded-md"
                              title={c.nominationNote}
                            >
                              Disputed
                              <span className="text-[10px] text-amber-400 font-mono">[Reported: Disputed]</span>
                            </span>
                          ) : c.isNominated ? (
                            <span
                              className="inline-flex items-center gap-1 text-xs font-bold text-rose-300 bg-rose-500/15 border border-rose-500/40 px-2 py-0.5 rounded-md"
                              title={c.nominationNote}
                            >
                              Nominated
                              <span className="text-[10px] text-rose-400 font-mono">[Reported]</span>
                            </span>
                          ) : (
                            <span
                              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/40 px-2 py-0.5 rounded-md"
                              title={c.nominationNote}
                            >
                              Exempt
                              <span className="text-[10px] text-emerald-400 font-mono">[{c.statusProvenance === 'official' ? 'Official' : 'Reported'}]</span>
                            </span>
                          )}
                        </td>

                        {/* True Organic Sentiment (TOSS) */}
                        <td className="py-3 px-3 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="font-mono tabular-nums font-bold text-cyan-300 text-sm">
                              {c.calculatedToss}%
                            </span>
                            <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden hidden sm:block">
                              <div
                                className="h-full bg-cyan-400 rounded-full"
                                style={{ width: `${c.calculatedToss}%` }}
                              />
                            </div>
                          </div>
                        </td>

                        {/* Eviction Risk (Column 4) */}
                        <td className="py-3 px-3 whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`font-mono tabular-nums font-bold text-sm ${
                                isDanger
                                  ? 'text-rose-400'
                                  : isBubble
                                  ? 'text-amber-400'
                                  : 'text-emerald-400'
                              }`}
                            >
                              {c.calculatedEvictionProbability}%
                            </span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded font-semibold border ${
                                isDanger
                                  ? 'text-rose-400 border-rose-500/40 bg-rose-500/10'
                                  : isBubble
                                  ? 'text-amber-400 border-amber-500/40 bg-amber-500/10'
                                  : 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10'
                              }`}
                            >
                              {c.calculatedRiskTier}
                            </span>
                          </div>
                        </td>

                        {/* Raw Sentiment */}
                        <td className="py-3 px-3 font-mono tabular-nums text-slate-300 whitespace-nowrap">
                          {c.calculatedRaw}%
                        </td>

                        {/* PR Inflation Delta */}
                        <td className="py-3 px-3 font-mono tabular-nums whitespace-nowrap">
                          <span
                            className={`font-semibold ${
                              c.calculatedPrDelta > 20
                                ? 'text-rose-400'
                                : c.calculatedPrDelta > 0
                                ? 'text-amber-400'
                                : 'text-emerald-400'
                            }`}
                          >
                            {c.calculatedPrDelta > 0 ? `+${c.calculatedPrDelta}%` : `${c.calculatedPrDelta}%`}
                          </span>
                        </td>

                        {/* 7-Day TOSS Trend Sparkline with Scale */}
                        <td className="py-3 px-3 whitespace-nowrap">
                          <Sparkline data={c.tossTrend7d} />
                        </td>

                        {/* Audience Balance (Silent Majority vs PR Infiltration) */}
                        <td className="py-3 px-3 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="text-xs">
                              <span className="text-slate-400">Silent (YT): </span>
                              <span className="font-mono font-bold text-slate-200">{c.silentMajorityIndex}%</span>
                            </div>
                            <div className="text-xs">
                              <span className="text-slate-400">PR: </span>
                              <span className="font-mono font-bold text-amber-300">{c.prInfiltrationRate}%</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Quiet Hedging Disclaimer */}
            <p className="text-xs text-slate-500 font-mono text-center pt-2">
              Nominations reported, not yet officially confirmed.
            </p>
          </div>
        </>
      )}
    </div>
  );
};
