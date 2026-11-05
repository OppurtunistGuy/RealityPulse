import React, { useState, useMemo } from 'react';
import {
  Search,
  ArrowUpDown,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Users
} from 'lucide-react';
import { Contestant, Language } from '../types';
import { Sparkline } from './Sparkline';

interface HousematesViewProps {
  contestants: Contestant[];
  onSelectContestant: (c: Contestant) => void;
  language?: Language;
}

export const HousematesView: React.FC<HousematesViewProps> = ({
  contestants,
  onSelectContestant,
  language = 'en'
}) => {
  const isHinglish = language === 'hinglish';

  const [searchQuery, setSearchQuery] = useState('');
  const [filterNominatedOnly, setFilterNominatedOnly] = useState(false);
  const [includeEvicted, setIncludeEvicted] = useState(false);
  const [sortField, setSortField] = useState<'toss' | 'raw' | 'prDelta' | 'evictionProbability' | 'trend'>('toss');
  const [sortAsc, setSortAsc] = useState(false);

  // Active vs Evicted counts
  const activeCount = useMemo(() => contestants.filter((c) => c.status === 'Active').length, [contestants]);
  const evictedCount = useMemo(() => contestants.filter((c) => c.status === 'Evicted').length, [contestants]);

  const filteredContestants = useMemo(() => {
    return contestants
      .filter((c) => {
        if (!includeEvicted && !searchQuery.trim() && c.status === 'Evicted') return false;
        if (filterNominatedOnly && !c.isNominated) return false;
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          return (
            c.name.toLowerCase().includes(q) ||
            c.nickname.toLowerCase().includes(q) ||
            (c.role ? c.role.toLowerCase().includes(q) : false)
          );
        }
        return true;
      })
      .sort((a, b) => {
        let valA = 0;
        let valB = 0;
        if (sortField === 'toss') {
          valA = a.trueOrganicSentiment;
          valB = b.trueOrganicSentiment;
        } else if (sortField === 'raw') {
          valA = a.rawSentiment;
          valB = b.rawSentiment;
        } else if (sortField === 'prDelta') {
          valA = a.prInflationDelta;
          valB = b.prInflationDelta;
        } else if (sortField === 'evictionProbability') {
          valA = a.evictionProbability ?? -1;
          valB = b.evictionProbability ?? -1;
        } else if (sortField === 'trend') {
          const deltaA = (a.tossTrend7d?.[a.tossTrend7d.length - 1] ?? 0) - (a.tossTrend7d?.[0] ?? 0);
          const deltaB = (b.tossTrend7d?.[b.tossTrend7d.length - 1] ?? 0) - (b.tossTrend7d?.[0] ?? 0);
          valA = deltaA;
          valB = deltaB;
        }
        return sortAsc ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
      });
  }, [contestants, searchQuery, filterNominatedOnly, includeEvicted, sortField, sortAsc]);

  const toggleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  return (
    <div className="space-y-4 max-w-7xl mx-auto animate-fade-in pb-12">
      {/* SECTION HEADER: Count folded in */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#0c1322] border border-slate-800 rounded-2xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {isHinglish ? 'Bigg Boss 20 Housemates' : 'Bigg Boss 20 Housemates'}
            </h2>
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
              {activeCount} Active · {evictedCount} Evicted
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Real spectator support ratings free from PR bot amplification. Click any housemate row to open their full dossier.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="relative min-w-[200px]">
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search housemate name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <button
            onClick={() => setFilterNominatedOnly(!filterNominatedOnly)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              filterNominatedOnly
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-sm'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600'
            }`}
          >
            {filterNominatedOnly ? 'Nominated Only (Filtered)' : 'Filter: Nominated'}
          </button>

          <button
            onClick={() => setIncludeEvicted(!includeEvicted)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              includeEvicted
                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 shadow-sm'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600'
            }`}
          >
            {includeEvicted ? 'Evicted Included' : 'Show Evicted'}
          </button>
        </div>
      </div>

      {/* ROSTER TABLE WITH PLAIN WORDS ON TOP OF COINED TERMS */}
      <div className="bg-[#0b1220] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-slate-800 bg-[#0f172a] text-slate-400 text-xs font-semibold">
                <th className="py-3 px-4">Housemate</th>

                <th
                  className="py-3 px-4 cursor-pointer hover:text-white transition-colors"
                  onClick={() => toggleSort('toss')}
                  aria-sort={sortField === 'toss' ? (sortAsc ? 'ascending' : 'descending') : undefined}
                >
                  <div className="flex items-center gap-1">
                    <div>
                      <span className="text-white block font-bold">Real fan support</span>
                      <span className="text-[10px] text-slate-400 font-mono">TOSS Score</span>
                    </div>
                    <ArrowUpDown className="w-3 h-3 text-cyan-400 ml-1 shrink-0" />
                  </div>
                </th>

                <th
                  className="py-3 px-4 cursor-pointer hover:text-white transition-colors"
                  onClick={() => toggleSort('raw')}
                  aria-sort={sortField === 'raw' ? (sortAsc ? 'ascending' : 'descending') : undefined}
                >
                  <div className="flex items-center gap-1">
                    <div>
                      <span className="text-slate-300 block font-semibold">Unfiltered hype</span>
                      <span className="text-[10px] text-slate-400 font-mono">Raw Sentiment</span>
                    </div>
                    <ArrowUpDown className="w-3 h-3 text-slate-500 ml-1 shrink-0" />
                  </div>
                </th>

                <th
                  className="py-3 px-4 cursor-pointer hover:text-white transition-colors"
                  onClick={() => toggleSort('prDelta')}
                  aria-sort={sortField === 'prDelta' ? (sortAsc ? 'ascending' : 'descending') : undefined}
                >
                  <div className="flex items-center gap-1">
                    <div>
                      <span className="text-slate-300 block font-semibold">PR manipulation</span>
                      <span className="text-[10px] text-slate-400 font-mono">PR Delta Gap</span>
                    </div>
                    <ArrowUpDown className="w-3 h-3 text-slate-500 ml-1 shrink-0" />
                  </div>
                </th>

                <th
                  className="py-3 px-4 cursor-pointer hover:text-white transition-colors"
                  onClick={() => toggleSort('evictionProbability')}
                  aria-sort={sortField === 'evictionProbability' ? (sortAsc ? 'ascending' : 'descending') : undefined}
                >
                  <div className="flex items-center gap-1">
                    <div>
                      <span className="text-rose-400 block font-bold">Eviction risk</span>
                      <span className="text-[10px] text-slate-400 font-mono">Immediate Risk</span>
                    </div>
                    <ArrowUpDown className="w-3 h-3 text-rose-400 ml-1 shrink-0" />
                  </div>
                </th>

                <th
                  className="py-3 px-4 cursor-pointer hover:text-white transition-colors"
                  onClick={() => toggleSort('trend')}
                  aria-sort={sortField === 'trend' ? (sortAsc ? 'ascending' : 'descending') : undefined}
                >
                  <div className="flex items-center gap-1">
                    <div>
                      <span className="text-slate-300 block font-semibold">7-Day trend</span>
                      <span className="text-[10px] text-slate-400 font-mono">Movement</span>
                    </div>
                    <ArrowUpDown className="w-3 h-3 text-slate-500 ml-1 shrink-0" />
                  </div>
                </th>

                <th className="py-3 px-4 text-right">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/80 text-xs">
              {filteredContestants.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400 font-mono">
                    No housemates match your filter criteria.
                  </td>
                </tr>
              ) : (
                filteredContestants.map((c) => {
                  const isNom = c.isNominated;
                  const isEvicted = c.status === 'Evicted';

                  return (
                    <tr
                      key={c.id}
                      onClick={() => onSelectContestant(c)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onSelectContestant(c);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Open details for ${c.name}`}
                      className="hover:bg-slate-800/40 transition-colors cursor-pointer group focus:outline-none focus:bg-slate-800/60"
                    >
                      {/* Name & Avatar */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={c.avatar}
                            alt={c.name}
                            className="w-10 h-10 rounded-xl object-cover border border-slate-700 shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="font-bold text-white group-hover:text-cyan-300 transition-colors text-sm truncate">
                              {c.name}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs text-slate-400 font-mono">"{c.nickname}"</span>
                              {c.role === 'Wildcard' && (
                                <span className="text-[9px] font-bold text-purple-300 bg-purple-950/60 px-1 py-0.2 rounded border border-purple-500/40">
                                  Wildcard
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Real Fan Support (TOSS) */}
                      <td className="py-3.5 px-4 font-mono font-bold text-sm text-cyan-300">
                        {c.trueOrganicSentiment}%
                      </td>

                      {/* Raw Sentiment */}
                      <td className="py-3.5 px-4 font-mono text-slate-300">
                        {c.rawSentiment}%
                      </td>

                      {/* PR Delta */}
                      <td className="py-3.5 px-4 font-mono">
                        <span
                          className={`font-semibold ${
                            c.prInflationDelta > 15
                              ? 'text-rose-400'
                              : c.prInflationDelta > 0
                              ? 'text-amber-400'
                              : 'text-emerald-400'
                          }`}
                        >
                          {c.prInflationDelta > 0 ? `+${c.prInflationDelta}%` : `${c.prInflationDelta}%`}
                        </span>
                      </td>

                      {/* Eviction Risk */}
                      <td className="py-3.5 px-4 font-mono font-bold">
                        {isEvicted ? (
                          <span className="text-slate-500">—</span>
                        ) : c.insufficientData ? (
                          <span className="text-slate-400 text-[11px] font-sans">Insufficient data</span>
                        ) : (
                          <span
                            className={
                              (c.evictionProbability ?? 0) >= 40
                                ? 'text-rose-400 text-sm'
                                : (c.evictionProbability ?? 0) >= 20
                                ? 'text-amber-400'
                                : 'text-emerald-400'
                            }
                          >
                            {c.evictionProbability}%
                          </span>
                        )}
                      </td>

                      {/* 7-Day Trend Sparkline */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <Sparkline data={c.tossTrend7d} width={64} height={20} />
                          <span className="text-[10px] font-mono text-slate-400">
                            {(c.tossTrend7d?.[c.tossTrend7d.length - 1] ?? 0) >= (c.tossTrend7d?.[0] ?? 0) ? (
                              <span className="text-emerald-400 font-semibold">
                                +{(c.tossTrend7d?.[c.tossTrend7d.length - 1] ?? 0) - (c.tossTrend7d?.[0] ?? 0)}
                              </span>
                            ) : (
                              <span className="text-rose-400 font-semibold">
                                {(c.tossTrend7d?.[c.tossTrend7d.length - 1] ?? 0) - (c.tossTrend7d?.[0] ?? 0)}
                              </span>
                            )}
                          </span>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4 text-right">
                        {isEvicted ? (
                          <span className="text-[11px] font-semibold text-rose-300 bg-rose-500/20 px-2.5 py-0.5 rounded-full border border-rose-500/30">
                            Evicted W{c.evictionWeek ?? ''}
                          </span>
                        ) : isNom ? (
                          <span className="text-[11px] font-bold text-rose-400 bg-rose-500/20 px-2.5 py-0.5 rounded-full border border-rose-500/30">
                            Nominated
                          </span>
                        ) : (
                          <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                            Safe
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

