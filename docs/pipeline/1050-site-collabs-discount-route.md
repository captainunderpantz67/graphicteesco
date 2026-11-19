status: BUILDING [B] 2026-11-19 13:30
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
