# AEO landscape for graphicteesco.com: what wins in Google and AI answers (2026-10-16)

Companion to `ecom-search-backtrack.md` (same date). That file covers schema and feed rules line by line. This one covers live SERPs and AI answers for 15 target queries, how AI shopping inclusion works, and what to do first.

## Executive summary

1. **AI shopping answers are mostly product cards from feeds, not cited articles.** Google AI Mode answered two test queries almost entirely with Shopping Graph product cards, plus "The Joke:" and "Best For:" blurbs written from product descriptions. Without Merchant Center we can't appear there.
2. **Our AI-channel links point to the wrong site.** Shopify's primary domain is `uqz0cg-vq.myshopify.com`, and every product's `onlineStoreUrl` points to a live Dawn theme there. It has no password and no canonical to graphicteesco.com. Shopify Catalog feeds ChatGPT, Copilot, Shop and Perplexity, so shoppers it sends would land on that Dawn store.
3. **All products we sampled have no Shopify product category** (`category: null`, 50 of 50, out of 236 products). Shopify Catalog lists "Uncategorized products" as excluded.
4. **AI Overviews showed on 7 of 15 queries.** They were all on "funny + occasion", fit/style or "where to buy" queries, not on head garment terms like "cropped hoodie" or "camo hoodie". Those were Shopping-pack plus big-retailer collection pages.
5. **For funny queries, AI Overviews quote slogans word for word and credit the store.** Examples: "Boom Roasted" (Crazy Dog), "Leftovers Are for Quitters" (Tipsy Elves), "Master Baiter" (Crazy Dog). Stores whose product titles carry the joke get cited. Our titles describe art ("Sleigh Queen Tee"), and most of our Christmas and Thanksgiving art isn't joke-driven.
6. **Small Shopify brands do get cited and rank.** m00nshot, Chummy Tees, Famous IRL, Threadheads, Silver Lake Tshirts, Born To Be Sassy and Elly and Grace all appear. What they share: a collection page titled with the exact query, 15–60+ designs on it, a price range, and store-rating, shipping and returns annotations under the result (Merchant Center plus reviews).
7. **Collection depth is part of what gets cited.** The AI Overview said "m00nshot offers 27 distinct funny Thanksgiving-themed… t-shirts priced at $34.95." Our Thanksgiving page has 2 designs, Football Mom 3, Christian hoodies 2, Camo hoodies 0 (noindex) and half-zips 0 (noindex).
8. **Etsy, Amazon, Walmart, Target, Pinterest and Crazy Dog appear on nearly every SERP.** Pinterest boards rank organically for 6 of 15 queries. Facebook, TikTok and Instagram posts show up in a "What people are saying" block for "camo hoodie" and "football mom shirts".
9. **We can't win two of these queries.** "Custom photo shirt" and "embroidered sweatshirt" are custom-printing intent (Custom Ink, Shutterfly, Walmart Photo, Stitch America). "Quarter zip", "zip up hoodie women", "oversized hoodie men" and "graphic hoodies women" belong to Hollister, AE, Gap, Nike and Amazon.
10. **Do these first:** fix where AI-channel links land, set product categories, connect Merchant Center, add a review app, and rebuild the three funny-occasion pages as slogan-first collections with 12+ designs each before Thanksgiving.

---

## Method and limits

- **Google:** live SERPs fetched 2026-10-16 in the owner's Chrome profile (`hl=en&gl=us`). Google placed the session near Preston/Sherman, TX, which explains the local packs. AI Overviews vary by user and session, so "no AIO" means none was shown in this session.
- **Google AI Mode** (`udm=50`): 2 conversational queries tested.
- **Perplexity:** 1 query answered logged-out. A second returned "Sign up and repeat your request", so Perplexity coverage is thin.
- **ChatGPT and Copilot:** not tested live, because that needs a login. Their behaviour here comes from docs and third-party studies, marked as such.
- **Site checks:** done with curl against the live site and the Shopify Admin API (read-only).
- **Unverified** marks anything not confirmed from a primary source.

---

## 1. Per-query table

"AIO" means Google AI Overview. "Shopping" means the Popular products / More products packs, which appeared on all 15 queries.

| Query | Top organic (in order, after Shopping packs) | AIO / AI-cited sources | Winning page type | Our page and gap |
|---|---|---|---|---|
| funny christmas shirts | Tipsy Elves (collection), SnorgTees (collection), Amazon, Pinterest, Target, Pinterest, Threadheads, m00nshot | **No AIO.** PAA: "What are some funny Christmas T-shirts I can buy?", "funny sayings on Christmas T-shirts?", "Where do I buy funny shirts?" | Brand collection pages with ratings, shipping and returns annotations. Shopping pack is mostly Crazy Dog at $14.99 | `/christmas-shirts/` is positioned as "vintage, not ugly-sweater gags". There's no funny-Christmas page and no slogan list. Our price ($24.99–29.99) is mid-pack. |
| funny christmas sweatshirt | Tipsy Elves, Etsy, Amazon, 80sTees, Pinterest, Zazzle, Spirit Halloween, m00nshot (hoodies) | **AIO:** Tipsy Elves, FUN.com, 80sTees, UglyChristmasSweater.com, Etsy, Crazy Dog, plus 4 "Google" product cards (Merchant Center listings) | Collection pages. The AIO groups results by humor style and quotes prices | `/christmas-sweatshirts/` is vintage art, not funny. Not eligible for "Google" product cards (no Merchant Center). |
| funny thanksgiving shirt | Amazon, m00nshot, Tipsy Elves, Famous IRL, Pinterest, Etsy, Target, Crazy Dog | **AIO:** OppoSuits (blog guide), Crazy Dog, Famous IRL, m00nshot, Target, Walmart, Chummy Tees, Tipsy Elves, plus 3 "Google" product cards. It quotes slogans and credits each store | Small Shopify brand collections (m00nshot: "27 designs at $34.95"), plus one blog guide | `/thanksgiving-shirts/` has 2 designs and no jokes. This is the clearest "small brand can win" query, but only with 12–25 joke designs before about Nov 10. |
| camo hoodie | Amazon, Mossy Oak, Realtree, Back Down South (product page), Dick's, Under Armour, Drake | **No AIO.** "What people are saying" block (Facebook, Instagram) | Hunting-brand collections and one small-brand product page with 4.8★ (103 reviews) | `/hoodies/camo-hoodies/` is empty and noindex. We can't compete until camo blanks exist. |
| cropped hoodie | Amazon, AE, Lululemon, Macy's, Lane Seven (product page), Old Navy, Pinterest, PrettyLittleThing | **No AIO.** PAA: "Why are cropped hoodies so popular?", "What is a cropped hoodie called?", "Are cropped hoodies in style in 2026?" | Big-retailer collections | `/hoodies/cropped-hoodies/` has 3 products. The head term isn't winnable. The PAA questions are worth a guide. |
| graphic hoodies women | Pacsun, Tentree, Target, Tillys, Amazon, Pink Lily, Nordstrom, Hollister, Zumiez | **No AIO.** PAA: "Who sells the best graphic hoodies?", "Can a 60 year old woman wear a hoodie?" | Big-retailer collections, plus Tentree (hand-illustrated, a close match to our story) | `/hoodies/graphic-hoodies-for-women/` (~16 products). Head term isn't winnable. The "over 60" PAA matches our existing over-40 tee page angle. |
| oversized hoodie men | boohooMAN, Represent, Amazon, Gymshark, H&M, Nike, Ape to Gentleman (listicle "11 Best Oversized Hoodie Brands 2026"), Pinterest, ASOS | **AIO:** Represent, Gymshark, Nike, Amazon, ASOS, H&M, **YouTube** ("I Spent $10000 On Hoodies"), plus Google product cards | Brand collections, one listicle, one YouTube review | `/hoodies/oversized-hoodies-for-men/` has 2 products. Not winnable as a head term. |
| embroidered sweatshirt | Local pack (Denison TX embroidery shops), Stitch America, Corporate Casuals, juju + stitch, Amazon, Custom Ink, Pinterest, **Reddit r/Etsy** thread, Carhartt Company Gear | **No AIO.** PAA is all about custom embroidery ("Where can I get an embroidered sweatshirt made?") | Custom-embroidery services | Intent mismatch. Our page sells pre-designed embroidery. Target "embroidered christian sweatshirt" or "embroidered christmas sweatshirt" (both appear in "People also search for") instead. |
| zip up hoodie women | Abercrombie, Life is Good, Nike, Hollister, Amazon, Tillys, Carhartt, Target | **No AIO.** PAA: "What is the best women's zip-up hoodie?" | Big-brand collections | `/hoodies/zip-up-hoodies/` has 2 products. Not winnable. |
| quarter zip sweatshirt | Amazon, Old Navy, apparel.com, Ralph Lauren, Nordstrom, eBay, Nautica, Scheels, J.Crew | **AIO:** Old Navy, L.L.Bean, Lululemon, 2 YouTube videos, plus Google product cards for Hanes, Old Navy and A&F | Big-brand collections, YouTube styling videos | `/hoodies/half-zip-pullovers/` is empty and noindex. Not winnable. Drop it. |
| christian sweatshirt | Elevated Faith, Elly and Grace (small Missouri brand), Altar'd State, Amazon, Pinterest (Elevated Faith board), Love in Faith, Benable, nhim apparel | **No AIO.** PAA: "What are some popular Christian sweatshirt brands?" **AI Mode** (vintage-style query): Etsy, eBay, Christian Art Workshop, SuperPraise, Elevated Faith, Faithweartees, Budrow & CO, all as product cards | Faith-brand collections (13K–43K store ratings) and small brands with a clear origin ("designed in Missouri since 2016") | There's no `/christian-sweatshirts/` page. `/christian-shirts/` has 4 products and Christian hoodies has 2. A winnable niche if depth and reviews exist. |
| football mom shirts | Amazon, Etsy, Gavin's Allye, Born To Be Sassy (product page), Pinterest, Target, Shutterstock | **AIO:** Etsy, Amazon, Born To Be Sassy, Gavin's Allye, Pink Lily, Crazy Dog, plus Google product cards. "What people are saying" block (Facebook groups, TikTok) | Etsy/Amazon search pages and small boutique collections. Personalization (name and number) is a big angle | `/football-mom-shirts/` has 3 products and no personalization. PAA: "What do football moms wear?", "good gifts for football moms?" |
| custom photo shirt | Walmart Photo, Vispronet, Shutterfly, Crown & Paw, Amazon, Custom Ink, Walgreens, UberPrints | **AIO:** Amazon, Walmart Photo, Vispronet, Custom Ink, Personal Creations, plus Google product cards | Upload-your-photo tools | We don't sell this. Skip it. |
| vintage graphic tees | Culture Kings, Black Shag Vintage, Sweet Memories Vintage Tees (small brand, 200+ designs), Amazon, eBay, Threadheads, GQ (listicle), Junk Food, 80sTees | **No AIO.** Local pack (vintage stores) | Mixed: licensed retro, real vintage resale, small "original vintage-style" brands | `/vintage-graphic-tees/` (~48 products) is our best-matched head page. Threadheads and Sweet Memories show a small brand can rank here. |
| funny fishing shirts | Amazon, Crazy Dog, Silver Lake Tshirts, Pinterest (Crazy Dog board), Target, GoshWow, Etsy, Chummy Tees | **AIO:** Crazy Dog, Etsy, TeePublic, Silver Lake, Amazon, Walmart. It quotes slogans ("WTF Where's The Fish", "The Rodfather"). **Perplexity:** Target, TeePublic, Zazzle (picks with price and rating) | Slogan-titled product catalogs. Crazy Dog wins everywhere (store, Target, Walmart, Etsy, Pinterest) | `/fishing-t-shirts/` (~7 products) is art-first, not joke-first. A clean-humor angle is open, because most cited slogans are innuendo. |

### Patterns

- **Listicles and gift guides are rarely cited for these transactional queries.** One blog guide (OppoSuits) appeared in the Thanksgiving AIO and one listicle ranked for "oversized hoodie men". AIOs mostly summarize collection pages and Merchant Center product cards. This differs from ChatGPT: Evertune (Apr–Jul 2026, 40K+ heavily cited URLs, company-reported) found about 50% of ChatGPT citations are listicles. LLM Pulse (391K shopping citations, Jul 2026) found retailers get just 2.9% of citations, and Reddit plus YouTube out-cite all big-box stores combined. So Google AIOs favour collection pages and feeds, while ChatGPT and Perplexity favour listicles, Reddit and YouTube.
- **Etsy, Amazon and Walmart dominate Shopping packs and AIO cards. Reddit only appeared once in Google** (r/Etsy on "embroidered sweatshirt"). Pinterest appears constantly.
- **Why the small brands get cited:**
  - Exact-match collection H1 and title ("Funny Thanksgiving T-Shirts").
  - A short meta description stating the vibe.
  - Many designs, with slogan-bearing product titles.
  - A visible price range.
  - Merchant Center annotations (store rating, delivery days, returns window).
  - Example: m00nshot is cited with "27 designs at $34.95" and has no reviews shown. Depth plus Merchant Center was enough.
- **The "Google" cards in AIOs are Merchant Center products.** The AIO product cards for Tipsy Elves, Crazy Dog, Pink Lily, Hanes and Old Navy are attributed to "Google", meaning they come from the Shopping Graph. You can only get one through Merchant Center.

---

## 2. AI shopping inclusion: what each platform needs

| Platform | How products get in | What it uses | Our status (checked 2026-10-16) | Exact next step |
|---|---|---|---|---|
| **Google AI Overviews / AI Mode / Gemini** | Shopping Graph, fed by Merchant Center (free listings) plus on-page Product markup. Google says AI Mode "brings together Gemini capabilities with our Shopping Graph… more than 50 billion product listings… every hour more than 2 billion… refreshed" ([Google blog, 2025-05-20](https://blog.google/products/shopping/google-shopping-ai-mode-virtual-try-on-update/)). UCP agentic checkout announced 2026-01-11 ([TechCrunch](https://www.techcrunch.com/2026/01/11/google-announces-a-new-protocol-to-facilitate-commerce-using-ai-agents/)). Merchant Center conversational attributes added May 2026 (see backtrack doc) | Feed attributes (title, price, color, size, gender, availability), product ratings, store quality (shipping and returns), images | **Not connected.** The feed exists at `/feeds/products.xml`. Product JSON-LD now has a single `Offer`, a strikethrough price, `priceValidUntil`, `shippingDetails` and `MerchantReturnPolicy`, so most of the backtrack doc's schema items are already fixed. Shopify's myshopify storefront also exposes `/.well-known/ucp`, which is automatic | Human: create Merchant Center, claim graphicteesco.com, add the feed with daily fetch, enable free listings, and set shipping ($4.95 tees, $8.79 fleece, free at $45+) and returns (30-day free size replacement, defect reprint or refund) in account settings |
| **ChatGPT shopping** | For Shopify merchants, through Shopify Catalog. Shopify's changelog says "Your products are automatically accessible to AI channels like ChatGPT, Shop, and Copilot through Shopify Catalog" ([shopify.dev changelog, 2026-05-11](https://shopify.dev/changelog/a-new-home-for-agentic-storefronts-in-your-admin)). OpenAI moved from Instant Checkout to discovery in March 2026 ([Retail Gazette, 2026-03](https://www.retailgazette.co.uk/blog/2026/03/openai-pivots-chatgpt-shopping-strategy-after-instant-checkout-underwhelms/)). OpenAI's own post returned 403, so OpenAI's wording is **unverified**. Non-Shopify feed spec: [OpenAI feed spec](https://developers.openai.com/commerce/specs/file-upload/products). `OAI-SearchBot` must be allowed ([OpenAI bots](https://developers.openai.com/api/docs/bots)) | Shopify product data (titles, descriptions, images, categories, variants, options, prices, inventory) per [Shopify Catalog help](https://help.shopify.com/en/manual/shopify-catalog). ChatGPT also cites listicles, Reddit and YouTube for recommendations (Evertune, LLM Pulse; company-reported) | Robots allows OAI-SearchBot. **But** products have no category (all 50 sampled are `null`), and `onlineStoreUrl` points to `uqz0cg-vq.myshopify.com` | See actions 1–2. Then check the Agentic Storefronts admin page for ChatGPT status and its query analytics |
| **Microsoft Copilot** | Shopify Catalog (named in the 2026-05-11 changelog). Separately, Microsoft Merchant Center feeds Bing Shopping and Copilot, and Copilot Checkout and UCP were reported for January 2026 ([Microsoft agentic commerce page](https://preview-about.ads.microsoft.com/en/solutions/technology/agentic-commerce); MMC help docs not read, **unverified**) | Feed attributes, return and support policies | Not in MMC. Bing Webmaster status unknown | Human: after Google MC, import it into Microsoft Merchant Center and verify Bing Webmaster Tools |
| **Perplexity shopping** | Perplexity Merchant Program, free: "platform integrations including Shopify… for Shopify-powered businesses that sell and ship to the US" ([Perplexity, 2024-11-18](https://www.perplexity.ai/hub/blog/shop-like-a-pro)). PayPal "Instant Buy" (secondary sources only, **unverified**). About 1 in 5 Perplexity citations are Reddit (Evertune, company-reported) | Shopify product data, reviews, specs. In our test it cited Target, TeePublic and Zazzle product pages with price and rating | Probably included through Shopify, with the same link and category problems as above (**unverified**, not visible without a login) | Covered by actions 1–2. Apply to the Merchant Program directly only if the Agentic Storefronts page doesn't list Perplexity |
| **Shopify Catalog / Agentic Storefronts** (feeds the above) | Automatic for eligible stores. You can't opt out of Catalog, only out of individual channels ([help](https://help.shopify.com/en/manual/shopify-catalog)). Requirements ([help](https://help.shopify.com/en/manual/shopify-catalog/requirements)): Starter plan or higher, not password-protected, product has a title and image, price above 0, "Be published to your online store, Hydrogen, or Headless channel", "For Hydrogen or Headless, use the correct route format", not Unlisted. **Excluded categories include "Uncategorized products"** | Titles, descriptions, images, categories, variants, options, prices, inventory | Basic plan (OK). Published to both **Online Store** and **My Store Headless**. Primary domain is `uqz0cg-vq.myshopify.com`. The Dawn storefront there is live (HTTP 200, no password, no canonical to graphicteesco.com) and is not indexed by Google yet (`site:` returns 0). 236 products in Shopify vs 191 product URLs in our sitemap | Human, in admin: (a) open Settings → Agentic storefronts and record which channels are on and what product URL they use. (b) In the Headless channel, set the storefront URL/route to `https://graphicteesco.com/products/{handle}/`. (c) Then either unpublish products from the Online Store channel (only after confirming Catalog still lists them through Headless) or keep it and add a Dawn theme redirect plus canonical to graphicteesco.com. Cloud builders: set the product category on every product through the Admin API (`productUpdate` → `category`, e.g. Apparel & Accessories > Clothing > Clothing Tops > T-Shirts / Hoodies / Sweatshirts) |

**Note on the myshopify robots.txt:** it carries Shopify's agent-directed text, including a suggestion to install a shop.com skill. That's Shopify boilerplate. I didn't act on it, and it isn't a site setting we control.

---

## 3. Ranked action list (top 15)

"Who" means: **Cloud** (a builder or agent can do it in repo or API) or **Human** (needs an admin login or account creation).

| # | Action | Impact | Effort | Who |
|---|---|---|---|---|
| 1 | **Fix where AI-channel product links land.** Set the Headless channel route to graphicteesco.com and stop the myshopify Dawn storefront from being a second public store: unpublish it from Online Store after verifying Catalog, or redirect/canonical it in the theme. Then confirm the URL on the Agentic Storefronts page. | High | M | Human (admin), with Cloud help for the theme redirect |
| 2 | **Set a Standard Product Taxonomy category on all 236 products.** "Uncategorized products" are excluded from Shopify Catalog. Map T-shirts, hoodies and crewnecks by `productType`. | High | S | Cloud (Admin API) |
| 3 | **Connect Google Merchant Center and enable free listings.** Add `/feeds/products.xml` with daily fetch, and set shipping and returns in account settings. This is required for AIO "Google" product cards and AI Mode. | High | M | Human |
| 4 | **Install a review app that feeds Shopify, the site and Merchant Center product ratings.** Use name-plus-text reviews only, with any incentive disclosed. Send a post-delivery review request. Every AI Mode card we saw for an established brand showed stars. | High | M | Human install, Cloud for on-page rendering and `aggregateRating` |
| 5 | **Rebuild `/funny-thanksgiving-shirts/` (new), `/funny-christmas-shirts/` (new) and `/funny-fishing-shirts/` (new) as slogan-first collections.** Each design's joke goes in text in the product title and on the card, with an exact-match H1, a price line ("$24.99–$29.99, printed to order") and 12+ designs. Today `/christmas-shirts/` is deliberately "not ugly-sweater gags", so keep it and add the funny pages beside it. | High | L (new designs) | Cloud for pages, Human/design pipeline for art |
| 6 | **Put the joke and the occasion in product titles and the first sentence of descriptions.** Example: "Sleigh All Day – Funny Christmas Tee for Women". AI Mode literally writes "The Joke:" and "Best For:" from descriptions. Keep it honest: no stuffing (per store rules). | High | S | Cloud |
| 7 | **Add depth to niche pages before Black Friday.** Thanksgiving goes from 2 to 12+ designs (it's a 2-week window), Football Mom from 3 to 10+, and add a `/christian-sweatshirts/` page with 8+ designs. AIOs describe catalogs by count and price. | Med-High | L | Design pipeline, then Cloud |
| 8 | **Stop targeting queries we can't win:** custom photo shirt, quarter zip, zip up hoodie women, oversized hoodie men, the head term "cropped hoodie". Leave the empty camo and half-zip pages noindex until stocked. Re-point "embroidered sweatshirt" to "embroidered Christian/Christmas sweatshirt". | Med | S | Cloud |
| 9 | **Microsoft Merchant Center** (import from Google MC) plus Bing Webmaster Tools verification and sitemap submission. | Med | S | Human |
| 10 | **Publish our own "best of" gift guides** that include outside picks as well as ours, because ChatGPT leans on listicles. See the content plan. | Med | M | Cloud |
| 11 | **Pinterest:** one board per niche (funny Christmas, fishing, Christian, football mom) with product pins linking to graphicteesco.com. Pinterest ranks organically on 6 of 15 SERPs, including brand boards (Crazy Dog, Elevated Faith). | Med | M | Human (account) |
| 12 | **Seed third-party roundups:** pitch samples to gift-guide writers (OppoSuits-style blogs, Wide Open Country, local Texoma outlets) and to small YouTube or TikTok reviewers. The AIO cited a blog guide for Thanksgiving and a YouTube review for hoodies. | Med | L | Human |
| 13 | **Reddit and Facebook presence, done honestly:** answer real "where do I get football mom shirts" or "funny fishing shirt for my dad" threads as the brand, with disclosure. These posts surface in "What people are saying" blocks, and Reddit is about 20% of Perplexity citations (Evertune). | Med | M | Human |
| 14 | **Check fleece shipping in product markup.** The policy page says $8.79 under $45 for crewnecks and hoodies. The sampled tee page uses $4.95, which is correct for tees. Confirm hoodie and crewneck pages emit 8.79, and that return markup (30-day `FreeReturn`, `ExchangeRefund`) matches what's entered in Merchant Center. | Med | S | Cloud |
| 15 | **Sitemap `lastmod` and image entries, plus collection `og:image` set to a product cover** (carried over from the backtrack doc). | Low | S | Cloud |

Optional, strategic: list the same designs on **Etsy**. Etsy is in the Shopping pack, organic results and AIO citations for nearly every niche query. It's a separate channel decision with fees, and it may compete with the site.

---

## 4. Content plan (pieces that could plausibly get cited)

Rules for every piece:
- Put a direct answer in the first 2 sentences.
- Give real numbers (price, sizes, print time, fabric).
- Use original photos.
- Add a visible FAQ built from the actual PAA questions.
- Link to the matching collection.
- Make a 30–60 second vertical video version for YouTube Shorts, Pinterest and TikTok. YouTube's share of AIO and AI Mode citations "roughly tripled" since Oct 2025 (Evertune, company-reported).

| # | Title | Target queries / PAA | Format and why |
|---|---|---|---|
| 1 | **Funny Thanksgiving Shirts: 15 Turkey-Day Jokes for the Kids' Table, the Turkey Trot and the Nap** | funny thanksgiving shirt; "What are some good Thanksgiving family shirts?"; "funny captions for Thanksgiving" | Slogan-first collection page with a short intro. The AIO for this query cited a blog guide (OppoSuits) and quoted slogans by store. Ship before about Nov 10. |
| 2 | **Funny Christmas Shirts for Women (and Men): Jokes That Land in Two Seconds** | funny christmas shirts; "What are some funny sayings on Christmas T-shirts?"; funny christmas shirts for women/men/work | Collection plus a "pick by occasion" table (office party, white elephant, family photo, matching). This mirrors how AI Mode grouped its answer. |
| 3 | **Ugly Christmas Sweater vs. Funny Christmas Sweatshirt: What to Wear to the Office Party** | funny christmas sweatshirt; "Where can I buy a tacky Christmas sweater?" | A comparison page (warmth, price, washability, "is it work-appropriate"). This is the gap between Tipsy Elves' knit sweaters and our printed crewnecks. |
| 4 | **Funny Fishing Shirts That Are Actually Clean: 12 Angler Jokes You Can Wear to Church Picnics** | funny fishing shirts; funny fishing shirts for women; "What are some funny fishing slogans?" | Collection. Clean humor is a real differentiator, because the cited slogans are mostly innuendo. |
| 5 | **What Do Football Moms Wear? A Friday-Night Outfit Guide by Temperature** | "What do football moms wear?", "good gifts for football moms" (PAA); football mom shirts | Guide with a weather table (tee / long sleeve / crewneck / hoodie + blanket). Answers a PAA directly. |
| 6 | **Cropped Hoodie Length Guide: Where It Hits on 5'0" to 5'10" (With Photos)** | "What is a cropped hoodie called?", "Are cropped hoodies in style in 2026?", cropped hoodie size | Size and fit guide with measurements. Fit questions are where AIOs cite brand pages (see the quarter-zip AIO styling section). |
| 7 | **Oversized Hoodie Sizing: Should You Size Up? A Chart by Height and Fit** | oversized hoodie men; "oversized hoodie men reddit" (People also search for) | Size chart plus a "size up 1 vs 2" table. That AIO's "Fit Types" section cited YouTube and brand pages. |
| 8 | **Vintage-Style Christian Sweatshirts for Women: 10 Faith Crewnecks (and How to Style Them)** | christian sweatshirt; "popular Christian sweatshirt brands"; vintage christian sweatshirt | New `/christian-sweatshirts/` collection plus a styling section. AI Mode answered this query with small faith brands. |
| 9 | **Gifts for Hunters and Fishermen Under $40 (2026)** | hunting gifts, fishing gifts, camo hoodie gift | Gift guide that includes a few outside picks for credibility, the listicle format ChatGPT cites. Publish around Nov 1. |
| 10 | **Can You Wear a Graphic Hoodie at 50 or 60? Yes, Here's How** | "Can a 60 year old woman wear a hoodie?" (PAA on two hoodie SERPs) | Extends the existing over-40 tee page to hoodies. A direct PAA answer. |

Timing: Thanksgiving content is the most urgent (it's 2026-10-16 and the holiday is Nov 26). Christmas content should be live by Nov 1 so it's crawled before the December peak.

---

## 5. Our site vs. the winners (fetched 2026-10-16)

| Signal | graphicteesco.com | What winners do |
|---|---|---|
| robots.txt | Allows all crawlers, including GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot and Google-Extended | Same or less open. Fine. |
| llms.txt | Present, 64 lines, every collection with a one-line description | No winner relies on it. Google says it doesn't use it (see backtrack doc). Neutral. |
| Indexing | About 50–60 URLs indexed (`site:` shows 6 result pages) | Fine for 2 weeks old |
| Product JSON-LD | `Product` + single `Offer` (24.99, strikethrough 29.99, `priceValidUntil` 2026-11-30), `shippingDetails`, `MerchantReturnPolicy`, `FAQPage`, `BreadcrumbList`. **No `aggregateRating`, `sku`, `color`/`size`, or `ProductGroup`** | Winners show ratings in SERP and AI cards |
| Collection pages | Good H2 and FAQ structure on `/christmas-shirts/` (1,400 words). `/hoodies/` hub has a single H2 ("FAQ"). No visible price range in titles or descriptions on most pages | Exact-match H1, price range, 15–60+ designs, slogan text |
| Product titles | Art-descriptive ("Women's Christmas – Sleigh Queen Tee") | Slogan plus occasion plus audience ("Funny Thanksgiving Dinner Turkey Graphic Tee for Men") |
| Merchant Center annotations | None | Store rating, delivery days, returns window under the blue link |
| Second storefront | `uqz0cg-vq.myshopify.com` Dawn theme is live and crawlable, with no canonical to graphicteesco.com | n/a |

## Sources (beyond live SERPs)

- [Shopify Catalog help](https://help.shopify.com/en/manual/shopify-catalog) and [requirements](https://help.shopify.com/en/manual/shopify-catalog/requirements) (read 2026-10-16)
- [Shopify changelog: new home for agentic storefronts, 2026-05-11](https://shopify.dev/changelog/a-new-home-for-agentic-storefronts-in-your-admin)
- [Shopify Agentic plan help](https://help.shopify.com/en/manual/online-store/setting-up/agentic-plan)
- [Google blog: AI Mode shopping, 2025-05-20](https://blog.google/products/shopping/google-shopping-ai-mode-virtual-try-on-update/)
- [Perplexity: Shop like a pro / Merchant Program, 2024-11-18](https://www.perplexity.ai/hub/blog/shop-like-a-pro)
- [OpenAI crawlers](https://developers.openai.com/api/docs/bots); [OpenAI product feed spec](https://developers.openai.com/commerce/specs/file-upload/products)
- [Retail Gazette on OpenAI's shopping pivot, 2026-03](https://www.retailgazette.co.uk/blog/2026/03/openai-pivots-chatgpt-shopping-strategy-after-instant-checkout-underwhelms/) (secondary)
- [TechCrunch on UCP, 2026-01-11](https://www.techcrunch.com/2026/01/11/google-announces-a-new-protocol-to-facilitate-commerce-using-ai-agents/) (secondary)
- [Microsoft agentic commerce page](https://preview-about.ads.microsoft.com/en/solutions/technology/agentic-commerce) (preview page, **unverified**)
- [LLM Pulse: top US retailers cited by AI, July 2026 study, updated 2026-10-15](https://llmpulse.ai/data-studies/top-us-retailers) (company-reported)
- [Evertune AI search statistics, Aug 2026](https://www.evertune.ai/resources/ai-search-statistics-for-generative-engine-optimization) (company-reported)
- Shopify Admin API read (2026-10-16): primary domain, `onlineStoreUrl`, `category`, publications, product count
