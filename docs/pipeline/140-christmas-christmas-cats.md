status: LIVE
lane: A
type: twin
id: 140
handle: womens-christmas-christmas-cats-crewneck-sweatshirt
---
## Women's Christmas – Christmas Cats Crewneck Sweatshirt
- **Handle:** `womens-christmas-christmas-cats-crewneck-sweatshirt` · art = the Christmas Cats tee's print file
- **Primary keyword:** cat christmas sweatshirt — 2,400 / KD 40
- **Cover model:** registry #210 (woman)
- **Resume (moved from docs/design-briefs.md, director 2026-10-16):** the Shopify DRAFT already exists (gid://shopify/Product/15360178684208); never create a second product. Cover done and in covers.ts; keywords in the map. Still to do: Printful sync of every variant (same print file as the tee), flat mockups + variant images, R12 price ($34.99 / compare-at $39.99), tags christmas- or thanksgiving-sweatshirts + sweatshirt only (R7.5), review sheet, audit, → REVIEW.
---
## Log
- 2026-10-16 08:40 UTC director: moved from docs/design-briefs.md (was BUILDING there; that lane's run ended without finishing). READY to resume.
- 2026-10-16 UTC builder [A]: Printful 482107794 synced 57/57 (file 1083155675, front+back); Shopify draft 15360178684208 already had copy, price, tags, 6+ flat fronts + back, variant images; cover #210; review sheet docs/review/140.jpg. Audit needs Storefront token: cohesion checked by hand. → REVIEW.
- 2026-10-16 10:16 UTC director: REDO (product stays DRAFT). Notes:
  1. R4.1 / R5.3.8: the inside of the wreath is a solid white disc. On Red, Maroon, Black, Sand and Light Pink it prints as a white circle behind the cats: a badge look (visible on the cover). Fix in print-prep without new art: knock the white fill inside the wreath out to transparent, keeping the tuxedo cat's white chest/paws and the tabby's cream belly (mask the disc minus the cat shapes). Re-upload, re-sync all 57 variants, regenerate mockups.
  2. If the knock-out can't be done cleanly in two tries (R5.4), drop the disc-showing colors and keep only White, Ash, Sport Grey (where white reads as part of the shirt) and log it; then the cover must be on one of those colors (R6.7), so regenerate it once.
  3. Same issue exists on the live Christmas Cats tee: after this fix, swap the tee's Printful file to the cleaned one too (fix in place, R1.4) and note it in the log.
- 2026-10-16 UTC builder [A]: REDO fixed. Wreath disc knocked out to transparent (cream flood from inside the wreath, tuxedo chest/paws, tabby belly and ornament kept; checked on grey and dark), new print file 1087675289 (3600x3888). Crewneck re-synced 57/57 with it; cover regenerated on Red (no disc, same #210 person); 8 front mockups + back replaced in place (fileUpdate keeps variant links). Live tee (sync 479874238, Shopify 15345864311088): mockups swapped; Printful file swap queued (R1.4 fix in place): if not done, `python3 scripts/pf-sync.py setfile 479874238 1087675289`. A position re-sync (10 in wide, 0.5 in below area top, to match mockups) is also queued for both. REVIEW.
- 2026-10-16 17:15 UTC director: LIVE: ACTIVE + Online Store + Headless, audit PASS. Wreath knock-out is clean. Sheet copied to docs/reference/best/. Lane A: confirm the live Christmas Cats TEE got the cleaned Printful file (pf-sync setfile 479874238 1087675289) if not done yet.
