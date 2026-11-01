import React, { useState, useEffect, useMemo } from 'react';
import { TopBar, ActiveTab } from './components/TopBar';
import { TonightView } from './components/TonightView';
import { HousematesView } from './components/HousematesView';
import { IsTheHypeRealView } from './components/IsTheHypeRealView';
import { WhatHappenedThisWeekView } from './components/WhatHappenedThisWeekView';
import { PredictionScoreboardView } from './components/PredictionScoreboardView';
import { ContestantDetailModal } from './components/ContestantDetailModal';
import { BackstageMachineryModal } from './components/BackstageMachineryModal';
import { SecurityAndFeedModal } from './components/SecurityAndFeedModal';
import { Contestant, PlatformWeightConfig, Language } from './types';
import { DEFAULT_PLATFORM_WEIGHTS, calculateTOSS } from './utils/analyticsEngine';
import { calculateShowTimeline } from './data/timelineConfig';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('tonight');
  const [contestants, setContestants] = useState<Contestant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [capturedAt, setCapturedAt] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<{ currentDay: number; currentWeek: number }>(() => {
    const t = calculateShowTimeline();
    return { currentDay: t.currentDay, currentWeek: t.currentWeek };
  });

  // Modal manager to prevent stacked dialogs
  const [activeModal, setActiveModal] = useState<'none' | 'backstage' | 'security' | 'contestant'>('none');
  const [selectedContestantId, setSelectedContestantId] = useState<string | null>(null);

  const [weights, setWeights] = useState<PlatformWeightConfig>(DEFAULT_PLATFORM_WEIGHTS);
  const [language, setLanguage] = useState<Language>('en');

  // Load contestants from backend API on mount
  const fetchContestantsData = async () => {
    setIsLoading(true);
    setLoadError(null);
    try {
      const res = await fetch('/api/contestants');
      if (!res.ok) {
        throw new Error(`Failed to load reality snapshot (HTTP ${res.status})`);
      }
      const data = await res.json();
      setContestants(data.contestants || []);
      setCapturedAt(data.capturedAt || new Date().toISOString());
      if (data.timeline) {
        setTimeline(data.timeline);
      }
    } catch (err: any) {
      console.warn('API error, displaying connection fallback state:', err);
      setLoadError(err.message || 'Error connecting to database');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContestantsData();
  }, []);

  // SINGLE SOURCE OF TRUTH: Evaluated contestants computed dynamically from live platform weights
  const evaluatedContestants: Contestant[] = useMemo(() => {
    return contestants.map((c) => {
      const tossResult = calculateTOSS(c, weights);
      const trend = Array.isArray(c.tossTrend7d) && c.tossTrend7d.length > 0
        ? [...c.tossTrend7d]
        : [tossResult.toss];
      // Keep 7-day trend end aligned with current organic sentiment
      trend[trend.length - 1] = tossResult.toss;

      return {
        ...c,
        rawSentiment: tossResult.raw,
        trueOrganicSentiment: tossResult.toss,
        prInflationDelta: tossResult.prDelta,
        evictionRiskTier: tossResult.riskTier,
        evictionProbability: tossResult.evictionProbability,
        insufficientData: tossResult.insufficientData,
        tossTrend7d: trend,
        calculatedToss: tossResult.toss,
        calculatedRaw: tossResult.raw,
        calculatedPrDelta: tossResult.prDelta,
        calculatedRiskTier: tossResult.riskTier,
        calculatedEvictionProbability: tossResult.evictionProbability,
        calculatedInsufficientData: tossResult.insufficientData
      };
    });
  }, [contestants, weights]);

  // Selected contestant actively synchronized with evaluated contestants
  const activeSelectedContestant = useMemo(() => {
    if (!selectedContestantId) return null;
    return evaluatedContestants.find((c) => c.id === selectedContestantId) || null;
  }, [selectedContestantId, evaluatedContestants]);

  const openContestantModal = (c: Contestant) => {
    setSelectedContestantId(c.id);
    setActiveModal('contestant');
  };

  const isInitialLoading = isLoading && contestants.length === 0;

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans overflow-x-hidden">
      {/* Semantic h1 heading for accessibility */}
      <h1 className="sr-only">RealityPulse — Bigg Boss 20 True Organic Audience & Eviction Analytics</h1>

      {/* Top Bar with Question-Based Navigation and Clearly Labeled Actions */}
      <TopBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenLiveQuery={() => setActiveTab('story')}
        onOpenBackstage={() => setActiveModal('backstage')}
        onOpenSecurityAndFeed={() => setActiveModal('security')}
        language={language}
        onToggleLanguage={setLanguage}
        capturedAt={capturedAt ?? undefined}
        timeline={timeline}
      />

      {/* Main Workspace Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Subtle in-place indicator during background fetches */}
        {isLoading && contestants.length > 0 && (
          <div className="fixed top-16 left-0 right-0 z-50 h-1 bg-cyan-950 overflow-hidden">
            <div className="h-full bg-cyan-400 animate-pulse w-full"></div>
          </div>
        )}

        {isInitialLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center animate-spin">
              <Loader2 className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="text-center space-y-1">
              <h2 className="text-sm font-semibold text-white">Loading Reality TV Intelligence...</h2>
              <p className="text-xs text-slate-400 font-mono">Connecting to Bigg Boss 20 database</p>
            </div>
          </div>
        ) : loadError && contestants.length === 0 ? (
          <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-600/40 text-center space-y-4 max-w-lg mx-auto my-12">
            <div className="w-10 h-10 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h2 className="text-sm font-bold text-white">Connection to Reality Database Interrupted</h2>
              <p className="text-xs text-rose-300">{loadError}</p>
            </div>
            <button
              onClick={fetchContestantsData}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Connection</span>
            </button>
          </div>
        ) : (
          <>
            {/* 1. TONIGHT (Default single-screen dominant view) */}
            {activeTab === 'tonight' && (
              <div id="panel-tonight" role="tabpanel" aria-labelledby="tab-tonight">
                <TonightView
                  contestants={evaluatedContestants}
                  onSelectContestant={openContestantModal}
                  onOpenBackstage={() => setActiveModal('backstage')}
                  language={language}
                />
              </div>
            )}

            {/* 2. HOUSEMATES (Full sortable & searchable roster) */}
            {activeTab === 'housemates' && (
              <div id="panel-housemates" role="tabpanel" aria-labelledby="tab-housemates">
                <HousematesView
                  contestants={evaluatedContestants}
                  onSelectContestant={openContestantModal}
                  language={language}
                />
              </div>
            )}

            {/* 3. IS THE HYPE REAL (Bot network graph + comment tester) */}
            {activeTab === 'hype' && (
              <div id="panel-hype" role="tabpanel" aria-labelledby="tab-hype">
                <IsTheHypeRealView
                  contestants={evaluatedContestants}
                  onSelectContestant={openContestantModal}
                />
              </div>
            )}

            {/* 4. WHAT HAPPENED THIS WEEK (Narrative arc delta + search grounding) */}
            {activeTab === 'story' && (
              <div id="panel-story" role="tabpanel" aria-labelledby="tab-story">
                <WhatHappenedThisWeekView />
              </div>
            )}

            {/* 5. PREDICTION SCOREBOARD (Public accuracy scoreboard & audit ledger) */}
            {activeTab === 'scoreboard' && (
              <div id="panel-scoreboard" role="tabpanel" aria-labelledby="tab-scoreboard">
                <PredictionScoreboardView />
              </div>
            )}
          </>
        )}
      </main>

      {/* Human-Written Contestant Dossier Modal with 100% matched numbers */}
      <ContestantDetailModal
        contestant={activeModal === 'contestant' ? activeSelectedContestant : null}
        onClose={() => setActiveModal('none')}
        language={language}
      />

      {/* Backstage Machinery Modal: Evidence policy, nomination audit & platform weights */}
      <BackstageMachineryModal
        isOpen={activeModal === 'backstage'}
        onClose={() => setActiveModal('none')}
        weights={weights}
        onWeightsChange={setWeights}
        language={language}
      />

      {/* Live Feed & Anti-Manipulation Cryptographic Ledger Modal */}
      <SecurityAndFeedModal
        isOpen={activeModal === 'security'}
        onClose={() => setActiveModal('none')}
        language={language}
      />

      {/* Anti-Slop Discipline Clean Footer */}
      <footer className="border-t border-slate-800/80 bg-[#0c1220] py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-slate-300">
              Bigg Boss 20 Hindi · Day {timeline.currentDay} (Week {timeline.currentWeek})
            </span>
            <span>·</span>
            <span>Real Fan Support (TOSS)</span>
            <span>·</span>
            <span>Grounded via Broadcaster & Google Search</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 flex-wrap">
            <button
              onClick={() => setActiveModal('backstage')}
              className="hover:text-cyan-300 underline underline-offset-4"
            >
              Backstage Methodology & Weights
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveModal('security')}
              className="hover:text-emerald-300 underline underline-offset-4"
            >
              Security Audit Ledger
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTab('scoreboard')}
              className="hover:text-amber-300 underline underline-offset-4"
            >
              Prediction Scoreboard (85.7%)
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
