status: LIVE
lane: A
type: twin
id: 587
handle: womens-christmas-capybara-tangled-unbothered-crewneck-sweatshirt
kd: 35
shopify: gid://shopify/Product/15412700938544
cover: fal-swap
---
## Women's Christmas – Capybara Tangled. Unbothered. Crewneck Sweatshirt
- **Blank:** Gildan 18000 (Printful #145) crewneck, 8 oz, 50/50 cotton-poly fleece. Never "garment-dyed" or "Comfort Colors" (R7.1).
- **Style:** Twin: reuses the source art (no new art generation, R6.2); its own cover, copy and long-tail.
- **Text on shirt (real fonts via scripts/compose-print.py, never drawn by the image model; spelled exactly):** Twin of #586: same print file once #586 is approved (R6.2: check every line of the source art first). Sets its own width for the blank: FW 1650 TOP 75 (R5.3.2 twins line).
- **Hook:** Same as #586: a serene capybara wrapped in tangled Christmas lights, TANGLED. Unbothered. On a crewneck it is the gift version: a capybara person's Christmas sweatshirt.
- **Three lines considered (R3.1):** see #586.
- **Joke QC (R3.7) / R3.12:** see #586.
- **Why it's not taken:** capybara gifts results are plush toys, mugs and stickers; few sweatshirts carry a joke line.
- **Design gate (5 parts, docs/research/how-to-research-a-design.md):** search: capybara gifts 8,100 / KD 35 (RankHero 2026-10-18; competition 21,672) · proof and look: see #586 · gift test: this is the gift page (Christmas, birthdays, Secret Santa).
- **Art prompt (Recraft v4, one image per call):** No new art: reuse #586's print. Builder order: build #586 first; claim this twin only after #586's art passes the director.
- **Colors (R7.2):** White, Sand, Sport Grey, Light Pink (+ Light Blue if the art reads). ≤100 variants.
- **Primary keyword:** capybara gifts: 8,100 / KD 35 (RankHero via scripts/keyword-gap.py, 2026-10-18, director). KD 21–35 band. Unowned. Copy names it as a gift: "one of the capybara gifts that ..." is out (R8.3); say it plainly ("A capybara gift for the friend who ...").
- **Print size:** FW 1650 TOP 75 (crewneck, no pouch).
- **Copy:** line one = the line + who wears it + when (R9.11), said plainly: no superlative opener built around the keyword (R8.3). Primary keyword in the title or SEO title, the first sentence and once in the meta; at most 3 times in all (the audit warns at 4). Describe only what is in the art; never say we drew it ("Original art, made for Graphic Tees Co."). Answer-first FAQs per R8.7: 4–6 at 40–60 words (fit, weight, wash care, gift fit, Christmas order-by about Dec 8, free size exchange).
- **Cover:** registry #927 (Filipino-American woman, early 40s, long straight black hair tied in a low bun, small pearl studs, warm smile lines), CLAIMED. Scene: a holiday market at dusk with string lights and a gift stall; a wrapped present at her side, hands empty or at her hip, never over the print. Props never over the print (R6.5); hair tied back or behind the shoulders (R6.9). Printful mockup as `--design` (--n 1). Max 2 attempts.
- **Title / handle:** "Women's Christmas – Capybara Tangled. Unbothered. Crewneck Sweatshirt" / `womens-christmas-capybara-tangled-unbothered-crewneck-sweatshirt` (R7.4; the suffix sets the audit price, R12.1).
- **Tags:** christmas-sweatshirts, sweatshirt, christmas, ai-art, intake-done.
- **Price:** $34.99 (R12.1 crewneck), NO compare-at.
- **After publish:** design-crops.py and variant-photo-audit.py (builder 7c/7d). Before REVIEW: Printful default file checked on every variant and logged (R7.7, 2026-10-18 line); cover chest zoomed to 200% (R6.9 clean-erase line).
---
## Log
- 2026-10-18 05:32 UTC director: brief written, READY (twin of #586, gift-intent long-tail; KD ≤ 20 band empty for these niches in this run's sweep, so KD 21–35 first, then measured KD 36+ phrases over 1,000 a month; proof seller named under the gate).
- 2026-11-07 UTC builder [B]: crewneck twin built to REVIEW. Title/handle follow the LIVE print (I'M NOT STUCK. / I'M DECORATED., #586 tee file reused via #981's approved hoodie print; brief's Tangled. Unbothered. was stale): Women's Christmas Capybara – I'm Not Stuck, I'm Decorated Crewneck Sweatshirt. DRAFT gid://shopify/Product/15412700938544, 24 variants White/Sand/Light Pink/Sport Grey x S-3XL at $34.99, no compare-at, category aa-1-13-14. Printful sync 490814112 24/24, one file 1105200872 on every variant (R7.7 24/24), FW 1650 TOP 400, fal $0. Twin check R6.2: source lines heavy slab, no script/typeset-thin, no panel; both lines 3129 px wide (headline 3129 / punch 3129 = 100%); subject about 50% of lockup width. Light-blank file: all four colors are light and the print inks are red/green with no cream fill, so no dark-ink file needed (7e). Read all four front mockups at phone size: every word legible. Cover: cover: fal-swap (clean Printful flat front, handle in retired-covers.json). Alt text R7.8, variants linked to colour photos. 5 FAQs 41-52 words, order-by Dec 8. Keyword christmas capybara sweatshirt (unmeasured) in map. cohesion-audit --handle crashes in this environment (Node error), so no PASS; director to run. Sheet docs/review/587.jpg.
- 2026-11-07 23:20 UTC director: APPROVED, LIVE (Nov 7 Chicago day, 3 of 6). Same approved print as #586/#981; every word reads on all four light colors at phone size; crewneck lockup sized for a chest print. Copy: shortened the closing line to 'Printed to order.' (style only; the SOP line is allowed) and cut an awkward ink line; meta trimmed 166 -> 148 chars (R8.4). ACTIVE + Online Store, Headless, Google & YouTube, Copilot, Meta; cohesion-audit --handle PASS (2 warn: no lifestyle cover, false 'non-holiday' flag). Stale map row for the old tangled-unbothered crewneck handle ('capybara gifts', a gift phrase, R2.10) removed.
