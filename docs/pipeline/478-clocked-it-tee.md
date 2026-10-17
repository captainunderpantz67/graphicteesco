status: BUILDING [A] 2026-10-17 18:08
lane: A
type: new
id: 478
handle: womens-clocked-it-said-nothing-graphic-tee
kd: 20
---
## Women's Clocked It – Said Nothing Tee
- **Gate (docs/research/how-to-research-a-design.md): PASSED, Sam approved the art and the mockups 2026-10-17 ("ship it, make it all live").** Art is FINAL and already made by Claude: do NOT generate new art and do NOT redraw lettering. Use the print file below as-is (words are set in real fonts).
- **Blank:** Women's Relaxed Tee Bella 6400 (Printful #360), printed DTG: `designs/first5/clocked-print.png` (3000×3163, cream ink #F3E7CF), FW 1350, TOP 75 (mocked up at these values, Sam approved).
- **Joke / format:** the same design printed big (Sam wanted it bigger than embroidery allows). Proof as #477.
- **Colors:** Black, Maroon, plus any other dark 6400 colors where the cream ink reads (check every letter).
- **Audience / cover:** women 25–55; alt starts 'Woman'.
- **Tags:** funny-graphic-tees, graphic-tees-for-women, ai-art, intake-done.
- **Title / handle:** "Women's Clocked It – Said Nothing Tee" / `womens-clocked-it-said-nothing-graphic-tee` (R7.4).
- **Copy:** R8 + R9.11 (joke and occasion in line one), answer-first FAQs per R8.7 (4–6, 40–60 words: fit, care, sizing, weight/warmth, gift timing with an order-by date). Describe only what is in the art. Primary keyword: measure 2–3 product-level long tails for this design with RankHero (lowest KD with buyer intent wins, R11/R5 of the director role), record it in docs/product-keyword-map.json; supporting phrases at most once.
- **Cover:** next registry model per R6.3 (audience below), real garment from the product's own Printful mockup as `--design` (--n 1), nothing over the print, read every word (R6.7–R6.9). One image per call; max 2 attempts.
- **After mockups:** run `python3 scripts/design-crops.py` (rule 7d) and `python3 scripts/variant-photo-audit.py`; every offered color needs its own mockup (rule 7c).
- **Price (R12.1):** the current tier for this blank, no compare-at.
- **Priority:** build before anything else in your lane; flip to REVIEW only when Printful synced = variant count.
---
## Log
- 2026-10-17 Claude: brief + final art + approved mockups (designs/first5/); READY, top priority (Sam: ship it).
