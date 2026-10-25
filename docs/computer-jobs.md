## TOMORROW (flagged 2026-10-19 by Sam)
1. Design decisions: covers for the 161 hidden + redesigned products (fal top-up ~$30–40 vs spread out), the 5 samples, resume the builders.
2. A/B test: lifestyle photo vs plain product shot. Sam creates a Google Analytics 4 property (Claude can't create accounts); Claude adds Cloudflare Web Analytics + GA4 events (card click, product view, add to cart), a 50/50 sticky split on collection grids and product pages (Google sees one version), and the test group saved as a Shopify cart attribute. First metric: card click-through, ~2,000 views per group.
3. Sam's 6 clicks below (Merchant Center cleanup, Bing, review app, policies, Shopify Catalog).


## Status 2026-10-20 evening (verified by Claude)
- GA4: DONE. Property created by Sam, tag G-0KY0KGZ6PQ live in Base.astro with ai_source tagging + add_to_cart/begin_checkout.
- Bing Webmaster Tools: DONE. Site was already verified; sitemap submitted 2026-10-20. (IndexNow key file still to add, Claude can do it.)
- Shopify Agentic Storefronts: ON already ("Allow Shopify to manage for me" toggled, ChatGPT/Copilot/Meta/Shop listed). Shopify Catalog shows INELIGIBLE: needs a history of real, well-managed orders. Nothing to click; recheck after the first Black Friday orders.
- Do not re-list any of these as clicks.

# Computer jobs

Things that need Sam's laptop and Chrome. Sam opens the computer about once a day and greets Tuesday ("Good morning Tuesday, it's time to save the world" or similar). That is the go signal: Claude works this list top to bottom, then clears what's done.

## TikToks to review
- 2026-10-25 (Telegram 03:03 UTC): TikTok link from Sam with no note (https://www.tiktok.com/t/ZTf9qn9Fp/). Not reviewed yet; nothing asked of us beyond saving it.

## Sam's clicks, in order (Claude 2026-10-18)
1. Merchant Center → Data sources → "Shopify App API" (9,347 stale duplicates from the old sync) → ⋮ → delete. Keep PRODUCTS SOURCE 1/3/4/5 (our 4 feed pages).
2. Bing Webmaster Tools: add graphicteesco.com (import from Search Console is fastest), submit sitemap-index.xml, turn on IndexNow.
3. Shopify: install Judge.me (free plan); tell Claude to add aggregateRating once reviews exist.
4. Shopify → Settings → Policies: paste refund + shipping from docs/policies/shopify-policies-2026-10-16.md; then Search Console → Settings → shipping + returns to match.
5. Shopify: Shopify Catalog / Agentic Storefronts on, links to graphicteesco.com.
6. Approve the 5 quality-reset samples when Claude sends them.

## Needs the computer
- Google Search Console: request indexing for the next ~10 most valuable pages (daily quota). Done 2026-10-16: hoodies hub, zip-up, oversized, cropped, heavyweight and christmas hoodies, embroidered-sweatshirts, cropped-sweatshirts (+ sitemap resubmitted). Done 2026-10-15: christmas-shirts, christmas-shirts-for-women, thanksgiving-shirts, christmas-sweatshirts, thanksgiving-sweatshirts, leftovers club, turkey trot, sleigh queen tee.
- Bing Webmaster Tools: add graphicteesco.com, submit sitemap, turn on IndexNow (ChatGPT search and Copilot lean on Bing).
- Google Merchant Center + Pinterest: connect EVERY feed page: /feeds/products.xml plus /feeds/products-2.xml, -3, -4… (split 2026-10-16 to stay under Cloudflare's 25 MiB cap; new pages appear as the catalog grows) (after Sam removes the Shopify password and adds Printful billing).
- Search Console → Settings: set shipping (free US on $45+, else $4.95 tees / $8.79 crewnecks + hoodies) and returns (no returns; misprints reprinted or refunded) so they match the site markup (backtrack 2026-10-16).
- Shopify admin: check Shopify Catalog / Agentic Storefronts (feeds ChatGPT, Copilot, Perplexity). Turn it on if it's off, and make sure product links point to graphicteesco.com, not the myshopify address.
- Merchant Center: once connected, fill the conversational attributes (question_and_answer, related_product for tee/crewneck/hoodie twins) and check the price-competitiveness report.
- Shopify Admin → Settings → Policies: paste the new Refund and Shipping policies from docs/policies/shopify-policies-2026-10-16.md (connector lacks permission). Then Search Console return settings to match: 30-day free size exchange.

## Added 2026-10-18 (SEO audit)
- Shopify: install a free product-review app (Judge.me free plan or Shopify Product Reviews) so reviews and star ratings can show; tell Claude when it's in and Claude adds aggregateRating to the product schema.

## Search Console indexing log (Claude, daily ~10)
- 2026-10-18: requested golf-hoodies, national-park-hoodies (both already indexed; recrawl for new products), womens-capybara-out-of-office-soaking-oversized-hoodie, womens-knitting-one-more-row-hoodie, womens-bookish-plot-twist-cropped-hoodie (all "Discovered - currently not indexed", sitemap was the only referrer). Already indexed with valid merchant listing: mens-hunting-sit-wait-snack-camo-hoodie.
- 2026-10-19: requested hoodies/cat-hoodies, guides/white-elephant-gifts, guides/funny-golf-gifts, hoodies/capybara-hoodies, pickleball-shirts (then daily quota hit). Already indexed: group-shirts (1 day after launch), unisex-golf-sorry-about-your-windshield-hoodie, womens-capybara-out-of-office (submitted 10-18), mens-hockey-not-weird-just-the-goalie tee, womens-crochet crewneck. Not yet: womens-hiking-treat-me-like-wildlife tee, mens-grandpa-ask-your-grandmother tee (both 'Discovered'). NOTE: the Pages report is stale (last update 10/11); use URL Inspection for truth.
- Next (2026-10-20): hockey-shirts, hanukkah-sweaters, grandpa-sweatshirts, drummer-shirts, bookish-sweatshirts, hoodies/pit-bull-hoodies, then KD<=22 products.
- Next: the 11 new niche collection pages as the director ships them, then KD<=22 products by volume (seo audit list).
- 2026-10-20: random 12-URL inspection sample: 10/12 indexed (unknown: halloween midnight-feature tee; discovered-not-indexed: embroidered purrsonal-space hoodie). /black-friday/ was unknown to Google → indexing requested. Pages report still frozen at 10/11 (39).

## 2026-10-20 click: give the Claude GitHub app access to TonerChamp/claude-skills
The writer lane (W) needs to read Content Monster from the private claude-skills repo. Creating the routine failed with "repo_access_denied". Fix: https://github.com/apps/claude → Configure → TonerChamp → Repository access → add `claude-skills` → Save. Then tell Claude to create the lane W routine (body is ready: hourly at :36, Sonnet, sources graphicteesco + TonerChamp/claude-skills).
