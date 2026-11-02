# Google push: Christmas hoodies, Black Friday, Hold Your Horses, Merchant Center (Sam, 2026-11-01)

Sam asked: "What can you do to help get them pushed up?" then "take care of one through six tonight with the builders."
Research by Claude on 2026-11-01 (Search Console, last 28 days to Oct 30; live Google results; RankHero; Merchant Center).

## Where we stand (measured)

| Search | Our page | Avg spot | Impr. (28d) | Clicks | RankHero vol / KD |
|---|---|---|---|---|---|
| christmas hoodies | /hoodies/christmas-hoodies/ | 25 | 73 | 0 | 9,900 / 58 |
| christmas hoodie | same | | 10 | 0 | 9,900 / 52 |
| black friday t shirts (+ 28 variants) | /black-friday/ | 21 | 140 | 0 | black friday shirts 720 / 44 (comp 9,941) |
| hold yer horses im overstimulated shirt | /products/womens-western-hold-your-horses-im-overstimulated-graphic-tee/ | **5.5** | 30 | 0 | hold your horses shirt 390 / 32 (comp 802) |
| anime hoodie(s) / anime graphic tees | /hoodies/anime-hoodies/ (8 products), /anime-shirts/ (3) | 62 | 215 | 0 | anime hoodie 22,200 / 38 |

Site total, last 7 days: 12 clicks, 1.4K impressions, avg spot 33 (was 40 over 28 days). Growing; still mostly page 3-4.

## Item 1. Christmas hoodies page: rework (director, copy only, PRIORITY)

The page is the generic `seasonal()` template (one-line blurb, 1 extra FAQ, only 2 Questions in its FAQPage schema). The sites above us on Google for "christmas hoodies": Altar'd State, Amazon, Epic Hoodie (ugly), m00nshot ("Funny Christmas designs ... holiday punchlines"), Zazzle, Crazy Dog ("Funny Christmas Hoodies"), Target kids, Kohl's. "People also search for": Christmas hoodies for family / women's / men's / **Christmas zip up hoodie**. "People also ask": best Christmas sweatshirt; where to find family Christmas hoodies; most popular hoodie; best place to order hoodies online.

Do (in src/data/collections.ts, the christmas-hoodies entry; hand-written, answer-first, facts only from the Printful specs and our live products; NEVER delete existing copy, add to it and restyle per the never-kill-SEO-text rule):
1. keyword -> `christmas hoodies` (primary, 9,900/58); keep `christmas hoodie` (9,900/52) as the second phrase in the copy. SEO title leads with the head term and our angle, e.g. "Christmas Hoodies: Funny Holiday Hoodies for Men & Women" (60 chars max). Meta description: what makes ours different (original funny art, printed to order), real starting price, free US shipping on $45+.
2. Answer-first intro (2-3 sentences) above the grid, replacing the template blurb as the lead (the blurb text stays further down).
3. New H2 sections, each with 2-4 real live product links: Funny Christmas hoodies; Christmas hoodies for women; Christmas hoodies for men; Christmas zip-up hoodies (tag every live Christmas zip into this page; if fewer than 2 exist, skip the section and add a zip line to the next 2 Christmas briefs); Matching family Christmas hoodies (link /group-shirts/ and the family Christmas sets).
4. FAQ to at least 6, ALL rendered into FAQPage schema (check why only 2 render today; fix the template so every collection's FAQs reach the schema). Include: best Christmas sweatshirt vs hoodie; family/matching hoodies; when to order to have it by Christmas (use the real Printful production + shipping times, no guesses); sizes/fit; gift wrap or gift note if we offer it (only if true).
5. Done when: `astro build` passes, audit 0 errors, page shows 6+ FAQs in the JSON-LD.

## Item 2. Black Friday: a NEW shirts page (director briefs, builders build) + link the deals page

Google's intent for "black friday t shirts" is shirts ABOUT Black Friday (shopping squad, shopping crew, matching group tees, funny shopping jokes), not a sale page. Shopping results are Etsy squad/crew tees, TeePublic "shopping humor", Old Glory "Black Friday Shopping Team". Our /black-friday/ is a deals page, so it sits at 21 with 0 clicks for that intent.

- Keep /black-friday/ as the DEALS page (its terms: black friday graphic tees sale, black friday men's graphic tee deals, black friday hoodies sweatshirts sale). The 3 tiered discounts are already SCHEDULED in Shopify for Nov 8 06:00 UTC to Dec 1 (checked 2026-11-01); don't touch them.
- NEW collection `/black-friday-shirts/`: keyword `black friday shirts` 720/KD 44 (measured; Sam OKs KD above 20 for seasonal heads). Answer-first copy, 6 FAQs, cross-link with /black-friday/ both ways. Noindexed until 3 products are live (linkable.ts rule), so products first.
- Products (deadline: live by Nov 12 so Google has 2 weeks before Nov 27): 4-6 designs. **Type-led art via scripts/compose-print.py (real fonts), so no fal spend** (fal is capped). Whimsy first: an original joke a stranger gets in 3 seconds. Lean into what ranks: squad / crew / matching group shirts (make at least 2 work as a matching group set) and shopping humor. Hook seeds for the director to improve or replace: "PROFESSIONAL DOORBUSTER"; "BLACK FRIDAY SHOPPING SQUAD" (group set with role lines: the driver / the list keeper / the cart pusher / here for snacks); "RUNNING ON LEFTOVERS & COUPONS"; "CART FULL. WALLET EMPTY.". Women's relaxed tee + unisex tee + one crewneck. Every product claims its own measured long-tail if one exists; otherwise the waiver rule. Counts toward the 6-a-day cap: put these first in line on Nov 2-4.
- Internal links to /black-friday/: add one natural line + link in each Christmas gift guide ("Black Friday deals run Nov 8-30: buy 2, save 15%") once Nov 8 arrives, or now with "starting Nov 8". Today 0 of 33 guides link it.

## Item 3. Internal links to Christmas hoodies (writer lane W or director, copy only)

Today only 6 of 33 guides link /hoodies/christmas-hoodies/ (white-elephant, christmas-gifts-for dad, coworkers, grandma, boss, girlfriend). Add one natural sentence with anchor text "Christmas hoodies" (vary: "funny Christmas hoodies", "Christmas hoodie") to: christmas-gifts-for-sister, -daughter, -nurses, -friends, -sister-in-law, -parents, -teens (and -neighbors when approved), hoodies-for-teens, funny-hoodies, aesthetic-hoodies, cozy-hoodies, thick-hoodies, baggy-hoodies. One link per guide, in the body (not a footer list). Also link it from the homepage Christmas hub door if it isn't already.

## Item 4. Ask Google to re-read (Claude, browser)

After items 1, 2 and 5 are live: Claude requests indexing in Search Console for /hoodies/christmas-hoodies/, /black-friday/, /black-friday-shirts/ (once 3 products are live) and the Hold Your Horses product, and pings IndexNow. Director: write "READY FOR INDEXING: <urls>" in docs/inbox.md when they deploy.

## Item 5. Hold Your Horses: put the searched line back (builder, PRIORITY, no fal)

Our product page sits at **#5.5 for "hold yer horses im overstimulated shirt"** but the 2026-10-20 quality redo (#533) changed the print to PLEASE STOP TALKING. I LOVE YOU. while keeping the hold-your-horses URL. People click through expecting the hold-your-horses shirt and don't get it; 0 clicks from 30 impressions. "hold your horses shirt" is measured 390 / KD 32 with only 802 competing listings: a real buy-the-bottom win.

- Redo #533 in place (same handle, same armadillo art, compose-print only, no fal): line "HOLD YOUR HORSES, / I'M OVERSTIMULATED." with the redo's improved type standard (Rye, keylines, punch line loudest, reads at phone size). Title, H1, SEO title and first sentence lead with "Hold Your Horses, I'm Overstimulated Shirt"; work "hold yer horses" in once naturally (that is how people type it). Keep "overstimulated shirt" (880/44) as the second phrase. Update docs/product-keyword-map.json.
- The PLEASE STOP TALKING. I LOVE YOU. version: keep the print file; relist it as its own product only if a measured phrase supports it (none found today: "please stop talking shirt" unmeasured).
- Lesson for the rulebook: a redo that changes the line must check Search Console first; never swap away a line that already ranks on page 1.

## Item 6. Google Shopping / Merchant Center (checked 2026-11-01)

Merchant Center account 5876179373 (Graphic Tees Co.): 17.6K items from our 4 feed files (products-*.xml), **0 disapproved**. All show "Limited" because no Google Ads account is linked (ads only; free listings still serve). 3 clicks from free listings in 28 days.
- 42 items are limited for personalized ads only (Christian "Rooted in Jesus" hoodie: identity/belief; Marathon "Soul Still at Mile 20": personal hardship). Ads-only rule; nothing to change.
- **Fix (director, code in src/pages/feeds/products.xml.ts):** Merchant Center says 8,313 tees need Material and Pattern IN THE DESCRIPTION (the separate g:material / g:pattern attributes are already sent). Make the feed's `description` open with one plain key-details sentence before "The Story.", built from the Printful spec, e.g. "Women's relaxed-fit graphic print tee in 100% combed ring-spun cotton (heathers contain polyester), color White." Feed only; don't change the product page copy. Same for hoodies/crews.
- Search snippets of the stores above us show store rating, price range, delivery days and return window. We already send shipping + return markup; Google Customer Reviews (docs/backlog/google-compliance-tonight.md item 8) is what adds the store rating. Still open.
- Needs Sam (not builders): validate customer service contact in Merchant Center; link a Google Ads account only if he wants Shopping ads (money).

## Lower priority (noted, not tonight)

Anime pages sit at #62 with 8 and 3 products. They need products (fal), not copy. They stay in the standing "every niche collection to 10" order behind zip/camo and the Black Friday shirts.
