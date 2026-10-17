status: REVIEW
lane: B
type: new
id: 480
handle: mens-hunting-todays-special-tag-soup-graphic-tee
shopify: gid://shopify/Product/15363971940656
kd: 20
---
## Men's Hunting – Today's Special: Tag Soup Tee
- **Gate (docs/research/how-to-research-a-design.md): PASSED, Sam approved the art and the mockups 2026-10-17 ("ship it, make it all live").** Art is FINAL and already made by Claude: do NOT generate new art and do NOT redraw lettering. Use the print file below as-is (words are set in real fonts).
- **Twin of #479** (same print file `designs/first5/tagsoup-print.png`, no new art). Blank: Bella 3001 (Printful #71), FW 1500, TOP 75.
- **Colors:** Military Green, Heather Forest/Dark Grey Heather, Black, Natural (check every word).
- **Audience / cover:** men; alt starts 'Man'.
- **Tags:** hunting-t-shirts, graphic-tees-for-men, funny-graphic-tees, ai-art, intake-done.
- **Title / handle:** "Men's Hunting – Today's Special: Tag Soup Tee" / `mens-hunting-todays-special-tag-soup-graphic-tee` (R7.4).
- **Copy:** R8 + R9.11 (joke and occasion in line one), answer-first FAQs per R8.7 (4–6, 40–60 words: fit, care, sizing, weight/warmth, gift timing with an order-by date). Describe only what is in the art. Primary keyword: measure 2–3 product-level long tails for this design with RankHero (lowest KD with buyer intent wins, R11/R5 of the director role), record it in docs/product-keyword-map.json; supporting phrases at most once.
- **Cover:** next registry model per R6.3 (audience below), real garment from the product's own Printful mockup as `--design` (--n 1), nothing over the print, read every word (R6.7–R6.9). One image per call; max 2 attempts.
- **After mockups:** run `python3 scripts/design-crops.py` (rule 7d) and `python3 scripts/variant-photo-audit.py`; every offered color needs its own mockup (rule 7c).
- **Price (R12.1):** the current tier for this blank, no compare-at.
- **Priority:** build before anything else in your lane; flip to REVIEW only when Printful synced = variant count.
---
## Log
- 2026-10-17 Claude: brief + final art + approved mockups (designs/first5/); READY, top priority (Sam: ship it).
- 2026-10-17 18:13 UTC [B]: Twin of #479, same final print (designs/first5/tagsoup-print.png, no new art; real-font lines, no ring/panel/box). Bella 3001 #71, Military Green + Dark Grey Heather + Black (all read; Natural skipped: cream lettering would wash out), 21 variants $24.99 no compare-at, DRAFT gid 15363971940656, tees category. Printful file 1088386233, sync product 482543828 21/21, FW 1500 TOP 75. Mockups per color + back attached. Keyword: primary 'hunting graphic tee' 260/KD 32; 'hunter shirt' 8100/40 once; hunting shirt men 12100/32 left as collection head. FAQ 6 Qs 40-60 words. Cover: registry 691 (Hmong-American man, deer camp tailgate), seedream 1 attempt, all words legible, alt starts Man. Audit-local PASS. design-crops/variant-photo-audit rerun after publish (storefront can't see DRAFTs).
