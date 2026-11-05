import React from 'react';
import {
  X,
  Sliders,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Globe,
  ExternalLink,
  RotateCcw
} from 'lucide-react';
import { PlatformWeightConfig, Language } from '../types';
import { DEFAULT_PLATFORM_WEIGHTS } from '../utils/analyticsEngine';
import { BB20_NOMINATION_AUDIT_DATA } from '../data/bb20ContestantsStatic';

interface BackstageMachineryModalProps {
  isOpen: boolean;
  onClose: () => void;
  weights: PlatformWeightConfig;
  onWeightsChange: (weights: PlatformWeightConfig) => void;
  language?: Language;
}

export const BackstageMachineryModal: React.FC<BackstageMachineryModalProps> = ({
  isOpen,
  onClose,
  weights,
  onWeightsChange,
  language = 'en'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0c1322] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0f172a]">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Backstage: Evidence Policy, Nomination Audit & Platform Weights
              </h3>
              <p className="text-xs text-slate-400">
                Transparent verification rules, multi-source records, and model calibration machinery.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* SECTION 1: Evidence Policy */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400">
              <ShieldCheck className="w-4 h-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                Evidence & Provenance Policy
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Official roster status and evictions are verified exclusively against JioHotstar broadcast episodes and official Colors TV releases. Unopened or dead URLs are marked <span className="font-mono text-amber-400">[Unverifiable]</span> with no broken links. Social speculation is quarantined unless corroborated by at least two credentialed entertainment news desks.
            </p>
          </div>

          {/* SECTION 2: Platform Weight Calibration */}
          <div className="p-4 rounded-xl bg-[#0f172a] border border-cyan-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-cyan-300">
                <Sliders className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  Calibrate Platform Weights
                </h4>
              </div>
              <button
                onClick={() => onWeightsChange(DEFAULT_PLATFORM_WEIGHTS)}
                className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset to Standard</span>
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Adjust how much weight each platform contributes to the final True Organic Sentiment (TOSS) calculation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
              {/* YouTube */}
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-semibold">YouTube</span>
                  <span className="text-cyan-300 font-bold">{Math.round(weights.youtube * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.10"
                  max="0.60"
                  step="0.05"
                  value={weights.youtube}
                  onChange={(e) => onWeightsChange({ ...weights, youtube: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 block">Long-form video & episode clip comments</span>
              </div>

              {/* X / Twitter */}
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-semibold">X (Twitter)</span>
                  <span className="text-cyan-300 font-bold">{Math.round(weights.xTwitter * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.10"
                  max="0.50"
                  step="0.05"
                  value={weights.xTwitter}
                  onChange={(e) => onWeightsChange({ ...weights, xTwitter: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 block">Fast breaking chatter, heavily bot-prone</span>
              </div>

              {/* Instagram */}
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-semibold">Instagram</span>
                  <span className="text-cyan-300 font-bold">{Math.round(weights.instagram * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.10"
                  max="0.50"
                  step="0.05"
                  value={weights.instagram}
                  onChange={(e) => onWeightsChange({ ...weights, instagram: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 block">Reel comments & fan club fan edits</span>
              </div>

              {/* Threads */}
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-semibold">Threads</span>
                  <span className="text-cyan-300 font-bold">{Math.round(weights.threads * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.40"
                  step="0.05"
                  value={weights.threads}
                  onChange={(e) => onWeightsChange({ ...weights, threads: parseFloat(e.target.value) })}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 block">Meta text discourse & casual sentiment</span>
              </div>
            </div>
          </div>

          {/* SECTION 3: Multi-Source Nomination Audit */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-400">
                <AlertTriangle className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  Nomination Intel: Multi-Source Audit
                </h4>
              </div>
              <span className="text-[10px] font-mono text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/40">
                Source Disagreement Flagged
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {BB20_NOMINATION_AUDIT_DATA.explanation}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {BB20_NOMINATION_AUDIT_DATA.sources.map((source, idx) => (
                <div key={idx} className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{source.outletName}</span>
                    <span className="font-mono text-[10px] text-slate-400">{source.publishDate}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {source.namesAsPrinted.map((name, nIdx) => (
                      <span key={nIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {name}
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-500 italic">{source.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

