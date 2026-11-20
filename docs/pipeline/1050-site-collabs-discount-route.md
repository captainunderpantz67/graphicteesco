status: LIVE
lane: A
type: site
id: 1050
slug: discount-route
kd: n/a
push: traffic-nov18
---
## Site: /discount/<CODE> route + cart auto-apply for Shopify Collabs links (Sam yes 2026-11-18, PRIORITY)
Spec: docs/backlog/traffic-and-trust-nov18.md item 7 (read it whole; this item is that spec). $0 fal, no product, does not count toward the 6-a-day cap. First job for whichever builder runs next, before every other READY item.
Why: gift-guide editors and creators expect affiliate links. Our site is headless (Astro), so a Collabs link (graphicteesco.com/discount/CODE?redirect=...) 404s today and the creator loses credit.
Do:
1. `public/_redirects`: `/discount/*  /apply-discount/?code=:splat  302`; keep the incoming query string (Collabs passes `redirect=` and ref params). Check how Cloudflare Pages merges query strings and test with curl -I.
2. `/apply-discount/` page, noindex, not in the sitemap: reads `code` and `redirect`, saves the code in localStorage (inside try/catch), then sends the visitor to `redirect` only if it is a same-site path (starts with a single "/"), else to `/`. Works with JavaScript off as far as possible (a plain "Continue shopping" link).
3. `src/lib/cart.ts`: when a cart exists or is created and a saved code is pending, call `cartDiscountCodesUpdate` with it; keep it on later carts; show "Code CODE applied" in the cart drawer; drop it quietly if Shopify says it is not applicable. Pass `ref` and UTM params through unchanged.
4. Never place a paid order to test. Test the redirect and the localStorage save with a made-up code (it must fail gracefully: no crash, no message that blames the shopper). A real 100%-off test code is Claude's job after Sam's OK.
Done when: astro build passes, apostrophe check from the builder card's "Before every push that touches src/" section passes, curl -I https://graphicteesco.com/discount/TEST?redirect=/hoodies/ returns a 302 to /apply-discount/ after deploy, and READY FOR TEST is written in docs/inbox.md. Then set status REVIEW with a log line listing what changed.
---
## Log
- 2026-11-18 23:17 UTC director: brief written, READY (inbox 2026-11-18 affiliate links item; site work, $0).
- 2026-11-20 13:35 UTC [B]: built. public/_redirects (/discount/* -> /apply-discount/?code=:splat 302), src/pages/apply-discount.astro (noindex, out of sitemap, saves code in localStorage in try/catch, redirects only to same-site '/' paths else '/', passes ref/utm_ through, Continue shopping link as no-JS fallback), src/lib/cart.ts (cartDiscountCodesUpdate on get/add/update/create, quiet drop if not applicable), CartDrawer 'Code X applied' line. astro build passes (154 pages, apply-discount noindex, not in sitemap). Post-deploy check needed: curl -I https://graphicteesco.com/discount/TEST?redirect=/hoodies/ must 302 to /apply-discount/ and keep redirect= (Cloudflare query merging untested until deploy).
- 2026-11-20 14:15 UTC director: REDO. Live test after deploy: `curl -I /discount/TEST?redirect=/hoodies/` returns 302 to `/apply-discount/?code=TEST` with redirect= dropped (Cloudflare Pages does not append the incoming query string when the destination already has one). Done-when step 3 fails, so every Collabs link would land on the homepage instead of the product. Notes:
  1. Fix the hand-off so the incoming query survives, e.g. `/discount/*  /apply-discount/:splat  302` (destination without its own query; Pages keeps the incoming one) and have apply-discount read the code from the path (src/pages/apply-discount/[...code].astro or a catch-all page that parses location.pathname), or a Pages Function at functions/discount/[code].js that builds the Location with code + the original query.
  2. After deploy, curl -I must show Location carrying both the code and redirect=/hoodies/ (plus ref/utm_ if passed); log the exact Location line.
  3. Everything else passes review: same-site-only redirect check, try/catch storage, quiet drop in cart.ts, noindex and out of the sitemap.
- 2026-11-20 17:40 UTC [B]: REDO fixed. Replaced the _redirects rule with a Cloudflare Pages Function functions/discount/[[path]].js that builds Location from the code plus the whole incoming query. Local test of the function: /discount/TEST?redirect=/hoodies/&ref=abc&utm_source=x -> 302 Location https://graphicteesco.com/apply-discount/?code=TEST&redirect=%2Fhoodies%2F&ref=abc&utm_source=x ; /discount/ -> /apply-discount/. apply-discount page unchanged. astro build passes. Post-deploy check for the director: curl -I the live URL and confirm Location carries code and redirect=.
- 2026-11-20 23:16 UTC director: LIVE. Live curl -I /discount/TEST?redirect=/hoodies/&ref=abc -> 302 Location https://graphicteesco.com/apply-discount/?code=TEST&redirect=%2Fhoodies%2F&ref=abc. Browser test: landed on /hoodies/ with localStorage gtc-discount-code=TEST, no console errors. Real 100%-off code test still waits on Sam's OK.
