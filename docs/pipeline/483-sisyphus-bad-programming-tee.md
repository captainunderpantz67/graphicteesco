status: REVIEW
lane: B
type: new
id: 483
handle: mens-gym-sisyphus-had-bad-programming-graphic-tee
shopify: gid://shopify/Product/15364002119984
kd: 20
---
## Men's Gym – Sisyphus Had Bad Programming Tee
- **Gate (docs/research/how-to-research-a-design.md): PASSED, Sam approved the art and the mockups 2026-10-17 ("ship it, make it all live").** Art is FINAL and already made by Claude: do NOT generate new art and do NOT redraw lettering. Use the print file below as-is (words are set in real fonts).
- **Blank:** Bella 3001 (Printful #71), printed: `designs/first5/sisyphus-print.png` (3365×3549, dark ink + terracotta), FW 1500, TOP 75.
- **Joke / format:** culture × gym (proof: Sisyphus pump cover 1,583 Etsy favs, "Dost thou even hoist" 1,670). Greek-vase hero pushing a giant weight plate uphill; Cinzel caps.
- **Colors:** Natural, Heather Dust (mocked up), plus White, Ash, Athletic Heather. Light colors only (black ink).
- **Audience / cover:** men who lift, home or garage gym; alt starts 'Man'.
- **Tags:** mens-gym-shirts, graphic-tees-for-men, funny-graphic-tees, ai-art, intake-done. Gift angle: for the lifter who loves a program.
- **Title / handle:** "Men's Gym – Sisyphus Had Bad Programming Tee" / `mens-gym-sisyphus-had-bad-programming-graphic-tee` (R7.4).
- **Copy:** R8 + R9.11 (joke and occasion in line one), answer-first FAQs per R8.7 (4–6, 40–60 words: fit, care, sizing, weight/warmth, gift timing with an order-by date). Describe only what is in the art. Primary keyword: measure 2–3 product-level long tails for this design with RankHero (lowest KD with buyer intent wins, R11/R5 of the director role), record it in docs/product-keyword-map.json; supporting phrases at most once.
- **Cover:** next registry model per R6.3 (audience below), real garment from the product's own Printful mockup as `--design` (--n 1), nothing over the print, read every word (R6.7–R6.9). One image per call; max 2 attempts.
- **After mockups:** run `python3 scripts/design-crops.py` (rule 7d) and `python3 scripts/variant-photo-audit.py`; every offered color needs its own mockup (rule 7c).
- **Price (R12.1):** the current tier for this blank, no compare-at.
- **Priority:** build before anything else in your lane; flip to REVIEW only when Printful synced = variant count.
---
## Log
- 2026-10-17 Claude: brief + final art + approved mockups (designs/first5/); READY, top priority (Sam: ship it).
- 2026-10-17 18:31 UTC [B]: Built from Claude's final print (designs/first5/sisyphus-print.png, no new art; real-font Cinzel lines; the Greek-key band is a thin decorative rule inside the approved art, left as Sam approved it). Bella 3001 #71, Natural + Heather Dust + White + Ash + Athletic Heather (light colors only, black/terracotta ink), 35 variants $24.99 no compare-at, DRAFT gid 15364002119984, tees category. Printful file 1088396094, sync product 482547466 35/35, FW 1500 TOP 75. Mockups per color + back attached. Keyword: primary 'workout tee men' 210/KD 33 (funny gym t shirt 3600/41 used once; funny gym shirt and sisyphus shirt already owned). FAQ 6 Qs 40-60 words. Cover: registry 693 (Samoan-American man, garage gym), seedream 2 attempts (#1 towel covered the S of SISYPHUS), alt starts Man. Audit-local PASS. design-crops/variant-photo-audit rerun after publish (storefront can't see DRAFTs).
