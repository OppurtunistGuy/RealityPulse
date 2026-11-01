import crypto from 'crypto';

export interface AuditBlock {
  index: number;
  timestamp: string;
  previousHash: string;
  hash: string;
  eventType: 'GENESIS' | 'HOURLY_INGESTION' | 'EVICTION_STATUS_VERIFIED' | 'TAMPER_ALERT';
  summary: string;
  verifiedSourceDomain?: string;
  isBroadcasterAuthorized: boolean;
}

export interface LiveFeedItem {
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

export const TRUSTED_BROADCASTER_DOMAINS = [
  'jiostar.com',
  'jiohotstar.com',
  'colorstv.com'
];

export const TRUSTED_NEWS_DOMAINS = [
  'indianexpress.com',
  'indiatoday.in',
  'hindustantimes.com',
  'timesofindia.indiatimes.com',
  'pinkvilla.com'
];

function calculateBlockHash(
  index: number,
  timestamp: string,
  previousHash: string,
  eventType: string,
  summary: string,
  isBroadcasterAuthorized: boolean
): string {
  const content = `${index}:${timestamp}:${previousHash}:${eventType}:${summary}:${isBroadcasterAuthorized}`;
  return crypto.createHash('sha256').update(content).digest('hex');
}

class SecurityAndFeedManager {
  private auditChain: AuditBlock[] = [];
  private liveFeed: LiveFeedItem[] = [];
  private ipRateLimits = new Map<string, { count: number; resetTime: number }>();

  constructor() {
    this.initGenesisBlock();
    this.initSeedLiveFeed();
  }

  private initGenesisBlock() {
    const timestamp = '2026-11-01T00:00:00.000Z';
    const genesisHash = calculateBlockHash(
      0,
      timestamp,
      '0000000000000000000000000000000000000000000000000000000000000000',
      'GENESIS',
      'Bigg Boss 20 (Tathas-two) Cryptographic Audit Ledger Initialized',
      true
    );

    this.auditChain = [
      {
        index: 0,
        timestamp,
        previousHash: '0000000000000000000000000000000000000000000000000000000000000000',
        hash: genesisHash,
        eventType: 'GENESIS',
        summary: 'Bigg Boss 20 (Tathas-two) Cryptographic Audit Ledger Initialized',
        verifiedSourceDomain: 'colorstv.com',
        isBroadcasterAuthorized: true
      }
    ];
  }

  private initSeedLiveFeed() {
    this.liveFeed = [
      {
        id: 'feed-1',
        timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
        category: 'Broadcaster Update',
        title: 'Tathas-two Immunity Shield Task Results Broadcast',
        summary: 'Colors TV official episode broadcast confirms Team Scout successfully held the Tathas-two immunity shield against repeated attacks.',
        sourceUrl: 'https://www.colorstv.com/bigg-boss-season-20',
        sourceDomain: 'colorstv.com',
        verifiedByBroadcaster: true,
        involvedContestants: ['Tanmay Singh (Scout)', 'Qazi Ahmad Tauqeer', 'Arishfa Khan']
      },
      {
        id: 'feed-2',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        category: 'Nomination Alert',
        title: 'Week 8 Public Voting Window Active on JioHotstar (Day 52)',
        summary: 'Official voting lines opened on JioHotstar app. Nominated housemates facing public ballot confirmed: Scout, Arshifa, Gullu, Love Gill, Harsh Machare, and Uditi Singh.',
        sourceUrl: 'https://www.jiohotstar.com/reality',
        sourceDomain: 'jiohotstar.com',
        verifiedByBroadcaster: true,
        involvedContestants: ['Tanmay Singh (Scout)', 'Arshifa Khan', 'Kushal Tanwar (Gullu)', 'Love Gill', 'Harsh Machare (Yung DSA)', 'Uditi Singh']
      },
      {
        id: 'feed-3',
        timestamp: new Date().toISOString(),
        category: 'Audience Sentiment Shift',
        title: 'Forensic Detection: 4,800 Scripted Bot Comments Discounted from TOSS',
        summary: 'PR astroturfing rings targeting Arishfa and Love Gill filtered by Levenshtein clustering engine; organic approval for Scout and Kanika rises to 87%.',
        sourceUrl: 'https://indianexpress.com/section/entertainment/',
        sourceDomain: 'indianexpress.com',
        verifiedByBroadcaster: false,
        involvedContestants: ['Tanmay Singh (Scout)', 'Kanika Mann', 'Arishfa Khan', 'Love Gill']
      }
    ];
  }

  public getAuditChain(): AuditBlock[] {
    return [...this.auditChain];
  }

  public verifyChainIntegrity(): { isValid: boolean; corruptedBlockIndex?: number; message: string } {
    for (let i = 0; i < this.auditChain.length; i++) {
      const current = this.auditChain[i];

      if (i > 0) {
        const prev = this.auditChain[i - 1];
        if (current.previousHash !== prev.hash) {
          return {
            isValid: false,
            corruptedBlockIndex: i,
            message: `Hash link broken between block ${i - 1} and ${i}`
          };
        }
      }

      const expectedHash = calculateBlockHash(
        current.index,
        current.timestamp,
        current.previousHash,
        current.eventType,
        current.summary,
        current.isBroadcasterAuthorized
      );

      if (current.hash !== expectedHash) {
        return {
          isValid: false,
          corruptedBlockIndex: i,
          message: `Block ${i} hash altered or corrupted`
        };
      }
    }

    return {
      isValid: true,
      message: `Audit chain verified: all ${this.auditChain.length} blocks mathematically intact.`
    };
  }

  public appendAuditBlock(
    eventType: AuditBlock['eventType'],
    summary: string,
    sourceUrl?: string,
    isBroadcasterAuthorized: boolean = false
  ): AuditBlock {
    const lastBlock = this.auditChain[this.auditChain.length - 1];
    const index = lastBlock.index + 1;
    const timestamp = new Date().toISOString();
    const previousHash = lastBlock.hash;

    let verifiedDomain: string | undefined = undefined;
    if (sourceUrl) {
      try {
        verifiedDomain = new URL(sourceUrl).hostname.replace(/^www\./, '');
      } catch {
        verifiedDomain = undefined;
      }
    }

    const hash = calculateBlockHash(
      index,
      timestamp,
      previousHash,
      eventType,
      summary,
      isBroadcasterAuthorized
    );

    const newBlock: AuditBlock = {
      index,
      timestamp,
      previousHash,
      hash,
      eventType,
      summary,
      verifiedSourceDomain: verifiedDomain,
      isBroadcasterAuthorized
    };

    this.auditChain.push(newBlock);
    return newBlock;
  }

  public validateBroadcasterAuthority(url: string): boolean {
    try {
      const domain = new URL(url).hostname.replace(/^www\./, '');
      return TRUSTED_BROADCASTER_DOMAINS.some(trusted => domain === trusted || domain.endsWith('.' + trusted));
    } catch {
      return false;
    }
  }

  public getLiveFeed(): LiveFeedItem[] {
    return [...this.liveFeed];
  }

  public addLiveFeedItem(item: Omit<LiveFeedItem, 'id' | 'timestamp' | 'sourceDomain' | 'verifiedByBroadcaster'>): LiveFeedItem {
    const isAuthorized = this.validateBroadcasterAuthority(item.sourceUrl);
    const domain = (() => {
      try {
        return new URL(item.sourceUrl).hostname.replace(/^www\./, '');
      } catch {
        return 'unknown';
      }
    })();

    const newItem: LiveFeedItem = {
      ...item,
      id: `feed-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      timestamp: new Date().toISOString(),
      sourceDomain: domain,
      verifiedByBroadcaster: isAuthorized
    };

    this.liveFeed.unshift(newItem);
    if (this.liveFeed.length > 25) {
      this.liveFeed.pop();
    }

    // Append cryptographic audit block
    this.appendAuditBlock(
      isAuthorized ? 'EVICTION_STATUS_VERIFIED' : 'HOURLY_INGESTION',
      `Live feed update: "${newItem.title}" (${newItem.category})`,
      item.sourceUrl,
      isAuthorized
    );

    return newItem;
  }

  public checkRateLimit(ip: string, limit: number = 60, windowMs: number = 60000): { allowed: boolean; remaining: number } {
    const now = Date.now();
    const record = this.ipRateLimits.get(ip);

    if (!record || now > record.resetTime) {
      this.ipRateLimits.set(ip, { count: 1, resetTime: now + windowMs });
      return { allowed: true, remaining: limit - 1 };
    }

    if (record.count >= limit) {
      return { allowed: false, remaining: 0 };
    }

    record.count++;
    return { allowed: true, remaining: limit - record.count };
  }
}

export const securityManager = new SecurityAndFeedManager();
