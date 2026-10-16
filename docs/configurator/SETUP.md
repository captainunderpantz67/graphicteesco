# Custom-shirt configurator: what Sam has to set up

Everything below is a setting, a key or a toggle that lives outside this repo. Nothing works end to end until
the "Must have" items are done. Secrets go into Cloudflare as **encrypted** environment variables, never into
the repo (the repo is public).

Branch: `configurator` (not merged, not deployed). The pages are `noindex` until you approve them.

## How it fits together (one paragraph)

The pages under `/custom/…` are static Astro pages like the rest of the site. The interactive parts talk to
Cloudflare Pages Functions in `functions/` (same deployment, same domain, routes under `/api/custom/…` and
`/webhooks/…`). When she adds a shirt to her cart the browser first asks `/api/custom/finalize`, which renders
the real print files (300 dpi PNGs) and stores them in an R2 bucket under a design id; that id rides along on
the Shopify cart line. When Shopify says the order is paid, it calls `/webhooks/shopify-order`, which looks up
every custom line's design, checks the files are the ones she approved, and creates ONE Printful order (a
draft until you flip `PRINTFUL_CONFIRM`). Any failure pings you on Telegram.

## Must have (in this order)

### 1. Cloudflare: bindings and plan
Pages project → Settings → Functions.

| Setting | Value | Why |
|---|---|---|
| **Workers plan: Paid ($5/mo)** | — | Rendering a 3600 px print file takes 1–3 s of CPU; the free plan allows 10 ms per request. Photo/finalize calls will fail on Free. |
| **R2 bucket binding** | variable `PRINT_FILES` → bucket `gtc-print-files` (create it: R2 → Create bucket, any region) | Durable home of uploads, cutouts and print files. Keep it private; files are served through our own `/api/custom/file/…` route. |
| **KV namespace binding** | variable `CUSTOM_KV` → namespace `gtc-custom` (create it: Workers & Pages → KV) | Design index, order handoff state, logs. |
| Compatibility date | `2026-10-01` or later | Functions use modern Workers APIs. |

Bind them for **both Production and Preview** environments so preview deployments of the branch work too.

### 2. Cloudflare: environment variables (Settings → Environment variables, mark secrets "Encrypt")

| Name | What it is | Where to get it |
|---|---|---|
| `PUBLIC_BASE_URL` | `https://graphicteesco.com` | The public origin Printful downloads print files from. For a branch preview use the preview URL. |
| `FAL_KEY` (secret) | fal.ai API key | fal.ai → dashboard → keys. The same key the builders use is fine. |
| `PRINTFUL_TOKEN` (secret) | Printful private token | Printful → Settings → Stores → API (see step 3). Scopes: orders (read/write), mockup generator (read). |
| `PRINTFUL_STORE_ID` | the numeric id of the **Manual order / API** store (step 3) | Printful → Stores → the store → the number in the URL. |
| `PRINTFUL_CONFIRM` | `false` to start | `false` = every order lands in Printful as a **draft** you confirm by hand. Set `true` only after the test plan passes; then orders go straight to production and are charged to your Printful wallet/card. |
| `SHOPIFY_WEBHOOK_SECRET` (secret) | the webhook signing secret | Shopify admin → Settings → Notifications → Webhooks: the secret shown under the list ("Your webhooks will be signed with …"). |
| `SHOPIFY_STORE_DOMAIN` | `uqz0cg-vq.myshopify.com` | — |
| `SHOPIFY_ADMIN_TOKEN` (secret, optional but recommended) | Admin API token of a custom app with `read_orders`, `write_fulfillments`, `read_fulfillments` | Shopify admin → Settings → Apps and sales channels → Develop apps → Create app "Configurator" → Configure Admin API scopes → Install → reveal token once. Lets us push Printful tracking onto the Shopify order and lets the retry endpoint re-read an order. Without it you add tracking by hand (you get a Telegram with the number). |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` (secrets) | the same bot/chat the builders use | Alerts on every failure, one short success ping per order. `TELEGRAM_NOTIFY_SUCCESS=false` turns the success pings off. |
| `PRINTFUL_WEBHOOK_KEY` (secret) | any long random string you make up | Goes in the Printful webhook URL (step 3) so only Printful can call it. |
| `CUSTOM_ADMIN_KEY` (secret) | any long random string you make up | Protects `/api/custom/order` (status + retry). |
| `FAL_BG_MODEL`, `FAL_STYLE_MODEL`, `FAL_UPSCALE_MODEL` | optional | Defaults: `fal-ai/birefnet/v2`, `fal-ai/flux-pro/kontext`, no upscale. Set `FAL_UPSCALE_MODEL=fal-ai/esrgan` to upscale small photos before cutting (cheap, slower). |

### 3. Printful: a second store so sync can never fulfil the wrong file
Printful's Shopify integration fulfils whatever is **synced** in Printful. Our custom product is never synced
(it is created straight in Shopify, step 4, and tagged `no-printful-sync`), so the integration ignores those
lines — they show as "unsynced items" and Printful does nothing with them. The configurator creates its own
Printful orders through the API in a **separate store**, so there is no product in Printful that anyone could
accidentally link.

1. Printful → Stores → **Add store** → "Manual order platform / API". Name it "Graphic Tees Co. – Custom".
2. Open it → Settings → API → **Add private token**, name "configurator", scopes orders + mockup generator.
   Copy the token into `PRINTFUL_TOKEN`. Note the store id from the URL → `PRINTFUL_STORE_ID`.
3. Add a billing method to the account (drafts cost nothing; confirming does).
4. Webhooks (Printful → Settings → Webhooks, or via API for this store): URL
   `https://graphicteesco.com/webhooks/printful?key=<PRINTFUL_WEBHOOK_KEY>`, events
   `package_shipped`, `order_failed`, `order_canceled`, `order_put_hold`.
5. **Never** "sync" or "link" the Shopify custom product in Printful's Shopify store. If you ever see it listed
   under unsynced items in the Shopify-connected store, leave it alone: that line is handled by the configurator.
   Mixed carts (a normal tee + a custom tee) ship as two parcels: Printful fulfils the normal tee via the
   integration, the configurator sends the custom one separately.

### 4. Shopify: the custom product
One product per blank, created directly in Shopify (not via Printful), DRAFT until you approve:

```
node scripts/custom-product.mjs bc3001 > /tmp/custom-tee.json
```
Paste the JSON as the `productSet` input (Shopify MCP or Admin GraphQL). It builds:
- title "Custom Tee – Bella+Canvas 3001", handle **`custom-bc3001`** (the page looks it up by this handle),
- 12 colors × sizes = 84 variants, **SKU `custom-bc3001-<Printful catalog variant id>`** (the webhook refuses a
  line whose SKU does not match the design),
- price $34.99 / compare-at $39.99, tags `custom`, `no-printful-sync`, `intake-done`,
- inventory policy "continue selling" (made to order, do not track stock).

Set it ACTIVE and published to the Online Store channel when you are ready to test; the page shows "Checkout
for custom shirts opens soon" until the product exists and the site has been rebuilt (the build reads variants
via the Storefront API).

Give it one product image (a shirt mockup) so the cart and receipt have a picture.

### 5. Shopify: the paid-order webhook
Settings → Notifications → Webhooks → Create webhook:
- Event **Order payment** (`orders/paid`), format JSON, URL `https://graphicteesco.com/webhooks/shopify-order`,
  latest API version.
- Create **only this one** subscription for the configurator (a second one, e.g. order creation, would double
  the deliveries; the handoff is idempotent but there is no need to test it that way every day).
- Copy the signing secret into `SHOPIFY_WEBHOOK_SECRET`.

### 6. A 100% test discount
Discounts → Create → Amount off order → 100%, code `CUSTOMTEST`, limit to one use per customer, keep it
unpublished/unlisted. Used only by docs/configurator/TEST-PLAN.md. Delete it after launch.

## Nice to have
- A Telegram "retry" habit: `POST https://graphicteesco.com/api/custom/order?order=<shopify order id>&key=<CUSTOM_ADMIN_KEY>&action=retry`
  re-runs a parked order after you fixed the cause (needs `SHOPIFY_ADMIN_TOKEN`). `GET` the same URL without
  `action` to see the record and log.
- Cloudflare → Workers & Pages → the project → Logs: every function logs one JSON line per event
  (`finalize.ok`, `handoff.created`, `handoff.needs-review`, …). Nothing secret is ever logged.
- R2 lifecycle rule: keep everything (reprints) or expire `assets/` uploads after 90 days; print files under
  `designs/` should stay at least a year.

## Local development
```
npm install
python3 scripts/custom-fonts.py        # only if a font changed
node scripts/custom-blanks.mjs         # only to add a color/blank
npm test                               # engine + handoff + raster tests
npm run dev:functions                  # builds, then serves site + functions at http://localhost:8788
```
`npm run dev:functions` reads `.dev.vars` (gitignored) for secrets: at minimum `FAL_KEY=…` and
`PUBLIC_BASE_URL=http://localhost:8788`. KV and R2 are local emulations under `.wrangler/` (also gitignored).
Plain `npm run dev` works for page layout but the photo/finalize buttons will say the custom shop is offline.

## Pricing (why $34.99)
Blank follows rulebook R12 ($24.99 tee during the sale). The custom premium is a flat $10: competitors sit at
$32–49 for a one-off custom tee and our added cost is pennies of fal time plus a second print side, so $34.99
undercuts the big customizers while still clearing about $15 after Printful. From Dec 1 (R12.1) the tee goes to
$29.99, so change the custom product to $39.99 with no compare-at (and `CUSTOM_PRICE` in
`src/lib/configurator/pricing.ts`).
