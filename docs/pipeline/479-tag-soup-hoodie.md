status: BUILDING B 17:58Z
lane: B
type: new
id: 479
handle: mens-hunting-todays-special-tag-soup-hoodie
kd: 20
---
## Men's Hunting – Today's Special: Tag Soup Hoodie
- **Gate (docs/research/how-to-research-a-design.md): PASSED, Sam approved the art and the mockups 2026-10-17 ("ship it, make it all live").** Art is FINAL and already made by Claude: do NOT generate new art and do NOT redraw lettering. Use the print file below as-is (words are set in real fonts).
- **Blank:** Gildan 18500 pullover hoodie (Printful #146), printed: `designs/first5/tagsoup-print.png` (3409×4596). Hoodie lesson: keep the print about 10 in tall, TOP 0, nothing at the pouch seam: FW = min(1500, 1600 × w/h) ≈ 1187.
- **Joke / format:** "tag soup" = hunters' term for a season that ends with an unfilled tag (MeatEater, NRA Women glossary). Vintage diner-menu format: deer chef ladling soup with an orange hunting tag floating in it. Cream lettering with black keyline reads on dark and camo.
- **Colors:** Military Green, Dark Heather (mocked up), plus Black and Sand if every word reads.
- **Audience / cover:** men (hunters), deer camp / tailgate scene; alt starts 'Man'.
- **Tags:** hunting-hoodies, graphic-hoodies-for-men, hoodie, ai-art, intake-done. Gift angle: for the hunter who ate tag soup this year.
- **Title / handle:** "Men's Hunting – Today's Special: Tag Soup Hoodie" / `mens-hunting-todays-special-tag-soup-hoodie` (R7.4).
- **Copy:** R8 + R9.11 (joke and occasion in line one), answer-first FAQs per R8.7 (4–6, 40–60 words: fit, care, sizing, weight/warmth, gift timing with an order-by date). Describe only what is in the art. Primary keyword: measure 2–3 product-level long tails for this design with RankHero (lowest KD with buyer intent wins, R11/R5 of the director role), record it in docs/product-keyword-map.json; supporting phrases at most once.
- **Cover:** next registry model per R6.3 (audience below), real garment from the product's own Printful mockup as `--design` (--n 1), nothing over the print, read every word (R6.7–R6.9). One image per call; max 2 attempts.
- **After mockups:** run `python3 scripts/design-crops.py` (rule 7d) and `python3 scripts/variant-photo-audit.py`; every offered color needs its own mockup (rule 7c).
- **Price (R12.1):** the current tier for this blank, no compare-at.
- **Priority:** build before anything else in your lane; flip to REVIEW only when Printful synced = variant count.
---
## Log
- 2026-10-17 Claude: brief + final art + approved mockups (designs/first5/); READY, top priority (Sam: ship it).
