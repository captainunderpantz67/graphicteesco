status: BUILDING [E] 2026-10-18 01:50 UTC
lane: E
type: new
id: 486
handle: womens-embroidered-goose-plot-twist-pending-crewneck-sweatshirt
kd: 58
---
## Women's Embroidered – Goose Plot Twist Pending Crewneck Sweatshirt
- **Blank:** Crewneck Gildan 18000 (Printful #145), 8 oz 50/50 cotton-poly fleece, EMBROIDERY chest center (max 4 x 4 in on this blank, R4.8 true scale). Copy facts from the Printful spec only (R7.1).
- **Style:** B (R4.3), real thread; Sam's 16 proof-first concepts (inbox 2026-10-17 19:30, design research page). New art: one illustration generation, max 3 tries.
- **Text on shirt:** Do Not Disturb / Plot Twist Pending, two lines of small serif above or below the goose. Spelled exactly. Set in real fonts with scripts/compose-print.py, never drawn by the image model.
- **Hook:** A goose in tiny reading glasses buried in a book, with the polite warning every reader gives when you talk to them during the good part. Readers' friends buy it for them. Women's: a little sass, said with a straight face.
- **Three lines considered (R3.1):** "Do Not Disturb, Plot Twist Pending" (picked: the restraint warning readers actually feel, no pun) · "Currently Fictional" · "Mid-Chapter, Mid-Mood"
- **Why it's not taken:** Etsy shows embroidered geese reading (746 favorites) with no line or a plain 'Book Club' line; no goose with this do-not-disturb warning on page 1 (director call; builder confirms, R3.7.2).
- **Design gate (5 parts, docs/research/how-to-research-a-design.md):** search: goose sweatshirt 480 / KD 58 (RankHero 2026-10-17) · proof: embroidered goose reading crewneck 746 favorites; 'Emotionally Recovering From a Book' embroidered 5,095 (formats 1 + 4) · joke type: animal with an attitude + restraint line · look: real embroidery, line art filling the chest · gift test: a reader's best friend.
- **Art standard (Sam, inbox 2026-10-17 19:30):** fal/Recraft draws the illustration ONLY, with no lettering at all (prompt says "no text, no letters, no words"). The words are set in real fonts with `scripts/compose-print.py` from designs/fonts (spec examples: designs/first5/sisyphus.json, books.json, tagsoup.json). One image per call, at most 3 tries; if all 3 are weak, PARK it and say why. Never ship weak art to fill a count. Log fal $ in this file.
- **Art prompt (Recraft v4, one image per call):** "Simple single-weight continuous line art like one embroidery stitch: a white goose sitting, wearing small round reading glasses, holding an open book close to its face, one wing turning a page, looking mildly annoyed at being interrupted. One or two thread colors, flat lines on plain white, no fill, no shading, no text, no letters, no background shape, no frame, no border, no badge, no circle, no dark patch."
- **Embroidery prep (R4.8):** illustration from one Recraft call (line art only, no text), lettering added in compose-print.py as a single-weight script/serif traced to thread, then `scripts/emb-prep.py`: crop the padding so the design fills at least 90% of the 4 x 4 in chest-center limit on its longest side. Thread colors from Printful's palette only, lines at least 1.5 mm, x-height at least 6 mm, no detail under 1 mm, no gradients or worn texture. Preview Printful's embroidery mockup and read every letter (R5.3.5). Back-neck logo stays (pilot result). The cover never oversells the stitch size (R4.8 true scale).
- **Thread:** goose outline in navy, beak and feet in soft orange, lettering in navy on Sand; on the dark color use cream outline. Pick the color pair where every letter reads; log it.
- **Colors (R7.2):** Sand + one bold women's color the thread reads on (R7.2: women's products include a bold color when the blank has it, e.g. Light Pink or Cherry Red), or Sand + Navy if neither reads.
- **Primary keyword:** goose sweatshirt — 480 / KD 58 (RankHero 2026-10-17, director; 81% US; nothing easier fits: goose crewneck 30/68, reading sweatshirt 390/66; silly goose sweatshirt is owned by the Loose Goose crewneck). Supporting: bookish sweatshirt is a live product's phrase, do not use it; reading sweatshirt 390/66 (once). Unowned in docs/product-keyword-map.json and every open brief (checked 2026-10-17); recorded there with this handle. Use the primary where a person would say it: the H1-area copy, the first sentence (with the joke and the occasion, R9.11) and once in the meta; supporting phrases at most once each; no stuffing (R8.2–R8.3). Answer-first FAQs per R8.7: 4–6 questions, 40–60 words each (fit, care, sizing, warmth/weight, gift timing with an order-by date). Describe only what is in the art (R8.3); never say we drew it (AI art; say 'original art, made for Graphic Tees Co.').
- **Popularity evidence (R5.2):** see the gate line (design research page; docs/research/etsy-2026-10-17/).
- **Cover:** registry #809: Moroccan-American woman, early 30s, long dark curly hair half up, gold hoop earrings, tortoiseshell glasses pushed up on her head; scene: a cozy independent bookstore aisle with warm lamps and stacked books, a tote bag at her side; alt starts 'Woman'. Real garment generated with the product's own Printful mockup in the cover color as `--design` (--n 1); hood visible on hoodies; hands empty or in pockets; nothing (hand, cup, hair, hood, drawcord, another person) over any part of the print; read every word before saving (R6.7–R6.9). No alcohol, tools or weapons (R6.5). Max 2 attempts.
- **Title / handle:** "Women's Embroidered – Goose Plot Twist Pending Crewneck Sweatshirt" / `womens-embroidered-goose-plot-twist-pending-crewneck-sweatshirt` (R7.4).
- **Tags:** embroidered-sweatshirts, graphic-sweatshirts, sweatshirt, ai-art, intake-done. No tee collection tags (R7.5).
- **Copy:** "Embroidered" in the title and line one (R4.8). No production notes (R8.3).
- **Price:** crewneck $34.99 + $5 embroidered chest = $39.99, no compare-at (R12.1).
---
## Log
- 2026-10-17 20:27 UTC director: brief written, READY (Sam's 16 proof-first concepts, inbox 2026-10-17 19:30).
