# graphicteesco

Headless storefront: Astro static site (Cloudflare Pages) in front of Shopify + Printful.
Shopify holds products, inventory, orders, checkout; Printful fulfills. The site renders
collection/product pages at build time and runs the cart in the browser via the
Storefront API. Checkout hands off to Shopify's hosted checkout.

## Run
    npm install
    cp .env.example .env   # add store domain + Storefront token
    npm run dev

Without `.env` the site builds with sample products (flagged on the page).

## Where things live
- `src/data/collections.ts` — every collection page: keyword, volume, difficulty, copy, FAQs.
  Ordered easiest-to-rank first. Tees live at `/<slug>/`, hoodies at `/hoodies/<slug>/`.
  Each tee collection links to its hoodie twin and back.
- `src/data/site.ts` — brand facts. TODOs must be filled before launch.
- `src/styles/global.css` — brand tokens (colors, fonts). Restyle here.
- `src/lib/shopify.ts` / `src/lib/cart.ts` — Storefront API.

## Shopify setup (Sam)
1. Create the store, connect Printful, add products.
2. Make one Shopify **collection per slug** in `collections.ts` (handle = slug), e.g.
   `fishing-shirts`, `fishing-hoodies`. Products can sit in several collections.
3. Settings → Apps → Develop apps → new app → Storefront API scopes:
   read product listings, read inventory, read/write checkouts. Copy the Storefront token.

## Before launch
- [ ] Brand name, Instagram, support email in `site.ts`
- [ ] Returns policy + production time (match Printful)
- [ ] Domain bought (graphicteesco.com) + Cloudflare Pages project
- [ ] Shopify deploy hook → rebuild on product changes
- [ ] Empty collections auto-`noindex` once Shopify is connected — fill them first
