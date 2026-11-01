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
  HelpCircle
} from 'lucide-react';
import { Contestant, PlatformWeightConfig, Language } from '../types';
import { calculateTOSS } from '../utils/analyticsEngine';
import { Sparkline } from './Sparkline';
import { EvictionTimelineView } from './EvictionTimelineView';
import { EVICTED_CONTESTANTS_TIMELINE } from '../data/mockRealityData';

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
  currentWeek = 8,
  currentDay = 52,
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

  // 2D Matrix Plot Coordinates with Anti-Overlap Repulsion
  // X: Social Buzz & PR Amplification Index (0-100)
  // Y: True Organic Broadcaster Loyalty TOSS (0-100, inverted for SVG/CSS top)
  const plotNodes = useMemo(() => {
    const rawNodes = evaluatedContestants
      .filter((c) => c.status === 'Active')
      .map((c) => {
        // Orthogonal metric: Social Echo Chamber vs Mass Broadcaster Voting
        const socialBuzzPRIndex = Math.round((c.loudMinorityIndex * 0.55) + (c.prInfiltrationRate * 0.45));
        const x = Math.max(12, Math.min(88, socialBuzzPRIndex));
        const y = Math.max(14, Math.min(86, 100 - c.calculatedToss));
        return { c, x, y };
      });

    // 3-pass repulsion relaxation algorithm to prevent avatar stacking
    for (let pass = 0; pass < 3; pass++) {
      for (let i = 0; i < rawNodes.length; i++) {
        for (let j = i + 1; j < rawNodes.length; j++) {
          const dx = rawNodes[i].x - rawNodes[j].x;
          const dy = rawNodes[i].y - rawNodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = 9; // minimum 9% distance between node centers
          if (dist < minDist && dist > 0) {
            const overlap = (minDist - dist) / 2;
            const nx = dx / dist;
            const ny = dy / dist;
            rawNodes[i].x = Math.max(10, Math.min(90, rawNodes[i].x + nx * overlap));
            rawNodes[i].y = Math.max(12, Math.min(88, rawNodes[i].y + ny * overlap));
            rawNodes[j].x = Math.max(10, Math.min(90, rawNodes[j].x - nx * overlap));
            rawNodes[j].y = Math.max(12, Math.min(88, rawNodes[j].y - ny * overlap));
          }
        }
      }
    }
    return rawNodes;
  }, [evaluatedContestants]);

  return (
    <div className="space-y-6">
      {/* Top Sub-View Switcher: Matrix vs Eviction Timeline */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-2 bg-[#0c1322] border border-slate-800 rounded-xl">
        <div className="flex items-center gap-2 p-1 bg-[#090f1c] border border-slate-800 rounded-lg">
          <button
            onClick={() => setViewMode('matrix')}
            className={`min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-md text-xs font-semibold transition-all ${
              viewMode === 'matrix'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4 text-cyan-400" />
            <span>
              {isHistorical
                ? `Active Housemates (Week ${effectiveWeek} Historical)`
                : `Active Housemates (Week ${effectiveWeek} Live)`}
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
            <Clock className="w-4 h-4 text-rose-400" />
            <span>
              {isHinglish ? 'Eviction Timeline (History)' : 'Eviction Timeline'}
            </span>
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
          Last Verified: 01 Nov 2026 · Day 52
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

            {/* Redesigned Spacious 2D Quadrant Matrix */}
            <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] bg-[#080d19] border border-slate-800 rounded-xl p-4 overflow-hidden shadow-inner">
              {/* Quadrant Background Zones with Clear Headers */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none">
                {/* Top-Left: Silent Majority Stronghold */}
                <div className="border-r border-b border-dashed border-slate-700/60 bg-emerald-500/[0.04] p-3 flex flex-col justify-start items-start">
                  <span className="px-2 py-1 rounded bg-emerald-950/80 border border-emerald-500/40 text-xs font-bold text-emerald-300 font-mono shadow-sm">
                    [SILENT MAJORITY] High Organic · Low PR Noise
                  </span>
                </div>

                {/* Top-Right: Consensus Heavyweights */}
                <div className="border-b border-dashed border-slate-700/60 bg-cyan-500/[0.04] p-3 flex flex-col justify-start items-end">
                  <span className="px-2 py-1 rounded bg-cyan-950/80 border border-cyan-500/40 text-xs font-bold text-cyan-300 font-mono shadow-sm">
                    [CONSENSUS HEAVYWEIGHTS] High Organic · High Buzz
                  </span>
                </div>

                {/* Bottom-Left: Ghost Factor / Elimination Hazard */}
                <div className="border-r border-dashed border-slate-700/60 bg-rose-500/[0.04] p-3 flex flex-col justify-end items-start">
                  <span className="px-2 py-1 rounded bg-rose-950/80 border border-rose-500/40 text-xs font-bold text-rose-300 font-mono shadow-sm">
                    [HIGH HAZARD] Ghost Factor / Low Mass Turnout
                  </span>
                </div>

                {/* Bottom-Right: Vocal PR Bubble / Vulnerable */}
                <div className="bg-amber-500/[0.04] p-3 flex flex-col justify-end items-end">
                  <span className="px-2 py-1 rounded bg-amber-950/80 border border-amber-500/40 text-xs font-bold text-amber-300 font-mono shadow-sm">
                    [VOCAL BUBBLE] Heavy PR Hype · Low Organic Loyalty
                  </span>
                </div>
              </div>

              {/* Crosshair Axes */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-700/60 pointer-events-none" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-700/60 pointer-events-none" />

              {/* Axis Labels */}
              <div className="absolute left-4 top-1/2 -translate-y-6 text-xs font-mono font-bold text-emerald-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800 pointer-events-none z-10">
                ▲ MASS AUDIENCE ORGANIC LOYALTY (TOSS)
              </div>
              <div className="absolute left-4 top-1/2 translate-y-2 text-xs font-mono font-bold text-rose-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800 pointer-events-none z-10">
                ▼ HIGH EVICTION VULNERABILITY
              </div>
              <div className="absolute right-4 bottom-3 text-xs font-mono font-bold text-amber-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800 pointer-events-none z-10">
                ► SOCIAL FANDOM BUZZ & PR AMPLIFICATION
              </div>

              {/* Non-overlapping, Color-Blind Accessible Plot Nodes */}
              {plotNodes.map(({ c, x, y }) => {
                const isDanger = c.calculatedRiskTier === 'High Danger';
                const isBubble = c.calculatedRiskTier === 'Vocal Bubble / At Risk';

                return (
                  <div
                    key={c.id}
                    onClick={() => onSelectContestant(c)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectContestant(c);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`${c.name}, ${c.calculatedRiskTier}, True TOSS ${c.calculatedToss} percent`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20 focus:outline-none"
                  >
                    <div className="flex flex-col items-center">
                      {/* Avatar node with distinct shape & icon */}
                      <div
                        className={`relative p-1.5 transition-transform duration-200 group-hover:scale-125 group-focus:scale-125 ${
                          isDanger
                            ? 'rounded-md border-2 border-rose-500 bg-rose-950/90 shadow-lg shadow-rose-950/60'
                            : isBubble
                            ? 'rounded-lg rotate-3 border-2 border-amber-500 bg-amber-950/90 shadow-lg shadow-amber-950/60'
                            : 'rounded-full border-2 border-emerald-500 bg-emerald-950/90 shadow-lg shadow-emerald-950/60'
                        }`}
                      >
                        <img
                          src={c.avatar}
                          alt={c.name}
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded object-cover"
                        />

                        {/* Shape icon indicator for color-blind accessibility */}
                        <div className="absolute -top-1.5 -left-1.5 p-0.5 rounded-full bg-slate-900 border border-slate-700">
                          {isDanger ? (
                            <AlertOctagon className="w-3 h-3 text-rose-400" />
                          ) : isBubble ? (
                            <AlertTriangle className="w-3 h-3 text-amber-400" />
                          ) : (
                            <Shield className="w-3 h-3 text-emerald-400" />
                          )}
                        </div>

                        {/* Nomination status badge */}
                        {c.isNominated && (
                          <span
                            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-rose-500 border-2 border-[#080d19]"
                            title="Nominated for Eviction"
                          />
                        )}
                      </div>

                      {/* Always-visible Name Pill */}
                      <span className="mt-1 px-1.5 py-0.5 text-[11px] font-bold text-white bg-slate-900/90 border border-slate-700 rounded whitespace-nowrap shadow-md group-hover:border-cyan-400 transition-colors">
                        {c.nickname || c.name.split(' ')[0]}
                      </span>
                    </div>

                    {/* Rich Hover/Focus Tooltip */}
                    <div className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 p-3 bg-slate-900/95 border border-slate-700 rounded-lg shadow-2xl text-left z-30 backdrop-blur-md">
                      <div className="font-bold text-xs text-white flex items-center justify-between pb-1 border-b border-slate-800">
                        <span>{c.name}</span>
                        <span className="font-mono text-cyan-400">{c.calculatedToss}% TOSS</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-2 space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Status:</span>
                          <span className={c.isNominated ? 'text-rose-400 font-bold' : 'text-emerald-400 font-semibold'}>
                            {c.isNominated ? 'Nominated' : 'Exempt'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">PR Infiltration:</span>
                          <span className="font-mono text-amber-300 font-bold">{c.prInfiltrationRate}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Eviction Odds:</span>
                          <span className="font-mono text-rose-400 font-bold">{c.calculatedEvictionProbability}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Risk Tier:</span>
                          <span className="text-white font-medium">{c.calculatedRiskTier}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                              <span className="text-xs text-slate-400 block">{c.role}</span>
                            </div>
                          </div>
                        </td>

                        {/* Status & Provenance */}
                        <td className="py-3 px-3 whitespace-nowrap">
                          {isEvicted ? (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-md">
                              Evicted (Wk {c.evictionWeek})
                              <span className="text-[10px] text-slate-500 font-mono">[Confirmed]</span>
                            </span>
                          ) : c.isNominated ? (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-300 bg-rose-500/15 border border-rose-500/40 px-2 py-0.5 rounded-md">
                              Nominated
                              <span className="text-[10px] text-rose-400 font-mono">[{c.nominationProvenance || 'Reported'}]</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/40 px-2 py-0.5 rounded-md">
                              Exempt
                              <span className="text-[10px] text-emerald-400 font-mono">[{c.statusProvenance || 'Official'}]</span>
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
          </div>
        </>
      )}
    </div>
  );
};
