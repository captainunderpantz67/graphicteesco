status: REVIEW
lane: B
type: new
id: 482
handle: womens-football-mom-promised-to-behave-graphic-tee
shopify: gid://shopify/Product/15363981639984
kd: 20
---
## Women's Football Mom – Promised to Behave Tee
- **Gate (docs/research/how-to-research-a-design.md): PASSED, Sam approved the art and the mockups 2026-10-17 ("ship it, make it all live").** Art is FINAL and already made by Claude: do NOT generate new art and do NOT redraw lettering. Use the print file below as-is (words are set in real fonts).
- **Blank:** Women's Relaxed Tee Bella 6400 (Printful #360), printed: `designs/first5/football-print.png` (3370×3523, cream/gold ink), FW 1500, TOP 75.
- **Joke / format:** the most-repeated sports-mom line on TikTok ("I promised to behave… never said for how long", 3.5K+ likes across baseball and football mom pages). Football with a halo and a sneaky devil tail; varsity type.
- **Colors:** Black, Maroon (mocked up), plus Navy, Forest and Red-family darks for team colors if every word reads.
- **Audience / cover:** women 25–55 in the bleachers at a Friday night game; alt starts 'Woman'.
- **Tags:** football-mom-shirts, graphic-tees-for-women, funny-graphic-tees, ai-art, intake-done. Series note: baseball/softball/soccer versions later by swapping the ball.
- **Title / handle:** "Women's Football Mom – Promised to Behave Tee" / `womens-football-mom-promised-to-behave-graphic-tee` (R7.4).
- **Copy:** R8 + R9.11 (joke and occasion in line one), answer-first FAQs per R8.7 (4–6, 40–60 words: fit, care, sizing, weight/warmth, gift timing with an order-by date). Describe only what is in the art. Primary keyword: measure 2–3 product-level long tails for this design with RankHero (lowest KD with buyer intent wins, R11/R5 of the director role), record it in docs/product-keyword-map.json; supporting phrases at most once.
- **Cover:** next registry model per R6.3 (audience below), real garment from the product's own Printful mockup as `--design` (--n 1), nothing over the print, read every word (R6.7–R6.9). One image per call; max 2 attempts.
- **After mockups:** run `python3 scripts/design-crops.py` (rule 7d) and `python3 scripts/variant-photo-audit.py`; every offered color needs its own mockup (rule 7c).
- **Price (R12.1):** the current tier for this blank, no compare-at.
- **Priority:** build before anything else in your lane; flip to REVIEW only when Printful synced = variant count.
---
## Log
- 2026-10-17 Claude: brief + final art + approved mockups (designs/first5/); READY, top priority (Sam: ship it).
- 2026-10-17 18:23 UTC [B]: Built from Claude's final print (designs/first5/football-print.png, no new art; real-font lines, no ring/panel/box). Bella 6400 #360, Black + Maroon + Navy + Forest Green (all read; reds on the devil tail sink slightly on Maroon, incidental), 24 variants $24.99 no compare-at, DRAFT gid 15363981639984, tees category. Printful file 1088390029, sync product 482545457 24/24, FW 1500 TOP 75. Mockups per color + back attached. Keyword: primary 'football mom outfit' 390/KD 31 (football mom shirt 3600/52 and tee 3600/50 left as collection head); 'football mom tshirt' 3600/48 once. FAQ 6 Qs 40-60 words. Cover: registry 692 (Ethiopian-American woman, bleachers Friday night), seedream 1 attempt, all words legible, alt starts Woman. Audit-local PASS. design-crops/variant-photo-audit rerun after publish (storefront can't see DRAFTs).
