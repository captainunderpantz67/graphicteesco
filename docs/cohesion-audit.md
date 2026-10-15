# Cohesion audit — 2026-10-15 15:41 UTC

115 live products checked · **47 errors** · 24 warnings · 44 products with findings

ERROR = a shopper or Google would see something wrong (wrong person, wrong garment, wrong grid, wrong price, missing photos, keyword collision). Fix before anything new ships. WARN = polish.

## Errors by type
- 23 × Crewneck sweatshirt listed in the tee collection .
- 9 × Unisex product in a Women's Graphic Tees page, but the cover shows onl
- 4 × Unisex product in a Women's Graphic Tees, Women's Christmas Shirts pag
- 4 × Unisex product in a Women's Graphic Tees, Country Graphic Tees page, b
- 4 × No product photos — page shows a blank placeholder.
- 3 × Unisex product in a Men's Graphic Tees page, but the cover shows only 

## By product (errors first)
### Unisex Christmas – Upland Christmas Pheasant Crewneck Sweatshirt `unisex-christmas-upland-christmas-pheasant-crewneck-sweatshirt`
- **WARN** No lifestyle cover photo. → Generate one (fal) in the product's world and add it to covers.ts.
- **ERROR** Crewneck sweatshirt listed in the tee collection "Men's Graphic Tees". → Remove the tag that puts it in graphic-tees-for-men; it belongs in the matching *-sweatshirts collection.
- **ERROR** Crewneck sweatshirt listed in the tee collection "Hunting Tees". → Remove the tag that puts it in hunting-t-shirts; it belongs in the matching *-sweatshirts collection.
- **ERROR** Crewneck sweatshirt listed in the tee collection "Christmas Tees". → Remove the tag that puts it in christmas-shirts; it belongs in the matching *-sweatshirts collection.
- **ERROR** No product photos — page shows a blank placeholder. → Finish Printful mockups, or set the product to DRAFT until done.
- **WARN** No entry in docs/product-keyword-map.json (no measured primary keyword recorded). → Run scripts/keyword-gap.py and record its phrases.

### Women's Christmas – Christmas on the Farm Horse Crewneck Sweatshirt `womens-christmas-christmas-on-the-farm-horse-crewneck-sweatshirt`
- **WARN** No lifestyle cover photo. → Generate one (fal) in the product's world and add it to covers.ts.
- **ERROR** Crewneck sweatshirt listed in the tee collection "Christmas Tees". → Remove the tag that puts it in christmas-shirts; it belongs in the matching *-sweatshirts collection.
- **ERROR** Crewneck sweatshirt listed in the tee collection "Women's Christmas Shirts". → Remove the tag that puts it in christmas-shirts-for-women; it belongs in the matching *-sweatshirts collection.
- **ERROR** No product photos — page shows a blank placeholder. → Finish Printful mockups, or set the product to DRAFT until done.
- **WARN** No entry in docs/product-keyword-map.json (no measured primary keyword recorded). → Run scripts/keyword-gap.py and record its phrases.

### Women's Christmas – Merry & Bright Trees Crewneck Sweatshirt `womens-christmas-merry-bright-trees-crewneck-sweatshirt`
- **ERROR** Crewneck sweatshirt listed in the tee collection "Christmas Tees". → Remove the tag that puts it in christmas-shirts; it belongs in the matching *-sweatshirts collection.
- **ERROR** Crewneck sweatshirt listed in the tee collection "Women's Christmas Shirts". → Remove the tag that puts it in christmas-shirts-for-women; it belongs in the matching *-sweatshirts collection.

### Unisex Christmas – Christmas Tree Farm Crewneck Sweatshirt `unisex-christmas-christmas-tree-farm-crewneck-sweatshirt`
- **ERROR** Crewneck sweatshirt listed in the tee collection "Christmas Tees". → Remove the tag that puts it in christmas-shirts; it belongs in the matching *-sweatshirts collection.
- **ERROR** Crewneck sweatshirt listed in the tee collection "Women's Christmas Shirts". → Remove the tag that puts it in christmas-shirts-for-women; it belongs in the matching *-sweatshirts collection.

### Women's Christmas – Cardinal Christmas Crewneck Sweatshirt `womens-christmas-cardinal-christmas-crewneck-sweatshirt`
- **ERROR** Crewneck sweatshirt listed in the tee collection "Christmas Tees". → Remove the tag that puts it in christmas-shirts; it belongs in the matching *-sweatshirts collection.
- **ERROR** Crewneck sweatshirt listed in the tee collection "Women's Christmas Shirts". → Remove the tag that puts it in christmas-shirts-for-women; it belongs in the matching *-sweatshirts collection.

### Unisex Christmas – Christmas Ski Lodge Crewneck Sweatshirt `unisex-christmas-christmas-ski-lodge-crewneck-sweatshirt`
- **ERROR** Crewneck sweatshirt listed in the tee collection "Men's Graphic Tees". → Remove the tag that puts it in graphic-tees-for-men; it belongs in the matching *-sweatshirts collection.
- **ERROR** Crewneck sweatshirt listed in the tee collection "Christmas Tees". → Remove the tag that puts it in christmas-shirts; it belongs in the matching *-sweatshirts collection.

### Unisex Christmas – North Woods Moose Crewneck Sweatshirt `unisex-christmas-north-woods-moose-crewneck-sweatshirt`
- **ERROR** Crewneck sweatshirt listed in the tee collection "Men's Graphic Tees". → Remove the tag that puts it in graphic-tees-for-men; it belongs in the matching *-sweatshirts collection.
- **ERROR** Crewneck sweatshirt listed in the tee collection "Christmas Tees". → Remove the tag that puts it in christmas-shirts; it belongs in the matching *-sweatshirts collection.

### Women's Christmas – Winter Woods Fox Crewneck Sweatshirt `womens-christmas-winter-woods-fox-crewneck-sweatshirt`
- **ERROR** Crewneck sweatshirt listed in the tee collection "Christmas Tees". → Remove the tag that puts it in christmas-shirts; it belongs in the matching *-sweatshirts collection.
- **ERROR** Crewneck sweatshirt listed in the tee collection "Women's Christmas Shirts". → Remove the tag that puts it in christmas-shirts-for-women; it belongs in the matching *-sweatshirts collection.

### Unisex Christmas – Mountain Christmas Bear Crewneck Sweatshirt `unisex-christmas-mountain-christmas-bear-crewneck-sweatshirt`
- **ERROR** Crewneck sweatshirt listed in the tee collection "Men's Graphic Tees". → Remove the tag that puts it in graphic-tees-for-men; it belongs in the matching *-sweatshirts collection.
- **ERROR** Crewneck sweatshirt listed in the tee collection "Christmas Tees". → Remove the tag that puts it in christmas-shirts; it belongs in the matching *-sweatshirts collection.

### Women's Christmas – Golden Retriever Christmas Crewneck Sweatshirt `womens-christmas-golden-retriever-christmas-crewneck-sweatshirt`
- **ERROR** Crewneck sweatshirt listed in the tee collection "Christmas Tees". → Remove the tag that puts it in christmas-shirts; it belongs in the matching *-sweatshirts collection.
- **ERROR** Crewneck sweatshirt listed in the tee collection "Women's Christmas Shirts". → Remove the tag that puts it in christmas-shirts-for-women; it belongs in the matching *-sweatshirts collection.

### Unisex Halloween – Night Shift Tee `unisex-halloween-night-shift-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Halloween – Haunted Hollow Tee `unisex-halloween-haunted-hollow-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Halloween – Midnight Feature Tee `unisex-halloween-midnight-feature-graphic-tee`
- **ERROR** Unisex product in a Men's Graphic Tees page, but the cover shows only a woman. → Regenerate the cover with a man AND a woman (unisex rule).
- **WARN** No meta description. → Write one ≤ 155 chars.

### Unisex Christmas – Fresh Cut Christmas Trees Tee `unisex-christmas-fresh-cut-christmas-trees-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees, Women's Christmas Shirts page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).
- **WARN** SEO title is 67 chars (> 60). → Trim to ≤ 60.

### Unisex Christmas – Cabin Christmas Tee `unisex-christmas-cabin-christmas-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees, Women's Christmas Shirts page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).
- **WARN** SEO title is 64 chars (> 60). → Trim to ≤ 60.
- **WARN** No meta description. → Write one ≤ 155 chars.

### Unisex Western – Desert Rider Tee `unisex-western-desert-rider-graphic-tee`
- **ERROR** Unisex product in a Men's Graphic Tees page, but the cover shows only a woman. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Western – Hold On Eight Tee `unisex-western-hold-on-eight-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees, Country Graphic Tees page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Western – Vintage Bison Tee `unisex-western-vintage-bison-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees, Country Graphic Tees page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Western – Saddle Blanket Steer Tee `unisex-western-saddle-blanket-steer-graphic-tee`
- **ERROR** Unisex product in a Men's Graphic Tees page, but the cover shows only a woman. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Western – Desert Rattler Tee `unisex-western-desert-rattler-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees, Country Graphic Tees page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Western – Lucky Horseshoe Tee `unisex-western-lucky-horseshoe-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees, Country Graphic Tees page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Thanksgiving – Turkey Trot Tee `unisex-thanksgiving-turkey-trot-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Thanksgiving – Leftovers Club Tee `unisex-thanksgiving-leftovers-club-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Christmas – Vintage Santa Tee `unisex-christmas-vintage-santa-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees, Women's Christmas Shirts page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Thanksgiving – Give Thanks Harvest Tee `unisex-thanksgiving-give-thanks-harvest-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Thanksgiving – Give Thanks Harvest Crewneck Sweatshirt `unisex-thanksgiving-give-thanks-harvest-crewneck-sweatshirt`
- **ERROR** Crewneck sweatshirt listed in the tee collection "Thanksgiving Tees". → Remove the tag that puts it in thanksgiving-shirts; it belongs in the matching *-sweatshirts collection.

### Unisex Fishing – Lake Life Tee `unisex-fishing-lake-life-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Christmas – Deer Camp Christmas Crewneck Sweatshirt `unisex-christmas-deer-camp-christmas-crewneck-sweatshirt`
- **ERROR** Crewneck sweatshirt listed in the tee collection "Christmas Tees". → Remove the tag that puts it in christmas-shirts; it belongs in the matching *-sweatshirts collection.

### Unisex Christmas – Christmas Tree Farm Tee `unisex-christmas-christmas-tree-farm-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees, Women's Christmas Shirts page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Christmas – Christmas Ski Lodge Tee `unisex-christmas-christmas-ski-lodge-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Christmas – North Woods Moose Tee `unisex-christmas-north-woods-moose-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Christmas – Mountain Christmas Bear Tee `unisex-christmas-mountain-christmas-bear-graphic-tee`
- **ERROR** Unisex product in a Women's Graphic Tees page, but the cover shows only a man. → Regenerate the cover with a man AND a woman (unisex rule).

### Unisex Christmas – Upland Christmas Pheasant Tee `unisex-christmas-upland-christmas-pheasant-graphic-tee`
- **WARN** No lifestyle cover photo. → Generate one (fal) in the product's world and add it to covers.ts.
- **ERROR** No product photos — page shows a blank placeholder. → Finish Printful mockups, or set the product to DRAFT until done.
- **WARN** No entry in docs/product-keyword-map.json (no measured primary keyword recorded). → Run scripts/keyword-gap.py and record its phrases.

### Women's Christmas – Christmas on the Farm Horse Tee `womens-christmas-christmas-on-the-farm-horse-graphic-tee`
- **WARN** No lifestyle cover photo. → Generate one (fal) in the product's world and add it to covers.ts.
- **ERROR** No product photos — page shows a blank placeholder. → Finish Printful mockups, or set the product to DRAFT until done.
- **WARN** No entry in docs/product-keyword-map.json (no measured primary keyword recorded). → Run scripts/keyword-gap.py and record its phrases.

### Men's Fishing – Sunrise Strike Tee `mens-fishing-sunrise-strike-graphic-tee`
- **WARN** No meta description. → Write one ≤ 155 chars.

### Men's Gym – Barbell Club Tee `mens-gym-barbell-club-graphic-tee`
- **WARN** No meta description. → Write one ≤ 155 chars.

### Women's Thanksgiving – Give Thanks Tee `womens-thanksgiving-give-thanks-graphic-tee`
- **WARN** SEO title is 63 chars (> 60). → Trim to ≤ 60.
- **WARN** No meta description. → Write one ≤ 155 chars.

### Men's Hunting – First Light Buck Tee `mens-hunting-first-light-buck-graphic-tee`
- **WARN** No meta description. → Write one ≤ 155 chars.

### Men's Hunting – Marsh Morning Tee `mens-hunting-marsh-morning-graphic-tee`
- **WARN** No meta description. → Write one ≤ 155 chars.

### Men's Gym – Iron & Sweat Tee `mens-gym-iron-sweat-graphic-tee`
- **WARN** No meta description. → Write one ≤ 155 chars.

### Women's Nurse – Nurse Life Coffee Tee `womens-nurse-nurse-life-coffee-graphic-tee`
- **WARN** Cover alt text doesn't say who is in the photo. → Start the alt with "Woman…", "Man…" or "Man and woman…".
- **WARN** No meta description. → Write one ≤ 155 chars.

### Women's Country – Sweet Tea & Sunsets Tee `womens-country-sweet-tea-sunsets-graphic-tee`
- **WARN** No meta description. → Write one ≤ 155 chars.

### Women's Christmas – Retro Santa Tee `womens-christmas-retro-santa-graphic-tee`
- **WARN** No meta description. → Write one ≤ 155 chars.

### Men's Gym – Iron Sharpens Iron Tee `mens-gym-iron-sharpens-iron-graphic-tee`
- **WARN** No lifestyle cover photo. → Generate one (fal) in the product's world and add it to covers.ts.
