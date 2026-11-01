import React from 'react';
import { ShieldAlert, Sparkles, Globe, Layers, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { timeAgo } from '../utils/timeAgo';
import { calculateShowTimeline } from '../data/timelineConfig';

interface TopBarProps {
  activeTab: 'matrix' | 'astroturf' | 'narrative' | 'grounding' | 'studio';
  onTabChange: (tab: 'matrix' | 'astroturf' | 'narrative' | 'grounding' | 'studio') => void;
  onOpenLiveQuery: () => void;
  onOpenSources: () => void;
  onOpenSecurityAndFeed: () => void;
  isNominationOnly: boolean;
  onToggleNominationOnly: () => void;
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  capturedAt?: string;
  timeline?: { currentDay: number; currentWeek: number };
}

export const TopBar: React.FC<TopBarProps> = ({
  activeTab,
  onTabChange,
  onOpenLiveQuery,
  onOpenSources,
  onOpenSecurityAndFeed,
  isNominationOnly,
  onToggleNominationOnly,
  language,
  onToggleLanguage,
  capturedAt,
  timeline
}) => {
  const isHinglish = language === 'hinglish';

  return (
    <header className="border-b border-slate-800/80 bg-[#0c1220]/95 backdrop-blur-md sticky top-0 z-40 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Brand wordmark & Dynamic Timeline Status */}
        <div className="flex items-center gap-2 sm:gap-3 shrink min-w-0">
          <div className="w-9 h-9 min-w-9 rounded-lg bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-950/40 shrink-0">
            <ShieldAlert className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col shrink min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white whitespace-nowrap">
                Bigg Boss 20
              </span>
              <span className="text-cyan-400 font-mono text-xs hidden xs:inline">
                {isHinglish ? 'ASLI JANTA' : 'TOSS INTEL'}
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <span className="text-cyan-300 font-semibold whitespace-nowrap">
                Day {timeline?.currentDay ?? calculateShowTimeline().currentDay} · W{timeline?.currentWeek ?? calculateShowTimeline().currentWeek}
              </span>
              {capturedAt && (
                <span className="hidden md:inline text-slate-500 whitespace-nowrap" title={`Snapshot: ${capturedAt}`}>
                  · Updated {timeAgo(capturedAt)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Zone 2: Desktop Navigation Tabs (Tabs role for a11y) */}
        <nav
          role="tablist"
          aria-label="Main Reality TV Intelligence Views"
          className="hidden lg:flex items-center gap-1.5"
        >
          <button
            role="tab"
            id="tab-matrix"
            aria-selected={activeTab === 'matrix'}
            aria-controls="panel-matrix"
            onClick={() => onTabChange('matrix')}
            className={`min-h-[44px] px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'matrix'
                ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {isHinglish ? 'Eviction Khatra Matrix' : 'Eviction Matrix'}
          </button>
          <button
            role="tab"
            id="tab-astroturf"
            aria-selected={activeTab === 'astroturf'}
            aria-controls="panel-astroturf"
            onClick={() => onTabChange('astroturf')}
            className={`min-h-[44px] px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'astroturf'
                ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {isHinglish ? 'PR & Bot Swarms' : 'Bot & PR Network'}
          </button>
          <button
            role="tab"
            id="tab-narrative"
            aria-selected={activeTab === 'narrative'}
            aria-controls="panel-narrative"
            onClick={() => onTabChange('narrative')}
            className={`min-h-[44px] px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'narrative'
                ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {isHinglish ? 'Episode Edit vs Public' : 'Narrative Arc Delta'}
          </button>
          <button
            role="tab"
            id="tab-grounding"
            aria-selected={activeTab === 'grounding'}
            aria-controls="panel-grounding"
            onClick={() => onTabChange('grounding')}
            className={`min-h-[44px] px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'grounding'
                ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {isHinglish ? 'Live Google Search' : 'Search Grounding'}
          </button>
          <button
            role="tab"
            id="tab-studio"
            aria-selected={activeTab === 'studio'}
            aria-controls="panel-studio"
            onClick={() => onTabChange('studio')}
            className={`min-h-[44px] px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'studio'
                ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {isHinglish ? 'Comment Test Studio' : 'Forensic Studio'}
          </button>
        </nav>

        {/* Zone 3: Actions & Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center rounded-lg border border-slate-700 bg-slate-900/90 p-0.5 text-xs">
            <button
              onClick={() => onToggleLanguage('en')}
              className={`min-h-[36px] px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                !isHinglish
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="English interface"
              aria-label="Switch language to English"
            >
              EN
            </button>
            <button
              onClick={() => onToggleLanguage('hinglish')}
              className={`min-h-[36px] px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                isHinglish
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Hinglish interface"
              aria-label="Switch language to Hinglish"
            >
              HI
            </button>
          </div>

          {/* Live Feed & Ingestion Audit Button */}
          <button
            onClick={onOpenSecurityAndFeed}
            className="min-h-[44px] flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 hover:text-white hover:border-emerald-500/70 transition-colors whitespace-nowrap"
            title="Inspect Live Feed and Cryptographic Security Ledger"
            aria-label="Open Live Sync and Security Ledger"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="hidden xl:inline">{isHinglish ? 'Live Feed' : 'Live Sync'}</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </button>

          {/* Data Sources Button */}
          <button
            onClick={onOpenSources}
            className="min-h-[44px] flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-600 transition-colors whitespace-nowrap"
            title="Inspect Grounded Data Sources & Provenance"
            aria-label="Open Data Sources and Provenance"
          >
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="hidden xl:inline">{isHinglish ? 'Data Feeds' : 'Sources'}</span>
          </button>

          {/* Nominated Filter Toggle */}
          <button
            onClick={onToggleNominationOnly}
            className={`min-h-[44px] hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap ${
              isNominationOnly
                ? 'bg-amber-500/15 border-amber-500/50 text-amber-300'
                : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600'
            }`}
            title="Filter by nominated housemates"
            aria-label={isNominationOnly ? 'Showing nominated only' : 'Showing all housemates'}
          >
            <Layers className="w-4 h-4" />
            <span className="hidden md:inline">
              {isNominationOnly
                ? isHinglish
                  ? 'Nominated'
                  : 'Nominated Only'
                : isHinglish
                  ? 'All Roster'
                  : 'All Housemates'}
            </span>
          </button>

          {/* Live Search Grounding Action */}
          <button
            onClick={onOpenLiveQuery}
            className="min-h-[44px] flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 rounded-lg transition-all shadow-sm shadow-cyan-950 whitespace-nowrap"
            title="Run Google Search Grounded Reality Intelligence"
            aria-label="Open Live Search Grounding"
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">{isHinglish ? 'Grounding' : 'Search AI'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Tab Navigation Bar with full touch targets and clear active states */}
      <div
        role="tablist"
        aria-label="Mobile Navigation"
        className="lg:hidden flex items-center justify-start gap-1 px-3 py-2 border-t border-slate-800/80 overflow-x-auto text-xs bg-[#0a0f1d] no-scrollbar"
      >
        <button
          role="tab"
          aria-selected={activeTab === 'matrix'}
          onClick={() => onTabChange('matrix')}
          className={`min-h-[44px] px-3 py-2 rounded-md font-semibold whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'matrix'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {isHinglish ? 'Matrix' : 'Matrix'}
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'astroturf'}
          onClick={() => onTabChange('astroturf')}
          className={`min-h-[44px] px-3 py-2 rounded-md font-semibold whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'astroturf'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {isHinglish ? 'Bot Swarms' : 'Bot Network'}
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'narrative'}
          onClick={() => onTabChange('narrative')}
          className={`min-h-[44px] px-3 py-2 rounded-md font-semibold whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'narrative'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {isHinglish ? 'Narrative' : 'Narrative Delta'}
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'grounding'}
          onClick={() => onTabChange('grounding')}
          className={`min-h-[44px] px-3 py-2 rounded-md font-semibold whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'grounding'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {isHinglish ? 'Live Search' : 'Search AI'}
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'studio'}
          onClick={() => onTabChange('studio')}
          className={`min-h-[44px] px-3 py-2 rounded-md font-semibold whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'studio'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {isHinglish ? 'Studio' : 'Forensic Studio'}
        </button>
      </div>
    </header>
  );
};
