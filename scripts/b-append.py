#!/usr/bin/env python3
"""b-append.py <product number> <first variant number> <first new media number> [colors=3] [sizes=6]: prints the productVariantAppendMedia mutation."""
import sys
p, v0, m0 = map(int, sys.argv[1:4]); nc = int(sys.argv[4]) if len(sys.argv) > 4 else 3; ns = int(sys.argv[5]) if len(sys.argv) > 5 else 6
print('mutation{ a: productVariantAppendMedia(productId:"gid://shopify/Product/%d", variantMedia:[' % p + ','.join('{variantId:"gid://shopify/ProductVariant/%d",mediaIds:["gid://shopify/MediaImage/%d"]}' % (v0 + 32768 * i, m0 + 32768 * (i // ns)) for i in range(nc * ns)) + ']){ userErrors{field message} } }')
