#!/usr/bin/env python3
"""e-append.py <product gid number> <first variant number> <first media number>: productVariantAppendMedia mutation for an e-new.py tee (8 colors x 7 sizes, media in color order)."""
import sys
p, v0, m0 = map(int, sys.argv[1:4])
vm = ['{variantId:"gid://shopify/ProductVariant/%d",mediaIds:["gid://shopify/MediaImage/%d"]}' % (v0 + 32768 * i, m0 + 32768 * (i // 7)) for i in range(56)]
print('mutation{ a: productVariantAppendMedia(productId:"gid://shopify/Product/%d", variantMedia:[%s]){ userErrors{field message} } }' % (p, ','.join(vm)))
