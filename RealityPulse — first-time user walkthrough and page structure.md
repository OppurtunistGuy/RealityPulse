# RealityPulse — first-time user walkthrough and page structure

Nov 1, 2026 · @Nikota Kai

I had to scroll past three screens of the app explaining itself before it told me anything about the show.

## My first 60 seconds

I landed, and the first thing I met was a row of five tabs I could not tell apart: Eviction Matrix, Bot & PR Network, Narrative Arc Delta, Search Grounding, Forensic Studio. None of those names tells me what I would find inside. I stayed put.

Below that came a counter, then an Evidence Policy notice, then a large panel titled "Nomination Intel: Authorized Multi-Source Audit" with two outlet cards, two URLs, verbatim name lists, a source-disagreement badge and an enforcement checklist. I was 350 pixels in and still reading about the app's sourcing discipline rather than the show.

The four numbers I actually wanted — who is nominated, who is safe, who is in trouble — sit at 988 pixels. On a standard laptop they are below the fold. The chart is at 1174, the roster table at 1778, and the page runs 2805 pixels in total. Everything the product does lives on this one page, stacked.

Then I hit the real wall. The headline card says "89% TOSS". The page uses TOSS sixteen times and never once spells out what it stands for. There is no glossary, no tooltip on the term, no "how this works" anywhere. I know the answer only because I have been testing this app all day. A first-time viewer would not.

## What already works

Three things are genuinely good and should survive any redesign.

**The housemate dossier.** Click a row and you get a panel with headings like "What they are doing in the Bigg Boss house", "Strongest thing they did" and "Past career details". That is written for a human. It answers the question a viewer actually has about a contestant. It is the best screen in the product and nothing else comes close.

**The roster table.** Sortable, searchable, keyboard-reachable, with a clear status badge per person. Typing a name narrows it instantly. This is solid work.

**The bot network graph.** You said this one was good and I agree. Named clusters on the left, housemates on the right, lines between them. The idea lands without a caption, which is the test.

The common thread: all three answer a question a viewer came with. Everything I complain about below is the app answering questions nobody asked.

## What makes it hard

**The vocabulary is private.** These words appear on the home screen with no definition anywhere: TOSS (16 times), PR Infiltration (12), Vocal Bubble (7), Provenance, Quarantined, Astroturfing, Ghost Factor, Silent Majority, Grounding, Delta. A viewer has to learn a language before they learn anything about the show.

The fix is not a glossary page, which nobody reads. It is writing the plain word first and keeping the coined term as the subtitle. "Real fan support: 89%" with "TOSS" underneath in small grey. The jargon then becomes a label for something already understood, instead of a barrier in front of it.

**The tab names describe machinery, not questions.** Eviction Matrix, Narrative Arc Delta, Search Grounding, Forensic Studio. Rename each to the question it answers: Who's going home, Is the hype real, What happened this week, Check any comments.

**Nothing tells me what to do first.** No default view, no "start here", no sense of which number is the headline. Four KPI cards sit in a row at equal visual weight, so none of them reads as the answer. One of them should dominate.

**The header overlaps itself.** At 1512px the "Eviction Matrix" tab pill prints on top of the logo and the "Updated 1h ago" text. Small, but it is the first thing on screen.

**The language toggle is a mystery.** EN and HI sit next to two unlabelled icon buttons. I could not tell what the icons do without clicking them.

## A new bug: the same person, two sets of numbers

I clicked Tanmay Singh's row and compared the dossier against the table row I had just clicked. Every figure disagrees.

| Metric | Roster table | Dossier panel |
| --- | --- | --- |
| Raw sentiment | 88% | 86% |
| True organic (TOSS) | 89% | 88% |
| PR delta | -1% | -2% |
| Eviction risk | 11% | 6% |

The eviction risk is nearly double in one view. The 7-day trend disagrees too: the table says 80 rising to 88, the dossier's sparkline reads 88, 82, 84, 83, 86, 87, 88.

This matters more than it looks. A viewer who clicks a row to learn more gets contradicted by the screen they came from, and there is no way to tell which one is lying. One number, one source, rendered in both places.

## Page structure

Right now there is one page of 2805 pixels and five tabs that all live inside it. The tabs are not really sections — they are five tools sitting in a drawer, and the viewer has to guess which drawer holds the answer.

Four sections, each named after a question, fixes that:

&#91;embedded content: proposed structure · 4 viewer sections + 1 backstage band\]

Tonight is the default and should fit one screen with no scrolling: one dominant number (who is most likely to go), the risk bar chart, and the nominated names. Nothing else.

The current Eviction Matrix tab splits into Tonight and Housemates. Bot Network and Forensic Studio merge into one section, because they answer the same question with different tools — one shows you the bot rings it found, the other lets you test comments yourself. Narrative Delta and Search Grounding merge for the same reason: both are about what happened recently.

Everything in the dashed band is machinery. The source audit panel, the platform weight sliders, the evidence policy notice and the article URLs all belong there, reachable from a single quiet link, not on the first screen.

## Remove

| Element | Why |
| --- | --- |
| Nomination Intel source audit panel | Takes the top third of the first screen. Your sourcing discipline is internal; a viewer needs one line saying the nominations are reported, not confirmed. |
| Archetype labels (Challenger, Frontrunner, Polarizing) | Invented categories with no stated basis. Wildcard stays, it is a real show mechanic. |
| Evidence Policy banner | Two lines of legal throat-clearing above the content. Move it into the backstage section. |
| "Active Housemates / Eviction Timeline" toggle | Two counters dressed as buttons at the top of the page. Fold the count into the section header. |
| The scatter matrix | All twelve avatars land on one diagonal, so the two axes measure the same thing and three quadrants stay empty. Replace with a sorted bar chart. |
| Unlabelled header icon buttons | Nobody can guess what they do. |

## Add

| Element | Why |
| --- | --- |
| One dominant headline number | "Most likely to leave: X" at the top of Tonight, larger than everything else. Right now four equal cards mean no answer. |
| Plain words above every coined term | "Real fan support" with TOSS as the small subtitle, not the other way round. |
| A prediction scoreboard | Each week, predicted versus actual. It is the only thing that earns the accuracy claim, and tonight's miss is its first entry. |
| "Last updated" with a real timestamp | "Updated 1h ago" next to "Last Verified 01 Nov" tells me nothing about whether tonight's episode is in there. |
| An empty state for a pending week | When nominations have not aired, say so rather than carrying last week's list forward. |
| One-line caption under each chart | What the reader should take from it. |

## Build order

One phase per prompt, screenshots on desktop and at 390px before any phase is called done.

1. **One number, one source.** Fix the table-versus-dossier mismatch first. Both screens read the same record. No screen computes its own figure.
2. **Split into the four sections.** Tonight loads by default and fits one screen. Move the source audit, evidence policy and platform weights behind one link.
3. **Rename the tabs to questions** and rewrite every coined term with the plain words on top.
4. **Replace the scatter with a sorted bar chart**, nominated in colour, everyone else grey.
5. **Remove the archetype labels**, keeping Wildcard.
6. **Add the prediction scoreboard**, starting with tonight's miss on Aasif Khan.
7. **Fix the header overlap** and label the icon buttons.

Untested this round: the Hinglish copy on the newer panels, the Deep Gemini forensic run, and the Platform Weights sliders.

One caveat on all of this. I tested the build deployed about an hour ago, commit 0ab0bff. If your latest changes are sitting uncommitted or on a branch that does not deploy, some of what I describe above may already be fixed locally.
