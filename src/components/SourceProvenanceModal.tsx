import React from 'react';
import { X, Youtube, Twitter, Instagram, Globe, MessageSquare, ShieldCheck, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { SOURCE_PROVENANCE_CATALOG } from '../data/mockRealityData';

interface SourceProvenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SourceProvenanceModal: React.FC<SourceProvenanceModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'YouTube':
        return <Youtube className="w-5 h-5 text-red-400" />;
      case 'X (Twitter)':
        return <Twitter className="w-5 h-5 text-sky-400" />;
      case 'Instagram':
        return <Instagram className="w-5 h-5 text-pink-400" />;
      case 'Threads':
        return <MessageSquare className="w-5 h-5 text-indigo-400" />;
      default:
        return <Globe className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0f172a] border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#131d33]">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white tracking-tight">
                Source Provenance & Real-Time Intelligence Feeds
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Bigg Boss 20 Hindi · How discourse is captured across YouTube, X, Instagram, Threads & News
            </p>
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
          {/* Executive Methodology Card */}
          <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-lg text-xs text-slate-300 leading-relaxed space-y-2">
            <span className="font-semibold text-white block text-sm">How Data Sourcing & PR Sanitization Operates:</span>
            <p>
              Rather than counting naive impressions, this engine scrapes multi-tier engagement signals across five distinct media layers.
              Each platform receives a weighted score based on its depth of human effort and vulnerability to automated astroturfing.
              Sources with high bot density (like X and Instagram comments) pass through Levenshtein/MinHash deduplication filters before entering the True Organic Sentiment Score (TOSS) equation.
            </p>
          </div>

          {/* Platform By Platform Catalog */}
          <div className="space-y-4">
            {SOURCE_PROVENANCE_CATALOG.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#11192a] border border-slate-800 space-y-3"
              >
                {/* Platform Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
                  <div className="flex items-center gap-2.5">
                    {getPlatformIcon(item.platform)}
                    <h4 className="font-bold text-white text-sm tracking-tight">{item.platform}</h4>
                    <span className="text-[11px] text-slate-400">· {item.description}</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 shrink-0">
                    {item.prRiskProfile}
                  </span>
                </div>

                {/* Verified Feeds & Handles */}
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Monitored Feeds, Creators & Media Outlets:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {item.verifiedFeedsAndHandles.map((feed, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-2.5 rounded bg-slate-900 border border-slate-800/80 space-y-1"
                      >
                        <div className="flex justify-between items-start gap-2">
                          <span className="font-semibold text-slate-200">{feed.name}</span>
                          <span className="font-mono text-[10px] text-slate-500 shrink-0">
                            {feed.estimatedDailyVolume}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-cyan-400 block">{feed.identifier}</span>
                        <p className="text-[11px] text-slate-400">{feed.role}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Methodology Note */}
                <div className="p-2.5 rounded bg-[#0b111e] border border-slate-800/60 text-[11px] text-slate-400 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-300">Sanitization Rule:</strong> {item.samplingMethodology}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-[#131d33] flex justify-between items-center text-xs text-slate-400">
          <span>Grounded with Google Search API & Live Social Ingestion Models</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Provenance
          </button>
        </div>
      </div>
    </div>
  );
};
