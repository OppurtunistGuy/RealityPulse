import React from 'react';
import { ShieldAlert, Sparkles, Sliders, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { timeAgo } from '../utils/timeAgo';
import { calculateShowTimeline } from '../data/timelineConfig';

export type ActiveTab = 'tonight' | 'housemates' | 'hype' | 'story' | 'scoreboard';

interface TopBarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenLiveQuery: () => void;
  onOpenBackstage: () => void;
  onOpenSecurityAndFeed: () => void;
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  capturedAt?: string;
  timeline?: { currentDay: number; currentWeek: number };
}

export const TopBar: React.FC<TopBarProps> = ({
  activeTab,
  onTabChange,
  onOpenLiveQuery,
  onOpenBackstage,
  onOpenSecurityAndFeed,
  language,
  onToggleLanguage,
  capturedAt,
  timeline
}) => {
  const isHinglish = language === 'hinglish';

  return (
    <header className="border-b border-slate-800/80 bg-[#0c1220]/95 backdrop-blur-md sticky top-0 z-40 w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 min-h-16 py-2.5 flex items-center justify-between gap-3 flex-wrap lg:flex-nowrap">
        {/* Zone 1: Brand Wordmark & Dynamic Timeline Status */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-950/50 shrink-0">
            <ShieldAlert className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-extrabold tracking-tight text-white whitespace-nowrap">
                Bigg Boss 20
              </span>
              <span className="text-cyan-400 font-mono text-[11px] font-bold px-1.5 py-0.2 rounded bg-cyan-950/60 border border-cyan-500/30">
                Pulse
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <span className="text-cyan-300 font-semibold whitespace-nowrap">
                Day {timeline?.currentDay ?? calculateShowTimeline().currentDay} · W{timeline?.currentWeek ?? calculateShowTimeline().currentWeek}
              </span>
              {capturedAt && (
                <span className="text-slate-400 whitespace-nowrap text-[11px]">
                  · Updated {timeAgo(capturedAt)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Zone 2: Navigation Tabs Named After Questions */}
        <nav
          role="tablist"
          aria-label="Main Intelligence Views"
          className="hidden lg:flex items-center gap-1 overflow-x-auto no-scrollbar py-1"
        >
          {/* Tonight (Default) */}
          <button
            role="tab"
            id="tab-tonight"
            aria-selected={activeTab === 'tonight'}
            aria-controls="panel-tonight"
            onClick={() => onTabChange('tonight')}
            className={`min-h-[40px] px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'tonight'
                ? 'bg-slate-800 text-rose-300 border border-rose-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            {isHinglish ? "Aaj Kaun Jayega" : "Who's going home"}
          </button>

          {/* Housemates */}
          <button
            role="tab"
            id="tab-housemates"
            aria-selected={activeTab === 'housemates'}
            aria-controls="panel-housemates"
            onClick={() => onTabChange('housemates')}
            className={`min-h-[40px] px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'housemates'
                ? 'bg-slate-800 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            {isHinglish ? 'Housemates' : 'Housemates'}
          </button>

          {/* Is the hype real */}
          <button
            role="tab"
            id="tab-hype"
            aria-selected={activeTab === 'hype'}
            aria-controls="panel-hype"
            onClick={() => onTabChange('hype')}
            className={`min-h-[40px] px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'hype'
                ? 'bg-slate-800 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            {isHinglish ? 'Hype Asli Hai Kya' : 'Is the hype real'}
          </button>

          {/* What happened this week */}
          <button
            role="tab"
            id="tab-story"
            aria-selected={activeTab === 'story'}
            aria-controls="panel-story"
            onClick={() => onTabChange('story')}
            className={`min-h-[40px] px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'story'
                ? 'bg-slate-800 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            {isHinglish ? 'Is Hafte Kya Hua' : 'What happened this week'}
          </button>

          {/* Prediction Scoreboard */}
          <button
            role="tab"
            id="tab-scoreboard"
            aria-selected={activeTab === 'scoreboard'}
            aria-controls="panel-scoreboard"
            onClick={() => onTabChange('scoreboard')}
            className={`min-h-[40px] px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'scoreboard'
                ? 'bg-slate-800 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <span>{isHinglish ? 'Scoreboard' : 'Prediction Scoreboard'}</span>
            <span className="px-1.5 py-0.2 text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 rounded border border-amber-500/40">
              85.7%
            </span>
          </button>
        </nav>

        {/* Zone 3: Actions & Controls with CLEAR LABELS (No mystery bare icons) */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center rounded-lg border border-slate-700 bg-slate-900 p-0.5 text-xs">
            <button
              onClick={() => onToggleLanguage('en')}
              className={`min-h-[32px] px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                !isHinglish
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Switch to English"
              aria-label="Switch language to English"
            >
              EN
            </button>
            <button
              onClick={() => onToggleLanguage('hinglish')}
              className={`min-h-[32px] px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                isHinglish
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Switch to Hinglish"
              aria-label="Switch language to Hinglish"
            >
              HI
            </button>
          </div>

          {/* Backstage Machinery Button (Clearly labeled) */}
          <button
            onClick={onOpenBackstage}
            className="min-h-[36px] flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
            title="Inspect evidence policy, nomination sources, and platform weight calibration"
            aria-label="Open Backstage and Platform Weights"
          >
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>Backstage</span>
          </button>

          {/* Live Sync Ledger Button (Clearly labeled) */}
          <button
            onClick={onOpenSecurityAndFeed}
            className="min-h-[36px] flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 hover:text-white transition-colors"
            title="Inspect Live Sync and Security Feed"
            aria-label="Open Live Sync and Security Feed"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Live Sync</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </button>

          {/* Search AI Button (Clearly labeled) */}
          <button
            onClick={onOpenLiveQuery}
            className="min-h-[36px] flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-all shadow-sm shadow-cyan-950"
            title="Ask Google Search Grounded Reality Intelligence"
            aria-label="Open Search AI"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Search AI</span>
          </button>
        </div>
      </div>

      {/* Mobile Tab Navigation Bar (Scrollable with explicit touch targets) */}
      <div
        role="tablist"
        aria-label="Mobile Navigation"
        className="lg:hidden flex items-center justify-start gap-1 px-3 py-2 border-t border-slate-800 overflow-x-auto text-xs bg-[#090e1b] no-scrollbar"
      >
        <button
          role="tab"
          aria-selected={activeTab === 'tonight'}
          onClick={() => onTabChange('tonight')}
          className={`min-h-[44px] px-3.5 py-2 rounded-lg font-bold whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'tonight'
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {isHinglish ? "Aaj Kaun Jayega" : "Who's going home"}
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'housemates'}
          onClick={() => onTabChange('housemates')}
          className={`min-h-[44px] px-3.5 py-2 rounded-lg font-bold whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'housemates'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Housemates
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'hype'}
          onClick={() => onTabChange('hype')}
          className={`min-h-[44px] px-3.5 py-2 rounded-lg font-bold whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'hype'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Is the hype real
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'story'}
          onClick={() => onTabChange('story')}
          className={`min-h-[44px] px-3.5 py-2 rounded-lg font-bold whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'story'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          What happened this week
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'scoreboard'}
          onClick={() => onTabChange('scoreboard')}
          className={`min-h-[44px] px-3.5 py-2 rounded-lg font-bold whitespace-nowrap shrink-0 transition-colors flex items-center gap-1.5 ${
            activeTab === 'scoreboard'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <span>Scoreboard</span>
          <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold bg-amber-500/20 text-amber-300 rounded border border-amber-500/40">
            85.7%
          </span>
        </button>
      </div>
    </header>
  );
};
