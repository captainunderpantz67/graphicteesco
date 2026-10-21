status: READY
lane: E
type: new
id: 851
handle: unisex-essentials-oatmeal-zip-hoodie
kd: 24
push: zip
---
## Unisex Essentials – Oatmeal Embroidered Zip Hoodie
- **Why now:** Sam's ESSENTIALS line (inbox 2026-10-21 03:10; docs/backlog/zip-up-upgrade.md items 27-28): solid zip hoodies with no graphic, just the brand, counting toward the zip 40 (R11.13). Lane E is the third zip/camo lane (inbox 05:50: AOP pilots, Essentials, colorways).
- **Gate:** this is the Essentials PILOT. Before building the others (#852–#858), it proves (a) Printful takes an embroidered left-chest mark plus a small DTG back-top print on #943 Lane Seven, (b) the real per-unit cost. Price it at $49.99 (zip price + $5, title says Embroidered; the audit accepts it) if that leaves at least $12 after Printful and fees, else $54.99 (+$10). Log the cost and the price so the director writes it into R12.1 for the rest.
- **Blank:** Lane Seven LS14003 Premium Full Zip (Printful #943), color Oatmeal Heather only (one colorway per product, each with its own measured color search). Sizes: every size Printful offers in that color.
- **Front:** a small embroidered Graphic Tees Co. mark on the LEFT chest, about 3 in wide: only the 'Graphic Tees' script (+ COMPANY if it holds at 3 in), no ring text (too fine to stitch), one thread, rust thread (item 28). R4.8 stitched-text minimums: capitals 0.3 in, lowercase 0.25 in; measure in emb-prep and log it.
- **Back:** a small DTG print of the full brand badge (designs/brand/back-logo-company.png, or back-logo-cream.png on dark colors) about 3 in wide at the back top, just below the hood (Printful 'back' placement, top-aligned). No back embroidery (Printful has none on zips). R6.12: copy says exactly that.
- **No joke on this one (Sam asked for plain brand zips).** R3 hook does not apply; the color and the fit are the product.
- **Primary keyword:** cream hoodie: 6,600 / KD 24 (competition 3,520) (RankHero via scripts/keyword-gap.py's rankhero(), 2026-10-21 07:10 UTC, director; no '<color> zip up hoodie' phrase is measured, so the measured color + garment phrase). Names the garment (R2.11); unowned in docs/product-keyword-map.json; record it with this handle. Title, H1 subline, meta and first sentence say "cream hoodie" once where a person would ("A oatmeal zip-up..." is fine). Never 'black zip up hoodie' or another page head (R8.8, R11.14).
- **Title / handle:** "Unisex Essentials – Oatmeal Embroidered Zip Hoodie" / `unisex-essentials-oatmeal-zip-hoodie`.
- **Tags:** zip-up-hoodies, zip-up-hoodies-for-men, zip-up-hoodies-for-women, graphic-hoodies-for-men, graphic-hoodies-for-women, embroidered-hoodies, hoodie, intake-done (no ai-art: no AI art on the product itself). A unisex item needs a cover showing a man AND a woman only if it carries both audience hub tags; here the cover shows one person, so tag ONLY the audience the cover shows (R6.3; this brief's cover is a woman): drop the other gender's two tags.
- **Copy (honest and short, item 27):** what it is (a plain oatmeal full-zip hoodie with a small embroidered chest mark and a small printed back-top logo), fabric and fit from the Printful spec only, care for embroidery, gift line (order by about Dec 8 for Christmas), free size exchange. SOP three sections, 4-6 answer-first FAQs (40-60 words). No 'original art' claims about the blank.
- **Cover (R11.12 zip covers; overrides R6.11 flat-only for zip-ups):** one AI lifestyle photo of the color, the back-top brand mark readable: a woman in her late 20s walking a farmers market aisle with a paper coffee cup at her side, back to camera, the small back-top brand mark readable. Registry row below (claimed, never used). Zip at the FRONT, plain back (R6.8). One image per call (--n 1), max 2 tries inside the $16/day fal cap; if both fail, use the Printful back mockup and log it. Photo order: cover, chest close-up, back, then flats.
- **Registry:** row 1024 (claimed): white woman, late 20s, long straight blonde hair in a low braid, tall slim build.
- **Swatches:** add 'Oatmeal Heather' to src/lib/swatches.ts if it is missing (item 29).
- **Before REVIEW:** GET /sync/products, every variant on the chest embroidery file and the back file (R7.7, 'N/N on <id>'); review sheet with cover, back, chest close-up; `node scripts/cohesion-audit.mjs --handle unisex-essentials-oatmeal-zip-hoodie` PASS except 'not active'.

---
## Log
- 2026-10-21 07:10 UTC director: brief written, READY (Essentials line, lane E, push: zip; registry row 1024 claimed).
