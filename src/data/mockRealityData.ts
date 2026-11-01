import {
  Contestant,
  AstroturfCluster,
  EpisodeNarrative,
  BipartiteNetworkNode,
  BipartiteNetworkLink,
  SourceProvenanceItem,
  EvictedContestantTimelineItem
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
    pastDetails: 'Pioneer of Indian competitive esports, international PUBG Mobile competitor, owner of Team XSpark with over 5M+ YouTube subscribers. Known across the subcontinent for laser-sharp reflex aiming and commanding loyal Gen-Z community backing.',
    controversies: [
      'Heated livestreams verbal clashes during early competitive tournaments (2019-2020)',
      'High-profile esports roster split and transfer disputes with rival gaming orgs',
      'Brief government gaming ban friction and livestream censorship debates'
    ],
    houseGameplay: 'Playing with stoic maturity and psychological calm. Executes tasks with athletic discipline, refuses to indulge in theatrical kitchen screaming, and easily disarms loud housemates (like Arshifa) by smiling through their calculated tantrums.',
    strongestMove: 'In the Tathas-two Immunity Task, defended the immunity shield single-handedly without retaliating physically, outlasting provocations and securing his entire team’s safety while calmly pointing out rule breaches to Salman Khan.',
    hinglishProfile: {
      bio: 'India ka premier esports athlete aur streamer. YouTube aur gaming public ka sabse bada vote bank leke baitha hai.',
      pastDetails: 'Team XSpark ka founder aur international esports champion. Gaming streams pe millions of live viewers aate the.',
      controversies: [
        'Purane gaming livestreams pe aggressive toxic rants',
        'Rival teams ke saath tournament roster lafde'
      ],
      houseGameplay: 'Ekdum zen mode mein khel raha hai. Arshifa aur Qazi jab gussa dilane aate hain toh ye bina aawaz badhaye unhe smile karke rage-bait kar deta hai.',
      strongestMove: 'Tathas-two immunity task mein akele shield pakad kar Arshifa aur Qazi ke attacks ko neutralize kiya aur team ko immunity dilayi.'
    },
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
    pastDetails: 'Lead star of hit daily soap Guddan Tumse Na Ho Payega and finalist on Khatron Ke Khiladi. Established leading lady of Hindi general entertainment television with high commercial brand value.',
    controversies: [
      'Reported on-set friction with co-actors regarding screen time on Guddan',
      'Heavy criticism for deploying automated comment bots on Instagram during past award votings'
    ],
    houseGameplay: 'Projects an angelic, gentle heroine persona in front of Salman Khan during Weekend Ka Vaar, but strategically avoids heavy kitchen duties. Frequently counters Arshifa by teaming up with Scout and Gullu.',
    strongestMove: 'Exposed Arshifa’s hidden stash of coffee and luxury chocolates in the luggage room, shifting public scrutiny away from her own chore avoidance.',
    hinglishProfile: {
      bio: 'TV serials ki top actress. Twitter PR bot army bohot active hai par YouTube casual junta iske diplomatic nature se unconvinced hai.',
      pastDetails: 'Guddan serial ki lead actress aur Khatron Ke Khiladi finalist.',
      controversies: [
        'On-screen sets pe co-stars ke sath cold war rumors',
        'Award ceremonies ke time paid voting automation ka arop'
      ],
      houseGameplay: 'Weekend par Salman Khan ke samne bholi banti hai par ghar mein kitchen chore se bachti hai. Arshifa ke fake tears ko Scout ke sath milkar expose karti hai.',
      strongestMove: 'Luggage room mein chupa hua Arshifa ka coffee aur chocolate stash dhoondh ke nikaal diya.'
    },
    detectedAstroturfPatterns: [
      'Kanika Mann is playing with pure grace and dignity, sole deserving winner #KanikaArmy',
      'Look at how Kanika stayed patient while others screamed, pure queen vibes #KanikaMann',
      'Batch retweets detected from 1,840 automated accounts created during August-September 2026'
    ],
    platforms: {
      youtube: {
        sentiment: 42,
        organicRatio: 0.74,
        rawVolume: 46000,
        botCountEstimate: 5200,
        sampleSources: ['Bigg Boss Reviewers YouTube Channels', 'JioHotstar Episodic Comments']
      },
      xTwitter: {
        sentiment: 94,
        organicRatio: 0.39,
        rawVolume: 245000,
        botCountEstimate: 149000,
        sampleSources: ['#KanikaMannForTheWin', '#KanikaArmy', 'Celebrity PR Retweet Rings']
      },
      instagram: {
        sentiment: 72,
        organicRatio: 0.58,
        rawVolume: 88000,
        botCountEstimate: 31000,
        sampleSources: ['Fan Page Edits', 'Paid Entertainment Meme Networks']
      },
      threads: {
        sentiment: 51,
        organicRatio: 0.81,
        rawVolume: 12000,
        botCountEstimate: 1200,
        sampleSources: ['threads.net/tag/BB20', 'TV Industry Hot Takes']
      },
      googleNews: {
        sentiment: 81,
        organicRatio: 0.92,
        rawVolume: 410,
        botCountEstimate: 12,
        sampleSources: ['TellyChakkar', 'India Forums Bigg Boss Updates']
      }
    }
  },
  {
    id: 'c8',
    name: 'Arshifa Khan',
    nickname: 'Arshifa',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Polarizing',
    status: 'Active',
    isNominated: true,
    rawSentiment: 68,
    trueOrganicSentiment: 28,
    prInflationDelta: 40,
    prInfiltrationRate: 72,
    evictionRiskTier: 'High Danger',
    evictionProbability: 84,
    silentMajorityIndex: 18,
    loudMinorityIndex: 88,
    recentNarrativeEdit: 'Villain Edit',
    votingTrajectory: 'Plummeting',
    tossTrend7d: [48, 42, 38, 35, 31, 29, 28],
    bio: 'Former child artist turned mega social media creator with 28M+ followers. Her entire Bigg Boss strategy revolves around picking unprovoked, high-pitch arguments over trivial chores, falling directly into rage-baits from Scout, Gullu, and Kanika, and subsequently breaking down into performative tears to manufacture sympathy.',
    pastDetails: 'Started acting in acclaimed TV shows like Ek Veer Ki Ardaas... Veera and Uttaran as a child star. Transitioned into one of India’s most followed teenage digital creators on TikTok and Instagram Reels.',
    controversies: [
      'Massive viral public feud with fellow digital creators (Lucky Dancer dispute)',
      'Accusations of staging relationship drama for social media metrics',
      'Cyber-bullying police complaints filed during 2020 creator wars'
    ],
    houseGameplay: 'Constantly picks unnecessary fights over minuscule issues like bed corners, extra rotis, and mirror time. Gets effortlessly rage-baited by Scout, Gullu, and Kanika, and once logically trapped, immediately begins sobbing hysterically to play the victim card to stay relevant in the daily 24/7 live feeds.',
    strongestMove: 'Staged a 4-hour kitchen boycott during Week 3 over ration cuts, forcing the captain to concede an extra milk carton while dominating camera airtime.',
    hinglishProfile: {
      bio: 'Ex-child TV star aur mega social media creator. Faltu ke muddo pe chillana, bait mein phansna aur fir rona iska main game plan hai.',
      pastDetails: 'Veera aur Uttaran serial se career shuru kiya, fir Instagram reels pe 28M+ followers banaye.',
      controversies: [
        'Lucky Dancer aur digital creators ke sath viral internet lafde',
        'Sympathy aur views ke liye fake online drama ke allegations'
      ],
      houseGameplay: 'Bina kisi baat ke un-necessary fights start karti hai. Scout, Gullu aur Kanika isko araam se rage-bait kar dete hain aur ye unke jaal mein phans ke rona shuru kar deti hai taaki victim card khel ke relevant rahe.',
      strongestMove: 'Week 3 mein 4 ghante tak kitchen strike karke captain ko milk ration increase karne pe majboor kiya.'
    },
    detectedAstroturfPatterns: [
      'Targeted crying clip distribution across 80+ automated fan pages within 5 minutes of episode broadcast.',
      'Scripted hashtag floods: #StandWithArshifa #StopBullyingArshifa using identical punctuation.',
      'Massive follower-to-vote drop: 28M followers yielding under 4% organic voting share in independent polls.'
    ],
    platforms: {
      youtube: {
        sentiment: 22,
        organicRatio: 0.88,
        rawVolume: 92000,
        botCountEstimate: 4000,
        sampleSources: ['Colors TV YouTube Clips', 'Reviewers Polls (Viewer disapproval)']
      },
      xTwitter: {
        sentiment: 74,
        organicRatio: 0.31,
        rawVolume: 180000,
        botCountEstimate: 124000,
        sampleSources: ['#StandWithArshifa', '#ArshifaKhan', 'Paid PR Clusters']
      },
      instagram: {
        sentiment: 69,
        organicRatio: 0.42,
        rawVolume: 220000,
        botCountEstimate: 110000,
        sampleSources: ['@arshifakhan fan accounts', 'Teen creator circles']
      },
      threads: {
        sentiment: 26,
        organicRatio: 0.85,
        rawVolume: 16000,
        botCountEstimate: 800,
        sampleSources: ['threads.net/tag/BB20', 'Reality TV discourse']
      },
      googleNews: {
        sentiment: 45,
        organicRatio: 0.90,
        rawVolume: 510,
        botCountEstimate: 20,
        sampleSources: ['Times of India Entertainment', 'ABP Live']
      }
    }
  },
  {
    id: 'c7',
    name: 'Gullu (Gaurav)',
    nickname: 'Gullu',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Wildcard',
    status: 'Active',
    isNominated: false,
    rawSentiment: 74,
    trueOrganicSentiment: 78,
    prInflationDelta: -4,
    prInfiltrationRate: 14,
    evictionRiskTier: 'Safe',
    evictionProbability: 4,
    silentMajorityIndex: 79,
    loudMinorityIndex: 45,
    recentNarrativeEdit: 'Hero Edit',
    votingTrajectory: 'Rising',
    tossTrend7d: [62, 65, 68, 71, 74, 76, 78],
    bio: 'Witty street-smart digital creator and roast comedian from Delhi NCR. Serves as the household’s master instigator, poking contestants with dry sarcasm until they unravel, while staying completely calm and endearing himself to casual viewers.',
    pastDetails: 'Pioneered viral observational comedy shorts and celebrity roasts on YouTube with over 3M subscribers. Renowned for raw Delhi humor, deadpan delivery, and effortless comic timing.',
    controversies: [
      'Copyright strikes from Bollywood studios after satirical roast videos',
      'Public feud with reality show contestants after brutally parodying their breakup reels'
    ],
    houseGameplay: 'The ultimate counter-puncher. Never starts screaming himself; instead, drops one-line sarcastic observations that instantly trigger Arshifa and Qazi into high-decibel meltdowns, exposing their artificial game plans to the cameras.',
    strongestMove: 'Mimicked Qazi’s 2005 singing style and Arshifa’s crying routine in front of all housemates during the nomination debate, causing both to lose their temper and forfeit their immunity negotiations.',
    hinglishProfile: {
      bio: 'Delhi ka sharp roast comedian. Ghar ka master troll hai jo bina chillaye doosron ko unmask kar deta hai.',
      pastDetails: 'Viral YouTube roasting sketches aur stand-up comedy se famous hua.',
      controversies: [
        'Bollywood films ke roasts pe copyright claims aur legal notices',
        'Influencers ko roast karne pe social media lafde'
      ],
      houseGameplay: 'Bina gussa kiye ek line ka sarcastic taunt maarta hai jisse Arshifa aur Qazi trigger ho jate hain. Entertainment quotient mein top pe chal raha hai.',
      strongestMove: 'Nomination ke dauran Qazi aur Arshifa ki acting utari, jisse dono chilla pade aur immunity Scout ke paas chali gayi.'
    },
    detectedAstroturfPatterns: [
      'Organic meme amplification across Reddit (r/biggboss) and YouTube Shorts.',
      'Low PR signature (<14%); engagement driven by genuine viral punchlines.'
    ],
    platforms: {
      youtube: {
        sentiment: 88,
        organicRatio: 0.94,
        rawVolume: 51000,
        botCountEstimate: 900,
        sampleSources: ['BB Memes YouTube Shorts', 'Casual audience comment sections']
      },
      xTwitter: {
        sentiment: 72,
        organicRatio: 0.82,
        rawVolume: 78000,
        botCountEstimate: 6000,
        sampleSources: ['#GulluBB20', 'Meme pages Twitter']
      },
      instagram: {
        sentiment: 81,
        organicRatio: 0.89,
        rawVolume: 95000,
        botCountEstimate: 4200,
        sampleSources: ['Reels remixes', 'Comedy creators pages']
      },
      threads: {
        sentiment: 77,
        organicRatio: 0.91,
        rawVolume: 14000,
        botCountEstimate: 300,
        sampleSources: ['threads.net/tag/Gullu', 'Meta BB threads']
      },
      googleNews: {
        sentiment: 66,
        organicRatio: 0.95,
        rawVolume: 180,
        botCountEstimate: 4,
        sampleSources: ['DNA India', 'News18 Entertainment']
      }
    }
  },
  {
    id: 'c3',
    name: 'Aamrapali Dubey',
    nickname: 'Dubeyji',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Underdog',
    status: 'Active',
    isNominated: true,
    rawSentiment: 71,
    trueOrganicSentiment: 76,
    prInflationDelta: -5,
    prInfiltrationRate: 8,
    evictionRiskTier: 'Safe',
    evictionProbability: 12,
    silentMajorityIndex: 88,
    loudMinorityIndex: 28,
    recentNarrativeEdit: 'Hero Edit',
    votingTrajectory: 'Rising',
    tossTrend7d: [68, 70, 71, 73, 74, 75, 76],
    bio: 'Reigning superstar of Bhojpuri cinema with over 30+ blockbuster films. Commands enormous grassroots loyalty across Bihar, UP, and global regional diaspora. Completely untainted by urban bot PR networks.',
    pastDetails: 'Top grossing actress in Bhojpuri film industry history. Record holder for highest YouTube music video views (500M+ for multiple tracks) and former lead in Hindi television serials like Rehna Hai Teri Palkon Ki Chhaon Mein.',
    controversies: [
      'Bhojpuri film artists association internal disputes',
      'Political campaign controversies during state assembly elections'
    ],
    houseGameplay: 'The compassionate, unflinching maternal rock of the house. Cooks food for everyone, never engages in fake melodrama, speaks with grounded moral clarity, and commands deep respect from mature family viewers.',
    strongestMove: 'During the severe ration lockdown, she stood up against captaincy rationing, distributed equal portions to all factions, and shamed the house hoarders into returning stolen eggs.',
    hinglishProfile: {
      bio: 'Bhojpuri cinema ki superstar. Hindi heartland ka massive vote bank iske sath hai, jisse PR agencies touch bhi nahi kar sakti.',
      pastDetails: '30+ hit filmon ki heroine, YouTube pe 500M+ views wale songs aur Hindi serials ki popular lead.',
      controversies: [
        'Bhojpuri industry ke association aur co-actors ke sath differences',
        'Election campaigns mein speech controversies'
      ],
      houseGameplay: 'Ghar ki sabse grounded contestant. Sabke liye khana banati hai, faltu footage ke liye jhagda nahi karti aur sahi baat par seedha stand leti hai.',
      strongestMove: 'Ration lockout ke dauran chupke se ration hoard karne walon ko expose kiya aur sabke liye barabar khana prepare karwaya.'
    },
    detectedAstroturfPatterns: [
      'Virtually zero bot signature (<8%).',
      'Massive organic rural and tier-2 engagement on YouTube community polls.'
    ],
    platforms: {
      youtube: {
        sentiment: 90,
        organicRatio: 0.97,
        rawVolume: 76000,
        botCountEstimate: 800,
        sampleSources: ['Wave Music YouTube Polls', 'Regional audience reviews']
      },
      xTwitter: {
        sentiment: 58,
        organicRatio: 0.88,
        rawVolume: 34000,
        botCountEstimate: 1200,
        sampleSources: ['#AamrapaliDubey', '#BB20Bhojpuri']
      },
      instagram: {
        sentiment: 74,
        organicRatio: 0.92,
        rawVolume: 62000,
        botCountEstimate: 2100,
        sampleSources: ['@aamrapali1101 updates', 'Bhojpuri cinema fan pages']
      },
      threads: {
        sentiment: 65,
        organicRatio: 0.94,
        rawVolume: 7000,
        botCountEstimate: 150,
        sampleSources: ['threads.net/tag/AamrapaliDubey']
      },
      googleNews: {
        sentiment: 78,
        organicRatio: 0.96,
        rawVolume: 320,
        botCountEstimate: 6,
        sampleSources: ['Prabhat Khabar', 'Dainik Jagran Entertainment']
      }
    }
  },
  {
    id: 'c4',
    name: 'Aasif Khan',
    nickname: 'Babar',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Underdog',
    status: 'Active',
    isNominated: true,
    rawSentiment: 66,
    trueOrganicSentiment: 34,
    prInflationDelta: 32,
    prInfiltrationRate: 54,
    evictionRiskTier: 'High Danger',
    evictionProbability: 74,
    silentMajorityIndex: 21,
    loudMinorityIndex: 42,
    recentNarrativeEdit: 'Ghost Edit',
    votingTrajectory: 'Plummeting',
    tossTrend7d: [44, 41, 39, 37, 36, 35, 34],
    bio: 'Highly respected character actor from Panchayat, Mirzapur, and Jamtara. Refuses to stage artificial yelling matches for reality TV producers, resulting in minimal broadcast airtime ("Ghost Edit") and severe eviction vulnerability.',
    pastDetails: 'Trained theater artist from Rajasthan who struggled for a decade in Mumbai before breakthrough performances as Ganesh (Panchayat) and Babar (Mirzapur).',
    controversies: [
      'Completely controversy-free background, celebrated strictly for craft and performance discipline.'
    ],
    houseGameplay: 'Calm, observant, and respectful. However, his reluctance to shout or participate in manufactured romantic or conflict angles makes him almost invisible in the 1-hour episodic broadcast.',
    strongestMove: 'Delivered an electrifying, unscripted monologue during the Weekend Ka Vaar task deconstructing the fake masks worn by television stars for camera time.',
    hinglishProfile: {
      bio: 'Panchayat aur Mirzapur ka brilliant actor. Par Bigg Boss ke format mein ladai na karne ki wajah se screen time nahi mil raha.',
      pastDetails: 'Theatre artist jisne saalon struggle ke baad Mirzapur (Babar) aur Panchayat (Ganesh) se naam kamaya.',
      controversies: ['Zero controversies. Ekdum clean professional background.'],
      houseGameplay: 'Shant rehta hai, fake romantic angles ya choti choti baaton par chillata nahi hai. Issi wajah se Ghost Edit mil raha hai aur elimination risk high hai.',
      strongestMove: 'Weekend task pe TV actors ki fake reality personalities par zabardast speech di thi.'
    },
    detectedAstroturfPatterns: [
      'PR agency attempting automated tweets with #AasifDeservesBetter with repetitive wording.',
      'Low voting conversion despite high intellectual goodwill.'
    ],
    platforms: {
      youtube: {
        sentiment: 54,
        organicRatio: 0.86,
        rawVolume: 18000,
        botCountEstimate: 900,
        sampleSources: ['Panchayat clips comments', 'Episode reviews']
      },
      xTwitter: {
        sentiment: 81,
        organicRatio: 0.44,
        rawVolume: 52000,
        botCountEstimate: 24000,
        sampleSources: ['#AasifKhan', '#MirzapurInBB']
      },
      instagram: {
        sentiment: 62,
        organicRatio: 0.72,
        rawVolume: 29000,
        botCountEstimate: 5100,
        sampleSources: ['OTT fan clubs', 'Actor clips']
      },
      threads: {
        sentiment: 55,
        organicRatio: 0.89,
        rawVolume: 4200,
        botCountEstimate: 120,
        sampleSources: ['threads.net/tag/AasifKhan']
      },
      googleNews: {
        sentiment: 72,
        organicRatio: 0.94,
        rawVolume: 180,
        botCountEstimate: 5,
        sampleSources: ['Filmfare OTT News', 'Firstpost']
      }
    }
  },
  {
    id: 'c6',
    name: 'Qazi Touqeer',
    nickname: 'Fame Gurukul',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Polarizing',
    status: 'Active',
    isNominated: false,
    rawSentiment: 72,
    trueOrganicSentiment: 38,
    prInflationDelta: 34,
    prInfiltrationRate: 59,
    evictionRiskTier: 'Vocal Bubble / At Risk',
    evictionProbability: 4,
    silentMajorityIndex: 32,
    loudMinorityIndex: 82,
    recentNarrativeEdit: 'Villain Edit',
    votingTrajectory: 'Vocal Illusion',
    tossTrend7d: [55, 50, 46, 42, 40, 39, 38],
    bio: 'Winner of India’s seminal 2005 reality show Fame Gurukul. Lives in an intense nostalgic bubble, frequently reminding Gen-Z housemates that he once broke national SMS voting records 20 years ago.',
    pastDetails: 'Kashmir-born singer who became an overnight cultural phenomenon in 2005. Released chartbuster pop albums and later composed independent music.',
    controversies: [
      'Long career disappearance and public grievances against music directors',
      'Eccentric viral videos regarding television channel politics'
    ],
    houseGameplay: 'Constantly picks dramatic fights over grooming, mirrors, and senior respect. Clashes fiercely with Scout and Gullu because he cannot accept that esports gamers command more modern votes than 2000s singing stars.',
    strongestMove: 'Locked himself in the confession room during a captaincy tiebreaker, refusing to exit until Salman Khan agreed to address his vintage grievances.',
    hinglishProfile: {
      bio: '2005 Fame Gurukul ka winner. Vintage tashan dikhata hai aur Scout ke gaming fans se takra raha hai.',
      pastDetails: '20 saal pehle SMS voting ka record banaya tha. Pop music album release kiye the.',
      controversies: [
        'Music industry se gayab hone ke baad channels pe bias ke allegations',
        'Social media pe eccentric videos'
      ],
      houseGameplay: 'Ghar mein purani baatein repeat karta hai. Scout aur Gullu ke sath ego clashes karta hai kyunki unki new-age popularity se insecure feel karta hai.',
      strongestMove: 'Captaincy tie ke dauran bathroom area block karke dramatic protest kiya tha.'
    },
    detectedAstroturfPatterns: [
      'Coordinated quotes quoting old Fame Gurukul nostalgia clips.',
      'Batch tweet repetitions detected from 920 nostalgia fan accounts.'
    ],
    platforms: {
      youtube: {
        sentiment: 36,
        organicRatio: 0.78,
        rawVolume: 32000,
        botCountEstimate: 3100,
        sampleSources: ['Fame Gurukul Nostalgia clips', 'Episode comment debates']
      },
      xTwitter: {
        sentiment: 84,
        organicRatio: 0.41,
        rawVolume: 89000,
        botCountEstimate: 48000,
        sampleSources: ['#QaziTouqeer', '#VintageStarQazi']
      },
      instagram: {
        sentiment: 59,
        organicRatio: 0.65,
        rawVolume: 41000,
        botCountEstimate: 9800,
        sampleSources: ['Singing reels', 'Retro TV edits']
      },
      threads: {
        sentiment: 40,
        organicRatio: 0.88,
        rawVolume: 5100,
        botCountEstimate: 300,
        sampleSources: ['threads.net/tag/Qazi']
      },
      googleNews: {
        sentiment: 68,
        organicRatio: 0.91,
        rawVolume: 210,
        botCountEstimate: 8,
        sampleSources: ['Hindustan Times Nostalgia', 'Zee News']
      }
    }
  },
  {
    id: 'c9',
    name: 'Digvijay Rathee',
    nickname: 'Rathee',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Challenger',
    status: 'Active',
    isNominated: false,
    rawSentiment: 82,
    trueOrganicSentiment: 80,
    prInflationDelta: 2,
    prInfiltrationRate: 15,
    evictionRiskTier: 'Safe',
    evictionProbability: 4,
    silentMajorityIndex: 84,
    loudMinorityIndex: 72,
    recentNarrativeEdit: 'Hero Edit',
    votingTrajectory: 'Rising',
    tossTrend7d: [70, 72, 74, 77, 78, 79, 80],
    bio: 'Reality show veteran (Roadies, Splitsvilla X5) and tactical mastermind. Possesses deep understanding of reality television mechanics and fearlessly challenges house hierarchies.',
    pastDetails: 'Competitive youth icon, taekwondo practitioner, and fitness entrepreneur with an intense underground fandom across North India.',
    controversies: [
      'Explosive televised confrontation on Splitsvilla X5 finale',
      'Uncompromising podcast remarks exposing reality show production secrets'
    ],
    houseGameplay: 'Cold, calculative, and bold. Forms strategic voting blocks with Scout and exposes Arshifa’s crocodile tears in front of house cameras without blinking.',
    strongestMove: 'Solved the multi-step locked box immunity puzzle during the nomination task in 12 minutes, securing immunity for his entire faction.',
    hinglishProfile: {
      bio: 'Roadies aur Splitsvilla ka seasoned reality player. Dimag se khelta hai aur task strategy mein expert hai.',
      pastDetails: 'Splitsvilla X5 finalist aur fitness athlete jiske paas dedicated youth following hai.',
      controversies: ['Splitsvilla finale ka famous heated clash aur behind-the-scenes exposes.'],
      houseGameplay: 'Scout ke sath solid alliance banayi hai. Arshifa ke fake tears ko point blank expose karta hai.',
      strongestMove: '12 minute ke andar locked box puzzle solve karke apni alliance ko immunity dila di.'
    },
    detectedAstroturfPatterns: [
      'High organic youth engagement across Instagram and fitness YouTube forums.',
      'Low bot signature (<15%).'
    ],
    platforms: {
      youtube: {
        sentiment: 86,
        organicRatio: 0.92,
        rawVolume: 68000,
        botCountEstimate: 1400,
        sampleSources: ['Digvijay Vlogs', 'Task analysis clips']
      },
      xTwitter: {
        sentiment: 79,
        organicRatio: 0.84,
        rawVolume: 110000,
        botCountEstimate: 8000,
        sampleSources: ['#DigvijayRathee', '#DiggyArmy']
      },
      instagram: {
        sentiment: 84,
        organicRatio: 0.88,
        rawVolume: 130000,
        botCountEstimate: 6200,
        sampleSources: ['Fitness edits', 'Splitsvilla alumni support']
      },
      threads: {
        sentiment: 76,
        organicRatio: 0.90,
        rawVolume: 18000,
        botCountEstimate: 400,
        sampleSources: ['threads.net/tag/Digvijay']
      },
      googleNews: {
        sentiment: 74,
        organicRatio: 0.95,
        rawVolume: 290,
        botCountEstimate: 5,
        sampleSources: ['India TV', 'Times Now']
      }
    }
  },
  {
    id: 'c10',
    name: 'Kashish Kapoor',
    nickname: 'Kashish',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Polarizing',
    status: 'Active',
    isNominated: true,
    rawSentiment: 73,
    trueOrganicSentiment: 52,
    prInflationDelta: 21,
    prInfiltrationRate: 38,
    evictionRiskTier: 'Vocal Bubble / At Risk',
    evictionProbability: 48,
    silentMajorityIndex: 44,
    loudMinorityIndex: 86,
    recentNarrativeEdit: 'Neutral Edit',
    votingTrajectory: 'Stable',
    tossTrend7d: [58, 56, 54, 53, 52, 51, 52],
    bio: 'Unfiltered, razor-sharp reality star who rose to national fame on MTV Splitsvilla X5. Known for fierce independent comebacks, unapologetic ambition, and refusing to sugarcoat opinions.',
    pastDetails: 'Fashion model, debater, and youth influencer from Purnea (Bihar). Shot to internet stardom following her audacious decision during the Splitsvilla X5 finale.',
    controversies: [
      'The infamous ₹10 Lakh cash prize decision on Splitsvilla X5 that sparked intense national debate',
      'High-voltage podcast clashes regarding financial pragmatism in the entertainment industry'
    ],
    houseGameplay: 'Takes on anyone who acts diplomatic or entitled. Repeatedly spars with Kanika Mann regarding fake sugarcoated television personas, and laughs at Arshifa’s staged crying fits.',
    strongestMove: 'Demolished Kanika’s rehearsed arguments during the open house debate task, forcing Kanika into defensive silence.',
    hinglishProfile: {
      bio: 'Bina kisi filter ke bolne wali bold personality. Jo man mein aata hai muh pe bolti hai.',
      pastDetails: 'Splitsvilla X5 ki viral contestant jiska ₹10 lakh cash box move poore desh mein charcha mein tha.',
      controversies: ['Splitsvilla finale ka cash-box decision aur podcasts pe brutal honesty.'],
      houseGameplay: 'Kanika ke diplomatic sweet nature ko call out karti hai aur Arshifa ke rone-dhone par direct bolti hai.',
      strongestMove: 'House debate task mein Kanika ki PR favoritism ko live courtroom mein expose kiya.'
    },
    detectedAstroturfPatterns: [
      'High polarization: genuine ardent supporters countered by coordinated troll bot attacks.',
      'Loud minority index elevated due to meme discourse.'
    ],
    platforms: {
      youtube: {
        sentiment: 48,
        organicRatio: 0.81,
        rawVolume: 42000,
        botCountEstimate: 3600,
        sampleSources: ['Splitsvilla fan discussions', 'Weekly reviews']
      },
      xTwitter: {
        sentiment: 76,
        organicRatio: 0.62,
        rawVolume: 84000,
        botCountEstimate: 16000,
        sampleSources: ['#KashishKapoor', '#KashishInBB20']
      },
      instagram: {
        sentiment: 70,
        organicRatio: 0.74,
        rawVolume: 92000,
        botCountEstimate: 9800,
        sampleSources: ['Fashion reels', 'Spill the tea pages']
      },
      threads: {
        sentiment: 56,
        organicRatio: 0.86,
        rawVolume: 9400,
        botCountEstimate: 400,
        sampleSources: ['threads.net/tag/Kashish']
      },
      googleNews: {
        sentiment: 69,
        organicRatio: 0.92,
        rawVolume: 220,
        botCountEstimate: 6,
        sampleSources: ['Bollywood Hungama', 'NDTV Entertainment']
      }
    }
  },
  {
    id: 'c5',
    name: 'Love Gill',
    nickname: 'Gill Sahab',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Challenger',
    status: 'Active',
    isNominated: true,
    rawSentiment: 88,
    trueOrganicSentiment: 38,
    prInflationDelta: 50,
    prInfiltrationRate: 68,
    evictionRiskTier: 'Vocal Bubble / At Risk',
    evictionProbability: 62,
    silentMajorityIndex: 28,
    loudMinorityIndex: 96,
    recentNarrativeEdit: 'Neutral Edit',
    votingTrajectory: 'Vocal Illusion',
    tossTrend7d: [52, 48, 44, 41, 40, 39, 38],
    bio: 'Regional star with hyper-inflated social media bots. Displays intense aggression inside the house, but outside casual polling indicates almost zero voting intent beyond his paid Twitter hashtag ring.',
    pastDetails: 'Punjabi music video actor, fitness model, and bodybuilding competitor from Chandigarh.',
    controversies: [
      'Social media music rights clashes and copyright disputes in Chandigarh',
      'Gym altercations and physical brawl rumors'
    ],
    houseGameplay: 'Aggressive gym-bro persona. Talks loud during tasks but offers minimal strategic or entertainment substance, relying exclusively on his PR team’s hashtag automation.',
    strongestMove: 'Held a 120kg weight barbell for 45 minutes during the torture endurance task, earning the house their weekly grocery luxury budget.',
    hinglishProfile: {
      bio: 'Heavy PR bot inflation wala contestant. Twitter pe #LoveGillForTheWin trend karwaya hua hai par votes mein bohot peeche hai.',
      pastDetails: 'Punjabi music videos ka star aur bodybuilding champion.',
      controversies: ['Chandigarh gym lafde aur social media disputes.'],
      houseGameplay: 'Bas workout karta hai aur bina baat ke chest pump karke argument mein ghusta hai. Ground vote conversion bohot kam hai.',
      strongestMove: '120kg weight barbell 45 minutes hold karke ration budget jeeta tha.'
    },
    detectedAstroturfPatterns: [
      'Over 60% PR inflation delta on Twitter via automated quote tweet swarms.',
      'Near-identical comments detected across 4,800 suspicious accounts.'
    ],
    platforms: {
      youtube: {
        sentiment: 34,
        organicRatio: 0.72,
        rawVolume: 38000,
        botCountEstimate: 4200,
        sampleSources: ['BB Review Polls (Bottom tier ranking)']
      },
      xTwitter: {
        sentiment: 95,
        organicRatio: 0.32,
        rawVolume: 260000,
        botCountEstimate: 172000,
        sampleSources: ['#LoveGillForTheWin', 'Paid Bot Clusters']
      },
      instagram: {
        sentiment: 74,
        organicRatio: 0.54,
        rawVolume: 85000,
        botCountEstimate: 34000,
        sampleSources: ['Fitness pages', 'Promotional reels']
      },
      threads: {
        sentiment: 42,
        organicRatio: 0.82,
        rawVolume: 8800,
        botCountEstimate: 600,
        sampleSources: ['threads.net/tag/LoveGill']
      },
      googleNews: {
        sentiment: 65,
        organicRatio: 0.90,
        rawVolume: 190,
        botCountEstimate: 7,
        sampleSources: ['PTC Punjabi', 'Tribune India']
      }
    }
  },

  // EVICTED CONTESTANTS (Week 1 to Week 4)
  {
    id: 'c11',
    name: 'Neelam Giri',
    nickname: 'Neelam',
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Underdog',
    status: 'Evicted',
    isNominated: false,
    evictionWeek: 4,
    rawSentiment: 52,
    trueOrganicSentiment: 33,
    prInflationDelta: 19,
    prInfiltrationRate: 34,
    evictionRiskTier: 'High Danger',
    evictionProbability: 95,
    silentMajorityIndex: 22,
    loudMinorityIndex: 30,
    recentNarrativeEdit: 'Ghost Edit',
    votingTrajectory: 'Plummeting',
    tossTrend7d: [42, 39, 37, 35, 34, 33, 33],
    bio: 'Popular Bhojpuri actress and dancer. Evicted in Week 4 after falling victim to the classic "Ghost Edit" in Aamrapali Dubey’s shadow.',
    pastDetails: 'Leading Bhojpuri film actress, known for energetic stage performances and hit music videos.',
    controversies: ['Industry dance contract disputes and royalty arguments.'],
    houseGameplay: 'Stayed quiet and remained mostly confined to kitchen prep. Failed to build an independent identity separate from Aamrapali Dubey.',
    strongestMove: 'Won the folk dance cultural challenge in Week 2, earning immunity for her entire bedroom.',
    hinglishProfile: {
      bio: 'Bhojpuri actress jo Week 4 mein eliminate ho gayi. Aamrapali ke shadow mein dab gayi aur screen time nahi mila.',
      pastDetails: 'Bhojpuri film heroine aur folk dancer.',
      controversies: ['Stage shows ke royalty disputes.'],
      houseGameplay: 'Shant rehti thi, footage ke liye kuch nahi kiya. Week 4 mein low votes ki wajah se bahar ho gayi.',
      strongestMove: 'Week 2 folk dance challenge jeet kar bedroom immunity earn ki thi.'
    },
    detectedAstroturfPatterns: ['Low engagement volume, zero bot defense.'],
    platforms: {
      youtube: { sentiment: 42, organicRatio: 0.88, rawVolume: 14000, botCountEstimate: 400 },
      xTwitter: { sentiment: 49, organicRatio: 0.65, rawVolume: 19000, botCountEstimate: 3200 },
      instagram: { sentiment: 58, organicRatio: 0.82, rawVolume: 31000, botCountEstimate: 2100 },
      threads: { sentiment: 45, organicRatio: 0.90, rawVolume: 2400, botCountEstimate: 80 },
      googleNews: { sentiment: 60, organicRatio: 0.95, rawVolume: 80, botCountEstimate: 2 }
    }
  },
  {
    id: 'c12',
    name: 'Baseer Ali',
    nickname: 'Baseer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Challenger',
    status: 'Evicted',
    isNominated: false,
    evictionWeek: 3,
    rawSentiment: 82,
    trueOrganicSentiment: 39,
    prInflationDelta: 43,
    prInfiltrationRate: 58,
    evictionRiskTier: 'High Danger',
    evictionProbability: 95,
    silentMajorityIndex: 26,
    loudMinorityIndex: 92,
    recentNarrativeEdit: 'Villain Edit',
    votingTrajectory: 'Plummeting',
    tossTrend7d: [64, 58, 52, 47, 43, 40, 39],
    bio: 'Reality veteran (Roadies Rising, Splitsvilla 10 winner, Kundali Bhagya). Evicted in Week 3 following acute physical task aggression and public backlash.',
    pastDetails: 'Hyderabad-born fitness model, basketball player, and seasoned MTV reality show star.',
    controversies: [
      'Frequent reality show physical brawls and rule violations across previous shows',
      'On-set conflicts with television production crew'
    ],
    houseGameplay: 'Hyper-aggressive alpha posture. Clashed with Scout and Digvijay over kitchen captaincy, kicked furniture during an argument, and alienated family viewers.',
    strongestMove: 'Single-handedly held the ration sack for 3 hours against three housemates in Week 1.',
    hinglishProfile: {
      bio: 'Reality show veteran jo Week 3 mein physical task aggression aur rule break ki wajah se eliminate hua.',
      pastDetails: 'Splitsvilla 10 ka winner aur Roadies finalist.',
      controversies: ['Reality shows pe physical fights aur aggression ka history.'],
      houseGameplay: 'Har mudde pe over-aggressive ho jata tha. Furniture todne aur chillane ki wajah se janta ne reject kar diya.',
      strongestMove: 'Week 1 mein 3 ghante tak akele ration sack hold karke task jeeta tha.'
    },
    detectedAstroturfPatterns: [
      'Massive PR hashtag push #BaseerRulesBB that failed to convert into actual votes.'
    ],
    platforms: {
      youtube: { sentiment: 28, organicRatio: 0.82, rawVolume: 39000, botCountEstimate: 2100 },
      xTwitter: { sentiment: 88, organicRatio: 0.38, rawVolume: 140000, botCountEstimate: 82000 },
      instagram: { sentiment: 68, organicRatio: 0.62, rawVolume: 74000, botCountEstimate: 21000 },
      threads: { sentiment: 35, organicRatio: 0.85, rawVolume: 6200, botCountEstimate: 300 },
      googleNews: { sentiment: 62, organicRatio: 0.92, rawVolume: 210, botCountEstimate: 6 }
    }
  },
  {
    id: 'c13',
    name: 'Shehbaz Badesha',
    nickname: 'Shehbaz',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Underdog',
    status: 'Evicted',
    isNominated: false,
    evictionWeek: 2,
    rawSentiment: 48,
    trueOrganicSentiment: 31,
    prInflationDelta: 17,
    prInfiltrationRate: 28,
    evictionRiskTier: 'High Danger',
    evictionProbability: 95,
    silentMajorityIndex: 19,
    loudMinorityIndex: 38,
    recentNarrativeEdit: 'Neutral Edit',
    votingTrajectory: 'Plummeting',
    tossTrend7d: [48, 44, 40, 36, 34, 32, 31],
    bio: 'Punjabi content creator and entertainer. Evicted in Week 2 after audience fatigue set in over repetitive, derivative comedy gags.',
    pastDetails: 'Digital entertainer, singer, and brother of Bigg Boss 13 sensation Shehnaaz Gill.',
    controversies: ['Accusations of copying previous contestants’ behavioral mannerisms and jokes.'],
    houseGameplay: 'Attempted to play the comic relief role, but viewers perceived his gags as forced, leading to bottom-ranking public votes.',
    strongestMove: 'Created a hilarious roast routine about the bathroom queue that diffused household tension on Day 9.',
    hinglishProfile: {
      bio: 'Shehnaaz Gill ka brother jo Week 2 mein eliminate hua. Forced comedy ki wajah se audience bore ho gayi.',
      pastDetails: 'Punjabi music video artist aur comedy content creator.',
      controversies: ['Purane seasons ke comedy routines copy karne ka arop.'],
      houseGameplay: 'Zabardasti hasane ki koshish karta tha, game mein koi independent stand nahi liya.',
      strongestMove: 'Day 9 pe bathroom queue par roast karke ghar ke tension ko thoda light kiya tha.'
    },
    detectedAstroturfPatterns: ['Low overall engagement, minimal organic momentum.'],
    platforms: {
      youtube: { sentiment: 35, organicRatio: 0.86, rawVolume: 22000, botCountEstimate: 1200 },
      xTwitter: { sentiment: 58, organicRatio: 0.58, rawVolume: 32000, botCountEstimate: 9800 },
      instagram: { sentiment: 61, organicRatio: 0.70, rawVolume: 42000, botCountEstimate: 8400 },
      threads: { sentiment: 40, organicRatio: 0.88, rawVolume: 3100, botCountEstimate: 120 },
      googleNews: { sentiment: 54, organicRatio: 0.94, rawVolume: 95, botCountEstimate: 3 }
    }
  },
  {
    id: 'c14',
    name: 'Muskan Sharma',
    nickname: 'Muskan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    role: 'Underdog',
    status: 'Evicted',
    isNominated: false,
    evictionWeek: 1,
    rawSentiment: 62,
    trueOrganicSentiment: 24,
    prInflationDelta: 38,
    prInfiltrationRate: 52,
    evictionRiskTier: 'High Danger',
    evictionProbability: 95,
    silentMajorityIndex: 12,
    loudMinorityIndex: 68,
    recentNarrativeEdit: 'Ghost Edit',
    votingTrajectory: 'Plummeting',
    tossTrend7d: [50, 42, 35, 30, 27, 25, 24],
    bio: 'Social media influencer with 8M+ short-video followers. First casualty of Bigg Boss 20, proving that vanity followers rarely convert into active voting portal support.',
    pastDetails: 'Viral content creator and short-form video actress with massive teenage following.',
    controversies: ['Creator agency contractual battles and lip-sync video plagiarism claims.'],
    houseGameplay: 'Overwhelmed by high-intensity television cameras. Remained completely silent during Week 1 nominations.',
    strongestMove: 'Successfully performed the ice-bucket endurance nomination challenge on Day 3.',
    hinglishProfile: {
      bio: 'Instagram reels creator jo pehle hi hafte mein bahar ho gayi. 8M followers the par voting portal pe koi vote nahi mila.',
      pastDetails: 'Popular social media short-video actress.',
      controversies: ['Agency contract disputes aur online creator lafde.'],
      houseGameplay: 'Ghar ke shor aur arguments se dar gayi, pehle week mein bilkul silent rahi.',
      strongestMove: 'Day 3 pe ice-bucket challenge calmly complete kiya tha.'
    },
    detectedAstroturfPatterns: [
      'Huge follower illusion: 8M Instagram followers yielding negligible votes.'
    ],
    platforms: {
      youtube: { sentiment: 21, organicRatio: 0.84, rawVolume: 16000, botCountEstimate: 800 },
      xTwitter: { sentiment: 66, organicRatio: 0.35, rawVolume: 28000, botCountEstimate: 16000 },
      instagram: { sentiment: 68, organicRatio: 0.52, rawVolume: 64000, botCountEstimate: 28000 },
      threads: { sentiment: 30, organicRatio: 0.82, rawVolume: 2100, botCountEstimate: 110 },
      googleNews: { sentiment: 52, organicRatio: 0.92, rawVolume: 65, botCountEstimate: 2 }
    }
  }
];

// Chronological timeline of evicted contestants from Week 1 to Current
export const EVICTED_CONTESTANTS_TIMELINE: EvictedContestantTimelineItem[] = [
  {
    week: 1,
    weekLabel: 'Week 1 Eviction',
    evictionDate: 'Day 7 · October 7, 2026',
    contestantId: 'c14',
    name: 'Muskan Sharma',
    nickname: 'Muskan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    daysInHouse: 7,
    finalTossScore: 24,
    finalPrDelta: +38,
    evictionReason: 'Classic Social Media Vanity Trap: 8 Million Instagram followers failed to cast active votes on the official JioHotstar portal. Overwhelmed by television cameras and stayed completely invisible in house debates.',
    prVsOrganicCollapse: 'High PR inflation (+38%) masked zero organic casual vote bank. Eliminated with only 3.2% of public vote share.',
    headlineQuote: '"Followers don’t vote — active viewers vote."',
    hinglishReason: 'Instagram ke 8M followers JioHotstar voting portal tak nahi pahuche. Ghar ke arguments mein bilkul invisible rahi aur pehle hi hafte bahar ho gayi.',
    hinglishHeadline: '"Followers se Bigg Boss nahi jeeta jaata, asli janta ke votes chahiye."'
  },
  {
    week: 2,
    weekLabel: 'Week 2 Eviction',
    evictionDate: 'Day 14 · October 14, 2026',
    contestantId: 'c13',
    name: 'Shehbaz Badesha',
    nickname: 'Shehbaz',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200&q=80',
    daysInHouse: 14,
    finalTossScore: 31,
    finalPrDelta: +17,
    evictionReason: 'Forced Comedy & Audience Fatigue: Repetitive humor and derivative comedy sketches alienated casual spectators who wanted authentic gameplay rather than rehearsed routines.',
    prVsOrganicCollapse: 'Organic YouTube sentiment fell to 35% after family viewers rejected forced bedroom gags. Trailed bottom 2 by 45,000 votes.',
    headlineQuote: '"Zabardasti ki comedy audience ko connect nahi kar paayi."',
    hinglishReason: 'Purane seasons ke jokes repeat karne se audience bore ho gayi. Muddo par koi independent stand nahi liya aur elimination mein drop ho gaye.',
    hinglishHeadline: '"Scripted gags nahi chale, audience ko original game chahiye tha."'
  },
  {
    week: 3,
    weekLabel: 'Week 3 Eviction',
    evictionDate: 'Day 21 · October 21, 2026',
    contestantId: 'c12',
    name: 'Baseer Ali',
    nickname: 'Baseer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    daysInHouse: 21,
    finalTossScore: 39,
    finalPrDelta: +43,
    evictionReason: 'Hyper-Aggression & Physical Task Breach: Overreacted during the ration nomination challenge, damaged living room furniture, and alienated core family viewership despite heavy Twitter PR backing.',
    prVsOrganicCollapse: 'Massive Twitter PR surge (#BaseerRulesBB) masked an organic YouTube collapse (28% sentiment). Salman Khan rebuked his conduct on Weekend Ka Vaar.',
    headlineQuote: '"Physical intimidation is no longer rewarded by modern reality TV audiences."',
    hinglishReason: 'Ration task mein furniture todne aur aggressive physical posture ki wajah se janta ne reject kar diya. Heavy Twitter PR bhi use bacha nahi paayi.',
    hinglishHeadline: '"Gussa aur chillam-chilli game nahi hota."'
  },
  {
    week: 4,
    weekLabel: 'Week 4 Eviction',
    evictionDate: 'Day 28 · October 28, 2026',
    contestantId: 'c11',
    name: 'Neelam Giri',
    nickname: 'Neelam',
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=200&h=200&q=80',
    daysInHouse: 28,
    finalTossScore: 33,
    finalPrDelta: +19,
    evictionReason: 'The Ghost Edit Trap: Subsumed under Aamrapali Dubey’s massive regional shadow. Received less than 8 minutes of broadcast airtime in her final week, leading to quiet elimination.',
    prVsOrganicCollapse: 'Lacked conflict or leadership narrative; regional votes gravitated entirely toward Aamrapali Dubey, leaving Neelam in the bottom danger zone.',
    headlineQuote: '"Invisibility is more fatal in Bigg Boss than outright controversy."',
    hinglishReason: 'Aamrapali Dubey ke shadow mein reh gayi aur episode edit mein screen time nahi mila. Inactive rehne ki wajah se Week 4 mein drop ho gayi.',
    hinglishHeadline: '"Show mein dikhna zaroori hai, chup baithne se eviction pakka hai."'
  }
];

export const ASTROTURF_CLUSTERS: AstroturfCluster[] = [
  {
    id: 'cluster-1',
    contestantId: 'c2',
    contestantName: 'Kanika Mann',
    templatePhrase: 'Kanika Mann is playing with pure grace and dignity, sole deserving winner of BB20 #KanikaArmy',
    variations: [
      'Kanika Mann is playing with 100% grace and dignity, sole deserving winner #KanikaArmy',
      'Look how composed Kanika stayed today, undisputed queen of BB20 #KanikaMann',
      'Pure dignity, pure grace! Kanika Mann is the real winner of Bigg Boss 20 #KanikaArmy',
      'No one can match Kanika grace and dignity under pressure #KanikaMann #KanikaArmy'
    ],
    occurrences: 4820,
    similarityScore: 0.94,
    accountVelocity: '124 accounts / 60 seconds',
    primarySource: 'X (Twitter)',
    accountAgeMedianDays: 8,
    bipartiteRingId: 'ring-1',
    status: 'Sanitized & Discounted'
  },
  {
    id: 'cluster-2',
    contestantId: 'c8',
    contestantName: 'Arshifa Khan',
    templatePhrase: 'Stop bullying Arshifa Khan! She is fighting alone against the whole house #StandWithArshifa',
    variations: [
      'Look at Scout and Gullu ganging up on poor Arshifa, she is so strong #StandWithArshifa',
      'Arshifa cried today because housemates are jealous of her 28M followers #ArshifaArmy',
      'Queen Arshifa fighting the entire house alone with courage #StandWithArshifa #BB20'
    ],
    occurrences: 3950,
    similarityScore: 0.91,
    accountVelocity: '96 accounts / 90 seconds',
    primarySource: 'Instagram',
    accountAgeMedianDays: 11,
    bipartiteRingId: 'ring-3',
    status: 'Sanitized & Discounted'
  },
  {
    id: 'cluster-3',
    contestantId: 'c5',
    contestantName: 'Love Gill',
    templatePhrase: 'Real munda Love Gill dominating the house! Sher hamesha akela chalta hai #LoveGillForTheWin',
    variations: [
      'Real munda Love Gill dominating all tasks! Sher hamesha akela chalta hai #LoveGill',
      'Nobody has physical strength like Love Gill in Bigg Boss 20 #LoveGillForTheWin',
      'Punjab ka sher Love Gill unstoppable in BB20 #LoveGillForTheWin'
    ],
    occurrences: 5120,
    similarityScore: 0.92,
    accountVelocity: '142 accounts / 90 seconds',
    primarySource: 'X (Twitter)',
    accountAgeMedianDays: 6,
    bipartiteRingId: 'ring-1',
    status: 'Sanitized & Discounted'
  },
  {
    id: 'cluster-4',
    contestantId: 'c6',
    contestantName: 'Qazi Touqeer',
    templatePhrase: '20 saal baad bhi Qazi Touqeer wahi rockstar hai! Real SMS voting king of India #QaziTouqeer',
    variations: [
      'Qazi Touqeer is bringing back authentic 2005 Fame Gurukul vibes to BB20 #QaziTouqeer',
      'True talent never fades! Qazi Touqeer is the heartbeat of Bigg Boss 20 #QaziRockstar'
    ],
    occurrences: 1420,
    similarityScore: 0.88,
    accountVelocity: '38 accounts / 120 seconds',
    primarySource: 'X (Twitter)',
    accountAgeMedianDays: 14,
    bipartiteRingId: 'ring-2',
    status: 'Sanitized & Discounted'
  }
];

export const BIPARTITE_NODES: BipartiteNetworkNode[] = [
  { id: 'ring-1', label: 'Celebrity PR Cluster Matrix (2.2k bot profiles)', type: 'pr_agency', volume: 84000, riskWeight: 0.94 },
  { id: 'ring-2', label: 'Vintage TV Fandom Exchange (920 accounts)', type: 'pr_agency', volume: 38000, riskWeight: 0.85 },
  { id: 'ring-3', label: 'Short-Form Creator Viral Farm (1.8k bot profiles)', type: 'account_cluster', volume: 72000, riskWeight: 0.88 },
  { id: 'ring-4', label: 'Verified Indian Esports Community (38k organic gamers)', type: 'account_cluster', volume: 165000, riskWeight: 0.08 },
  { id: 'ring-5', label: 'Bhojpuri Heartland Family Fandom (54k organic voters)', type: 'account_cluster', volume: 142000, riskWeight: 0.06 },
  { id: 'c1', label: 'Scout (Tanmay Singh)', type: 'contestant', volume: 210000, riskWeight: 0.12 },
  { id: 'c2', label: 'Kanika Mann', type: 'contestant', volume: 245000, riskWeight: 0.61 },
  { id: 'c8', label: 'Arshifa Khan', type: 'contestant', volume: 220000, riskWeight: 0.72 },
  { id: 'c7', label: 'Gullu (Gaurav)', type: 'contestant', volume: 51000, riskWeight: 0.14 },
  { id: 'c3', label: 'Aamrapali Dubey', type: 'contestant', volume: 76000, riskWeight: 0.08 },
  { id: 'c4', label: 'Aasif Khan', type: 'contestant', volume: 38000, riskWeight: 0.54 },
  { id: 'c6', label: 'Qazi Touqeer', type: 'contestant', volume: 89000, riskWeight: 0.59 }
];

export const BIPARTITE_LINKS: BipartiteNetworkLink[] = [
  { source: 'ring-1', target: 'c2', weight: 68000, isAstroturf: true },
  { source: 'ring-3', target: 'c8', weight: 72000, isAstroturf: true },
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
        contestantId: 'c8',
        contestantName: 'Arshifa Khan',
        editType: 'Villain Edit',
        airtimeMinutes: 24,
        intendedPerception: 'Constant instigator picking petty arguments over kitchen chores and resorting to performative crying when exposed.',
        organicPublicVerdict: 'Severe backlash on YouTube comments; viewers called out her victim card strategy and rage-bait entrapment.',
        receptionDelta: -44
      },
      {
        contestantId: 'c2',
        contestantName: 'Kanika Mann',
        editType: 'Hero Edit',
        airtimeMinutes: 22,
        intendedPerception: 'Composed, elegant actress caught in the crossfire of aggressive housemate politics.',
        organicPublicVerdict: 'High skepticism in casual community polls; viewers highlighted her diplomatic avoidance of kitchen work.',
        receptionDelta: -28
      },
      {
        contestantId: 'c7',
        contestantName: 'Gullu (Gaurav)',
        editType: 'Hero Edit',
        airtimeMinutes: 18,
        intendedPerception: 'Sharp, comedic voice of reason exposing fake behavior with effortless humor.',
        organicPublicVerdict: 'High organic acclaim; widely celebrated across Instagram Reels and Reddit for disarming Arshifa’s tantrums.',
        receptionDelta: +26
      },
      {
        contestantId: 'c3',
        contestantName: 'Aamrapali Dubey',
        editType: 'Hero Edit',
        airtimeMinutes: 14,
        intendedPerception: 'Grounded, maternal pillar who refused to take part in petty food hoarding.',
        organicPublicVerdict: 'Solid support across family audience polls on YouTube and regional media.',
        receptionDelta: +19
      },
      {
        contestantId: 'c4',
        contestantName: 'Aasif Khan',
        editType: 'Ghost Edit',
        airtimeMinutes: 5,
        intendedPerception: 'Passive, quiet spectator detached from the high-voltage house dynamics.',
        organicPublicVerdict: 'Sympathy from cinema buffs but near-zero casual voting traction.',
        receptionDelta: -16
      }
    ],
    conflictPairs: [],
    organicDriftSummary: 'Scout and Gullu generated massive authentic goodwill by staying calm while Arshifa’s crying routine met severe audience rejection.'
  }
];

export const SOURCE_PROVENANCE_CATALOG: SourceProvenanceItem[] = [
  {
    platform: 'YouTube',
    icon: 'Youtube',
    description: 'Mass market casual audience consensus. Long-form video comments, like-to-view ratios, and independent verified review polls (weighted at 35%).',
    samplingMethodology: 'Daily scraping of 12 verified entertainment news channels and official Colors TV / JioHotstar episode cut comment sections (>80k comments daily).',
    prRiskProfile: 'Low PR infiltration (<12%). High authentic consumer sentiment representing the silent majority of weekly voters.',
    verifiedFeedsAndHandles: [
      { name: 'Colors TV Official Channel', identifier: '@ColorsTV', role: 'Official Broadcast Feed', estimatedDailyVolume: '140,000+ comments' },
      { name: 'FIFAFOOZ Reviews & Live Polls', identifier: '@FIFAFOOZ', role: 'Verified Community Reviewer', estimatedDailyVolume: '65,000+ votes/day' },
      { name: 'The Khabri Official Discussions', identifier: '@TheKhabriTube', role: 'Insider Reality Analysis', estimatedDailyVolume: '35,000+ interactions' }
    ]
  },
  {
    platform: 'X (Twitter)',
    icon: 'Twitter',
    description: 'Real-time velocity and fandom wars. Heavily subjected to PR bot farm amplification and purchased trending hashtags (weighted at 20%).',
    samplingMethodology: 'Streaming API tracking top 10 show hashtags (#BB20, #WeekendKaVaar, contestant names) with MinHash deduplication to isolate automated quote clusters.',
    prRiskProfile: 'Critical PR infiltration (45% - 75%). High prevalence of freshly created accounts (<14 days old) deploying synchronized template phrasing.',
    verifiedFeedsAndHandles: [
      { name: 'The Khabri', identifier: '@TheKhabriTweets', role: 'Primary Insider Leak & Poll Portal', estimatedDailyVolume: '280,000+ impressions' },
      { name: '#BB20 Official Trend Hub', identifier: '#BiggBoss20', role: 'Real-time Discourse Hashtag', estimatedDailyVolume: '450,000+ tweets' },
      { name: 'Bigg Boss Khabri Official', identifier: '@BBKhabriLive', role: 'Verified Fan Poll Tracker', estimatedDailyVolume: '110,000+ votes' }
    ]
  },
  {
    platform: 'Instagram',
    icon: 'Instagram',
    description: 'Visual fandom reels, contestant agency marketing, and lifestyle commentary (weighted at 15%).',
    samplingMethodology: 'Monitoring top 50 reality fan pages, official contestant reels, and broadcast snippet engagement metrics.',
    prRiskProfile: 'Moderate-to-High PR risk (35% - 55%). Heavy deployment of comment pod networks and verified creator cross-promotions.',
    verifiedFeedsAndHandles: [
      { name: 'ColorsTV Official Instagram', identifier: '@colorstv', role: 'Official Media Host', estimatedDailyVolume: '95,000+ comments' },
      { name: 'JioHotstar Reality Stream', identifier: '@jiohotstar', role: '24/7 Live Stream Host', estimatedDailyVolume: '60,000+ interactions' },
      { name: 'Bigg Boss Khabri Official', identifier: '@biggbosskhabri', role: 'Leading Instagram Fandom Page', estimatedDailyVolume: '45,000+ comments' }
    ]
  },
  {
    platform: 'Threads',
    icon: 'MessageSquare',
    description: 'Meta microblogging platform featuring organic conversational takes and casual viewer episode critiques (weighted at 15%).',
    samplingMethodology: 'Scraping topical threads tagged #BB20, #BiggBoss, and contestant handles.',
    prRiskProfile: 'Low PR risk (<15%). Lower bot automation infrastructure on Threads yields natural human discourse and healthy sarcasm.',
    verifiedFeedsAndHandles: [
      { name: 'BB20 Conversations Hub', identifier: 'threads.net/tag/BB20', role: 'Conversational Aggregator', estimatedDailyVolume: '18,000+ posts' },
      { name: 'Indian Reality TV Forum', identifier: 'threads.net/tag/BiggBossHindi', role: 'Organic Viewer Debates', estimatedDailyVolume: '12,000+ posts' }
    ]
  },
  {
    platform: 'Google News & Media',
    icon: 'Globe',
    description: 'Mainstream journalistic reporting, press releases, and editorial post-episode breakdowns (weighted at 15%).',
    samplingMethodology: 'Google News RSS aggregator tracking 25 mainstream Indian digital newsrooms covering reality entertainment.',
    prRiskProfile: 'Low-to-Medium PR risk (20%). Distinguishes organic investigative reporting from syndicated PR press releases.',
    verifiedFeedsAndHandles: [
      { name: 'The Indian Express Entertainment', identifier: 'indianexpress.com/entertainment', role: 'Mainstream National Daily', estimatedDailyVolume: '12+ daily articles' },
      { name: 'Hindustan Times Bigg Boss Live', identifier: 'hindustantimes.com/entertainment', role: 'Live Episode Breakdown Desk', estimatedDailyVolume: '15+ daily updates' },
      { name: 'India Today Television', identifier: 'indiatoday.in/television', role: 'Editorial Verdicts & Video Interviews', estimatedDailyVolume: '8+ analytical articles' }
    ]
  }
];
