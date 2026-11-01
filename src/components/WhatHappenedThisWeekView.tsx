import React from 'react';
import { NarrativeArcDeltaView } from './NarrativeArcDeltaView';
import { LiveSearchGroundingView } from './LiveSearchGroundingView';
import { BookOpen, Search } from 'lucide-react';

export const WhatHappenedThisWeekView: React.FC = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto animate-fade-in pb-12">
      {/* SECTION 1: Narrative Edit vs Reality Delta */}
      <section aria-label="Episode Narrative Arc Delta">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-indigo-400">
            <BookOpen className="w-5 h-5" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              What happened this week: Show Edit vs Audience Reality
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            The show edits each person to look a certain way. This compares that edit with how viewers actually reacted. A big gap means the edit is not working on the audience.
          </p>
        </div>

        <NarrativeArcDeltaView />
      </section>

      {/* SECTION 2: Search Grounding (Live AI Show Intelligence) */}
      <section aria-label="Live Search Grounding" className="pt-6 border-t border-slate-800">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <Search className="w-5 h-5" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Live Breaking Show Intelligence
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Asks Google for the latest news and fan chatter about the show, then summarises what it found. Use it to check whether something changed in the last few hours.
          </p>
        </div>

        <LiveSearchGroundingView />
      </section>
    </div>
  );
};
