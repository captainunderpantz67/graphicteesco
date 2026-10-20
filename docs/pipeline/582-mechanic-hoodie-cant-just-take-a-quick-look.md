status: REVIEW
lane: A
type: twin
id: 582
handle: mens-mechanic-no-i-cant-just-take-a-quick-look-hoodie
kd: 32
---
## Men's Mechanic – No, I Can't Just Take a Quick Look Hoodie
- **Blank:** Gildan 18500 pullover hoodie (Printful #146), handle ends -hoodie, launch colors Sand + Navy (R7.2 cold-weather rule). Copy facts from the Printful spec only (R7.1).
- **Style:** inherited from the source item; twin, no new art (R6.2).
- **Text on shirt (real fonts via scripts/compose-print.py, never drawn by the image model; spelled exactly):** Same art and lines as #581 (build #581's art first; no new art generation, R6.2). Lettering check first (R6.2): real fonts only.
- **Hook:** Hoodie twin of #581: the lunch-break mechanic and the line of people holding keys, NO, I CAN'T JUST TAKE A QUICK LOOK. A cold-bay layer for the shop in December.
- **Three lines considered (R3.1):** Inherited from #581.
- **Joke QC (R3.7) / R3.12:** Inherited from #581.
- **Why it's not taken:** Mechanic hoodies on Etsy are flag and logo designs; same gap as #581.
- **Design gate (5 parts, docs/research/how-to-research-a-design.md):** search: mechanic hoodie 320 / KD 32 (RankHero 2026-10-18) · proof and joke as #581 · gift test: Christmas for the man who works a cold shop.
- **Art prompt (Recraft v4, one image per call):** None: reuse #581's print file.
- **Colors (R7.2):** Sand + Navy (R7.2). Cream-ink file on Navy, dark file on Sand.
- **Primary keyword:** mechanic hoodie: 320 / KD 32 (RankHero via scripts/keyword-gap.py, 2026-10-18, director). KD 21–35 band, under 1,000 but within the band rule. Unowned. Primary in the first sentence and once in the meta.
- **Print size:** FW 1500 minimum, ends above the pouch seam (R5.3.2); if the art is too tall, widen the lettering or crop the bottom with a worn edge, never shrink (R5.3.2 pouch line).
- **Copy:** line one = the line + who wears it + when (R9.11), said plainly: no superlative opener built around the keyword (R8.3, 2026-10-18 line). Describe only what is in the art; never say we drew it ("Original art, made for Graphic Tees Co."). Answer-first FAQs per R8.7: 4–6 at 40–60 words (fit, weight, wash care, gift fit, Christmas order-by about Dec 8, free size exchange).
- **Cover:** registry #922 (Hmong-American man, mid 40s, short black hair with grey at the temples, clean-shaven, medium build), CLAIMED. Alt starts 'Man'. Scene: a small auto shop yard in winter with a tow truck behind him, breath visible; hood visible behind the neck, hands in the pouch; pass the Printful mockup as `--design` (R6.9 hoodie line). Max 2 attempts.
- **Title / handle:** "Men's Mechanic – No, I Can't Just Take a Quick Look Hoodie" / `mens-mechanic-no-i-cant-just-take-a-quick-look-hoodie` (R7.4; the suffix sets the audit price, R12.1).
- **Tags:** graphic-hoodies-for-men, hoodie, ai-art, intake-done.
- **Price:** $39.99 (R12.1 pullover sale tier), NO compare-at.
- **After publish:** design-crops.py and variant-photo-audit.py (builder 7c/7d).
---
## Log
- 2026-10-18 04:27 UTC director: brief written, READY (lane A; KD ≤ 20 band empty in the sweep, so KD 21–35 buyer phrases, measured this run; proof seller named under the gate).
- 2026-10-18 17:31 UTC builder [A]: twin of #581 (LIVE). R6.2 check on source print 1088748763: headline lines are real fonts (condensed sans NO, I CAN'T JUST; Alfa Slab red TAKE A QUICK LOOK.) set by the brief; no ring/disc/box/panel (figures and tool chest have worn halo edges); no extra typeset tagline. Light file (R5.3.8): Sand uses file 1088995032, NO, I CAN'T JUST in solid navy #1b2a4a fill with the dark keyline removed (open counters); Navy keeps the cream-fill file 1088748763. Primary 'mechanic hoodie' (320 / KD 32). FW 1500 TOP 40 (mockup test: print clears the pouch seam). DRAFT gid 15365758157104 (Sand + Navy x S-3XL = 12, $39.99, no compare-at, category hoodies). Sync 482805681 started (Sand then Navy). Cover pending (registry #922).
- 2026-10-18 17:33 UTC builder [A]: REVIEW. Sync 482805681 verified 12/12: Sand 6/6 on light file 1088995032, Navy 6/6 on 1088748763, back logo 1080398177 on all (FW 1500 TOP 40). Light file: Sand on file 1088995032, headline fill navy (no dark keyline, counters open) - logged per 7e. FAQs 5 at 48-52 words, order-by Dec 8. Primary 'mechanic hoodie' 1x copy + SEO title + meta. Ink in copy named from mockups (cream on Navy, navy on Sand, red). Phone-size read of Sand and Navy mockups OK. Cover: man, hood visible, hands in pouch below print, all words clear at 200%, no composite, registry #922 USED, fal $0.06. design-crops/variant-photo-audit run after publish.
- 2026-10-19 09:16 UTC director: APPROVED on docs/review/582.jpg, graded A against the quality-reset bar (docs/backlog/quality-reset.md): twin of A-grade #581, NO, I CAN'T JUST / TAKE A QUICK LOOK. heavy and full width, every word reads on Sand and Navy; hood visible on the cover. Title, tags, price with no compare-at and SEO lengths checked in Shopify. Stays DRAFT at status REVIEW until the quality reset says RESUME; the director publishes it then without a second review.
