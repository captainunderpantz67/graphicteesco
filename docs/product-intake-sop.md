# Product Intake SOP — runs automatically every 2 hours

Store: **Graphic Tees Co.** (`uqz0cg-vq.myshopify.com`), via the Shopify connector.
Designers (Sam's brother + others on the Printful account) publish from Printful. Everything after
that is this SOP — run by the scheduled cloud agent, or by any Claude session when Sam says
"new designs are up".

## Title convention (designers)
`<Audience> <Niche> – <Design Name> <Tee|Hoodie>` — e.g. `Women's Hunting – Doe Season Tee`,
`Men's Fishing – Bass at Dawn Hoodie`, `Unisex Halloween Oversized – Night Shift Tee`.
Style words (Oversized, Cropped, Heavyweight, Zip-Up) may appear anywhere in the title.

## Run
1. **Find new products:** Shopify `search_products` with `search_query: "tag_not:intake-done"`, newest first, up to 50.
   None → write "no new products" to the log and stop.
2. **Design notes (read these first).** Products Claude designs in Google Flow arrive with a first line in the description like
   `DESIGN NOTES: <what the art shows, colors, style, any text on the shirt> | AUDIENCE: men's|women's|unisex | NICHE: fishing | EXTRA TAGS: vintage-graphic-tees | AI-ART`.
   Treat that line as your eyes: it replaces looking at the mockup. Use it for the story copy and tags, add tag `ai-art` when it
   says AI-ART (and use the "made for" closing line), then **remove the notes line** from the final description.
   Photos, back logo and prices are already set in Printful — don't reorder media or touch prices.
   **Classify** each with (if the title is a blank name, look at the featured mockup image to identify the design and niche) `src/data/intake-map.json`: audience + niche + style words + type (tee/hoodie from the title
   or the Printful product type). Collect the union of tags. Unknown niche → add tag `needs-review`, skip copy, report it.
3. **Pair twins:** same `<Design Name>` → tee ↔ hoodie. (The site links twins automatically by name.)
4. **Pick keywords:** from `src/data/keyword-bank.json`, take the entries for this product's collections.
   Choose **10–15 phrases that truly describe this design** (audience, theme, style, occasion). Prefer phrases with
   low `kd` (or null — unmeasured long-tails are the point) and skip anything that names another brand, a licensed
   character, or something the product isn't (performance/UPF gear, kids sizes unless offered).
5. **Write the product copy** — this is a brand, not a Printful listing. Exactly three `<h3>` sections, in this order
   (the site turns them into drawers, so the headings must match):
   - `<h3>The Story</h3>` — 2–3 short paragraphs in the brand voice: start with the feeling or moment the art is about,
     then describe the art, then how/where to wear it. Weave in 4–6 chosen long-tail phrases naturally
     (never a list of keywords). End with one line: "Original art, drawn for Graphic Tees Co. and printed the day you order it." — for AI-generated
     designs (tag `ai-art`) use "Original art, made for Graphic Tees Co. and printed the day you order it." instead.
     No superlatives, no invented backstory about people or places.
   - `<h3>Details &amp; Fit</h3>` — a clean `<ul>` rewritten from Printful's spec bullets: fit + neck, fabric (note blends
     only for colors actually offered), weight/pre-shrunk/side-seamed, size range, colors offered, blank origin.
     Facts must match Printful's data exactly; only the wording changes. Drop Printful's marketing sentence.
   - `<h3>Questions</h3>` — 3 Q&As built from 3–4 more chosen phrases, as `<p><strong>Q?</strong><br>A.</p>`. Answers ≤ 2 sentences.
   - Never claim sizes, materials, shipping times or personalization unless they're in Printful's data.
   - **Read like a person wrote it.** Keyword phrases are topics, not strings to paste: use the natural, grammatical form
     ("a vintage fishing T-shirt", "fly fishing shirts for men") — never word-salad exact matches like "fishing t shirts
     vintage anglers would recognize" or "mens vintage fishing t shirts fans". If a phrase can't fit a normal sentence, skip it.
     Each phrase at most once. Questions must be ones a real shopper would type, not keyword strings with a question mark.
   - SEO description: one plain, human sentence (≤155 chars) that says what the shirt shows and who it's for.
   - Fabric wording: Bella+Canvas 3001 and 6400 are *lightweight* 4.2 oz — never "midweight" or "heavyweight".
   - Cropped designs use the AS Colour 4062 women's crop top (XS–2XL; Bella+Canvas 6882GD only stocks L–2XL). Take its facts from Printful's spec bullets, not the 6400's.
   - Women-over-40 picks: a DESIGN NOTES line with EXTRA TAGS `graphic-tees-for-women-over-40` puts the product in that collection.
   - Reference example: product "Women's Western – Desert Bloom Tee".
6. **Update the product** (`update-product` or Admin GraphQL `productUpdate`):
   - Title: if Printful left a blank name (e.g. "Women's Relaxed T-Shirt"), rename to the convention using the design you see in the mockup.
   - Handle (URL): `<audience>-<niche>-<design>-graphic-<tee|hoodie>`, e.g. `womens-western-desert-bloom-graphic-tee`.
   - `productType`: `T-Shirt` or `Hoodie`.
   - `tags`: the collection tags + `intake-done` (keep any existing tags).
   - SEO title ≤ 60 chars: `<Design> <Niche> <Tee|Hoodie> | Graphic Tees Co.`; SEO description ≤ 155 chars with the top phrase.
   - Model shots: Printful's "Basic mockups" step offers model photos (a person wearing the shirt, design visible) for many blanks —
     designers should pick those as the Main Mockup. Avoid lifestyle templates where the shirt renders blank (no design).
     Re-saving mockups in Printful REPLACES all Shopify images, resets alt text to "Product mockup" AND RESETS RETAIL PRICES to Printful's
     defaults (title/description are kept). Before re-saving, note every variant price; after, restore prices + alt text. Better: pick model
     mockups when the product is first created.
   - Back logo + model photos (set in Printful, Sam's rules 2026-10-03):
     Edit design → Back → Uploads → `back-logo-company.png` (the "Graphic Tees Company" badge; older products still carry `back-logo-rust.png`) → Transform width 3 → Position: align top + center horizontally.
     Proceed to mockups → Basic → **Main Mockup first** (choose it, keep placements Front + Back only), **then** Additional
     (each pick = 1 extra photo). Picking the main after the additional ones wipes the additional picks.
     Men's products: 4+ different men. Women's: 4+ different women. Unisex: men AND women, different ethnicities
     (the 3001 "couple" mockup is a good unisex main). Never one model for a whole product.
   - Media order: if any image shows a person wearing the product (lifestyle/model shot), move it to the front
     (Admin GraphQL `productReorderMedia`). Flat mockups follow, grouped by color.
   - Image alt text on every image: `<Design Name> <niche> graphic <tee|hoodie>` (+ color if obvious).
7. **Log** to `docs/intake-log.md` (newest on top): date/time, each product, tags applied, phrases used, anything needing review.
   Commit and push: `intake: <n> products (<date>)`.
8. **Never**: delete products, change prices/variants/inventory, publish/unpublish, or edit products already tagged `intake-done`.

## Facts to capture once (fill `src/data/site.ts` → unlocks hidden FAQs site-wide)
Size range, women's fit, kids sizes, long sleeve, tee blank + fabric, hoodie blank + fabric, production time,
personalization on/off. The agent may read these from Printful spec bullets and propose them in the log.
