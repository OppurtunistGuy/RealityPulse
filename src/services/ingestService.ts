import { GoogleGenAI } from '@google/genai';
import { dbService, calculateShowTimeline } from './dbService.js';
import { securityManager, TRUSTED_BROADCASTER_DOMAINS } from './securityAndFeedService.js';
import { calculateTOSS, DEFAULT_PLATFORM_WEIGHTS } from '../utils/analyticsEngine.js';
import { Contestant, RiskTier } from '../types.js';

export interface IngestedArticle {
  title: string;
  link: string;
  pubDate: string;
  sourceDomain: string;
  description: string;
}

export async function fetchGoogleNewsRSS(query: string = 'Bigg Boss 20 Hindi Tathas-two'): Promise<IngestedArticle[]> {
  try {
    const encoded = encodeURIComponent(query);
    const url = `https://news.google.com/rss/search?q=${encoded}&hl=en-IN&gl=IN&ceid=IN:en`;
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`RSS fetch returned HTTP ${res.status}`);
      return [];
    }

    const xml = await res.text();
    const articles: IngestedArticle[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match: RegExpExecArray | null;

    while ((match = itemRegex.exec(xml)) !== null && articles.length < 15) {
      const itemContent = match[1];
      const titleMatch = /<title>([\s\S]*?)<\/title>/.exec(itemContent);
      const linkMatch = /<link>([\s\S]*?)<\/link>/.exec(itemContent);
      const pubDateMatch = /<pubDate>([\s\S]*?)<\/pubDate>/.exec(itemContent);
      const descMatch = /<description>([\s\S]*?)<\/description>/.exec(itemContent);

      const title = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1').trim() : '';
      const link = linkMatch ? linkMatch[1].trim() : '';
      const pubDate = pubDateMatch ? pubDateMatch[1].trim() : new Date().toISOString();
      const description = descMatch ? descMatch[1].replace(/<[^>]+>/g, '').trim() : '';

      if (title && link) {
        let domain = 'google.com';
        try {
          domain = new URL(link).hostname.replace(/^www\./, '');
        } catch {
          domain = 'news.google.com';
        }

        articles.push({
          title,
          link,
          pubDate,
          sourceDomain: domain,
          description
        });
      }
    }

    return articles;
  } catch (err) {
    console.warn('Failed to fetch Google News RSS:', err);
    return [];
  }
}

export async function runIngestionPipeline(options?: {
  geminiApiKey?: string;
  geminiModel?: string;
}): Promise<{
  success: boolean;
  articlesFetched: number;
  newFeedItemsAdded: number;
  timeline: ReturnType<typeof calculateShowTimeline>;
  timestamp: string;
  auditBlockIndex: number;
}> {
  const timeline = calculateShowTimeline();
  const timestamp = new Date().toISOString();

  // 1. Fetch real articles from Google News RSS
  const articles = await fetchGoogleNewsRSS();

  // 2. Select top 3 articles to convert into validated feed items
  let newFeedItemsCount = 0;
  for (const art of articles.slice(0, 3)) {
    const isBroadcaster = TRUSTED_BROADCASTER_DOMAINS.some(d => art.sourceDomain.includes(d));
    
    securityManager.addLiveFeedItem({
      category: isBroadcaster ? 'Broadcaster Update' : 'Audience Sentiment Shift',
      title: art.title,
      summary: art.description || `Real-time coverage retrieved from ${art.sourceDomain}`,
      sourceUrl: art.link,
      involvedContestants: []
    });
    newFeedItemsCount++;
  }

  // 3. Score with Gemini if key is provided
  if (options?.geminiApiKey && articles.length > 0) {
    try {
      const ai = new GoogleGenAI({ apiKey: options.geminiApiKey });
      const prompt = `You are the RealityPulse Ingestion Evaluator.
Here are real-time news headlines fetched from Google News RSS for Bigg Boss 20 (Day ${timeline.currentDay}, Week ${timeline.currentWeek}):
${articles.map((a, i) => `${i + 1}. [${a.sourceDomain}] ${a.title}`).join('\n')}

Based ONLY on these real headlines and verified developments, assess which 2-3 contestants are in the spotlight and whether any PR astroturfing flags are present.
Return a valid JSON array:
[
  {
    "contestantName": string,
    "sentimentShift": number,
    "astroturfDetected": boolean,
    "summary": string
  }
]`;

      const response = await ai.models.generateContent({
        model: options.geminiModel || 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const parsed = JSON.parse(response.text || '[]');
      if (Array.isArray(parsed) && parsed.length > 0) {
        for (const item of parsed) {
          if (item.contestantName && item.summary) {
            securityManager.addLiveFeedItem({
              category: 'Audience Sentiment Shift',
              title: `${item.contestantName}: Real-Time Sentiment Shift`,
              summary: item.summary,
              sourceUrl: articles[0]?.link || 'https://news.google.com',
              involvedContestants: [item.contestantName]
            });
            newFeedItemsCount++;
          }
        }
      }
    } catch (err: any) {
      console.warn('Gemini scoring in ingest job encountered an issue:', err.message);
    }
  }

  // 4. Record audit ledger entry
  const block = securityManager.appendAuditBlock(
    'HOURLY_INGESTION',
    `Automated Ingest Run: Fetched ${articles.length} real news articles; Week ${timeline.currentWeek}, Day ${timeline.currentDay}`,
    articles[0]?.link || undefined,
    false
  );

  return {
    success: true,
    articlesFetched: articles.length,
    newFeedItemsAdded: newFeedItemsCount,
    timeline,
    timestamp,
    auditBlockIndex: block.index
  };
}
