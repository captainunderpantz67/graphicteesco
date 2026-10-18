status: READY
lane: A
type: twin
id: 617
handle: mens-christmas-drew-your-name-panicked-crewneck-sweatshirt
kd: 10
---
## Men's Christmas – Drew Your Name. Panicked. Crewneck Sweatshirt
- **Blank:** Gildan 18000 (Printful #145) crewneck, 8 oz, 50/50 cotton-poly fleece. Never "garment-dyed" or "Comfort Colors" (R7.1).
- **Style:** Twin: reuses the source art (no new art generation, R6.2); its own cover, copy and long-tail. R6.2 lettering check on the source print before linking, and log it.
- **Text on shirt (real fonts via scripts/compose-print.py, never drawn by the image model; spelled exactly):** Twin of #616: same print file once #616 is approved (R6.2: check every line of the source art first). Sets its own width for the blank: FW 1650 TOP 75 (R5.3.2 twins line).
- **Hook:** Same as #616: a 1950s office man in a cold sweat over a name slip from a Santa hat, DREW YOUR NAME. Panicked. On a crewneck it is the gift-exchange night sweatshirt.
- **Three lines considered (R3.1):** see #616.
- **Joke QC (R3.7) / R3.12:** see #616.
- **Why it's not taken:** see #616; funny Secret Santa gift searches turn up mugs, notepads and socks, no sweatshirt that owns the panic.
- **Design gate (5 parts, docs/research/how-to-research-a-design.md):** search: funny secret santa gifts 18,100 / KD 10 (RankHero 2026-10-18; Oct 2025 9,900 → Nov 74,000 → Dec 110,000 → Jan 2,900; country split not reported) · proof: DapperCustomTees funny Christmas statement sweatshirt ("From The Windows to the Walls…") 929 favorites (same format: Christmas joke-line crewneck), SeamsToBeShirts men's statement tee 1,135 favorites (RankHero listing stats 2026-10-18, favorites) · the rest: see #616.
- **Art prompt (Recraft v4, one image per call):** none (twin).
- **Colors (R7.2):** Sand + Navy (R7.2 cold-weather launch colors): the dark-ink file on Sand, the cream-script file on Navy; read DREW YOUR NAME. and "Panicked." on the Navy mockup at phone size; knock out closed counters (D, R, O, A, e, d) on Navy (R5.3.8). If the soft black linework sinks on Navy, use the closest light + dark pair it reads on and log why.
- **Primary keyword:** funny secret santa gifts: 18,100 / KD 10 (RankHero via scripts/keyword-gap.py and the keyword page, 2026-10-18, director; Dec 2025 peak 110,000, R2.6 trend checked). KD ≤ 20 band with clear buyer intent. Unowned in docs/product-keyword-map.json and every brief; not a collection head. Supporting: none. Never 'secret santa gifts for men' (#616) or 'mens christmas sweater' (the /christmas-sweatshirts-for-men/ head).
- **Print size:** FW 1650 TOP 75 (crewneck, no pouch).
- **Copy:** line one = the line + who wears it + when (R9.11), said plainly: no superlative opener built around the keyword (R8.3). Primary keyword in the title or SEO title, the first sentence and once in the meta; at most 3 times in all (the audit warns at 4). Describe only what is in the art; never say we drew it ("Original art, made for Graphic Tees Co."). Answer-first FAQs per R8.7: 4–6 at 40–60 words (fit, weight, wash care, gift fit, Christmas order-by about Dec 8, free size exchange).
- **Cover:** registry #957 (Taiwanese-American man, mid 30s, short side-parted black hair, thin black-rimmed glasses, clean-shaven, slim build), CLAIMED. Scene: a friend's living room set up for a gift exchange, a lit tree and a pile of wrapped gifts behind him; one small wrapped gift held at his hip, the other hand in a pocket. No alcohol (R6.5). Props never over the print (R6.5); first word of the top line checked letter by letter (R6.9). Printful mockup as `--design` (--n 1), art flattened onto the garment color first (R6.7). Max 2 attempts.
- **Title / handle:** "Men's Christmas – Drew Your Name. Panicked. Crewneck Sweatshirt" / `mens-christmas-drew-your-name-panicked-crewneck-sweatshirt` (R7.4; the suffix sets the audit price, R12.1).
- **Tags:** christmas-sweatshirts, christmas-sweatshirts-for-men, sweatshirt, christmas, ai-art, intake-done (crewneck tags only, R7.5).
- **Price:** $34.99 (R12.1 crewneck), NO compare-at.
- **After publish:** design-crops.py and variant-photo-audit.py (builder 7c/7d). Before REVIEW: Printful default file checked on every variant and logged (R7.7, 2026-10-18 line); cover chest zoomed to 200% (R6.9 clean-erase line).
---
## Log
- 2026-10-18 07:36 UTC director: brief written, READY (lane A; kd 10; KD ≤ 20 gift-intent band; funny secret santa gifts 18,100 measured with a December surge; proof named under the gate).
