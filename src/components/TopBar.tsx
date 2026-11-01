import React from 'react';
import { ShieldAlert, Sparkles, Globe, Layers, Languages, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { timeAgo } from '../utils/timeAgo';

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
    <header className="border-b border-slate-800/80 bg-[#0c1220]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-6">
        {/* Zone 1: Brand wordmark (single line) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-950/40">
            <ShieldAlert className="w-4 h-4 text-white" />
          </div>
          <span className="text-base font-bold tracking-tight text-white whitespace-nowrap">
            Bigg Boss 20{' '}
            <span className="text-cyan-400 font-normal text-xs ml-1 font-mono">
              {isHinglish ? 'ASLI JANTA INTEL' : 'TOSS INTEL'}
            </span>
          </span>

          {/* Dynamic Day/Week indicator */}
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-[11px] font-mono text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Day {timeline?.currentDay ?? 52} · W{timeline?.currentWeek ?? 8}
          </span>

          {/* Last updated relative time badge */}
          {capturedAt && (
            <span className="hidden md:inline-flex text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800" title={`Snapshot timestamp: ${capturedAt}`}>
              Updated {timeAgo(capturedAt)}
            </span>
          )}
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => onTabChange('matrix')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'matrix'
                ? 'bg-slate-800 text-cyan-300 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {isHinglish ? 'Eviction Khatra Matrix' : 'Eviction Matrix'}
          </button>
          <button
            onClick={() => onTabChange('astroturf')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'astroturf'
                ? 'bg-slate-800 text-cyan-300 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {isHinglish ? 'PR & Bot Swarms' : 'Bot & PR Network'}
          </button>
          <button
            onClick={() => onTabChange('narrative')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'narrative'
                ? 'bg-slate-800 text-cyan-300 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {isHinglish ? 'Episode Edit vs Public' : 'Narrative Arc Delta'}
          </button>
          <button
            onClick={() => onTabChange('grounding')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'grounding'
                ? 'bg-slate-800 text-cyan-300 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {isHinglish ? 'Live Google Search' : 'Google Search Grounding'}
          </button>
          <button
            onClick={() => onTabChange('studio')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'studio'
                ? 'bg-slate-800 text-cyan-300 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {isHinglish ? 'Comment Test Studio' : 'Forensic Studio'}
          </button>
        </nav>

        {/* Zone 3: Language Toggle & Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher: EN vs Hinglish */}
          <div className="flex items-center rounded-lg border border-slate-700 bg-slate-900/90 p-0.5 text-xs">
            <button
              onClick={() => onToggleLanguage('en')}
              className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all ${
                !isHinglish
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => onToggleLanguage('hinglish')}
              className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all ${
                isHinglish
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Hinglish (Hindi + English)"
            >
              Hinglish
            </button>
          </div>

          <button
            onClick={onOpenSecurityAndFeed}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-md border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 hover:text-white hover:border-emerald-500/60 transition-colors whitespace-nowrap shrink-0"
            title="Inspect Hourly Ingestion Feed, SHA-256 Block Ledger, and Anti-Manipulation Defense"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">{isHinglish ? 'Live Feed & Security' : 'Live Sync & Security'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5"></span>
          </button>

          <button
            onClick={onOpenSources}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-md border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-600 transition-colors whitespace-nowrap shrink-0"
            title="View verified real sources across YouTube, X, Instagram, Threads and News"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">{isHinglish ? 'Data Feeds' : 'Data Sources'}</span>
          </button>

          <button
            onClick={onToggleNominationOnly}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-md border transition-colors whitespace-nowrap shrink-0 ${
              isNominationOnly
                ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                : 'bg-slate-900 border-slate-700/80 text-slate-300 hover:border-slate-600'
            }`}
            title="Filter by housemates currently up for public voting"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>
              {isNominationOnly
                ? isHinglish
                  ? 'Sirf Nominated'
                  : 'Nominated Only'
                : isHinglish
                ? 'Sabhi Sadasya'
                : 'All Housemates'}
            </span>
          </button>

          <button
            onClick={onOpenLiveQuery}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 rounded-md transition-all shadow-sm shadow-cyan-950 whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isHinglish ? 'Live Grounding' : 'Search Grounding'}</span>
          </button>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="lg:hidden flex items-center justify-around px-2 py-2 border-t border-slate-800/60 overflow-x-auto text-xs bg-[#0a0f1d]">
        <button
          onClick={() => onTabChange('matrix')}
          className={`px-2 py-1 rounded whitespace-nowrap ${
            activeTab === 'matrix' ? 'text-cyan-400 font-semibold' : 'text-slate-400'
          }`}
        >
          {isHinglish ? 'Matrix & Timeline' : 'Eviction Matrix'}
        </button>
        <button
          onClick={() => onTabChange('astroturf')}
          className={`px-2 py-1 rounded whitespace-nowrap ${
            activeTab === 'astroturf' ? 'text-cyan-400 font-semibold' : 'text-slate-400'
          }`}
        >
          {isHinglish ? 'PR Swarms' : 'Bot Network'}
        </button>
        <button
          onClick={() => onTabChange('narrative')}
          className={`px-2 py-1 rounded whitespace-nowrap ${
            activeTab === 'narrative' ? 'text-cyan-400 font-semibold' : 'text-slate-400'
          }`}
        >
          {isHinglish ? 'Narrative' : 'Narrative Delta'}
        </button>
        <button
          onClick={() => onTabChange('grounding')}
          className={`px-2 py-1 rounded whitespace-nowrap ${
            activeTab === 'grounding' ? 'text-cyan-400 font-semibold' : 'text-slate-400'
          }`}
        >
          Live Search
        </button>
        <button
          onClick={() => onTabChange('studio')}
          className={`px-2 py-1 rounded whitespace-nowrap ${
            activeTab === 'studio' ? 'text-cyan-400 font-semibold' : 'text-slate-400'
          }`}
        >
          Studio
        </button>
      </div>
    </header>
  );
};
