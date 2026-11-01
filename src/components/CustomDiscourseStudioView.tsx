import React, { useState } from 'react';
import {
  Code,
  Sparkles,
  Play,
  RotateCcw,
  Copy,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  Loader2
} from 'lucide-react';
import { findCommentClusters } from '../utils/analyticsEngine';

export const CustomDiscourseStudioView: React.FC = () => {
  const PRESETS = {
    botSwarm: `Kanika Mann is playing with pure grace and dignity, sole deserving winner of BB20 #KanikaArmy
Kanika Mann is playing with 100% grace and dignity, sole deserving winner #KanikaArmy
Look how composed Kanika stayed today, undisputed queen of BB20 #KanikaMann
Pure dignity, pure grace! Kanika Mann is the real winner of Bigg Boss 20 #KanikaArmy
Kanika Mann is playing with pure grace and dignity, sole deserving winner of BB20 #KanikaArmy
No one can match Kanika grace and dignity under pressure #KanikaMann #KanikaArmy
Kanika is the only dignified contestant in the house, pure winner vibes #KanikaArmy
Dignity, grace and patience! That is Kanika Mann #KanikaArmy #BB20`,

    organicCasual: `Honestly wasn't expecting Scout to stay so calm during Qazi's rant, but that was pure maturity.
Kanika acts like a saint whenever Salman is watching, but avoids every hard kitchen chore.
Aamrapali cooking for the whole house while others fight over eggs is the most relatable thing this season.
Aasif Khan is such a phenomenal actor in Panchayat, but in BB house he is basically invisible like a sofa.
Qazi Touqeer thinks it's still 2005. That vintage nostalgia trick won't work on current JioHotstar voters.
Voting for Aamrapali and Scout tonight! True entertainers without paid agency PR.
Scout's gaming community is going to vote bank him all the way to the finale.`,

    prAttack: `Scout has zero personality in the house, only gaming kids are blindly voting for him. Expose Scout #OverratedScout
Scout has zero personality in the house, only gaming kids are blindly voting for him. Expose Scout #OverratedScout
Expose Scout fake calm persona, he has contributed zero entertainment to Bigg Boss 20 #OverratedScout
Scout has zero personality in the house, only gaming kids are blindly voting for him #OverratedScout
Look at Scout hiding behind gaming fans again. Zero reality show talent #OverratedScout
Scout has zero personality in the house, only gaming kids are blindly voting for him. Expose Scout #OverratedScout`
  };

  const [inputText, setInputText] = useState(PRESETS.botSwarm);
  const [clientClusters, setClientClusters] = useState<{ representative: string; count: number; matches: string[] }[]>([]);
  const [analyzingAi, setAnalyzingAi] = useState(false);
  const [aiReport, setAiReport] = useState<{
    astroturfProbability: number;
    sentimentUniformityScore: number;
    detectedTemplates: string[];
    organicSentimentScore: number;
    rawSentimentScore: number;
    prInflationDelta: number;
    evictionRiskVerdict: string;
    editorialFindings: string;
    flaggedAccountsOrPatterns: string[];
  } | null>(null);

  // Run client-side duplicate template analysis
  const runLocalDetection = (text: string) => {
    const lines = text
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 5);
    const clusters = findCommentClusters(lines, 0.65);
    setClientClusters(clusters);
  };

  // Run server-side Gemini 3.8 Flash forensic analysis
  const runAiForensics = async () => {
    if (!inputText.trim()) return;

    setAnalyzingAi(true);
    try {
      const res = await fetch('/api/analyze-custom-discourse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          textToAnalyze: inputText,
          contestants: [
            'Scout (Tanmay Singh)',
            'Kanika Mann',
            'Aamrapali Dubey',
            'Aasif Khan',
            'Love Gill',
            'Qazi Touqeer',
            'Gullu (Gaurav)'
          ]
        })
      });

      const contentType = res.headers.get('content-type') || '';
      let data: any;
      if (contentType.includes('application/json')) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(`Server returned non-JSON response (${res.status}): ${text.slice(0, 100)}`);
      }
      if (!res.ok) throw new Error(data?.error || 'Failed to analyze');
      setAiReport(data);
    } catch (err: any) {
      console.error('Forensic analysis error:', err);
    } finally {
      setAnalyzingAi(false);
    }
  };

  const loadPreset = (key: keyof typeof PRESETS) => {
    const text = PRESETS[key];
    setInputText(text);
    runLocalDetection(text);
    setAiReport(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Comment Studio: Real People vs Paid Campaigns
            </h3>
          </div>
          <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
            Paste any batch of comments here. It tells you how many are copy-paste duplicates from a paid campaign and how many are real people writing in their own words.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-800/80">
          <span className="text-[11px] text-slate-400 font-medium">Test Presets:</span>
          <button
            onClick={() => loadPreset('botSwarm')}
            className="px-2.5 py-1 text-xs bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 rounded transition-colors"
          >
            1. Paid PR Bot Swarm (Template Spikes)
          </button>
          <button
            onClick={() => loadPreset('organicCasual')}
            className="px-2.5 py-1 text-xs bg-slate-900 hover:bg-slate-800 border border-slate-700 text-emerald-300 rounded transition-colors"
          >
            2. Organic Casual Debate (Nuanced & Messy)
          </button>
          <button
            onClick={() => loadPreset('prAttack')}
            className="px-2.5 py-1 text-xs bg-slate-900 hover:bg-slate-800 border border-slate-700 text-rose-300 rounded transition-colors"
          >
            3. Targeted PR Smear Ring
          </button>
        </div>
      </div>

      {/* Editor & Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Input Textarea */}
        <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300">
                Discourse Data Input (Raw comments, one per line):
              </label>
              <span className="text-[11px] font-mono text-slate-500">
                {inputText.split('\n').filter((l) => l.trim().length > 0).length} lines
              </span>
            </div>
            <textarea
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                runLocalDetection(e.target.value);
              }}
              rows={12}
              className="w-full p-3 text-xs font-mono bg-slate-900/90 border border-slate-700/80 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              placeholder="Paste social comments, tweets, or episode transcripts here..."
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => runLocalDetection(inputText)}
              className="px-3 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
              <span>Run Local LSH Scan</span>
            </button>

            <button
              onClick={runAiForensics}
              disabled={analyzingAi}
              className="flex-1 px-4 py-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md shadow-cyan-950"
            >
              {analyzingAi ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Evaluating PR Forensics...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Run Deep Gemini AI Forensics</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: Forensic Results */}
        <div className="space-y-4">
          {/* Local Duplicate Clustering Results */}
          <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Copy className="w-3.5 h-3.5 text-amber-400" />
                <span>Local Template Replication Clusters ({clientClusters.length})</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400">Levenshtein &gt; 65% match</span>
            </div>

            {clientClusters.length === 0 ? (
              <div className="p-4 rounded bg-slate-900/60 border border-slate-800 text-xs text-slate-400 text-center">
                No high-confidence duplicate script clusters found. Content exhibits organic lexical variation.
              </div>
            ) : (
              <div className="space-y-2.5 max-h-56 overflow-y-auto">
                {clientClusters.map((cluster, i) => (
                  <div key={i} className="p-3 bg-slate-900 border border-slate-800 rounded text-xs space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-semibold text-rose-300">
                        {cluster.count} matching repetitions
                      </span>
                      <span className="text-[10px] text-amber-400 font-mono">Template Detected</span>
                    </div>
                    <p className="font-mono text-[11px] text-slate-300">"{cluster.representative}"</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* AI Forensic Report */}
          {aiReport && (
            <div className="p-5 bg-[#11192a] border border-cyan-900/50 rounded-xl space-y-4 animate-fade-in">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Gemini AI Astroturf Forensic Verdict</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Verdict: {aiReport.evictionRiskVerdict}
                </span>
              </div>

              {/* Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Astroturf Risk</span>
                  <span className="text-lg font-bold font-mono text-rose-400 tabular-nums">
                    {aiReport.astroturfProbability}%
                  </span>
                </div>
                <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Uniformity Discrepancy</span>
                  <span className="text-lg font-bold font-mono text-amber-300 tabular-nums">
                    {aiReport.sentimentUniformityScore}%
                  </span>
                </div>
                <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">TOSS Score</span>
                  <span className="text-lg font-bold font-mono text-cyan-300 tabular-nums">
                    {aiReport.organicSentimentScore}%
                  </span>
                </div>
              </div>

              <div className="p-3 bg-slate-900/80 rounded border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-2">
                <span className="font-semibold text-slate-200 block">Editorial Findings:</span>
                <p>{aiReport.editorialFindings}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
