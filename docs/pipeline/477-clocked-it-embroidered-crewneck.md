status: BUILDING [A] 2026-10-17 17:58 UTC
lane: A
type: new
id: 477
handle: womens-clocked-it-said-nothing-embroidered-crewneck-sweatshirt
kd: 20
---
## Women's Clocked It – Said Nothing Embroidered Crewneck Sweatshirt
- **Gate (docs/research/how-to-research-a-design.md): PASSED, Sam approved the art and the mockups 2026-10-17 ("ship it, make it all live").** Art is FINAL and already made by Claude: do NOT generate new art and do NOT redraw lettering. Use the print file below as-is (words are set in real fonts).
- **Blank:** Gildan 18000 crewneck (Printful #145), REAL embroidery (R4.8): chest center `designs/first5/clocked-chest-white.png` (3.83 × 3.98 in, the max), left wrist `designs/first5/clocked-cuff-white.png` ("said nothing."). Thread **#FFFFFF** (Printful's palette has no cream), flat stitch. Keep the printed back-neck logo. Use `scripts/pf-emb-sync.py` (CHEST=center) and `scripts/pf-emb-mockup.py` (style ids 1139/1140).
- **Joke / format:** side-eye cat + "clocked it." on the chest, the punchline "said nothing." on the cuff. Proof: restraint jokes top Etsy ("things I manage not to say" 7,300 favs) and embroidered sarcasm sells on TikTok Shop ("A Little Ray of Pitch Black" 2,300 sold); "clock it" is current TikTok slang (Elle, 2026).
- **Colors:** Dark Heather, Military Green, Maroon (all tested with white thread).
- **Audience / cover:** women 25–55; alt starts 'Woman'. Show the cuff in the cover if natural (sleeve visible).
- **Tags:** embroidered-sweatshirts, graphic-sweatshirts, sweatshirt, ai-art, intake-done.
- **Title / handle:** "Women's Clocked It – Said Nothing Embroidered Crewneck Sweatshirt" / `womens-clocked-it-said-nothing-embroidered-crewneck-sweatshirt` (R7.4).
- **Copy:** R8 + R9.11 (joke and occasion in line one), answer-first FAQs per R8.7 (4–6, 40–60 words: fit, care, sizing, weight/warmth, gift timing with an order-by date). Describe only what is in the art. Primary keyword: measure 2–3 product-level long tails for this design with RankHero (lowest KD with buyer intent wins, R11/R5 of the director role), record it in docs/product-keyword-map.json; supporting phrases at most once.
- **Cover:** next registry model per R6.3 (audience below), real garment from the product's own Printful mockup as `--design` (--n 1), nothing over the print, read every word (R6.7–R6.9). One image per call; max 2 attempts.
- **After mockups:** run `python3 scripts/design-crops.py` (rule 7d) and `python3 scripts/variant-photo-audit.py`; every offered color needs its own mockup (rule 7c).
- **Price (R12.1):** the current tier for this blank, no compare-at.
- **Priority:** build before anything else in your lane; flip to REVIEW only when Printful synced = variant count.
---
## Log
- 2026-10-17 Claude: brief + final art + approved mockups (designs/first5/); READY, top priority (Sam: ship it).
- 2026-10-17 18:01 UTC builder [A]: Shopify DRAFT gid://shopify/Product/15363964698928 created (17 variants, $39.99, Dark Heather/Military Green/Maroon S-3XL (Maroon to 2XL), category aa-1-13-14, keyword 'cat sweatshirt women' 720/KD27; 'embroidered cat sweatshirt' already owned by Purrsonal Space).
