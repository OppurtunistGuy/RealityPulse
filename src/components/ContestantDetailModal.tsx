import { X, Youtube, Twitter, Instagram, Globe, MessageSquare, AlertTriangle, ShieldCheck, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { Contestant } from '../types';
import { Sparkline } from './Sparkline';

interface ContestantDetailModalProps {
  contestant: Contestant | null;
  onClose: () => void;
}

export const ContestantDetailModal: React.FC<ContestantDetailModalProps> = ({
  contestant,
  onClose
}) => {
  if (!contestant) return null;

  const getRiskColor = (tier: string) => {
    switch (tier) {
      case 'Safe':
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
      case 'Vocal Bubble / At Risk':
        return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
      case 'High Danger':
        return 'text-rose-400 border-rose-500/30 bg-rose-500/10';
      default:
        return 'text-slate-400 border-slate-700 bg-slate-800';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#131d33]">
          <div className="flex items-center gap-3">
            <img
              src={contestant.avatar}
              alt={contestant.name}
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-lg object-cover border border-slate-700"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white tracking-tight">{contestant.name}</h3>
                <span className="text-xs font-mono text-slate-400">"{contestant.nickname}"</span>
                {contestant.isNominated && (
                  <span className="text-[11px] font-semibold text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded border border-rose-500/30">
                    Nominated
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{contestant.role} · Edit: {contestant.recentNarrativeEdit}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-[#18233c] rounded-lg border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">Raw Sentiment</span>
              <span className="text-xl font-bold font-mono tabular-nums text-slate-100">{contestant.rawSentiment}%</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Unfiltered volume</span>
            </div>
            <div className="p-3 bg-[#18233c] rounded-lg border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">True Organic (TOSS)</span>
              <span className="text-xl font-bold font-mono tabular-nums text-cyan-300">{contestant.trueOrganicSentiment}%</span>
              <span className="text-[10px] text-cyan-500/80 block mt-0.5">Bot-sanitized core</span>
            </div>
            <div className="p-3 bg-[#18233c] rounded-lg border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">PR Inflation Delta</span>
              <span className={`text-xl font-bold font-mono tabular-nums ${contestant.prInflationDelta > 20 ? 'text-rose-400' : 'text-slate-200'}`}>
                {contestant.prInflationDelta > 0 ? `+${contestant.prInflationDelta}` : contestant.prInflationDelta}%
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Manufactured lift</span>
            </div>
            <div className="p-3 bg-[#18233c] rounded-lg border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">Eviction Risk</span>
              <span className="text-xl font-bold font-mono tabular-nums text-rose-300">{contestant.evictionProbability}%</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">{contestant.evictionRiskTier}</span>
            </div>
          </div>

          {/* 7-Day TOSS Evolution Strip */}
          <div className="p-4 bg-[#141d30] rounded-lg border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  7-Day True Organic Sentiment (TOSS) Trend
                </h4>
              </div>
              <p className="text-[11px] text-slate-400">
                Daily organic score trajectory leading into the current nomination cycle
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 font-mono text-[10px] text-slate-400">
                {contestant.tossTrend7d.map((val, idx) => (
                  <div key={idx} className="flex flex-col items-center px-1">
                    <span className="text-slate-500 text-[9px]">D{idx + 1}</span>
                    <span className={`tabular-nums font-semibold ${idx === 6 ? 'text-cyan-300' : 'text-slate-300'}`}>
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pl-3 border-l border-slate-800">
                <Sparkline data={contestant.tossTrend7d} width={80} height={24} />
              </div>
            </div>
          </div>

          {/* Bio & Editorial Context */}
          <div className="p-4 bg-slate-900/60 rounded-lg border border-slate-800">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Intelligence Profile</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{contestant.bio}</p>
          </div>

          {/* Multi-Platform Ingestion Breakdown */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Multi-Platform Engagement & Authenticity Breakdown
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* YouTube */}
              <div className="p-3.5 bg-[#141d30] border border-slate-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Youtube className="w-4 h-4 text-red-400" />
                    <span className="text-xs font-medium text-slate-200">YouTube (Casual Majority)</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-100">
                    {contestant.platforms.youtube.sentiment}% Pos
                  </span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-400">
                  <div className="flex justify-between">
                    <span>Organic Ratio:</span>
                    <span className="font-mono text-emerald-400">{(contestant.platforms.youtube.organicRatio * 100).toFixed(0)}% authentic</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sampled Volume:</span>
                    <span className="font-mono text-slate-300">{contestant.platforms.youtube.rawVolume.toLocaleString()} comments</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Bot Spam:</span>
                    <span className="font-mono text-slate-400">{contestant.platforms.youtube.botCountEstimate.toLocaleString()} accounts</span>
                  </div>
                </div>
              </div>

              {/* X / Twitter */}
              <div className="p-3.5 bg-[#141d30] border border-slate-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Twitter className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-medium text-slate-200">X (Twitter Echo Chamber)</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-100">
                    {contestant.platforms.xTwitter.sentiment}% Pos
                  </span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-400">
                  <div className="flex justify-between">
                    <span>Organic Ratio:</span>
                    <span className="font-mono text-amber-400">{(contestant.platforms.xTwitter.organicRatio * 100).toFixed(0)}% authentic</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sampled Volume:</span>
                    <span className="font-mono text-slate-300">{contestant.platforms.xTwitter.rawVolume.toLocaleString()} posts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discounted Bot/PR Posts:</span>
                    <span className="font-mono text-rose-400">{contestant.platforms.xTwitter.botCountEstimate.toLocaleString()} posts</span>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="p-3.5 bg-[#141d30] border border-slate-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span className="text-xs font-medium text-slate-200">Instagram / Reels Fandom</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-100">
                    {contestant.platforms.instagram.sentiment}% Pos
                  </span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-400">
                  <div className="flex justify-between">
                    <span>Organic Ratio:</span>
                    <span className="font-mono text-amber-400">{(contestant.platforms.instagram.organicRatio * 100).toFixed(0)}% authentic</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sampled Volume:</span>
                    <span className="font-mono text-slate-300">{contestant.platforms.instagram.rawVolume.toLocaleString()} comments</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Flagged Fandom Bots:</span>
                    <span className="font-mono text-rose-400">{contestant.platforms.instagram.botCountEstimate.toLocaleString()} accounts</span>
                  </div>
                </div>
              </div>

              {/* Threads */}
              <div className="p-3.5 bg-[#141d30] border border-slate-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-medium text-slate-200">Threads (Meta Conversations)</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-100">
                    {contestant.platforms.threads?.sentiment ?? 70}% Pos
                  </span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-400">
                  <div className="flex justify-between">
                    <span>Organic Ratio:</span>
                    <span className="font-mono text-emerald-400">
                      {((contestant.platforms.threads?.organicRatio ?? 0.9) * 100).toFixed(0)}% authentic
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sampled Volume:</span>
                    <span className="font-mono text-slate-300">
                      {(contestant.platforms.threads?.rawVolume ?? 15000).toLocaleString()} threads
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Detected Bot Noise:</span>
                    <span className="font-mono text-slate-400">
                      {(contestant.platforms.threads?.botCountEstimate ?? 200).toLocaleString()} accounts
                    </span>
                  </div>
                </div>
              </div>

              {/* Google News */}
              <div className="p-3.5 bg-[#141d30] border border-slate-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-medium text-slate-200">Google News & Media</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-100">
                    {contestant.platforms.googleNews.sentiment}% Pos
                  </span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-400">
                  <div className="flex justify-between">
                    <span>Organic Ratio:</span>
                    <span className="font-mono text-emerald-400">{(contestant.platforms.googleNews.organicRatio * 100).toFixed(0)}% verified</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Articles Indexed:</span>
                    <span className="font-mono text-slate-300">{contestant.platforms.googleNews.rawVolume} articles</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Press Release Distribution:</span>
                    <span className="font-mono text-slate-400">Standard media syndication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detected PR Astroturf Patterns */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Detected PR Astroturfing Flags & Phrasing
            </h4>
            <div className="space-y-2">
              {contestant.detectedAstroturfPatterns.map((pattern, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 flex items-start gap-2"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{pattern}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-[#131d33] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
