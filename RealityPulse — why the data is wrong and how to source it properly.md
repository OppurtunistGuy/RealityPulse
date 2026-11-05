# RealityPulse — why the data is wrong and how to source it properly

Nov 5, 2026 · @Nikota Kai

You were right. Half the Week 9 nominee list is wrong, and I checked it against three sources that all agree with you and not with the app.

## The mismatch

| Housemate | App says | Three sources say |
| --- | --- | --- |
| Tanmay Singh (ScoutOP) | Nominated | Nominated |
| Uditi Singh | Nominated | Nominated |
| Arshifa Khan | Nominated | Nominated |
| Aamrapali Dubey | Exempt, 6% risk | **Nominated** |
| Manish Goel | Exempt, 12% risk | **Nominated** |
| Mahhi Vij | Exempt, 10% risk | **Nominated** |
| Love Gill | Nominated, 26% risk | **Safe** |
| Harsh Machare (Yung DSA) | Nominated, 30% risk | **Safe** |
| Kushal Tanwar (Gullu) | Nominated, 35% risk | **Safe** |

Three of six are wrong in each direction. bigboss20.in, bbvote.in and biggbosshindi.in print the same six names: Tanmay, Uditi, Arshifa, Aamrapali, Manish and Mahhi. The app is showing the Week 8 list.

The headline prediction is very likely wrong too. The app says Arshifa Khan is most likely to leave, at 52%. The largest public poll I found (bbvote.in, 85,143 votes, updated 4 Nov) has Mahhi Vij last at 4%, well below Arshifa's 14%. Mahhi is not even marked as nominated in the app. If that poll is directionally right, the app is pointing at the wrong person for the second week running.

## What is actually happening under the hood

I pulled the app's own API to see where the numbers come from. The good news is that the plumbing exists. The bad news is that nothing fills it.

The endpoint `/api/contestants` returns 18 housemates from a Neon database, and the record carries a field called `capturedAt`:

```
"capturedAt": "2026-11-01T17:15:22Z",
"dataSource": "neon",
"timeline": { "currentDay": 61, "currentWeek": 9 }
```

The data was written once on 1 November and has not changed since. Today is the 5th. The day counter is computed live from the premiere date, so the header correctly says Day 61 and Week 9 — but the roster underneath it is four days old. That is why the page shows Week 9 in the title bar and Week 8's nominees in the body.

So there is no ingestion. There is a database, an API and a UI that renders whatever the database holds, and a human or an agent writing rows into it by hand every few days. Nothing watches the show.

Two things make that worse than plain staleness.

The page says **Voting Window: LIVE** next to a four-day-old list. A viewer reads that as real-time.

And each record carries this:

```
"statusVerificationSource": "JioHotstar Episode 28 Broadcast
                             + Colors TV Official Active Roster"
```

The app is on Day 61, so Episode 28 is roughly a month old — and the Backstage panel separately admits that the broadcaster pages were never opened. The same invented-citation habit we removed from the UI is still sitting in the database.

## Fixing the nomination source

Drop Pinkvilla, FilmiBeat, FilmyGyan, Viral Bhayani and TellyMasala for this job. They are news desks: they publish a story once, often from a viral tweet, and never correct it. That is how a tweet-sourced list from Week 8 ended up frozen in your database.

Use dedicated season trackers instead. They exist to maintain a running state and they update after every nomination episode.

| Source | What it gives | Freshness seen |
| --- | --- | --- |
| [bigboss20.in](https://bigboss20.in/nominations) | Nominees, safe list, who nominated whom, eviction history, voting deadline | Week 9 current |
| [bbvote.in](https://bbvote.in/) | Nominees plus a week-by-week table and a large poll | "Last updated 04-11-2026" |
| [biggbosshindi.in](https://biggbosshindi.in/) | Nominees, eviction history, contestant list | Modified 2 Nov |

The rule that makes them reliable is agreement, not authority. Fetch all three, compare the name sets, and accept a nominee list only when at least two match exactly. When they disagree, publish nothing and show "nominations unconfirmed" — disagreement is the signal that something has just changed or someone copied a bad tweet. For Week 9 all three matched, which is why I can tell you the app is wrong with confidence.

Two cautions worth building in.

**None of these is official.** bigboss20.in states plainly that it is "an independent, fan-run website" and is "not affiliated with Bigg Boss, Endemol Shine India, Banijay, Viacom18, Colors TV, JioStar or JioHotstar." So the tag stays `[Reported]`. Keep `[Official]` reserved for a JioHotstar or Colors TV page you actually opened, which so far is none of them.

**They carry their own errors.** bbvote.in's Week 7 table marks Manish Goel evicted, then lists him as a Week 9 nominee. Its results table spells Arshifa Khan as "Aasif Khan". Normalise names to your own canonical IDs on ingest, and log any source that contradicts itself rather than silently taking the newer line.

## The sentiment side, honestly

You want the analysis driven by X, Threads, Instagram and YouTube. Right now none of those four feeds anything — every sentiment number in the database is a static value someone typed. Before rebuilding, it is worth knowing that the four platforms are nowhere near equally reachable.

| Platform | Reality | Verdict |
| --- | --- | --- |
| YouTube | Data API v3, free quota, comments on episode uploads and fan channels. Hindi-language volume on BB clips is enormous. | Build on this |
| X | API access is paid and the useful tiers are costly for sustained polling | Add only if you fund it |
| Instagram | No public API for comments on other people's posts. Graph API covers your own account only | Not practical |
| Threads | API is limited to your own content | Not practical |

That leaves YouTube as the one real pipeline you can run at zero or near-zero cost, and it happens to be the best fit for your thesis anyway. The product's whole argument is that the casual majority watches and comments on YouTube while the loud minority organises on X. If you can only have one feed, YouTube is the one you want.

So my recommendation is to build the engine on YouTube comments alone, and say so on the page. A number labelled "based on 40,000 YouTube comments across 12 videos" is worth far more than four platform weight sliders feeding nothing. The Backstage panel currently shows YouTube 35%, X 20%, Instagram 15% and Threads 15%, which tells a viewer there are four live feeds. There are zero. Either wire a feed or remove its slider.

What the YouTube pipeline needs, concretely: pull comments from the official Colors TV and JioHotstar episode uploads plus the three or four largest BB fan channels, filter to the last 24 hours, detect which housemates each comment names (including nicknames and Devanagari spellings), score sentiment with a model that handles Hinglish rather than English-only, and run your existing duplicate-template clustering over the result to strip the coordinated ones. That last step already works — the Forensic Studio does exactly this and does it well. It just has nothing real to chew on.

## The fan polls are your benchmark, not your input

This is the part I would get right before writing any code.

Those tracker sites run their own polls. bbvote.in has 85,143 votes on Week 9; biggbosshindi.in has 561. It is tempting to pull those numbers in as audience signal, and it would be a mistake.

A site poll is self-selected, trivially stuffable, and dominated by whoever's fan army found the page. It is the loud minority, measured. Feeding it into TOSS would mean the app's answer converges on the thing the app exists to contradict. The 561-vote poll is worse than useless; it also lists four people who are not even nominated that week.

Use them the other way round. Show the fan poll beside your own number and make the gap the story:

> Fan polls say Mahhi Vij is safest at 4%. We say she is the most exposed. Here is why.

That framing does three things at once. It gives the viewer something to argue with, which is what brings them back. It makes your claim falsifiable every single week, which is what the scoreboard needs. And it states the product's thesis on the page instead of leaving it in the tagline.

It also fixes the accuracy problem from last round. Right now the scoreboard claims 85.7% from six retroactive hits the app never actually forecast. If every week you log your pick, the fan poll's pick and the real outcome, within a month you have a record that means something — and the interesting column is not whether you were right, but how often you beat the poll.

## Fix order

One phase per prompt, screenshots before each is called done.

1. **Correct Week 9 today.** Nominated: Tanmay, Uditi, Arshifa, Aamrapali, Manish, Mahhi. Safe: Qazi, Harsh, Kushal, Love, Kanika. Voting closes Friday 6 November, 10:00 IST.
2. **Never show LIVE over stale data.** Compare `capturedAt` against now. Under two hours, say Live. Over that, print the real age: "Nominations last checked 4 days ago." A page that admits it is stale beats one that lies about being fresh.
3. **Swap the nomination sources** to bigboss20.in, bbvote.in and biggbosshindi.in, with the two-of-three agreement rule and no prediction published on disagreement.
4. **Add the refresh job.** A Vercel Cron that runs the three fetchers, writes to Neon and stamps `capturedAt`. Daily is enough; twice daily around nomination and eviction episodes is better.
5. **Strip the fake verification strings.** `statusVerificationSource` should name the URL actually fetched, or say Unverified. No more Episode 28.
6. **Build the YouTube pipeline** and label the number with its real basis and comment count.
7. **Remove the X, Instagram and Threads sliders** until something feeds them.
8. **Add the fan-poll comparison column** and reset the scoreboard to only the weeks you genuinely forecast.

Phases 1 and 2 are tonight's work. Everything else can wait a week; those two are the difference between a dashboard that is wrong and a dashboard that is wrong while insisting it is live.

One caveat on all of it: everything above rests on three fan-run trackers agreeing. I could not open Colors TV or JioHotstar, so nothing here is officially confirmed. If you can check tonight's episode yourself, that outranks all three.
