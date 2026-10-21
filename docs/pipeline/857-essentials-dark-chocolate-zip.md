status: PARKED
lane: E
type: new
id: 857
handle: unisex-essentials-dark-chocolate-zip-hoodie
kd: 16
push: zip
---
## Unisex Essentials – Dark Chocolate Embroidered Zip Hoodie
- **Why now:** Sam's ESSENTIALS line (inbox 2026-10-21 03:10; docs/backlog/zip-up-upgrade.md items 27-28): solid zip hoodies with no graphic, just the brand, counting toward the zip 40 (R11.13). Lane E is the third zip/camo lane (inbox 05:50: AOP pilots, Essentials, colorways).
- **Gate:** waits for the #851 Essentials pilot (LIVE, or its fallback logged). Use the price #851 set for its blank; for Gildan 18600 / SS4500Z use $54.99 (zip + $10 chest stitch, R12.1 #815 line) unless the logged cost leaves less than $12, then tell the director.
- **Blank:** Gildan 18600 (Printful #692), color Dark Chocolate only (one colorway per product, each with its own measured color search). Sizes: every size Printful offers in that color.
- **Front:** a small embroidered Graphic Tees Co. mark on the LEFT chest, about 3 in wide: only the 'Graphic Tees' script (+ COMPANY if it holds at 3 in), no ring text (too fine to stitch), one thread, bone thread (item 28). R4.8 stitched-text minimums: capitals 0.3 in, lowercase 0.25 in; measure in emb-prep and log it.
- **Back:** a small DTG print of the full brand badge (designs/brand/back-logo-company.png, or back-logo-cream.png on dark colors) about 3 in wide at the back top, just below the hood (Printful 'back' placement, top-aligned). No back embroidery (Printful has none on zips). R6.12: copy says exactly that.
- **No joke on this one (Sam asked for plain brand zips).** R3 hook does not apply; the color and the fit are the product.
- **Primary keyword:** brown zip hoodie: 2,400 / KD 16 (competition none listed) (RankHero via scripts/keyword-gap.py's rankhero(), 2026-10-21 07:10 UTC, director; no '<color> zip up hoodie' phrase is measured, so the measured color + garment phrase). Names the garment (R2.11); unowned in docs/product-keyword-map.json; record it with this handle. Title, H1 subline, meta and first sentence say "brown zip hoodie" once where a person would ("A dark chocolate zip-up..." is fine). Never 'black zip up hoodie' or another page head (R8.8, R11.14).
- **Title / handle:** "Unisex Essentials – Dark Chocolate Embroidered Zip Hoodie" / `unisex-essentials-dark-chocolate-zip-hoodie`.
- **Tags:** zip-up-hoodies, zip-up-hoodies-for-men, zip-up-hoodies-for-women, graphic-hoodies-for-men, graphic-hoodies-for-women, embroidered-hoodies, hoodie, intake-done (no ai-art: no AI art on the product itself). A unisex item needs a cover showing a man AND a woman only if it carries both audience hub tags; here the cover shows one person, so tag ONLY the audience the cover shows (R6.3; this brief's cover is a woman): drop the other gender's two tags.
- **Copy (honest and short, item 27):** what it is (a plain dark chocolate full-zip hoodie with a small embroidered chest mark and a small printed back-top logo), fabric and fit from the Printful spec only, care for embroidery, gift line (order by about Dec 8 for Christmas), free size exchange. SOP three sections, 4-6 answer-first FAQs (40-60 words). No 'original art' claims about the blank.
- **Cover (R11.12 zip covers; overrides R6.11 flat-only for zip-ups):** one AI lifestyle photo of the color, the back-top brand mark readable: a woman walking past a coffee roastery storefront on a cold morning, back to camera. Registry row below (claimed, never used). Zip at the FRONT, plain back (R6.8). One image per call (--n 1), max 2 tries inside the $16/day fal cap; if both fail, use the Printful back mockup and log it. Photo order: cover, chest close-up, back, then flats.
- **Registry:** row 1030 (claimed): Afro-Latina woman, late 20s, voluminous natural curls pulled up, slim build.
- **Swatches:** add 'Dark Chocolate' to src/lib/swatches.ts if it is missing (item 29).
- **Before REVIEW:** GET /sync/products, every variant on the chest embroidery file and the back file (R7.7, 'N/N on <id>'); review sheet with cover, back, chest close-up; `node scripts/cohesion-audit.mjs --handle unisex-essentials-dark-chocolate-zip-hoodie` PASS except 'not active'.

---
## Log
- 2026-10-21 07:10 UTC director: brief written, READY (Essentials line, lane E, push: zip; registry row 1030 claimed).
- 2026-10-21 13:33 UTC director: format decided on #851 (option A: embroidered chest only on #943, no back-top mark, $49.99 flat, no compare-at). Build after #851 reaches REVIEW.
- 2026-10-21 14:40 UTC builder [E]: PARKED: Printful catalog #943 (Lane Seven LS14003) offers only Black, Burgundy, Charcoal Heather, Heather Grey, Navy, Oatmeal Heather, Red, Sandshell, Seafoam, White (checked GET /products/943); there is no Dark Chocolate, so no variant can be synced. Director: pick a catalog color (Navy, Black, Red, Heather Grey, White are unused by the Essentials line) or another blank. Registry row stays CLAIMED, no fal spent.
