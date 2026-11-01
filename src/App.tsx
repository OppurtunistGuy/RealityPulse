import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { EvictionMatrixView } from './components/EvictionMatrixView';
import { AstroturfNetworkView } from './components/AstroturfNetworkView';
import { NarrativeArcDeltaView } from './components/NarrativeArcDeltaView';
import { LiveSearchGroundingView } from './components/LiveSearchGroundingView';
import { CustomDiscourseStudioView } from './components/CustomDiscourseStudioView';
import { ContestantDetailModal } from './components/ContestantDetailModal';
import { SourceProvenanceModal } from './components/SourceProvenanceModal';
import { SecurityAndFeedModal } from './components/SecurityAndFeedModal';
import { Contestant, PlatformWeightConfig, Language } from './types';
import { DEFAULT_PLATFORM_WEIGHTS } from './utils/analyticsEngine';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'matrix' | 'astroturf' | 'narrative' | 'grounding' | 'studio'>('matrix');
  const [contestants, setContestants] = useState<Contestant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [capturedAt, setCapturedAt] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<{ currentDay: number; currentWeek: number }>({
    currentDay: 52,
    currentWeek: 8
  });
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [isHistoricalView, setIsHistoricalView] = useState(false);

  // Unified modal manager to strictly prevent stacked dialogs
  const [activeModal, setActiveModal] = useState<'none' | 'sources' | 'security' | 'contestant'>('none');
  const [selectedContestant, setSelectedContestant] = useState<Contestant | null>(null);

  const [weights, setWeights] = useState<PlatformWeightConfig>(DEFAULT_PLATFORM_WEIGHTS);
  const [isNominationOnly, setIsNominationOnly] = useState(false);
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
      setSelectedWeek(null);
      setIsHistoricalView(false);
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

  // Historical snapshot lookback
  const handleSelectWeek = async (week: number) => {
    if (week === timeline.currentWeek) {
      return fetchContestantsData();
    }

    setIsLoading(true);
    try {
      const res = await fetch(`/api/snapshot?week=${week}`);
      if (!res.ok) throw new Error('Failed to load snapshot');
      const data = await res.json();
      setContestants(data.contestants || []);
      setSelectedWeek(week);
      setIsHistoricalView(true);
      if (data.capturedAt) {
        setCapturedAt(data.capturedAt);
      }
    } catch (err: any) {
      console.error('Error fetching historical week snapshot:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const openContestantModal = (c: Contestant) => {
    setSelectedContestant(c);
    setActiveModal('contestant');
  };

  const isInitialLoading = isLoading && contestants.length === 0;

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans overflow-x-hidden">
      {/* Semantic h1 heading for accessibility and document hierarchy */}
      <h1 className="sr-only">RealityPulse — Bigg Boss 20 True Organic Audience & Eviction Analytics</h1>

      {/* Top Bar with dynamic Day/Week, relative time, and accessibility tabs */}
      <TopBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenLiveQuery={() => setActiveTab('grounding')}
        onOpenSources={() => setActiveModal('sources')}
        onOpenSecurityAndFeed={() => setActiveModal('security')}
        isNominationOnly={isNominationOnly}
        onToggleNominationOnly={() => setIsNominationOnly(!isNominationOnly)}
        language={language}
        onToggleLanguage={setLanguage}
        capturedAt={capturedAt ?? undefined}
        timeline={timeline}
      />

      {/* Main Workspace Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        {/* In-place week switch indicator (avoids full-page blank spinner) */}
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
            {activeTab === 'matrix' && (
              <div id="panel-matrix" role="tabpanel" aria-labelledby="tab-matrix">
                <EvictionMatrixView
                  contestants={contestants}
                  onSelectContestant={openContestantModal}
                  weights={weights}
                  onWeightsChange={setWeights}
                  onOpenSources={() => setActiveModal('sources')}
                  isNominationOnly={isNominationOnly}
                  language={language}
                  currentWeek={timeline.currentWeek}
                  currentDay={timeline.currentDay}
                  capturedAt={capturedAt ?? undefined}
                  isHistorical={isHistoricalView}
                  selectedWeek={selectedWeek}
                  onSelectWeek={handleSelectWeek}
                />
              </div>
            )}

            {activeTab === 'astroturf' && (
              <div id="panel-astroturf" role="tabpanel" aria-labelledby="tab-astroturf">
                <AstroturfNetworkView
                  contestants={contestants}
                  onSelectContestant={openContestantModal}
                />
              </div>
            )}

            {activeTab === 'narrative' && (
              <div id="panel-narrative" role="tabpanel" aria-labelledby="tab-narrative">
                <NarrativeArcDeltaView />
              </div>
            )}

            {activeTab === 'grounding' && (
              <div id="panel-grounding" role="tabpanel" aria-labelledby="tab-grounding">
                <LiveSearchGroundingView />
              </div>
            )}

            {activeTab === 'studio' && (
              <div id="panel-studio" role="tabpanel" aria-labelledby="tab-studio">
                <CustomDiscourseStudioView />
              </div>
            )}
          </>
        )}
      </main>

      {/* Contestant Detail Overview Modal */}
      <ContestantDetailModal
        contestant={activeModal === 'contestant' ? selectedContestant : null}
        onClose={() => setActiveModal('none')}
        language={language}
      />

      {/* Real Source Provenance Modal */}
      <SourceProvenanceModal
        isOpen={activeModal === 'sources'}
        onClose={() => setActiveModal('none')}
      />

      {/* Live Feed & Anti-Manipulation Security Ledger Modal */}
      <SecurityAndFeedModal
        isOpen={activeModal === 'security'}
        onClose={() => setActiveModal('none')}
        language={language}
      />

      {/* Clean Footer adhering to Anti-Slop Discipline */}
      <footer className="border-t border-slate-800/80 bg-[#0c1220] py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">
              Bigg Boss 20 Hindi · Day {isHistoricalView && selectedWeek ? selectedWeek * 7 : timeline.currentDay} (Week {selectedWeek ?? timeline.currentWeek})
            </span>
            <span>·</span>
            <span>TOSS Engine</span>
            <span>·</span>
            <span>Grounded via Google Search</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 flex-wrap">
            <button
              onClick={() => setActiveModal('sources')}
              className="hover:text-cyan-300 underline underline-offset-4"
            >
              View Verified Intelligence Feeds
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveModal('security')}
              className="hover:text-emerald-300 underline underline-offset-4"
            >
              Inspect Security Audit Ledger
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTab('studio')}
              className="hover:text-slate-200 underline underline-offset-4"
            >
              Test Comment Studio
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
