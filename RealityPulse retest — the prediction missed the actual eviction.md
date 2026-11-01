# RealityPulse retest — the prediction missed the actual eviction

Nov 1, 2026 · @Nikota Kai

The app rated the man who was actually evicted tonight as one of the safest in the house. That is the only finding that matters in this round.

## The miss

Aasif Khan was evicted on tonight's Weekend Ka Vaar, Day 57. FilmiBeat and Deccan Chronicle both carry it, and the reason given is lowest votes.

Here is what RealityPulse said about him when I tested it at the same time:

| Field | What the app shows |
| --- | --- |
| Status | Exempt \[Reported\] |
| True TOSS | 78% |
| Eviction risk | 4% |
| Zone | Safe |

He was not in the nominated set at all. The six the app marks Nominated are Scout, Love, Harsh, Uditi, Gullu and Arshifa. You spotted this yourself: Aasif is missing from that list, and that is the proof the sourcing is wrong.

The app put him at 4%. Reality put him at 100%. There is no partial credit on this one — the product's entire claim is that it sees what naive pollsters miss, and on the first real test it pointed at the wrong person.

## Why it missed

Three separate faults stacked up, and each one alone would have been enough.

**The nominee list was wrong.** The app built its roster from a six-name list that does not match what the outlets printed. FilmiBeat's actual list was Aasif, Aamrapali, Gullu, Love, Scout and Kanika. The app marked Aamrapali, Aasif and Kanika as Exempt. Three of the six real nominees were filed as safe, and the evicted man was one of them.

**The citations were invented.** The FilmiBeat link the app prints under "VERIFIED ARTICLE URL" opens a November 2024 article about the film Mahavatar. The Pinkvilla link returns nothing in search. The agent wrote plausible-looking URLs and labelled them verified.

**Status drives the number, not sentiment.** Every exempt housemate sits at exactly 4% eviction risk — Aamrapali, Kanika, Mahhi, Aasif, Manish, Qazi, all 4%. A real model never produces the same figure seven times. The 4% is a constant attached to the Exempt label. So the moment the nominee list is wrong, the risk score is wrong too, automatically.

### What 90-95% accuracy actually requires

Accuracy of that order is a high bar, and it is worth being honest that sentiment alone will not reach it every week. What it needs:

- Nominations taken from the broadcast itself, not from a news list. Until the episode airs, the week is marked pending rather than guessed.
- Eviction risk computed only from ingested YouTube, X, Instagram and Threads volume, with no constant anywhere in the formula. If a housemate has too little data, print "insufficient data" instead of a number.
- A scoreboard page that records every past prediction against the real outcome. Without it there is no way to claim any accuracy figure, and the first entry on it is tonight's miss.

That last point is the one that turns this from a dashboard into a product someone would trust.

## Take these off the dashboard

**The whole "Nomination Intel: Authorized Multi-Source Audit" panel.** You asked the agent to read those outlets, not to display them. It currently takes the top third of the home screen and shows Pinkvilla and FilmiBeat cards, article URLs, source-policy badges and an enforcement checklist. None of that is for your viewer. A viewer wants to know who is nominated; the sourcing is your internal quality control.

Keep, in its place, a single quiet line under the roster: "Nominations reported, not yet officially confirmed." That is all the hedging the screen needs. Keep the full source record in your own data file where you can audit it.

**The archetype labels.** Drop Challenger, Frontrunner and Polarizing from under each name. They are invented categories and they imply an editorial judgment the app has not earned. Wildcard stays, since that is a real show mechanic. Everyone else shows just their name.

## Three tabs nobody can read

You could not tell what Narrative Delta, Search Grounding or Forensic Studio actually do. Neither could I on first read, and I was looking for it. Each one opens with a sentence written for an engineer.

The pattern to fix: one plain sentence saying what the tab answers, then one line saying where the data came from. Drop the words sanitization, ingests, grounding, anchor, delta and pipeline from anything a viewer sees.

| Tab | What it says now | What it should say |
| --- | --- | --- |
| Narrative Delta | "Correlates producer broadcast framing (Hero/Villain/Ghost edits) with true casual audience reaction to isolate PR manipulation" | "The show edits each person to look a certain way. This compares that edit with how viewers actually reacted. A big gap means the edit is not working on the audience." |
| Search Grounding | "Ingests real-time web discourse... using Gemini 3.8 Flash with Google Search Grounding tool enabled" | "Asks Google for the latest news and fan chatter about the show, then summarises what it found. Use it to check whether something changed in the last few hours." |
| Forensic Studio | "Test any social media stream against the sanitization algorithm. Run client-side Levenshtein/MinHash clustering" | "Paste any batch of comments here. It tells you how many are copy-paste duplicates from a paid campaign and how many are real people writing in their own words." |

Narrative Delta has a second problem beyond wording. It shows an episode number, a producer intent and an audience verdict, but never says where the audience verdict came from or how the delta number is calculated. Add one line under the panel: how many comments it read and from which platforms. Without that it reads as opinion presented as measurement.

## The matrix graphic

It still does not work, and the reason is structural rather than cosmetic.

All twelve avatars fall along one diagonal line. When every point sits on a diagonal, the two axes are measuring close to the same thing, so the chart has one real dimension pretending to be two. Three of the four quadrants stay empty every week, which is why the quadrant labels have room to shout in the corners while the data crowds into one strip.

On a 390px screen it collapses further: the avatars overlap each other, and the two axis labels print on top of the avatars and on top of each other.

What to draw instead. The question a viewer has is simple — who is going home. A horizontal bar chart, one bar per housemate, sorted by eviction risk, answers it at a glance and survives any screen width. Put the nominated housemates in colour and the rest in grey. If you want to keep the loud-minority idea visible, add a second short bar or a dot behind each one for PR noise, so the gap between real support and manufactured noise is the thing the eye catches.

Keep the scatter only if you can find two genuinely independent axes. Organic loyalty against PR noise is not independent in your current data, and the diagonal proves it.

## Fix order

One phase at a time, screenshots before each is called done.

1. **Record tonight's miss.** Add Aasif Khan as evicted on Day 57, and log the prediction against the outcome. Do not quietly correct the roster as if nothing happened — the miss is the most valuable data the app has produced so far.
2. **Remove the source audit panel and the archetype labels.** Sources move into the data file. Keep Wildcard, drop Challenger, Frontrunner and Polarizing.
3. **Never print an unopened URL.** If the page cannot be opened, show the outlet and headline with no link and tag it Unverifiable. The invented FilmiBeat link must go.
4. **Break the status-to-risk link.** No constant anywhere. Insufficient data prints as text, not as a number.
5. **Rewrite the three tab descriptions** using the plain-English column above, and add the data provenance line to Narrative Delta.
6. **Replace the scatter with a sorted bar chart.**
7. **Build the prediction scoreboard** — every week, predicted versus actual, visible to the viewer.

Untested this round: the Deep Gemini forensic run, the Platform Weights panel, and the Hinglish copy on the new panels.
