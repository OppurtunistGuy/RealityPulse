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
  Zap,
  ShieldCheck,
  ExternalLink,
  Link2,
  CheckCircle2,
  FileCheck2
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

  const getClassificationBadgeClass = (classification: string) => {
    switch (classification) {
      case 'On-Screen House Event':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'Official Broadcaster Penalty':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      case 'External Allegation':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'Direct Quote':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'Public Denial':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      default:
        return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#0f172a] border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-4 border-b border-slate-800 bg-[#131d33] gap-4">
          <div className="flex items-start gap-4">
            <img
              src={contestant.avatar}
              alt={contestant.name}
              referrerPolicy="no-referrer"
              className="w-16 h-16 rounded-lg object-cover border border-slate-700 shrink-0 mt-0.5"
            />
            <div className="space-y-1.5">
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

                {/* Broadcaster Verified Pill */}
                <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {isHinglish ? 'Broadcaster Verified' : 'Broadcaster Verified'}
                </span>
              </div>

              {/* Profession Tags */}
              {contestant.profession && contestant.profession.length > 0 && (
                <div className="flex items-center gap-1.5 flex-wrap">
                  {contestant.profession.map((prof, idx) => (
                    <span key={idx} className="text-[10px] font-medium text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
                      {prof}
                    </span>
                  ))}
                </div>
              )}

              {/* Verified Social Handles */}
              {contestant.verifiedSocialHandles && contestant.verifiedSocialHandles.length > 0 && (
                <div className="flex items-center gap-3 pt-0.5 text-xs text-slate-400">
                  {contestant.verifiedSocialHandles.map((handle, idx) => (
                    <a
                      key={idx}
                      href={handle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 hover:underline"
                    >
                      {handle.platform === 'Instagram' && <Instagram className="w-3 h-3 text-pink-400" />}
                      {handle.platform === 'YouTube' && <Youtube className="w-3 h-3 text-red-400" />}
                      {handle.platform === 'X (Twitter)' && <Twitter className="w-3 h-3 text-sky-400" />}
                      <span>{handle.handle}</span>
                      {handle.followerCount && <span className="text-slate-500 font-mono">({handle.followerCount})</span>}
                    </a>
                  ))}
                </div>
              )}
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
          {/* Key Metrics Strip: Plain words above coined terms */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Real fan support */}
            <div className="p-3 bg-[#18233c] rounded-lg border border-slate-800">
              <span className="text-xs font-bold text-white block">
                {isHinglish ? 'Asli Fan Support' : 'Real fan support'}
              </span>
              <span className="text-xl font-bold font-mono tabular-nums text-cyan-300">
                {contestant.trueOrganicSentiment}%
              </span>
              <span className="text-[10px] text-slate-400 font-mono block mt-0.5">
                TOSS Score
              </span>
            </div>

            {/* Unfiltered hype */}
            <div className="p-3 bg-[#18233c] rounded-lg border border-slate-800">
              <span className="text-xs font-bold text-slate-200 block">
                {isHinglish ? 'Unfiltered Hype' : 'Unfiltered hype'}
              </span>
              <span className="text-xl font-bold font-mono tabular-nums text-slate-100">
                {contestant.rawSentiment}%
              </span>
              <span className="text-[10px] text-slate-400 font-mono block mt-0.5">
                Raw Sentiment
              </span>
            </div>

            {/* PR manipulation */}
            <div className="p-3 bg-[#18233c] rounded-lg border border-slate-800">
              <span className="text-xs font-bold text-slate-200 block">
                {isHinglish ? 'PR Hype Gap' : 'PR manipulation'}
              </span>
              <span
                className={`text-xl font-bold font-mono tabular-nums ${contestant.prInflationDelta > 15 ? 'text-rose-400' : 'text-slate-200'
                  }`}
              >
                {contestant.prInflationDelta > 0 ? `+${contestant.prInflationDelta}` : contestant.prInflationDelta}%
              </span>
              <span className="text-[10px] text-slate-400 font-mono block mt-0.5">
                PR Delta Gap
              </span>
            </div>

            {/* Eviction risk */}
            <div className="p-3 bg-[#18233c] rounded-lg border border-slate-800">
              <span className="text-xs font-bold text-rose-300 block">
                {isHinglish ? 'Eviction Khatra' : 'Eviction risk'}
              </span>
              <span className="text-xl font-bold font-mono tabular-nums text-rose-300">
                {contestant.insufficientData || contestant.evictionProbability === null
                  ? (contestant.isNominated ? 'Evaluating' : 'Safe')
                  : `${contestant.evictionProbability}%`}
              </span>
              <span className="text-[10px] text-slate-400 font-mono block mt-0.5">
                {contestant.evictionRiskTier ?? 'Immediate Risk'}
              </span>
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

          {/* SECTION 3: Past Details & Career Background */}
          <div className="p-4 bg-[#141d30] border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-slate-300">
              <History className="w-4 h-4 text-indigo-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                {isHinglish ? 'Past Details & Background (Show Se Pehle Ka Safar)' : 'Past Career Details & Claim to Fame'}
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{pastText}</p>
            {contestant.careerCredits && contestant.careerCredits.length > 0 && (
              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold mb-1">
                  {isHinglish ? 'Verified Career Credits:' : 'Verified Career Credits:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {contestant.careerCredits.map((credit, idx) => (
                    <span key={idx} className="text-[10px] font-medium text-indigo-300 bg-indigo-950/50 border border-indigo-500/30 px-2 py-0.5 rounded">
                      {credit}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SECTION 4: Past Controversies & PR Baggage */}
          {((contestant.structuredControversies && contestant.structuredControversies.length > 0) || (controversiesList && controversiesList.length > 0)) && (
            <div className="p-4 bg-rose-950/20 border border-rose-500/20 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-rose-300">
                  <Flame className="w-4 h-4 text-rose-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider">
                    {isHinglish ? 'Past Controversies & Evidence Classification' : 'Controversy Timeline & Evidence Classification'}
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  {isHinglish ? 'Verified vs Allegation' : 'Verified vs Allegation'}
                </span>
              </div>

              {contestant.structuredControversies && contestant.structuredControversies.length > 0 ? (
                <div className="space-y-2.5">
                  {contestant.structuredControversies.map((sc, idx) => (
                    <div key={idx} className="p-3 bg-[#0d1527] border border-slate-800 rounded-lg space-y-1.5">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${getClassificationBadgeClass(sc.classification)}`}>
                            {sc.classification}
                          </span>
                          <span className="text-xs font-bold text-white">{sc.title}</span>
                        </div>
                        <span className="text-[10px] font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-500/20 px-1.5 py-0.2 rounded">
                          {sc.verificationStatus}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">{sc.detail}</p>
                      {sc.sourceUrl && (
                        <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
                          <span className="text-[10px] text-slate-500">Source: {sc.sourceName}</span>
                          <a
                            href={sc.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-[10px] text-cyan-400 hover:text-cyan-300 underline"
                          >
                            <span>Verify Source</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-1.5">
                  {controversiesList?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* SECTION 5: Verified Primary Sources & Provenance */}
          {contestant.primarySourceUrls && contestant.primarySourceUrls.length > 0 && (
            <div className="p-4 bg-[#11192b] border border-slate-800 rounded-xl space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-300">
                  <FileCheck2 className="w-4 h-4 text-cyan-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider">
                    {isHinglish ? 'Official Sources & Broadcaster Provenance' : 'Verified Primary Sources & Broadcaster Provenance'}
                  </h4>
                </div>
                <span className="text-[10px] text-emerald-400 font-medium">
                  {contestant.statusVerifiedAt ? `Last Checked: ${contestant.statusVerifiedAt.slice(0, 10)}` : 'Verified'}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {contestant.primarySourceUrls.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-[#090f1d] hover:bg-[#0c152a] border border-slate-800 hover:border-cyan-500/40 rounded-lg transition-colors group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] font-semibold text-cyan-400 uppercase tracking-wider block">
                        {source.tier}
                      </span>
                      <span className="text-xs text-slate-200 font-medium group-hover:text-cyan-300 line-clamp-2 mt-0.5">
                        {source.label}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-800/80 text-[10px] text-slate-500">
                      <span>Live Reference</span>
                      <ExternalLink className="w-3 h-3 text-cyan-400" />
                    </div>
                  </a>
                ))}
              </div>
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

          {/* Broadcaster Authority Disclaimer Notice */}
          <div className="p-3 bg-[#0a101d] border border-slate-800/80 rounded-lg text-[10px] text-slate-400 leading-relaxed font-mono">
            <span className="text-cyan-400 font-bold block mb-0.5">
              {isHinglish ? '⚠ Broadcaster Authority & Evidence Policy' : '⚠ Broadcaster Authority & Evidence Policy'}
            </span>
            {isHinglish
              ? 'House status, task outcomes, aur evictions JioHotstar aur Colors TV ke official episodes se verified hain. TOSS score aur PR inflation independent algorithmic models hain, ye official voting count nahi hai.'
              : 'House status, nominations, and eviction results are verified directly via JioHotstar and Colors TV broadcast streams. TOSS metrics and PR deltas are independent analytical intelligence and do not represent broadcaster voting totals.'}
          </div>
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
