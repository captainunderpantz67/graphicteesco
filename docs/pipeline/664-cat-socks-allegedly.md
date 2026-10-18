status: REVIEW
lane: B
type: addon
id: 664
handle: unisex-cat-allegedly-socks
kd: 28
---
## Unisex Cat – Allegedly Socks
- **Gift add-on (docs/backlog/gift-addons.md, Sam approved 2026-10-18).** Allowed during the quality reset: no new design, no new line, no fal. Source design: #598 (A grade; art from Printful file 1088752795, the guilty Christmas cat). Pull the art layer from that Printful file (or the lane's designs/ folder), never regenerate it.
- **Blank:** Printful #882 Sublimation Socks (all-over print, white base). Copy facts (material, sizes, cushioning) from the Printful #882 spec only (R7.1); never say compression, cotton or one size unless the spec says so. Confirm the Printful base cost leaves at least $6 profit at $18.99 and log the number.
- **Layout:** the #598 guilty cat as the leg motif, a couple of fallen ornaments cut from the same art on the foot. Lettering stays solid ink, read at phone size on the Printful mockup (R3.7.8, R5.3.10). Use Printful's #882 template for the leg and foot panels so nothing lands on the heel or toe seam. Light background (cream or a pale color pulled from the art) so the sublimation white base doesn't show as a blank band.
- **Text on socks (real fonts via scripts/compose-print.py, spelled exactly):** ALLEGEDLY. (Alfa Slab One, faded red with a cream keyline, as #598).
- **Hook:** The cat who knocked the ornament off and admits nothing. Every cat owner has seen that face; one word does it.
- **Lines considered (R3.1):** the line is the A-grade print already approved in the quality-reset grading; no new lines on add-ons.
- **Why it's not taken:** Cat sock top listings are knitting patterns, florals and pet-photo socks; no guilty-cat joke.
- **Popularity (R5.2):** "Floral Cat Socks" (emandsprout) 761 favorites and "Custom Cat Socks, Funny Pet Socks" (AlphaCreativeStudio) 468, top RankHero listings for cat socks (printed cat socks sell).
- **Primary keyword:** cat socks: 14,800 / KD 28 (RankHero 2026-10-18, competition 7,217; Dec 2025 peak, US 36%, median Etsy price $16). Unowned (checked docs/product-keyword-map.json this run); record it with this handle when built.
- **Supporting:** funny cat socks 390 / KD 36 (once in copy).
- **Copy:** line one = the joke + who wears it + when, plainly (R9.11): no superlative opener (R8.3). Primary keyword in the SEO title, H1 subline, first sentence and once in the meta; at most 3 times in all. 300+ words of real copy in the SOP's three sections; 4–6 answer-first FAQs at 40–60 words: what the socks are made of, sizes, washing (inside out, cold, no tumble-dry if the spec says so), gift timing with the order-by date (Christmas: about Dec 8), and that they match the Allegedly shirt (link the source product). Never say we drew it.
- **Cover:** the nicest Printful lifestyle mockup for #882 (R6.10 update, Sam 2026-10-18: no AI covers). If a person shows, match the audience (R6.3) and grep the pipeline logs for the style ID (R6.6). If none passes, the cleanest flat mockup, logged.
- **Title / handle:** "Unisex Cat – Allegedly Socks" / `unisex-cat-allegedly-socks` (the -socks suffix sets the audit kind and the $18.99 price).
- **Tags:** socks, cat, christmas, gift-addon, intake-done. Never a tee, sweatshirt or hoodie collection tag (the audit fails socks in garment grids). The /socks/ hub (funny socks 33,100 / KD 34) is built by the director when 3 socks are live.
- **Price:** $18.99, no compare-at (docs/backlog/gift-addons.md; the audit checks it).
- **Before REVIEW:** `python3 scripts/review-sheet.py 664 <art> <cover> <mockup>`; every variant on the new file id, logged (R7.7); `node scripts/cohesion-audit.mjs --handle unisex-cat-allegedly-socks` passes except "not active".
---
## Log
- 2026-10-18 director: brief written, READY (gift add-on, socks first; source design A grade).
- 2026-10-18 director: Sam put funny boxers first, so build the boxer briefs #666–#669 before this one.
- 2026-10-18 23:25 UTC director: boxers are OFF, so this no longer waits. Before building, read the REDO notes on #660–#663: the front leg placement must read upright (the shared panel printed upside down at the ankle on the front view) and the lockup fills the leg from cuff to heel.
- 2026-10-18 23:37 UTC [B] built on the REDO bar: DRAFT gid 15365993103664, Printful #882 sync 482885855, 3/3 S/M/L on file 1089207127 (back) + 1089207131 (rotated front); art from Printful file 1088752795, motif twice around ALLEGEDLY. (art is wide, so it cannot fill the leg alone), Alfa Slab faded red, foot repeat; mockup checked upright; cost 7.14, $18.99. FAQ 41-54 words; kw cat socks 14,800/KD 28 recorded; light file n/a (single cream panel). Cover: Printful flat mockup, no lifestyle exists for #882. fal 0.
