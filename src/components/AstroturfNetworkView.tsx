import React, { useState, useMemo } from 'react';
import {
  ShieldAlert,
  Network,
  Copy,
  ChevronDown,
  ChevronUp,
  Cpu,
  Zap,
  Info,
  CheckCircle2,
  Users
} from 'lucide-react';
import { ASTROTURF_CLUSTERS, BIPARTITE_NODES, BIPARTITE_LINKS } from '../data/mockRealityData';
import { Contestant } from '../types';

interface AstroturfNetworkViewProps {
  contestants: Contestant[];
  onSelectContestant: (c: Contestant) => void;
}

export const AstroturfNetworkView: React.FC<AstroturfNetworkViewProps> = ({
  contestants,
  onSelectContestant
}) => {
  const [expandedClusterId, setExpandedClusterId] = useState<string | null>(ASTROTURF_CLUSTERS[0].id);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const toggleCluster = (id: string) => {
    setExpandedClusterId(expandedClusterId === id ? null : id);
  };

  // Dynamically compute node position coordinates for SVG bipartite graph visualizer from BIPARTITE_NODES
  const nodeCoords = useMemo(() => {
    const coords: Record<string, { x: number; y: number; label: string; type: string; risk: number }> = {};
    const sources = BIPARTITE_NODES.filter((n) => n.type !== 'contestant');
    const targets = BIPARTITE_NODES.filter((n) => n.type === 'contestant');

    sources.forEach((node, i) => {
      const y = sources.length > 1 ? 65 + i * (290 / (sources.length - 1)) : 200;
      coords[node.id] = { x: 130, y: Math.round(y), label: node.label, type: node.type, risk: node.riskWeight };
    });

    targets.forEach((node, i) => {
      const y = targets.length > 1 ? 65 + i * (290 / (targets.length - 1)) : 200;
      const matched = contestants.find((c) => c.id === node.id);
      const effectiveRisk = matched ? matched.prInfiltrationRate / 100 : node.riskWeight;
      coords[node.id] = { x: 520, y: Math.round(y), label: matched ? matched.name : node.label, type: node.type, risk: effectiveRisk };
    });

    return coords;
  }, [contestants]);

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <h3 className="text-base font-bold text-white tracking-tight">
                Bot Swarm & Coordinated Astroturfing Sanitizer
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-3xl leading-relaxed">
              Before computing sentiment scores, this pipeline identifies template replication (MinHash/LSH),
              abnormal account creation velocities, and single-target bipartite coordination rings.
              Discovered PR swarms are quarantined and discounted from the final True Organic Sentiment Score (TOSS).
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-right">
              <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Sanitized Comments</span>
              <span className="text-base font-mono font-bold text-rose-400 tabular-nums">214,800</span>
            </div>
            <div className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-right">
              <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Flagged Account Clusters</span>
              <span className="text-base font-mono font-bold text-amber-400 tabular-nums">3 Rings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Bipartite Coordinated Network Visualizer */}
      <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <Network className="w-4 h-4 text-cyan-400" />
              <span>Coordinated Network Graph: Account Swarms → Target Contestants</span>
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Click any cluster or housemate node to highlight origin trails and identify paid promotion rings
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="text-slate-300">Coordinated Astroturf Ring</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-slate-300">Verified Organic Fan Base</span>
            </div>
          </div>
        </div>

        {/* SVG Bipartite Visualizer Canvas */}
        <div className="relative w-full h-[420px] bg-[#090f1d] border border-slate-800 rounded-lg overflow-hidden flex items-center justify-center p-2">
          <svg className="w-full h-full" viewBox="0 0 660 420">
            <defs>
              <linearGradient id="astroturfGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#fb7185" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="organicGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Links / Edges */}
            {BIPARTITE_LINKS.map((link, idx) => {
              const src = nodeCoords[link.source];
              const tgt = nodeCoords[link.target];
              if (!src || !tgt) return null;

              const isHighlighted =
                !selectedNodeId ||
                selectedNodeId === link.source ||
                selectedNodeId === link.target;

              return (
                <path
                  key={idx}
                  d={`M ${src.x} ${src.y} C ${(src.x + tgt.x) / 2} ${src.y}, ${(src.x + tgt.x) / 2} ${tgt.y}, ${tgt.x} ${tgt.y}`}
                  fill="none"
                  stroke={link.isAstroturf ? 'url(#astroturfGrad)' : 'url(#organicGrad)'}
                  strokeWidth={Math.max(2, Math.min(6, link.weight / 8000))}
                  strokeDasharray={link.isAstroturf ? '4 2' : 'none'}
                  opacity={isHighlighted ? 0.9 : 0.15}
                  className="transition-all duration-300"
                />
              );
            })}

            {/* Source Nodes (Left column: Account clusters & PR Agencies) */}
            {BIPARTITE_NODES.filter((n) => n.type !== 'contestant').map((node) => {
              const coord = nodeCoords[node.id];
              if (!coord) return null;
              const isSelected = selectedNodeId === node.id;
              const isAstroturf = node.riskWeight > 0.4;

              return (
                <g
                  key={node.id}
                  onClick={() => setSelectedNodeId(isSelected ? null : node.id)}
                  className="cursor-pointer group"
                >
                  <circle
                    cx={coord.x}
                    cy={coord.y}
                    r={isSelected ? 16 : 12}
                    fill={isAstroturf ? '#3b0d1e' : '#083324'}
                    stroke={isAstroturf ? '#f43f5e' : '#10b981'}
                    strokeWidth={isSelected ? 3 : 2}
                    className="transition-all duration-200"
                  />
                  <text
                    x={coord.x - 18}
                    y={coord.y + 4}
                    textAnchor="end"
                    fill="#cbd5e1"
                    fontSize="11"
                    fontFamily="var(--font-sans)"
                    fontWeight="500"
                  >
                    {node.label}
                  </text>
                  <text
                    x={coord.x - 18}
                    y={coord.y + 16}
                    textAnchor="end"
                    fill="#64748b"
                    fontSize="9"
                    fontFamily="var(--font-mono)"
                  >
                    {node.volume.toLocaleString()} interactions
                  </text>
                </g>
              );
            })}

            {/* Target Nodes (Right column: Contestants) */}
            {BIPARTITE_NODES.filter((n) => n.type === 'contestant').map((node) => {
              const coord = nodeCoords[node.id];
              if (!coord) return null;
              const isSelected = selectedNodeId === node.id;
              const matchingContestant = contestants.find((c) => c.id === node.id);

              return (
                <g
                  key={node.id}
                  onClick={() => {
                    setSelectedNodeId(isSelected ? null : node.id);
                    if (matchingContestant) onSelectContestant(matchingContestant);
                  }}
                  className="cursor-pointer group"
                >
                  <circle
                    cx={coord.x}
                    cy={coord.y}
                    r={isSelected ? 18 : 14}
                    fill="#1e293b"
                    stroke={coord.risk > 0.4 ? '#f43f5e' : coord.risk > 0.2 ? '#f59e0b' : '#10b981'}
                    strokeWidth={isSelected ? 3 : 2}
                    className="transition-all duration-200"
                  />
                  <text
                    x={coord.x + 22}
                    y={coord.y + 4}
                    textAnchor="start"
                    fill="#f1f5f9"
                    fontSize="13"
                    fontFamily="var(--font-sans)"
                    fontWeight="600"
                  >
                    {coord.label}
                  </text>
                  <text
                    x={coord.x + 22}
                    y={coord.y + 19}
                    textAnchor="start"
                    fill="#94a3b8"
                    fontSize="12"
                    fontFamily="var(--font-mono)"
                  >
                    PR Risk: {(coord.risk * 100).toFixed(0)}%
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Quick Clear Filter Button */}
          {selectedNodeId && (
            <button
              onClick={() => setSelectedNodeId(null)}
              className="absolute top-3 right-3 text-[11px] px-2.5 py-1 bg-slate-900/90 border border-slate-700 text-slate-300 rounded hover:text-white"
            >
              Reset Graph Filter
            </button>
          )}
        </div>
      </div>

      {/* Detected Duplicate Template Clusters (MinHash / LSH Matches) */}
      <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <Copy className="w-4 h-4 text-amber-400" />
              <span>Flagged Script Templates & Copy-Paste Clusters</span>
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Identified via Levenshtein / MinHash similarity (&gt;90% lexical identity across distinct accounts)
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {ASTROTURF_CLUSTERS.map((cluster) => {
            const isExpanded = expandedClusterId === cluster.id;
            return (
              <div
                key={cluster.id}
                className="border border-slate-800 rounded-lg bg-[#0e1626] overflow-hidden transition-colors hover:border-slate-700"
              >
                <div
                  onClick={() => toggleCluster(cluster.id)}
                  className="p-4 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3"
                >
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-white">{cluster.contestantName}</span>
                      <span className="text-[10px] text-slate-500">·</span>
                      <span className="text-xs font-mono text-cyan-400">{cluster.primarySource}</span>
                      <span className="text-[10px] text-slate-500">·</span>
                      <span className="text-[11px] font-mono text-rose-400">
                        {cluster.occurrences.toLocaleString()} duplications
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-300 bg-black/40 p-2 rounded border border-slate-800">
                      "{cluster.templatePhrase}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 text-xs">
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 block">Similarity</span>
                      <span className="font-mono font-bold text-amber-400">
                        {(cluster.similarityScore * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 block">Velocity Anomaly</span>
                      <span className="font-mono text-slate-200">{cluster.accountVelocity}</span>
                    </div>
                    <button className="p-1 text-slate-400 hover:text-white">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Variations */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-800/80 bg-[#090f1d] space-y-2 text-xs">
                    <span className="text-[11px] font-semibold text-slate-400 block mt-2 uppercase tracking-wider">
                      Detected Script Mutations (Words swapped to bypass automated filters):
                    </span>
                    <ul className="space-y-1.5 pl-2">
                      {cluster.variations.map((v, i) => (
                        <li key={i} className="text-slate-300 font-mono text-[11px] flex items-start gap-2">
                          <span className="text-rose-400 shrink-0 mt-0.5">↳</span>
                          <span>"{v}"</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-3 font-mono">
                      <span>Median Account Age: {cluster.accountAgeMedianDays} days</span>
                      <span>·</span>
                      <span>Targeting Ring: {cluster.bipartiteRingId}</span>
                      <span>·</span>
                      <span className="text-emerald-400">{cluster.status}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Comparative PR Infiltration Meter */}
      <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl space-y-4">
        <div>
          <h4 className="text-sm font-bold text-white tracking-tight">
            Contestant PR Infiltration Meter (0–100%)
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Percentage of total online engagement flagged as synthetic, coordinated, or bot-originating
          </p>
        </div>

        <div className="space-y-3">
          {contestants.map((c) => {
            const isHigh = c.prInfiltrationRate >= 50;
            const isMedium = c.prInfiltrationRate >= 25 && c.prInfiltrationRate < 50;

            return (
              <div key={c.id} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{c.name}</span>
                    <span className="text-[10px] text-slate-400">({c.role})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-slate-400">
                      Organic: {(100 - c.prInfiltrationRate)}%
                    </span>
                    <span
                      className={`font-mono font-bold tabular-nums ${
                        isHigh ? 'text-rose-400' : isMedium ? 'text-amber-400' : 'text-emerald-400'
                      }`}
                    >
                      {c.prInfiltrationRate}% PR
                    </span>
                  </div>
                </div>

                {/* Meter Bar */}
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden flex border border-slate-800">
                  {/* Organic Portion */}
                  <div
                    className="h-full bg-emerald-500 transition-all duration-500"
                    style={{ width: `${100 - c.prInfiltrationRate}%` }}
                    title={`Organic: ${100 - c.prInfiltrationRate}%`}
                  />
                  {/* Inorganic / PR Portion */}
                  <div
                    className={`h-full transition-all duration-500 ${
                      isHigh ? 'bg-rose-500' : isMedium ? 'bg-amber-500' : 'bg-slate-600'
                    }`}
                    style={{ width: `${c.prInfiltrationRate}%` }}
                    title={`Inorganic PR: ${c.prInfiltrationRate}%`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
