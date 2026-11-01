import {
  AstroturfCluster,
  EpisodeNarrative,
  BipartiteNetworkNode,
  BipartiteNetworkLink,
  SourceProvenanceItem
} from '../types';
import { BB20_LOCKED_CONTESTANTS, BB20_LOCKED_EVICTED_TIMELINE } from './bb20ContestantsStatic';

export const INITIAL_CONTESTANTS = BB20_LOCKED_CONTESTANTS;
export const EVICTED_CONTESTANTS_TIMELINE = BB20_LOCKED_EVICTED_TIMELINE;

export const ASTROTURF_CLUSTERS: AstroturfCluster[] = [
  {
    "id": "cluster-1",
    "contestantId": "c2",
    "contestantName": "Kanika Mann",
    "templatePhrase": "Queen Kanika is carrying Bigg Boss 20 on her shoulders! Salman sir please praise her #KanikaMann",
    "variations": [
      "Queen Kanika is carrying Bigg Boss 20 on her shoulders! #KanikaMannForTheWin",
      "Look at how Kanika carries the whole house alone #QueenKanika #BB20",
      "Bigg Boss 20 is only worth watching for Kanika Mann #KanikaRules"
    ],
    "occurrences": 4820,
    "similarityScore": 0.94,
    "accountVelocity": "78 accounts / 90 seconds",
    "primarySource": "X (Twitter)",
    "accountAgeMedianDays": 14,
    "bipartiteRingId": "ring-1",
    "status": "Sanitized & Discounted"
  },
  {
    "id": "cluster-2",
    "contestantId": "c8",
    "contestantName": "Arishfa Khan",
    "templatePhrase": "Stop bullying Arshifa Khan! She is fighting alone against the whole house #StandWithArshifa",
    "variations": [
      "Look at Scout and Gullu ganging up on poor Arshifa, she is so strong #StandWithArshifa",
      "Arshifa cried today because housemates are jealous of her 28M followers #ArshifaArmy",
      "Queen Arshifa fighting the entire house alone with courage #StandWithArshifa #BB20"
    ],
    "occurrences": 5400,
    "similarityScore": 0.96,
    "accountVelocity": "92 accounts / 90 seconds",
    "primarySource": "Instagram",
    "accountAgeMedianDays": 9,
    "bipartiteRingId": "ring-2",
    "status": "Sanitized & Discounted"
  },
  {
    "id": "cluster-3",
    "contestantId": "c5",
    "contestantName": "Qazi Ahmad Tauqeer",
    "templatePhrase": "Remember Fame Gurukul? Qazi Touqeer is the true King of public votes! #QaziTheIcon #BB20",
    "variations": [
      "Qazi Touqeer proved in 2005 that public loves him, BB20 is his season #QaziArmy",
      "Modern influencers cannot stand before the OG Qazi Touqeer #FameGurukulKing"
    ],
    "occurrences": 2600,
    "similarityScore": 0.91,
    "accountVelocity": "34 accounts / 90 seconds",
    "primarySource": "X (Twitter)",
    "accountAgeMedianDays": 22,
    "bipartiteRingId": "ring-3",
    "status": "Sanitized & Discounted"
  }
];

export const BIPARTITE_NODES: BipartiteNetworkNode[] = [
  {
    "id": "ring-1",
    "label": "Mumbai-PR-Media-Matrix",
    "type": "pr_agency",
    "volume": 180000,
    "riskWeight": 0.89
  },
  {
    "id": "ring-2",
    "label": "Fandom-Syndicate-ViralGroup",
    "type": "pr_agency",
    "volume": 220000,
    "riskWeight": 0.94
  },
  {
    "id": "ring-3",
    "label": "Vintage-SMS-NostalgiaCluster",
    "type": "account_cluster",
    "volume": 65000,
    "riskWeight": 0.72
  },
  {
    "id": "ring-4",
    "label": "Regional-Digital-PromotionHub",
    "type": "pr_agency",
    "volume": 55000,
    "riskWeight": 0.65
  },
  {
    "id": "c1",
    "label": "Tanmay Singh (Scout)",
    "type": "contestant",
    "volume": 220000,
    "riskWeight": 0.11
  },
  {
    "id": "c2",
    "label": "Kanika Mann",
    "type": "contestant",
    "volume": 245000,
    "riskWeight": 0.61
  },
  {
    "id": "c8",
    "label": "Arishfa Khan",
    "type": "contestant",
    "volume": 220000,
    "riskWeight": 0.72
  },
  {
    "id": "c7",
    "label": "Kushal Tanwar (Gullu)",
    "type": "contestant",
    "volume": 79000,
    "riskWeight": 0.1
  },
  {
    "id": "c3",
    "label": "Aamrapali Dubey",
    "type": "contestant",
    "volume": 76000,
    "riskWeight": 0.08
  },
  {
    "id": "c11",
    "label": "MC Mary Kom",
    "type": "contestant",
    "volume": 180000,
    "riskWeight": 0.06
  },
  {
    "id": "c12",
    "label": "Mahhi Vij",
    "type": "contestant",
    "volume": 92000,
    "riskWeight": 0.14
  },
  {
    "id": "c5",
    "label": "Qazi Ahmad Tauqeer",
    "type": "contestant",
    "volume": 98000,
    "riskWeight": 0.46
  },
  {
    "id": "c9",
    "label": "Love Gill (Lovepreet Kaur Gill)",
    "type": "contestant",
    "volume": 110000,
    "riskWeight": 0.24
  }
];

export const BIPARTITE_LINKS: BipartiteNetworkLink[] = [
  {
    "source": "ring-1",
    "target": "c2",
    "weight": 4820,
    "isAstroturf": true
  },
  {
    "source": "ring-2",
    "target": "c8",
    "weight": 5400,
    "isAstroturf": true
  },
  {
    "source": "ring-3",
    "target": "c5",
    "weight": 2600,
    "isAstroturf": true
  },
  {
    "source": "ring-4",
    "target": "c9",
    "weight": 1400,
    "isAstroturf": true
  },
  {
    "source": "c1",
    "target": "c7",
    "weight": 8900,
    "isAstroturf": false
  },
  {
    "source": "c3",
    "target": "c11",
    "weight": 9200,
    "isAstroturf": false
  }
];

export const EPISODE_NARRATIVES: EpisodeNarrative[] = [
  {
    "episodeNumber": 26,
    "title": "The Tathas-two Shield Standoff & The Luggage Room Stash",
    "airDate": "Day 26 · October 26, 2026",
    "hostFocus": "Salman Khan reprimands theatrical crying and rewards task composure in the immunity arena.",
    "broadcastThemes": [
      "Tathas-two Immunity Shield",
      "Luggage Room Ration Raid",
      "Vintage vs Digital Ideology Clash"
    ],
    "contestantEdits": [
      {
        "contestantId": "c1",
        "contestantName": "Tanmay Singh (Scout)",
        "editType": "Hero Edit",
        "airtimeMinutes": 28,
        "intendedPerception": "Calm, unflinching task titan standing strong against targeted provocations.",
        "organicPublicVerdict": "Universal casual viewer admiration on YouTube; 92% approval on poll reviews.",
        "receptionDelta": 34
      },
      {
        "contestantId": "c8",
        "contestantName": "Arishfa Khan",
        "editType": "Villain Edit",
        "airtimeMinutes": 26,
        "intendedPerception": "Volatile, entitled housemate instigating unnecessary kitchen drama and weaponizing tears.",
        "organicPublicVerdict": "Severe backlash across YouTube comments and family audiences; branded as theatrical sympathy seeking.",
        "receptionDelta": -42
      },
      {
        "contestantId": "c7",
        "contestantName": "Kushal Tanwar (Gullu)",
        "editType": "Hero Edit",
        "airtimeMinutes": 19,
        "intendedPerception": "Sharp, comedic voice of reason exposing fake behavior with effortless humor.",
        "organicPublicVerdict": "High organic acclaim; widely celebrated across Instagram Reels for disarming Arshifa’s tantrums.",
        "receptionDelta": 28
      },
      {
        "contestantId": "c11",
        "contestantName": "MC Mary Kom",
        "editType": "Hero Edit",
        "airtimeMinutes": 21,
        "intendedPerception": "Legendary discipline and fair play leader commanding absolute respect.",
        "organicPublicVerdict": "Revered nationwide; 97% positive organic sentiment across all platforms.",
        "receptionDelta": 38
      }
    ],
    "conflictPairs": [
      {
        "id": "cp-1",
        "contestantA": "Tanmay Singh (Scout)",
        "contestantB": "Qazi Ahmad Tauqeer",
        "incident": "Tathas-two Immunity Shield Dispute: Qazi tried to provoke Scout with personal legacy sarcasm; Scout remained stoic and protected the shield.",
        "producerFraming": "New-age gaming champion vs nostalgic reality icon.",
        "organicAudienceWinner": "Tanmay Singh (Scout) (91% approval)"
      },
      {
        "id": "cp-2",
        "contestantA": "Kushal Tanwar (Gullu)",
        "contestantB": "Arishfa Khan",
        "incident": "Kitchen Chore Melodrama: Gullu gave live cricket commentary during Arshifa’s crying fit.",
        "producerFraming": "Comedic realism vs weaponized tears.",
        "organicAudienceWinner": "Kushal Tanwar (Gullu) (94% approval)"
      }
    ],
    "organicDriftSummary": "Scout, Gullu, and Mary Kom generated massive authentic goodwill, while Arshifa’s crying routine met severe audience rejection."
  }
];

export const SOURCE_PROVENANCE_CATALOG: SourceProvenanceItem[] = [
  {
    "platform": "YouTube",
    "icon": "Youtube",
    "description": "Long-form commentary and official broadcast clips representing the mass casual silent majority of Bigg Boss 20 viewers.",
    "verifiedFeedsAndHandles": [
      {
        "name": "Colors TV Official Channel",
        "identifier": "@ColorsTV (65M subscribers)",
        "role": "Official Episode Clips & Uncut Moments",
        "estimatedDailyVolume": "140,000 comments/day"
      },
      {
        "name": "JioHotstar BB20 Live Stream",
        "identifier": "@JioHotstar (24/7 Live Stream Chat)",
        "role": "Live viewer reactions during key tasks",
        "estimatedDailyVolume": "260,000 live chat messages"
      },
      {
        "name": "FIFAFOOZ Official",
        "identifier": "@FIFAFOOZ (1.2M subscribers)",
        "role": "Premier independent reality review & daily 50k+ sample polls",
        "estimatedDailyVolume": "22,000 poll votes & comments"
      }
    ],
    "samplingMethodology": "Stratified sampling of top 100 comments across official clips every 3 hours; discounted via MinHash duplicate detection.",
    "prRiskProfile": "Low PR Risk (High Organic Ground Truth)"
  },
  {
    "platform": "X (Twitter)",
    "icon": "Twitter",
    "description": "High-velocity social battlefield with intense paid PR activity, fan club wars, and coordinated hashtag swarms.",
    "verifiedFeedsAndHandles": [
      {
        "name": "Official Show Hashtags",
        "identifier": "#BiggBoss20, #BB20, #TathasTwo",
        "role": "Primary aggregate hashtag stream",
        "estimatedDailyVolume": "480,000 tweets/day"
      },
      {
        "name": "The Khabri Insider",
        "identifier": "@TheKhabriTweets (Verified)",
        "role": "Independent voting consensus polls & nomination tracking",
        "estimatedDailyVolume": "70,000 poll votes"
      },
      {
        "name": "Bigg Boss Tak",
        "identifier": "@BiggBoss_Tak (Verified)",
        "role": "Daily episode highlights & live tweet coverage",
        "estimatedDailyVolume": "50,000 interactions"
      }
    ],
    "samplingMethodology": "Streaming API capture filtered for account age (>30 days), non-default avatars, and lexical uniqueness.",
    "prRiskProfile": "Severe PR Infiltration & Bot Swarms"
  },
  {
    "platform": "Instagram",
    "icon": "Instagram",
    "description": "Lifestyle fandoms, verified influencer circles, and short-form video reels shaping youth perception.",
    "verifiedFeedsAndHandles": [
      {
        "name": "JioHotstar Reality Hub",
        "identifier": "@jiohotstarreality (Verified)",
        "role": "Official 24/7 live feed snippets & nomination reels",
        "estimatedDailyVolume": "95,000 comments/day"
      },
      {
        "name": "Colors TV Official Instagram",
        "identifier": "@colorstv (24M followers)",
        "role": "Broadcast reels & task promos",
        "estimatedDailyVolume": "85,000 comments/day"
      }
    ],
    "samplingMethodology": "API sampling of top broadcast reels and contestant comments, scrubbed for copy-paste phrases.",
    "prRiskProfile": "High Astroturfing Risk"
  },
  {
    "platform": "Threads",
    "icon": "MessageSquare",
    "description": "Meta text-first conversations exhibiting organic long-form discourse and lower bot density.",
    "verifiedFeedsAndHandles": [
      {
        "name": "Bigg Boss 20 Topic Thread",
        "identifier": "threads.net/tag/BiggBoss20",
        "role": "Real-time viewer discussions & hot takes",
        "estimatedDailyVolume": "32,000 posts/day"
      }
    ],
    "samplingMethodology": "Sampling of public threads with natural sentiment distribution.",
    "prRiskProfile": "Low-to-Moderate PR Risk"
  },
  {
    "platform": "Google News & Media",
    "icon": "Globe",
    "description": "Established national entertainment journalism providing factual corroboration.",
    "verifiedFeedsAndHandles": [
      {
        "name": "The Indian Express (BB20 Live)",
        "identifier": "indianexpress.com/section/entertainment",
        "role": "Daily live blog, episode recaps, and task analysis",
        "estimatedDailyVolume": "6 in-depth articles/day"
      },
      {
        "name": "Times of India (TOI TV)",
        "identifier": "timesofindia.indiatimes.com/tv/news/hindi",
        "role": "Nomination lists, voting trends, and exit leaks",
        "estimatedDailyVolume": "8 articles/day"
      },
      {
        "name": "Hindustan Times Entertainment",
        "identifier": "hindustantimes.com/entertainment",
        "role": "Audience review roundups and weekend critiques",
        "estimatedDailyVolume": "6 articles/day"
      }
    ],
    "samplingMethodology": "Automated newsfeed aggregation cross-referencing author names, publication times, and primary claims.",
    "prRiskProfile": "Editorial Baseline"
  }
];
