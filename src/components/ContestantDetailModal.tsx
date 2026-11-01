import React from 'react';
import {
  X,
  Youtube,
  Twitter,
  Instagram,
  Globe,
  MessageSquare,
  AlertTriangle,
  Activity,
  History,
  Flame,
  Swords,
  Trophy,
  Award,
  Zap
} from 'lucide-react';
import { Contestant, Language } from '../types';
import { Sparkline } from './Sparkline';

interface ContestantDetailModalProps {
  contestant: Contestant | null;
  onClose: () => void;
  language?: Language;
}

export const ContestantDetailModal: React.FC<ContestantDetailModalProps> = ({
  contestant,
  onClose,
  language = 'en'
}) => {
  if (!contestant) return null;

  const isHinglish = language === 'hinglish';
  const hinglish = contestant.hinglishProfile;

  const bioText = isHinglish && hinglish?.bio ? hinglish.bio : contestant.bio;
  const pastText = isHinglish && hinglish?.pastDetails ? hinglish.pastDetails : contestant.pastDetails;
  const controversiesList = isHinglish && hinglish?.controversies ? hinglish.controversies : contestant.controversies;
  const gameplayText = isHinglish && hinglish?.houseGameplay ? hinglish.houseGameplay : contestant.houseGameplay;
  const strongestText = isHinglish && hinglish?.strongestMove ? hinglish.strongestMove : contestant.strongestMove;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#0f172a] border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#131d33]">
          <div className="flex items-center gap-3">
            <img
              src={contestant.avatar}
              alt={contestant.name}
              referrerPolicy="no-referrer"
              className="w-14 h-14 rounded-lg object-cover border border-slate-700 shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-bold text-white tracking-tight">{contestant.name}</h3>
                <span className="text-xs font-mono text-slate-400">"{contestant.nickname}"</span>
                {contestant.status === 'Evicted' ? (
                  <span className="text-[11px] font-semibold text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded border border-rose-500/30">
                    {isHinglish ? `Week ${contestant.evictionWeek ?? ''} Mein Evicted` : `Evicted (Week ${contestant.evictionWeek ?? ''})`}
                  </span>
                ) : contestant.isNominated ? (
                  <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                    {isHinglish ? 'Danger Zone (Nominated)' : 'Nominated'}
                  </span>
                ) : (
                  <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                    {isHinglish ? 'Surakshit (Safe)' : 'Safe'}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {contestant.role} · {isHinglish ? 'Broadcast Edit' : 'Edit'}: {contestant.recentNarrativeEdit} ·{' '}
                {isHinglish ? 'Trajectory' : 'Trajectory'}: {contestant.votingTrajectory}
              </p>
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
              <span className="text-[11px] font-medium text-slate-400 block">
                {isHinglish ? 'Raw Sentiment' : 'Raw Sentiment'}
              </span>
              <span className="text-xl font-bold font-mono tabular-nums text-slate-100">
                {contestant.rawSentiment}%
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                {isHinglish ? 'Social media volume' : 'Unfiltered volume'}
              </span>
            </div>
            <div className="p-3 bg-[#18233c] rounded-lg border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">
                {isHinglish ? 'TOSS (Asli Janta)' : 'True Organic (TOSS)'}
              </span>
              <span className="text-xl font-bold font-mono tabular-nums text-cyan-300">
                {contestant.trueOrganicSentiment}%
              </span>
              <span className="text-[10px] text-cyan-500/80 block mt-0.5">
                {isHinglish ? 'Bot-sanitized score' : 'Bot-sanitized core'}
              </span>
            </div>
            <div className="p-3 bg-[#18233c] rounded-lg border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">
                {isHinglish ? 'PR Hype Delta' : 'PR Inflation Delta'}
              </span>
              <span
                className={`text-xl font-bold font-mono tabular-nums ${
                  contestant.prInflationDelta > 20 ? 'text-rose-400' : 'text-slate-200'
                }`}
              >
                {contestant.prInflationDelta > 0 ? `+${contestant.prInflationDelta}` : contestant.prInflationDelta}%
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                {isHinglish ? 'Manufactured PR' : 'Manufactured lift'}
              </span>
            </div>
            <div className="p-3 bg-[#18233c] rounded-lg border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">
                {isHinglish ? 'Eviction Khatra' : 'Eviction Risk'}
              </span>
              <span className="text-xl font-bold font-mono tabular-nums text-rose-300">
                {contestant.evictionProbability}%
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">{contestant.evictionRiskTier}</span>
            </div>
          </div>

          {/* 7-Day TOSS Evolution Strip */}
          <div className="p-4 bg-[#141d30] rounded-lg border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {isHinglish ? '7-Din Ka TOSS Trend Trajectory' : '7-Day True Organic Sentiment (TOSS) Trend'}
                </h4>
              </div>
              <p className="text-[11px] text-slate-400">
                {isHinglish
                  ? 'Nomination cycle ke dauran daily score ki movement (Day 1 se Day 7)'
                  : 'Daily organic score trajectory leading into the current nomination cycle'}
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

          {/* SECTION 1: What They Are Doing in Bigg Boss House */}
          <div className="p-4 bg-[#131d33] border border-cyan-500/30 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-cyan-300">
              <Zap className="w-4 h-4 text-cyan-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                {isHinglish ? 'Bigg Boss House Mein Kya Kar Rahe Hain (House Strategy)' : 'What They Are Doing in the Bigg Boss House'}
              </h4>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-sans">{gameplayText}</p>
          </div>

          {/* SECTION 2: Strongest Move in Bigg Boss House */}
          <div className="p-4 bg-gradient-to-r from-amber-950/30 to-amber-900/10 border border-amber-500/30 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-amber-300">
              <Trophy className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                {isHinglish ? 'Bigg Boss House Ka Sabse Strongest Move (Defining Moment)' : 'Strongest Thing They Did in the Bigg Boss House'}
              </h4>
            </div>
            <p className="text-xs text-amber-100/90 leading-relaxed font-sans">{strongestText}</p>
          </div>

          {/* SECTION 3: Past Details & Origins */}
          <div className="p-4 bg-[#141d30] border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-slate-300">
              <History className="w-4 h-4 text-indigo-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                {isHinglish ? 'Past Details & Background (Show Se Pehle Ka Safar)' : 'Past Career Details & Claim to Fame'}
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{pastText}</p>
          </div>

          {/* SECTION 4: Past Controversies & PR Baggage */}
          {controversiesList && controversiesList.length > 0 && (
            <div className="p-4 bg-rose-950/20 border border-rose-500/20 rounded-xl space-y-2.5">
              <div className="flex items-center gap-2 text-rose-300">
                <Flame className="w-4 h-4 text-rose-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  {isHinglish ? 'Past Controversies & Viral Lafde' : 'Past Controversies & Viral Baggage'}
                </h4>
              </div>
              <ul className="space-y-1.5">
                {controversiesList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Multi-Platform Ingestion Breakdown */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              {isHinglish ? '5 Platforms Ka Asli vs Bot Breakdown' : 'Multi-Platform Engagement & Authenticity Breakdown'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* YouTube */}
              <div className="p-3.5 bg-[#141d30] border border-slate-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Youtube className="w-4 h-4 text-red-400" />
                    <span className="text-xs font-medium text-slate-200">
                      {isHinglish ? 'YouTube (Asli Janta Majority)' : 'YouTube (Casual Majority)'}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-100">
                    {contestant.platforms.youtube.sentiment}% Pos
                  </span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-400">
                  <div className="flex justify-between">
                    <span>Organic Ratio:</span>
                    <span className="font-mono text-emerald-400">
                      {(contestant.platforms.youtube.organicRatio * 100).toFixed(0)}% authentic
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sampled Volume:</span>
                    <span className="font-mono text-slate-300">
                      {contestant.platforms.youtube.rawVolume.toLocaleString()} comments
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Bot Spam:</span>
                    <span className="font-mono text-slate-400">
                      {contestant.platforms.youtube.botCountEstimate.toLocaleString()} accounts
                    </span>
                  </div>
                </div>
              </div>

              {/* X / Twitter */}
              <div className="p-3.5 bg-[#141d30] border border-slate-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Twitter className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-medium text-slate-200">
                      {isHinglish ? 'X/Twitter (PR & Bot Fanwars)' : 'X (Twitter Echo Chamber)'}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-100">
                    {contestant.platforms.xTwitter.sentiment}% Pos
                  </span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-400">
                  <div className="flex justify-between">
                    <span>Organic Ratio:</span>
                    <span className="font-mono text-amber-400">
                      {(contestant.platforms.xTwitter.organicRatio * 100).toFixed(0)}% authentic
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sampled Volume:</span>
                    <span className="font-mono text-slate-300">
                      {contestant.platforms.xTwitter.rawVolume.toLocaleString()} posts
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discounted Bot/PR Posts:</span>
                    <span className="font-mono text-rose-400">
                      {contestant.platforms.xTwitter.botCountEstimate.toLocaleString()} posts
                    </span>
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
                    <span className="font-mono text-amber-400">
                      {(contestant.platforms.instagram.organicRatio * 100).toFixed(0)}% authentic
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sampled Volume:</span>
                    <span className="font-mono text-slate-300">
                      {contestant.platforms.instagram.rawVolume.toLocaleString()} comments
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Flagged Fandom Bots:</span>
                    <span className="font-mono text-rose-400">
                      {contestant.platforms.instagram.botCountEstimate.toLocaleString()} accounts
                    </span>
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
            </div>
          </div>

          {/* Detected PR Astroturf Patterns */}
          {contestant.detectedAstroturfPatterns.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                {isHinglish ? 'Pakde Gaye Paid PR Patterns & Copy-Paste Bots' : 'Detected PR Astroturfing Flags & Phrasing'}
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
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-[#131d33] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            {isHinglish ? 'Band Karein' : 'Close Overview'}
          </button>
        </div>
      </div>
    </div>
  );
};
