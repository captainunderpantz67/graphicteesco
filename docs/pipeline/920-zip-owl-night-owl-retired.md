status: REVIEW
shopify: gid://shopify/Product/15372195823920
cover: fal-swap
lane: C
type: twin
id: 920
handle: womens-owl-night-owl-retired-embroidered-zip-hoodie
kd: unmeasured
push: zip
---
## Zip twin: Women's Owl – Night Owl, Retired Embroidered Zip Hoodie
- **Why now:** R11.12 zip push, order step 4 (new zips). Twin of an A-grade design (docs/backlog/quality-reset.md A list / R3.13) with no zip version yet; reuses approved art, so $0 fal (the fal wallet is empty). Lane C, push: zip.
- **Source:** the live womens-owl-night-owl-retired-hoodie. Text on the back, as approved: NIGHT OWL, / RETIRED (if this transcription differs from the live print, the live print wins). Popularity evidence (R5.2): the source design is LIVE and A-grade; the format (self-aware statement over a vintage illustration) is the proven seller per docs/research/etsy-2026-10-17/.
- **Hook:** NIGHT OWL, RETIRED: the former party girl now asleep by nine; self-aware twist on a known phrase.
- **Why it's not taken:** no zip-up version exists in the store; twin of our own design on a new garment with its own page, cover and copy (not a retitle).
- **Product:** new DRAFT womens-owl-night-owl-retired-embroidered-zip-hoodie, title "Women's Owl – Night Owl, Retired Embroidered Zip Hoodie". Audience: women's.
- **Primary keyword:** owl zip up hoodie (not measured: scripts/keyword-gap.py 2026-10-21 12:50 UTC returns no volume; the measured head phrases for this niche are already owned by other pages per docs/product-keyword-map.json, so this uses the R11.12 zip/camo waiver: an unmeasured garment phrase with a distinct design angle, never a head term). Record it in docs/product-keyword-map.json. One use each in SEO title, H1, first sentence and meta (R8, R9.11). Never claim zip up hoodie / black zip up hoodie / y2k zip up hoodie heads (R8.8).
- **Twin check (R6.2):** read every line of the source art; any typeset or script line is re-set with compose-print.py in a heavy face from designs/fonts (7r: a face not on the last 5 lane C builds); back print at least FW 1500; the punch line at least as wide as the setup (7h/7p, log both widths).
- **Zip-up standard (docs/backlog/zip-up-upgrade.md items 10-13):** Printful #692 Gildan 18600 zip. FRONT: embroidered left-chest mark about 3.5 in wide (R4.8 minimums). BACK: DTG print at full back width, sitting high. WRIST: embroidered cuff word 9PM on the left wrist (0.3 in caps minimum).
- **Chest mark:** a round sleepy owl with closed eyes on a branch. Drawn by hand in PIL if fal is still empty; must pass builder 7t (names its subject from the outline alone at phone size on the Black mockup).
- **Colors:** Black (lead; black-zip-up-hoodies), Navy, Ash. ≤100 variants; Ash is a light blank and gets a dark-ink back file (R5.3.8).
- **Price:** $57.99 (chest + wrist, R12.1 embroidered zip line), no compare-at (new product); title says "Embroidered".
- **Cover:** one AI lifestyle photo with the BACK print readable, showing a woman, back to camera, no over-the-shoulder look-back, hands and hair off every letter; while fal is empty, the Printful back mockup, logged as `cover: fal-swap`. Photo order: back first, chest close-up, wrist, then one flat per color (R6.13).
- **Before REVIEW:** GET /sync/products, every variant's chest, back and wrist file logged (R7.7 'N/N'); docs/review/<id>.jpg shows the back mockup, the chest mockup and the cover; `node scripts/cohesion-audit.mjs --handle <handle>` PASS.
- **Tags:** zip-up-hoodies, zip-up-hoodies-for-women, graphic-hoodies-for-women, hoodie, ai-art, intake-done; black-zip-up-hoodies once offered in Black (R11.14).
- **Copy:** SOP three h3 sections; line one = the joke + who wears it + when, plain (R8.3); describe only what is in the art and name the ink colors the mockups show; 4-6 answer-first FAQs incl. embroidery care and Christmas order-by (about Dec 8).
- **Cover scene:** a woman on a cozy porch swing with a mug at her side, back to camera.
- **Registry:** row 1078 (claimed): Chinese-American woman, late 20s, shoulder-length straight hair tucked back, petite build.

---
## Log
- 2026-10-21 12:55 UTC director: brief written, READY (zip twin, lane C, push: zip; $0 fal; R11.12 unmeasured-phrase waiver after keyword-gap.py; registry 1078 claimed).
- 2026-10-21 13:22 UTC builder [C]: NEW zip twin built to REVIEW (DRAFT gid://shopify/Product/15372195823920, productSet DRAFT, category Hoodies, 18 variants Black/Navy/Ash x S-3XL at $57.99, no compare-at, Printful sync product 483664425). Twin check (R6.2): the source print (womens-owl-night-owl-retired-hoodie, 3367 x 3181, a Sand print) had NIGHT OWL, in a heavy slab above the owl-in-a-nightcap art and RETIRED in a slab below, clean row gaps either side (rows 540-2652 kept); both lines were cropped away and re-set as NIGHT / OWL, above and RETIRED below. The rust, cream and sage art reads on light and dark blanks, so one art file serves both. Re-set in Alfa Slab One (a face not among the last five lane C builds). Print 3000 x 3576: 7h headline NIGHT 2152 px and OWL, 1639 px / punch RETIRED 2993 px (139% of the widest headline line); 7k type 1516 of 3576 px = 42.4%; 7l subject 1650 of 3000 px = 55.0%. Ash dark file 1091103080: brown headline, navy punch, cream keyline; light file 1091103204: cream headline, orange punch, dark keyline; no cream or white fill on Ash. Chest icon DRAWN BY HAND IN PIL (a sleepy owl on a branch with a crescent moon) because fal is out of balance, one thread (white on dark blanks, #333366 on Ash), 3.50 x 2.84 in (area 4 x 4 in), thinnest stroke 3.59 mm; wrist 9PM in Anton 0.35 in caps, 0.66 in wide. Printful 18/18 verified from GET /sync/products (scripts/c-verify.py): Ash back 1091103080 / chest 1091102918 / wrist 1091102981; Black and Navy back 1091103204 / chest 1091102628 / wrist 1091102800. Photos on the DRAFT: Black back, Navy back, Ash back, Black front, Navy front, Ash front (variants linked to their color's front). Keyword map: primary 'owl zip up hoodie' recorded under products (unmeasured, R11.12 waiver). No cover (fal empty; cover: fal-swap); registry row 1078 stays claimed. Audit-local (DRAFT): PASS with 1 warn (no lifestyle cover).
