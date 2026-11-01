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
    "id": "c1",
    "name": "Tanmay Singh (Scout)",
    "nickname": "ScoutOP",
    "avatar": "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Frontrunner",
    "status": "Active",
    "isNominated": true,
    "rawSentiment": 85,
    "trueOrganicSentiment": 87,
    "prInflationDelta": -2,
    "prInfiltrationRate": 11,
    "evictionRiskTier": "Safe",
    "evictionProbability": 7,
    "silentMajorityIndex": 93,
    "loudMinorityIndex": 71,
    "recentNarrativeEdit": "Hero Edit",
    "votingTrajectory": "Rising",
    "tossTrend7d": [
      79,
      81,
      83,
      82,
      85,
      86,
      87
    ],
    "bio": "India’s premier esports athlete and digital creator. Commands massive, highly organized grassroots vote banks on YouTube and gaming communities. Anchors the youth viewership of Bigg Boss 20.",
    "pastDetails": "Pioneer of Indian competitive esports, international PUBG Mobile competitor, owner of Team XSpark with over 5M+ YouTube subscribers. Known across the subcontinent for laser-sharp reflex aiming and loyal Gen-Z backing.",
    "controversies": [
      "Heated livestreams verbal clashes during early competitive tournaments (2019-2020)",
      "High-profile esports roster split and transfer disputes with rival gaming orgs"
    ],
    "houseGameplay": "Playing with stoic maturity and psychological calm. Executes tasks with athletic discipline, refuses to indulge in theatrical kitchen screaming, and easily disarms loud housemates (like Arshifa) by smiling through their calculated tantrums.",
    "strongestMove": "In the Tathas-two Immunity Task, defended the immunity shield single-handedly without retaliating physically, outlasting provocations from Qazi and Arshifa while calmly pointing out rule breaches.",
    "hinglishProfile": {
      "bio": "India ka premier esports athlete aur streamer. YouTube aur gaming public ka sabse bada vote bank leke baitha hai.",
      "pastDetails": "Team XSpark ka founder aur international esports champion. Gaming streams pe millions of live viewers aate the.",
      "controversies": [
        "Purane gaming livestreams pe aggressive toxic rants",
        "Rival teams ke saath tournament roster lafde"
      ],
      "houseGameplay": "Ekdum zen mode mein khel raha hai. Arshifa aur Qazi jab gussa dilane aate hain toh ye bina aawaz badhaye unhe smile karke rage-bait kar deta hai.",
      "strongestMove": "Tathas-two immunity task mein akele shield pakad kar Arshifa aur Qazi ke attacks ko neutralize kiya aur team ko immunity dilayi."
    },
    "profession": [
      "Esports Athlete",
      "Digital Content Creator",
      "Gaming Entrepreneur"
    ],
    "careerCredits": [
      "PUBG Mobile Star Challenge World Finals",
      "BGIS Championship Winner",
      "Founder of Team XSpark (5M+ YouTube)"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "YouTube",
        "handle": "@scoutop",
        "url": "https://www.youtube.com/@scoutop",
        "followerCount": "4.95M"
      },
      {
        "platform": "Instagram",
        "handle": "@scout_op",
        "url": "https://www.instagram.com/scout_op",
        "followerCount": "3.6M"
      },
      {
        "platform": "X (Twitter)",
        "handle": "@scout_tanmay",
        "url": "https://x.com/scout_tanmay",
        "followerCount": "480K"
      }
    ],
    "statusVerifiedAt": "2026-11-01T12:00:00+05:30",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "The Indian Express BB20 Coverage",
        "url": "https://indianexpress.com/section/entertainment/",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T09:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Heated competitive livestreams clash",
        "classification": "Direct Quote",
        "detail": "Early esports tournament streams (2019-2020) featured heated verbal clashes with rival org captains.",
        "sourceUrl": "https://indianexpress.com/section/entertainment/",
        "sourceName": "The Indian Express / Esports Archives",
        "verifiedAt": "2026-10-15T14:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Tathas-two Task Shield Defense",
        "classification": "On-Screen House Event",
        "detail": "Defended immunity shield against Arshifa and Qazi without physical retaliation; validated by Salman Khan on Weekend Ka Vaar.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 26 Broadcast",
        "verifiedAt": "2026-10-26T22:00:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "High lexical diversity across gaming forums and Discord channels (<11% bot signature).",
      "Targeted by rival PR smear rings with coordinated copy-paste complaints after the Tathas-two task."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 93,
        "organicRatio": 0.96,
        "rawVolume": 88000,
        "botCountEstimate": 1100,
        "sampleSources": [
          "Colors TV YouTube Clips",
          "FIFAFOOZ Daily Polls (45k votes)",
          "Scout Gaming Community"
        ]
      },
      "xTwitter": {
        "sentiment": 79,
        "organicRatio": 0.83,
        "rawVolume": 220000,
        "botCountEstimate": 13500,
        "sampleSources": [
          "#ScoutOP",
          "#BB20",
          "@TheKhabriTweets Polls"
        ]
      },
      "instagram": {
        "sentiment": 87,
        "organicRatio": 0.89,
        "rawVolume": 175000,
        "botCountEstimate": 11000,
        "sampleSources": [
          "@scout_op reels",
          "Esports community edits"
        ]
      },
      "threads": {
        "sentiment": 84,
        "organicRatio": 0.92,
        "rawVolume": 32000,
        "botCountEstimate": 800,
        "sampleSources": [
          "Gaming Community Threads",
          "Meta Reality Discussions"
        ]
      },
      "googleNews": {
        "sentiment": 88,
        "organicRatio": 0.98,
        "rawVolume": 14500,
        "botCountEstimate": 90,
        "sampleSources": [
          "The Indian Express",
          "Times of India Sports/TV"
        ]
      }
    }
  },
  {
    "id": "c2",
    "name": "Kanika Mann",
    "nickname": "Kanika",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Challenger",
    "status": "Active",
    "isNominated": true,
    "rawSentiment": 77,
    "trueOrganicSentiment": 64,
    "prInflationDelta": 13,
    "prInfiltrationRate": 38,
    "evictionRiskTier": "Vocal Bubble / At Risk",
    "evictionProbability": 26,
    "silentMajorityIndex": 58,
    "loudMinorityIndex": 82,
    "recentNarrativeEdit": "Neutral Edit",
    "votingTrajectory": "Vocal Illusion",
    "tossTrend7d": [
      68,
      67,
      65,
      66,
      64,
      63,
      64
    ],
    "bio": "Prominent television leading actress and Khatron Ke Khiladi 12 finalist. Supported by sophisticated television agency PR networks on X and Instagram, but faces organic skepticism from casual kitchen viewers.",
    "pastDetails": "Acclaimed for playing the titular lead in Zee TV’s superhit daily soap Guddan Tumse Na Ho Payega. Finalist in Khatron Ke Khiladi 12 in Cape Town. Law graduate from Panjab University.",
    "controversies": [
      "Heated behind-the-scenes friction during previous stunt reality shoot schedules",
      "Heavy criticism for deploying automated comment bots on Instagram during past television award votings"
    ],
    "houseGameplay": "Projects an angelic, gentle heroine persona in front of Salman Khan during Weekend Ka Vaar, but strategically avoids heavy kitchen duties. Frequently counters Arshifa by teaming up with Scout and Gullu.",
    "strongestMove": "Exposed Arshifa’s hidden stash of coffee and luxury chocolates in the luggage room, shifting public scrutiny away from her own chore avoidance.",
    "hinglishProfile": {
      "bio": "TV serials ki top actress. Twitter PR bot army bohot active hai par YouTube casual junta iske diplomatic nature se unconvinced hai.",
      "pastDetails": "Guddan Tumse Na Ho Payega ki lead heroine aur Khatron Ke Khiladi 12 finalist.",
      "controversies": [
        "Khatron Ke Khiladi mein co-contestants ke saath behind-the-scenes clash",
        "Award ceremonies ke time paid voting automation ka arop"
      ],
      "houseGameplay": "Weekend par Salman Khan ke samne bholi banti hai par ghar mein kitchen chore se bachti hai. Arshifa ke fake tears ko Scout ke sath milkar expose karti hai.",
      "strongestMove": "Luggage room mein chupa hua Arshifa ka coffee aur chocolate stash dhoondh ke nikaal diya."
    },
    "profession": [
      "Television & Film Actress",
      "Model",
      "Reality Star"
    ],
    "careerCredits": [
      "Guddan Tumse Na Ho Payega (Lead)",
      "Fear Factor: Khatron Ke Khiladi 12 (Finalist)",
      "Roohaniyat (Web Series)"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@officialkanikamann",
        "url": "https://www.instagram.com/officialkanikamann",
        "followerCount": "7.4M"
      },
      {
        "platform": "X (Twitter)",
        "handle": "@kanikamann",
        "url": "https://x.com/kanikamann",
        "followerCount": "190K"
      }
    ],
    "statusVerifiedAt": "2026-11-01T12:00:00+05:30",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Social Post",
        "url": "https://www.instagram.com/jiohotstarreality/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "Times of India Entertainment",
        "url": "https://timesofindia.indiatimes.com/entertainment",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T08:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Paid Voting Automation Allegations",
        "classification": "External Allegation",
        "detail": "Social media allegations of automated bot campaigns during previous television awards votings.",
        "sourceUrl": "https://timesofindia.indiatimes.com/entertainment",
        "sourceName": "The Times of India Entertainment",
        "verifiedAt": "2026-10-18T16:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Luggage Room Coffee Stash Exposure",
        "classification": "On-Screen House Event",
        "detail": "Located and exposed Arshifa Khan’s private hidden stash of chocolates and luxury coffee, sparking a house-wide rationing conflict.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 22 Broadcast",
        "verifiedAt": "2026-10-22T22:30:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Burst pattern: 3,400 tweets with identical phrase syntax deployed within 120 seconds of Weekend Ka Vaar promos.",
      "74% of high-sentiment retweets originate from accounts created within the past 45 days."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 54,
        "organicRatio": 0.88,
        "rawVolume": 62000,
        "botCountEstimate": 2400,
        "sampleSources": [
          "Colors TV Episode Clips",
          "Uncut Dining Table Discussions"
        ]
      },
      "xTwitter": {
        "sentiment": 88,
        "organicRatio": 0.39,
        "rawVolume": 245000,
        "botCountEstimate": 62000,
        "sampleSources": [
          "#KanikaMannForTheWin",
          "#QueenKanika",
          "Paid Agency Rings"
        ]
      },
      "instagram": {
        "sentiment": 81,
        "organicRatio": 0.52,
        "rawVolume": 190000,
        "botCountEstimate": 38000,
        "sampleSources": [
          "Fan Club Edits",
          "Stylist Promo Reels"
        ]
      },
      "threads": {
        "sentiment": 62,
        "organicRatio": 0.78,
        "rawVolume": 18000,
        "botCountEstimate": 1200,
        "sampleSources": [
          "Daily Soap Fandom Threads"
        ]
      },
      "googleNews": {
        "sentiment": 74,
        "organicRatio": 0.94,
        "rawVolume": 9200,
        "botCountEstimate": 120,
        "sampleSources": [
          "Pinkvilla TV",
          "India Today Television"
        ]
      }
    }
  },
  {
    "id": "c3",
    "name": "Aamrapali Dubey",
    "nickname": "Aamrapali",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Frontrunner",
    "status": "Active",
    "isNominated": false,
    "rawSentiment": 78,
    "trueOrganicSentiment": 82,
    "prInflationDelta": -4,
    "prInfiltrationRate": 8,
    "evictionRiskTier": "Safe",
    "evictionProbability": 5,
    "silentMajorityIndex": 95,
    "loudMinorityIndex": 42,
    "recentNarrativeEdit": "Hero Edit",
    "votingTrajectory": "Rising",
    "tossTrend7d": [
      76,
      77,
      79,
      80,
      81,
      81,
      82
    ],
    "bio": "Reigning queen of Bhojpuri cinema. Commands colossal, fiercely loyal grassroots audiences across Uttar Pradesh, Bihar, and Jharkhand who vote reliably on the JioHotstar portal without generating loud Twitter discourse.",
    "pastDetails": "Highest-paid actress in Bhojpuri cinema history. Starred in historic blockbusters including Nirahua Hindustani, Border, and Dulhan Ganga Paar Ke with over 50+ hit feature films.",
    "controversies": [
      "High-profile remuneration parity debates and legal friction over exclusive studio contracts (2018-2020)",
      "Public disputes regarding Bhojpuri music video copyright ownership"
    ],
    "houseGameplay": "The compassionate, unflinching maternal rock of the house. Cooks food for everyone, never engages in fake melodrama, speaks with grounded moral clarity, and commands deep respect from mature family viewers.",
    "strongestMove": "Calmly stared down Kanika Mann during the luxury ration veto, refusing to give up communal wheat flour for private coffee, gaining universal praise from household matriarch viewers.",
    "hinglishProfile": {
      "bio": "Bhojpuri cinema ki superstar. Twitter par shor nahi machati par JioHotstar portal pe UP, Bihar aur Purvanchal ka solid vote bank iske sath hai.",
      "pastDetails": "50 se zyada blockbuster filmo ki superstar heroine aur Bhojpuri industry ki highest-paid actress.",
      "controversies": [
        "Studio contracts aur music royalties ke purane vivaad"
      ],
      "houseGameplay": "Ghar ki kitchen captain aur moral authority. Bina chillaye baat karti hai aur Kanika ke tantrum ko calmly handle karti hai.",
      "strongestMove": "Kitchen ration task mein Kanika ke luxury coffee demand ko reject karke sabke rashan ko protect kiya."
    },
    "profession": [
      "Bhojpuri Film Superstar",
      "Singer",
      "Regional Icon"
    ],
    "careerCredits": [
      "Nirahua Hindustani (Blockbuster)",
      "Border",
      "Dulhan Ganga Paar Ke",
      "Over 50+ Blockbuster Bhojpuri Films"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@aamrapali1101",
        "url": "https://www.instagram.com/aamrapali1101",
        "followerCount": "4.2M"
      },
      {
        "platform": "YouTube",
        "handle": "@aamrapalidubeyofficial",
        "url": "https://www.youtube.com/@aamrapalidubeyofficial",
        "followerCount": "1.1M"
      }
    ],
    "statusVerifiedAt": "2026-11-01T12:00:00+05:30",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Social Post",
        "url": "https://www.instagram.com/jiohotstarreality/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "India Today Regional Bureau",
        "url": "https://www.indiatoday.in/television",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T08:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Regional Film Industry Royalties & Exclusive Contracts",
        "classification": "Public Denial",
        "detail": "Past industry debates on exclusive project pairings and regional remuneration parity.",
        "sourceUrl": "https://www.indiatoday.in/television",
        "sourceName": "India Today Regional Bureau",
        "verifiedAt": "2026-10-12T11:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Kitchen Ration Veto & Household Hierarchy",
        "classification": "On-Screen House Event",
        "detail": "Refused Kanika Mann’s demand for luxury coffee when regular flour was scarce, asserting kitchen authority.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 20 Broadcast",
        "verifiedAt": "2026-10-20T21:45:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Very low bot coordination detected (<8% bot signature). Organic comments exhibit distinct regional dialect markers."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 91,
        "organicRatio": 0.98,
        "rawVolume": 76000,
        "botCountEstimate": 500,
        "sampleSources": [
          "Colors TV Bhojpuri Promos",
          "YouTube Regional Community Reviews"
        ]
      },
      "xTwitter": {
        "sentiment": 61,
        "organicRatio": 0.89,
        "rawVolume": 35000,
        "botCountEstimate": 1800,
        "sampleSources": [
          "#AamrapaliDubey",
          "#BB20Regional"
        ]
      },
      "instagram": {
        "sentiment": 82,
        "organicRatio": 0.91,
        "rawVolume": 110000,
        "botCountEstimate": 4500,
        "sampleSources": [
          "@aamrapali1101 reels",
          "Regional fan clubs"
        ]
      },
      "threads": {
        "sentiment": 75,
        "organicRatio": 0.94,
        "rawVolume": 12000,
        "botCountEstimate": 200,
        "sampleSources": [
          "Bhojpuri Cinema Discussions"
        ]
      },
      "googleNews": {
        "sentiment": 79,
        "organicRatio": 0.97,
        "rawVolume": 8800,
        "botCountEstimate": 60,
        "sampleSources": [
          "Dainik Jagran",
          "Prabhat Khabar Entertainment"
        ]
      }
    }
  },
  {
    "id": "c4",
    "name": "Aasif Khan",
    "nickname": "Aasif",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Underdog",
    "status": "Active",
    "isNominated": true,
    "rawSentiment": 68,
    "trueOrganicSentiment": 49,
    "prInflationDelta": 19,
    "prInfiltrationRate": 42,
    "evictionRiskTier": "High Danger",
    "evictionProbability": 68,
    "silentMajorityIndex": 32,
    "loudMinorityIndex": 51,
    "recentNarrativeEdit": "Ghost Edit",
    "votingTrajectory": "Plummeting",
    "tossTrend7d": [
      64,
      60,
      57,
      53,
      51,
      50,
      49
    ],
    "bio": "Critically acclaimed OTT method actor (Panchayat, Mirzapur, Paatal Lok). Highly respected for acting craft, but suffering from severe airtime neglect (Ghost Edit) and lacks an organized digital voting bloc.",
    "pastDetails": "Rose from theatre roots in Rajasthan to deliver iconic performances as Ganesh in Panchayat, Babar in Mirzapur, and Anas Ahmad in Jamtara: Sabka Number Ayega.",
    "controversies": [
      "Public criticisms of casting politics and nepotism in Bollywood OTT projects (2021-2023)",
      "Frank podcast reflections on financial instability among character actors"
    ],
    "houseGameplay": "Introverted, observant, and intellectual. Sits quietly in the garden observing house politics, but fails to assert himself in nominations or captaincy challenges.",
    "strongestMove": "Delivered an emotionally gripping monologue during the secret task about his journey from a hotel kitchen dishwasher to prime-time OTT screens.",
    "hinglishProfile": {
      "bio": "Panchayat aur Mirzapur ka brilliant actor. Acting craft mein sabse aage hai par Bigg Boss ke shor-sharabe mein invisible ho gaya hai.",
      "pastDetails": "Panchayat ka Ganesh aur Mirzapur ka Babar. Real small-town struggle se nikla hua method actor.",
      "controversies": [
        "Industry nepotism par bold statements"
      ],
      "houseGameplay": "Shaant rehta hai, garden mein baithe baithe observe karta hai. Screen time kam milne ki wajah se eviction khatre mein hai.",
      "strongestMove": "Secret task mein apni real-life struggle ka emotional monologue diya."
    },
    "profession": [
      "Theatre & Method Actor",
      "Film & Web Series Performer"
    ],
    "careerCredits": [
      "Panchayat (Ganesh)",
      "Mirzapur (Babar)",
      "Jamtara: Sabka Number Ayega (Anas)",
      "Paatal Lok"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@aasifkhan_1",
        "url": "https://www.instagram.com/aasifkhan_1",
        "followerCount": "620K"
      }
    ],
    "statusVerifiedAt": "2026-11-01T12:00:00+05:30",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "Hindustan Times Entertainment",
        "url": "https://www.hindustantimes.com/entertainment",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T08:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Industry Typecasting & Casting Couch Critique",
        "classification": "Direct Quote",
        "detail": "Outspoken interviews highlighting Bollywood nepotism and difficulties faced by small-town theatre actors.",
        "sourceUrl": "https://www.hindustantimes.com/entertainment",
        "sourceName": "Hindustan Times Entertainment",
        "verifiedAt": "2026-10-14T10:30:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Passive Bedroom Nomination & Lack of Conflict",
        "classification": "On-Screen House Event",
        "detail": "Criticized by Salman Khan on Weekend Ka Vaar for sleeping through task strategies and avoiding house confrontations.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 21 Broadcast",
        "verifiedAt": "2026-10-21T22:30:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "PR agency deployed a generic hashtag surge (#SupportAasifKhan) with identical template wording after nomination.",
      "Organic fan volume is authentic but very low in absolute count (<14k active comments)."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 62,
        "organicRatio": 0.94,
        "rawVolume": 24000,
        "botCountEstimate": 600,
        "sampleSources": [
          "Colors TV Panchayat Clips",
          "OTT Film Review Channels"
        ]
      },
      "xTwitter": {
        "sentiment": 79,
        "organicRatio": 0.44,
        "rawVolume": 84000,
        "botCountEstimate": 28000,
        "sampleSources": [
          "#AasifKhan",
          "#MirzapurFandom"
        ]
      },
      "instagram": {
        "sentiment": 69,
        "organicRatio": 0.61,
        "rawVolume": 48000,
        "botCountEstimate": 9200,
        "sampleSources": [
          "OTT Cinephile Pages",
          "@aasifkhan_1 updates"
        ]
      },
      "threads": {
        "sentiment": 58,
        "organicRatio": 0.89,
        "rawVolume": 6500,
        "botCountEstimate": 300,
        "sampleSources": [
          "Hindi Cinema Buff Threads"
        ]
      },
      "googleNews": {
        "sentiment": 72,
        "organicRatio": 0.96,
        "rawVolume": 4200,
        "botCountEstimate": 40,
        "sampleSources": [
          "The Hindu Cinema",
          "Film Companion"
        ]
      }
    }
  },
  {
    "id": "c5",
    "name": "Qazi Ahmad Tauqeer",
    "nickname": "Qazi",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Polarizing",
    "status": "Active",
    "isNominated": false,
    "rawSentiment": 62,
    "trueOrganicSentiment": 44,
    "prInflationDelta": 18,
    "prInfiltrationRate": 46,
    "evictionRiskTier": "Vocal Bubble / At Risk",
    "evictionProbability": 45,
    "silentMajorityIndex": 41,
    "loudMinorityIndex": 78,
    "recentNarrativeEdit": "Villain Edit",
    "votingTrajectory": "Plummeting",
    "tossTrend7d": [
      58,
      55,
      52,
      49,
      47,
      45,
      44
    ],
    "bio": "Historic winner of Fame Gurukul (2005) who captivated India’s first wave of SMS voting. Known for theatrical dramatic flair and nostalgic vanity.",
    "pastDetails": "Created national voting frenzy in 2005 alongside Rooprekha Banerjee. Represented Kashmir as a cultural music youth icon.",
    "controversies": [
      "Disputes with recording labels over royalty splits following debut studio album",
      "High-profile public spat with rival reality contestants over vintage SMS voting claims"
    ],
    "houseGameplay": "Operates with vintage reality-show showmanship. Constantly brings up his 2005 voting records. Clashes aggressively with modern digital creators (Scout and Gullu).",
    "strongestMove": "Composed an impromptu anthem during the lockdown task that briefly unified the house, before ruining the goodwill through personal ego disputes.",
    "hinglishProfile": {
      "bio": "Fame Gurukul 2005 ka winner. Baar-baar apne 2005 ke SMS voting records ginate rehta hai aur modern digital creators se chidta hai.",
      "pastDetails": "2005 ka national sensation singer.",
      "controversies": [
        "Music label contractual disputes aur purane reality shows ke vivaad"
      ],
      "houseGameplay": "Drama create karta hai. Scout aur Gullu ke sath ladne ki koshish karta hai par har baar backfire kar jaata hai.",
      "strongestMove": "Lockdown task mein ek entertaining anthem gaya jispe poora ghar naacha."
    },
    "profession": [
      "Singer",
      "Performer",
      "Reality Show Pioneer"
    ],
    "careerCredits": [
      "Fame Gurukul (Winner 2005)",
      "Celebrity Musical Tours",
      "Kashmir Music Ambassador"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@qazitouqeer_official",
        "url": "https://www.instagram.com/qazitouqeer_official",
        "followerCount": "380K"
      }
    ],
    "statusVerifiedAt": "2026-11-01T12:00:00+05:30",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "Pinkvilla Entertainment Archives",
        "url": "https://www.pinkvilla.com/",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T08:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Post-Fame Gurukul Contractual Disputes",
        "classification": "External Allegation",
        "detail": "Contractual fallout and long hiatus following early 2000s overnight stardom.",
        "sourceUrl": "https://www.pinkvilla.com/",
        "sourceName": "Pinkvilla Entertainment Archives",
        "verifiedAt": "2026-10-11T16:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Task Shield Dispute & Sarcasm Clash with Scout",
        "classification": "On-Screen House Event",
        "detail": "Attempted to disorient Scout with personal legacy sarcasm during the Tathas-two shield task; met with universal audience rejection.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 26 Broadcast",
        "verifiedAt": "2026-10-26T22:15:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Nostalgia bot ring detected spamming 2005 Fame Gurukul clips with copy-pasted comments across YouTube and Twitter."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 46,
        "organicRatio": 0.91,
        "rawVolume": 42000,
        "botCountEstimate": 1800,
        "sampleSources": [
          "Colors TV Retro Clips",
          "Music Review Channels"
        ]
      },
      "xTwitter": {
        "sentiment": 75,
        "organicRatio": 0.48,
        "rawVolume": 98000,
        "botCountEstimate": 36000,
        "sampleSources": [
          "#QaziTouqeer",
          "#FameGurukulNostalgia"
        ]
      },
      "instagram": {
        "sentiment": 64,
        "organicRatio": 0.63,
        "rawVolume": 58000,
        "botCountEstimate": 14000,
        "sampleSources": [
          "Nostalgic Fan Pages"
        ]
      },
      "threads": {
        "sentiment": 42,
        "organicRatio": 0.86,
        "rawVolume": 8200,
        "botCountEstimate": 500,
        "sampleSources": [
          "Music Buff Threads"
        ]
      },
      "googleNews": {
        "sentiment": 59,
        "organicRatio": 0.95,
        "rawVolume": 6100,
        "botCountEstimate": 60,
        "sampleSources": [
          "The Tribune",
          "Kashmir Reader"
        ]
      }
    }
  },
  {
    "id": "c6",
    "name": "Harsh Machare (Yung DSA)",
    "nickname": "Yung DSA",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Underdog",
    "status": "Active",
    "isNominated": false,
    "rawSentiment": 74,
    "trueOrganicSentiment": 76,
    "prInflationDelta": -2,
    "prInfiltrationRate": 12,
    "evictionRiskTier": "Safe",
    "evictionProbability": 14,
    "silentMajorityIndex": 78,
    "loudMinorityIndex": 59,
    "recentNarrativeEdit": "Neutral Edit",
    "votingTrajectory": "Rising",
    "tossTrend7d": [
      68,
      70,
      72,
      73,
      74,
      75,
      76
    ],
    "bio": "Underground street hip-hop rapper and lyricist. Represents authentic independent desi hip-hop culture inside the Bigg Boss 20 house.",
    "pastDetails": "Pioneered raw street rap tracks celebrating small-town hustle, with millions of streams on Spotify and YouTube without commercial label backing.",
    "controversies": [
      "Underground rap cypher diss tracks against commercial Bollywood remix producers (2022-2024)",
      "Frank remarks calling out corporate label exploitation of indie artists"
    ],
    "houseGameplay": "Sharp, rhythmic observer. Writes rap rhymes capturing the week’s house squabbles. Speaks direct street truth to power, teaming up with Scout and Gullu against fake personas.",
    "strongestMove": "Performed a spontaneous 3-minute freestyle rap during the Weekend Ka Vaar courtroom task, roasting every contestant’s hypocrisy and making Salman Khan laugh out loud.",
    "hinglishProfile": {
      "bio": "Desi hip-hop ka underground rapper. Faltu fake sophistication nahi dikhata, jo hai mooh pe bolta hai.",
      "pastDetails": "Independent street rap tracks se viral hua artist.",
      "controversies": [
        "Commercial music labels ke khilaf diss tracks"
      ],
      "houseGameplay": "Ghar ki hypocrisy ko rap mein summarize karta hai. Scout aur Gullu ke sath real bond banayi hai.",
      "strongestMove": "Weekend courtroom task mein poore ghar ke doglepan par live freestyle rap mara."
    },
    "profession": [
      "Rapper",
      "Lyricist",
      "Music Producer"
    ],
    "careerCredits": [
      "Independent Desi Hip-Hop Pioneer",
      "Over 40M+ Spotify/YouTube Streams",
      "Underground Cypher Champion"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@yungdsa_official",
        "url": "https://www.instagram.com/yungdsa_official",
        "followerCount": "520K"
      },
      {
        "platform": "YouTube",
        "handle": "@yungdsaofficial",
        "url": "https://www.youtube.com/@yungdsaofficial",
        "followerCount": "780K"
      }
    ],
    "statusVerifiedAt": "2026-11-01T12:00:00+05:30",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "Rolling Stone India Hip-Hop Desk",
        "url": "https://indianexpress.com/section/entertainment/",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T09:00:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Commercial Remix Cypher Diss",
        "classification": "Direct Quote",
        "detail": "Released viral diss tracks targeting Bollywood producers for diluting underground lyrical hip-hop.",
        "sourceUrl": "https://indianexpress.com/section/entertainment/",
        "sourceName": "The Indian Express Music",
        "verifiedAt": "2026-10-14T15:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Weekend Freestyle Roast Commendation",
        "classification": "On-Screen House Event",
        "detail": "Freestyled a witty takedown of housemate diplomacy, winning praise from Salman Khan.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 25 Broadcast",
        "verifiedAt": "2026-10-25T22:30:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Very high organic comments from hip-hop fans across India (<12% bot presence)."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 84,
        "organicRatio": 0.95,
        "rawVolume": 51000,
        "botCountEstimate": 700,
        "sampleSources": [
          "Colors TV Rap Clips",
          "Desi Hip Hop Community"
        ]
      },
      "xTwitter": {
        "sentiment": 73,
        "organicRatio": 0.79,
        "rawVolume": 64000,
        "botCountEstimate": 5200,
        "sampleSources": [
          "#YungDSA",
          "#BB20Rap"
        ]
      },
      "instagram": {
        "sentiment": 82,
        "organicRatio": 0.86,
        "rawVolume": 78000,
        "botCountEstimate": 6100,
        "sampleSources": [
          "DHH Reels",
          "@yungdsa fans"
        ]
      },
      "threads": {
        "sentiment": 76,
        "organicRatio": 0.91,
        "rawVolume": 11000,
        "botCountEstimate": 300,
        "sampleSources": [
          "Music Fandom Threads"
        ]
      },
      "googleNews": {
        "sentiment": 72,
        "organicRatio": 0.97,
        "rawVolume": 4900,
        "botCountEstimate": 30,
        "sampleSources": [
          "Rolling Stone India",
          "The Indian Express"
        ]
      }
    }
  },
  {
    "id": "c7",
    "name": "Kushal Tanwar (Gullu)",
    "nickname": "Gullu",
    "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Challenger",
    "status": "Active",
    "isNominated": false,
    "rawSentiment": 83,
    "trueOrganicSentiment": 85,
    "prInflationDelta": -2,
    "prInfiltrationRate": 10,
    "evictionRiskTier": "Safe",
    "evictionProbability": 8,
    "silentMajorityIndex": 91,
    "loudMinorityIndex": 67,
    "recentNarrativeEdit": "Hero Edit",
    "votingTrajectory": "Rising",
    "tossTrend7d": [
      77,
      79,
      81,
      82,
      84,
      84,
      85
    ],
    "bio": "Viral digital creator, roast satirist, and reality personality. The comedic heartbeat of Bigg Boss 20 who punctures over-the-top melodrama with effortless, grounded Delhi sarcasm.",
    "pastDetails": "Rose to digital stardom through sharp, character-driven comedy sketches and satirical parodies of reality TV tropes. Massive Gen-Z and millennial following across North India.",
    "controversies": [
      "Legal copyright friction over satirical roasting of mainstream daily soap scenes (2022-2023)",
      "Public feud with reality show contestants after brutally parodying their breakup reels"
    ],
    "houseGameplay": "The ultimate counter-puncher. Never starts screaming himself; instead, he sits with a deadpan smile while other housemates lose their temper. Teaming up with Scout to dismantle fake emotional narratives (especially Arshifa’s staged crying).",
    "strongestMove": "During Arshifa’s 40-minute screaming meltdown over kitchen chores, Gullu quietly made himself a cup of ginger tea, sat at the dining table, and calmly narrated her tantrums like a live cricket match, leaving the entire house in splits.",
    "hinglishProfile": {
      "bio": "Internet ka top comedy roast creator. House mein drama ko roast karke entertainment ka sabse bada source bana hua hai.",
      "pastDetails": "Delhi ka viral sketch creator jiske comedy videos millions of views cross karte hain.",
      "controversies": [
        "Mainstream celebrities ko roast karne par defamation warnings"
      ],
      "houseGameplay": "Chill banda hai. Arshifa jab bina baat ke footage ke liye chillati hai, toh ye samne chai peete hue cricket commentary shuru kar deta hai.",
      "strongestMove": "Arshifa ke 40 minute ke drama tantrum ko live cricket commentary bana kar poore ghar aur audience ko hassa diya."
    },
    "profession": [
      "Digital Satirist",
      "Roast Creator",
      "Stand-Up Comedian"
    ],
    "careerCredits": [
      "Gullu TV (2M+ Subscribers)",
      "Viral Celebrity Roast Series",
      "Live Stand-up Tours across Delhi NCR"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "YouTube",
        "handle": "@gulluroasts",
        "url": "https://www.youtube.com/@gulluroasts",
        "followerCount": "2.1M"
      },
      {
        "platform": "Instagram",
        "handle": "@gullu_official",
        "url": "https://www.instagram.com/gullu_official",
        "followerCount": "1.4M"
      }
    ],
    "statusVerifiedAt": "2026-11-01T12:00:00+05:30",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "Hindustan Times Web Entertainment",
        "url": "https://www.hindustantimes.com/entertainment",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T08:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Copyright Strikes & Celebrity Creator Roast Disputes",
        "classification": "Public Denial",
        "detail": "High-profile legal notices from entertainment agencies over satirical video parodies (2022-2023).",
        "sourceUrl": "https://www.hindustantimes.com/entertainment",
        "sourceName": "Hindustan Times Web",
        "verifiedAt": "2026-10-16T12:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Disarming Arshifa’s Melodramatic Tantrum",
        "classification": "On-Screen House Event",
        "detail": "Defused Arshifa Khan’s 40-minute screaming episode by sitting with a cup of tea and narrating cricket commentary, reducing the confrontation to comedy.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 27 Broadcast",
        "verifiedAt": "2026-10-27T22:30:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Genuine grassroots memes across Reddit and Instagram Reels (>90% organic authenticity)."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 92,
        "organicRatio": 0.97,
        "rawVolume": 79000,
        "botCountEstimate": 600,
        "sampleSources": [
          "Colors TV Comedy Highlights",
          "YouTube Reaction Channels"
        ]
      },
      "xTwitter": {
        "sentiment": 81,
        "organicRatio": 0.86,
        "rawVolume": 115000,
        "botCountEstimate": 7200,
        "sampleSources": [
          "#Gullu",
          "#BB20Entertainment"
        ]
      },
      "instagram": {
        "sentiment": 88,
        "organicRatio": 0.91,
        "rawVolume": 140000,
        "botCountEstimate": 7800,
        "sampleSources": [
          "Reels Comedy Clips",
          "@gullu_official"
        ]
      },
      "threads": {
        "sentiment": 85,
        "organicRatio": 0.93,
        "rawVolume": 21000,
        "botCountEstimate": 450,
        "sampleSources": [
          "Comedy Creator Threads"
        ]
      },
      "googleNews": {
        "sentiment": 80,
        "organicRatio": 0.98,
        "rawVolume": 7400,
        "botCountEstimate": 40,
        "sampleSources": [
          "The Indian Express",
          "Hindustan Times"
        ]
      }
    }
  },
  {
    "id": "c8",
    "name": "Arishfa Khan (Arshifa)",
    "nickname": "Arshifa",
    "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Polarizing",
    "status": "Active",
    "isNominated": true,
    "rawSentiment": 71,
    "trueOrganicSentiment": 41,
    "prInflationDelta": 30,
    "prInfiltrationRate": 58,
    "evictionRiskTier": "Vocal Bubble / At Risk",
    "evictionProbability": 46,
    "silentMajorityIndex": 38,
    "loudMinorityIndex": 89,
    "recentNarrativeEdit": "Villain Edit",
    "votingTrajectory": "Vocal Illusion",
    "tossTrend7d": [
      52,
      49,
      46,
      44,
      43,
      42,
      41
    ],
    "bio": "Prominent social media creator and former television child star with over 28M+ Instagram followers. Uses high-decibel tantrums and crying fits as a calculated survival tactic to stay at the center of house cameras.",
    "pastDetails": "Began as a popular child actress in Ek Veer Ki Ardaas... Veera (Gunjan), Baalveer, and Papa By Chance before pivoting to short-form video creation, amassing tens of millions of followers.",
    "controversies": [
      "High-profile public feud and social media counter-rants involving fellow teen creators (2020-2022)",
      "Severe online backlash for scripted victim-card reels and staged friendship breakups"
    ],
    "houseGameplay": "Picks unnecessary fights with Scout, Gullu, and Kanika over minor chores. When confronted with calm logic, she easily gets rage-baited, loses composure, and immediately breaks into dramatic crying fits claiming the entire house is targeting her — using tears as an intentional strategy to stay relevant in the broadcast edit.",
    "strongestMove": "Turned a minor kitchen cleaning disagreement into a 3-hour house-wide tribunal by crying in the bathroom, successfully securing 24 minutes of solo broadcast airtime in Episode 18.",
    "hinglishProfile": {
      "bio": "28M Instagram followers wali creator. Ghar mein rehne ka iska ek hi formula hai: bina mudde ke ladai shuru karo, rage-bait ho jao, aur fir camera ke samne ro ke sympathy lo.",
      "pastDetails": "Veera aur Baalveer ki child actress jo baad mein short-form videos se massive viral sensation bani.",
      "controversies": [
        "Internet creators ke saath purane viral lafde aur police complaint threats",
        "Staged victim-card videos pe social media backlash"
      ],
      "houseGameplay": "Scout, Gullu aur Kanika ke sath zabardasti ke jhagde karti hai. Jaise hi samne wala calmly smile karta hai, ye rage-bait hoke rone lagti hai taaki Weekend Ka Vaar pe sympathy mile.",
      "strongestMove": "Kitchen chore ke chote se issue pe bathroom mein ro kar poora episode apne upar focus karwa liya."
    },
    "profession": [
      "Television Actress",
      "Short-Form Video Creator",
      "Digital Influencer"
    ],
    "careerCredits": [
      "Ek Veer Ki Ardaas... Veera (Star Plus)",
      "Baalveer (Sony SAB)",
      "Papa By Chance",
      "28M+ Digital Social Fandom"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@arshifakhan_",
        "url": "https://www.instagram.com/arshifakhan_",
        "followerCount": "28.4M"
      },
      {
        "platform": "YouTube",
        "handle": "@arshifakhan",
        "url": "https://www.youtube.com/@arshifakhan",
        "followerCount": "2.4M"
      }
    ],
    "statusVerifiedAt": "2026-11-01T12:00:00+05:30",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Social Post",
        "url": "https://www.instagram.com/jiohotstarreality/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "India Today Television",
        "url": "https://www.indiatoday.in/television",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T08:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Viral Social Media Rivalry & Counter-Rants",
        "classification": "External Allegation",
        "detail": "Online public disputes and response reels with contemporary teen digital creators (2020-2022).",
        "sourceUrl": "https://www.indiatoday.in/television",
        "sourceName": "India Today Television",
        "verifiedAt": "2026-10-10T12:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Luggage Room Ration Hoarding Stash",
        "classification": "On-Screen House Event",
        "detail": "Exposed by Kanika and Scout for stashing private coffee and gourmet chocolates in luggage storage, triggering a house altercation.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 22 Broadcast",
        "verifiedAt": "2026-10-22T22:30:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      },
      {
        "title": "Rage-Bait & Crying Re-centering Dynamic",
        "classification": "On-Screen House Event",
        "detail": "Picks unnecessary fights with Scout, Gullu, and Kanika, then breaks into tears claiming victimhood when countered with calm logic.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 27 Broadcast",
        "verifiedAt": "2026-10-27T22:00:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Targeted crying clip distribution across 80+ automated fan pages within 5 minutes of episode broadcast.",
      "Scripted hashtag floods: #StandWithArshifa #StopBullyingArshifa using identical punctuation.",
      "Massive follower-to-vote drop: 28M followers yielding under 4% organic voting share in independent polls."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 32,
        "organicRatio": 0.94,
        "rawVolume": 94000,
        "botCountEstimate": 1400,
        "sampleSources": [
          "Colors TV Crying Clip Comments",
          "Viewer Live Chat Streams"
        ]
      },
      "xTwitter": {
        "sentiment": 78,
        "organicRatio": 0.36,
        "rawVolume": 180000,
        "botCountEstimate": 124000,
        "sampleSources": [
          "#StandWithArshifa",
          "#ArshifaKhan",
          "Paid PR Clusters"
        ]
      },
      "instagram": {
        "sentiment": 82,
        "organicRatio": 0.44,
        "rawVolume": 220000,
        "botCountEstimate": 110000,
        "sampleSources": [
          "@arshifakhan fan accounts",
          "Teen creator circles"
        ]
      },
      "threads": {
        "sentiment": 42,
        "organicRatio": 0.81,
        "rawVolume": 24000,
        "botCountEstimate": 2100,
        "sampleSources": [
          "Daily Episode Critiques"
        ]
      },
      "googleNews": {
        "sentiment": 61,
        "organicRatio": 0.96,
        "rawVolume": 11000,
        "botCountEstimate": 100,
        "sampleSources": [
          "Hindustan Times",
          "Bollywood Life"
        ]
      }
    }
  },
  {
    "id": "c9",
    "name": "Love Gill (Lovepreet Kaur Gill)",
    "nickname": "Love",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Challenger",
    "status": "Active",
    "isNominated": true,
    "rawSentiment": 73,
    "trueOrganicSentiment": 68,
    "prInflationDelta": 5,
    "prInfiltrationRate": 24,
    "evictionRiskTier": "Vocal Bubble / At Risk",
    "evictionProbability": 24,
    "silentMajorityIndex": 72,
    "loudMinorityIndex": 74,
    "recentNarrativeEdit": "Neutral Edit",
    "votingTrajectory": "Stable",
    "tossTrend7d": [
      69,
      70,
      71,
      70,
      68,
      69,
      68
    ],
    "bio": "Punjabi film actress and model who earned her entry into Bigg Boss 20 through the highly competitive \"Fans Ka Faisla\" audience voting portal. Commands strong North Indian regional support.",
    "pastDetails": "Starred in hit Punjabi music videos and regional feature films. Won the public vote-in slot during the Bigg Boss 20 premiere countdown against two rival influencers.",
    "controversies": [
      "Disputes with talent agencies regarding exclusive regional brand contracts (2023)",
      "High-voltage arguments during the Fans Ka Faisla live debates"
    ],
    "houseGameplay": "Direct, unapologetic, and proud. Refuses to bow down to TV celebrity hierarchies. Frequently clashes over grocery ration distribution and stands up for house underdogs.",
    "strongestMove": "Won the physical endurance sack-holding task in Week 3, securing essential groceries for the vegetarian housemates when captaincy had forfeited rations.",
    "hinglishProfile": {
      "bio": "Punjabi cinema ki actress jo \"Fans Ka Faisla\" voting jeet kar ghar mein aayi hai. Straightforward aur bina filter ke bolti hai.",
      "pastDetails": "Hit Punjabi music videos aur regional films ki leading actress.",
      "controversies": [
        "Fans Ka Faisla debates mein heated verbal clashes"
      ],
      "houseGameplay": "TV serial actors ki entitlement ko challenge karti hai. Ration muddo pe Aamrapali aur Kanika se direct baat karti hai.",
      "strongestMove": "Week 3 mein physical endurance task jeet kar pure ghar ka ration protect kiya."
    },
    "profession": [
      "Punjabi Actress",
      "Model",
      "Reality Star"
    ],
    "careerCredits": [
      "Punjabi Feature Films Lead",
      "Hit Music Videos (100M+ Views)",
      "Bigg Boss 20 \"Fans Ka Faisla\" Vote-in Winner"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@lovegill_official",
        "url": "https://www.instagram.com/lovegill_official",
        "followerCount": "2.8M"
      }
    ],
    "statusVerifiedAt": "2026-11-01T12:00:00+05:30",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar Fans Ka Faisla Official Page",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "The Indian Express Punjab Desk",
        "url": "https://indianexpress.com/section/entertainment/",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T08:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Fans Ka Faisla Live Verbal Standoff",
        "classification": "Direct Quote",
        "detail": "Unfiltered verbal sparring during the premiere voting countdown that won her the public entry ticket.",
        "sourceUrl": "https://indianexpress.com/section/entertainment/",
        "sourceName": "The Indian Express Punjab",
        "verifiedAt": "2026-09-06T20:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Ration Stash Confrontation with Kitchen Team",
        "classification": "On-Screen House Event",
        "detail": "Challenged Aamrapali Dubey’s breakfast rationing policy, rallying fellow housemates to demand equitable meal portions.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 19 Broadcast",
        "verifiedAt": "2026-10-19T22:00:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Moderate PR amplification on Twitter (#LoveGillBB20), but balanced by authentic North Indian diaspora support on YouTube."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 76,
        "organicRatio": 0.94,
        "rawVolume": 49000,
        "botCountEstimate": 800,
        "sampleSources": [
          "Colors TV Punjabi Clips",
          "JioHotstar Fans Ka Faisla"
        ]
      },
      "xTwitter": {
        "sentiment": 74,
        "organicRatio": 0.62,
        "rawVolume": 110000,
        "botCountEstimate": 26000,
        "sampleSources": [
          "#LoveGill",
          "#FansKaFaisla"
        ]
      },
      "instagram": {
        "sentiment": 79,
        "organicRatio": 0.74,
        "rawVolume": 92000,
        "botCountEstimate": 14000,
        "sampleSources": [
          "Punjabi Fandom Pages"
        ]
      },
      "threads": {
        "sentiment": 71,
        "organicRatio": 0.88,
        "rawVolume": 12000,
        "botCountEstimate": 400,
        "sampleSources": [
          "Regional Reality TV Threads"
        ]
      },
      "googleNews": {
        "sentiment": 73,
        "organicRatio": 0.96,
        "rawVolume": 6100,
        "botCountEstimate": 50,
        "sampleSources": [
          "PTC News",
          "The Tribune"
        ]
      }
    }
  },
  {
    "id": "c10",
    "name": "Uditi Singh",
    "nickname": "Uditi",
    "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Underdog",
    "status": "Active",
    "isNominated": false,
    "rawSentiment": 72,
    "trueOrganicSentiment": 73,
    "prInflationDelta": -1,
    "prInfiltrationRate": 14,
    "evictionRiskTier": "Safe",
    "evictionProbability": 15,
    "silentMajorityIndex": 76,
    "loudMinorityIndex": 54,
    "recentNarrativeEdit": "Neutral Edit",
    "votingTrajectory": "Stable",
    "tossTrend7d": [
      68,
      69,
      71,
      72,
      73,
      73,
      73
    ],
    "bio": "Fashion model and upcoming screen actress. Brings sharp conversational elegance and strategic neutrality inside the Bigg Boss 20 house.",
    "pastDetails": "High-fashion runway model and beauty pageant finalist. Featured in multiple national television commercials and music videos.",
    "controversies": [
      "High-profile celebrity friendship discussions and tabloid gossip speculation",
      "Contract renegotiation disputes with modeling agencies (2023)"
    ],
    "houseGameplay": "Calm, observant, and measured. Avoids unprovoked shouting matches, but holds her ground firmly during nominations and task arbitrations.",
    "strongestMove": "Refused to compromise during the controversial secret ballot task, protecting her faction while logically defending her vote on national television.",
    "hinglishProfile": {
      "bio": "Fashion model aur actress. Sophisticated aur composed rehti hai, faltu arguments mein nahi ulajhti.",
      "pastDetails": "Top runway model aur brand ambassador.",
      "controversies": [
        "Modeling agency contract negotiations"
      ],
      "houseGameplay": "Dignified gameplay. Task ke rules bohot dhyan se samajhti hai aur unfair penalties ke khilaf awaz uthati hai.",
      "strongestMove": "Secret ballot task mein strategic voting karke apni alliance ko safe kiya."
    },
    "profession": [
      "Fashion Model",
      "Actress"
    ],
    "careerCredits": [
      "Runway Model for Leading Designers",
      "National TV Commercials",
      "Music Video Lead"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@uditisinghh",
        "url": "https://www.instagram.com/uditisinghh",
        "followerCount": "480K"
      }
    ],
    "statusVerifiedAt": "2026-11-01T12:00:00+05:30",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "Times of India Lifestyle",
        "url": "https://timesofindia.indiatimes.com/entertainment",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T08:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Runway Contract Exclusivity Dispute",
        "classification": "External Allegation",
        "detail": "Disputes regarding exclusive brand ambassadorship agreements prior to joining Bigg Boss.",
        "sourceUrl": "https://timesofindia.indiatimes.com/entertainment",
        "sourceName": "Times of India Entertainment",
        "verifiedAt": "2026-10-12T14:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Secret Ballot Task Defense",
        "classification": "On-Screen House Event",
        "detail": "Neutralized a nomination conspiracy by holding firm during the secret ballot face-off.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 23 Broadcast",
        "verifiedAt": "2026-10-23T22:15:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Clean organic engagement profile with minimal bot infiltration (<14%)."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 75,
        "organicRatio": 0.95,
        "rawVolume": 36000,
        "botCountEstimate": 500,
        "sampleSources": [
          "Colors TV Fashion Clips"
        ]
      },
      "xTwitter": {
        "sentiment": 69,
        "organicRatio": 0.81,
        "rawVolume": 52000,
        "botCountEstimate": 4100,
        "sampleSources": [
          "#UditiSingh",
          "#BB20Housemates"
        ]
      },
      "instagram": {
        "sentiment": 81,
        "organicRatio": 0.84,
        "rawVolume": 64000,
        "botCountEstimate": 4900,
        "sampleSources": [
          "Fashion Community Pages"
        ]
      },
      "threads": {
        "sentiment": 74,
        "organicRatio": 0.92,
        "rawVolume": 9200,
        "botCountEstimate": 200,
        "sampleSources": [
          "Lifestyle Reality Threads"
        ]
      },
      "googleNews": {
        "sentiment": 70,
        "organicRatio": 0.97,
        "rawVolume": 3800,
        "botCountEstimate": 30,
        "sampleSources": [
          "Vogue India",
          "TOI Lifestyle"
        ]
      }
    }
  },
  {
    "id": "c11",
    "name": "MC Mary Kom",
    "nickname": "Mary Kom",
    "avatar": "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Frontrunner",
    "status": "Active",
    "isNominated": false,
    "rawSentiment": 92,
    "trueOrganicSentiment": 94,
    "prInflationDelta": -2,
    "prInfiltrationRate": 6,
    "evictionRiskTier": "Safe",
    "evictionProbability": 3,
    "silentMajorityIndex": 98,
    "loudMinorityIndex": 35,
    "recentNarrativeEdit": "Hero Edit",
    "votingTrajectory": "Rising",
    "tossTrend7d": [
      90,
      91,
      92,
      93,
      93,
      94,
      94
    ],
    "bio": "Historic 6-time World Amateur Boxing Champion, Olympic Bronze Medallist, and Padma Vibhushan awardee. A national icon whose presence brings legendary discipline and sportsmanship to the house.",
    "pastDetails": "First Indian female boxer to win a gold medal at the Asian Games and Commonwealth Games. Subject of an acclaimed biographical film.",
    "controversies": [
      "Sports federation selection trials fairness debates (2019)",
      "Outspoken stance on infrastructure support for northeast Indian athletes"
    ],
    "houseGameplay": "Unwavering discipline, early morning fitness regime, and absolute zero tolerance for abusive language or cheating in tasks. Serves as the moral anchor of the house.",
    "strongestMove": "During the high-stakes physical captaincy obstacle course, completed all 5 physical stages with Olympic athletic precision, setting an all-time Bigg Boss record time of 4 minutes 12 seconds.",
    "hinglishProfile": {
      "bio": "6-time World Champion boxer aur Olympic medallist. Poore desh ki shaan jo ghar mein discipline aur sportsmanship laayi hai.",
      "pastDetails": "Olympic medallist aur Padma Vibhushan awardee boxing legend.",
      "controversies": [
        "Sports federations mein athletes ke rights par bold stance"
      ],
      "houseGameplay": "Subah sabse pehle workout karti hai. Tasks mein cheating aur gaali-galoch bilkul tolerate nahi karti.",
      "strongestMove": "Captaincy obstacle course task mein 4 minute 12 second mein record banakar task jeeta."
    },
    "profession": [
      "Olympic Boxer",
      "World Champion Athlete",
      "Rajya Sabha Ex-MP"
    ],
    "careerCredits": [
      "Olympic Bronze Medal (London 2012)",
      "6-Time World Amateur Boxing Champion",
      "Padma Vibhushan / Padma Bhushan / Arjuna Awardee"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@mcmary.kom",
        "url": "https://www.instagram.com/mcmary.kom",
        "followerCount": "4.1M"
      },
      {
        "platform": "X (Twitter)",
        "handle": "@MangteC",
        "url": "https://x.com/MangteC",
        "followerCount": "8.2M"
      }
    ],
    "statusVerifiedAt": "2026-11-01T12:00:00+05:30",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Announcement",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "The Indian Express Sports & Entertainment",
        "url": "https://indianexpress.com/section/entertainment/",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T08:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Sports Federation Selection Trial Debates",
        "classification": "Direct Quote",
        "detail": "Principled public debates regarding merit-based trials in national amateur boxing.",
        "sourceUrl": "https://indianexpress.com/section/entertainment/",
        "sourceName": "The Indian Express Sports",
        "verifiedAt": "2026-10-10T16:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Zero-Tolerance Policy on Task Abuse",
        "classification": "On-Screen House Event",
        "detail": "Called out housemates for using abusive verbal slurs during task face-offs, forcing an apology.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 17 Broadcast",
        "verifiedAt": "2026-10-17T22:15:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Near-zero bot presence (<6%). Universally authentic respect across all demographics in India."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 97,
        "organicRatio": 0.99,
        "rawVolume": 110000,
        "botCountEstimate": 300,
        "sampleSources": [
          "Colors TV Mary Kom Highlights",
          "Olympic Sports Fandom"
        ]
      },
      "xTwitter": {
        "sentiment": 92,
        "organicRatio": 0.94,
        "rawVolume": 180000,
        "botCountEstimate": 4200,
        "sampleSources": [
          "#MaryKom",
          "#LegendInBB20"
        ]
      },
      "instagram": {
        "sentiment": 95,
        "organicRatio": 0.96,
        "rawVolume": 160000,
        "botCountEstimate": 3100,
        "sampleSources": [
          "National Sports Pages",
          "@mcmary.kom"
        ]
      },
      "threads": {
        "sentiment": 93,
        "organicRatio": 0.97,
        "rawVolume": 35000,
        "botCountEstimate": 200,
        "sampleSources": [
          "Sports & Reality Discussions"
        ]
      },
      "googleNews": {
        "sentiment": 94,
        "organicRatio": 0.99,
        "rawVolume": 22000,
        "botCountEstimate": 50,
        "sampleSources": [
          "The Hindu Sports",
          "Times of India"
        ]
      }
    }
  },
  {
    "id": "c12",
    "name": "Mahhi Vij",
    "nickname": "Mahhi",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Frontrunner",
    "status": "Active",
    "isNominated": false,
    "rawSentiment": 82,
    "trueOrganicSentiment": 84,
    "prInflationDelta": -2,
    "prInfiltrationRate": 14,
    "evictionRiskTier": "Safe",
    "evictionProbability": 8,
    "silentMajorityIndex": 89,
    "loudMinorityIndex": 66,
    "recentNarrativeEdit": "Hero Edit",
    "votingTrajectory": "Rising",
    "tossTrend7d": [
      78,
      80,
      81,
      82,
      83,
      83,
      84
    ],
    "bio": "Prominent television leading actress and Nach Baliye 5 winner. Experienced reality TV star known for fierce emotional loyalty and protective maternal warmth.",
    "pastDetails": "Acclaimed for playing the iconic lead role of Nakusha in Laagi Tujhse Lagan and Nandini in Balika Vadhu. Khatron Ke Khiladi 7 competitor.",
    "controversies": [
      "High-profile social media parenting debates and paparazzi privacy callouts",
      "Outspoken defence of family against internet trolls"
    ],
    "houseGameplay": "Brings experienced television authority into the house. Feeds everyone, but refuses to let anyone disrespect kitchen boundaries. Fierce in defending friends.",
    "strongestMove": "Took on the entire opposing faction during the nomination barter task, refusing to let her close allies get bullied into self-nomination.",
    "hinglishProfile": {
      "bio": "TV industry ki well-known actress aur Nach Baliye winner. Ghar mein strong maternal authority aur fiery protective nature dikhati hai.",
      "pastDetails": "Laagi Tujhse Lagan ki Nakusha aur Balika Vadhu ki Nandini.",
      "controversies": [
        "Paparazzi aur online trolls ko call out karne ke statements"
      ],
      "houseGameplay": "Khana sabko khilati hai par boundary cross karne walon ko direct sunati hai.",
      "strongestMove": "Nomination barter task mein akele pure opposing group se bhid kar apne dosto ko protect kiya."
    },
    "profession": [
      "Television Actress",
      "Model",
      "Reality Show Winner"
    ],
    "careerCredits": [
      "Laagi Tujhse Lagan (Lead - Nakusha)",
      "Nach Baliye 5 (Winner)",
      "Balika Vadhu",
      "Khatron Ke Khiladi 7"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@mahhivij",
        "url": "https://www.instagram.com/mahhivij",
        "followerCount": "2.4M"
      },
      {
        "platform": "X (Twitter)",
        "handle": "@VijMahhi",
        "url": "https://x.com/VijMahhi",
        "followerCount": "320K"
      }
    ],
    "statusVerifiedAt": "2026-11-01T12:00:00+05:30",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "Hindustan Times Entertainment",
        "url": "https://www.hindustantimes.com/entertainment",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T08:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Troll Retaliation & Social Boundaries",
        "classification": "Direct Quote",
        "detail": "Zero-compromise public stances defending family privacy against automated online trolling.",
        "sourceUrl": "https://www.hindustantimes.com/entertainment",
        "sourceName": "Hindustan Times Celebrity Bureau",
        "verifiedAt": "2026-10-15T12:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Kitchen Ration Protection Stand",
        "classification": "On-Screen House Event",
        "detail": "Stood with Aamrapali Dubey to prevent luxury ration hoarders from starving general housemates.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 20 Broadcast",
        "verifiedAt": "2026-10-20T22:00:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "High genuine engagement from household TV viewers and family fandom communities (>86% organic)."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 87,
        "organicRatio": 0.96,
        "rawVolume": 65000,
        "botCountEstimate": 900,
        "sampleSources": [
          "Colors TV Daily Soap Clips",
          "YouTube Family Reviews"
        ]
      },
      "xTwitter": {
        "sentiment": 78,
        "organicRatio": 0.81,
        "rawVolume": 92000,
        "botCountEstimate": 8500,
        "sampleSources": [
          "#MahhiVij",
          "#BB20Housemates"
        ]
      },
      "instagram": {
        "sentiment": 85,
        "organicRatio": 0.88,
        "rawVolume": 120000,
        "botCountEstimate": 9800,
        "sampleSources": [
          "@mahhivij fans",
          "TV Serial Updates"
        ]
      },
      "threads": {
        "sentiment": 80,
        "organicRatio": 0.91,
        "rawVolume": 19000,
        "botCountEstimate": 400,
        "sampleSources": [
          "Family Audience Threads"
        ]
      },
      "googleNews": {
        "sentiment": 81,
        "organicRatio": 0.97,
        "rawVolume": 8200,
        "botCountEstimate": 60,
        "sampleSources": [
          "The Indian Express",
          "Times of India TV"
        ]
      }
    }
  },
  {
    "id": "c13",
    "name": "Manish Goel",
    "nickname": "Manish",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Wildcard",
    "status": "Active",
    "isNominated": false,
    "rawSentiment": 75,
    "trueOrganicSentiment": 76,
    "prInflationDelta": -1,
    "prInfiltrationRate": 15,
    "evictionRiskTier": "Safe",
    "evictionProbability": 12,
    "silentMajorityIndex": 82,
    "loudMinorityIndex": 61,
    "recentNarrativeEdit": "Neutral Edit",
    "votingTrajectory": "Rising",
    "tossTrend7d": [
      70,
      72,
      73,
      74,
      75,
      75,
      76
    ],
    "bio": "Veteran television actor and Bigg Boss 20 Wildcard entrant. Brings over two decades of television drama craft, tactical calmness, and maturity into the house.",
    "pastDetails": "Household name for iconic early 2000s daily soaps including Kasautii Zindagii Kay (Anupam Basu), Bhabhi (Tilak), and Nach Baliye 1 finalist.",
    "controversies": [
      "Contractual arbitration disputes with production studios in early 2000s prime time",
      "Outspoken critiques of sudden generational shifts in television production quality"
    ],
    "houseGameplay": "Enters as an experienced tactical wildcard. Observes house alliances with clinical precision, mediates heated disputes, and refuses to let younger contestants manipulate nominations.",
    "strongestMove": "Upon entering as a wildcard, exposed the existing secret voting agreement between two factions, completely reorganizing the house dynamic.",
    "hinglishProfile": {
      "bio": "TV industry ka veteran actor aur Bigg Boss 20 ka wildcard entry. 20 saal ka TV experience leke aaya hai.",
      "pastDetails": "Kasautii Zindagii Kay ka Anupam Basu aur Nach Baliye finalist.",
      "controversies": [
        "Production houses ke saath purane contractual arbitration vivaad"
      ],
      "houseGameplay": "Wildcard banke aate hi purani secret alliances ko expose kar diya aur mature gaming dikhayi.",
      "strongestMove": "Pehle hi din secret voting treaty ko public karke game ka balance badal diya."
    },
    "profession": [
      "Television Actor",
      "Anchor",
      "Wildcard Entrant"
    ],
    "careerCredits": [
      "Kasautii Zindagii Kay",
      "Bhabhi (Lead)",
      "Nach Baliye 1 (Finalist)",
      "Over 25+ Prime-Time Television Series"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@manishgoel_official",
        "url": "https://www.instagram.com/manishgoel_official",
        "followerCount": "410K"
      }
    ],
    "statusVerifiedAt": "2026-11-01T12:00:00+05:30",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar Wildcard Entry Special",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "India Today Television",
        "url": "https://www.indiatoday.in/television",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T08:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Studio Arbitration & Prime Time Royalty",
        "classification": "Direct Quote",
        "detail": "Past industry debates on actor rights in long-running television serials.",
        "sourceUrl": "https://www.indiatoday.in/television",
        "sourceName": "India Today Television",
        "verifiedAt": "2026-10-18T14:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Wildcard Secret Alliance Exposure",
        "classification": "On-Screen House Event",
        "detail": "Exposed the secret dining pact between Qazi and Kanika upon entering as a wildcard.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 24 Broadcast",
        "verifiedAt": "2026-10-24T22:30:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Clean organic footprint; nostalgia support from mature 35+ TV viewing demographics (>85% organic)."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 82,
        "organicRatio": 0.95,
        "rawVolume": 41000,
        "botCountEstimate": 500,
        "sampleSources": [
          "Colors TV Wildcard Clips"
        ]
      },
      "xTwitter": {
        "sentiment": 71,
        "organicRatio": 0.82,
        "rawVolume": 56000,
        "botCountEstimate": 4200,
        "sampleSources": [
          "#ManishGoel",
          "#WildcardBB20"
        ]
      },
      "instagram": {
        "sentiment": 79,
        "organicRatio": 0.86,
        "rawVolume": 62000,
        "botCountEstimate": 4800,
        "sampleSources": [
          "TV Retro Fandom"
        ]
      },
      "threads": {
        "sentiment": 75,
        "organicRatio": 0.9,
        "rawVolume": 9400,
        "botCountEstimate": 200,
        "sampleSources": [
          "Daily Soap Nostalgia"
        ]
      },
      "googleNews": {
        "sentiment": 76,
        "organicRatio": 0.98,
        "rawVolume": 5100,
        "botCountEstimate": 30,
        "sampleSources": [
          "Times of India TV",
          "Pinkvilla"
        ]
      }
    }
  },
  {
    "id": "c14",
    "name": "Aman Gandhi",
    "nickname": "Aman",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Challenger",
    "status": "Active",
    "isNominated": true,
    "rawSentiment": 71,
    "trueOrganicSentiment": 66,
    "prInflationDelta": 5,
    "prInfiltrationRate": 22,
    "evictionRiskTier": "Vocal Bubble / At Risk",
    "evictionProbability": 28,
    "silentMajorityIndex": 69,
    "loudMinorityIndex": 72,
    "recentNarrativeEdit": "Neutral Edit",
    "votingTrajectory": "Stable",
    "tossTrend7d": [
      68,
      68,
      67,
      66,
      67,
      65,
      66
    ],
    "bio": "Young television actor known for dynamic supporting roles in top-rated Hindi daily soaps. Brings high energy and enthusiastic alliance camaraderie into Bigg Boss 20.",
    "pastDetails": "Recognized for portraying prominent roles in Bhagya Lakshmi (Ayush), Kundali Bhagya, and Naagin. Active television career spanning youth dramas.",
    "controversies": [
      "On-set disagreements regarding screen time parity in ensemble television serials (2023)",
      "Heated social media arguments with television critic handles"
    ],
    "houseGameplay": "Loyal and enthusiastic team player. Always backs his friends in task physical face-offs. Frequently targeted by opposing factions during nomination deliberations.",
    "strongestMove": "Held the physical water bucket for 42 minutes during the nomination sacrifice task, saving his alliance partner from the danger zone.",
    "hinglishProfile": {
      "bio": "TV daily soaps ka energetic actor. Bhagya Lakshmi aur Kundali Bhagya se popular hua youth face.",
      "pastDetails": "Bhagya Lakshmi ka Ayush aur Naagin ka popular actor.",
      "controversies": [
        "Television critics ke saath online arguments"
      ],
      "houseGameplay": "Dosto ke liye khada rehta hai. Tasks mein poori physical energy lagata hai.",
      "strongestMove": "42 minute tak water bucket hold karke apne dost ko nomination se bacha liya."
    },
    "profession": [
      "Television Actor",
      "Model"
    ],
    "careerCredits": [
      "Bhagya Lakshmi (Ayush)",
      "Kundali Bhagya",
      "Naagin 3",
      "Daayan"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@amangandhi_official",
        "url": "https://www.instagram.com/amangandhi_official",
        "followerCount": "680K"
      }
    ],
    "statusVerifiedAt": "2026-11-01T12:00:00+05:30",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "Times of India Television",
        "url": "https://timesofindia.indiatimes.com/entertainment",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T08:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Television Screen Time Parity Disagreements",
        "classification": "External Allegation",
        "detail": "Reported creative friction over character development in ensemble daily soap formats.",
        "sourceUrl": "https://timesofindia.indiatimes.com/entertainment",
        "sourceName": "Times of India Television",
        "verifiedAt": "2026-10-12T15:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Bucket Task Endurance Sacrifice",
        "classification": "On-Screen House Event",
        "detail": "Endured 42 minutes under cold water pressure to save his alliance from the nomination guillotine.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 22 Broadcast",
        "verifiedAt": "2026-10-22T22:15:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Authentic fan club activity from daily soap fan accounts (<18% bot presence)."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 74,
        "organicRatio": 0.94,
        "rawVolume": 44000,
        "botCountEstimate": 700,
        "sampleSources": [
          "Colors TV Bhagya Lakshmi Clips"
        ]
      },
      "xTwitter": {
        "sentiment": 72,
        "organicRatio": 0.68,
        "rawVolume": 78000,
        "botCountEstimate": 16000,
        "sampleSources": [
          "#AmanGandhi",
          "#BB20Live"
        ]
      },
      "instagram": {
        "sentiment": 80,
        "organicRatio": 0.79,
        "rawVolume": 82000,
        "botCountEstimate": 9500,
        "sampleSources": [
          "@amangandhi fan pages"
        ]
      },
      "threads": {
        "sentiment": 69,
        "organicRatio": 0.88,
        "rawVolume": 11000,
        "botCountEstimate": 300,
        "sampleSources": [
          "Daily Soap Fandom Threads"
        ]
      },
      "googleNews": {
        "sentiment": 71,
        "organicRatio": 0.96,
        "rawVolume": 4800,
        "botCountEstimate": 40,
        "sampleSources": [
          "India Today TV",
          "Pinkvilla"
        ]
      }
    }
  },
  {
    "id": "c15",
    "name": "Rohed Khan",
    "nickname": "Rohed",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Underdog",
    "status": "Evicted",
    "isNominated": false,
    "evictionWeek": 1,
    "rawSentiment": 52,
    "trueOrganicSentiment": 26,
    "prInflationDelta": 26,
    "prInfiltrationRate": 52,
    "evictionRiskTier": "High Danger",
    "evictionProbability": 84,
    "silentMajorityIndex": 22,
    "loudMinorityIndex": 44,
    "recentNarrativeEdit": "Ghost Edit",
    "votingTrajectory": "Plummeting",
    "tossTrend7d": [
      48,
      42,
      38,
      32,
      29,
      27,
      26
    ],
    "bio": "Actor and commercial model who was the first contestant eliminated from Bigg Boss 20 in Week 1. Overwhelmed by the 24/7 camera pressure and stayed passive in premiere tasks.",
    "pastDetails": "Fashion model and commercial actor appearing in major brand campaigns and music videos.",
    "controversies": [
      "Early modeling agency disputes over exclusive management representation (2023)"
    ],
    "houseGameplay": "Remained extremely quiet during the first week. Did not take a stand in household chores or premiere arguments, leading to an early exit.",
    "strongestMove": "Attempted to build a bridge between the kitchen and bedroom factions on Day 3 before getting nominated.",
    "hinglishProfile": {
      "bio": "Model aur actor jo Week 1 mein Bigg Boss 20 se eliminate hone wala pehla contestant bana.",
      "pastDetails": "Commercial model aur brand campaigns ka face.",
      "controversies": [
        "Modeling agency representation disputes"
      ],
      "houseGameplay": "Shuruat se hi bohot shaant raha aur muddo pe stand nahi liya, jiski wajah se pehle hi hafte evict ho gaya.",
      "strongestMove": "Day 3 par factions ke beech sulah karwane ki koshish ki."
    },
    "profession": [
      "Model",
      "Actor"
    ],
    "careerCredits": [
      "Commercial Brand Ambassador",
      "Fashion Runway Model",
      "Music Video Performer"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@rohedkhan_official",
        "url": "https://www.instagram.com/rohedkhan_official",
        "followerCount": "340K"
      }
    ],
    "statusVerifiedAt": "2026-09-13T23:00:00+05:30",
    "statusVerificationSource": "Colors TV Official Elimination Broadcast & JioHotstar Exit Tape",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar Week 1 Eviction Episode",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-09-13T23:00:00+05:30"
      },
      {
        "label": "Colors TV Official Elimination Announcement",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-09-13T22:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Week 1 Quiet Edit Elimination",
        "classification": "On-Screen House Event",
        "detail": "Suffered from acute invisibility in the premiere week edit, receiving only 2.8% of public vote share.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 7 Broadcast (Week 1 Weekend Ka Vaar)",
        "verifiedAt": "2026-09-13T23:00:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Minimal organic voting mobilization; brief PR hashtag burst failed to translate to votes."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 38,
        "organicRatio": 0.92,
        "rawVolume": 18000,
        "botCountEstimate": 400,
        "sampleSources": [
          "Colors TV Elimination Clips"
        ]
      },
      "xTwitter": {
        "sentiment": 62,
        "organicRatio": 0.44,
        "rawVolume": 32000,
        "botCountEstimate": 14000,
        "sampleSources": [
          "#RohedKhan",
          "#BB20Eviction"
        ]
      },
      "instagram": {
        "sentiment": 58,
        "organicRatio": 0.61,
        "rawVolume": 28000,
        "botCountEstimate": 6200,
        "sampleSources": [
          "Model Fandom Pages"
        ]
      },
      "threads": {
        "sentiment": 36,
        "organicRatio": 0.84,
        "rawVolume": 4200,
        "botCountEstimate": 200,
        "sampleSources": [
          "Premiere Week Critiques"
        ]
      },
      "googleNews": {
        "sentiment": 48,
        "organicRatio": 0.95,
        "rawVolume": 2900,
        "botCountEstimate": 30,
        "sampleSources": [
          "The Indian Express",
          "Times of India"
        ]
      }
    }
  },
  {
    "id": "c16",
    "name": "Isha Rikhi",
    "nickname": "Isha",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Underdog",
    "status": "Evicted",
    "isNominated": false,
    "evictionWeek": 2,
    "rawSentiment": 56,
    "trueOrganicSentiment": 32,
    "prInflationDelta": 24,
    "prInfiltrationRate": 46,
    "evictionRiskTier": "High Danger",
    "evictionProbability": 79,
    "silentMajorityIndex": 29,
    "loudMinorityIndex": 48,
    "recentNarrativeEdit": "Ghost Edit",
    "votingTrajectory": "Plummeting",
    "tossTrend7d": [
      51,
      46,
      42,
      38,
      35,
      33,
      32
    ],
    "bio": "Punjabi feature film actress who was eliminated in Week 2 of Bigg Boss 20. Known for polite, conflict-averse demeanor that failed to secure audience voting momentum.",
    "pastDetails": "Lead actress in acclaimed Punjabi feature films including Jatt Boys: Putt Jattan De, Happy Go Lucky, and Bollywood film Nawabzaade.",
    "controversies": [
      "Past regional cinema casting disputes and distribution delays (2021)"
    ],
    "houseGameplay": "Polite and cordial with all housemates. Avoided entering shouting matches, but her hesitation to take a clear side in kitchen disputes left her vulnerable.",
    "strongestMove": "Volunteered to cook dinner for the entire house during the ration penalty lockout, ensuring no housemate went hungry.",
    "hinglishProfile": {
      "bio": "Punjabi cinema ki lead actress jo Week 2 mein Bigg Boss 20 se eliminate hui.",
      "pastDetails": "Jatt Boys aur Nawabzaade ki lead heroine.",
      "controversies": [
        "Cinema distribution and release disputes"
      ],
      "houseGameplay": "Bohot sweet aur polite rahi par Bigg Boss ke aggressive format mein uska gentle nature vote nahi kheench paaya.",
      "strongestMove": "Ration lockout ke dauran sabke liye dinner banakar housemates ki bhookh mitayi."
    },
    "profession": [
      "Punjabi Film Actress",
      "Model"
    ],
    "careerCredits": [
      "Jatt Boys: Putt Jattan De",
      "Happy Go Lucky",
      "Nawabzaade (Bollywood)",
      "Top Punjabi Music Videos"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@isharikhi",
        "url": "https://www.instagram.com/isharikhi",
        "followerCount": "1.2M"
      }
    ],
    "statusVerifiedAt": "2026-09-20T23:00:00+05:30",
    "statusVerificationSource": "Colors TV Official Elimination Broadcast & JioHotstar Exit Tape",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar Week 2 Eviction Episode",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-09-20T23:00:00+05:30"
      },
      {
        "label": "Colors TV Official Elimination Announcement",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-09-20T22:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Week 2 Passive Gameplay Eviction",
        "classification": "On-Screen House Event",
        "detail": "Eliminated in Week 2 after failing to register presence in nomination arguments, trailing bottom voting share.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 14 Broadcast (Week 2 Weekend Ka Vaar)",
        "verifiedAt": "2026-09-20T23:00:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Modest Twitter PR campaign failed to offset lack of organic YouTube casual voting."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 44,
        "organicRatio": 0.94,
        "rawVolume": 26000,
        "botCountEstimate": 500,
        "sampleSources": [
          "Colors TV Punjabi Highlights"
        ]
      },
      "xTwitter": {
        "sentiment": 68,
        "organicRatio": 0.49,
        "rawVolume": 48000,
        "botCountEstimate": 19000,
        "sampleSources": [
          "#IshaRikhi",
          "#BB20Elimination"
        ]
      },
      "instagram": {
        "sentiment": 62,
        "organicRatio": 0.67,
        "rawVolume": 39000,
        "botCountEstimate": 7800,
        "sampleSources": [
          "Punjabi Film Updates"
        ]
      },
      "threads": {
        "sentiment": 41,
        "organicRatio": 0.88,
        "rawVolume": 5100,
        "botCountEstimate": 200,
        "sampleSources": [
          "Week 2 Review Threads"
        ]
      },
      "googleNews": {
        "sentiment": 54,
        "organicRatio": 0.96,
        "rawVolume": 3600,
        "botCountEstimate": 30,
        "sampleSources": [
          "The Tribune",
          "PTC Punjabi"
        ]
      }
    }
  },
  {
    "id": "c17",
    "name": "Rhiti Tiwari",
    "nickname": "Rhiti",
    "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Underdog",
    "status": "Evicted",
    "isNominated": false,
    "evictionWeek": 3,
    "rawSentiment": 58,
    "trueOrganicSentiment": 34,
    "prInflationDelta": 24,
    "prInfiltrationRate": 44,
    "evictionRiskTier": "High Danger",
    "evictionProbability": 76,
    "silentMajorityIndex": 31,
    "loudMinorityIndex": 52,
    "recentNarrativeEdit": "Ghost Edit",
    "votingTrajectory": "Plummeting",
    "tossTrend7d": [
      53,
      49,
      44,
      40,
      37,
      35,
      34
    ],
    "bio": "Singer, creator, and stage performer who was evicted in Week 3 of Bigg Boss 20. Stood up for individual integrity, but got overwhelmed by aggressive alliances.",
    "pastDetails": "Popular digital vocalist and live stage artist with a dedicated regional following.",
    "controversies": [
      "Digital music streaming rights and cover song disputes (2023)"
    ],
    "houseGameplay": "Tried to build creative friendships through music, but became an easy target during the Week 3 luxury task nominations.",
    "strongestMove": "Sang an uplifting folk rendition during the midnight house gathering that eased rising tensions between rival factions.",
    "hinglishProfile": {
      "bio": "Singer aur performer jo Week 3 mein Bigg Boss 20 se eliminate hui.",
      "pastDetails": "Live stage vocalist aur digital creator.",
      "controversies": [
        "Music covers copyright notices"
      ],
      "houseGameplay": "Musically talented par house ke aggressive politics mein fit nahi ho paayi.",
      "strongestMove": "Midnight task mein folk song gaa kar factions ke beech ladai ko calm kiya."
    },
    "profession": [
      "Singer",
      "Digital Creator",
      "Performer"
    ],
    "careerCredits": [
      "Live Concert Performer",
      "Trending Digital Folk & Pop Singles",
      "Independent Music Awards Nominee"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@rhiti_tiwari",
        "url": "https://www.instagram.com/rhiti_tiwari",
        "followerCount": "490K"
      }
    ],
    "statusVerifiedAt": "2026-09-27T23:00:00+05:30",
    "statusVerificationSource": "Colors TV Official Elimination Broadcast & JioHotstar Exit Tape",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar Week 3 Eviction Episode",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-09-27T23:00:00+05:30"
      },
      {
        "label": "Colors TV Official Elimination Announcement",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-09-27T22:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "Week 3 Task Elimination Collapse",
        "classification": "On-Screen House Event",
        "detail": "Eliminated on Day 21 after receiving the lowest cumulative public votes during Week 3 nominations.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 21 Broadcast (Week 3 Weekend Ka Vaar)",
        "verifiedAt": "2026-09-27T23:00:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Coordinated bot retweets could not disguise very low real-time voter turnout on JioHotstar."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 47,
        "organicRatio": 0.93,
        "rawVolume": 29000,
        "botCountEstimate": 600,
        "sampleSources": [
          "Colors TV Music Moments"
        ]
      },
      "xTwitter": {
        "sentiment": 69,
        "organicRatio": 0.51,
        "rawVolume": 51000,
        "botCountEstimate": 21000,
        "sampleSources": [
          "#RhitiTiwari",
          "#BB20Week3"
        ]
      },
      "instagram": {
        "sentiment": 65,
        "organicRatio": 0.69,
        "rawVolume": 42000,
        "botCountEstimate": 8200,
        "sampleSources": [
          "Singer Fan Circles"
        ]
      },
      "threads": {
        "sentiment": 44,
        "organicRatio": 0.89,
        "rawVolume": 5800,
        "botCountEstimate": 250,
        "sampleSources": [
          "Music & Show Critiques"
        ]
      },
      "googleNews": {
        "sentiment": 56,
        "organicRatio": 0.96,
        "rawVolume": 3900,
        "botCountEstimate": 40,
        "sampleSources": [
          "Hindustan Times",
          "India Today"
        ]
      }
    }
  },
  {
    "id": "c18",
    "name": "Neelam Giri",
    "nickname": "Neelam",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
    "role": "Underdog",
    "status": "Evicted",
    "isNominated": false,
    "evictionWeek": 4,
    "rawSentiment": 54,
    "trueOrganicSentiment": 33,
    "prInflationDelta": 21,
    "prInfiltrationRate": 40,
    "evictionRiskTier": "High Danger",
    "evictionProbability": 74,
    "silentMajorityIndex": 34,
    "loudMinorityIndex": 49,
    "recentNarrativeEdit": "Ghost Edit",
    "votingTrajectory": "Plummeting",
    "tossTrend7d": [
      50,
      46,
      42,
      38,
      36,
      34,
      33
    ],
    "bio": "Bhojpuri cinema actress and music video star who was eliminated in Week 4 of Bigg Boss 20. Subsumed under Aamrapali Dubey’s massive regional shadow, leading to quiet elimination.",
    "pastDetails": "Leading roles in 20+ Bhojpuri films and trending regional music videos with over 100M+ views across YouTube.",
    "controversies": [
      "Film casting and music label exclusive dance choreography disputes (2022)"
    ],
    "houseGameplay": "Quiet kitchen support. Avoided independent conflict narratives; regional votes gravitated entirely toward Aamrapali Dubey, leaving Neelam in the bottom danger zone.",
    "strongestMove": "Managed the entire house morning breakfast preparation single-handedly during the kitchen boycott in Week 2.",
    "hinglishProfile": {
      "bio": "Bhojpuri actress jo Week 4 mein Bigg Boss 20 se eliminate hui.",
      "pastDetails": "20 se zyada Bhojpuri filmo aur hit music videos ki leading actress.",
      "controversies": [
        "Music label exclusive agreements disputes"
      ],
      "houseGameplay": "Aamrapali Dubey ke shadow mein reh gayi aur independent mudda nahi utha paayi.",
      "strongestMove": "Week 2 ke kitchen boycott mein akele sabka breakfast taiyar kiya."
    },
    "profession": [
      "Bhojpuri Film Actress",
      "Music Video Performer",
      "Dancer"
    ],
    "careerCredits": [
      "Leading roles in 20+ Bhojpuri films",
      "Trending regional music videos (100M+ views)",
      "Live stage performance tours"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@neelamgiri_",
        "url": "https://www.instagram.com/neelamgiri_",
        "followerCount": "2.9M"
      }
    ],
    "statusVerifiedAt": "2026-10-04T23:00:00+05:30",
    "statusVerificationSource": "Colors TV Official Elimination Broadcast & JioHotstar Exit Tape",
    "verificationState": "Broadcaster Verified",
    "primarySourceUrls": [
      {
        "label": "JioHotstar Week 4 Eviction Episode",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-10-04T23:00:00+05:30"
      },
      {
        "label": "Colors TV Official Elimination Announcement",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-10-04T22:30:00+05:30"
      }
    ],
    "structuredControversies": [
      {
        "title": "The Silent Kitchen Edit Eviction",
        "classification": "On-Screen House Event",
        "detail": "Subsumed under Aamrapali Dubey’s leadership, received under 8 minutes airtime in Week 4, culminating in official Week 4 eviction.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 28 Broadcast (Week 4 Weekend Ka Vaar)",
        "verifiedAt": "2026-10-04T23:00:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "detectedAstroturfPatterns": [
      "Low vote conversion: regional followers did not split votes from Aamrapali Dubey."
    ],
    "platforms": {
      "youtube": {
        "sentiment": 48,
        "organicRatio": 0.95,
        "rawVolume": 32000,
        "botCountEstimate": 600,
        "sampleSources": [
          "Colors TV Bhojpuri Clips"
        ]
      },
      "xTwitter": {
        "sentiment": 66,
        "organicRatio": 0.54,
        "rawVolume": 44000,
        "botCountEstimate": 16000,
        "sampleSources": [
          "#NeelamGiri",
          "#BB20Eviction"
        ]
      },
      "instagram": {
        "sentiment": 68,
        "organicRatio": 0.71,
        "rawVolume": 51000,
        "botCountEstimate": 8800,
        "sampleSources": [
          "Regional Fandom Pages"
        ]
      },
      "threads": {
        "sentiment": 46,
        "organicRatio": 0.89,
        "rawVolume": 6200,
        "botCountEstimate": 200,
        "sampleSources": [
          "Week 4 Eviction Discussions"
        ]
      },
      "googleNews": {
        "sentiment": 58,
        "organicRatio": 0.97,
        "rawVolume": 4100,
        "botCountEstimate": 40,
        "sampleSources": [
          "Dainik Jagran",
          "India Today"
        ]
      }
    }
  }
];

export const EVICTED_CONTESTANTS_TIMELINE: EvictedContestantTimelineItem[] = [
  {
    "week": 1,
    "weekLabel": "Week 1 Eviction",
    "evictionDate": "Day 7 · September 13, 2026",
    "contestantId": "c15",
    "name": "Rohed Khan",
    "nickname": "Rohed",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    "daysInHouse": 7,
    "finalTossScore": 26,
    "finalPrDelta": 26,
    "evictionReason": "Premiere Week Invisibility: Overwhelmed by the 24/7 camera scrutiny, failed to take a stand in initial tasks, and secured only 2.8% of the public vote share on JioHotstar.",
    "prVsOrganicCollapse": "Brief Twitter hashtag push failed to generate real votes. Trailed bottom 2 by 62,000 votes.",
    "headlineQuote": "\"Silence in Week 1 is an immediate exit ticket in Bigg Boss 20.\"",
    "hinglishReason": "Pehle hi hafte camera pressure mein chup raha aur muddo pe koi stand nahi liya. 2.8% votes ke sath sabse pehla eviction bana.",
    "hinglishHeadline": "\"Bigg Boss 20 mein chup rehna sabse bada jurm hai.\"",
    "broadcasterVerificationUrl": "https://www.jiohotstar.com/",
    "broadcasterVerifiedAt": "2026-09-13T23:00:00+05:30",
    "verificationState": "Broadcaster Confirmed"
  },
  {
    "week": 2,
    "weekLabel": "Week 2 Eviction",
    "evictionDate": "Day 14 · September 20, 2026",
    "contestantId": "c16",
    "name": "Isha Rikhi",
    "nickname": "Isha",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    "daysInHouse": 14,
    "finalTossScore": 32,
    "finalPrDelta": 24,
    "evictionReason": "Conflict Avoidance: Polite demeanor and unwillingness to confront aggressive housemates left her invisible in weekly episode edits.",
    "prVsOrganicCollapse": "Regional social followers did not translate to active JioHotstar voting activity during the mid-week nomination squeeze.",
    "headlineQuote": "\"Politeness without gameplay cannot survive the Tathas-two house.\"",
    "hinglishReason": "Ghar ke jhagdo se door rehne aur overly polite hone ki wajah se episode edits mein screen time nahi mila aur Week 2 mein bahar ho gayi.",
    "hinglishHeadline": "\"Sirf accha banne se janta ke votes nahi milte.\"",
    "broadcasterVerificationUrl": "https://www.jiohotstar.com/",
    "broadcasterVerifiedAt": "2026-09-20T23:00:00+05:30",
    "verificationState": "Broadcaster Confirmed"
  },
  {
    "week": 3,
    "weekLabel": "Week 3 Eviction",
    "evictionDate": "Day 21 · September 27, 2026",
    "contestantId": "c17",
    "name": "Rhiti Tiwari",
    "nickname": "Rhiti",
    "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80",
    "daysInHouse": 21,
    "finalTossScore": 34,
    "finalPrDelta": 24,
    "evictionReason": "Alliance Marginalization: Lacked an organized voting bloc or core faction backing during the high-stakes Tathas-two sacrifice challenge.",
    "prVsOrganicCollapse": "Underdog sympathy failed to counter Scout and Kanika’s mass voter turnout in the 6-way nomination pool.",
    "headlineQuote": "\"Talent gets you through the front door, but alliances keep you in the house.\"",
    "hinglishReason": "Kisi strong faction ka hissa nahi ban paayi aur nomination pool mein mass vote banks ke samne drop ho gayi.",
    "hinglishHeadline": "\"Bigg Boss mein akele ladna bina alliance ke mushkil hota hai.\"",
    "broadcasterVerificationUrl": "https://www.jiohotstar.com/",
    "broadcasterVerifiedAt": "2026-09-27T23:00:00+05:30",
    "verificationState": "Broadcaster Confirmed"
  },
  {
    "week": 4,
    "weekLabel": "Week 4 Eviction",
    "evictionDate": "Day 28 · October 4, 2026",
    "contestantId": "c18",
    "name": "Neelam Giri",
    "nickname": "Neelam",
    "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
    "daysInHouse": 28,
    "finalTossScore": 33,
    "finalPrDelta": 21,
    "evictionReason": "The Regional Vote Cannibalization: Regional Bhojpuri votes rallied overwhelmingly behind senior superstar Aamrapali Dubey, leaving Neelam with inadequate voting share in the bottom 2.",
    "prVsOrganicCollapse": "Quiet kitchen contribution failed to yield standalone broadcast storylines against active frontline combatants.",
    "headlineQuote": "\"Living in the shadow of a giant leaves you in the dark.\"",
    "hinglishReason": "Aamrapali Dubey ke presence mein Purvanchal ke saare votes Aamrapali ko chale gaye aur Neelam bottom danger zone mein phas gayi.",
    "hinglishHeadline": "\"Bhojpuri janta ne Aamrapali ko choose kiya aur Neelam bahar ho gayi.\"",
    "broadcasterVerificationUrl": "https://www.jiohotstar.com/",
    "broadcasterVerifiedAt": "2026-10-04T23:00:00+05:30",
    "verificationState": "Broadcaster Confirmed"
  }
];

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
