import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { EvictionMatrixView } from './components/EvictionMatrixView';
import { AstroturfNetworkView } from './components/AstroturfNetworkView';
import { NarrativeArcDeltaView } from './components/NarrativeArcDeltaView';
import { LiveSearchGroundingView } from './components/LiveSearchGroundingView';
import { CustomDiscourseStudioView } from './components/CustomDiscourseStudioView';
import { ContestantDetailModal } from './components/ContestantDetailModal';
import { SourceProvenanceModal } from './components/SourceProvenanceModal';
import { SecurityAndFeedModal } from './components/SecurityAndFeedModal';
import { INITIAL_CONTESTANTS } from './data/mockRealityData';
import { Contestant, PlatformWeightConfig, Language } from './types';
import { DEFAULT_PLATFORM_WEIGHTS } from './utils/analyticsEngine';

export default function App() {
  const [activeTab, setActiveTab] = useState<'matrix' | 'astroturf' | 'narrative' | 'grounding' | 'studio'>('matrix');
  const [contestants, setContestants] = useState<Contestant[]>(INITIAL_CONTESTANTS);
  const [selectedContestant, setSelectedContestant] = useState<Contestant | null>(null);
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);
  const [weights, setWeights] = useState<PlatformWeightConfig>(DEFAULT_PLATFORM_WEIGHTS);
  const [isNominationOnly, setIsNominationOnly] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans">
      {/* Top Bar adhering to Top Bar Contract */}
      <TopBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenLiveQuery={() => setActiveTab('grounding')}
        onOpenSources={() => setIsSourcesOpen(true)}
        onOpenSecurityAndFeed={() => setIsSecurityOpen(true)}
        isNominationOnly={isNominationOnly}
        onToggleNominationOnly={() => setIsNominationOnly(!isNominationOnly)}
        language={language}
        onToggleLanguage={setLanguage}
      />

      {/* Main Workspace Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        {activeTab === 'matrix' && (
          <EvictionMatrixView
            contestants={contestants}
            onSelectContestant={setSelectedContestant}
            weights={weights}
            onWeightsChange={setWeights}
            onOpenSources={() => setIsSourcesOpen(true)}
            isNominationOnly={isNominationOnly}
            language={language}
          />
        )}

        {activeTab === 'astroturf' && (
          <AstroturfNetworkView
            contestants={contestants}
            onSelectContestant={setSelectedContestant}
          />
        )}

        {activeTab === 'narrative' && (
          <NarrativeArcDeltaView />
        )}

        {activeTab === 'grounding' && (
          <LiveSearchGroundingView />
        )}

        {activeTab === 'studio' && (
          <CustomDiscourseStudioView />
        )}
      </main>

      {/* Contestant Detail Overview Modal */}
      <ContestantDetailModal
        contestant={selectedContestant}
        onClose={() => setSelectedContestant(null)}
        language={language}
      />

      {/* Real Source Provenance Modal */}
      <SourceProvenanceModal
        isOpen={isSourcesOpen}
        onClose={() => setIsSourcesOpen(false)}
      />

      {/* Live Feed & Anti-Manipulation Security Ledger Modal */}
      <SecurityAndFeedModal
        isOpen={isSecurityOpen}
        onClose={() => setIsSecurityOpen(false)}
        language={language}
      />

      {/* Clean Footer adhering to Anti-Slop Discipline */}
      <footer className="border-t border-slate-800/80 bg-[#0c1220] py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">Bigg Boss 20 Hindi · TOSS Engine</span>
            <span>·</span>
            <span>PR Astroturf Sanitizer</span>
            <span>·</span>
            <span>Grounded via Google Search</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => setIsSourcesOpen(true)}
              className="hover:text-cyan-300 underline underline-offset-4"
            >
              View All 5 Intelligence Feeds (YouTube, X, IG, Threads, News)
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
