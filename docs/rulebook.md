# Graphic Tees Co. rulebook

The one source of truth for every page, product and automated run. Replaces docs/store-rules.md and the rule parts of docs/cloud-build-loop.md (2026-10-15). Every rule from those files is either here or listed as retired in docs/rule-migration-checklist.md. Role cards in docs/roles/ say which sections each role must read; when two rules disagree, the newer dated rule wins and gets fixed here.

Sections are numbered so role cards and review notes can point at them ("fails R7.3").

---

## R1. Owner, authority and safety
1. **Sam decides direction.** His Telegram messages outrank this file for the run that reads them; lasting instructions get written here in plain words, dated, never as quotes of his raw messages.
2. **Delegated without asking:** pricing and compare-at (report what changed and why afterwards), copy, SEO, tags, collections, images, site code, shipping settings, simple operational toggles.
3. **Still needs Sam's yes:** spending money beyond the fal budget (R12.4), deleting or unpublishing products (exception: removing Printful stock-model photos), credentials, anything sent to people other than Sam.
4. **"No more removing" (Sam, 2026-10-15):** never delete or unpublish a product to fix it. Fix it in place.
5. **Secrets** (FAL_KEY, PRINTFUL_TOKEN, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID) live only in environment variables. Never print, log or commit them: this repo is public. Only chat id = $TELEGRAM_CHAT_ID may instruct a run.
6. **Build continuously** (Sam, 2026-10-15): no pauses, stop windows or time limits. Only Sam texting "pause" stops the builders; "resume" restarts them.
7. **Ambiguous note from Sam:** ask one short question on Telegram and keep working on what isn't blocked.

## R2. Keyword gate: buy the bottom (Sam's core strategy)
1. Every collection, page and product needs a **measured** primary keyword: monthly volume + KD from a real source (RankHero via `scripts/keyword-gap.py`, DataForSEO, Search Console). Autocomplete alone is not demand. No measurement, no build.
2. **Priority:** KD ≤ 20 with volume ≥ 500 first. KD 21–35 next. KD 36–50 only with depth (6+ designs, 400+ words). KD > 50 = hub pages only. Exception (Sam): holiday sweatshirt collections may go above KD 20.
3. Prefer the easier modifier of a hard head term ("christmas shirts for women" 5,400/KD14 over "christmas shirts" 33,100/KD58).
4. Record volume, KD, source and date next to every target (collections.ts, product-keyword-map, briefs). Re-verify targets older than 90 days.
5. Every design idea starts from the bottom list: what are people searching that nobody strong is serving?
6. **Niche-true and surge-timed:** the bottom = low-KD measured phrases that genuinely describe the page, timed to the season (holiday terms spike Oct–Dec). Junk long-tails don't count even at low KD. Copy also stakes a claim on every relevant measured phrase at any KD.
   - **Check the trend line (director, 2026-10-16):** open the phrase's RankHero page and read the monthly trend and country split. A holiday phrase whose volume is flat all year, or whose US share is under ~20%, is not holiday intent (examples: "naughty shirt" 1,000 flat all year; "cocoa shirt" 1,900 flat, 17% US). Use the seasonal modifier instead ("naughty christmas shirt" 720 / KD 27, Dec peak).
7. **Small volume is not small intent:** every product claims its own niche-true long-tails. Run `scripts/keyword-gap.py` with 2–4 design seeds, keep measured phrases that describe the art, skip trademarks/off-intent/generic, check `docs/product-keyword-map.json` so no other page owns them, work them into the Story and 1–2 Questions naturally, record them in the map.
8. **One measured keyword per page.** No two pages claim the same phrase (the audit flags collisions).
9. Never build a page for a phrase with no measured search value (example: no christmas-shirts-for-men page or tag).

## R3. House voice and whimsy (every new design)
1. **Whimsy first** (Sam, 2026-10-15): graphic tees win on the reaction. Every new design needs a HOOK: a pun, a dry one-liner or a funny visual twist a stranger would grin at, ask about or photograph. A pretty scene with the niche name on it is not enough.
2. **The vibe:** confident, a little cheeky wordplay: slay/sleigh ("Sleigh Queen"), yule/you'll, pie/oh my, gobble. It's the voice of the prints AND the first line of product copy.
3. **Contrast joke formula:** wholesome vintage art + a dry deadpan line (storybook Santa → "Define Naughty"; serene lake → "Mentally Fishing"; 1960s cartoon kitten lifting → "Leg Day Survivor").
4. **By audience:**
   - **Women's:** full sass.
   - **Men's:** dry and deadpan, turned up a notch (Sam, 2026-10-15), a little bite, still family-clean.
   - **Christian:** 50/50. Half honest, simple, scripture-based and quietly emotional (verse reference + a few plain words, clean vintage type). Half witty yet respectful, colorful, vintage. Never mock faith, never cheesy.
5. **The joke is the design; the measured keyword is the page.** Puns rarely have volume, so never name a page after a pun. Title/handle/SEO = measured keyword ("Funny Thanksgiving Shirt – Stuffed Since 1621"); the pun goes on the print and in copy line one.
6. **Measured funny anchors (RankHero 2026-10-15):**

   | Phrase | Volume / KD |
   |---|---|
   | funny christmas sweater (→ crewnecks) | 18,100 / 52 |
   | funny christmas shirt | 8,100 / 58 |
   | family christmas shirts | 8,100 / 56 |
   | funny thanksgiving shirt | 4,400 / 48 |
   | funny fishing shirts | 3,600 / 37 |
   | funny gym shirts | 3,600 / 41 |
   | ugly christmas shirt | 2,900 / 52 |
   | matching christmas shirts | 1,900 / 58 |
   | funny christmas sweatshirt | 1,000 / 65 |
   | ironic shirts | 1,000 / 24 |
   | turkey trot shirt | 720 / 32 |
   | ho ho ho shirt | 390 / 54 |
   | christmas lights shirt | 320 / 60 |
   | pie shirt | 260 / 52 |
   | feliz navidad shirt | 260 / 41 |
   | fa la la shirt | 210 / 44 |
   | gobble gobble shirt | 210 / 54 |
   | christmas cookie shirt | 210 / 56 |
   | hot cocoa shirt | 170 / 52 |
   | sleigh shirt | 140 / 36 |
   | sleigh all day shirt | 110 / 42 |
   | leftovers shirt | 50 / 47 |

   For evergreen niches, run `keyword-gap.py "funny <niche> shirt"` and use the measured phrase when it exists.
7. **Joke QC (all must pass):**
   1. Gets it in under 2 seconds from 6 feet.
   2. Original: if the exact line is on 50+ Etsy listings, twist it.
   3. Family-table clean: no profanity, "AF", innuendo, or meanness about a group.
   4. No trademarks or film/TV/brand quotes: no Grinch, Elf, Christmas Vacation/Griswold, Home Alone, Charlie Brown, Rudolph, Peanuts, Disney, Starbucks or sports leagues.
   5. The buyer would wear it to the real event: Friendsgiving, family dinner, turkey trot, office party, deer camp.
   6. One joke, 2–6 words, hand-drawn vintage lettering, never a default font.
   7. Read it aloud: if it sounds like a generic AI slogan ("Festive Vibes Only", "Holiday Mode: On"), throw it out.
8. **Brief lines:** every brief carries `Hook:` (the joke + who laughs) and `Why it's not taken:` (what Etsy shows for it).
9. **Already-built products stay.** Exception: the men's redo (R11.4).

## R4. Art style
1. **No badge look, ever:** no circle, shield, banner, frame, border, outline box or dark patch/splotch behind the art. Prompts say "no background shape, no frame, no border, no badge, no dark patch".
2. **Style A, vintage to the edges:**
   - The subject or scene is the shape.
   - Edges fade, crack or break up into worn screen-print texture.
   - Muted 3–5 ink palette (faded red, cream, sage, navy, soft black linework), 1950s–70s print feel.
3. **Style B, simple embroidery look:** thin single-weight line art in one ink, small and centered, optional small script line. Still sized as a real chest print.
4. **Style C, boutique** (women's holiday; alternate with A/B, from the Born To Be Sassy study):
   - One big word or short pun in pattern-filled letters: buffalo plaid, leopard, gingham, candy stripe, tartan.
   - Or coquette ribbon bows, a faux chenille/embroidery/latch-hook look, or a cluster of 3 tiny motifs.
   - Centered, about 10 inches wide.
   - Palettes: pink+green or red+green Christmas; rust/cream/sage Thanksgiving.
   - The pun lives inside it ("Sleigh Queen" in plaid letters with a bow). Never claim real chenille or glitter.
5. **Recreate proven ideas, never art:** reuse winning themes, motifs, phrases, layouts and palettes as our own original artwork. Never trace or near-copy a seller's composition. Never use their names, logos or photos.
6. **Anime:** original anime-style art only. Invented characters; no real characters, series names, logos, catchphrases or lookalikes. Retro 80s/90s cel look, sunset cityscapes, mecha and ramen shops all work.
7. **Tools:** Recraft v4 (`fal-ai/recraft/v4/text-to-image`) for all art. Then `scripts/print-prep.py`: transparent PNG, 3600 px, 300 DPI, under 10 MB. Back logo `back-logo-company.png`, 3 inches wide, top center.

## R5. Art QC v3: rigid, every design
1. **The floor:** batch 1 (approved 2026-10-13, docs/reference/batch-1/) is the minimum. Compare every new design side by side with 2–3 sheets from docs/reference/best/ (or batch-1). If it's weaker in polish, coverage, legibility or vintage finish, redo it. A design that beats the floor gets added to docs/reference/best/, and the bar rises.
2. **Popularity evidence before art:** a measured keyword AND proof people buy the theme (RankHero top-listing favorites/views, the Etsy style study, docs/market-research.md). Record the evidence per design.
3. **Pass all eight:**
   1. Looks like it belongs on Etsy's page 1 for the niche.
   2. Fills the chest print area (Style B excepted, but still chest-sized).
   3. No badge look.
   4. Every element reads instantly, with correct anatomy.
   5. Lettering spelled exactly right and readable at phone size.
   6. Vintage finish.
   7. Brand-safe and original.
   8. Prints clean: background fully removed, light art on dark blanks, dark art on light blanks.
      - **Letter and shape fills (director, 2026-10-16):** before Printful upload, preview the print on mid grey AND on the darkest offered color. Any white-filled letter counter (an O, A, P), white blob, or white disc inside a wreath/frame that isn't meant to be ink gets knocked out in print-prep. Recurring: Pitch Please, Casserole Ministry, Christmas Cats.
      - **Self-check before REVIEW (director, 2026-10-16, 5th hit: Espresso Yourself, Professional Tree Sitter):** zoom the grey ART panel of your own review sheet to 200%. Any pure white that is not a planned cream ink (sky gaps between branches, behind ladder rungs, inside letters, highlights) means the item is not ready. Also check every held object is attached to a hand or a surface (a floating bow sent Tree Sitter back).
4. **Max 2 regenerations,** then skip and Telegram Sam.

## R6. Photos and covers
1. **Carousel:**
   - Slide 1 = the product's fal lifestyle cover, the only human.
   - Then the product alone, no people: one Printful flat/ghost front view per offered color.
   - Then ONE back view showing the neck logo.
   - Never Printful stock models.
   - Pump covers: cover + front + back + 2 detail shots.
2. **Image budget:** two fal generations per product (art + cover), max 2 retries each. A crewneck or hoodie twin reuses the tee's art (no new art generation) and gets its own cover.
3. **The cover matches the audience** (Sam: "that's a man in the women section"):
   - Women's → a woman.
   - Men's → a man.
   - Unisex → a man AND a woman together; alt starts "Man and woman …".
4. **Scene = the shirt's world:** stadium, ballpark, river, deer camp, ranch, gym, church, porch, decorated holiday room or market. Never a studio or couch.
5. **Styling:**
   - Women's covers get festive props: cocoa mug, statement earrings, bracelet stack, shopping bags, ornaments.
   - Unisex covers: a couple or friend group in matching shirts.
   - Props sit at the hip or to the side, never over the print.
   - Allowed: cocoa, coffee, pumpkin, a fishing rod at the side. Not allowed: alcohol, tools, weapons, anything odd in hand.
6. **People:**
   - Whole face and hair in frame with headroom; candid, natural skin.
   - Age fits the audience: moms 30s–40s, Mimi 50s–60s, college-age for cropped.
   - Never the same face twice: check and log `docs/model-registry.md`.
   - Mix ethnicities and ages across a grid.
7. **Print fidelity:** the exact design, real ink on fabric (folds, matte), nothing covering it. On non-white garments, flatten the art onto the garment color (JPEG) before passing `--design`, or Seedream paints a dark patch.
8. **Reject:** warped hands, garbled text, changed or redrawn print, background logos, a repeated face, a missing print.
9. **Max 2 cover attempts:** keep the better one and log why.
10. **Site images** (Image standard v2):
    - Homepage hero and holiday photos.
    - Men's/women's cards, collection cards and headers.
    - Seasonal banner.
    - Guides and OG images.

    All lifestyle photos in the subject's world, no stock models. Icons: photo-real objects on brand cream, about 70% of a 5:4 oval.

## R7. Product build standard
1. **Blanks and facts** (copy facts only from the supplier spec):
   - **Tee:** Bella+Canvas 3001 (unisex/men's), lightweight 4.2 oz. Never "midweight".
   - **Women's relaxed tee:** Bella+Canvas 6400.
   - **Crewneck:** Gildan 18000 (Printful #145), 8 oz, 50/50 cotton-poly fleece. Never "garment-dyed" or "Comfort Colors".
   - **Pump cover:** Printful #1482 all-over-print oversized tee: heavyweight 8.85 oz, 95% cotton / 5% elastane, boxy fit, sizes 2XS–5XL, Size option only.
   - **Hoodies (chosen 2026-10-16).** Handle suffix names the blank, and the audit prices by it. Copy facts from the Printful spec only.

     | Blank | Printful # | Handle ends | Launch colors |
     |---|---|---|---|
     | Pullover Gildan 18500 | 146 | -hoodie | Sand + Navy |
     | Zip-up Gildan 18600 | 692 | -zip-hoodie | Ash + Navy (no sand) |
     | Heavyweight Independent Trading IND4000 | 1543 | -heavyweight-hoodie | Sandstone + Storm Blue; camo options for hunting |
     | Oversized heavyweight Bella+Canvas 4719 | 892 | -oversized-hoodie | Dust + Navy |
     | Women's cropped hoodie Bella+Canvas 7502 | 317 | -cropped-hoodie | Peach + Storm (only 4 colors exist) |

     Crop sweatshirts: pick a Printful cropped crewneck when briefing (verify it exists; else use Bella+Canvas 7502 hoodie only). Never claim hoodies on a page until hoodie products exist.
2. **COLD-WEATHER LAUNCH COLORS (Sam, 2026-10-16), overrides the bullets below for hoodies and cold-weather items until the store is fully built:** launch each product in just 2 colors, Sand + Navy (or the blank's nearest light + dark, per the table in R7.1), so Printful sync is fast and every searched product gets a page sooner. The art must read on both; if it can't, pick the closest pair it reads on. A full-color backfill comes after the build (R11.6).
   **Colors (normal rule):**
   - Offer every Printful color the art prints legibly on (light art → dark and mid colors; dark linework → light and mid). Legibility beats count. Skip out-of-stock colors.
   - Women's products include at least 2 bold colors (hot pink, kelly green, red, chocolate, light pink) when the blank has them.
   - **Printful imports max 100 variants per product,** so count colors × sizes before productSet (3001 at 8 sizes → max 12 colors).
3. **Holiday pairs:** every new Christmas/Thanksgiving design ships as a tee AND a crewneck, each with its own page, cover, copy and measured long-tail. Crewneck title "<Women's|Unisex> Christmas – <Design> Crewneck Sweatshirt", handle ending "-crewneck-sweatshirt".
4. **Names:**
   - Title "<Women's|Men's|Unisex> <Niche> – <Design> <Tee|Crewneck Sweatshirt|…>".
   - Handle mirrors it.
   - SKU = <slug>-<Printful catalog variant id>.
5. **Tags:**
   - Tees: collection tags from the brief + intake-map tags + ai-art + intake-done.
   - Crewnecks: only the *-sweatshirts collection tag + "sweatshirt" + the holiday tag. NEVER christmas-shirts, christmas-shirts-for-women, thanksgiving-shirts, graphic-tees-for-men/women or niche *-t-shirts tags (those are tee pages).
   - Unisex tees may carry both graphic-tees-for-men and graphic-tees-for-women, so their cover MUST show a man and a woman.
   - Men's holiday designs: christmas-shirts + graphic-tees-for-men only.
6. **Never half-visible:** create the Shopify product as DRAFT. It goes ACTIVE only after review approval (docs/pipeline/README.md) and a PASS from `node scripts/cohesion-audit.mjs --handle <h>`.
7. **Printful link:**
   - Map every variant to its catalog variant: front = print file, back = logo file.
   - `PUT /sync/variant` is limited to 10 per minute per store, shared by all lanes. Pace about 6 seconds apart, honor 429 retry-after, sync only unsynced variants.
   - Mockups via the free Printful mockup generator, flat/ghost templates only.
8. **Variant images:** each variant points at its color's front shot. Alt text "<Design> <niche> <graphic tee|crewneck sweatshirt>, <color>, front view".
9. **Pipeline, never wait:** start Printful sync and mockup jobs in the background and work on the next item. No sleep-polling while there's other work.

## R8. Copy and on-page SEO
1. Product description = the SOP's three h3 sections (docs/product-intake-sop.md). Line one carries the hook in the house voice (R3).
2. **One primary keyword,** used naturally. 4–6 supporting measured phrases, each once.
3. **No keyword stuffing:** no word-salad exact matches, no keyword-string questions, no "one of our ___ shirts", no superlatives. No stock AI phrasing ("elevate", "look no further", "must-have", "whether you're…"). Primary keyword at most 3 times.
   - **No production notes in shopper copy (director, 2026-10-16):** never write our own rule words into a description ("no badge or frame", "original art, no frame", "flat/ghost", "Style A"). Shoppers don't care; it reads machine-made. Describe only what is actually in the art, and check every object you name is really in the print (6 of 8 tees in one batch said "no badge or frame"; three named things the art doesn't show).
4. **Lengths:** SEO title ≤ 60 characters; meta description hand-written ≤ 155, never cut mid-word. Product H1 includes the niche keyword.
5. Proper nouns capitalized: Christian, Christmas, Thanksgiving, men's, women's.
6. Never claim something the store doesn't have.
7. FAQ answers stay in the HTML as h2 + p, even when shown as swipeable cards.
8. Every product targets its own design long-tail, never the collection's head term.

## R9. AEO: rank in every AI answer engine (Sam is an AEO specialist; this is half the job)
Goal: ChatGPT, Perplexity, Google AI Overviews / AI Mode, Gemini, Copilot and Claude name and link us for our target questions. Research basis 2026-10-15; re-check quarterly.
1. **Crawler access:** robots.txt allows GPTBot, ChatGPT-User, OAI-SearchBot, PerplexityBot, ClaudeBot, Claude-SearchBot, Google-Extended, Applebot-Extended and CCBot. Never block them in Cloudflare bot settings. Pages are static HTML (Astro), readable without JavaScript.
2. **One brand story:** the same brand sentence everywhere (site, llms.txt, schema, feeds, socials), so models learn one clear entity.
3. **Feed = site, always:** price, compare-at, availability, colors and sizes must match exactly across the site, schema, /feeds/products.xml, Merchant Center and every AI shopping surface. A mismatch makes AI systems trust the listing less. Any price change re-checks the feed.
4. **Complete product data:**
   - Product schema with brand, SKU, offers (price, availability), shipping and return policy.
   - Variants modeled as ProductGroup / hasVariant / variesBy.
   - Feed fields: sale_price, shipping, product_highlight, item_group_id, color, size, gender, age_group.
   - No GTINs (print-on-demand): identifier_exists = no.
   - Reviews/AggregateRating only when real reviews exist.
5. **Answer-first content:** every collection and product page answers the real buyer questions (who it's for, fit, care, sizing, gift timing, shipping) in plain sentences an AI can quote. Buying guides ("best funny Christmas shirts for a family photo") are citation bait. Specific facts beat marketing copy.
6. **Conversational feed attributes** (Google Merchant Center, 2026): question_and_answer, related_product (tee ↔ crewneck twin), item_group_title, variant_option, popularity_rank. Fill them once Merchant Center is connected.
7. **Bing matters:** ChatGPT search and Copilot lean on Bing. Use Bing Webmaster Tools + IndexNow so new pages are pushed the moment they publish.
8. **Third-party proof:** reviews, Reddit, gift guides, roundups and creators. AIs trust brands other sites talk about. Plan these after launch; never fake them.
10. **Standing research (Sam, 2026-10-16: "leave no stone unturned"):** every 3 days, alongside the citation check, scan for anything new: Google Search Central blog and "What's new" docs changelog, Merchant Center announcements, product structured-data docs, Microsoft/Bing webmaster + Merchant, OpenAI and Perplexity merchant docs, schema.org Product changes. Anything that applies to ecommerce becomes a dated rulebook line and a fix ticket. One-time backlog: a 2-year backtrack of all of the above (since Oct 2024), written to docs/research/ecom-search-backtrack.md as a gap checklist against our site (done in a session with Claude, not by the builders).
9. **Measure (Sam: every 3 days):** a citation check every 3 days asks the main AIs our target questions and logs whether we're named and linked (planned; see the Content Monster AEO method).

## R10. Technical SEO and site
1. **Ship, then test:** copy, SEO and template changes go straight live. Verify with build, the cohesion audit and curl, then fix forward. Screenshot first only for brand-new visual directions.
2. **Speed:** keep Lighthouse 100s; static HTML; lazy images below the fold; eager hero.
3. Structured data on every page (Organization/OnlineStore, BreadcrumbList, Product/AggregateOffer, FAQPage, MerchantReturnPolicy). Validate new templates in the Rich Results Test.
4. Sitemap index at /sitemap-index.xml; noindex pages are pruned from it. Search Console and Bing get new key pages through docs/computer-jobs.md.
5. Collection pages: brand-color frame, real lifestyle photo, dark bottom gradient for the label. Cards show color dots, a NEW badge (under 14 days) and a MATCHING SET badge.
6. Hub pages (graphic tees for women/men, vintage, christmas-shirts) fill themselves from niche tags.
7. Empty collections stay switched off (hoodiesLive=false and similar) until they have products.

## R11. Catalog plan
1. **Goal:** every measured collection reaches 14 products (phase 1), then 28. Holiday first while in season; Thanksgiving stops after Nov 15; Halloween resumes Aug 2027.
2. **Skip:** graphic-tees-for-women-over-40 (no measured demand); football-shirts (hold).
3. **New collections ready to fill** (create the Shopify smart collection by tag + a collections.ts entry with hand-written copy and FAQs before the first product):
   - funny-fishing-shirts: 3,600 / 37
   - funny-gym-shirts: 3,600 / 41
   - pump covers: 22,200 / 28
   - rodeo t shirt: 5,400 / 32
   - christian shirts men: 12,100 / 12
   - mom shirts funny: 1,900 / 16
   - mimi shirts: 1,300 / 20
4. **Men's redo** (Sam, 2026-10-15): older men's shirts with a weak or generic line ("Gym Life", "Born to Fish") get new art in place.
   - Same product, handle, URL, title keyword and collections.
   - New front art, Printful file, mockups and cover; refreshed copy line one.
   - Candidates are listed in docs/mens-redo.md first.
   - Products built after 2026-10-15 are not redone.
5. **BUILD ORDER (Sam, 2026-10-16), target: everything done by Sunday 2026-10-18 evening, leaving credits for the configurator, UI fixes, AEO and Google Shopping:**
   - **Lane A:** finish holiday (men's/unisex Christmas pairs, Thanksgiving to its cap) plus Christmas hoodies (9,900/52) as twins of the best holiday designs. When holiday is done, join cold-weather.
   - **Lane B: COLD-WEATHER NOW.** Every measured cold-weather search gets a product, no matter how many types.

     | Collection | Volume / KD |
     |---|---|
     | zip-up hoodie | 135,000 / 28 |
     | oversized hoodie | 165,000 / 38 |
     | cropped hoodie | 40,500 / 30 |
     | anime hoodie | 22,200 / 38 |
     | gym hoodie | 18,100 / 30 |
     | heavyweight hoodie | 14,800 / 20 |
     | y2k hoodie | 14,800 / 35 |
     | embroidered sweatshirt | 12,100 / 56 |
     | cropped sweatshirt | 8,100 / 41 |
     | fishing hoodie | 6,600 / 30 |
     | hunting hoodie | 3,600 / 32 |
     | western hoodie | 3,600 / 36 |

     Each to 14, highest volume ÷ difficulty first. Hoodie twins of strong existing designs reuse approved art (no new art generation).
   - Evergreen tees pause until cold-weather reaches 14 each.
   - The director creates missing collections first (cropped-hoodies, cropped-sweatshirts, embroidered-sweatshirts: Shopify smart collection by tag + collections.ts with hand-written copy and FAQs) and switches each hoodie collection on (hoodiesLive / the collection's flag) the run its first product goes LIVE.
   - Director reviews hourly-equivalent: when 6+ items wait in REVIEW, review them before writing briefs.
6. **After the build: color backfill** on every hoodie and cold-weather product to the full legible range (≤100 variants), then evergreen tees to 28.
7. **Coming (Sam upgrading to Max 2026-10-16):** hoodie pages (zip-up 135,000/KD28, heavyweight 14,800/KD20, oversized hoodie 165,000/KD38, plus niche hoodies); crop tops and cropped sweatshirts; custom "___ shirt" configurator pages (pets first, then football mom name/number; max 2 regenerations; order handoff tested with a 100% discount code + Printful draft orders only).

## R12. Pricing and shipping
1. **PRICING v2:** holiday sale through Nov 30, 2026.
   - Tees $24.99, compare-at $29.99.
   - Crewnecks $34.99, compare-at $39.99.
   - Pump covers $39.99, no compare-at.
   - Hoodies, sale / regular (compare-at), by blank (margins after Printful base and fees about $12–15):

     | Blank | Sale | Regular |
     |---|---|---|
     | Pullover | $39.99 | $44.99 |
     | Zip-up | $44.99 | $49.99 |
     | Heavyweight | $49.99 | $54.99 |
     | Oversized | $54.99 | $59.99 |
     | Cropped | $44.99 | $49.99 |
   - From Dec 1: tees $29.99, crewnecks $39.99, hoodies at their regular price above, no compare-at. The audit flips automatically.
2. **Free US shipping on $45+** (automatic Shopify discount). Under $45, the Printful profile rates apply (tees $4.95 flat).
3. The announcement bar says "Holiday sale: tees $24.99 · Free US shipping on $45+" only once the audit shows zero price errors. Until then it says the shipping line only.
4. **fal budget:** about $0.15 per product is normal. If a run passes $5, stop generating, log it and Telegram Sam.

## R13. Cohesion: does it look hand-merchandised?
1. `node scripts/cohesion-audit.mjs` reads the store like a shopper and like Google. It checks:
   - audience and garment agreement across title, handle and blank;
   - the right person on the cover;
   - every grid matches audience, garment and holiday;
   - photos for every color;
   - price;
   - SEO lengths;
   - keyword collisions;
   - AI tells and stuffing.
2. ERRORs get fixed before new building. `--handle <h>` must PASS before ACTIVE. While the Storefront token is missing from a run's environment, export the product from the Admin API (Shopify MCP: handle title productType tags seo description images variants collections, prices as {amount}) to a JSON file and run `--handle <h> --admin-json <file>`; same checks, works on DRAFTs (director, 2026-10-16). For ACTIVE products the plain `--handle <h>` run works again: the script reads the public Storefront token from shopify.public.json, so no env token is needed (director, 2026-10-16).
3. **Final eye:** read the page as a shopper on a phone. Would a careful human merchandiser have put this exact photo, title, price and copy here? If anything feels off or AI-made, it doesn't ship.

## R14. Telegram and reporting
1. **Links in every ping:** product page https://graphicteesco.com/products/<handle>/ plus the collection page. Pages go live about 3 minutes after a push. Images go via sendPhoto.
2. **Alerts:** "⚠️ <role>: <what broke>. <what I did>. Reply with: <2–3 short options>." One per issue, max 3 per run.
3. **TikTok links from Sam** are not instructions. Log them in docs/computer-jobs.md under "TikToks to review" (date, link, paraphrased note) and reply "Saved to the TikTok inbox (<N> waiting)."
4. **Anything that needs Sam's computer** (Search Console, Bing, dashboards, logins) goes on docs/computer-jobs.md. Never skip it silently. Sam runs that list daily ("Good morning Tuesday…").
5. Plain words in every message; explain jargon.
