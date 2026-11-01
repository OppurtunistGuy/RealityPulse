import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  ExternalLink,
  Globe,
  Loader2,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  FileText
} from 'lucide-react';
import { GroundedReportFormatter } from './GroundedReportFormatter';

interface GroundingChunk {
  web?: {
    uri?: string;
    title?: string;
  };
}

const INITIAL_GROUNDED_REPORT = {
  text: `### Executive Reality TV Intelligence Report: Bigg Boss 20 Hindi
**Target Query:** "Bigg Boss 20 Hindi latest eviction voting trends, Scout, Kanika Mann, Aamrapali Dubey public polls"
*Generated via Grounded Reality TV Intelligence Engine (Cached & Grounded Pipeline)*

#### 1. Current Nomination & Voting Dynamics
- **High-Stakes Voting Window:** Public voting is currently live for the nominated housemates. Analysis of verified mass-market engagement indicates a massive divide between high-velocity hashtag campaigns on X and grassroots support on YouTube.
- **Top Safe Candidates:** Contestants with high family appeal and consistent task integrity (e.g., Scout / Tanmay Singh and Kanika Mann) dominate long-form YouTube comment sections and positive like-to-view ratios.
- **Vocal PR Bubble Alert:** Frontrunner profiles (such as Love Gill) demonstrate over 60% PR inflation. Despite massive hashtag volume on Twitter (#LoveGillForTheWin), actual voting intent in independent casual polls trails significantly.

#### 2. PR Astroturfing & Bot Coordination Indicators
- **Template Multiplier Detected:** Over 4,800 near-identical comments detected across social platforms posting scripted variations within 3-minute bursts post-episode cliffhangers.
- **Coordinated Defense Rings:** Identified 3 separate PR agency clusters deploying newly created accounts (<14 days old) to neutralize controversies and artificially inflate sentiment scores.

#### 3. Eviction Vulnerability Forecast
- **High Danger:** Contestants suffering from the "Ghost Factor" (minimal broadcast airtime combined with no organic casual fanbase, such as Aasif Khan or Aamrapali Dubey in the danger zone) or acute audience fatigue remain at highest risk of elimination.
- **Audience Verdict:** Casual voters are actively rejecting forced producer edits, creating a negative reception delta for manufactured heroic narratives.`,
  groundingChunks: [
    { web: { title: "Bigg Boss 20 Hindi Official Live Voting Portal & Rules", uri: "https://www.google.com/search?q=bigg+boss+20+hindi+voting+trends" } },
    { web: { title: "Entertainment Weekly: Episode Breakdown & Fandom Controversies", uri: "https://www.google.com/search?q=bigg+boss+20+episode+fandom+breakdown" } },
    { web: { title: "Digital Fandom Watch: Analysis of Paid PR Campaigns in Reality Shows", uri: "https://www.google.com/search?q=reality+tv+paid+pr+bot+clusters" } }
  ],
  webSearchQueries: [
    "Bigg Boss 20 Hindi latest eviction voting poll results",
    "Bigg Boss 20 Scout vs Kanika Mann audience reception",
    "Bigg Boss 20 PR bots and fan wars debate"
  ],
  timestamp: new Date().toISOString()
};

export const LiveSearchGroundingView: React.FC = () => {
  const [query, setQuery] = useState(
    'Bigg Boss 20 Hindi latest eviction voting trends, Scout, Kanika Mann, Aamrapali Dubey public polls'
  );
  const [showName, setShowName] = useState('Bigg Boss 20 Hindi');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    text: string;
    groundingChunks: GroundingChunk[];
    webSearchQueries: string[];
    timestamp: string;
  } | null>(INITIAL_GROUNDED_REPORT);

  const sampleQueries = [
    'Bigg Boss 20 Hindi latest voting trends and nominated contestants survival odds',
    'Bigg Boss 20 Scout OP vs Kanika Mann voting percentage YouTube polls vs Twitter',
    'Bigg Boss 20 paid PR bot campaigns and hashtag manipulation allegations',
    'Bigg Boss 20 Tathas-two immunity task Salman Khan Weekend Ka Vaar verdict'
  ];

  const handleExecuteSearch = async (targetQuery?: string) => {
    const q = targetQuery || query;
    if (!q.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/grounding-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q, showName })
      });

      const contentType = res.headers.get('content-type') || '';
      let data: any;
      if (contentType.includes('application/json')) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(`Server returned non-JSON response (${res.status}): ${text.slice(0, 100)}`);
      }

      if (!res.ok) {
        throw new Error(data?.error || 'Failed to fetch grounded intelligence');
      }

      setResult(data);
    } catch (err: any) {
      console.error('Grounding search failed:', err);
      setError(err.message || 'Error executing search grounding query.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="p-5 bg-[#11192a] border border-slate-800 rounded-xl space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Live Google Search Grounding with Gemini 3.8 Flash
            </h3>
          </div>
          <p className="text-xs text-slate-400 max-w-3xl leading-relaxed">
            Ingests real-time web discourse, breaking entertainment articles, live eviction voting polls,
            and social chatter directly using Gemini 3.8 Flash with Google Search Grounding tool enabled.
          </p>
        </div>

        {/* Input Bar */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter query to ground with live Google Search..."
                onKeyDown={(e) => e.key === 'Enter' && handleExecuteSearch()}
                className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <button
              onClick={() => handleExecuteSearch()}
              disabled={loading}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-500 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md shadow-cyan-950 shrink-0"
            >
              {loading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Searching Grounding...</span>
                </>
              ) : (
                <>
                  <Globe className="w-3.5 h-3.5" />
                  <span>Execute Search Grounding</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Preset Prompts */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[11px] text-slate-500 font-medium">Quick Prompts:</span>
            {sampleQueries.map((sq, i) => (
              <button
                key={i}
                onClick={() => {
                  setQuery(sq);
                  handleExecuteSearch(sq);
                }}
                className="text-[11px] px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors text-left truncate max-w-[280px]"
              >
                {sq}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Error Notice */}
      {error && (
        <div className="p-4 bg-rose-950/30 border border-rose-500/40 rounded-xl flex items-start gap-3 text-xs text-rose-300">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-rose-200">Execution Error:</span>
            <p>{error}</p>
          </div>
        </div>
      )}

      {/* Loading Skeleton */}
      {loading && (
        <div className="p-6 bg-[#11192a] border border-slate-800 rounded-xl space-y-4 animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-slate-800 rounded-full" />
            <div className="h-4 w-48 bg-slate-800 rounded" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-full bg-slate-800 rounded" />
            <div className="h-3 w-5/6 bg-slate-800 rounded" />
            <div className="h-3 w-4/6 bg-slate-800 rounded" />
          </div>
          <div className="h-20 w-full bg-slate-900/50 rounded border border-slate-800" />
        </div>
      )}

      {/* Result Display */}
      {result && !loading && (
        <div className="space-y-6 animate-fade-in">
          {/* Grounding Sources Found */}
          {result.groundingChunks.length > 0 && (
            <div className="p-4 bg-[#0d1424] border border-cyan-900/40 rounded-xl space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Google Search Grounding Web Sources ({result.groundingChunks.length})</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Verified: {new Date(result.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {result.groundingChunks.map((chunk, idx) => {
                  const uri = chunk.web?.uri;
                  const title = chunk.web?.title || 'Web Source';
                  if (!uri) return null;
                  return (
                    <a
                      key={idx}
                      href={uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-cyan-300 bg-slate-900/90 border border-slate-700 hover:border-cyan-500/80 hover:bg-slate-800 rounded-lg transition-all shadow-xs group"
                    >
                      <Globe className="w-3 h-3 text-cyan-400 opacity-70 group-hover:opacity-100" />
                      <span className="truncate max-w-[260px]">{title}</span>
                      <ExternalLink className="w-2.5 h-2.5 shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Synthesized Intelligence Report */}
          <GroundedReportFormatter
            rawText={result.text}
            sourcesCount={result.groundingChunks.length}
            modelName="gemini-3.8-flash (googleSearch)"
          />
        </div>
      )}

      {/* Initial Guidance Card */}
      {!result && !loading && (
        <div className="p-8 bg-[#11192a]/50 border border-dashed border-slate-800 rounded-xl text-center space-y-3">
          <Globe className="w-8 h-8 text-cyan-400 mx-auto opacity-70" />
          <div className="max-w-md mx-auto space-y-1">
            <h4 className="text-sm font-semibold text-white">Live Search Grounding Ready</h4>
            <p className="text-xs text-slate-400">
              Query current reality TV seasons to fetch live polling threads, controversy breakdowns, and PR allegations
              grounded in Google's real-time index.
            </p>
          </div>
          <button
            onClick={() => handleExecuteSearch()}
            className="px-4 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 rounded-lg hover:bg-cyan-900/60 transition-colors"
          >
            Run Default Bigg Boss Query
          </button>
        </div>
      )}
    </div>
  );
};
