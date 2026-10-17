status: REDO
lane: C
type: new
id: 493
shopify: gid://shopify/Product/15364170875184
handle: unisex-nurse-calm-face-loud-brain-crewneck-sweatshirt
kd: 52
---
## Unisex Nurse – Calm Face, Loud Brain Crewneck Sweatshirt
- **Blank:** Crewneck Gildan 18000 (Printful #145), 8 oz 50/50 cotton-poly fleece, DTF/DTG front print at FW 1650 (no pouch, R5.3.8 twins line). Copy facts from the Printful spec only (R7.1).
- **Style:** A (R4.2) vintage print, no frame; Sam's 16 proof-first concepts (inbox 2026-10-17 19:30, design research page). New art: one illustration generation, max 3 tries.
- **Text on shirt:** CALM FACE. / LOUD BRAIN. in two lines of bold vintage condensed caps. Small line-art of a heart-rate line that turns into a scribble between them. Spelled exactly. Set in real fonts with scripts/compose-print.py, never drawn by the image model.
- **Hook:** Every ICU nurse knows the face: steady for the patient, screaming inside. Unisex (plenty of men in nursing), dry, coworkers laugh because it's their face too.
- **Three lines considered (R3.1):** "Calm Face, Loud Brain" (picked: self-aware restraint, proven nurse sarcasm format) · "Unbothered (Externally)" · "Charting Calmly, Panicking Quietly"
- **Why it's not taken:** Funny nurse sweatshirts on Etsy are coffee and 'Registered Silly Goose' jokes; 'Calm Face, Loud Brain' with an EKG scribble isn't on page 1 (director call; builder confirms, R3.7.2).
- **Design gate (5 parts, docs/research/how-to-research-a-design.md):** search: icu nurse sweatshirt 170 / KD 52 (RankHero 2026-10-17) · proof: funny nurse restraint lines 572–1,106 favorites (format 2, docs/research/etsy-2026-10-17/) · joke type: restraint / self-aware · look: vintage type, faded print, big on the chest · gift test: an ICU coworker, nurses' week, graduation.
- **Art standard (Sam, inbox 2026-10-17 19:30):** fal/Recraft draws the illustration ONLY, with no lettering at all (prompt says "no text, no letters, no words"). The words are set in real fonts with `scripts/compose-print.py` from designs/fonts (spec examples: designs/first5/sisyphus.json, books.json, tagsoup.json). One image per call, at most 3 tries; if all 3 are weak, PARK it and say why. Never ship weak art to fill a count. Log fal $ in this file.
- **Art prompt (Recraft v4, one image per call):** "A clean vintage screen-print heart-rate monitor line drawn left to right that turns into a tangled scribble in the middle, then back to a calm line, faded red and cream ink, worn texture. No text, no letters, no words, no background shape, no frame, no border, no badge, no circle, no dark patch."
- **Print size:** FW 1650 (crewneck, no pouch). Read every word on the darkest mockup at about 400 px wide before REVIEW (builder 7b). Light-ink file for dark colors, dark-ink file for light colors (R5.3.8); knock out any white letter counters.
- **Colors (R7.2):** Sand + Navy (R7.2).
- **Primary keyword:** icu nurse sweatshirt — 170 / KD 52 (RankHero 2026-10-17, director; 100% US; nothing easier fits (nurse t shirt is the collection head term family, funny nurse shirt and er nurse sweatshirt are owned)). Supporting: none. Unowned in docs/product-keyword-map.json and every open brief (checked 2026-10-17); recorded there with this handle. Use the primary where a person would say it: the H1-area copy, the first sentence (with the joke and the occasion, R9.11) and once in the meta; supporting phrases at most once each; no stuffing (R8.2–R8.3). Answer-first FAQs per R8.7: 4–6 questions, 40–60 words each (fit, care, sizing, warmth/weight, gift timing with an order-by date). Describe only what is in the art (R8.3); never say we drew it (AI art; say 'original art, made for Graphic Tees Co.').
- **Popularity evidence (R5.2):** see the gate line (design research page; docs/research/etsy-2026-10-17/).
- **Cover:** registry #818 + #819: Filipino man, early 30s, short black undercut, clean-shaven, and white woman, early 40s, short blonde bob, small pearl studs; scene: a hospital staff hallway with a nurses' station and soft lights, ID badges at the hip, both in the crewneck; alt starts 'Man and woman'. Real garment generated with the product's own Printful mockup in the cover color as `--design` (--n 1); hood visible on hoodies; hands empty or in pockets; nothing (hand, cup, hair, hood, drawcord, another person) over any part of the print; read every word before saving (R6.7–R6.9). No alcohol, tools or weapons (R6.5). Max 2 attempts.
- **Title / handle:** "Unisex Nurse – Calm Face, Loud Brain Crewneck Sweatshirt" / `unisex-nurse-calm-face-loud-brain-crewneck-sweatshirt` (R7.4).
- **Tags:** nurse-sweatshirts, graphic-sweatshirts, sweatshirt, ai-art, intake-done. No tee collection tags (R7.5).
- **Copy:** No production notes (R8.3).
- **Price:** crewneck $34.99, no compare-at (R12.1).
---
## Log
- 2026-10-17 20:27 UTC director: brief written, READY (Sam's 16 proof-first concepts, inbox 2026-10-17 19:30).
- 2026-10-17 21:32 UTC builder [C]: full build (no draft existed): art 1 Recraft call (heart-rate line with a scribbled knot; it came on black, converted to red/cream line art on transparent); CALM FACE. / LOUD BRAIN. in Big Shoulders via compose-print.py, dark keyline so it reads on both colors; Shopify DRAFT gid://shopify/Product/15364170875184 via b-artnext.py (12 variants $34.99, sweatshirts category, nurse-sweatshirts tag, keyword icu nurse sweatshirt 170/KD52 in the map, FAQ 5 x 40-60 words incl. Dec 8); FW 1650 TOP 75; Printful file 1088506478, sync 482608673 running; mockups Sand+Navy attached; fal cover 1 image (registry #818/#819): both words read; the woman's L of LOUD is slightly tucked by his arm. fal $0.10.
- 2026-10-17 21:41 UTC builder [C]: REVIEW. Sync 12/12. Sheet docs/review/493.jpg. design-crops and variant-photo audit cover published products only: rerun when ACTIVE. Local cohesion audit not run (no spec file); copy checked by hand against the art. 
- 2026-10-17 22:26 UTC director: REDO.
  1. R5.3.8 (prints clean): there's a solid black vertical bar down the right edge of the art, just right of the heartbeat line. It prints as a black stripe on Sand (clearly visible on the Sand mockup). Crop or erase it in print-prep, re-upload the file, re-link all variants, regenerate the mockups and check the cover's print (redo it only if the bar shows there).
  2. Copy (R8.3): change "Original art, made for Graphic Tees Co." to "Made for Graphic Tees Co." (we don't claim drawn or original art).
