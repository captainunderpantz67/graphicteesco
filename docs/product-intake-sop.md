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
2. **Classify** each with `src/data/intake-map.json`: audience + niche + style words + type (tee/hoodie from the title
   or the Printful product type). Collect the union of tags. Unknown niche → add tag `needs-review`, skip copy, report it.
3. **Pair twins:** same `<Design Name>` → tee ↔ hoodie. (The site links twins automatically by name.)
4. **Pick keywords:** from `src/data/keyword-bank.json`, take the entries for this product's collections.
   Choose **10–15 phrases that truly describe this design** (audience, theme, style, occasion). Prefer phrases with
   low `kd` (or null — unmeasured long-tails are the point) and skip anything that names another brand, a licensed
   character, or something the product isn't (performance/UPF gear, kids sizes unless offered).
5. **Write the product copy** (Content Monster rules — facts only, no superlatives):
   - **Keep Printful's spec bullets** (fabric, fit, care) exactly as they arrived — they're the only source of product facts.
   - Above them: 2 short paragraphs describing the art and who it's for, using 4–6 of the chosen phrases naturally.
   - Below them: a **"Questions"** block — 3 Q&As written from 3–4 more chosen phrases
     (e.g. "Is this a good hunting shirt for women?"). Answers ≤ 2 sentences, true to the product.
   - Never claim sizes, materials, shipping times or personalization unless they're in Printful's data.
6. **Update the product** (`update-product` or Admin GraphQL `productUpdate`):
   - Title unchanged.
   - `productType`: `T-Shirt` or `Hoodie`.
   - `tags`: the collection tags + `intake-done` (keep any existing tags).
   - SEO title ≤ 60 chars: `<Design> <Niche> <Tee|Hoodie> | Graphic Tees Co.`; SEO description ≤ 155 chars with the top phrase.
   - Image alt text on every image: `<Design Name> <niche> graphic <tee|hoodie>` (+ color if obvious).
7. **Log** to `docs/intake-log.md` (newest on top): date/time, each product, tags applied, phrases used, anything needing review.
   Commit and push: `intake: <n> products (<date>)`.
8. **Never**: delete products, change prices/variants/inventory, publish/unpublish, or edit products already tagged `intake-done`.

## Facts to capture once (fill `src/data/site.ts` → unlocks hidden FAQs site-wide)
Size range, women's fit, kids sizes, long sleeve, tee blank + fabric, hoodie blank + fabric, production time,
personalization on/off. The agent may read these from Printful spec bullets and propose them in the log.
