import React from 'react';
import { AstroturfNetworkView } from './AstroturfNetworkView';
import { CustomDiscourseStudioView } from './CustomDiscourseStudioView';
import { Contestant } from '../types';
import { Network, TestTube } from 'lucide-react';

interface IsTheHypeRealViewProps {
  contestants: Contestant[];
  onSelectContestant: (c: Contestant) => void;
}

export const IsTheHypeRealView: React.FC<IsTheHypeRealViewProps> = ({
  contestants,
  onSelectContestant
}) => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto animate-fade-in pb-12">
      {/* SECTION 1: Bot Rings & Astroturfing Graph */}
      <section aria-label="Detected Bot Rings and Astroturfing Networks">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <Network className="w-5 h-5" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Is the hype real: Coordinated Bot Networks & Astroturfing Rings
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Visualizing the hidden puppet strings: automated rings on the left coordinating copy-paste comment templates to artificially inflate contestant sentiment on the right.
          </p>
        </div>

        <AstroturfNetworkView
          contestants={contestants}
          onSelectContestant={onSelectContestant}
        />
      </section>

      {/* SECTION 2: Forensic Studio (Comment Tester) */}
      <section aria-label="Test Any Batch of Comments for Bot Signatures" className="pt-6 border-t border-slate-800">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-indigo-400">
            <TestTube className="w-5 h-5" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Test Any Social Media Comments
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Paste any batch of comments here. It tells you how many are copy-paste duplicates from a paid campaign and how many are real people writing in their own words.
          </p>
        </div>

        <CustomDiscourseStudioView />
      </section>
    </div>
  );
};
