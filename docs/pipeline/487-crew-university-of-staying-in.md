status: REDO
lane: C
type: new
id: 487
shopify: gid://shopify/Product/15364168286512
handle: unisex-homebody-university-of-staying-in-crewneck-sweatshirt
kd: 46
---
## Unisex Homebody – University of Staying In Crewneck Sweatshirt
- **Blank:** Crewneck Gildan 18000 (Printful #145), 8 oz 50/50 cotton-poly fleece, DTF/DTG front print at FW 1650 (no pouch, R5.3.8 twins line). Copy facts from the Printful spec only (R7.1).
- **Style:** A (R4.2) vintage print, no frame; Sam's 16 proof-first concepts (inbox 2026-10-17 19:30, design research page). New art: one illustration generation, max 3 tries.
- **Text on shirt:** UNIVERSITY OF / STAYING IN in a collegiate arch (real varsity serif, e.g. Graduate or Fraunces), EST. WHENEVER small underneath. A small couch-and-blanket or slipper motif in the middle. Spelled exactly. Set in real fonts with scripts/compose-print.py, never drawn by the image model.
- **Hook:** A fake college sweatshirt for the one degree every homebody already earned. It looks like real campus merch from across the room, then people read it. Gift for the friend who cancels plans and is proud of it.
- **Three lines considered (R3.1):** "University of Staying In, Est. Whenever" (picked: proven fake-university format, self-aware, no pun) · "Indoor Studies Department" · "Homebody Alumni Association"
- **Why it's not taken:** Fake-university sweatshirts on Etsy are mostly 'Anxiety University' and 'Silly Goose University'; no 'University of Staying In' with a home motif on page 1 (director call; builder confirms, R3.7.2).
- **Design gate (5 parts, docs/research/how-to-research-a-design.md):** search: homebody sweatshirt 590 / KD 46 (RankHero 2026-10-17) · proof: 'Anxiety University' embroidered 5,001 favorites; 'See, this is why I wanted to stay home' 1,798 (formats 3 + 4) · joke type: fake club / self-aware · look: collegiate arch, faded vintage print, no frame · gift test: the homebody friend, from the friend who keeps inviting them.
- **Art standard (Sam, inbox 2026-10-17 19:30):** fal/Recraft draws the illustration ONLY, with no lettering at all (prompt says "no text, no letters, no words"). The words are set in real fonts with `scripts/compose-print.py` from designs/fonts (spec examples: designs/first5/sisyphus.json, books.json, tagsoup.json). One image per call, at most 3 tries; if all 3 are weak, PARK it and say why. Never ship weak art to fill a count. Log fal $ in this file.
- **Art prompt (Recraft v4, one image per call):** "Small vintage screen-print illustration of a cozy armchair with a knitted blanket, a pair of slippers and a steaming mug on a side table, faded cream, navy and rust inks, worn texture, edges breaking up. No text, no letters, no words, no background shape, no frame, no border, no badge, no circle, no dark patch."
- **Print size:** FW 1650 (crewneck, no pouch). Read every word on the darkest mockup at about 400 px wide before REVIEW (builder 7b). Light-ink file for dark colors, dark-ink file for light colors (R5.3.8); knock out any white letter counters.
- **Colors (R7.2):** Sand + Navy (R7.2); light ink file for Navy, navy ink file for Sand if the cream lettering sinks on Sand.
- **Primary keyword:** homebody sweatshirt — 590 / KD 46 (RankHero 2026-10-17, director; 81% US; homebody hoodie 210/40 goes to #490; nothing easier fits). Supporting: introvert t shirt is off-garment, skip; stay home club shirt 70/43 (once). Unowned in docs/product-keyword-map.json and every open brief (checked 2026-10-17); recorded there with this handle. Use the primary where a person would say it: the H1-area copy, the first sentence (with the joke and the occasion, R9.11) and once in the meta; supporting phrases at most once each; no stuffing (R8.2–R8.3). Answer-first FAQs per R8.7: 4–6 questions, 40–60 words each (fit, care, sizing, warmth/weight, gift timing with an order-by date). Describe only what is in the art (R8.3); never say we drew it (AI art; say 'original art, made for Graphic Tees Co.').
- **Popularity evidence (R5.2):** see the gate line (design research page; docs/research/etsy-2026-10-17/).
- **Cover:** registry #810 + #811: Black man, late 20s, short twists, clean-shaven, round wire glasses, and Korean-American woman, mid 20s, long straight hair with curtain bangs, small gold studs; scene: a cozy living room on a rainy evening with a sofa, throw blankets and a lamp, both in the crewneck, mugs set on the coffee table at the side; alt starts 'Man and woman'. Real garment generated with the product's own Printful mockup in the cover color as `--design` (--n 1); hood visible on hoodies; hands empty or in pockets; nothing (hand, cup, hair, hood, drawcord, another person) over any part of the print; read every word before saving (R6.7–R6.9). No alcohol, tools or weapons (R6.5). Max 2 attempts.
- **Title / handle:** "Unisex Homebody – University of Staying In Crewneck Sweatshirt" / `unisex-homebody-university-of-staying-in-crewneck-sweatshirt` (R7.4).
- **Tags:** graphic-sweatshirts, sweatshirt, ai-art, intake-done. No tee collection tags (R7.5).
- **Copy:** No production notes (R8.3).
- **Price:** crewneck $34.99, no compare-at (R12.1).
---
## Log
- 2026-10-17 20:27 UTC director: brief written, READY (Sam's 16 proof-first concepts, inbox 2026-10-17 19:30).
- 2026-10-17 21:29 UTC builder [C]: full build (no draft existed): art 1 Recraft call (armchair, no lettering); cream keyline halo added so the navy ink reads on Navy; UNIVERSITY OF / STAYING IN / EST. WHENEVER set in Graduate via compose-print.py (straight lines, NOT a collegiate arch: arches are banned by R4.1/R6.2); Shopify DRAFT gid://shopify/Product/15364168286512 via b-artnext.py (12 variants $34.99, sweatshirts category, keyword homebody sweatshirt 590/KD46 in the map, FAQ 5 x 40-60 words incl. Dec 8); FW 1650 TOP 75; Printful file 1088504821, sync 482607787 running; mockups Sand+Navy attached; fal cover 1 image (registry #810/#811): both in navy crewnecks, but the woman's hair touches the U of UNIVERSITY and her shoulder cuts the last R of the man's WHENEVER: director decides. fal $0.10.
- 2026-10-17 21:41 UTC builder [C]: REVIEW. Sync 12/12. Sheet docs/review/487.jpg. design-crops and variant-photo audit cover published products only: rerun when ACTIVE. Local cohesion audit not run (no spec file); copy checked by hand against the art. Cover: hair touches the U and her shoulder cuts the last letter of the man's WHENEVER.
- 2026-10-17 22:26 UTC director: REDO.
  1. R6.9 (hair + overlap): her hair covers the U of UNIVERSITY, and her shoulder cuts off the last letters of the man's EST. WHENEVER. Composite the exact print from the Navy mockup onto both chests in print-prep, with the hair behind her shoulder. If her shoulder still overlaps his print, regenerate once with them standing side by side, not overlapping. Read every word on both people.
  2. Copy (R8.3): change "Original art, made for Graphic Tees Co." to "Made for Graphic Tees Co." (we don't claim drawn or original art).
