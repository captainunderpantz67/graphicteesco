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
- [x] Domain bought (graphicteesco.com)
- [ ] Cloudflare Pages migration (see below)
- [ ] Empty collections auto-`noindex` once Shopify is connected — fill them first

## Hosting: Cloudflare Pages (moving off Netlify)
`.github/workflows/deploy-cloudflare.yml` builds with live Shopify data and runs `wrangler pages deploy`
on every push to `main`, nightly at 4 AM Central, and on demand (Actions → Run workflow).
`public/_redirects` and `public/_headers` are Cloudflare-native. `netlify.toml` stays until DNS is cut over.

One-time setup (Sam):
1. Cloudflare dashboard → Workers & Pages → Create → Pages → **Direct Upload**, project name `graphicteesco`
   (or let the first workflow run create it).
2. My Profile → API Tokens → Create token → template "Edit Cloudflare Workers" (includes Pages: Edit).
   Copy the token and your Account ID (right sidebar on the account home page).
3. GitHub repo → Settings → Secrets and variables → Actions → add `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`,
   `PUBLIC_SHOPIFY_STORE_DOMAIN` (uqz0cg-vq.myshopify.com) and `PUBLIC_SHOPIFY_STOREFRONT_TOKEN`
   (copy it from Netlify → Site settings → Environment variables).
4. Run the workflow once, check `graphicteesco.pages.dev`.
5. Pages project → Custom domains → add `graphicteesco.com` and `www`. Easiest if the domain's DNS is on Cloudflare
   (add the site to Cloudflare and switch nameservers at the registrar); otherwise point a CNAME at `graphicteesco.pages.dev`.
6. Once the custom domain is live on Cloudflare, delete the Netlify site and `netlify.toml`.
