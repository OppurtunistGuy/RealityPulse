import React, { useState } from 'react';
import {
  FileText,
  Copy,
  Check,
  Search,
  ShieldAlert,
  Flame,
  Vote,
  Sparkles,
  Info,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ArrowRight,
  TrendingUp,
  Cpu,
  Eye,
  ListFilter
} from 'lucide-react';

interface GroundedReportFormatterProps {
  rawText: string;
  modelName?: string;
  sourcesCount?: number;
}

interface SectionItem {
  type: 'bullet-key-value' | 'bullet' | 'paragraph' | 'numbered';
  key?: string;
  value: string;
  number?: string;
}

interface ParsedSection {
  title: string;
  number?: string;
  items: SectionItem[];
}

export const GroundedReportFormatter: React.FC<GroundedReportFormatterProps> = ({
  rawText,
  modelName = 'gemini-3.8-flash (googleSearch)',
  sourcesCount = 0
}) => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'cards' | 'document'>('cards');
  const [highlightPR, setHighlightPR] = useState(false);

  // Copy handler
  const handleCopy = () => {
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper to parse inline markdown (bold **text**, italic *text*, `code`)
  const renderInlineMarkdown = (text: string) => {
    if (!text) return null;

    // Split by markdown delimiters while keeping matched parts
    // Regex matches **bold**, *italic*, `code`
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);

    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const content = part.slice(2, -2);
        // Check if highlighting PR keywords
        const isPRMention =
          highlightPR &&
          /(PR|astroturf|bot|synthetic|fake|manipulat|bubble|coordinated)/i.test(content);
        return (
          <strong
            key={i}
            className={`font-semibold ${
              isPRMention
                ? 'text-amber-300 bg-amber-950/60 px-1 py-0.5 rounded border border-amber-600/40'
                : 'text-white'
            }`}
          >
            {content}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={i} className="text-slate-300 italic">
            {part.slice(1, -1)}
          </em>
        );
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={i}
            className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 font-mono text-[11px] text-cyan-300"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  // Determine badge styling based on item key name
  const getKeyBadgeStyle = (key: string) => {
    const k = key.toLowerCase();
    if (k.includes('danger') || k.includes('eviction') || k.includes('threat') || k.includes('vulnerable')) {
      return {
        bg: 'bg-rose-950/80 border-rose-700/60 text-rose-300',
        dot: 'bg-rose-400',
        icon: AlertTriangle
      };
    }
    if (k.includes('safe') || k.includes('winner') || k.includes('frontrunner')) {
      return {
        bg: 'bg-emerald-950/80 border-emerald-700/60 text-emerald-300',
        dot: 'bg-emerald-400',
        icon: CheckCircle2
      };
    }
    if (k.includes('pr') || k.includes('bubble') || k.includes('alert') || k.includes('inflation')) {
      return {
        bg: 'bg-amber-950/80 border-amber-700/60 text-amber-300',
        dot: 'bg-amber-400',
        icon: ShieldAlert
      };
    }
    if (k.includes('template') || k.includes('bot') || k.includes('coordinated') || k.includes('multiplier')) {
      return {
        bg: 'bg-purple-950/80 border-purple-700/60 text-purple-300',
        dot: 'bg-purple-400',
        icon: Cpu
      };
    }
    if (k.includes('voting') || k.includes('poll') || k.includes('window') || k.includes('stakes')) {
      return {
        bg: 'bg-cyan-950/80 border-cyan-700/60 text-cyan-300',
        dot: 'bg-cyan-400',
        icon: Vote
      };
    }
    if (k.includes('verdict') || k.includes('audience') || k.includes('silent majority')) {
      return {
        bg: 'bg-indigo-950/80 border-indigo-700/60 text-indigo-300',
        dot: 'bg-indigo-400',
        icon: TrendingUp
      };
    }
    return {
      bg: 'bg-slate-800 border-slate-700 text-slate-200',
      dot: 'bg-slate-400',
      icon: Layers
    };
  };

  // Section theme & icon based on section title
  const getSectionTheme = (title: string, index: number) => {
    const t = title.toLowerCase();
    if (t.includes('voting') || t.includes('nomination')) {
      return {
        accentBorder: 'border-l-4 border-l-cyan-500',
        headerBg: 'bg-cyan-950/20',
        icon: Vote,
        iconColor: 'text-cyan-400',
        tag: 'DYNAMICS',
        tagColor: 'text-cyan-300 bg-cyan-950/60 border-cyan-800/60'
      };
    }
    if (t.includes('astroturf') || t.includes('bot') || t.includes('pr') || t.includes('coordination')) {
      return {
        accentBorder: 'border-l-4 border-l-amber-500',
        headerBg: 'bg-amber-950/20',
        icon: ShieldAlert,
        iconColor: 'text-amber-400',
        tag: 'FORENSICS',
        tagColor: 'text-amber-300 bg-amber-950/60 border-amber-800/60'
      };
    }
    if (t.includes('eviction') || t.includes('risk') || t.includes('vulnerability') || t.includes('forecast')) {
      return {
        accentBorder: 'border-l-4 border-l-rose-500',
        headerBg: 'bg-rose-950/20',
        icon: Flame,
        iconColor: 'text-rose-400',
        tag: 'RISK FORECAST',
        tagColor: 'text-rose-300 bg-rose-950/60 border-rose-800/60'
      };
    }
    if (t.includes('summary') || t.includes('overview') || t.includes('executive')) {
      return {
        accentBorder: 'border-l-4 border-l-indigo-500',
        headerBg: 'bg-indigo-950/20',
        icon: Sparkles,
        iconColor: 'text-indigo-400',
        tag: 'EXECUTIVE BRIEF',
        tagColor: 'text-indigo-300 bg-indigo-950/60 border-indigo-800/60'
      };
    }
    return {
      accentBorder: 'border-l-4 border-l-slate-500',
      headerBg: 'bg-slate-900/50',
      icon: FileText,
      iconColor: 'text-slate-300',
      tag: `PILLAR 0${index + 1}`,
      tagColor: 'text-slate-300 bg-slate-800 border-slate-700'
    };
  };

  // Parse raw markdown structure
  const parseDocument = () => {
    const lines = rawText.split('\n');
    let title = '';
    let targetQuery = '';
    let pipelineTag = '';
    const sections: ParsedSection[] = [];
    let currentSection: ParsedSection | null = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      // Extract Document Title (### Executive Reality TV Intelligence Report...)
      if (!title && line.startsWith('#')) {
        title = line.replace(/^#+\s*/, '');
        continue;
      }

      // Extract Target Query
      if (line.startsWith('**Target Query:**') || line.startsWith('Target Query:')) {
        targetQuery = line.replace(/^\*\*Target Query:\*\*\s*|^Target Query:\s*/, '').replace(/^"|"$/g, '');
        continue;
      }

      // Extract Pipeline / Generator info
      if (line.startsWith('*Generated via') && line.endsWith('*')) {
        pipelineTag = line.replace(/^\*|\*$/g, '');
        continue;
      }

      // Detect Section Header (#### 1. Title or ### Title)
      if (line.startsWith('####') || line.startsWith('###')) {
        if (currentSection) {
          sections.push(currentSection);
        }
        const cleaned = line.replace(/^#+\s*/, '');
        // Check if starts with number like "1. Title"
        const numMatch = cleaned.match(/^(\d+[\.\)]?)\s*(.*)/);
        if (numMatch) {
          currentSection = {
            number: numMatch[1],
            title: numMatch[2],
            items: []
          };
        } else {
          currentSection = {
            title: cleaned,
            items: []
          };
        }
        continue;
      }

      // If we don't have a section yet, create an Overview section
      if (!currentSection) {
        currentSection = {
          title: 'Executive Intelligence Overview',
          items: []
        };
      }

      // Detect bullet with bold key: - **Key:** Value
      const bulletKeyValMatch = line.match(/^[-*]\s+\*\*([^*]+):\*\*\s*(.*)/);
      if (bulletKeyValMatch) {
        currentSection.items.push({
          type: 'bullet-key-value',
          key: bulletKeyValMatch[1].trim(),
          value: bulletKeyValMatch[2].trim()
        });
        continue;
      }

      // Detect simple bullet: - Value
      const simpleBulletMatch = line.match(/^[-*]\s+(.*)/);
      if (simpleBulletMatch) {
        currentSection.items.push({
          type: 'bullet',
          value: simpleBulletMatch[1].trim()
        });
        continue;
      }

      // Detect numbered item: 1. Value
      const numberedMatch = line.match(/^(\d+)[\.\)]\s+(.*)/);
      if (numberedMatch) {
        currentSection.items.push({
          type: 'numbered',
          number: numberedMatch[1],
          value: numberedMatch[2].trim()
        });
        continue;
      }

      // Otherwise regular paragraph
      currentSection.items.push({
        type: 'paragraph',
        value: line
      });
    }

    if (currentSection) {
      sections.push(currentSection);
    }

    return {
      title: title || 'Executive Reality TV Intelligence Report',
      targetQuery,
      pipelineTag,
      sections
    };
  };

  const doc = parseDocument();

  return (
    <div className="space-y-4">
      {/* Top Intelligence Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#0e1628] border border-slate-800 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/80 flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white tracking-tight">
                {doc.title}
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60">
                ACTIVE
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-0.5 text-[11px] text-slate-400">
              <span className="font-mono text-cyan-300/90">{modelName}</span>
              {sourcesCount > 0 && (
                <>
                  <span className="text-slate-600">•</span>
                  <span>{sourcesCount} Live Web Sources Grounded</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setHighlightPR(!highlightPR)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-colors ${
              highlightPR
                ? 'bg-amber-950/60 text-amber-300 border-amber-600'
                : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
            title="Highlight PR & Bot patterns in report text"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>PR Glow</span>
          </button>

          <div className="flex rounded-lg border border-slate-700 bg-slate-900 p-0.5">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                viewMode === 'cards'
                  ? 'bg-cyan-600 text-white font-medium shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Cards
            </button>
            <button
              onClick={() => setViewMode('document')}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                viewMode === 'document'
                  ? 'bg-cyan-600 text-white font-medium shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Document
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1.5"
            title="Copy entire report markdown"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Query & Pipeline Meta Ribbon */}
      {(doc.targetQuery || doc.pipelineTag) && (
        <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-900/60 border border-slate-800/80 rounded-lg text-xs">
          {doc.targetQuery && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/90 border border-slate-700/80 text-slate-300">
              <Search className="w-3 h-3 text-cyan-400 shrink-0" />
              <span className="text-slate-400 text-[11px]">Query:</span>
              <span className="font-medium text-white truncate max-w-md">"{doc.targetQuery}"</span>
            </div>
          )}
          {doc.pipelineTag && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-800/50 text-cyan-300 text-[11px] font-mono">
              <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
              <span>{doc.pipelineTag}</span>
            </div>
          )}
        </div>
      )}

      {/* Structured Card Grid View */}
      {viewMode === 'cards' ? (
        <div className="space-y-4">
          {doc.sections.map((section, sIdx) => {
            const theme = getSectionTheme(section.title, sIdx);
            const SectionIcon = theme.icon;

            return (
              <div
                key={sIdx}
                className={`bg-[#11192a] border border-slate-800/90 rounded-xl overflow-hidden shadow-sm transition-all hover:border-slate-700 ${theme.accentBorder}`}
              >
                {/* Section Header */}
                <div className={`p-4 border-b border-slate-800/80 flex items-center justify-between ${theme.headerBg}`}>
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-700/70">
                      <SectionIcon className={`w-4 h-4 ${theme.iconColor}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        {section.number && (
                          <span className="font-mono text-xs font-bold text-slate-400">
                            {section.number}
                          </span>
                        )}
                        <h4 className="text-sm font-bold text-white tracking-tight">
                          {section.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${theme.tagColor}`}>
                    {theme.tag}
                  </span>
                </div>

                {/* Section Body */}
                <div className="p-5 space-y-3.5">
                  {section.items.map((item, itemIdx) => {
                    if (item.type === 'bullet-key-value' && item.key) {
                      const badge = getKeyBadgeStyle(item.key);
                      const BadgeIcon = badge.icon;

                      return (
                        <div
                          key={itemIdx}
                          className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800/70 hover:border-slate-700/70 transition-colors"
                        >
                          <div className="shrink-0 pt-0.5">
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold border shadow-xs ${badge.bg}`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                              <span>{item.key}</span>
                            </span>
                          </div>
                          <div className="text-xs text-slate-200 leading-relaxed font-sans flex-1">
                            {renderInlineMarkdown(item.value)}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === 'bullet') {
                      return (
                        <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed pl-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                          <div className="flex-1">{renderInlineMarkdown(item.value)}</div>
                        </div>
                      );
                    }

                    if (item.type === 'numbered') {
                      return (
                        <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed">
                          <span className="w-5 h-5 rounded bg-slate-800 text-cyan-300 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                            {item.number}
                          </span>
                          <div className="flex-1">{renderInlineMarkdown(item.value)}</div>
                        </div>
                      );
                    }

                    return (
                      <p key={itemIdx} className="text-xs text-slate-300 leading-relaxed">
                        {renderInlineMarkdown(item.value)}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Document Formatted Reader View */
        <div className="p-6 bg-[#11192a] border border-slate-800 rounded-xl space-y-6">
          {doc.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-3 pb-5 border-b border-slate-800/60 last:border-b-0 last:pb-0">
              <h4 className="text-sm font-bold text-cyan-300 tracking-tight flex items-center gap-2">
                {section.number && <span className="font-mono text-slate-400">{section.number}</span>}
                <span>{section.title}</span>
              </h4>
              <ul className="space-y-2.5">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-xs text-slate-200 leading-relaxed flex items-start gap-2">
                    <span className="text-cyan-500 font-bold">•</span>
                    <div className="flex-1">
                      {item.type === 'bullet-key-value' && item.key && (
                        <strong className="text-white font-semibold mr-1.5">
                          {item.key}:
                        </strong>
                      )}
                      {renderInlineMarkdown(item.value)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
