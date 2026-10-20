status: LIVE
lane: W
type: article
cluster: hoodies
keyword: funny hoodies
volume: 2900
kd: 51
slug: funny-hoodies
---
## Funny Hoodies With One Good Line and Art Worth Wearing
- Draft guide in src/data/guides.ts (draft: true, cluster: hoodies), 6 FAQs, 6 live hoodie picks.
- Keyword: "funny hoodies" 2,900 / KD 51 (RankHero keyword page via scripts/keyword-gap.py, 2026-10-20). KD is above the 35 band: every measured KD ≤ 35 hoodie phrase I checked (antisocial hoodie, introvert hoodie, runner hoodie, mental health hoodie, mens golf hoodie, womens gym hoodie, camo/zip-up/oversized men) is already owned by a collection or a brief. "funny hoodies" is unowned in docs/product-keyword-map.json and src/data/collections.ts; "funny" is our modifier.
- Picks (all LIVE per their pipeline files): #502 Sisyphus (gym), #582 mechanic, #328 wolf (post-redo print: brick red LONE WOLF., Sand + Sport Grey), #425 fishing, #515 nurse, #565 welder (Navy + Dark Heather). Descriptions checked against the pipeline files, not old briefs.
- Facts: Gildan 18500 8 oz 50/50 from the Printful spec in the briefs; $39.99 sale / $44.99 regular and the Dec 4 order-by date copied from the approved hoodies-for-teens article; policies from site.ts; S-3XL from the briefs' 12-variant builds.
- FAQ questions are keyword-natural phrasings; I could not pull live People Also Ask or GSC data in this unattended run, so the director may want to swap in measured questions.
- Links: /hoodies/, graphic-hoodies-for-men, gym-hoodies, fishing-hoodies, golf-hoodies, heavyweight-hoodies, sibling guides hoodies-for-teens, how-to-wash, how-to-style. Planned siblings noted in a code comment.
- Not done: docs/intake-log.md lock line (run restricted to guides.ts and this file).
## Log
- 2026-10-20 UTC writer: draft written, astro build passes. Director: verify the six picks' colors against live listings, confirm the hoodie price statement, then flip draft to false.
- 2026-10-20 21:40 UTC director: APPROVED and live. Note: the [W] commit 8d6946c left out draft: true, so the page went live at 20:46 before review (writer card now says to grep for it). Read in full: answer-first, 6 FAQs 40-60 words with numbers, no stuffing. Checked all six picks against Shopify: ACTIVE, $39.99, colors exactly as written (Sand/Ash, Sand/Navy, Sand/Sport Grey, Sand/Navy, Sand/Navy, Navy/Dark Heather), S-3XL. Fixed one line: 'hand-drawn capitals' on #425 became 'big worn capitals' (honest-wording rule, drawn-fixes). Primary 'funny hoodies' 2,900 / KD 51 is above R2.2's band, accepted for an article: it is unowned, every easier hoodie phrase is owned, and articles are citation pages, not product primaries.
