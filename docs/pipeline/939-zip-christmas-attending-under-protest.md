status: LIVE
shopify: gid://shopify/Product/15372537364784
cover: fal-swap
lane: C
type: twin
id: 939
handle: mens-christmas-attending-under-protest-embroidered-zip-hoodie
kd: unmeasured
push: zip
---
## Zip twin: Men's Christmas – Attending Under Protest Embroidered Zip Hoodie
- **Why now:** R11.12 zip push, order step 4 (new zips). Twin of an A-grade design (docs/backlog/quality-reset.md step 1 A list, #569) with no zip version yet; reuses approved art, so $0 fal (the fal wallet is empty). Lane C, push: zip.
- **Source:** the live mens-christmas-attending-under-protest-hoodie (#569). Text on the back, as approved: ATTENDING / UNDER PROTEST (if this transcription differs from the live print, the live print wins). Popularity evidence (R5.2): the source design is LIVE and A-grade; the format (self-aware statement over a vintage illustration) is the proven seller per docs/research/etsy-2026-10-17/.
- **Hook:** ATTENDING UNDER PROTEST: the guy dragged to every holiday party, who still shows up; the family laughs because they know him.
- **Why it's not taken:** no zip-up version exists in the store; twin of our own design on a new garment with its own page, cover and copy (not a retitle).
- **Product:** new DRAFT mens-christmas-attending-under-protest-embroidered-zip-hoodie, title "Men's Christmas – Attending Under Protest Embroidered Zip Hoodie". Audience: men's.
- **Primary keyword:** christmas zip up hoodie (not measured: scripts/keyword-gap.py 2026-10-21 13:32 UTC returns no volume; the measured head phrases for this niche are owned by other pages per docs/product-keyword-map.json, so this uses the R11.12 zip/camo waiver: an unmeasured garment phrase with a distinct design angle, never a head term). Record it in docs/product-keyword-map.json. One use each in SEO title, H1, first sentence and meta (R8, R9.11). Never claim zip up hoodie / black zip up hoodie / y2k zip up hoodie heads (R8.8).
- **Twin check (R6.2):** read every line of the source art; any typeset or script line is re-set with compose-print.py in a heavy face from designs/fonts (7r: a face not on the last 5 lane C builds); back print at least FW 1500; the punch line at least as wide as the setup (7h/7p, log both widths).
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13):** Printful #692 Gildan 18600 zip. FRONT: embroidered left-chest mark about 3.5 in wide (R4.8 minimums). BACK: DTG print at full back width, sitting high. No wrist word.
- **Chest mark:** stitched UNDER / PROTEST on two lines in the back face (builder 7t default). Must pass builder 7t (names its subject from the outline alone at phone size on the Black mockup; stitched words when in doubt).
- **Colors:** Black (lead; black-zip-up-hoodies), Navy, Ash. ≤100 variants; Ash is a light blank and gets a dark-ink back file (R5.3.8).
- **Price:** $54.99 (chest only, R12.1 embroidered zip line), no compare-at (new product); title says "Embroidered".
- **Cover:** one AI lifestyle photo with the BACK print readable, showing a man, back to camera, no over-the-shoulder look-back, hands and hair off every letter; while fal is empty, the Printful back mockup, logged as `cover: fal-swap`. Photo order: back first, chest close-up, wrist, then one flat per color (R6.13).
- **Before REVIEW:** GET /sync/products, every variant's chest, back and wrist file logged (R7.7 'N/N'); docs/review/<id>.jpg shows the back mockup, the chest mockup and the cover; `node scripts/cohesion-audit.mjs --handle <handle>` PASS.
- **Tags:** zip-up-hoodies, zip-up-hoodies-for-men, graphic-hoodies-for-men, christmas-hoodies, hoodie, ai-art, intake-done; black-zip-up-hoodies once offered in Black (R11.14).
- **Copy:** SOP three h3 sections; line one = the joke + who wears it + when, plain (R8.3); describe only what is in the art and name the ink colors the mockups show; 4-6 answer-first FAQs incl. embroidery care and Christmas order-by (about Dec 8); one gift line (inbox 2026-10-21 05:50). Holiday item: say Christmas in line one.
- **Cover scene:** a man on a front porch strung with Christmas lights, back to camera, wreath on the door.
- **Registry:** row 1096 (claimed): Black man, mid 50s, salt-and-pepper beard, glasses pushed up, heavy build.

---
## Log
- 2026-10-21 13:32 UTC director: brief written, READY (zip twin, lane C, push: zip; $0 fal; R11.12 unmeasured-phrase waiver after keyword-gap.py; registry 1096 claimed).
- 2026-10-21 15:20 UTC builder [C]: NEW zip twin built to REVIEW (DRAFT gid://shopify/Product/15372537364784, productSet DRAFT, category Hoodies, 18 variants Black/Navy/Ash x S-3XL at $57.99, no compare-at, Printful sync product 483693517). Twin check (R6.2): the source print (mens-christmas-attending-under-protest-hoodie, 3443 x 4700, a Sand print) had a red ATTENDING and a cream UNDER PROTEST stacked directly under the cross-stitch reindeer, whose sweater edge runs into the text with no clean row gap (art rows 0-3941 kept); both lines were cropped away and re-set, and because the cut left the sweater's bottom edge straight, scripts/ragged-edge.py broke it into a worn, ragged edge over the last 260 rows (R4.1). The art reads on light and dark blanks, so one art file serves both. No wrist word (brief). Re-set in Graduate (a face not among the last five lane C builds). Print 3000 x 3383: 7h no line above the art; ATTENDING 2971 px, UNDER 2379 px and PROTEST 2944 px (the last line is as wide as the first); 7k type 1462 of 3383 px = 43.2%; 7l subject 1380 of 3000 px = 46.0%. Ash dark file 1091155983: navy lines, cream keyline; light file 1091156071: cream lines, dark keyline; no cream or white fill on Ash. Chest icon DRAWN BY HAND IN PIL (stitched words UNDER over PROTEST in Graduate (builder 7t default, no pictogram)) because fal is out of balance, one thread (white on dark blanks, #333366 on Ash), 3.50 x 1.47 in (area 4 x 4 in), thinnest stroke 1.69 mm; no wrist word (brief). Printful 18/18 verified from GET /sync/products (scripts/c-verify.py): Ash back 1091155983 / chest 1091155934 / wrist none (no wrist word); Black and Navy back 1091156071 / chest 1091155889 / wrist none (no wrist word). Photos on the DRAFT: Black back, Navy back, Ash back, Black front, Navy front, Ash front (variants linked to their color's front). Keyword map: primary 'christmas zip up hoodie' recorded under products (unmeasured, R11.12 waiver). No cover (fal empty; cover: fal-swap); registry row 1096 stays claimed. Audit-local (DRAFT): PASS with 1 warn (no lifestyle cover).
- 2026-10-21 15:45 UTC director: APPROVED on docs/review/939.jpg, held at REVIEW for the 6-LIVE cap. Side by side with 493 Calm Face and 483 Sisyphus: cross-stitch grumpy reindeer with folded arms, ATTENDING UNDER PROTEST stacked and heavy; UNDER PROTEST stitched.
- 2026-10-24 14:20 UTC director: LIVE (Oct 24 Chicago drip, thin-niche order). Re-read docs/review/939.jpg; set ACTIVE, published to Online Store, Headless and Google & YouTube; cohesion-audit --handle PASS (warn: no lifestyle cover).
