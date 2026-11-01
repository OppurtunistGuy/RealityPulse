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
    "volume": 240000,
    "riskWeight": 0.10
  },
  {
    "id": "c2",
    "label": "Aamrapali Dubey",
    "type": "contestant",
    "volume": 120000,
    "riskWeight": 0.08
  },
  {
    "id": "c3",
    "label": "Kanika Mann",
    "type": "contestant",
    "volume": 160000,
    "riskWeight": 0.15
  },
  {
    "id": "c4",
    "label": "Mahhi Vij",
    "type": "contestant",
    "volume": 110000,
    "riskWeight": 0.14
  },
  {
    "id": "c7",
    "label": "Qazi Ahmad Tauqeer",
    "type": "contestant",
    "volume": 85000,
    "riskWeight": 0.28
  },
  {
    "id": "c8",
    "label": "Arshifa Khan",
    "type": "contestant",
    "volume": 210000,
    "riskWeight": 0.33
  },
  {
    "id": "c9",
    "label": "Kushal Tanwar (Gullu)",
    "type": "contestant",
    "volume": 115000,
    "riskWeight": 0.24
  },
  {
    "id": "c10",
    "label": "Love Gill",
    "type": "contestant",
    "volume": 190000,
    "riskWeight": 0.45
  }
];

export const BIPARTITE_LINKS: BipartiteNetworkLink[] = [
  {
    "source": "ring-1",
    "target": "c3",
    "weight": 2400,
    "isAstroturf": true
  },
  {
    "source": "ring-2",
    "target": "c8",
    "weight": 4200,
    "isAstroturf": true
  },
  {
    "source": "ring-3",
    "target": "c7",
    "weight": 2100,
    "isAstroturf": true
  },
  {
    "source": "ring-4",
    "target": "c10",
    "weight": 3800,
    "isAstroturf": true
  },
  {
    "source": "c1",
    "target": "c9",
    "weight": 8900,
    "isAstroturf": false
  },
  {
    "source": "c2",
    "target": "c4",
    "weight": 7600,
    "isAstroturf": false
  }
];

export const EPISODE_NARRATIVES: EpisodeNarrative[] = [
  {
    "episodeNumber": 57,
    "title": "Weekend Ka Vaar: Week 9 Nominations & The Asli Janta Verdict",
    "airDate": "Day 57 · November 1, 2026",
    "hostFocus": "Salman Khan grills the house on manufactured PR bubbles and reviews the high-stakes Week 9 nominations.",
    "broadcastThemes": [
      "Week 9 Nomination Shockwaves",
      "PR Echo Chamber Reality Check",
      "Captain Aamrapali's Immunity Privilege"
    ],
    "contestantEdits": [
      {
        "contestantId": "c1",
        "contestantName": "Tanmay Singh (Scout)",
        "editType": "Hero Edit",
        "airtimeMinutes": 32,
        "intendedPerception": "Unshakeable organic titan carrying the calm maturity of an athlete against mass nomination targeting.",
        "organicPublicVerdict": "Universal support across YouTube polls and esports grassroots; 94% approval rating.",
        "receptionDelta": 36
      },
      {
        "contestantId": "c8",
        "contestantName": "Arshifa Khan",
        "editType": "Villain Edit",
        "airtimeMinutes": 24,
        "intendedPerception": "Vocal instigator sparking friction over ration distribution and alliance shifts.",
        "organicPublicVerdict": "Audience fatigue over repetitive kitchen disputes; high vulnerability on voting polls.",
        "receptionDelta": -38
      },
      {
        "contestantId": "c9",
        "contestantName": "Kushal Tanwar (Gullu)",
        "editType": "Hero Edit",
        "airtimeMinutes": 22,
        "intendedPerception": "Witty street-smart fighter who stands his ground without scripted PR diplomacy.",
        "organicPublicVerdict": "High regional engagement and strong organic retention on Instagram Reels and YouTube.",
        "receptionDelta": 26
      },
      {
        "contestantId": "c10",
        "contestantName": "Love Gill",
        "editType": "Ghost Edit",
        "airtimeMinutes": 16,
        "intendedPerception": "Loud Twitter trending favorite struggling to convert online buzz into on-screen narrative impact.",
        "organicPublicVerdict": "Disconnection between high hashtag numbers and low casual viewer engagement.",
        "receptionDelta": -22
      }
    ],
    "conflictPairs": [
      {
        "id": "cp-57-1",
        "contestantA": "Tanmay Singh (Scout)",
        "contestantB": "Love Gill",
        "incident": "Nomination Face-Off: Love challenged Scout on being too silent in house arguments; Scout pointed to task execution and team loyalty.",
        "producerFraming": "Aggressive vocal strategy vs disciplined composure.",
        "organicAudienceWinner": "Tanmay Singh (Scout) (89% approval)"
      },
      {
        "id": "cp-57-2",
        "contestantA": "Kushal Tanwar (Gullu)",
        "contestantB": "Arshifa Khan",
        "incident": "Ration Allotment Dispute: Gullu used satirical humor to defuse Arshifa's claim of unfair house management.",
        "producerFraming": "Relatable humor vs high-decibel confrontation.",
        "organicAudienceWinner": "Kushal Tanwar (Gullu) (92% approval)"
      }
    ],
    "organicDriftSummary": "Scout and Gullu maintain massive organic grounding on Day 57, while Arshifa and Love Gill experience audience skepticism over PR amplification."
  },
  {
    "episodeNumber": 49,
    "title": "Weekend Ka Vaar: MC Mary Kom's Farewell & The Tathas-two Crucible",
    "airDate": "Day 49 · October 24, 2026",
    "hostFocus": "Salman Khan salutes sports legend MC Mary Kom in an emotional farewell after 7 weeks in the house.",
    "broadcastThemes": [
      "Mary Kom 7-Week Journey Retrospective",
      "Task Composure under Pressure",
      "Mid-Season Shakeup"
    ],
    "contestantEdits": [
      {
        "contestantId": "c5",
        "contestantName": "MC Mary Kom",
        "editType": "Hero Edit",
        "airtimeMinutes": 35,
        "intendedPerception": "Dignified champion leaving with head held high, celebrated by housemates and viewers alike.",
        "organicPublicVerdict": "Overwhelming national affection and respect; 97% positive organic sentiment.",
        "receptionDelta": 44
      },
      {
        "contestantId": "c2",
        "contestantName": "Aamrapali Dubey",
        "editType": "Hero Edit",
        "airtimeMinutes": 20,
        "intendedPerception": "Empathetic house elder showing authentic grief and stepping into house leadership.",
        "organicPublicVerdict": "Grassroots family audiences resonated deeply with her emotional grounding.",
        "receptionDelta": 28
      }
    ],
    "conflictPairs": [
      {
        "id": "cp-49-1",
        "contestantA": "MC Mary Kom",
        "contestantB": "Aamrapali Dubey",
        "incident": "Emotional Send-off: Mary Kom passes her lucky boxing glove talisman to Aamrapali before stepping out.",
        "producerFraming": "Heartfelt sportsmanship and elder solidarity.",
        "organicAudienceWinner": "MC Mary Kom & Aamrapali Dubey (Mutual Acclaim)"
      }
    ],
    "organicDriftSummary": "Day 49 was marked by profound national respect for Mary Kom's 7-week run, establishing a dignified benchmark for Bigg Boss 20."
  },
  {
    "episodeNumber": 42,
    "title": "The Mid-Season Crucible & Aman Gandhi's Eviction",
    "airDate": "Day 42 · October 17, 2026",
    "hostFocus": "Salman Khan reviews mid-season alliance shakeups and bids farewell to Aman Gandhi after 6 weeks.",
    "broadcastThemes": [
      "Mid-Season Alliance Fracture",
      "Immunity Task Composure",
      "Aman Gandhi Eviction"
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
        "contestantName": "Arshifa Khan",
        "editType": "Villain Edit",
        "airtimeMinutes": 26,
        "intendedPerception": "Volatile housemate instigating unnecessary kitchen drama and weaponizing tears.",
        "organicPublicVerdict": "Severe backlash across YouTube comments and family audiences; branded as theatrical sympathy seeking.",
        "receptionDelta": -42
      }
    ],
    "conflictPairs": [
      {
        "id": "cp-42-1",
        "contestantA": "Tanmay Singh (Scout)",
        "contestantB": "Qazi Ahmad Tauqeer",
        "incident": "Tathas-two Immunity Shield Dispute: Qazi tried to provoke Scout; Scout remained stoic and protected the shield.",
        "producerFraming": "New-age gaming champion vs nostalgic reality icon.",
        "organicAudienceWinner": "Tanmay Singh (Scout) (91% approval)"
      }
    ],
    "organicDriftSummary": "Week 6 closed with Aman Gandhi exiting on Day 42 as Scout and Mary Kom retained peak organic authority."
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
        "name": "Pinkvilla (Television Desk)",
        "identifier": "pinkvilla.com/entertainment/television",
        "role": "Daily episodic recaps, verified nomination updates, and task analysis",
        "estimatedDailyVolume": "8 in-depth articles/day"
      },
      {
        "name": "FilmiBeat (Television News)",
        "identifier": "filmibeat.com/television/news",
        "role": "Nomination lists, voting trends, and exit leaks",
        "estimatedDailyVolume": "10 articles/day"
      },
      {
        "name": "FilmyGyan (Entertainment Network)",
        "identifier": "filmygyan.co/bigg-boss-20",
        "role": "Audience review roundups and weekend critiques",
        "estimatedDailyVolume": "6 updates/day"
      }
    ],
    "samplingMethodology": "Automated newsfeed aggregation cross-referencing author names, publication times, and primary claims.",
    "prRiskProfile": "Editorial Baseline"
  }
];
