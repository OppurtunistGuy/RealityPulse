import React from 'react';
import {
  Calendar,
  AlertTriangle,
  Flame,
  ArrowRight,
  TrendingDown,
  UserX,
  Clock,
  Sparkles
} from 'lucide-react';
import { EvictedContestantTimelineItem, Language, Contestant } from '../types';

interface EvictionTimelineViewProps {
  timeline: EvictedContestantTimelineItem[];
  language: Language;
  onSelectContestantById: (id: string) => void;
}

export const EvictionTimelineView: React.FC<EvictionTimelineViewProps> = ({
  timeline,
  language,
  onSelectContestantById
}) => {
  const isHinglish = language === 'hinglish';

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Banner */}
      <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <UserX className="w-5 h-5 text-rose-400" />
              <h3 className="text-base font-bold text-white tracking-tight">
                {isHinglish
                  ? 'Bigg Boss 20 Eviction Timeline (Week 1 Se Ab Tak)'
                  : 'Bigg Boss 20 Official Eviction Timeline (Week 1 to Current)'}
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-3xl leading-relaxed">
              {isHinglish
                ? 'Dekhein har week kaunsa contestant eliminate hua, unka final TOSS score kya tha, aur vanity followers vs asli janta voting collapse ki poori chronology.'
                : 'Chronological timeline of eliminated housemates detailing their terminal TOSS score, vanity follower collapse, and forensic exit verdicts.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono font-bold">
              {timeline.length} {isHinglish ? 'Evictions Done' : 'Housemates Evicted'}
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
              Week 5 Live
            </span>
          </div>
        </div>
      </div>

      {/* Chronological Stepper Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-8 my-4">
        {timeline.map((item, index) => {
          return (
            <div key={item.contestantId} className="relative group">
              {/* Stepper Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#0c1220] border-2 border-rose-500 flex items-center justify-center shadow-lg shadow-rose-950/50">
                <span className="text-[10px] font-mono font-bold text-rose-400">{item.week}</span>
              </div>

              {/* Card Container */}
              <div className="p-5 bg-[#0f172a] border border-slate-800 hover:border-slate-700/80 rounded-xl transition-all shadow-md space-y-4">
                {/* Top Info Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-lg object-cover border border-slate-700 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                          {item.name}
                        </h4>
                        <span className="text-xs font-mono text-slate-400">"{item.nickname}"</span>
                        <span className="text-[10px] font-semibold text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded border border-rose-500/30 uppercase tracking-wider">
                          {isHinglish ? `Week ${item.week} Mein Evict` : `Evicted Week ${item.week}`}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-1 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {item.evictionDate}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {item.daysInHouse} {isHinglish ? 'Din Ghar Mein' : 'Days in House'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Terminal Scores */}
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="px-3 py-1.5 bg-[#18233c] border border-slate-800 rounded-lg text-right">
                      <span className="text-[10px] text-slate-400 block font-medium">Final TOSS</span>
                      <span className="text-sm font-mono font-bold text-cyan-300 tabular-nums">
                        {item.finalTossScore}%
                      </span>
                    </div>
                    <div className="px-3 py-1.5 bg-[#18233c] border border-slate-800 rounded-lg text-right">
                      <span className="text-[10px] text-slate-400 block font-medium">PR Delta</span>
                      <span className="text-sm font-mono font-bold text-rose-400 tabular-nums">
                        +{item.finalPrDelta}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Reason & Collapse Narrative */}
                <div className="space-y-2 text-xs leading-relaxed">
                  <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-500/20 text-slate-200">
                    <span className="font-semibold text-rose-300 block mb-1">
                      {isHinglish ? 'Eviction Ki Asli Wajah:' : 'Primary Eviction Cause:'}
                    </span>
                    <p>{isHinglish && item.hinglishReason ? item.hinglishReason : item.evictionReason}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 flex items-start gap-2">
                    <TrendingDown className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200 block mb-0.5">
                        {isHinglish ? 'PR vs Asli Janta Vote Collapse:' : 'PR vs Organic Collapse Dynamics:'}
                      </span>
                      <p>{item.prVsOrganicCollapse}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Quote & Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs">
                  <p className="italic text-slate-400 font-mono text-[11px]">
                    {isHinglish && item.hinglishHeadline ? item.hinglishHeadline : item.headlineQuote}
                  </p>
                  <button
                    onClick={() => onSelectContestantById(item.contestantId)}
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium shrink-0 group-hover:underline underline-offset-4"
                  >
                    <span>{isHinglish ? 'Poori Dossier Dekhein' : 'View Full Profile & Controversies'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Current Active Week Indicator */}
        <div className="relative">
          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-cyan-500 border-2 border-slate-900 flex items-center justify-center animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
          </div>
          <div className="p-4 bg-gradient-to-r from-[#11233d] to-[#0c1626] border border-cyan-500/40 rounded-xl text-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-cyan-300 text-sm">
                {isHinglish ? '🔴 Week 5: Live Voting Chalu Hai' : '🔴 Week 5: Live Voting In Progress'}
              </span>
              <span className="font-mono text-cyan-400 text-[11px] font-semibold">Tathas-two Phase</span>
            </div>
            <p className="text-slate-300">
              {isHinglish
                ? 'Scout, Kanika Mann, Arshifa Khan, Aasif Khan, Love Gill aur Kashish Kapoor current danger zone mein hain. Asli janta ke TOSS trends Eviction Matrix mein live track ho rahe hain.'
                : 'Scout, Kanika Mann, Arshifa Khan, Aasif Khan, Love Gill, and Kashish Kapoor are in the nomination danger zone. Track their real-time TOSS scores in the Eviction Matrix.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

