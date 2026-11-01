import React, { useState } from 'react';
import {
  AlertTriangle,
  ShieldCheck,
  Flame,
  Info,
  Sliders,
  RotateCcw,
  ExternalLink,
  Search,
  Filter,
  ArrowUpDown,
  Globe
} from 'lucide-react';
import { Contestant, PlatformWeightConfig, RiskTier } from '../types';
import { calculateTOSS, DEFAULT_PLATFORM_WEIGHTS } from '../utils/analyticsEngine';
import { Sparkline } from './Sparkline';

interface EvictionMatrixViewProps {
  contestants: Contestant[];
  onSelectContestant: (c: Contestant) => void;
  weights: PlatformWeightConfig;
  onWeightsChange: (w: PlatformWeightConfig) => void;
  onOpenSources?: () => void;
  isNominationOnly: boolean;
}

export const EvictionMatrixView: React.FC<EvictionMatrixViewProps> = ({
  contestants,
  onSelectContestant,
  weights,
  onWeightsChange,
  onOpenSources,
  isNominationOnly
}) => {
  const [showWeightDrawer, setShowWeightDrawer] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<'evictionProbability' | 'toss' | 'raw' | 'prDelta' | 'trend'>('evictionProbability');
  const [sortAsc, setSortAsc] = useState(false);

  // Compute calculated metrics dynamically based on current weights
  const evaluatedContestants = contestants.map((c) => {
    const calc = calculateTOSS(c, weights);
    return {
      ...c,
      calculatedToss: calc.toss,
      calculatedRaw: calc.raw,
      calculatedPrDelta: calc.prDelta,
      calculatedRiskTier: calc.riskTier,
      calculatedEvictionProbability: calc.evictionProbability
    };
  });

  const filteredContestants = evaluatedContestants
    .filter((c) => {
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
  const nominatedList = evaluatedContestants.filter((c) => c.isNominated);
  const highestPrInfiltration = [...evaluatedContestants].sort((a, b) => b.prInfiltrationRate - a.prInfiltrationRate)[0];
  const organicFavorite = [...evaluatedContestants].sort((a, b) => b.calculatedToss - a.calculatedToss)[0];
  const mostVulnerable = [...nominatedList].sort((a, b) => b.calculatedEvictionProbability - a.calculatedEvictionProbability)[0];

  const toggleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Executive KPI Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-[#11192a] border border-slate-800 rounded-xl">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Nominated for Eviction</span>
            <span className="font-mono text-cyan-400">Week 5</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-white tabular-nums">
              {nominatedList.length}
            </span>
            <span className="text-xs text-slate-400">of {contestants.length} active housemates</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">Public voting window closes in 36 hours</p>
        </div>

        <div className="p-4 bg-[#11192a] border border-slate-800 rounded-xl">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Highest PR Astroturfing</span>
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-amber-300 tabular-nums">
              {highestPrInfiltration ? `${highestPrInfiltration.prInfiltrationRate}%` : '0%'}
            </span>
            <span className="text-xs text-slate-300 font-medium truncate max-w-[130px]">
              {highestPrInfiltration?.name}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">Heavy template duplication detected</p>
        </div>

        <div className="p-4 bg-[#11192a] border border-slate-800 rounded-xl">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>True Organic Leader</span>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
              {organicFavorite?.calculatedToss}% TOSS
            </span>
            <span className="text-xs text-slate-300 font-medium truncate max-w-[130px]">
              {organicFavorite?.name}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">Driven by casual YouTube & family viewership</p>
        </div>

        <div className="p-4 bg-[#11192a] border border-slate-800 rounded-xl">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Top Eviction Vulnerability</span>
            <Flame className="w-3.5 h-3.5 text-rose-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-rose-400 tabular-nums">
              {mostVulnerable?.calculatedEvictionProbability}%
            </span>
            <span className="text-xs text-rose-300 font-medium truncate max-w-[130px]">
              {mostVulnerable?.name}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">Victim of the "Ghost Factor" / low organic breadth</p>
        </div>
      </div>

      {/* Eviction Risk Matrix (2D Visual Scatter) */}
      <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">
              Eviction Risk Matrix: Organic Loyalty vs Vocal PR Noise
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Identifies the "Loud Minority vs Silent Majority" disconnect that consistently fools naive pollsters
            </p>
          </div>
          <div className="flex items-center gap-3">
            {onOpenSources && (
              <button
                onClick={onOpenSources}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/40 rounded-lg border border-cyan-800/60 transition-colors"
                title="Inspect real source handles and media feeds"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Sources (YT, X, IG, Threads, News)</span>
              </button>
            )}
            <button
              onClick={() => setShowWeightDrawer(!showWeightDrawer)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
            >
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              <span>Calibrate Platform Weights</span>
            </button>
          </div>
        </div>

        {/* Weights Drawer */}
        {showWeightDrawer && (
          <div className="p-4 bg-[#0d1424] border border-cyan-900/50 rounded-lg space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-cyan-300">
                Adjust Platform Weighting in True Organic Formula
              </span>
              <button
                onClick={() => onWeightsChange(DEFAULT_PLATFORM_WEIGHTS)}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Defaults</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">YouTube (Casual Majority):</span>
                  <span className="font-mono text-cyan-400">{(weights.youtube * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0.10"
                  max="0.70"
                  step="0.05"
                  value={weights.youtube}
                  onChange={(e) => onWeightsChange({ ...weights, youtube: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Google News & Media:</span>
                  <span className="font-mono text-cyan-400">{(weights.googleNews * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.40"
                  step="0.05"
                  value={weights.googleNews}
                  onChange={(e) => onWeightsChange({ ...weights, googleNews: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">X / Twitter (Speed/Bots):</span>
                  <span className="font-mono text-cyan-400">{(weights.xTwitter * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.40"
                  step="0.05"
                  value={weights.xTwitter}
                  onChange={(e) => onWeightsChange({ ...weights, xTwitter: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Instagram (Fandom/Reels):</span>
                  <span className="font-mono text-cyan-400">{(weights.instagram * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.40"
                  step="0.05"
                  value={weights.instagram}
                  onChange={(e) => onWeightsChange({ ...weights, instagram: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Threads (Conversational):</span>
                  <span className="font-mono text-cyan-400">{(weights.threads * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.40"
                  step="0.05"
                  value={weights.threads}
                  onChange={(e) => onWeightsChange({ ...weights, threads: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* 2D Quadrant Matrix Visualization */}
        <div className="relative w-full h-72 sm:h-80 bg-[#090f1d] border border-slate-800 rounded-lg p-4 overflow-hidden">
          {/* Quadrant Background Zones */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none opacity-20">
            <div className="border-r border-b border-dashed border-slate-700 bg-emerald-500/5 p-2 text-[10px] text-emerald-300 font-mono">
              [SAFE ZONE] High Organic Loyalty · Low PR Noise
            </div>
            <div className="border-b border-dashed border-slate-700 bg-amber-500/5 p-2 text-[10px] text-amber-300 font-mono text-right">
              [DIVIDED FANBASE] High Organic · High Vocal Buzz
            </div>
            <div className="border-r border-dashed border-slate-700 bg-rose-500/10 p-2 text-[10px] text-rose-300 font-mono flex items-end">
              [HIGH DANGER] Ghost Factor / Casual Indifference
            </div>
            <div className="bg-amber-500/10 p-2 text-[10px] text-amber-400 font-mono flex items-end justify-end">
              [VOCAL BUBBLE] Extreme PR Hype · Zero Organic Grounding
            </div>
          </div>

          {/* Coordinate Axes */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 border-r border-dashed border-slate-700/60 pointer-events-none" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-800 border-b border-dashed border-slate-700/60 pointer-events-none" />

          {/* Axis Labels */}
          <div className="absolute left-3 top-3 text-[10px] font-mono text-emerald-400/90 pointer-events-none">
            ▲ HIGH ORGANIC LOYALTY (TOSS)
          </div>
          <div className="absolute left-3 bottom-3 text-[10px] font-mono text-rose-400/90 pointer-events-none">
            ▼ HIGH EVICTION VULNERABILITY
          </div>
          <div className="absolute right-3 bottom-3 text-[10px] font-mono text-amber-400/90 pointer-events-none">
            ► HIGH PR ASTROTURFING / NOISE
          </div>

          {/* Interactive Plot Nodes */}
          {evaluatedContestants.map((c) => {
            // X position: PR Infiltration (0 to 100%)
            // Y position: True Organic Sentiment (0 to 100%, inverted for SVG/CSS top)
            const leftPct = Math.max(8, Math.min(92, c.prInfiltrationRate));
            const topPct = Math.max(12, Math.min(88, 100 - c.calculatedToss));

            const isAtRisk = c.calculatedRiskTier === 'High Danger';
            const isVocalBubble = c.calculatedRiskTier === 'Vocal Bubble / At Risk';

            return (
              <div
                key={c.id}
                onClick={() => onSelectContestant(c)}
                style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
              >
                <div
                  className={`relative p-1 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                    isAtRisk
                      ? 'border-rose-500 bg-rose-950/80 shadow-lg shadow-rose-950/50'
                      : isVocalBubble
                      ? 'border-amber-500 bg-amber-950/80 shadow-lg shadow-amber-950/50'
                      : 'border-emerald-500 bg-emerald-950/80 shadow-lg shadow-emerald-950/50'
                  }`}
                >
                  <img
                    src={c.avatar}
                    alt={c.name}
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                  />
                  {c.isNominated && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-rose-500 border border-black" />
                  )}
                </div>

                {/* Hover Tooltip */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 border border-slate-700 rounded shadow-xl text-left z-30">
                  <div className="font-semibold text-xs text-white flex items-center justify-between">
                    <span>{c.name}</span>
                    <span className="text-[10px] font-mono text-cyan-400">{c.calculatedToss}% TOSS</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 space-y-0.5">
                    <div>PR Infiltration: <span className="font-mono text-amber-300">{c.prInfiltrationRate}%</span></div>
                    <div>Eviction Odds: <span className="font-mono text-rose-400">{c.calculatedEvictionProbability}%</span></div>
                    <div>Status: <span className="text-slate-200">{c.calculatedRiskTier}</span></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Roster & Table Section */}
      <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">
              Housemate Intelligence Roster & Sentiment Index
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Click any housemate to inspect raw social sources, platform distribution, and bot clusters
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search contestant..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 w-44 sm:w-56"
              />
            </div>
          </div>
        </div>

        {/* High-Density Tabular Roster */}
        <div className="overflow-x-auto border border-slate-800 rounded-lg">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0e1626] border-b border-slate-800 text-slate-400 font-medium select-none">
              <tr>
                <th className="py-3 px-4">Housemate</th>
                <th className="py-3 px-3">Status</th>
                <th
                  onClick={() => toggleSort('raw')}
                  className="py-3 px-3 cursor-pointer hover:text-slate-200"
                >
                  <div className="flex items-center gap-1">
                    <span>Raw Sent.</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-500" />
                  </div>
                </th>
                <th
                  onClick={() => toggleSort('toss')}
                  className="py-3 px-3 cursor-pointer hover:text-slate-200"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-cyan-300 font-semibold">True TOSS</span>
                    <ArrowUpDown className="w-3 h-3 text-cyan-400" />
                  </div>
                </th>
                <th
                  onClick={() => toggleSort('trend')}
                  className="py-3 px-3 cursor-pointer hover:text-slate-200"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-slate-300">7-Day Trend</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-500" />
                  </div>
                </th>
                <th
                  onClick={() => toggleSort('prDelta')}
                  className="py-3 px-3 cursor-pointer hover:text-slate-200"
                >
                  <div className="flex items-center gap-1">
                    <span>PR Delta</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-500" />
                  </div>
                </th>
                <th className="py-3 px-3">Silent Majority (YT)</th>
                <th className="py-3 px-3">PR Infiltration</th>
                <th
                  onClick={() => toggleSort('evictionProbability')}
                  className="py-3 px-4 text-right cursor-pointer hover:text-slate-200"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span className="text-rose-300">Eviction Risk</span>
                    <ArrowUpDown className="w-3 h-3 text-rose-400" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 bg-[#11192a]">
              {filteredContestants.map((c) => {
                const isDanger = c.calculatedRiskTier === 'High Danger';
                const isBubble = c.calculatedRiskTier === 'Vocal Bubble / At Risk';

                return (
                  <tr
                    key={c.id}
                    onClick={() => onSelectContestant(c)}
                    className="hover:bg-slate-800/40 cursor-pointer transition-colors"
                  >
                    {/* Contestant */}
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={c.avatar}
                          alt={c.name}
                          referrerPolicy="no-referrer"
                          className="w-9 h-9 rounded-lg object-cover border border-slate-700/80"
                        />
                        <div>
                          <div className="font-semibold text-white tracking-tight flex items-center gap-1.5">
                            <span>{c.name}</span>
                            <span className="text-[10px] text-slate-400 font-mono">"{c.nickname}"</span>
                          </div>
                          <span className="text-[11px] text-slate-500">{c.role}</span>
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-3 px-3">
                      {c.isNominated ? (
                        <span className="inline-block text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/30 px-2 py-0.5 rounded">
                          Nominated
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400">Exempt</span>
                      )}
                    </td>

                    {/* Raw Sentiment */}
                    <td className="py-3 px-3 font-mono tabular-nums text-slate-300">
                      {c.calculatedRaw}%
                    </td>

                    {/* True Organic Sentiment (TOSS) */}
                    <td className="py-3 px-3">
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

                    {/* 7-Day TOSS Trend Sparkline */}
                    <td className="py-3 px-3">
                      <Sparkline data={c.tossTrend7d} />
                    </td>

                    {/* PR Inflation Delta */}
                    <td className="py-3 px-3 font-mono tabular-nums">
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

                    {/* Silent Majority Index */}
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono tabular-nums text-slate-200">
                          {c.silentMajorityIndex}%
                        </span>
                        <span className="text-[10px] text-slate-500 hidden md:inline">
                          (YT anchor)
                        </span>
                      </div>
                    </td>

                    {/* PR Infiltration Meter */}
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              c.prInfiltrationRate > 50
                                ? 'bg-rose-500'
                                : c.prInfiltrationRate > 25
                                ? 'bg-amber-500'
                                : 'bg-emerald-500'
                            }`}
                            style={{ width: `${c.prInfiltrationRate}%` }}
                          />
                        </div>
                        <span className="font-mono tabular-nums text-slate-300 text-[11px]">
                          {c.prInfiltrationRate}%
                        </span>
                      </div>
                    </td>

                    {/* Eviction Risk & Tier */}
                    <td className="py-3 px-4 text-right">
                      <div className="flex flex-col items-end">
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
                            className={`text-[10px] px-1.5 py-0.5 rounded border ${
                              isDanger
                                ? 'text-rose-400 border-rose-500/30 bg-rose-500/10'
                                : isBubble
                                ? 'text-amber-400 border-amber-500/30 bg-amber-500/10'
                                : 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                            }`}
                          >
                            {c.calculatedRiskTier}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 mt-0.5">
                          {c.votingTrajectory}
                        </span>
                      </div>
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
