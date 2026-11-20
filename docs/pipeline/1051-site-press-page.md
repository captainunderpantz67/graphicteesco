status: LIVE
lane: A
type: site
id: 1051
slug: press
kd: n/a
push: traffic-nov18
---
## Site: /press/ press kit page (Sam go 2026-11-18)
Spec: docs/backlog/traffic-and-trust-nov18.md item 3. $0 fal, no product, outside the 6-a-day cap. After #1050.
Do:
1. New page src/pages/press.astro in the site's existing layout and type styles (look at about.astro and copy its structure).
2. Content, facts only (never invent; no degree, no numbers we don't have, no "as seen in"): the story from /about/ "Why we started" in 3-4 sentences; founder bio "Sam King, founder and marketing strategist"; the two brothers (the brother's name is pending Sam: write "his little brother" until docs/inbox.md gives a name); 6 product images with links (pick 6 ACTIVE products whose handles are in src/data/fresh-designs.json, mixed tees and hoodies, men's and women's, each with its Printful flat front from the product's images); fast facts (printed to order in the US by our print partner, free US shipping on $45+, one free size exchange within 30 days of delivery, original art only); contact = site.email via the existing mailto pattern; an empty, hidden-until-filled slot for a photo of Sam and his brother.
3. Indexable (no noindex), in the sitemap, linked from the footer Help list in src/layouts/Base.astro and once from /about/.
4. Organization schema already names the founder; do not duplicate it on this page beyond a BreadcrumbList.
Done when: astro build passes, /press/ returns 200 after deploy, every product link on it returns 200. Set REVIEW with a log line; the director reads it like an article.
---
## Log
- 2026-11-18 23:17 UTC director: brief written, READY (inbox 2026-11-18 traffic push item 3).
- 2026-11-20 17:50 UTC [B]: built src/pages/press.astro (story from About, Sam King founder and marketing strategist, 'his little brother' (no name yet), fast facts from site.ts: US print partner, free shipping on $45+, one free size exchange 30 days, original art only; mailto site.email; 6 ProductCards: sisyphus tee, pilates women's tee, tag-soup hoodie, cat-oops cropped hoodie, golf windshield hoodie, cat-dad tee, all in fresh-designs.json and confirmed live via the Storefront API; photo slot hidden behind photoSlot=false). Indexable, in sitemap, BreadcrumbList only. Linked from footer Help list (Base.astro) and once from /about/. Full astro build (with the public Storefront env) = 975 pages, 6 product links render. Post-deploy: /press/ 200 and product links 200 for the director.
- 2026-11-20 23:16 UTC director: LIVE. /press/ 200, indexable, in the sitemap, linked from /about/; all 6 product links 200; facts match site.ts and /about/. One fix: heading 'Best sellers and favorites' -> 'A few of our favorites' (R8.6: 0 orders so far, so 'best sellers' is a claim we can't make).
