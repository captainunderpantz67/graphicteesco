status: READY
lane: A
type: twin
id: 619
handle: womens-christmas-santa-gets-all-the-credit-crewneck-sweatshirt
kd: 8
---
## Women's Christmas – Santa Gets All the Credit Crewneck Sweatshirt
- **Blank:** Gildan 18000 (Printful #145) crewneck, 8 oz, 50/50 cotton-poly fleece. Never "garment-dyed" or "Comfort Colors" (R7.1).
- **Style:** Twin: reuses the source art (no new art generation, R6.2); its own cover, copy and long-tail. R6.2 lettering check on the source print before linking, and log it.
- **Text on shirt (real fonts via scripts/compose-print.py, never drawn by the image model; spelled exactly):** Twin of #618: same print file once #618 is approved (R6.2: check every line of the source art first). Sets its own width for the blank: FW 1650 TOP 75 (R5.3.2 twins line).
- **Hook:** Same as #618: a gift with a pink coquette bow, a nearly empty tape dispenser and scissors, Santa gets ALL THE CREDIT. On a crewneck it is what she wears on Christmas morning while everyone thanks Santa.
- **Three lines considered (R3.1):** see #618.
- **Joke QC (R3.7) / R3.12:** see #618.
- **Why it's not taken:** see #618; gift-for-wife listings are jewelry, robes and personalized blankets, no sweatshirt that says who really did Christmas.
- **Design gate (5 parts, docs/research/how-to-research-a-design.md):** search: christmas gifts for wife 40,500 / KD 8 (RankHero 2026-10-18; Oct 2025 12,100 → Nov 90,500 → Dec 301,000 → Jan 1,900; country split not reported) · proof: DapperCustomTees funny Christmas statement sweatshirt ("From The Windows to the Walls…", women's holiday party) 929 favorites (same format: women's Christmas joke-line crewneck), BBBCustom sarcastic mom statement tee 1,958 favorites (RankHero listing stats 2026-10-18, favorites) · gift test: a partner buys it for the wife who ran Christmas (he gets the joke because he watched her do it) · the rest: see #618.
- **Art prompt (Recraft v4, one image per call):** none (twin).
- **Colors (R7.2):** Sand + Navy (R7.2 cold-weather launch colors). Sand takes the source file. Navy needs its own file: cherry red and pine green sink on Navy, so "Santa gets" goes to cream and ALL THE CREDIT to pink with a cream keyline, and the bow and linework get a cream outline; read every word on the Navy mockup at phone size. If Navy still fails, use the closest light + dark pair it reads on (R7.2) and log why. Knock out closed counters (a, e, A, R, D) on Navy (R5.3.8).
- **Primary keyword:** christmas gifts for wife: 40,500 / KD 8 (RankHero via scripts/keyword-gap.py and the keyword page, 2026-10-18, director; Dec 2025 peak 301,000, R2.6 trend checked). KD ≤ 20 band with clear buyer intent: the wife who does Christmas is the buyer's exact person. Unowned in docs/product-keyword-map.json and every brief ('christmas gifts for husband/boyfriend/dad' are other products'); not a collection head. Supporting: none. Never 'christmas gifts for mom' (#618) or 'christmas sweatshirts for women' (page head).
- **Print size:** FW 1650 TOP 75 (crewneck, no pouch).
- **Copy:** line one = the line + who wears it + when (R9.11), said plainly: no superlative opener built around the keyword (R8.3). Primary keyword in the title or SEO title, the first sentence and once in the meta; at most 3 times in all (the audit warns at 4). Describe only what is in the art; never say we drew it ("Original art, made for Graphic Tees Co."). Never call it chenille, glitter or embroidered. Answer-first FAQs per R8.7: 4–6 at 40–60 words (fit, weight, wash care, gift fit, Christmas order-by about Dec 8, free size exchange).
- **Cover:** registry #959 (Ethiopian-American woman, early 50s, shoulder-length relaxed black hair tied back, small gold hoops, slim build), CLAIMED. Scene: a living room on Christmas morning, torn wrapping paper and opened gifts around a lit tree behind her; a coffee mug at her hip, a bracelet stack on the other wrist, hand empty. Props never over the print (R6.5); hair tied back or behind the shoulders, first word of the top line checked letter by letter (R6.9). Printful mockup as `--design` (--n 1), art flattened onto the garment color first (R6.7). Max 2 attempts.
- **Title / handle:** "Women's Christmas – Santa Gets All the Credit Crewneck Sweatshirt" / `womens-christmas-santa-gets-all-the-credit-crewneck-sweatshirt` (R7.4; the suffix sets the audit price, R12.1).
- **Tags:** christmas-sweatshirts, sweatshirt, christmas, ai-art, intake-done (crewneck tags only, R7.5).
- **Price:** $34.99 (R12.1 crewneck), NO compare-at.
- **After publish:** design-crops.py and variant-photo-audit.py (builder 7c/7d). Before REVIEW: Printful default file checked on every variant and logged (R7.7, 2026-10-18 line); cover chest zoomed to 200% (R6.9 clean-erase line).
---
## Log
- 2026-10-18 07:36 UTC director: brief written, READY (lane A; kd 8; KD ≤ 20 gift-intent band; christmas gifts for wife 40,500 measured with a December surge; proof named under the gate).
