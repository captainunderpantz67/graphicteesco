# Product Intake SOP — after a design lands in Shopify

Division of labor (agreed 2026-10-02):
- **Sam's brother:** designs → Printful File Library → creates the tee and the hoodie as two products
  → publishes to Shopify. Naming rule: `<Design Name> Tee` / `<Design Name> Hoodie`.
- **Claude:** everything after that.

Store: My Store (`uqz0cg-vq.myshopify.com`). Shopify MCP must point at this store (`/mcp` to switch).

## Steps (run whenever Sam says new designs are up)
1. **Find new products:** `search_products` with `tag_not:intake-done` (newest first).
2. **Pair twins:** strip a trailing ` Tee` / ` Hoodie` / ` T-Shirt` from titles; same base name = pair.
3. **Assign collections (tags):** ask Sam/brother for each design's theme if it's not obvious from the art/title.
   Tag = collection handle (smart collections are `TAG EQUALS <handle>`). Typical set for a fishing design:
   - Tee: `fishing-shirts`, `graphic-tees-for-men` and/or `graphic-tees-for-women`, + style tags (`oversized-graphic-tees`, `vintage-graphic-tees`…) only if true
   - Hoodie: `fishing-hoodies` + style tags (`heavyweight-hoodies`, `zip-up-hoodies`, `oversized-hoodies`) only if the Printful blank actually is that style
   - Seasonal designs: `halloween-shirts` / `halloween-hoodies`, etc.
4. **Product type:** `T-Shirt` or `Hoodie` (the site uses it for labels and the "also on a hoodie" link).
5. **Copy (Content Monster rules — facts only):**
   - Title stays `<Design> Tee` / `<Design> Hoodie`.
   - Description: 2–3 short paragraphs. What the art shows, who it's for, how it's printed (printed to order). Blank/fabric facts ONLY from Printful's product data — never guessed.
   - SEO title ≤ 60 chars: `<Design> <Fishing> Graphic Tee | <brand>`; meta description ≤ 155 with the collection keyword.
6. **Mark done:** add tag `intake-done`.
7. **Verify on the site:** rebuild (`npm run build`) and spot-check the collection page + product page; empty collections auto-noindex, so confirm the ones that just got products are now indexable.
8. **Report to Sam (phone):** list of designs processed, collections they landed in, any facts still missing.

## Facts to capture once (fill `src/data/site.ts` → unlocks hidden FAQs site-wide)
From Printful for the blanks he uses: size range, women's fit available?, kids sizes?, long sleeve?,
tee blank + fabric, hoodie blank + fabric, production time. Personalization on/off for mom shirts.
