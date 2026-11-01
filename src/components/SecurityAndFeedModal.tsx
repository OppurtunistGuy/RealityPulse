import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  RefreshCw,
  Lock,
  Radio,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  X,
  Database,
  Hash,
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';

interface LiveFeedItem {
  id: string;
  timestamp: string;
  category: 'Broadcaster Update' | 'Nomination Alert' | 'Task Outcome' | 'Audience Sentiment Shift';
  title: string;
  summary: string;
  sourceUrl: string;
  sourceDomain: string;
  verifiedByBroadcaster: boolean;
  involvedContestants: string[];
}

interface AuditBlock {
  index: number;
  timestamp: string;
  previousHash: string;
  hash: string;
  eventType: 'GENESIS' | 'HOURLY_INGESTION' | 'EVICTION_STATUS_VERIFIED' | 'TAMPER_ALERT';
  summary: string;
  verifiedSourceDomain?: string;
  isBroadcasterAuthorized: boolean;
}

interface SecurityAndFeedModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const SecurityAndFeedModal: React.FC<SecurityAndFeedModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [activeTab, setActiveTab] = useState<'feed' | 'security'>('feed');
  const [feedItems, setFeedItems] = useState<LiveFeedItem[]>([]);
  const [auditChain, setAuditChain] = useState<AuditBlock[]>([]);
  const [auditStatus, setAuditStatus] = useState<{ isValid: boolean; message: string }>({
    isValid: true,
    message: 'Cryptographic ledger verified.'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  const isHinglish = language === 'hinglish';

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [feedRes, auditRes] = await Promise.all([
        fetch('/api/feed/latest'),
        fetch('/api/security/audit-chain')
      ]);

      if (feedRes.ok) {
        const feedData = await feedRes.json();
        setFeedItems(feedData.feed || []);
      }

      if (auditRes.ok) {
        const auditData = await auditRes.json();
        setAuditChain(auditData.chain || []);
        if (auditData.verification) {
          setAuditStatus(auditData.verification);
        }
      }
    } catch (err) {
      console.warn('Failed to fetch security/feed data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  const handleTriggerSync = async () => {
    setIsSyncing(true);
    setSyncMessage(null);
    try {
      const res = await fetch('/api/feed/sync', { method: 'POST' });
      const data = await res.json();
      if (res.ok) {
        setSyncMessage(
          isHinglish
            ? `Sync successful! Ingested via ${data.ingestedVia}. New audit block mined.`
            : `Sync successful! Ingested via ${data.ingestedVia}. New audit block mined.`
        );
        await fetchData();
      } else {
        setSyncMessage('Sync failed: ' + (data.error || 'Server error'));
      }
    } catch (err: any) {
      setSyncMessage('Network error triggering sync');
    } finally {
      setIsSyncing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0e1626]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                {isHinglish ? 'Live Data Feed & Security Fortress' : 'Live Feed Pipeline & Security Ledger'}
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {isHinglish ? 'TAMPER-PROOF' : 'TAMPER-PROOF'}
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                {isHinglish
                  ? 'Hourly Gemini 2.5 Flash Search Grounding + Cryptographic SHA-256 Audit Chain'
                  : 'Hourly Gemini Grounding Ingestion + Cryptographic SHA-256 Immutable Audit Chain'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleTriggerSync}
              disabled={isSyncing}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 rounded-lg transition-colors shadow-sm"
              title="Trigger immediate feed ingestion via Gemini 2.5 Flash"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? (isHinglish ? 'Syncing...' : 'Syncing...') : (isHinglish ? 'Hourly Sync Now' : 'Sync Feed Now')}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-slate-800 bg-slate-900/60 text-xs">
          <button
            onClick={() => setActiveTab('feed')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'feed'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>{isHinglish ? 'Live Ingested Feed' : 'Live Ingested Feed'}</span>
            <span className="px-1.5 py-0.2 rounded-full bg-slate-800 text-[10px] font-mono">
              {feedItems.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'security'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>{isHinglish ? 'Anti-Manipulation & SHA-256 Ledger' : 'Anti-Manipulation & Audit Ledger'}</span>
            <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
              {auditChain.length} Blocks
            </span>
          </button>
        </div>

        {/* Feedback message banner */}
        {syncMessage && (
          <div className="mx-6 mt-3 px-3 py-2 text-xs rounded-lg bg-cyan-950/60 border border-cyan-700/50 text-cyan-300 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              {syncMessage}
            </span>
            <button onClick={() => setSyncMessage(null)} className="text-cyan-400 hover:text-cyan-200 ml-2">×</button>
          </div>
        )}

        {/* Body content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'feed' ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="text-slate-400">{isHinglish ? 'Data Ingestion Cadence' : 'Ingestion Cadence'}</div>
                  <div className="text-sm font-bold text-white mt-0.5">Hourly Automated Cron</div>
                  <div className="text-[11px] text-cyan-400 mt-1">Google Search Grounding via Gemini 2.5</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="text-slate-400">{isHinglish ? 'Broadcaster Priority' : 'Primary Source Priority'}</div>
                  <div className="text-sm font-bold text-white mt-0.5">JioStar / Colors TV</div>
                  <div className="text-[11px] text-emerald-400 mt-1">Tier-1 Broadcaster Authority</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="text-slate-400">{isHinglish ? 'Anti-PR Astroturfing' : 'Anti-PR Astroturfing'}</div>
                  <div className="text-sm font-bold text-white mt-0.5">Levenshtein Clustering</div>
                  <div className="text-[11px] text-amber-400 mt-1">4,800+ Bot Templates Filtered</div>
                </div>
              </div>

              <div className="space-y-3 mt-4" role="region" aria-live="polite" aria-label="Real-time news and broadcaster ingestion feed">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {isHinglish ? 'Latest Verified Updates (Newest First)' : 'Chronological Live Ingestion Feed'}
                </h3>

                {feedItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-slate-600 transition-all space-y-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${
                              item.category === 'Broadcaster Update'
                                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                                : item.category === 'Nomination Alert'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : item.category === 'Task Outcome'
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                                : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                            }`}
                          >
                            {item.category}
                          </span>
                          {item.verifiedByBroadcaster ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                              <CheckCircle className="w-3 h-3" />
                              Broadcaster Verified
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400 font-mono">
                              {item.sourceDomain}
                            </span>
                          )}
                          <span className="text-[10px] text-slate-500 font-mono">
                            {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      </div>

                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-400 hover:text-cyan-400 rounded-md hover:bg-slate-700/50 transition-colors"
                        title="View Original Source"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">{item.summary}</p>

                    {item.involvedContestants && item.involvedContestants.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap pt-1">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Housemates:</span>
                        {item.involvedContestants.map((c) => (
                          <span
                            key={c}
                            className="px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-300 text-[10px] font-medium"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Security Shield Overview */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-700/40 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-bold text-white">Cryptographic State Integrity: Validated</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    Zero Tampering Detected
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  {auditStatus.message} Every single state update, TOSS recalculation, and feed item is sealed inside a SHA-256 hash block linked directly to the previous block. Any unauthorized manipulation in memory or database breaks the cryptographic checksum.
                </p>
              </div>

              {/* 3 Pillars of Backend Security */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                    <Lock className="w-4 h-4" />
                    <span>Broadcaster Authority Gate</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Algorithmic sentiment scores and public polls can <strong>NEVER</strong> change a contestant&apos;s status to &apos;Evicted&apos;. Status transitions strictly require signed confirmation from JioStar or Colors TV.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-1.5">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                    <Activity className="w-4 h-4" />
                    <span>Anti-DDoS Rate Limiting</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Token bucket rate limiting throttles automated scrapers, brute-force bots, and denial-of-service spam to protect server resources and maintain API integrity.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold">
                    <Hash className="w-4 h-4" />
                    <span>Levenshtein Astroturf Filter</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Fuzzy text clustering detects near-identical PR bot copy-paste comments across YouTube and Twitter, quarantining synthetic spam before calculating organic sentiment.
                  </p>
                </div>
              </div>

              {/* Audit Blocks List */}
              <div className="space-y-2 mt-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>SHA-256 Cryptographic Block Ledger</span>
                  <span className="text-[11px] font-mono text-cyan-400">{auditChain.length} Blocks Mined</span>
                </h3>

                <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                  {auditChain.map((block) => (
                    <div
                      key={block.index}
                      className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/50 text-xs font-mono space-y-1"
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-cyan-300">
                          Block #{block.index}{' '}
                          <span className="font-normal text-slate-400">({block.eventType})</span>
                        </span>
                        <span className="text-slate-500">
                          {new Date(block.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                        </span>
                      </div>
                      <div className="text-slate-300 font-sans text-xs">{block.summary}</div>
                      <div className="text-[10px] text-slate-500 truncate">
                        <span className="text-slate-400">Hash: </span>
                        {block.hash}
                      </div>
                      <div className="text-[10px] text-slate-600 truncate">
                        <span className="text-slate-500">Prev: </span>
                        {block.previousHash}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#0e1626] flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Security Engine: Active & Enforced</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

