import {
  Contestant,
  AstroturfCluster,
  EpisodeNarrative,
  BipartiteNetworkNode,
  BipartiteNetworkLink,
  SourceProvenanceItem
} from '../types';

export const INITIAL_CONTESTANTS: Contestant[] = [
  {
    id: 'c1',
    name: 'Scout (Tanmay Singh)',
    nickname: 'ScoutOP',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Frontrunner',
    status: 'Active',
    isNominated: true,
    rawSentiment: 84,
    trueOrganicSentiment: 86,
    prInflationDelta: -2,
    prInfiltrationRate: 12,
    evictionRiskTier: 'Safe',
    evictionProbability: 8,
    silentMajorityIndex: 91,
    loudMinorityIndex: 74,
    recentNarrativeEdit: 'Hero Edit',
    votingTrajectory: 'Rising',
    tossTrend7d: [78, 80, 82, 81, 84, 85, 86],
    bio: 'India’s premier esports athlete and digital creator. Commands massive, highly organized grassroots vote banks on YouTube and gaming communities. Independent consensus polls give him 31%+ share of weekly public votes.',
    detectedAstroturfPatterns: [
      'High lexical diversity across gaming forums and Discord channels (<12% bot signature).',
      'Targeted by rival PR smear rings with coordinated copy-paste complaints after the Tathas-two task.'
    ],
    platforms: {
      youtube: {
        sentiment: 92,
        organicRatio: 0.95,
        rawVolume: 84000,
        botCountEstimate: 1200,
        sampleSources: ['Colors TV YouTube Clips', 'FIFAFOOZ Daily Polls (42k votes)', 'Scout Gaming Community']
      },
      xTwitter: {
        sentiment: 78,
        organicRatio: 0.82,
        rawVolume: 210000,
        botCountEstimate: 14000,
        sampleSources: ['#ScoutOP', '#BB20', '@TheKhabriTweets Polls']
      },
      instagram: {
        sentiment: 86,
        organicRatio: 0.91,
        rawVolume: 128000,
        botCountEstimate: 4500,
        sampleSources: ['@scout_op reels', 'JioHotstar BB20 Highlights']
      },
      threads: {
        sentiment: 84,
        organicRatio: 0.94,
        rawVolume: 24000,
        botCountEstimate: 310,
        sampleSources: ['threads.net/tag/BB20', 'threads.net/tag/ScoutOP']
      },
      googleNews: {
        sentiment: 79,
        organicRatio: 0.96,
        rawVolume: 620,
        botCountEstimate: 8,
        sampleSources: ['The Indian Express BB20 Live', 'Hindustan Times Entertainment']
      }
    }
  },
  {
    id: 'c2',
    name: 'Kanika Mann',
    nickname: 'Kanika',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Challenger',
    status: 'Active',
    isNominated: true,
    rawSentiment: 89,
    trueOrganicSentiment: 47,
    prInflationDelta: 42,
    prInfiltrationRate: 61,
    evictionRiskTier: 'Vocal Bubble / At Risk',
    evictionProbability: 58,
    silentMajorityIndex: 36,
    loudMinorityIndex: 94,
    recentNarrativeEdit: 'Hero Edit',
    votingTrajectory: 'Vocal Illusion',
    tossTrend7d: [64, 61, 57, 52, 49, 48, 47],
    bio: 'Prominent television actress backed by an aggressive celebrity digital PR agency. Artificial hashtag floods and automated quote tweets create an illusion of invincibility on Twitter, but casual family viewers on YouTube criticize her gameplay diplomacy.',
    detectedAstroturfPatterns: [
      'Kanika Mann is playing with pure grace and dignity, sole deserving winner #KanikaArmy',
      'Look at how Kanika stayed patient while others screamed, pure queen vibes #KanikaMann',
      'Batch retweets detected from 1,840 automated accounts created during August-September 2026'
    ],
    platforms: {
      youtube: {
        sentiment: 42,
        organicRatio: 0.81,
        rawVolume: 19500,
        botCountEstimate: 620,
        sampleSources: ['Colors TV Episode Reviews', 'Bollywood Spy Review Threads']
      },
      xTwitter: {
        sentiment: 95,
        organicRatio: 0.29,
        rawVolume: 245000,
        botCountEstimate: 112000,
        sampleSources: ['#KanikaMannForTheWin', '#QueenKanika', '@BiggBoss_Tak Fan Wars']
      },
      instagram: {
        sentiment: 88,
        organicRatio: 0.38,
        rawVolume: 114000,
        botCountEstimate: 42000,
        sampleSources: ['@officialkanikamann fan pages', 'Celebrity PR Reel Boosters']
      },
      threads: {
        sentiment: 54,
        organicRatio: 0.86,
        rawVolume: 18000,
        botCountEstimate: 480,
        sampleSources: ['threads.net/tag/KanikaMann', 'Daily TV Drama Threads']
      },
      googleNews: {
        sentiment: 66,
        organicRatio: 0.89,
        rawVolume: 490,
        botCountEstimate: 15,
        sampleSources: ['Pinkvilla Entertainment', 'Times of India TV News']
      }
    }
  },
  {
    id: 'c3',
    name: 'Aamrapali Dubey',
    nickname: 'Aamrapali',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Frontrunner',
    status: 'Active',
    isNominated: true,
    rawSentiment: 76,
    trueOrganicSentiment: 84,
    prInflationDelta: -8,
    prInfiltrationRate: 8,
    evictionRiskTier: 'Safe',
    evictionProbability: 11,
    silentMajorityIndex: 93,
    loudMinorityIndex: 28,
    recentNarrativeEdit: 'Hero Edit',
    votingTrajectory: 'Rising',
    tossTrend7d: [72, 74, 76, 79, 81, 83, 84],
    bio: 'Bhojpuri cinema superstar. The classic "Silent Majority" candidate: low hashtag velocity on X/Twitter, but an overwhelmingly loyal, massive mass-voting base on YouTube and JioHotstar across the Hindi heartland.',
    detectedAstroturfPatterns: [
      'Virtually zero automated bot signatures (<8%). Natural, conversational regional comments.'
    ],
    platforms: {
      youtube: {
        sentiment: 91,
        organicRatio: 0.96,
        rawVolume: 76000,
        botCountEstimate: 800,
        sampleSources: ['Colors TV Bhojpuri/Hindi clips', 'Filmi Window Public Reactions']
      },
      xTwitter: {
        sentiment: 64,
        organicRatio: 0.85,
        rawVolume: 41000,
        botCountEstimate: 1900,
        sampleSources: ['#AamrapaliDubey', '#BiggBoss20Voting']
      },
      instagram: {
        sentiment: 82,
        organicRatio: 0.92,
        rawVolume: 68000,
        botCountEstimate: 2100,
        sampleSources: ['@aamrapali1101 Reels', 'Regional Fan Clubs']
      },
      threads: {
        sentiment: 78,
        organicRatio: 0.91,
        rawVolume: 12000,
        botCountEstimate: 180,
        sampleSources: ['threads.net/tag/AamrapaliDubey']
      },
      googleNews: {
        sentiment: 80,
        organicRatio: 0.98,
        rawVolume: 510,
        botCountEstimate: 2,
        sampleSources: ['Times of India Regional', 'Jagran Entertainment']
      }
    }
  },
  {
    id: 'c4',
    name: 'Aasif Khan',
    nickname: 'Aasif',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Underdog',
    status: 'Active',
    isNominated: true,
    rawSentiment: 64,
    trueOrganicSentiment: 34,
    prInflationDelta: 30,
    prInfiltrationRate: 54,
    evictionRiskTier: 'High Danger',
    evictionProbability: 82,
    silentMajorityIndex: 16,
    loudMinorityIndex: 45,
    recentNarrativeEdit: 'Ghost Edit',
    votingTrajectory: 'Plummeting',
    tossTrend7d: [48, 45, 41, 38, 36, 35, 34],
    bio: 'Critically acclaimed OTT actor (Panchayat, Mirzapur). Despite immense respect from critics, he is suffering from the broadcast "Ghost Edit"—minimal task screen time and zero active fan armies leave him defenseless against high-stakes eviction.',
    detectedAstroturfPatterns: [
      'Aasif Khan is a real actor in a house full of clowns, vote for real talent #SaveAasif',
      'Sudden posting burst of 450 identical messages in 2 minutes following nomination announcement'
    ],
    platforms: {
      youtube: {
        sentiment: 32,
        organicRatio: 0.74,
        rawVolume: 5200,
        botCountEstimate: 420,
        sampleSources: ['Reviewer Consensus Threads', 'Colors TV Episode Comments']
      },
      xTwitter: {
        sentiment: 72,
        organicRatio: 0.35,
        rawVolume: 38000,
        botCountEstimate: 18500,
        sampleSources: ['#AasifKhan', '#SaveAasifKhan']
      },
      instagram: {
        sentiment: 68,
        organicRatio: 0.42,
        rawVolume: 24000,
        botCountEstimate: 9200,
        sampleSources: ['@aasifkhan_1 comments', 'OTT Fan Communities']
      },
      threads: {
        sentiment: 44,
        organicRatio: 0.88,
        rawVolume: 7500,
        botCountEstimate: 120,
        sampleSources: ['threads.net/tag/AasifKhan']
      },
      googleNews: {
        sentiment: 58,
        organicRatio: 0.94,
        rawVolume: 120,
        botCountEstimate: 2,
        sampleSources: ['Cinema Express', 'Hindustan Times']
      }
    }
  },
  {
    id: 'c5',
    name: 'Love Gill',
    nickname: 'Love',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Polarizing',
    status: 'Active',
    isNominated: false,
    rawSentiment: 71,
    trueOrganicSentiment: 68,
    prInflationDelta: 3,
    prInfiltrationRate: 15,
    evictionRiskTier: 'Safe',
    evictionProbability: 14,
    silentMajorityIndex: 70,
    loudMinorityIndex: 68,
    recentNarrativeEdit: 'Villain Edit',
    votingTrajectory: 'Stable',
    tossTrend7d: [65, 66, 68, 67, 69, 68, 68],
    bio: 'Punjabi music and digital star known for explosive verbal sparring. Currently exempt from nominations after securing the "Tathas-two" immunity task victory in Episode 48.',
    detectedAstroturfPatterns: [
      'Regional Punjabi youth fandom accounts with consistent multi-month posting histories.'
    ],
    platforms: {
      youtube: {
        sentiment: 74,
        organicRatio: 0.90,
        rawVolume: 32000,
        botCountEstimate: 950,
        sampleSources: ['TellyMasala Task Reactions', 'Colors TV Episode Clips']
      },
      xTwitter: {
        sentiment: 66,
        organicRatio: 0.79,
        rawVolume: 74000,
        botCountEstimate: 6100,
        sampleSources: ['#LoveGill', '#BB20LiveFeed']
      },
      instagram: {
        sentiment: 75,
        organicRatio: 0.84,
        rawVolume: 82000,
        botCountEstimate: 4800,
        sampleSources: ['Punjabi Celebrity Handles', 'JioCinema Feed']
      },
      threads: {
        sentiment: 65,
        organicRatio: 0.91,
        rawVolume: 14000,
        botCountEstimate: 160,
        sampleSources: ['threads.net/tag/LoveGill']
      },
      googleNews: {
        sentiment: 64,
        organicRatio: 0.95,
        rawVolume: 280,
        botCountEstimate: 4,
        sampleSources: ['PTC Punjabi News', 'Times of India']
      }
    }
  },
  {
    id: 'c6',
    name: 'Qazi Touqeer',
    nickname: 'Qazi',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Wildcard',
    status: 'Active',
    isNominated: true,
    rawSentiment: 65,
    trueOrganicSentiment: 38,
    prInflationDelta: 27,
    prInfiltrationRate: 59,
    evictionRiskTier: 'High Danger',
    evictionProbability: 76,
    silentMajorityIndex: 24,
    loudMinorityIndex: 79,
    recentNarrativeEdit: 'Villain Edit',
    votingTrajectory: 'Plummeting',
    tossTrend7d: [58, 54, 49, 44, 41, 39, 38],
    bio: 'Fame Gurukul winner and wildcard entrant. Dramatic nostalgia factor initially drove fan chatter, but erratic house behavior and aggressive confrontation with Scout triggered severe casual backlash.',
    detectedAstroturfPatterns: [
      'Qazi Touqeer is bringing real 2000s vintage reality TV magic back, vote Qazi #QaziWarriors',
      'Automated batch comments targeting ScoutOP on official Colors TV YouTube clips'
    ],
    platforms: {
      youtube: {
        sentiment: 26,
        organicRatio: 0.84,
        rawVolume: 14200,
        botCountEstimate: 650,
        sampleSources: ['Colors TV Task Highlights', 'FIFAFOOZ Eviction Polls']
      },
      xTwitter: {
        sentiment: 78,
        organicRatio: 0.31,
        rawVolume: 89000,
        botCountEstimate: 46000,
        sampleSources: ['#QaziTouqeer', '#BB20Wildcard']
      },
      instagram: {
        sentiment: 71,
        organicRatio: 0.36,
        rawVolume: 49000,
        botCountEstimate: 21000,
        sampleSources: ['@qazitouqeer_official', 'Vintage Reality Pages']
      },
      threads: {
        sentiment: 38,
        organicRatio: 0.89,
        rawVolume: 9200,
        botCountEstimate: 190,
        sampleSources: ['threads.net/tag/QaziTouqeer']
      },
      googleNews: {
        sentiment: 42,
        organicRatio: 0.91,
        rawVolume: 210,
        botCountEstimate: 6,
        sampleSources: ['The Indian Express', 'Deccan Chronicle']
      }
    }
  },
  {
    id: 'c7',
    name: 'Gullu (Gaurav)',
    nickname: 'Gullu',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Underdog',
    status: 'Active',
    isNominated: true,
    rawSentiment: 73,
    trueOrganicSentiment: 71,
    prInflationDelta: 2,
    prInfiltrationRate: 14,
    evictionRiskTier: 'Safe',
    evictionProbability: 26,
    silentMajorityIndex: 75,
    loudMinorityIndex: 52,
    recentNarrativeEdit: 'Neutral Edit',
    votingTrajectory: 'Stable',
    tossTrend7d: [68, 69, 70, 71, 70, 71, 71],
    bio: 'Humorous, relatable digital creator holding steady middle-tier survival numbers through organic youth votes and comic relief during tense ration disputes.',
    detectedAstroturfPatterns: [
      'Minimal PR intervention detected. Organic reaction memes on Instagram Reels and Threads.'
    ],
    platforms: {
      youtube: {
        sentiment: 76,
        organicRatio: 0.93,
        rawVolume: 29000,
        botCountEstimate: 700,
        sampleSources: ['Colors TV Comedy Highlights', 'YouTube Fan Polls']
      },
      xTwitter: {
        sentiment: 68,
        organicRatio: 0.82,
        rawVolume: 51000,
        botCountEstimate: 3900,
        sampleSources: ['#GulluBB20', '#BB20Memes']
      },
      instagram: {
        sentiment: 74,
        organicRatio: 0.88,
        rawVolume: 58000,
        botCountEstimate: 2400,
        sampleSources: ['Meme Creators Hub', 'JioHotstar Reels']
      },
      threads: {
        sentiment: 72,
        organicRatio: 0.92,
        rawVolume: 16000,
        botCountEstimate: 140,
        sampleSources: ['threads.net/tag/Gullu']
      },
      googleNews: {
        sentiment: 65,
        organicRatio: 0.96,
        rawVolume: 180,
        botCountEstimate: 2,
        sampleSources: ['Hindustan Times BB20']
      }
    }
  }
];

export const ASTROTURF_CLUSTERS: AstroturfCluster[] = [
  {
    id: 'cl-bb20-1',
    contestantId: 'c2',
    contestantName: 'Kanika Mann',
    templatePhrase: 'Kanika Mann is playing with pure grace and dignity, sole deserving winner of BB20 #KanikaArmy',
    variations: [
      'Kanika Mann is playing with 100% grace and dignity, sole deserving winner #KanikaArmy',
      'Look how composed Kanika stayed today, undisputed queen of BB20 #KanikaMann',
      'Pure dignity, pure grace! Kanika Mann is the real winner of Bigg Boss 20 #KanikaArmy'
    ],
    occurrences: 6140,
    similarityScore: 0.97,
    accountVelocity: '124 posts / min post-Weekend Ka Vaar',
    primarySource: 'X (Twitter)',
    accountAgeMedianDays: 6,
    bipartiteRingId: 'ring-agency-mumbai-glam',
    status: 'Sanitized & Discounted'
  },
  {
    id: 'cl-bb20-2',
    contestantId: 'c6',
    contestantName: 'Qazi Touqeer',
    templatePhrase: 'Qazi Touqeer is bringing real 2000s vintage reality TV magic back, vote Qazi #QaziWarriors',
    variations: [
      'Qazi Touqeer brings raw unfiltered vintage reality TV back, please vote for him tonight #QaziWarriors',
      'Only real legend in BB20 is Qazi Touqeer, don’t let new influencers overshadow him #QaziWarriors'
    ],
    occurrences: 3890,
    similarityScore: 0.93,
    accountVelocity: '88 posts / min burst during nomination',
    primarySource: 'Instagram',
    accountAgeMedianDays: 9,
    bipartiteRingId: 'ring-retro-fandom',
    status: 'Sanitized & Discounted'
  },
  {
    id: 'cl-bb20-3',
    contestantId: 'c4',
    contestantName: 'Aasif Khan',
    templatePhrase: 'Aasif Khan is a real actor in a house full of clowns, vote for real talent #SaveAasif',
    variations: [
      'Aasif Khan is a genuine artist among reality clowns, vote for real talent #SaveAasif',
      'Panchayat and Mirzapur fans unite to save Aasif Khan from unfair eviction #SaveAasif'
    ],
    occurrences: 2450,
    similarityScore: 0.92,
    accountVelocity: '52 posts / min',
    primarySource: 'X (Twitter)',
    accountAgeMedianDays: 14,
    bipartiteRingId: 'ring-ott-collective',
    status: 'Sanitized & Discounted'
  }
];

export const BIPARTITE_NODES: BipartiteNetworkNode[] = [
  { id: 'ring-1', label: 'Celebrity PR Cluster Matrix (2.2k bot profiles)', type: 'pr_agency', volume: 84000, riskWeight: 0.94 },
  { id: 'ring-2', label: 'Vintage TV Fandom Exchange (920 accounts)', type: 'pr_agency', volume: 38000, riskWeight: 0.85 },
  { id: 'ring-3', label: 'OTT Talent Promo Ring (410 accounts)', type: 'account_cluster', volume: 22000, riskWeight: 0.72 },
  { id: 'ring-4', label: 'Verified Indian Esports Community (38k organic gamers)', type: 'account_cluster', volume: 165000, riskWeight: 0.08 },
  { id: 'ring-5', label: 'Bhojpuri Heartland Family Fandom (54k organic voters)', type: 'account_cluster', volume: 142000, riskWeight: 0.06 },
  { id: 'c1', label: 'Scout (Tanmay Singh)', type: 'contestant', volume: 210000, riskWeight: 0.12 },
  { id: 'c2', label: 'Kanika Mann', type: 'contestant', volume: 245000, riskWeight: 0.61 },
  { id: 'c3', label: 'Aamrapali Dubey', type: 'contestant', volume: 76000, riskWeight: 0.08 },
  { id: 'c4', label: 'Aasif Khan', type: 'contestant', volume: 38000, riskWeight: 0.54 },
  { id: 'c6', label: 'Qazi Touqeer', type: 'contestant', volume: 89000, riskWeight: 0.59 },
  { id: 'c7', label: 'Gullu (Gaurav)', type: 'contestant', volume: 51000, riskWeight: 0.14 }
];

export const BIPARTITE_LINKS: BipartiteNetworkLink[] = [
  { source: 'ring-1', target: 'c2', weight: 68000, isAstroturf: true },
  { source: 'ring-2', target: 'c6', weight: 32000, isAstroturf: true },
  { source: 'ring-3', target: 'c4', weight: 19000, isAstroturf: true },
  { source: 'ring-4', target: 'c1', weight: 148000, isAstroturf: false },
  { source: 'ring-5', target: 'c3', weight: 128000, isAstroturf: false },
  { source: 'ring-4', target: 'c7', weight: 26000, isAstroturf: false },
  { source: 'ring-1', target: 'c1', weight: 14000, isAstroturf: true } // Rival smear link
];

export const EPISODE_NARRATIVES: EpisodeNarrative[] = [
  {
    episodeNumber: 52,
    title: 'Weekend Ka Vaar with Salman Khan: The Tathas-two Immunity Betrayal',
    airDate: 'October 31, 2026',
    hostFocus: 'Salman Khan Grill Session & Tathas-two Second Life Veto',
    broadcastThemes: ['Tathas-two Life Line', 'Ration Sabotage Conspiracy', 'Host Direct Intervention'],
    contestantEdits: [
      {
        contestantId: 'c1',
        contestantName: 'Scout (Tanmay Singh)',
        editType: 'Hero Edit',
        airtimeMinutes: 28,
        intendedPerception: 'Calm, strategic digital icon who defended his teammates during the nomination task without screaming.',
        organicPublicVerdict: 'Resounding acclaim across YouTube and Threads; viewers praised his grounded demeanor against theatrical aggression.',
        receptionDelta: +32
      },
      {
        contestantId: 'c2',
        contestantName: 'Kanika Mann',
        editType: 'Hero Edit',
        airtimeMinutes: 26,
        intendedPerception: 'Elegant victim of aggressive house politics who handled confrontation with tears and dignity.',
        organicPublicVerdict: 'Major viewer fatigue; casual audiences on YouTube called out rehearsed emotional beats and artificial PR defense.',
        receptionDelta: -34
      },
      {
        contestantId: 'c3',
        contestantName: 'Aamrapali Dubey',
        editType: 'Hero Edit',
        airtimeMinutes: 19,
        intendedPerception: 'House matriarch maintaining peace and fair kitchen distribution.',
        organicPublicVerdict: 'Universally praised by family audiences; dominant positive ratio on Colors TV YouTube comments.',
        receptionDelta: +29
      },
      {
        contestantId: 'c4',
        contestantName: 'Aasif Khan',
        editType: 'Ghost Edit',
        airtimeMinutes: 3,
        intendedPerception: 'Passive spectator in the background.',
        organicPublicVerdict: 'Completely overshadowed despite high acting pedigree; minimal voting mobilization.',
        receptionDelta: -41
      },
      {
        contestantId: 'c6',
        contestantName: 'Qazi Touqeer',
        editType: 'Villain Edit',
        airtimeMinutes: 22,
        intendedPerception: 'Aggressive instigator who breached task rules and launched personal jibes at Scout.',
        organicPublicVerdict: 'Severe backlash; viewers voted heavily against him on independent polls.',
        receptionDelta: -48
      }
    ],
    conflictPairs: [
      {
        id: 'cp-bb20-1',
        contestantA: 'Scout (Tanmay Singh)',
        contestantB: 'Qazi Touqeer',
        incident: 'The Tathas-two Task Shield Dispute & Personal Legacy Sarcasm',
        producerFraming: 'Dramatic clash of eras: New-age gaming influencer vs vintage singing idol',
        organicAudienceWinner: 'Scout (88% organic positive approval on YouTube comments)'
      },
      {
        id: 'cp-bb20-2',
        contestantA: 'Kanika Mann',
        contestantB: 'Aamrapali Dubey',
        incident: 'Kitchen Ration Veto & Household Hierarchy Conflict',
        producerFraming: 'Kanika portrayed as glamorous modern rebel vs Aamrapali traditional kitchen captain',
        organicAudienceWinner: 'Aamrapali Dubey (92% casual viewer defense across YouTube review polls)'
      }
    ],
    organicDriftSummary: 'The broadcast pushed hard to elevate Kanika Mann as a sympathetic lead while villainizing Scout’s calm task refusal. However, the organic audience drifted in the opposite direction: Scout gained over 32 net positive sentiment points from casual viewers on YouTube and Threads, while Kanika suffered a 34-point credibility drop due to perceived artificiality and PR astroturfing.'
  }
];

export const SOURCE_PROVENANCE_CATALOG: SourceProvenanceItem[] = [
  {
    platform: 'YouTube',
    icon: 'Youtube',
    description: 'Captures the mass-market casual viewer ("Silent Majority"). Low bot density, highest correlation with actual JioHotstar voting numbers.',
    verifiedFeedsAndHandles: [
      { name: 'Colors TV Official Channel', identifier: '@ColorsTV (65M subscribers)', role: 'Official Episode Clips & Uncut Moments', estimatedDailyVolume: '140,000 comments/day' },
      { name: 'JioCinema / JioHotstar BB20 Stream', identifier: '@JioCinema (24/7 Live Stream Chat)', role: 'Live viewer reactions during key tasks', estimatedDailyVolume: '220,000 live chat messages' },
      { name: 'FIFAFOOZ Official', identifier: '@FIFAFOOZ (1.2M subscribers)', role: 'Premier independent reality review & daily 50k+ sample polls', estimatedDailyVolume: '18,000 poll votes & comments' },
      { name: 'The Khabri Official YouTube', identifier: '@TheKhabriLive', role: 'Weekly nomination projections & insider vote tallies', estimatedDailyVolume: '12,000 comments' },
      { name: 'Filmi Window & Bollywood Spy', identifier: '@FilmiWindow / @BollywoodSpy', role: 'Ground public interviews outside film city', estimatedDailyVolume: '8,500 comments' }
    ],
    samplingMethodology: 'Comments and likes-to-view ratios sampled across all official clips within 4 hours of broadcast. Accounts must have verified history >60 days to pass the authenticity filter.',
    prRiskProfile: 'Lowest PR risk (<8% bot interference). Excellent indicator of family and casual viewers.'
  },
  {
    platform: 'X (Twitter)',
    icon: 'Twitter',
    description: 'Captures high-velocity real-time reactions and breaking controversies. Highest vulnerability to coordinated PR bot swarms and paid trending campaigns.',
    verifiedFeedsAndHandles: [
      { name: 'Official Show Hashtags', identifier: '#BiggBoss20, #BB20, #WeekendKaVaar', role: 'Primary aggregate stream', estimatedDailyVolume: '450,000 tweets/day' },
      { name: 'Contestant Trending Tags', identifier: '#ScoutOP, #KanikaMann, #AamrapaliDubey, #AasifKhan', role: 'Fan club & PR battlegrounds', estimatedDailyVolume: '320,000 tweets/day' },
      { name: 'The Khabri Insider', identifier: '@TheKhabriTweets (Verified)', role: 'Independent voting consensus polls & nomination tracking', estimatedDailyVolume: '65,000 poll votes' },
      { name: 'Bigg Boss Tak', identifier: '@BiggBoss_Tak (Verified)', role: 'Daily episode highlights & live tweet coverage', estimatedDailyVolume: '45,000 interactions' },
      { name: 'Gossips TV Official', identifier: '@GossipsTv', role: 'TRP ratings & official Colors TV announcements', estimatedDailyVolume: '15,000 interactions' }
    ],
    samplingMethodology: 'Streaming ingestion filtered through MinHash/LSH deduplication. Accounts under 14 days old or tweeting identical templates >10 times/minute are isolated and penalized.',
    prRiskProfile: 'Extreme PR risk (40% - 65% synthetic volume). Naive Twitter sentiment is heavily discounted in TOSS calculation.'
  },
  {
    platform: 'Instagram',
    icon: 'Instagram',
    description: 'Reflects fandom intensity, aesthetic edits, and Gen-Z engagement. High risk of comment pods and paid agency emojis.',
    verifiedFeedsAndHandles: [
      { name: 'Colors TV Official Instagram', identifier: '@colorstv (24M followers)', role: 'Official broadcast reels & task promos', estimatedDailyVolume: '85,000 comments/day' },
      { name: 'Salman Khan Official', identifier: '@beingsalmankhan', role: 'Weekend Ka Vaar announcements & host feedback', estimatedDailyVolume: '45,000 comments' },
      { name: 'Contestant Handles', identifier: '@scout_op, @officialkanikamann, @aamrapali1101', role: 'Official PR management & fan club engagement', estimatedDailyVolume: '120,000 comments/day' },
      { name: 'JioHotstar Reality Hub', identifier: '@jiohotstar.reality', role: '24/7 live feed snippets & nomination reels', estimatedDailyVolume: '35,000 comments' }
    ],
    samplingMethodology: 'Reel comments scraped and clustered. Detects repetitive 3-emoji comment pods (e.g. 🌸✨🛡️ or 👑🔥🙌) to strip paid boosting rings.',
    prRiskProfile: 'High PR risk (30% - 50% synthetic volume). Weighted at 15% in True Organic formula.'
  },
  {
    platform: 'Threads',
    icon: 'MessageSquare',
    description: 'Meta microblogging platform capturing conversational, text-first audience discussions without Twitter-scale automated bot farms.',
    verifiedFeedsAndHandles: [
      { name: 'Bigg Boss 20 Topic Thread', identifier: 'threads.net/tag/BiggBoss20', role: 'Real-time viewer discussions & hot takes', estimatedDailyVolume: '28,000 posts/day' },
      { name: 'BB20 Uncut Topic', identifier: 'threads.net/tag/BB20', role: 'Episode live reactions and debate threads', estimatedDailyVolume: '19,000 posts/day' },
      { name: 'ScoutOP Fandom Thread', identifier: 'threads.net/tag/ScoutOP', role: 'Esports & casual gaming viewer discussions', estimatedDailyVolume: '12,000 posts/day' },
      { name: 'Daily Soap Discussions', identifier: 'threads.net/tag/KanikaMann', role: 'TV serial viewer critiques and voting plans', estimatedDailyVolume: '9,500 posts/day' }
    ],
    samplingMethodology: 'Ingested via Meta Graph / conversational thread parsers. Low bot density provides a natural organic counterbalance to Twitter.',
    prRiskProfile: 'Low PR risk (<12% bot interference). High credibility for authentic casual reactions.'
  },
  {
    platform: 'Google News & Media',
    icon: 'Globe',
    description: 'Reflects mainstream editorial reception, journalistic critiques, and formal PR press releases.',
    verifiedFeedsAndHandles: [
      { name: 'The Indian Express (BB20 Live)', identifier: 'indianexpress.com/entertainment/bigg-boss-20', role: 'Daily live blog, episode recaps, and task analysis', estimatedDailyVolume: '4-6 in-depth articles/day' },
      { name: 'Times of India (TOI TV)', identifier: 'timesofindia.indiatimes.com/tv/news/hindi', role: 'Nomination lists, voting trends, and exit leaks', estimatedDailyVolume: '6-8 articles/day' },
      { name: 'Hindustan Times Entertainment', identifier: 'hindustantimes.com/entertainment/tv', role: 'Audience review roundups and weekend critiques', estimatedDailyVolume: '5-7 articles/day' },
      { name: 'Pinkvilla Entertainment', identifier: 'pinkvilla.com/tv/news-gossip', role: 'Fandom controversies and celebrity PR statements', estimatedDailyVolume: '8-10 articles/day' },
      { name: 'Deccan Chronicle', identifier: 'deccanchronicle.com/entertainment/television', role: 'Weekly eviction candidate risk analysis', estimatedDailyVolume: '3-4 articles/day' }
    ],
    samplingMethodology: 'Google News RSS and Search Grounding indexing entertainment journalism. Evaluates editorial framing versus paid press release distribution.',
    prRiskProfile: 'Moderate PR risk (press release syndication). Weighted at 15% as the media baseline.'
  }
];
