# Configurator manual test plan

Rules for every test here:
- `PRINTFUL_CONFIRM` is **not** `true`. Every Printful order this plan creates is a **DRAFT**. Never click
  "Confirm" in Printful during testing; delete the drafts when done.
- Pay with the 100% discount code `CUSTOMTEST` (SETUP.md step 6). The Shopify store password must be off for
  checkout to work; turn it back on afterwards if the store is not open yet.
- Use your own phone on cellular (4G/LTE), not Wi-Fi, for at least tests 1, 2 and 4.
- Watch Telegram during the run: every failure must produce exactly one alert; every created order one ping.
- Status for any order: `GET https://graphicteesco.com/api/custom/order?order=<shopify order id>&key=<CUSTOM_ADMIN_KEY>`
  (the order id is the long number in the Shopify admin URL, not the #1042 name).

Automated tests first: `npm test` must be green (28 tests: engine, raster, handoff with mocked Printful/Shopify).

## 1. Happy path, sports mom, two players (phone)
1. Open `/custom/custom-team-shirts/`, pick "Sports mom: name and number".
2. Sport: Volleyball. Players: `Mateja` `78`, tap "+ Add another player", `Luca` `9`.
   Expect: while typing, the preview flips to the **back** and shows the name arching over the number; the
   lower-case name is shown upper-case; typing a 25-letter name shrinks the arch, nothing gets cut off.
3. Colors: tap Navy then Gold. Shirt: Navy. Expect the note "We swapped your two colors…" on the preview and
   "Letters: Gold with a Navy outline" on the check-screen (navy letters would vanish on navy).
4. Sizes: Mateja L, Luca M. Expect "Pick a size for LUCA" if you try to continue with one missing.
5. Check-screen: two proofs (front + back images for each), the read-back says `“MATEJA” over the number 78`
   and `“LUCA” over the number 9`. The Add button stays disabled until the checkbox is ticked.
6. Add to cart → Checkout. In checkout each line shows "Design: Sports mom · Volleyball · Back: MATEJA #78 …".
   Apply `CUSTOMTEST`, complete the order.
7. Within a minute: Telegram "Shopify #… → Printful order … (DRAFT…)". In Printful (the Custom store) open the
   draft: two items, variant Navy L / Navy M, each with a **front and a back file**; open the files: the
   front reads VOLLEYBALL Mom, the backs read MATEJA 78 and LUCA 9. Placement: front starts ~1 in below the
   collar, back fills the middle.
8. Status endpoint: `status: created`, `printful.id` matches, two `lines`.

## 2. Happy path, photo shirt with styling (phone, cellular)
1. `/custom/custom-dog-shirt/` → Pick a photo → choose a normal camera-roll photo of a dog.
   Expect: "Taking the background out…" then the cutout on the shirt within ~30 s on 4G.
2. Tap "Vintage print" → wait → tap "Try another version" twice. Expect the second tap to work and the third
   to say "You've used both redos for this photo" (button disabled, 0 redos left). Tap "Keep it a photo":
   instant (cached), no redo used.
3. Caption `Buddy`, colors Cream + Red, shirt Black, size M, check-screen shows the real print file with the
   dog and BUDDY, add to cart, pay with `CUSTOMTEST`.
4. Printful draft: one item, one front file only (no back), the file is a transparent PNG 3600 px wide.

## 3. Bad photos
1. A screenshot or a 300 px thumbnail → expect "This photo is a little small to print well…" before any upload.
2. A deliberately blurry photo → expect the yellow "This photo looks a little blurry" box with "Use it anyway"
   and "Pick another". "Use it anyway" proceeds.
3. A PDF or HEIC renamed to .jpg → expect "We can't read that file…".
4. A 20 MB photo → the browser shrinks it to 2400 px first, so it should just work; confirm the upload finishes.

## 4. Timeout and offline
1. Start a photo upload, then switch the phone to airplane mode mid-way. Expect "We could not reach the shop.
   Please check your connection and try again." (no spinner stuck, no blank preview). Turn data back on and
   retry: works.
2. In Cloudflare, temporarily set `FAL_KEY` to a wrong value. Upload → expect "The photo service hiccuped.
   Please try again." within seconds and a `fal.error` line in the Cloudflare log. Restore the key.
3. On the check-screen, if finalize is slow, the status reads "Making print files (1 of 2)…" and the button is
   absent until both proofs exist. There is no way to add to cart without a proof.

## 5. Double submit
1. On the check-screen tick the box and tap "Add 2 shirts" twice fast. Expect exactly two lines in the cart
   (not four). The button disables on the first tap.
2. Webhook double delivery: in Shopify admin → Settings → Notifications → Webhooks → the orders/paid webhook →
   "Send test notification" is not signed for a real order, so instead: with `SHOPIFY_ADMIN_TOKEN` set, run the
   retry endpoint twice in a row for the order from test 1:
   `POST …/api/custom/order?order=<id>&key=…&action=retry`. Expect the first response `status: already` (it
   finds the existing Printful order by external id `gtc-<order id>`) and no second draft in Printful.

## 6. Two orders at once
1. Two phones (or a phone and a laptop) each build a different custom shirt and pay with `CUSTOMTEST` within
   the same ten seconds.
2. Expect two Telegram pings, two Printful drafts with external ids `gtc-<id A>` and `gtc-<id B>`, each with
   its own files (open both; make sure names were not swapped).

## 7. Webhook retry
1. Temporarily set `PRINTFUL_TOKEN` to a wrong value in Cloudflare. Place an order with `CUSTOMTEST`.
2. Expect: Telegram "order #… could not reach Printful…", status endpoint `status: failed`, Shopify's webhook
   log shows a 500 and schedules a retry. Restore the token; Shopify's next retry (or the manual retry
   endpoint) creates the draft; status flips to `created`, attempts ≥ 2, exactly one draft in Printful.

## 8. Missing file
1. In the R2 bucket delete `designs/<design id>/back.png` for a design you have in your cart (get the id from
   the cart line property `_design_id`, visible in the Shopify order's "Additional details" after paying, or
   from `/api/custom/finalize`'s response in the browser dev tools).
2. Pay with `CUSTOMTEST`. Expect: **no** Printful order, status `needs-review`, Telegram
   "order #… needs a human: the back print file for design … is missing from storage. Nothing was sent to
   Printful. Reply with: check R2 / remake the design".
3. Also try: change the cart line to a different size in the Shopify cart page before paying (variant no longer
   matches the design) → `needs-review` with "is variant custom-bc3001-… but the design was made for …".

## 9. Mixed cart
1. Add a normal tee from the catalog and a custom tee, pay with `CUSTOMTEST`.
2. Expect: Printful's Shopify-store integration imports the order with the normal tee and shows the custom line
   as an unsynced item it will not fulfil; the Custom store gets a draft with only the custom tee. Do not
   "sync" the unsynced item.

## 10. Shipping webhook (after a draft is confirmed, later, with real money)
When the first real order ships, expect Telegram "… shipped (carrier number); customer notified by Shopify"
and the Shopify order marked fulfilled with tracking. If `SHOPIFY_ADMIN_TOKEN` is not set, expect the
"add tracking in Shopify by hand" alert instead.

## Clean-up
Delete the Printful drafts, archive the test orders in Shopify, delete the `CUSTOMTEST` code, set the store
password back if needed. Keep the R2 files (they are tiny).
