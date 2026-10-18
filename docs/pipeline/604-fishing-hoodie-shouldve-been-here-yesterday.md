status: BUILDING [C] 2026-10-18 07:32 UTC
shopify: gid://shopify/Product/15364884529456
lane: C
type: twin
id: 604
handle: mens-fishing-shouldve-been-here-yesterday-hoodie
kd: 30
---
## Men's Fishing – Should've Been Here Yesterday Hoodie
- **Blank:** Gildan 18500 pullover hoodie (Printful #146), 8 oz, 50/50 cotton-poly fleece, double-lined hood, pouch pocket; handle ends -hoodie. Copy facts from the Printful spec only (R7.1).
- **Style:** Twin: reuses the source art (no new art generation, R6.2); its own cover, copy and long-tail. R6.2 lettering check on the source print before linking, and log it.
- **Text on shirt (real fonts via scripts/compose-print.py, never drawn by the image model; spelled exactly):** Twin of #543 (LIVE 2026-10-18): reuse its final print (Printful files 1088688557 / 1088688550, see #543's log for which file goes on light and dark colors; SHOULD'VE BEEN / HERE YESTERDAY. in Rye with a dark-green keyline). No new art. Sets its own width: FW 1500 minimum, every word above the pouch seam (R5.3.2 pouch line: change the shape in print-prep, never shrink).
- **Hook:** Same as #543: the old-timer telling the one that got away while a giant walleye jumps behind his back. SHOULD'VE BEEN HERE YESTERDAY. On a hoodie it is the dawn-on-the-dock layer.
- **Three lines considered (R3.1):** see #543.
- **Joke QC (R3.7) / R3.12:** see #543.
- **Why it's not taken:** our own art; fishing hoodie listings are bass logos and name customs.
- **Design gate (5 parts, docs/research/how-to-research-a-design.md):** search: fishing hoodie 6,600 / KD 30, Nov 2025 peak 8,100, US 55% (RankHero 2026-10-18; competition 7,742) · proof: #543's gate (approved today) · R6.2 check done by the director on the #543 sheet: real-font lines, no badge or panel; builder re-checks closed counters on Navy (R5.3.8).
- **Art prompt (Recraft v4, one image per call):** none (twin).
- **Colors (R7.2):** Sand + Navy (R7.2 cold-weather launch colors); read HERE YESTERDAY. on the Navy mockup at phone size.
- **Primary keyword:** fishing hoodie: 6,600 / KD 30 (RankHero via scripts/keyword-gap.py, 2026-10-18, director). KD 21–35 band. Not claimed by any product in docs/product-keyword-map.json (fishing hoodies so far took long-tails); record it here. Supporting: none.
- **Print size:** FW 1500 TOP 0 on the 18500, above the pouch.
- **Copy:** line one = the line + who wears it + when (R9.11), said plainly: no superlative opener built around the keyword (R8.3). Primary keyword in the title or SEO title, the first sentence and once in the meta; at most 3 times in all (the audit warns at 4). Describe only what is in the art; never say we drew it ("Original art, made for Graphic Tees Co."). Answer-first FAQs per R8.7: 4–6 at 40–60 words (fit, weight, wash care, gift fit, Christmas order-by about Dec 8, free size exchange).
- **Cover:** registry #940 (white man, late 50s, weathered face, grey stubble, faded ball cap pushed back), CLAIMED. Scene: a wooden dock on a misty lake at sunrise, a tackle box at his feet and a rod leaning on the rail beside him (not in hand), hood visible behind the neck, hands in the pouch. Props never over the print (R6.5); hair tied back or behind the shoulders, first word of the top line checked letter by letter (R6.9). Printful mockup as `--design` (--n 1). Max 2 attempts.
- **Title / handle:** "Men's Fishing – Should've Been Here Yesterday Hoodie" / `mens-fishing-shouldve-been-here-yesterday-hoodie` (R7.4; the suffix sets the audit price, R12.1).
- **Tags:** fishing-hoodies, graphic-hoodies-for-men, hoodie, ai-art, intake-done (R7.5 hoodie hub).
- **Price:** $39.99 pullover sale tier (R12.1), NO compare-at.
- **After publish:** design-crops.py and variant-photo-audit.py (builder 7c/7d). Before REVIEW: Printful default file checked on every variant and logged (R7.7, 2026-10-18 line); cover chest zoomed to 200% (R6.9 clean-erase line).
---
## Log
- 2026-10-18 06:26 UTC director: brief written, READY (lane C; kd 30; KD ≤ 20 band empty for these niches in this run's sweep, so KD 21–35 first, then measured KD 36+ phrases over 1,000 a month or with a measured December surge; proof named under the gate).
- 2026-10-18 07:50 UTC builder [C]: DRAFT gid 15364884529456 (12 variants, $39.99, no compare-at, hoodies category). R6.2 check on #543 files: Rye lines are real type, ragged lake wash, no ring/panel/badge; dark file 1088688557 (Navy), light file 1088688550 (Sand). FAQs 5 x 45-51 words, order-by Dec 8. Next: sync, mockups, cover.
