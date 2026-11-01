import React, { useState } from 'react';
import {
  Film,
  Tv,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Scale,
  Swords,
  AlertCircle,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';
import { EPISODE_NARRATIVES } from '../data/mockRealityData';
import { EpisodeNarrative } from '../types';

export const NarrativeArcDeltaView: React.FC = () => {
  const [selectedEpisodeIndex, setSelectedEpisodeIndex] = useState(0);
  const currentEpisode: EpisodeNarrative = EPISODE_NARRATIVES[selectedEpisodeIndex];

  const getEditBadgeColor = (type: string) => {
    switch (type) {
      case 'Hero Edit':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'Villain Edit':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
      case 'Ghost Edit':
        return 'text-slate-400 bg-slate-500/10 border-slate-500/30';
      default:
        return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Episode Header & Selector */}
      <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Film className="w-4 h-4 text-cyan-400" />
              <h3 className="text-base font-bold text-white tracking-tight">
                Episode Narrative Anchor: Edit Bias vs Public Reception Delta
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              Correlates producer broadcast framing (Hero/Villain/Ghost edits) with true casual audience reaction to isolate PR manipulation
            </p>
          </div>

          {/* Episode Selector */}
          <div className="flex items-center gap-2">
            {EPISODE_NARRATIVES.map((ep, idx) => (
              <button
                key={ep.episodeNumber}
                onClick={() => setSelectedEpisodeIndex(idx)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                  selectedEpisodeIndex === idx
                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Ep {ep.episodeNumber} · {ep.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Current Episode Details */}
        <div className="p-4 bg-[#0d1424] border border-slate-800/80 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>Episode {currentEpisode.episodeNumber}</span>
              <span>·</span>
              <span>Aired {currentEpisode.airDate}</span>
              <span>·</span>
              <span className="text-cyan-400">{currentEpisode.hostFocus}</span>
            </div>
            <h4 className="text-base font-bold text-white">{currentEpisode.title}</h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {currentEpisode.broadcastThemes.map((theme, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>

          <div className="md:max-w-md p-3 bg-slate-900/80 border border-slate-800 rounded text-xs text-slate-300 leading-relaxed">
            <span className="font-semibold text-cyan-300 block mb-1">Organic Drift Summary:</span>
            {currentEpisode.organicDriftSummary}
          </div>
        </div>
      </div>

      {/* Narrative vs Reception Delta Cards */}
      <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl space-y-4">
        <div>
          <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
            <Scale className="w-4 h-4 text-cyan-400" />
            <span>Contestant Framing vs Organic Reception Divergence</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            A large reception delta indicates viewer revolt against forced producer storylines or PR astroturfing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentEpisode.contestantEdits.map((item) => {
            const isPositiveDelta = item.receptionDelta > 0;
            return (
              <div
                key={item.contestantId}
                className="p-4 rounded-lg bg-[#0e1626] border border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-white text-sm">{item.contestantName}</span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${getEditBadgeColor(
                        item.editType
                      )}`}
                    >
                      {item.editType}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs">
                    <span className="text-slate-400 text-[11px]">Reception Delta:</span>
                    <span
                      className={`font-bold flex items-center gap-0.5 ${
                        isPositiveDelta ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {isPositiveDelta ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                      {isPositiveDelta ? `+${item.receptionDelta}` : item.receptionDelta}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800/80">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Producer Framed Intent
                    </span>
                    <p className="text-slate-300 leading-snug">{item.intendedPerception}</p>
                    <span className="text-[10px] text-slate-500 font-mono mt-2 block">
                      Airtime: {item.airtimeMinutes} mins
                    </span>
                  </div>

                  <div className="p-2.5 rounded bg-[#131d33] border border-slate-800/80">
                    <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                      True Organic Verdict
                    </span>
                    <p className="text-slate-200 leading-snug">{item.organicPublicVerdict}</p>
                    <span className="text-[10px] text-cyan-500/80 font-mono mt-2 block">
                      Validated across YouTube & forums
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Primary Conflict Pairs Analysis */}
      {currentEpisode.conflictPairs.length > 0 && (
        <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl space-y-4">
          <div>
            <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <Swords className="w-4 h-4 text-amber-400" />
              <span>Head-to-Head Conflict Sanity Test</span>
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Measures whether online sentiment spikes after an altercation align with authentic viewer consensus or automated PR counter-attacks
            </p>
          </div>

          <div className="space-y-3">
            {currentEpisode.conflictPairs.map((pair) => (
              <div
                key={pair.id}
                className="p-4 bg-[#0e1626] border border-slate-800 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{pair.contestantA}</span>
                    <span className="text-xs font-mono text-rose-400 font-bold">VS</span>
                    <span className="text-sm font-bold text-white">{pair.contestantB}</span>
                  </div>
                  <p className="text-xs text-slate-300">{pair.incident}</p>
                  <p className="text-[11px] text-slate-500">Framing: {pair.producerFraming}</p>
                </div>

                <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-lg text-xs md:max-w-xs shrink-0">
                  <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider block mb-0.5">
                    Casual Audience Consensus
                  </span>
                  <p className="text-slate-200 font-medium">{pair.organicAudienceWinner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sanity Test Explainer Card */}
      <div className="p-4 bg-[#0b111e] border border-slate-800 rounded-lg flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-300 leading-relaxed">
          <strong className="text-white">How the Narrative Sanity Test Works:</strong> In standard reality shows, if
          Contestant X is shown instigating an unprovoked fight or violating rules on national TV, organic reaction will
          naturally skew critical or divided. If social monitoring simultaneously registers a 98% uniform positive spike on
          X with identical phrases like <em className="text-cyan-300">"KV showed supreme patience"</em>, the engine flags this
          as an artificial PR intervention and automatically dampens X weighting for that voting period.
        </div>
      </div>
    </div>
  );
};
