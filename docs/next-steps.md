# Next steps (written 2026-10-08 ~9:20 PM CT — Sam's usage at 93%, resets in ~3h45m)

## Priority 1 — keep the cloud builder building (no action needed)
- Scheduled routine trig_01J8hDnXp2Y1yC3kzPi9Q7Xx runs every 2h (env "graphicteesco" env_01W1YZz5EmBLLjdz6PQiatLA, keys set) and follows docs/cloud-build-loop.md.
- It pushes in batches of 5; Netlify won't deploy until hosting is fixed, but all work is saved in GitHub + Shopify + Printful.
- Next run should first restore ONE back-view shot per product (CAROUSEL FIX), then build briefs.
- Note: cloud runs use the same Claude usage as Sam — if usage is exhausted a run may fail to start; the next 2h tick retries.

## Priority 2 — move hosting Netlify → Cloudflare Pages (do after usage resets)
Why: Netlify team "jcinc" ran out of build credits; production deploys are paused ("Skipped due to account credit usage exceeded"). Live site frozen at main@663886a (2026-10-08 morning).
1. Cloudflare dashboard (Sam is logged in, Chrome): Workers & Pages → Create → Pages → Connect to Git → GitHub captainunderpantz67/graphicteesco (Sam approves the GitHub app grant).
2. Build settings: framework Astro, build command `npm run build`, output `dist`, env NODE_VERSION=22, plus PUBLIC_SHOPIFY_STORE_DOMAIN and PUBLIC_SHOPIFY_STOREFRONT_TOKEN (Sam pastes values — same as Netlify's; open the local .env in TextEdit for him, never in chat).
3. Confirm https://graphicteesco.pages.dev builds and shows all products (Retro Santa incl.).
4. Port netlify.toml behaviour: public/_redirects already works on Pages (same format). Netlify `ignore` rule has no direct equivalent — set Pages "Build watch paths" to include src/**, public/**, package*.json, astro.config.mjs.
5. Nightly rebuild: replace NETLIFY_BUILD_HOOK GitHub secret/workflow with a Cloudflare Pages deploy hook (Settings → Builds → Deploy hooks).
6. DNS (morning, needs Porkbun access — Reverend bought the domain there): preferred = add graphicteesco.com to Cloudflare (free) and change nameservers at Porkbun; fallback = Porkbun ALIAS @ → graphicteesco.pages.dev + CNAME www → graphicteesco.pages.dev. Then add the custom domain in the Pages project.
7. Verify graphicteesco.com serves from Cloudflare (headers `server: cloudflare`), then disable Netlify auto-publish (lock deploys) so nothing double-builds.

## Pending decisions
- Retro Santa cover: woman holds a beer + orange hand saw — consider regenerating with hot cocoa (Sam to decide).
- Pump covers need a heavier oversized blank (not 3001) — margin check at $29.99.
- Search Console verification code — still needed from Sam (do with the DNS step: a Cloudflare-managed domain can verify via DNS TXT).
- Rotate the fal key and Printful token at some point (both were pasted in chat).
