# Store rules — the "build ecom store" playbook (living list)

Rules Sam has locked in while building Graphic Tees Co. Each one is a requirement for every future page, product and automated run. Add new rules as they're set; this file becomes the skill.

## Keyword gate — buy the bottom (Sam's core strategy; applies before ANY page, collection or product is built)
1. Every collection, page and product needs a **measured** primary keyword: monthly volume + KD from a real source (RankHero / DataForSEO / Search Console). An autocomplete phrase alone is not demand. No measurement → don't build it.
2. **Priority order:** KD ≤ 20 with volume ≥ 500 first ("the bottom"). KD 21–35 next. KD 36–50 only with depth (6+ designs, 400+ words). KD > 50 = hub pages only, never a build target on its own.
3. Prefer the easier modifier of a hard head term: "christmas shirts for women" (5,400 / KD 14) over "christmas shirts" (33,100 / KD 58); "christian shirts men" (KD 12) over "christian shirts" (KD 58).
4. Record volume, KD, source and date next to every target (collections.ts / intake log). Re-verify any target older than 90 days before building on it.
7. **Small volume ≠ small intent (Sam, 2026-10-09):** tiny, specific product-page searches are buying intent. Every product page claims its niche-true long-tails: run `scripts/keyword-gap.py` with 2–4 design seeds, keep measured phrases that describe the art (any size, any KD), skip trademarks/off-intent/generic, make sure no other product or collection already owns the phrase (`docs/product-keyword-map.json`), then work them into the Story and Questions naturally (one Q&A can carry 2–3 phrases). Record them in the map.
6. **Niche-true + surge-timed (Sam, 2026-10-09):** the bottom means the low-KD, low-volume measured phrases under a head term that genuinely describe the page's niche, timed to the seasonal surge (holiday terms spike Oct→Dec). Off-niche or junk long-tails don't qualify even if KD is low. Work them in naturally, never stuffed. **Also claim the medium/high-KD niche-true phrases** (Sam, 2026-10-09): the bottom gets built first, but on-page copy still stakes a claim on every relevant measured phrase at any KD, because the strategy ranks on those too over time.
5. Every new design idea starts from the bottom list, not from "popular niches". The question is always: what are people searching that nobody strong is serving?

## Process
- Ship, then test (Sam, 2026-10-09): copy, SEO and templated changes go straight live; verify the live pages (build, seo-audit, curl) and fix forward. Screenshot first only for brand-new visual directions. No side-quest rebuilds.
- If a note is ambiguous, ask one short question instead of guessing and shipping.
- Be credit-conscious: one good attempt, checked, beats several fast ones.

## Image standard v2 (Sam, 2026-10-08) — applies to every image on the site
**Where images go**
1. Homepage hero — fal lifestyle group shot, three new people, real light.
2. Men's / women's big cards — one fresh lifestyle photo each.
3. Women's + men's collection cards — a lifestyle photo shot in the collection's world (keep the 7 approved women's cards; redo Country).
4. Seasonal drop banner — group lifestyle shot per season (Halloween → Thanksgiving → Christmas).
5. Collection page headers — scene-setting lifestyle banner at the top of each collection.
6. Collection grid covers — one unique fal lifestyle photo per product, in that product's world (incl. the brother's early designs).
7. **Product page carousel — slide 1 is that product's fal cover (the only human). The other ~5 slides are the product alone, no people: Printful flat / ghost shots on white — front, back (shows the logo), 2–3 color options, a print close-up.** Printful's stock models are no longer used anywhere: they repeat across every product and make the catalog look templated.
8. Guides + social share (OG) images — a lifestyle photo each.

- **Image budget:** exactly two generated images per product — the design art and one lifestyle cover (grid card + carousel slide 1). The product carousel is exactly 6 photos: that lifestyle cover, the product alone in four different colors, and one back view showing the logo (Printful mockups, no humans) — nothing else. Applies retroactively to every existing product.

**Photo rules (every generated person)**
- Scene = the shirt's world (stadium, ballpark, river, deer camp, ranch, gym, church, porch); never a studio or couch.
- Whole face + hair in frame with headroom; candid, natural skin, no glamour retouching.
- Age fits the audience (moms 30s–40s, grandma/Mimi 50s–60s, college-age for cropped). Men's products → men; women's → women; unisex → mixed genders and ethnicities.
- Never the same face twice anywhere on the site — check and log `docs/model-registry.md` before every generation.
- Print = the exact design (frame and colors included), real ink on fabric, nothing covering or tucked under it; props at hip/side.
- QC reject list: warped hands, garbled text, changed print, background logos/brands, a repeated face. Model: fal Seedream 4 (proven 2026-10-08); test Seedream 5 Pro once.

**Design art (new shirts)**
- **Market research first (Sam, 2026-10-08):** before designing for a collection, research what's actually selling in that niche — Etsy bestsellers (bestseller badges, review counts, "in N carts"), Amazon Merch best-seller rank, Pinterest/TikTok trend searches, Google Trends, RankHero competing-listing counts. Build each collection's designs from the proven winners until we own the niche.
- **Recreate the proven idea, never the art:** reuse the winning *theme, motif, phrase, layout style, palette and format* — redrawn as our own original artwork. Never trace, copy or near-duplicate a specific seller's design, and never use trademarked phrases, brands or characters. (Copying gets the Shopify / Printful / Etsy accounts pulled.)
- Record the evidence per design in `docs/market-research.md` (what's winning, where, how we know) so every brief traces to both demand (keyword) and proof (sales).
- Original vintage screen-print art, limited 3–4 ink palette; lettering spelled right and legible; no licensed characters, brands or teams.
- Print-ready: transparent background, 3600px / 300 DPI; back logo `back-logo-company.png` 3" top center.
- Every design traces to a measured keyword in `docs/design-briefs.md`.
- Art model: test Ideogram 4.5 (lettering) vs Recraft 4 (vector screen-print) on one brief; use the winner.

**Workflow:** generate → QC → phone preview to Sam → live. After a few approved batches, previews become a daily digest.

## Imagery (no AI slop) — earlier rules, still in force where not replaced above
- Lifestyle photos must live in the shirt's world: a football mom shirt is shot at a football stadium, a baseball mom at a ballpark, a nurse just off shift outside a hospital, faith at a country church, etc. A generic couch or studio is a fail.
- The model's whole face and hair are in frame with headroom; never cropped at the eyes or forehead.
- A different model on every card in a grid, and across neighbouring cards; mix ethnicities and ages (an over-40 card shows a woman over 40).
- The print must read as real ink on fabric (folds, matte, not a sticker). Generate from the exact design file.
- Nothing covers the print or shows through/under it: no lanyards, badges, straps, hands, cups or hair over the graphic. Props sit at the hip or to the side. Check every image for physical plausibility (a badge "under" a printed shirt is an instant fail) before it goes anywhere.
- The printed design must match the product exactly, including its background frame/shape; reject variants where the model drops or redraws part of the art.
- Men's products: 4+ different men. Women's: 4+ different women. Unisex: men and women of different ethnicities. Backdrop must fit the niche (no gym on a fishing shirt).
- Icons: photo-real objects (trout, antlers, hat, boot, dumbbell, football, cross, stethoscope heart) on the brand cream, object ~70% of a wide oval (5:4), centered on the object, background colour-matched so no patch shows.
- Decorative type rings: separators evenly spaced and centered on the text line.

## Layout
- Long SEO answer blocks are presented as a swipeable card row; every question/answer stays in the HTML as h2 + p.
- Collection cards: brand colour as the frame, real lifestyle photo inside, dark bottom gradient for the label.

## SEO / copy
- Buy the bottom: each page gets one primary keyword, preferring low KD with real volume; head terms are hubs only.
- No keyword stuffing: 4–6 natural phrases per product, each once; no word-salad exact matches, no keyword-string questions, no "one of our ___ shirts", no superlatives.
- Proper nouns capitalised (Christian, Christmas, men's, women's).
- Facts only from the supplier spec (Bella+Canvas 3001/6400 = lightweight 4.2 oz; never "midweight").
- Never claim something the store doesn't have (e.g. hoodies before hoodies exist).
- $29.99 flat on every size and product, **except pump covers: $39.99 flat** (Sam, 2026-10-09) on Printful #1482 All-Over Print Oversized Cotton T-Shirt — heavyweight 8.85 oz (300 g/m²), 95% cotton / 5% elastane, oversized boxy fit, cut-and-sew all-over print. Printful cost $24.89 (2XS–XL) → $32.89 (5XL); sell 2XS–5XL only (6XL leaves ~$4).
- Product H1 includes the niche keyword; meta descriptions hand-written ≤155 chars, never truncated mid-word.
- Every product targets its own design long-tail, not the collection's head term.
