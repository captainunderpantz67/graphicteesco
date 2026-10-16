# Google-compliance + trust (queued 2026-10-16, do at tonight's restart)

Code (Claude, no Sam needed):
1. Variant-specific landing URLs: feed `link` = /products/<handle>/?color=<color>; product page preselects color (and size if given) from the query string; canonical stays the clean URL.
2. AI-generated image labels: embed IPTC/XMP DigitalSourceType = trainedAlgorithmicMedia in every public/covers/*.webp (and future covers via scripts/fal-photo.py); feed uses lifestyle_image_link for covers (done).
3. ProductGroup / hasVariant / variesBy (color, size) schema on product pages.
4. Organization-level shipping + return markup (hasShippingService / ShippingConditions: free at orderValue >= 45, else 4.95 tees / 8.79 fleece; MerchantReturnPolicy at org level).
5. Sitemap lastmod (real product updatedAt / build date for static pages) + image sitemap entries.
6. Supplemental feed: question_and_answer (from product FAQs), related_product (tee/crewneck/hoodie twins), item_group_title, variant_option; register in Merchant Center as a supplemental source.

Sam (tonight, 7–9):
7. About page: photo of Sam + brother and a few lines (Texoma story) -> Claude writes the page with Person/Organization schema.
8. Merchant Center: sign up for Google Customer Reviews (opt-in survey script on the order confirmation page; Claude adds it via Shopify checkout extensibility / order status additional scripts).
9. Merchant Center: Promotions -> holiday sale (tees $24.99 / crewnecks $34.99, through Nov 30).

Also pending: Printful billing card; Shopify Google app product sync OFF (avoid duplicates of our feed).
