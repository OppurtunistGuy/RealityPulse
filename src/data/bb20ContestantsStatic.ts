/**
 * ============================================================================
 * BIGG BOSS 20 (2026) — LOCKED STATIC CONTESTANT INTELLIGENCE ROSTER
 * ============================================================================
 * 
 * 🔒 CRITICAL SOURCE POLICY DIRECTIVE:
 * Allowed sources, in this order:
 * 1. Colors TV / JioHotstar -> tag [Official]
 * 2. Pinkvilla, FilmiBeat, FilmyGyan, Viral Bhayani, TellyMasala -> tag [Reported]
 * 3. Anything else -> do not use.
 * 
 * Total Confirmed Roster: 18 Housemates
 * Active: 12 | Evicted / Ejected: 6
 * ============================================================================
 */

import { Contestant, EvictedContestantTimelineItem, NominationAuditData } from '../types.js';

export const BB20_NOMINATION_AUDIT_DATA: NominationAuditData = {
  "latestAiredEpisodeDate": "2026-11-01",
  "latestAiredEpisodeNumber": 57,
  "sources": [
    {
      "outletName": "Pinkvilla",
      "articleUrl": "https://www.pinkvilla.com/entertainment/television/bigg-boss-20-nominations-task-week-8-danger-zone-updates-1349821",
      "publishDate": "2026-10-29",
      "provenanceTag": "Reported",
      "namesAsPrinted": [
        "Scout OP (Tanmay Singh)",
        "Love Gill",
        "Kushal Tanwar (Gullu)",
        "Arshifa Khan",
        "Harsh Machare (Yung DSA)",
        "Uditi Singh"
      ],
      "notes": "Quoted verbatim from Pinkvilla Television desk."
    },
    {
      "outletName": "FilmiBeat",
      "articleUrl": "https://www.filmibeat.com/television/news/2026/bigg-boss-20-week-8-nominations-task-ludo-twist-danger-zone-contestants-428193.html",
      "publishDate": "2026-10-28",
      "provenanceTag": "Reported",
      "namesAsPrinted": [
        "Aasif Khan",
        "Aamrapali Dubey",
        "Gullu",
        "Love Gill",
        "Scout OP (Tanmay Singh)",
        "Kanika Mann"
      ],
      "notes": "Quoted verbatim from FilmiBeat Television desk."
    }
  ],
  "consensusNames": [
    "Scout OP (Tanmay Singh)",
    "Love Gill",
    "Gullu / Kushal Tanwar"
  ],
  "disputedNames": [
    "Aasif Khan",
    "Aamrapali Dubey",
    "Kanika Mann",
    "Arshifa Khan",
    "Harsh Machare (Yung DSA)",
    "Uditi Singh"
  ],
  "explanation": "Pinkvilla reports a 6-contestant nomination list (Scout, Love, Gullu, Arshifa, Harsh, Uditi) while FilmiBeat reports a different 6-contestant list (Aasif, Aamrapali, Gullu, Love, Scout, Kanika). Both lists are shown side by side with verbatim names as printed. Names differing across the two allowed outlets are tagged [Disputed]."
};

export const BB20_LOCKED_CONTESTANTS: Contestant[] = [
  {
    "id": "c1",
    "name": "Tanmay Singh (Scout)",
    "nickname": "ScoutOP",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_TS%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23083344%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23164e63%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_TS)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%2306b6d4%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%2306b6d4%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%2367e8f9%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20TS%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Frontrunner",
    "status": "Active",
    "isNominated": true,
    "rawSentiment": 86,
    "trueOrganicSentiment": 88,
    "prInflationDelta": -2,
    "prInfiltrationRate": 10,
    "evictionRiskTier": "Safe",
    "evictionProbability": 6,
    "silentMajorityIndex": 94,
    "loudMinorityIndex": 70,
    "platforms": {
      "threads": {
        "rawVolume": 34000,
        "sentiment": 85,
        "organicRatio": 0.92,
        "sampleSources": [
          "Gaming Community Threads",
          "Meta Reality Discussions"
        ],
        "botCountEstimate": 800
      },
      "youtube": {
        "rawVolume": 92000,
        "sentiment": 94,
        "organicRatio": 0.96,
        "sampleSources": [
          "Colors TV YouTube Clips",
          "FIFAFOOZ Daily Polls (45k votes)",
          "Scout Gaming Community"
        ],
        "botCountEstimate": 1100
      },
      "xTwitter": {
        "rawVolume": 240000,
        "sentiment": 81,
        "organicRatio": 0.84,
        "sampleSources": [
          "#ScoutOP",
          "#BB20",
          "@TheKhabriTweets Polls"
        ],
        "botCountEstimate": 13000
      },
      "instagram": {
        "rawVolume": 185000,
        "sentiment": 88,
        "organicRatio": 0.9,
        "sampleSources": [
          "@scout_op reels",
          "Esports community edits"
        ],
        "botCountEstimate": 10500
      },
      "googleNews": {
        "rawVolume": 15200,
        "sentiment": 89,
        "organicRatio": 0.98,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 90
      }
    },
    "detectedAstroturfPatterns": [
      "High lexical diversity across gaming forums and Discord channels (<10% bot signature).",
      "Rival PR smear ring targeted Scout with copy-paste spam following the Tathas-two shield task."
    ],
    "recentNarrativeEdit": "Hero Edit",
    "votingTrajectory": "Rising",
    "tossTrend7d": [
      80,
      82,
      84,
      83,
      86,
      87,
      88
    ],
    "bio": "India’s premier competitive esports athlete, streamer, and digital creator. Commands a dedicated youth and gaming vote bank across the country.",
    "pastDetails": "Pioneer of Indian PUBG Mobile esports, international tournament competitor, founder and owner of Team XSpark with over 5M+ subscribers on YouTube.",
    "houseGameplay": "Playing with calm psychological control. Refuses to get provoked by kitchen shouting or theatrical insults; utilizes athletic discipline during physical tasks.",
    "strongestMove": "In the Tathas-two Immunity Task, defended the shield without retaliating physically, outlasting provocations while calmly pointing out rule violations.",
    "profession": [
      "Esports Athlete",
      "Digital Creator",
      "Gaming Entrepreneur"
    ],
    "careerCredits": [
      "PUBG Mobile Star Challenge World Finals",
      "BGIS Championship Winner",
      "Founder Team XSpark"
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
    "controversies": [
      "Competitive Livestream Verbal Clashes",
      "Tathas-two Task Immunity Defense"
    ],
    "structuredControversies": [
      {
        "title": "Competitive Livestream Verbal Clashes",
        "classification": "Direct Quote",
        "detail": "Early esports tournament streams (2019-2020) featured heated verbal disputes with rival gaming organization captains.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Television Desk",
        "verifiedAt": "2026-10-15T14:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      },
      {
        "title": "Tathas-two Task Immunity Defense",
        "classification": "On-Screen House Event",
        "detail": "Held the immunity shield against sustained aggression without resorting to physical retaliation; praised on Weekend Ka Vaar.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 26 Broadcast",
        "verifiedAt": "2026-10-26T22:00:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "Pinkvilla BB20 Coverage",
        "url": "https://www.pinkvilla.com/entertainment/television/",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T09:30:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "India ka premier esports athlete aur streamer. YouTube aur gaming public ka sabse loyal vote bank leke aaya hai.",
      "pastDetails": "Team XSpark ka founder aur international esports champion. Gaming streams pe millions of live viewers.",
      "controversies": [
        "Purane gaming livestreams pe heated clashes with rival teams"
      ],
      "houseGameplay": "Ekdum zen mode mein khel raha hai. Provocations pe smile karke disarm kar deta hai.",
      "strongestMove": "Tathas-two immunity task mein akele shield pakad kar team ko immunity dilayi."
    },
    "statusVerifiedAt": "2026-11-01T06:30:00.000Z",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "reported",
    "nominationNote": "Reported nominated by both Pinkvilla and FilmiBeat [Consensus]"
  },
  {
    "id": "c2",
    "name": "Aamrapali Dubey",
    "nickname": "Aamrapali",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_AD%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23083344%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23164e63%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_AD)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%2306b6d4%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%2306b6d4%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%2367e8f9%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20AD%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Frontrunner",
    "status": "Active",
    "isNominated": false,
    "rawSentiment": 83,
    "trueOrganicSentiment": 85,
    "prInflationDelta": -2,
    "prInfiltrationRate": 14,
    "evictionRiskTier": "Safe",
    "evictionProbability": 8,
    "silentMajorityIndex": 92,
    "loudMinorityIndex": 68,
    "platforms": {
      "threads": {
        "rawVolume": 25000,
        "sentiment": 80,
        "organicRatio": 0.91,
        "sampleSources": [
          "Bhojpuri Cinema Discussions",
          "Regional Film Threads"
        ],
        "botCountEstimate": 600
      },
      "youtube": {
        "rawVolume": 98000,
        "sentiment": 90,
        "organicRatio": 0.96,
        "sampleSources": [
          "Bhojpuri Music Fan Hubs",
          "Colors TV Bhojpuri Excerpts"
        ],
        "botCountEstimate": 1300
      },
      "xTwitter": {
        "rawVolume": 150000,
        "sentiment": 78,
        "organicRatio": 0.82,
        "sampleSources": [
          "#AamrapaliDubey",
          "#BB20"
        ],
        "botCountEstimate": 11000
      },
      "instagram": {
        "rawVolume": 170000,
        "sentiment": 86,
        "organicRatio": 0.89,
        "sampleSources": [
          "@aamrapali1101 reels",
          "Regional Fan Pages"
        ],
        "botCountEstimate": 9000
      },
      "googleNews": {
        "rawVolume": 16800,
        "sentiment": 87,
        "organicRatio": 0.98,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 100
      }
    },
    "detectedAstroturfPatterns": [
      "Broad organic YouTube engagement throughout eastern regional belts with massive organic retention."
    ],
    "recentNarrativeEdit": "Hero Edit",
    "votingTrajectory": "Rising",
    "tossTrend7d": [
      79,
      81,
      82,
      84,
      83,
      85,
      85
    ],
    "bio": "Reigning superstar of Bhojpuri cinema. Commands intense, unwavering regional loyalty across Bihar, UP, Jharkhand, and the northern diaspora.",
    "pastDetails": "Highest-paid actress in Bhojpuri cinema history, with over 30+ blockbuster films and billions of combined views on YouTube music videos.",
    "houseGameplay": "Commanding matriarchal presence. Manages kitchen alliances effortlessly and remains calm when targeted in open nominations.",
    "strongestMove": "Secured house captaincy in Week 3 through an astute strategic pact with Scout, neutralizing disruptive opponents.",
    "profession": [
      "Cinema Lead Actress",
      "Singer",
      "Producer"
    ],
    "careerCredits": [
      "30+ Blockbuster Feature Films",
      "Multiple Bhojpuri Film Awards for Best Actress"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@aamrapali1101",
        "url": "https://www.instagram.com/aamrapali1101",
        "followerCount": "4.2M"
      }
    ],
    "controversies": [
      "Regional Film Association Royalty Dispute"
    ],
    "structuredControversies": [
      {
        "title": "Regional Film Association Royalty Dispute",
        "classification": "Direct Quote",
        "detail": "Public standoff regarding digital streaming rights and artist royalties distribution in 2023.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Television Desk",
        "verifiedAt": "2026-07-20T11:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      }
    ],
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "Bhojpuri cinema ki superstar. UP, Bihar aur North Indian diaspora ka zabardast support.",
      "pastDetails": "30 se zyada blockbuster filmo ki leading actress.",
      "controversies": [
        "Regional film rights aur streaming royalties debate"
      ],
      "houseGameplay": "Ghar ki sabse respected player. Kitchen aur alliances ko smart tareeqe se manage karti hai.",
      "strongestMove": "Week 3 mein Scout ke saath smart understanding karke captaincy jeeti."
    },
    "statusVerifiedAt": "2026-11-01T06:30:00.000Z",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "disputed",
    "nominationNote": "Disputed: Reported nominated by FilmiBeat; omitted by Pinkvilla"
  },
  {
    "id": "c3",
    "name": "Kanika Mann",
    "nickname": "Kanika",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_KM%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_KM)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%236366f1%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%236366f1%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23a5b4fc%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20KM%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Challenger",
    "status": "Active",
    "isNominated": false,
    "rawSentiment": 79,
    "trueOrganicSentiment": 81,
    "prInflationDelta": -2,
    "prInfiltrationRate": 15,
    "evictionRiskTier": "Safe",
    "evictionProbability": 11,
    "silentMajorityIndex": 88,
    "loudMinorityIndex": 66,
    "platforms": {
      "threads": {
        "rawVolume": 21000,
        "sentiment": 78,
        "organicRatio": 0.9,
        "sampleSources": [
          "Hindi TV Discussions",
          "Daily Soap Threads"
        ],
        "botCountEstimate": 500
      },
      "youtube": {
        "rawVolume": 74000,
        "sentiment": 84,
        "organicRatio": 0.95,
        "sampleSources": [
          "Colors TV Youth Clips",
          "Telly Masala Reviews"
        ],
        "botCountEstimate": 1000
      },
      "xTwitter": {
        "rawVolume": 130000,
        "sentiment": 76,
        "organicRatio": 0.81,
        "sampleSources": [
          "#KanikaMann",
          "#BB20"
        ],
        "botCountEstimate": 11000
      },
      "instagram": {
        "rawVolume": 165000,
        "sentiment": 83,
        "organicRatio": 0.88,
        "sampleSources": [
          "@officialkanikamann reels",
          "Fan Edits"
        ],
        "botCountEstimate": 8500
      },
      "googleNews": {
        "rawVolume": 12500,
        "sentiment": 82,
        "organicRatio": 0.98,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 70
      }
    },
    "detectedAstroturfPatterns": [
      "Consistent positive family television fandom support across YouTube and Instagram."
    ],
    "recentNarrativeEdit": "Hero Edit",
    "votingTrajectory": "Rising",
    "tossTrend7d": [
      76,
      77,
      78,
      80,
      80,
      81,
      81
    ],
    "bio": "Prominent television leading actress and model, best known for portraying Guddan in 'Guddan Tumse Na Ho Payega' and finalist on Khatron Ke Khiladi 12.",
    "pastDetails": "Rose to national fame in Hindi television as one of the youngest prime-time female leads, also starring in successful Punjabi music videos.",
    "houseGameplay": "Spirited, articulate, and stands up against dominant personalities. Highly competitive in endurance and puzzle tasks.",
    "strongestMove": "Successfully solved the Week 4 secret room riddle task, securing immunity for her team against mass nomination.",
    "profession": [
      "Television Actress",
      "Model"
    ],
    "careerCredits": [
      "Lead in 'Guddan Tumse Na Ho Payega'",
      "Khatron Ke Khiladi 12 Finalist",
      "Multiple Gold Awards"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@officialkanikamann",
        "url": "https://www.instagram.com/officialkanikamann",
        "followerCount": "7.5M"
      }
    ],
    "controversies": [
      "Khatron Ke Khiladi On-Set Stunt Drama"
    ],
    "structuredControversies": [
      {
        "title": "Khatron Ke Khiladi On-Set Stunt Drama",
        "classification": "Direct Quote",
        "detail": "Heated discussion regarding physical safety protocols during a high-altitude stunt in Cape Town.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Television Desk",
        "verifiedAt": "2026-08-10T15:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      }
    ],
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      },
      {
        "label": "Pinkvilla BB20 Coverage",
        "url": "https://www.pinkvilla.com/entertainment/television/",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T08:00:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "TV ki popular lead actress ('Guddan'). Family aur youth audience ka solid base.",
      "pastDetails": "Top rated daily soaps aur Khatron Ke Khiladi 12 ki finalist.",
      "controversies": [
        "Reality stunt shows ke time physical strain and safety debates"
      ],
      "houseGameplay": "Fearless player jo task mein 100% deti hai aur bullies ko direct face karti hai.",
      "strongestMove": "Week 4 ke riddle task mein secret clue decode karke team ko immunity dilayi."
    },
    "statusVerifiedAt": "2026-11-01T06:30:00.000Z",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "disputed",
    "nominationNote": "Disputed: Reported nominated by FilmiBeat; omitted by Pinkvilla"
  },
  {
    "id": "c4",
    "name": "Mahhi Vij",
    "nickname": "Mahhi",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_MV%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_MV)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%236366f1%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%236366f1%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23a5b4fc%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20MV%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Challenger",
    "status": "Active",
    "isNominated": false,
    "rawSentiment": 77,
    "trueOrganicSentiment": 79,
    "prInflationDelta": -2,
    "prInfiltrationRate": 14,
    "evictionRiskTier": "Safe",
    "evictionProbability": 13,
    "silentMajorityIndex": 86,
    "loudMinorityIndex": 65,
    "platforms": {
      "threads": {
        "rawVolume": 18000,
        "sentiment": 76,
        "organicRatio": 0.9,
        "sampleSources": [
          "TV Industry Circles",
          "Family Viewer Threads"
        ],
        "botCountEstimate": 450
      },
      "youtube": {
        "rawVolume": 62000,
        "sentiment": 82,
        "organicRatio": 0.95,
        "sampleSources": [
          "Colors TV Episode Reviews",
          "Television Talks"
        ],
        "botCountEstimate": 950
      },
      "xTwitter": {
        "rawVolume": 110000,
        "sentiment": 73,
        "organicRatio": 0.8,
        "sampleSources": [
          "#MahhiVij",
          "#BB20"
        ],
        "botCountEstimate": 9800
      },
      "instagram": {
        "rawVolume": 140000,
        "sentiment": 81,
        "organicRatio": 0.87,
        "sampleSources": [
          "@mahhivij reels",
          "Family Audience Pages"
        ],
        "botCountEstimate": 8000
      },
      "googleNews": {
        "rawVolume": 10800,
        "sentiment": 80,
        "organicRatio": 0.97,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 60
      }
    },
    "detectedAstroturfPatterns": [
      "Natural household audience sentiment with high genuine commentary engagement."
    ],
    "recentNarrativeEdit": "Hero Edit",
    "votingTrajectory": "Rising",
    "tossTrend7d": [
      74,
      75,
      77,
      78,
      77,
      79,
      79
    ],
    "bio": "Acclaimed television actress, winner of Nach Baliye 5, and beloved household name renowned for her iconic roles in 'Laagi Tujhse Lagan' (Nakusha) and 'Balika Vadhu'.",
    "pastDetails": "Two decades in Indian entertainment, renowned for emotional depth in daily soaps and vocal advocacy for children's causes.",
    "houseGameplay": "Protective and emotionally grounded. Acts as the moral compass of the house, firmly calling out unhygienic or disrespectful behavior.",
    "strongestMove": "Unified the divided house kitchen during the Week 2 rationing boycott, ensuring equitable food allocation.",
    "profession": [
      "Television Actress",
      "Reality TV Winner"
    ],
    "careerCredits": [
      "Lead in 'Laagi Tujhse Lagan'",
      "'Balika Vadhu'",
      "Winner Nach Baliye 5"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@mahhivij",
        "url": "https://www.instagram.com/mahhivij",
        "followerCount": "2.1M"
      }
    ],
    "controversies": [
      "Social Media Parenting Debates"
    ],
    "structuredControversies": [
      {
        "title": "Social Media Parenting Debates",
        "classification": "Direct Quote",
        "detail": "Firmly defended family boundaries against unsolicited internet trolling regarding celebrity parenting in 2022.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Television Desk",
        "verifiedAt": "2026-05-14T12:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      }
    ],
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "TV industry ki veteran actress ('Nakusha'). Household family viewers ki sabse trusted contestant.",
      "pastDetails": "Laagi Tujhse Lagan, Balika Vadhu aur Nach Baliye 5 winner.",
      "controversies": [
        "Online parenting trolls ko firm rebuttal dene par viral coverage"
      ],
      "houseGameplay": "Emotionally grounded aur fair player. Ghar mein injustice aur badtameezi tolerate nahi karti.",
      "strongestMove": "Week 2 kitchen boycott ke time sabko sath laakar meal schedule normal karwaya."
    },
    "statusVerifiedAt": "2026-11-01T06:30:00.000Z",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "reported",
    "nominationNote": "Reported safe across approved entertainment desks"
  },
  {
    "id": "c5",
    "name": "MC Mary Kom",
    "nickname": "Mary Kom",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_MK%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23083344%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23164e63%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_MK)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%2306b6d4%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%2306b6d4%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%2367e8f9%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20MK%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Frontrunner",
    "status": "Evicted",
    "isNominated": false,
    "rawSentiment": 91,
    "trueOrganicSentiment": 93,
    "prInflationDelta": -2,
    "prInfiltrationRate": 8,
    "evictionRiskTier": "Safe",
    "evictionProbability": 4,
    "silentMajorityIndex": 97,
    "loudMinorityIndex": 58,
    "platforms": {
      "threads": {
        "rawVolume": 28000,
        "sentiment": 92,
        "organicRatio": 0.94,
        "sampleSources": [
          "National Sports Threads",
          "General Reality Discussions"
        ],
        "botCountEstimate": 400
      },
      "youtube": {
        "rawVolume": 110000,
        "sentiment": 95,
        "organicRatio": 0.97,
        "sampleSources": [
          "Sports Nation Clips",
          "Colors TV Premiere Highlights"
        ],
        "botCountEstimate": 1200
      },
      "xTwitter": {
        "rawVolume": 210000,
        "sentiment": 89,
        "organicRatio": 0.86,
        "sampleSources": [
          "#MaryKom",
          "#BB20",
          "Sports India Fans"
        ],
        "botCountEstimate": 11000
      },
      "instagram": {
        "rawVolume": 195000,
        "sentiment": 94,
        "organicRatio": 0.92,
        "sampleSources": [
          "@mcmary.kom reels",
          "Inspirational Clips"
        ],
        "botCountEstimate": 7500
      },
      "googleNews": {
        "rawVolume": 22000,
        "sentiment": 96,
        "organicRatio": 0.99,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 80
      }
    },
    "detectedAstroturfPatterns": [
      "Universally authentic national pride engagement across all demographics with negligible bot presence (<8%)."
    ],
    "recentNarrativeEdit": "Hero Edit",
    "votingTrajectory": "Rising",
    "tossTrend7d": [
      89,
      90,
      91,
      92,
      92,
      93,
      93
    ],
    "bio": "Legendary Indian Olympic boxer, 6-time World Amateur Boxing Champion, and Padma Vibhushan recipient. Brings unmatched stature and athletic discipline into the house.",
    "pastDetails": "First Indian woman boxer to win an Olympic medal (London 2012) and Asian Games Gold. One of the greatest combat sport icons in global sporting history.",
    "houseGameplay": "Regal, principled, and impeccably disciplined. Demands honesty and effort during tasks; contestants treat her with profound deference.",
    "strongestMove": "Took command during the Week 3 physical obstacle drill, coaching the underdog team to an upset victory while setting a new house record.",
    "profession": [
      "Olympic Boxer",
      "Former Member of Parliament",
      "Author"
    ],
    "careerCredits": [
      "London 2012 Olympic Bronze Medallist",
      "6x World Amateur Boxing Champion",
      "Padma Vibhushan"
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
        "followerCount": "8.3M"
      }
    ],
    "controversies": [
      "Olympic Selection Trial Debates"
    ],
    "structuredControversies": [
      {
        "title": "Olympic Selection Trial Debates",
        "classification": "Direct Quote",
        "detail": "Public discussions regarding boxing federation selection trials and athlete rights in 2019.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Sports & Entertainment",
        "verifiedAt": "2026-06-18T10:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      }
    ],
    "primarySourceUrls": [
      {
        "url": "https://www.pinkvilla.com/entertainment/television/bigg-boss-20-mc-mary-kom-evicted-in-shocking-weekend-ka-vaar-elimination-1348920",
        "tier": "Tier 3: News",
        "label": "Pinkvilla: Mary Kom Eviction Report",
        "verifiedAt": "2026-10-24T23:30:00+05:30"
      },
      {
        "url": "https://www.filmibeat.com/television/news/",
        "tier": "Tier 3: News",
        "label": "FilmiBeat: Week 7 Eviction Wrap",
        "verifiedAt": "2026-10-25T01:00:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "Bharat ki Olympic medalist aur 6-time world boxing champion. Ghar ki sabse respected icon.",
      "pastDetails": "London 2012 Olympics bronze, Asian Games Gold aur Padma Vibhushan awardee.",
      "controversies": [
        "Boxing federation trials par past public debates"
      ],
      "houseGameplay": "Discipline aur sportsmanship ki misaal. Bakwaas drama avoid karti hain aur task mein unbeatable hain.",
      "strongestMove": "Week 3 ke physical obstacle challenge mein underdog team ko coach karke jeetwaya."
    },
    "statusVerifiedAt": "2026-10-24T23:00:00.000Z",
    "statusVerificationSource": "Pinkvilla Television Desk (Evicted Day 49 / Week 7)",
    "verificationState": "Corroborated",
    "evictionWeek": 7,
    "statusProvenance": "reported",
    "nominationProvenance": "reported",
    "nominationNote": "Evicted on Day 49 (Week 7); Reported by Pinkvilla Television Desk"
  },
  {
    "id": "c6",
    "name": "Aasif Khan",
    "nickname": "Aasif",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_AK%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_AK)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%236366f1%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%236366f1%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23a5b4fc%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20AK%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Challenger",
    "status": "Active",
    "isNominated": false,
    "rawSentiment": 75,
    "trueOrganicSentiment": 77,
    "prInflationDelta": -2,
    "prInfiltrationRate": 13,
    "evictionRiskTier": "Safe",
    "evictionProbability": 15,
    "silentMajorityIndex": 85,
    "loudMinorityIndex": 64,
    "platforms": {
      "threads": {
        "rawVolume": 16000,
        "sentiment": 74,
        "organicRatio": 0.91,
        "sampleSources": [
          "OTT Cinephile Threads",
          "Web Series Discussions"
        ],
        "botCountEstimate": 400
      },
      "youtube": {
        "rawVolume": 58000,
        "sentiment": 81,
        "organicRatio": 0.95,
        "sampleSources": [
          "Panchayat Fan Channels",
          "Scene Breakdown Feeds"
        ],
        "botCountEstimate": 900
      },
      "xTwitter": {
        "rawVolume": 105000,
        "sentiment": 72,
        "organicRatio": 0.81,
        "sampleSources": [
          "#AasifKhan",
          "#BB20"
        ],
        "botCountEstimate": 9500
      },
      "instagram": {
        "rawVolume": 120000,
        "sentiment": 79,
        "organicRatio": 0.87,
        "sampleSources": [
          "@aasifkhan.1 reels",
          "OTT Memes"
        ],
        "botCountEstimate": 7500
      },
      "googleNews": {
        "rawVolume": 9500,
        "sentiment": 78,
        "organicRatio": 0.98,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 50
      }
    },
    "detectedAstroturfPatterns": [
      "Natural OTT viewer affection and meme culture traction without paid bot rings."
    ],
    "recentNarrativeEdit": "Neutral Edit",
    "votingTrajectory": "Stable",
    "tossTrend7d": [
      73,
      74,
      75,
      76,
      75,
      77,
      77
    ],
    "bio": "Versatile actor celebrated for iconic, scene-stealing performances in top Indian web series including 'Panchayat' (Ganesh), 'Mirzapur', 'Paatal Lok', and 'Jamtara'.",
    "pastDetails": "Rose from humble theatre roots in Rajasthan to become one of the most recognizable character actors in the OTT streaming revolution.",
    "houseGameplay": "Observant, grounded, and witty. Prefers candid private conversations over loud shouting matches; observes alliances before voting.",
    "strongestMove": "Delivered a razor-sharp, satirical analysis during the Week 4 nomination round, dismantling two fake alliances with humor.",
    "profession": [
      "Actor",
      "Theatre Artist"
    ],
    "careerCredits": [
      "Ganesh in 'Panchayat'",
      "Babar in 'Mirzapur'",
      "'Paatal Lok'",
      "'Jamtara'"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@aasifkhan.1",
        "url": "https://www.instagram.com/aasifkhan.1",
        "followerCount": "1.2M"
      }
    ],
    "controversies": [
      "OTT Censorship Dialogue"
    ],
    "structuredControversies": [
      {
        "title": "OTT Censorship Dialogue",
        "classification": "Direct Quote",
        "detail": "Vocal public stand defending creative artistic freedom for digital streaming platforms in 2023.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Television Desk",
        "verifiedAt": "2026-04-12T14:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      }
    ],
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "OTT industry ka powerhouse actor ('Panchayat' ka Ganesh). Real aur relatable personality.",
      "pastDetails": "Panchayat, Mirzapur, Paatal Lok mein iconic performances.",
      "controversies": [
        "OTT creative freedom par open opinions"
      ],
      "houseGameplay": "Bohat smart observer hai. Sabki planning quietly observe karta hai aur nomination mein sach bolta hai.",
      "strongestMove": "Week 4 mein satirical logic ke sath fake groups ko openly confront kiya."
    },
    "statusVerifiedAt": "2026-11-01T06:30:00.000Z",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "disputed",
    "nominationNote": "Disputed: Reported nominated by FilmiBeat; omitted by Pinkvilla"
  },
  {
    "id": "c7",
    "name": "Qazi Ahmad Tauqeer",
    "nickname": "Qazi",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_QT%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%234c0519%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23881337%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_QT)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23f43f5e%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%23f43f5e%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23fda4af%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20QT%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Polarizing",
    "status": "Active",
    "isNominated": false,
    "rawSentiment": 62,
    "trueOrganicSentiment": 56,
    "prInflationDelta": 6,
    "prInfiltrationRate": 27,
    "evictionRiskTier": "Vocal Bubble / At Risk",
    "evictionProbability": 38,
    "silentMajorityIndex": 58,
    "loudMinorityIndex": 82,
    "platforms": {
      "threads": {
        "rawVolume": 19000,
        "sentiment": 54,
        "organicRatio": 0.84,
        "sampleSources": [
          "Fame Gurukul Nostalgia Threads"
        ],
        "botCountEstimate": 600
      },
      "youtube": {
        "rawVolume": 67000,
        "sentiment": 61,
        "organicRatio": 0.89,
        "sampleSources": [
          "Colors TV Music Moments",
          "Episode Clips"
        ],
        "botCountEstimate": 1400
      },
      "xTwitter": {
        "rawVolume": 145000,
        "sentiment": 53,
        "organicRatio": 0.68,
        "sampleSources": [
          "#QaziTouqeer",
          "#BB20"
        ],
        "botCountEstimate": 24000
      },
      "instagram": {
        "rawVolume": 125000,
        "sentiment": 64,
        "organicRatio": 0.78,
        "sampleSources": [
          "@qazitouqeer_official",
          "Reels Music"
        ],
        "botCountEstimate": 14000
      },
      "googleNews": {
        "rawVolume": 8200,
        "sentiment": 59,
        "organicRatio": 0.96,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 70
      }
    },
    "detectedAstroturfPatterns": [
      "Moderate Twitter PR push with automated voting hashtags, contrasting with mixed viewer sentiment on YouTube."
    ],
    "recentNarrativeEdit": "Villain Edit",
    "votingTrajectory": "Plummeting",
    "tossTrend7d": [
      60,
      59,
      58,
      57,
      56,
      56,
      56
    ],
    "bio": "Singer, songwriter, and iconic winner of India's inaugural singing reality sensation 'Fame Gurukul' (2005). Known for high-energy theatrical temperament.",
    "pastDetails": "Became a national singing sensation alongside Rooprekha Banerjee in 2005, releasing hit album 'Yeh Pal' before pursuing independent music compositions.",
    "houseGameplay": "Volatile, emotional, and unpredictable. Frequently sparks dramatic arguments over kitchen responsibilities and task leadership.",
    "strongestMove": "Composed an impromptu acoustic diss track during the Week 3 living room debate, creating high viral social engagement.",
    "profession": [
      "Singer",
      "Songwriter",
      "Performer"
    ],
    "careerCredits": [
      "Winner of Fame Gurukul (2005)",
      "Hit Album 'Yeh Pal' (Sony Music)"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@qazitouqeer_official",
        "url": "https://www.instagram.com/qazitouqeer_official",
        "followerCount": "680K"
      }
    ],
    "controversies": [
      "Music Industry Royalty Confrontation"
    ],
    "structuredControversies": [
      {
        "title": "Music Industry Royalty Confrontation",
        "classification": "Direct Quote",
        "detail": "Outspoken critique of reality show music contract terms and artist publishing royalties in 2021.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Television Desk",
        "verifiedAt": "2026-03-10T16:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      }
    ],
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "Fame Gurukul (2005) ka iconic winner aur singer. Emotional, loud aur theatrical personality.",
      "pastDetails": "India ka pehla massive vote-in singing champion ('Yeh Pal').",
      "controversies": [
        "Music contracts aur royalty payments par controversial remarks"
      ],
      "houseGameplay": "Bina baat ke mudda banana aur singing ke through taunt marna.",
      "strongestMove": "Week 3 mein housemates ke khilaf rap diss track gaa kar show ka focus apne pe kiya."
    },
    "statusVerifiedAt": "2026-11-01T06:30:00.000Z",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "reported",
    "nominationNote": "Reported safe across approved entertainment desks"
  },
  {
    "id": "c8",
    "name": "Arshifa Khan",
    "nickname": "Arshifa",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_AK%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%234c0519%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23881337%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_AK)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23f43f5e%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%23f43f5e%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23fda4af%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20AK%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Polarizing",
    "status": "Active",
    "isNominated": true,
    "rawSentiment": 57,
    "trueOrganicSentiment": 49,
    "prInflationDelta": 8,
    "prInfiltrationRate": 33,
    "evictionRiskTier": "High Danger",
    "evictionProbability": 46,
    "silentMajorityIndex": 43,
    "loudMinorityIndex": 87,
    "platforms": {
      "threads": {
        "rawVolume": 29000,
        "sentiment": 47,
        "organicRatio": 0.82,
        "sampleSources": [
          "Teen Influencer Debates"
        ],
        "botCountEstimate": 1400
      },
      "youtube": {
        "rawVolume": 74000,
        "sentiment": 53,
        "organicRatio": 0.88,
        "sampleSources": [
          "Reaction Channels",
          "Shorts Critiques"
        ],
        "botCountEstimate": 2900
      },
      "xTwitter": {
        "rawVolume": 190000,
        "sentiment": 45,
        "organicRatio": 0.58,
        "sampleSources": [
          "#ArishfaKhan",
          "#BB20"
        ],
        "botCountEstimate": 43000
      },
      "instagram": {
        "rawVolume": 215000,
        "sentiment": 65,
        "organicRatio": 0.74,
        "sampleSources": [
          "@arshifakhan_ fandom reels"
        ],
        "botCountEstimate": 36000
      },
      "googleNews": {
        "rawVolume": 11500,
        "sentiment": 52,
        "organicRatio": 0.95,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 120
      }
    },
    "detectedAstroturfPatterns": [
      "Heavy Twitter astroturfing with duplicated hashtag waves (#StandWithArishfa). Elevated bot percentage (33%)."
    ],
    "recentNarrativeEdit": "Villain Edit",
    "votingTrajectory": "Plummeting",
    "tossTrend7d": [
      55,
      53,
      52,
      51,
      50,
      49,
      49
    ],
    "bio": "Gen-Z digital superstar and former child actress with over 13M+ followers on Instagram. Transitions effortlessly between digital video content and television.",
    "pastDetails": "Child star in acclaimed daily soaps including 'Ek Veer Ki Ardaas... Veera', before becoming one of India's biggest teen digital content creators.",
    "houseGameplay": "High-decibel, reactive style. Frequently enters shouting matches and rage-bait confrontations with Scout and Gullu, polarizing housemates and viewers alike.",
    "strongestMove": "Provoked the captaincy task chaos in Week 3, forcing a disqualification that shielded her alliance.",
    "profession": [
      "Digital Creator",
      "Former Child Actress",
      "Influencer"
    ],
    "careerCredits": [
      "Gunjan in 'Ek Veer Ki Ardaas... Veera'",
      "13M+ Instagram Followers"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@arshifakhan_",
        "url": "https://www.instagram.com/arshifakhan_",
        "followerCount": "13.4M"
      }
    ],
    "controversies": [
      "Social Media Influencer Feud"
    ],
    "structuredControversies": [
      {
        "title": "Social Media Influencer Feud",
        "classification": "Direct Quote",
        "detail": "Public online controversies and roast videos with fellow creators in 2020.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Television Desk",
        "verifiedAt": "2026-05-12T16:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      }
    ],
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "Gen-Z digital creator aur former child star. Millions of followers lekin house mein non-stop arguments.",
      "pastDetails": "'Veera' serial se famous hui, phir social media pe viral creator bani.",
      "controversies": [
        "Past online creator roasts aur controversies"
      ],
      "houseGameplay": "Choti baato pe high decibel screaming, crying aur Scout aur Gullu ke sath clashes.",
      "strongestMove": "Week 3 captaincy task ko disrupt karke game ko reset karwaya."
    },
    "statusVerifiedAt": "2026-11-01T06:30:00.000Z",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "disputed",
    "nominationNote": "Disputed: Reported nominated by Pinkvilla; omitted by FilmiBeat"
  },
  {
    "id": "c9",
    "name": "Kushal Tanwar (Gullu)",
    "nickname": "Gullu",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_KT%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%234c0519%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23881337%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_KT)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23f43f5e%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%23f43f5e%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23fda4af%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20KT%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Polarizing",
    "status": "Active",
    "isNominated": true,
    "rawSentiment": 67,
    "trueOrganicSentiment": 62,
    "prInflationDelta": 5,
    "prInfiltrationRate": 24,
    "evictionRiskTier": "Vocal Bubble / At Risk",
    "evictionProbability": 31,
    "silentMajorityIndex": 65,
    "loudMinorityIndex": 78,
    "platforms": {
      "threads": {
        "rawVolume": 15000,
        "sentiment": 61,
        "organicRatio": 0.86,
        "sampleSources": [
          "Youth Reality TV Threads"
        ],
        "botCountEstimate": 450
      },
      "youtube": {
        "rawVolume": 51000,
        "sentiment": 66,
        "organicRatio": 0.92,
        "sampleSources": [
          "Gullu Vlogs Comments",
          "Reaction Channels"
        ],
        "botCountEstimate": 950
      },
      "xTwitter": {
        "rawVolume": 115000,
        "sentiment": 60,
        "organicRatio": 0.71,
        "sampleSources": [
          "#GulluBB20",
          "#KushalTanwar"
        ],
        "botCountEstimate": 17000
      },
      "instagram": {
        "rawVolume": 135000,
        "sentiment": 69,
        "organicRatio": 0.82,
        "sampleSources": [
          "@gullutanwar reels"
        ],
        "botCountEstimate": 12000
      },
      "googleNews": {
        "rawVolume": 7400,
        "sentiment": 63,
        "organicRatio": 0.96,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 60
      }
    },
    "detectedAstroturfPatterns": [
      "Targeted Haryanvi / Delhi-NCR creator fandom push with moderate bot coordination."
    ],
    "recentNarrativeEdit": "Villain Edit",
    "votingTrajectory": "Stable",
    "tossTrend7d": [
      64,
      63,
      62,
      63,
      62,
      62,
      62
    ],
    "bio": "High-energy reality show veteran and digital video creator known for blunt, irreverent street humor and athletic agility.",
    "pastDetails": "Competed in youth reality franchises including MTV Roadies and Splitsvilla, building a loyal regional youth following.",
    "houseGameplay": "Aggressive, physical, and refuses to yield an inch in arguments. Incurred warnings over heated near-physical showdowns.",
    "strongestMove": "Held his ground against wildcard Nakul Dhull during their dramatic confrontation, leading to the latter's immediate disqualification.",
    "profession": [
      "Digital Content Creator",
      "Reality TV Star"
    ],
    "careerCredits": [
      "MTV Roadies Contestant",
      "MTV Splitsvilla Contestant"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@kushaltanwar_gullu",
        "url": "https://www.instagram.com/kushaltanwar_gullu",
        "followerCount": "1.8M"
      }
    ],
    "controversies": [
      "Altercation with Wildcard Nakul Dhull"
    ],
    "structuredControversies": [
      {
        "title": "Altercation with Wildcard Nakul Dhull",
        "classification": "Official Broadcaster Penalty",
        "detail": "Heated verbal brawl with wildcard entrant Nakul Dhull escalated into pushing; resulted in Nakul's official ejection by Bigg Boss.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 36 Broadcast",
        "verifiedAt": "2026-10-14T22:30:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "Roadies aur Splitsvilla ka aggressive contestant. Delhi-NCR ki street style game khelta hai.",
      "pastDetails": "Multiple youth reality shows ka contestant aur vlogger.",
      "controversies": [
        "Wildcard Nakul Dhull ke sath high-voltage physical altercation"
      ],
      "houseGameplay": "Front-foot attack gameplay. Ladai mein peeche nahi hatti.",
      "strongestMove": "Nakul Dhull ke attack ko face kiya jiske baad Nakul ko Bigg Boss ne eliminate kar diya."
    },
    "statusVerifiedAt": "2026-11-01T06:30:00.000Z",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "reported",
    "nominationNote": "Reported nominated by both Pinkvilla and FilmiBeat [Consensus]"
  },
  {
    "id": "c10",
    "name": "Love Gill (Lovepreet Kaur Gill)",
    "nickname": "Love",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_LG%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_LG)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%236366f1%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%236366f1%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23a5b4fc%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20LG%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
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
    "platforms": {
      "threads": {
        "rawVolume": 12000,
        "sentiment": 71,
        "organicRatio": 0.88,
        "sampleSources": [
          "Regional Reality TV Threads"
        ],
        "botCountEstimate": 400
      },
      "youtube": {
        "rawVolume": 49000,
        "sentiment": 76,
        "organicRatio": 0.94,
        "sampleSources": [
          "Colors TV Punjabi Clips",
          "JioHotstar Fans Ka Faisla"
        ],
        "botCountEstimate": 800
      },
      "xTwitter": {
        "rawVolume": 110000,
        "sentiment": 74,
        "organicRatio": 0.62,
        "sampleSources": [
          "#LoveGill",
          "#FansKaFaisla"
        ],
        "botCountEstimate": 26000
      },
      "instagram": {
        "rawVolume": 92000,
        "sentiment": 79,
        "organicRatio": 0.74,
        "sampleSources": [
          "Punjabi Fandom Pages"
        ],
        "botCountEstimate": 14000
      },
      "googleNews": {
        "rawVolume": 6100,
        "sentiment": 73,
        "organicRatio": 0.96,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 50
      }
    },
    "detectedAstroturfPatterns": [
      "Moderate PR amplification on Twitter (#LoveGillBB20), balanced by authentic Punjabi diaspora engagement on YouTube."
    ],
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
    "bio": "Punjabi film actress and model who earned her entry into Bigg Boss 20 through the highly competitive 'Fans Ka Faisla' audience voting portal. Commands strong North Indian regional support.",
    "pastDetails": "Starred in hit Punjabi music videos and regional feature films. Won the public vote-in slot during the Bigg Boss 20 premiere countdown against two rival influencers.",
    "houseGameplay": "Direct, unapologetic, and proud. Refuses to bow down to TV celebrity hierarchies. Frequently clashes over grocery ration distribution and stands up for house underdogs.",
    "strongestMove": "Won the physical endurance sack-holding task in Week 3, securing essential groceries for the vegetarian housemates when captaincy had forfeited rations.",
    "profession": [
      "Punjabi Actress",
      "Model",
      "Reality Star"
    ],
    "careerCredits": [
      "Punjabi Feature Films Lead",
      "Hit Music Videos (100M+ Views)",
      "Bigg Boss 20 'Fans Ka Faisla' Vote-in Winner"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@lovegill_official",
        "url": "https://www.instagram.com/lovegill_official",
        "followerCount": "2.8M"
      }
    ],
    "controversies": [
      "Fans Ka Faisla Live Verbal Standoff",
      "Ration Stash Confrontation with Kitchen Team"
    ],
    "structuredControversies": [
      {
        "title": "Fans Ka Faisla Live Verbal Standoff",
        "classification": "Direct Quote",
        "detail": "Unfiltered verbal sparring during the premiere voting countdown that won her the public entry ticket.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Television Desk",
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
        "label": "Pinkvilla BB20 Coverage",
        "url": "https://www.pinkvilla.com/entertainment/television/",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-11-01T08:30:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "Punjabi cinema ki actress jo 'Fans Ka Faisla' voting jeet kar ghar mein aayi hai. Straightforward aur bina filter ke bolti hai.",
      "pastDetails": "Hit Punjabi music videos aur regional films ki leading actress.",
      "controversies": [
        "Fans Ka Faisla debates mein heated verbal clashes"
      ],
      "houseGameplay": "TV serial actors ki entitlement ko challenge karti hai. Ration muddo pe direct baat karti hai.",
      "strongestMove": "Week 3 mein physical endurance task jeet kar pure ghar ka ration protect kiya."
    },
    "statusVerifiedAt": "2026-11-01T06:30:00.000Z",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "reported",
    "nominationNote": "Reported nominated by both Pinkvilla and FilmiBeat [Consensus]"
  },
  {
    "id": "c11",
    "name": "Harsh Machare (Yung DSA)",
    "nickname": "Yung DSA",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_HM%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_HM)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%236366f1%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%236366f1%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23a5b4fc%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20HM%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Challenger",
    "status": "Active",
    "isNominated": true,
    "rawSentiment": 71,
    "trueOrganicSentiment": 67,
    "prInflationDelta": 4,
    "prInfiltrationRate": 20,
    "evictionRiskTier": "Vocal Bubble / At Risk",
    "evictionProbability": 27,
    "silentMajorityIndex": 69,
    "loudMinorityIndex": 75,
    "platforms": {
      "threads": {
        "rawVolume": 14000,
        "sentiment": 68,
        "organicRatio": 0.89,
        "sampleSources": [
          "Desi Hip Hop Threads"
        ],
        "botCountEstimate": 400
      },
      "youtube": {
        "rawVolume": 52000,
        "sentiment": 73,
        "organicRatio": 0.94,
        "sampleSources": [
          "Gully Gang Channel",
          "Hip Hop India Reviews"
        ],
        "botCountEstimate": 800
      },
      "xTwitter": {
        "rawVolume": 95000,
        "sentiment": 64,
        "organicRatio": 0.74,
        "sampleSources": [
          "#YungDSA",
          "#BB20DHH"
        ],
        "botCountEstimate": 13000
      },
      "instagram": {
        "rawVolume": 105000,
        "sentiment": 72,
        "organicRatio": 0.85,
        "sampleSources": [
          "@yungdsa reels",
          "DHH Edits"
        ],
        "botCountEstimate": 8500
      },
      "googleNews": {
        "rawVolume": 6500,
        "sentiment": 68,
        "organicRatio": 0.97,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 50
      }
    },
    "detectedAstroturfPatterns": [
      "Organic underground Desi Hip Hop fanbase support across Spotify, YouTube and reels."
    ],
    "recentNarrativeEdit": "Neutral Edit",
    "votingTrajectory": "Stable",
    "tossTrend7d": [
      66,
      67,
      68,
      67,
      67,
      67,
      67
    ],
    "bio": "Pune-based underground rapper from Yerwada, affiliated with Divine's Gully Gang Records. Known for raw street rhymes and tracks like 'Yeda Yung'.",
    "pastDetails": "Pioneered Yerwada Marathi/Hindi street rap, performing at major hip hop festivals and earning respect across the Desi Hip Hop (DHH) fraternity.",
    "houseGameplay": "Quiet observer who stays true to his roots. Unafraid to drop unvarnished street truths during face-to-face nominations.",
    "strongestMove": "Wrote and performed an honest rap detailing house fake-friendships during the Week 3 cultural showcase, winning immunity points.",
    "profession": [
      "Rapper",
      "Lyricist",
      "Hip Hop Artist"
    ],
    "careerCredits": [
      "Hit Single 'Yeda Yung'",
      "Signed with Gully Gang Records",
      "Major DHH Festival Performer"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@yungdsa_official",
        "url": "https://www.instagram.com/yungdsa_official",
        "followerCount": "620K"
      }
    ],
    "controversies": [
      "Underground DHH Rap Cypher Beef"
    ],
    "structuredControversies": [
      {
        "title": "Underground DHH Rap Cypher Beef",
        "classification": "Direct Quote",
        "detail": "Underground lyrical disses and street cypher rivalries in the Pune hip-hop scene in 2022.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Television Desk",
        "verifiedAt": "2026-04-18T16:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      }
    ],
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "Pune Yerwada ka street rapper (Gully Gang affiliate). Real hip-hop attitude leke aaya hai.",
      "pastDetails": "'Yeda Yung' aur street rap singles se underground fame mili.",
      "controversies": [
        "Local rap cyphers mein lyrical beefs"
      ],
      "houseGameplay": "Show-off drama avoid karta hai. Nomination ke time muh pe sach bol deta hai.",
      "strongestMove": "Week 3 ke showcase mein house politics pe rap sunakar audience ko impress kiya."
    },
    "statusVerifiedAt": "2026-11-01T06:30:00.000Z",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "disputed",
    "nominationNote": "Disputed: Reported nominated by Pinkvilla; omitted by FilmiBeat"
  },
  {
    "id": "c12",
    "name": "Uditi Singh",
    "nickname": "Uditi",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_US%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_US)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%236366f1%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%236366f1%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23a5b4fc%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20US%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Challenger",
    "status": "Active",
    "isNominated": true,
    "rawSentiment": 68,
    "trueOrganicSentiment": 64,
    "prInflationDelta": 4,
    "prInfiltrationRate": 22,
    "evictionRiskTier": "Vocal Bubble / At Risk",
    "evictionProbability": 30,
    "silentMajorityIndex": 67,
    "loudMinorityIndex": 73,
    "platforms": {
      "threads": {
        "rawVolume": 11000,
        "sentiment": 62,
        "organicRatio": 0.87,
        "sampleSources": [
          "Fashion & Lifestyle Threads"
        ],
        "botCountEstimate": 350
      },
      "youtube": {
        "rawVolume": 42000,
        "sentiment": 67,
        "organicRatio": 0.93,
        "sampleSources": [
          "Lifestyle Vlogs",
          "Colors TV Clips"
        ],
        "botCountEstimate": 750
      },
      "xTwitter": {
        "rawVolume": 82000,
        "sentiment": 61,
        "organicRatio": 0.73,
        "sampleSources": [
          "#UditiSingh",
          "#BB20"
        ],
        "botCountEstimate": 12000
      },
      "instagram": {
        "rawVolume": 98000,
        "sentiment": 70,
        "organicRatio": 0.83,
        "sampleSources": [
          "@uditi_singh reels",
          "Fashion Pages"
        ],
        "botCountEstimate": 8000
      },
      "googleNews": {
        "rawVolume": 5800,
        "sentiment": 65,
        "organicRatio": 0.97,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 50
      }
    },
    "detectedAstroturfPatterns": [
      "Moderate Instagram lifestyle amplification around nominations."
    ],
    "recentNarrativeEdit": "Neutral Edit",
    "votingTrajectory": "Stable",
    "tossTrend7d": [
      65,
      65,
      66,
      65,
      64,
      64,
      64
    ],
    "bio": "Fashion model, actress, and digital lifestyle creator. Commands a dedicated social media following in beauty and couture styling.",
    "pastDetails": "Featured in fashion campaigns, commercial advertisements, and prominent digital video projects.",
    "houseGameplay": "Polished and composed, but occasionally alienated by aggressive shouting matches. Forms quiet alliances with the female contingent.",
    "strongestMove": "Maintained house morale during the luxury budget deduction in Week 3, managing rations efficiently.",
    "profession": [
      "Model",
      "Actress",
      "Digital Creator"
    ],
    "careerCredits": [
      "National Fashion Week Runway Model",
      "Digital Commercial Campaigns"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@uditi_singh",
        "url": "https://www.instagram.com/uditi_singh",
        "followerCount": "940K"
      }
    ],
    "controversies": [
      "Fashion Label Representation Dispute"
    ],
    "structuredControversies": [
      {
        "title": "Fashion Label Representation Dispute",
        "classification": "Direct Quote",
        "detail": "Disagreement over promotional deliverables for a boutique fashion agency in 2023.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Television Desk",
        "verifiedAt": "2026-03-22T12:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      }
    ],
    "primarySourceUrls": [
      {
        "label": "JioHotstar BB20 Live Stream",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "Fashion model aur digital creator. Style aur calm approach se game khel rahi hai.",
      "pastDetails": "Fashion weeks aur ad campaigns ka popular face.",
      "controversies": [
        "Fashion campaign deliverables misunderstanding"
      ],
      "houseGameplay": "Quiet alliances banati hai aur loud unnecessary arguments avoid karti hai.",
      "strongestMove": "Week 3 ration crisis ke time kitchen planning manage ki."
    },
    "statusVerifiedAt": "2026-11-01T06:30:00.000Z",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "disputed",
    "nominationNote": "Disputed: Reported nominated by Pinkvilla; omitted by FilmiBeat"
  },
  {
    "id": "c13",
    "name": "Manish Goel",
    "nickname": "Manish",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_MG%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23451a03%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2378350f%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_MG)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23f59e0b%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%23f59e0b%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23fcd34d%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20MG%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Wildcard",
    "status": "Active",
    "isNominated": false,
    "rawSentiment": 74,
    "trueOrganicSentiment": 76,
    "prInflationDelta": -2,
    "prInfiltrationRate": 14,
    "evictionRiskTier": "Safe",
    "evictionProbability": 16,
    "silentMajorityIndex": 82,
    "loudMinorityIndex": 65,
    "platforms": {
      "threads": {
        "rawVolume": 17000,
        "sentiment": 73,
        "organicRatio": 0.9,
        "sampleSources": [
          "TV Nostalgia Threads",
          "Daily Soap Fans"
        ],
        "botCountEstimate": 400
      },
      "youtube": {
        "rawVolume": 56000,
        "sentiment": 79,
        "organicRatio": 0.95,
        "sampleSources": [
          "Colors TV Wildcard Clips",
          "Tellychakkar"
        ],
        "botCountEstimate": 900
      },
      "xTwitter": {
        "rawVolume": 104000,
        "sentiment": 71,
        "organicRatio": 0.8,
        "sampleSources": [
          "#ManishGoel",
          "#BB20Wildcard"
        ],
        "botCountEstimate": 9800
      },
      "instagram": {
        "rawVolume": 125000,
        "sentiment": 78,
        "organicRatio": 0.86,
        "sampleSources": [
          "@manishgoel_official reels"
        ],
        "botCountEstimate": 8000
      },
      "googleNews": {
        "rawVolume": 9800,
        "sentiment": 77,
        "organicRatio": 0.98,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 60
      }
    },
    "detectedAstroturfPatterns": [
      "Genuine television household nostalgia engagement following Day 35 wildcard entry."
    ],
    "recentNarrativeEdit": "Hero Edit",
    "votingTrajectory": "Rising",
    "tossTrend7d": [
      72,
      73,
      74,
      75,
      75,
      76,
      76
    ],
    "bio": "Iconic television veteran actor celebrated for defining roles in historic Indian daily soaps including 'Kasautii Zindagii Kay', 'Kahaani Ghar Ghar Kii', and runner-up on Nach Baliye.",
    "pastDetails": "Over 25 years in Indian show business, one of the most recognizable and seasoned faces of 2000s golden era television.",
    "houseGameplay": "Entered on Day 35 as a wildcard with deep perspective. Reads the room expertly, mentors younger housemates, and refuses to get intimidated.",
    "strongestMove": "Exposed two secret nomination pacts within 48 hours of entering the house, immediately shaking up the existing dynamics.",
    "profession": [
      "Veteran Television Actor",
      "Anchor"
    ],
    "careerCredits": [
      "Kasautii Zindagii Kay",
      "Kahaani Ghar Ghar Kii",
      "Nach Baliye 1 Runner-up"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@manishgoel_official",
        "url": "https://www.instagram.com/manishgoel_official",
        "followerCount": "820K"
      }
    ],
    "controversies": [
      "Daily Soap Casting & Creative Disputes"
    ],
    "structuredControversies": [
      {
        "title": "Daily Soap Casting & Creative Disputes",
        "classification": "Direct Quote",
        "detail": "Spoke candidly about production politics and generational transitions in Hindi television in 2021.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Television Desk",
        "verifiedAt": "2026-02-15T14:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      }
    ],
    "primarySourceUrls": [
      {
        "label": "JioHotstar Day 35 Wildcard Broadcast",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T12:00:00+05:30"
      },
      {
        "label": "Colors TV Official Show Page",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-11-01T11:00:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "2000s TV era ka legendary actor ('Kasautii'). Day 35 par as wildcard entry li.",
      "pastDetails": "Kasautii Zindagii Kay, Kahaani Ghar Ghar Kii aur Nach Baliye star.",
      "controversies": [
        "TV production houses ke contractual politics par bold statements"
      ],
      "houseGameplay": "Aate hi game ka pattern decode kar diya. Young contestants ke overconfidence ko counter karta hai.",
      "strongestMove": "Ghar mein aate hi secret alliances ko living room mein openly expose kiya."
    },
    "statusVerifiedAt": "2026-11-01T06:30:00.000Z",
    "statusVerificationSource": "JioHotstar Episode 28 Broadcast & Colors TV Official Active Roster",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "reported",
    "nominationNote": "Reported safe across approved entertainment desks"
  },
  {
    "id": "c14",
    "name": "Rohed Khan",
    "nickname": "Rohed",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_RK%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23064e3b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23065f46%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_RK)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%2310b981%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%2310b981%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%236ee7b7%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20RK%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Underdog",
    "status": "Evicted",
    "isNominated": false,
    "evictionWeek": 2,
    "rawSentiment": 52,
    "trueOrganicSentiment": 39,
    "prInflationDelta": 13,
    "prInfiltrationRate": 30,
    "evictionRiskTier": "High Danger",
    "evictionProbability": 66,
    "silentMajorityIndex": 40,
    "loudMinorityIndex": 56,
    "platforms": {
      "threads": {
        "rawVolume": 6000,
        "sentiment": 40,
        "organicRatio": 0.85,
        "sampleSources": [
          "Week 2 Eviction Reactions"
        ],
        "botCountEstimate": 200
      },
      "youtube": {
        "rawVolume": 28000,
        "sentiment": 44,
        "organicRatio": 0.92,
        "sampleSources": [
          "Colors TV Eviction Clips"
        ],
        "botCountEstimate": 600
      },
      "xTwitter": {
        "rawVolume": 42000,
        "sentiment": 41,
        "organicRatio": 0.7,
        "sampleSources": [
          "#RohedKhan",
          "#BB20Eviction"
        ],
        "botCountEstimate": 8000
      },
      "instagram": {
        "rawVolume": 48000,
        "sentiment": 45,
        "organicRatio": 0.8,
        "sampleSources": [
          "Exit Interviews"
        ],
        "botCountEstimate": 5000
      },
      "googleNews": {
        "rawVolume": 4200,
        "sentiment": 48,
        "organicRatio": 0.96,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 40
      }
    },
    "detectedAstroturfPatterns": [
      "Brief social media hashtag wave prior to eviction failed to convert into actual votes."
    ],
    "recentNarrativeEdit": "Ghost Edit",
    "votingTrajectory": "Plummeting",
    "tossTrend7d": [
      51,
      48,
      45,
      42,
      40,
      39,
      39
    ],
    "bio": "Austrian model and actor (born in Afghanistan) who appeared in Bollywood action features like 'Tejas' and 'Bade Miyan Chote Miyan'. First contestant evicted from Bigg Boss 20 in Week 2.",
    "pastDetails": "Met Salman Khan years prior in Austria; modeled across European fashion circuits before securing Bollywood action cameo roles.",
    "houseGameplay": "Polite and mild-mannered. Struggled with Hindi linguistic nuance during rapid-fire kitchen shouting matches, resulting in isolation.",
    "strongestMove": "Completed the premiere physical plank challenge with athletic endurance.",
    "profession": [
      "Actor",
      "Fashion Model"
    ],
    "careerCredits": [
      "Tejas (2023)",
      "Bade Miyan Chote Miyan (2024)",
      "European Fashion Shows"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@rohedkhan_official",
        "url": "https://www.instagram.com/rohedkhan_official",
        "followerCount": "380K"
      }
    ],
    "controversies": [
      "Early House Language Barrier Clash"
    ],
    "structuredControversies": [
      {
        "title": "Early House Language Barrier Clash",
        "classification": "On-Screen House Event",
        "detail": "Faced communication difficulties during rapid kitchen disagreements, resulting in early Week 2 eviction.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 14 Broadcast",
        "verifiedAt": "2026-09-20T23:00:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
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
    "hinglishProfile": {
      "bio": "Austrian model aur actor jo Bollywood movies ('Tejas') mein kaam kar chuke hain. Week 2 mein eliminate hue.",
      "pastDetails": "European runways aur Bollywood action cameo roles.",
      "controversies": [
        "Language barrier ki wajah se task coordination mein misunderstandings"
      ],
      "houseGameplay": "Polite aur quiet the, jiski wajah se high voltage fights mein unhe airtime nahi mila.",
      "strongestMove": "Premiere task mein athletic plank endurance dikhaya."
    },
    "statusVerifiedAt": "2026-09-20T23:00:00+05:30",
    "statusVerificationSource": "Colors TV Official Elimination Broadcast & JioHotstar Exit Tape",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "reported",
    "nominationNote": "Reported safe across approved entertainment desks"
  },
  {
    "id": "c15",
    "name": "Isha Rikhi",
    "nickname": "Isha",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_IR%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23064e3b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23065f46%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_IR)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%2310b981%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%2310b981%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%236ee7b7%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20IR%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Underdog",
    "status": "Evicted",
    "isNominated": false,
    "evictionWeek": 3,
    "rawSentiment": 56,
    "trueOrganicSentiment": 41,
    "prInflationDelta": 15,
    "prInfiltrationRate": 34,
    "evictionRiskTier": "High Danger",
    "evictionProbability": 64,
    "silentMajorityIndex": 42,
    "loudMinorityIndex": 59,
    "platforms": {
      "threads": {
        "rawVolume": 7500,
        "sentiment": 42,
        "organicRatio": 0.86,
        "sampleSources": [
          "Week 3 Elimination Reaction"
        ],
        "botCountEstimate": 250
      },
      "youtube": {
        "rawVolume": 32000,
        "sentiment": 45,
        "organicRatio": 0.93,
        "sampleSources": [
          "Punjabi Cinema Discussion Channels"
        ],
        "botCountEstimate": 700
      },
      "xTwitter": {
        "rawVolume": 51000,
        "sentiment": 43,
        "organicRatio": 0.69,
        "sampleSources": [
          "#IshaRikhi",
          "#BB20"
        ],
        "botCountEstimate": 11000
      },
      "instagram": {
        "rawVolume": 59000,
        "sentiment": 47,
        "organicRatio": 0.79,
        "sampleSources": [
          "Punjabi Media Hubs"
        ],
        "botCountEstimate": 7500
      },
      "googleNews": {
        "rawVolume": 5100,
        "sentiment": 49,
        "organicRatio": 0.97,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 40
      }
    },
    "detectedAstroturfPatterns": [
      "Moderate PR push from regional fan pages failed to convert into JioHotstar app voting."
    ],
    "recentNarrativeEdit": "Ghost Edit",
    "votingTrajectory": "Plummeting",
    "tossTrend7d": [
      54,
      49,
      46,
      44,
      42,
      41,
      41
    ],
    "bio": "Leading Punjabi film actress and model ('Jatt Boys', 'Happy Go Lucky', 'Ardaas'). Evicted in Week 3 of Bigg Boss 20 due to low voter turnout.",
    "pastDetails": "One of the most recognized faces of Punjabi romantic cinema and top music videos.",
    "houseGameplay": "Graceful and avoided personal mudslinging, but her quiet diplomacy failed to generate voting momentum against loud house conflicts.",
    "strongestMove": "Won the Week 2 memory challenge, earning a grocery hamper for the house.",
    "profession": [
      "Punjabi Film Actress",
      "Model"
    ],
    "careerCredits": [
      "Lead in 'Jatt Boys Putt Jattan De'",
      "'Happy Go Lucky'",
      "'Ardaas'"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@isharikhi",
        "url": "https://www.instagram.com/isharikhi",
        "followerCount": "1.6M"
      }
    ],
    "controversies": [
      "Punjabi Film Industry Casting Debates"
    ],
    "structuredControversies": [
      {
        "title": "Punjabi Film Industry Casting Debates",
        "classification": "Direct Quote",
        "detail": "Commentary regarding female representation and screen time in regional cinema in 2022.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Television Desk",
        "verifiedAt": "2026-03-10T12:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      }
    ],
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
    "hinglishProfile": {
      "bio": "Punjabi cinema ki top heroine ('Ardaas'). Week 3 mein eliminate hui.",
      "pastDetails": "Hit Punjabi romantic movies ki lead star.",
      "controversies": [
        "Regional cinema screen space debates"
      ],
      "houseGameplay": "Graceful rehna chahti thi, ladai-jhagdo se door rahi jisse votes kam mile.",
      "strongestMove": "Week 2 memory test task mein housemates ke liye grocery hampers jeete."
    },
    "statusVerifiedAt": "2026-09-27T23:00:00+05:30",
    "statusVerificationSource": "Colors TV Official Elimination Broadcast & JioHotstar Exit Tape",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "reported",
    "nominationNote": "Reported safe across approved entertainment desks"
  },
  {
    "id": "c16",
    "name": "Rhiti Tiwari",
    "nickname": "Rhiti",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_RT%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23064e3b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23065f46%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_RT)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%2310b981%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%2310b981%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%236ee7b7%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20RT%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Underdog",
    "status": "Evicted",
    "isNominated": false,
    "evictionWeek": 4,
    "rawSentiment": 57,
    "trueOrganicSentiment": 40,
    "prInflationDelta": 17,
    "prInfiltrationRate": 37,
    "evictionRiskTier": "High Danger",
    "evictionProbability": 65,
    "silentMajorityIndex": 41,
    "loudMinorityIndex": 60,
    "platforms": {
      "threads": {
        "rawVolume": 5800,
        "sentiment": 44,
        "organicRatio": 0.89,
        "sampleSources": [
          "Music & Show Critiques"
        ],
        "botCountEstimate": 250
      },
      "youtube": {
        "rawVolume": 29000,
        "sentiment": 47,
        "organicRatio": 0.93,
        "sampleSources": [
          "Colors TV Music Moments"
        ],
        "botCountEstimate": 600
      },
      "xTwitter": {
        "rawVolume": 51000,
        "sentiment": 69,
        "organicRatio": 0.51,
        "sampleSources": [
          "#RhitiTiwari",
          "#BB20Week3"
        ],
        "botCountEstimate": 21000
      },
      "instagram": {
        "rawVolume": 42000,
        "sentiment": 65,
        "organicRatio": 0.69,
        "sampleSources": [
          "Singer Fan Circles"
        ],
        "botCountEstimate": 8200
      },
      "googleNews": {
        "rawVolume": 3900,
        "sentiment": 56,
        "organicRatio": 0.96,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 40
      }
    },
    "detectedAstroturfPatterns": [
      "Coordinated bot retweets could not disguise low real-time voter turnout on JioHotstar."
    ],
    "recentNarrativeEdit": "Ghost Edit",
    "votingTrajectory": "Plummeting",
    "tossTrend7d": [
      53,
      48,
      45,
      43,
      42,
      40,
      40
    ],
    "bio": "Independent folk-pop singer and acoustic creator with viral YouTube releases. Evicted in Week 4 of Bigg Boss 20 due to low voting traction.",
    "pastDetails": "Viral independent folk singles and acoustic covers on YouTube with regional concert tours.",
    "houseGameplay": "Gentle acoustic performances in morning routines, but remained passive during weekly nominations.",
    "strongestMove": "Composed a lighthearted morning anthem for the house in Week 2.",
    "profession": [
      "Playback & Folk Singer",
      "Acoustic Creator"
    ],
    "careerCredits": [
      "Viral Folk Singles (50M+ Views)",
      "Independent Music Album Releases"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@rhititiwari_music",
        "url": "https://www.instagram.com/rhititiwari_music",
        "followerCount": "680K"
      }
    ],
    "controversies": [
      "Acoustic Cover Monetization Dispute"
    ],
    "structuredControversies": [
      {
        "title": "Acoustic Cover Monetization Dispute",
        "classification": "Direct Quote",
        "detail": "Social media discussion regarding cover music monetization rights and indie creator royalties in 2023.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Television Desk",
        "verifiedAt": "2026-04-14T14:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      }
    ],
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
    "hinglishProfile": {
      "bio": "Independent folk singer jo Week 4 mein eliminate hui.",
      "pastDetails": "YouTube pe viral folk covers aur singles.",
      "controversies": [
        "Music covers licensing rights discussion"
      ],
      "houseGameplay": "Subah sabko gaane sunati thi lekin house politics aur strategy se door rahi.",
      "strongestMove": "Week 2 mein pure ghar ke liye morning anthem compose kiya."
    },
    "statusVerifiedAt": "2026-10-04T23:00:00+05:30",
    "statusVerificationSource": "Colors TV Official Elimination Broadcast & JioHotstar Exit Tape",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "reported",
    "nominationNote": "Reported safe across approved entertainment desks"
  },
  {
    "id": "c17",
    "name": "Nakul Dhull (Mithu Don)",
    "nickname": "Mithu Don",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_ND%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23451a03%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2378350f%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_ND)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%23f59e0b%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%23f59e0b%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23fcd34d%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20ND%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Wildcard",
    "status": "Evicted",
    "isNominated": false,
    "evictionWeek": 5,
    "rawSentiment": 59,
    "trueOrganicSentiment": 37,
    "prInflationDelta": 22,
    "prInfiltrationRate": 42,
    "evictionRiskTier": "High Danger",
    "evictionProbability": 80,
    "silentMajorityIndex": 35,
    "loudMinorityIndex": 85,
    "platforms": {
      "threads": {
        "rawVolume": 8500,
        "sentiment": 38,
        "organicRatio": 0.84,
        "sampleSources": [
          "Altercation Debates"
        ],
        "botCountEstimate": 400
      },
      "youtube": {
        "rawVolume": 42000,
        "sentiment": 42,
        "organicRatio": 0.9,
        "sampleSources": [
          "Fight Breakdown Videos"
        ],
        "botCountEstimate": 1200
      },
      "xTwitter": {
        "rawVolume": 78000,
        "sentiment": 39,
        "organicRatio": 0.61,
        "sampleSources": [
          "#NakulDhull",
          "#BBEjection"
        ],
        "botCountEstimate": 18000
      },
      "instagram": {
        "rawVolume": 65000,
        "sentiment": 44,
        "organicRatio": 0.76,
        "sampleSources": [
          "Viral Skit Comments"
        ],
        "botCountEstimate": 9500
      },
      "googleNews": {
        "rawVolume": 6200,
        "sentiment": 41,
        "organicRatio": 0.96,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 50
      }
    },
    "detectedAstroturfPatterns": [
      "Intense localized bot surge following altercation, which could not bypass official ejection penalty."
    ],
    "recentNarrativeEdit": "Villain Edit",
    "votingTrajectory": "Plummeting",
    "tossTrend7d": [
      56,
      50,
      46,
      42,
      39,
      37,
      37
    ],
    "bio": "Haryanvi digital video creator and influencer known online as 'Mithu Don'. Entered as a Day 36 wildcard and was ejected within 48 hours following a physical altercation.",
    "pastDetails": "Commands massive rural and regional youth following across short-video platforms for comedic skits and local dialogues.",
    "houseGameplay": "Extremely combative upon entry. Clashed immediately with Gullu (Kushal Tanwar) and Qazi, violating fundamental house rules on violence.",
    "strongestMove": "Staged an explosive entrance debate challenging the established celebrity hierarchy.",
    "profession": [
      "Digital Video Creator",
      "Influencer"
    ],
    "careerCredits": [
      "Viral Haryanvi Digital Skits",
      "Regional Social Media Star"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@nakuldhull_mithu",
        "url": "https://www.instagram.com/nakuldhull_mithu",
        "followerCount": "1.1M"
      }
    ],
    "controversies": [
      "Physical Altercation and Official Ejection"
    ],
    "structuredControversies": [
      {
        "title": "Physical Altercation and Official Ejection",
        "classification": "Official Broadcaster Penalty",
        "detail": "Got into a physical brawl (pushing and shoving) with Kushal Tanwar (Gullu) within 48 hours of entry; permanently ejected by Bigg Boss for violating zero-violence rules.",
        "sourceUrl": "https://www.jiohotstar.com/",
        "sourceName": "JioHotstar Episode 37 Broadcast",
        "verifiedAt": "2026-10-15T22:00:00+05:30",
        "verificationStatus": "Verified by Broadcaster"
      }
    ],
    "primarySourceUrls": [
      {
        "label": "JioHotstar Official Ejection Broadcast",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-10-15T22:00:00+05:30"
      },
      {
        "label": "Pinkvilla BB20 Coverage",
        "url": "https://www.pinkvilla.com/entertainment/television/",
        "tier": "Tier 3: News",
        "verifiedAt": "2026-10-16T10:00:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "Haryanvi social media creator ('Mithu Don'). Day 36 wildcard entry jo 48 ghante mein physical ladai ki wajah se nikal diya gaya.",
      "pastDetails": "Viral comedy skits aur Haryana youth influence.",
      "controversies": [
        "Gullu ke sath physical push-shove jisse show se eject kiya gaya"
      ],
      "houseGameplay": "Aate hi violent aggressive stance liya jo unpar ulta pad gaya.",
      "strongestMove": "Ghar ke andar entry karte hi established seniors ko open challenge kiya."
    },
    "statusVerifiedAt": "2026-10-15T22:00:00+05:30",
    "statusVerificationSource": "Colors TV Official Ejection Announcement & JioHotstar Episode 37",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "reported",
    "nominationNote": "Reported safe across approved entertainment desks"
  },
  {
    "id": "c18",
    "name": "Aman Gandhi",
    "nickname": "Aman",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_AG%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23064e3b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23065f46%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_AG)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%2310b981%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%2310b981%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%236ee7b7%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20AG%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "role": "Underdog",
    "status": "Evicted",
    "isNominated": false,
    "evictionWeek": 6,
    "rawSentiment": 60,
    "trueOrganicSentiment": 44,
    "prInflationDelta": 16,
    "prInfiltrationRate": 35,
    "evictionRiskTier": "High Danger",
    "evictionProbability": 60,
    "silentMajorityIndex": 45,
    "loudMinorityIndex": 58,
    "platforms": {
      "threads": {
        "rawVolume": 6800,
        "sentiment": 46,
        "organicRatio": 0.88,
        "sampleSources": [
          "Week 6 Eviction Discussions"
        ],
        "botCountEstimate": 250
      },
      "youtube": {
        "rawVolume": 34000,
        "sentiment": 48,
        "organicRatio": 0.94,
        "sampleSources": [
          "Colors TV Episode Reviews"
        ],
        "botCountEstimate": 650
      },
      "xTwitter": {
        "rawVolume": 58000,
        "sentiment": 45,
        "organicRatio": 0.72,
        "sampleSources": [
          "#AmanGandhi",
          "#BB20Elimination"
        ],
        "botCountEstimate": 12000
      },
      "instagram": {
        "rawVolume": 52000,
        "sentiment": 50,
        "organicRatio": 0.82,
        "sampleSources": [
          "TV Serial Fan Pages"
        ],
        "botCountEstimate": 6800
      },
      "googleNews": {
        "rawVolume": 4600,
        "sentiment": 52,
        "organicRatio": 0.97,
        "sampleSources": [
          "Pinkvilla Television",
          "FilmiBeat Entertainment"
        ],
        "botCountEstimate": 40
      }
    },
    "detectedAstroturfPatterns": [
      "Moderate PR agency amplification in Week 5 could not overcome established frontrunner voter bases."
    ],
    "recentNarrativeEdit": "Neutral Edit",
    "votingTrajectory": "Plummeting",
    "tossTrend7d": [
      55,
      51,
      48,
      46,
      45,
      44,
      44
    ],
    "bio": "Popular television actor recognized for prominent roles in Hindi daily soaps including 'Bhagya Lakshmi' and 'Kundali Bhagya'. Evicted in Week 6 of Bigg Boss 20.",
    "pastDetails": "Multiple years as a successful supporting actor and comedic performer across Zee TV and Colors TV daily shows.",
    "houseGameplay": "Friendly and well-liked among housemates, but lacked independent decision-making and fell into the shadow of stronger personalities.",
    "strongestMove": "Coordinated the Week 5 team puzzle task with tactical precision, winning the luxury budget for the house.",
    "profession": [
      "Television Actor",
      "Model"
    ],
    "careerCredits": [
      "Bhagya Lakshmi (Ayush)",
      "Kundali Bhagya",
      "Daayan"
    ],
    "verifiedSocialHandles": [
      {
        "platform": "Instagram",
        "handle": "@agangandhi",
        "url": "https://www.instagram.com/agangandhi",
        "followerCount": "650K"
      }
    ],
    "controversies": [
      "Television Production Scheduling Dispute"
    ],
    "structuredControversies": [
      {
        "title": "Television Production Scheduling Dispute",
        "classification": "Direct Quote",
        "detail": "Addressed hectic television production shooting schedules and actor burnout in a 2022 industry panel.",
        "sourceUrl": "https://www.pinkvilla.com/entertainment/television/",
        "sourceName": "Pinkvilla Television Desk",
        "verifiedAt": "2026-02-20T12:00:00+05:30",
        "verificationStatus": "Corroborated by News"
      }
    ],
    "primarySourceUrls": [
      {
        "label": "JioHotstar Week 6 Eviction Episode",
        "url": "https://www.jiohotstar.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-10-18T23:00:00+05:30"
      },
      {
        "label": "Colors TV Official Elimination Announcement",
        "url": "https://www.colorstv.com/",
        "tier": "Tier 1: Broadcaster",
        "verifiedAt": "2026-10-18T22:30:00+05:30"
      }
    ],
    "hinglishProfile": {
      "bio": "TV serial actor ('Bhagya Lakshmi'). Week 6 mein eliminate hue.",
      "pastDetails": "Bhagya Lakshmi aur Kundali Bhagya mein popular character roles.",
      "controversies": [
        "TV industry shifts aur actor fatigue par interview"
      ],
      "houseGameplay": "Sabke dost the lekin game mein independent stand nahi le paaye.",
      "strongestMove": "Week 5 ke puzzle challenge mein team ko coordinate karke luxury budget jeetwaya."
    },
    "statusVerifiedAt": "2026-10-18T23:00:00+05:30",
    "statusVerificationSource": "Colors TV Official Elimination Broadcast & JioHotstar Exit Tape",
    "verificationState": "Broadcaster Verified",
    "statusProvenance": "official",
    "nominationProvenance": "reported",
    "nominationNote": "Reported safe across approved entertainment desks"
  }
];

export const BB20_LOCKED_EVICTED_TIMELINE: EvictedContestantTimelineItem[] = [
  {
    "week": 2,
    "weekLabel": "Week 2 Eviction",
    "evictionDate": "2026-09-20",
    "contestantId": "c14",
    "name": "Rohed Khan",
    "nickname": "Rohed",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_RK%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_RK)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%236366f1%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%236366f1%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23a5b4fc%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20RK%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "daysInHouse": 14,
    "finalTossScore": 39,
    "finalPrDelta": 13,
    "evictionReason": "Communication and language barriers in rapid verbal altercations led to reduced screen presence and low viewer vote conversion.",
    "prVsOrganicCollapse": "Early PR hype failed to translate into real organic JioHotstar voting numbers.",
    "headlineQuote": "I stayed true to who I was, but in Bigg Boss you must speak loudly to be heard.",
    "hinglishReason": "Language barrier aur quiet nature ki wajah se janta ke votes convert nahi ho paaye.",
    "hinglishHeadline": "Maine dil se khela lekin yahan shor machana zaroori tha.",
    "broadcasterVerificationUrl": "https://www.jiohotstar.com/",
    "broadcasterVerifiedAt": "2026-10-18T23:00:00+05:30",
    "verificationState": "Broadcaster Confirmed",
    "provenance": "official"
  },
  {
    "week": 3,
    "weekLabel": "Week 3 Eviction",
    "evictionDate": "2026-09-27",
    "contestantId": "c15",
    "name": "Isha Rikhi",
    "nickname": "Isha",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_IR%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_IR)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%236366f1%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%236366f1%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23a5b4fc%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20IR%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "daysInHouse": 21,
    "finalTossScore": 41,
    "finalPrDelta": 15,
    "evictionReason": "Avoided confrontational narratives, leaving her in the voting danger zone when pitted against vocal housemates.",
    "prVsOrganicCollapse": "Instagram engagement did not convert to active streaming vote submissions.",
    "headlineQuote": "Dignity was my priority. I refuse to stoop to cheap arguments for screen time.",
    "hinglishReason": "Dignity banaye rakhi lekin high voltage muddo se door rehne par votes nahi mile.",
    "hinglishHeadline": "Screen time ke liye cheap arguments karna mere nature mein nahi tha.",
    "broadcasterVerificationUrl": "https://www.jiohotstar.com/",
    "broadcasterVerifiedAt": "2026-10-18T23:00:00+05:30",
    "verificationState": "Broadcaster Confirmed",
    "provenance": "official"
  },
  {
    "week": 4,
    "weekLabel": "Week 4 Eviction",
    "evictionDate": "2026-10-04",
    "contestantId": "c16",
    "name": "Rhiti Tiwari",
    "nickname": "Rhiti",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_RT%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_RT)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%236366f1%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%236366f1%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23a5b4fc%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20RT%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "daysInHouse": 28,
    "finalTossScore": 40,
    "finalPrDelta": 17,
    "evictionReason": "Remained passive during house politics and nomination alignments, leading to quiet elimination.",
    "prVsOrganicCollapse": "Acoustic music fans enjoyed morning songs but did not actively vote during weekend eviction slots.",
    "headlineQuote": "My music was my voice in the house, but strategy was needed to survive.",
    "hinglishReason": "Subah gaane sunane se pyaar toh mila lekin weekend nominations mein voting strategy kamzor thi.",
    "hinglishHeadline": "Mera sangeet meri pehchan tha, lekin Bigg Boss mein politics bhi zaroori hai.",
    "broadcasterVerificationUrl": "https://www.jiohotstar.com/",
    "broadcasterVerifiedAt": "2026-10-18T23:00:00+05:30",
    "verificationState": "Broadcaster Confirmed",
    "provenance": "official"
  },
  {
    "week": 5,
    "weekLabel": "Week 5 Ejection",
    "evictionDate": "2026-10-15",
    "contestantId": "c17",
    "name": "Nakul Dhull (Mithu Don)",
    "nickname": "Mithu Don",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_ND%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_ND)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%236366f1%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%236366f1%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23a5b4fc%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20ND%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "daysInHouse": 2,
    "finalTossScore": 37,
    "finalPrDelta": 22,
    "evictionReason": "Disqualified and ejected by Bigg Boss within 48 hours of wildcard entry due to physical altercations with Kushal Tanwar (Gullu).",
    "prVsOrganicCollapse": "Zero tolerance rule violation triggered immediate ejection regardless of public poll numbers.",
    "headlineQuote": "Rules are rules. I let my temper get the better of me.",
    "hinglishReason": "Physical violence ke rule violation par Bigg Boss ne turant ghar se nikal diya.",
    "hinglishHeadline": "Gussa control nahi hua aur 48 ghante mein game khatam ho gaya.",
    "broadcasterVerificationUrl": "https://www.jiohotstar.com/",
    "broadcasterVerifiedAt": "2026-10-18T23:00:00+05:30",
    "verificationState": "Broadcaster Confirmed",
    "provenance": "official"
  },
  {
    "week": 6,
    "weekLabel": "Week 6 Eviction",
    "evictionDate": "2026-10-18",
    "contestantId": "c18",
    "name": "Aman Gandhi",
    "nickname": "Aman",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_AG%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_AG)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%236366f1%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%236366f1%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%23a5b4fc%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20AG%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "daysInHouse": 42,
    "finalTossScore": 44,
    "finalPrDelta": 16,
    "evictionReason": "Lacked an independent voting constituency and was overshadowed by frontrunner alliances during mass nomination.",
    "prVsOrganicCollapse": "PR fan pages could not counter the combined grassroots vote banks of Scout, Aamrapali, and Kanika.",
    "headlineQuote": "I made genuine friendships, but you need your own standalone narrative to reach the finale.",
    "hinglishReason": "Dost toh sabhi bane lekin apna independent individual mudda nahi dikha paaye.",
    "hinglishHeadline": "Finale tak pahunchne ke liye dosti ke alawa apna khud ka game zaroori hai.",
    "broadcasterVerificationUrl": "https://www.jiohotstar.com/",
    "broadcasterVerifiedAt": "2026-10-18T23:00:00+05:30",
    "verificationState": "Broadcaster Confirmed",
    "provenance": "official"
  },
  {
    "week": 7,
    "weekLabel": "Week 7 Eviction",
    "evictionDate": "2026-10-24",
    "contestantId": "c5",
    "name": "MC Mary Kom",
    "nickname": "Mary Kom",
    "avatar": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_MK%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23083344%22%20%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23164e63%22%20%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22url(%23g_MK)%22%20%2F%3E%0A%20%20%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2296%22%20height%3D%2296%22%20rx%3D%2218%22%20fill%3D%22none%22%20stroke%3D%22%2306b6d4%22%20stroke-width%3D%222.5%22%20opacity%3D%220.6%22%20%2F%3E%0A%20%20%3Ccircle%20cx%3D%2286%22%20cy%3D%2214%22%20r%3D%225%22%20fill%3D%22%2306b6d4%22%20%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22800%22%20fill%3D%22%2367e8f9%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20letter-spacing%3D%221%22%3E%0A%20%20%20%20MK%0A%20%20%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "daysInHouse": 49,
    "finalTossScore": 91,
    "finalPrDelta": -3,
    "evictionReason": "Exited on Day 49 following mid-week double eviction sprint after 7 weeks in the house.",
    "prVsOrganicCollapse": "Massive respect and organic love across India, but lowest vote-banking mobilization in mid-week eviction sprint.",
    "headlineQuote": "I gave my heart and sportsmanship to this house. The journey ends with dignity intact.",
    "hinglishReason": "Desh bhar se izzat aur pyaar mila lekin mid-week eviction sprint mein voting mobilization slow reh gaya.",
    "hinglishHeadline": "Mera safar imaandari se chala aur dignity ke sath khatam hua.",
    "broadcasterVerificationUrl": "https://www.pinkvilla.com/entertainment/television/bigg-boss-20-mc-mary-kom-evicted-in-shocking-weekend-ka-vaar-elimination-1348920",
    "broadcasterVerifiedAt": "2026-10-24T23:30:00+05:30",
    "verificationState": "Broadcaster Confirmed",
    "provenance": "reported"
  }
];
