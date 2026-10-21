#!/usr/bin/env python3
"""c-link.py <product numeric id> <first variant numeric id> <black front media id> <navy front media id> <ash front media id>: prints the productVariantsBulkUpdate variables (variants are consecutive, step 32768; order Black x6, Navy x6, Ash x6)"""
import json, sys
p, v0, mb, mn, ma = sys.argv[1:6]; v0 = int(v0); v = []
for i in range(18):
    m = (mb, mn, ma)[i // 6]
    v.append({'id': f'gid://shopify/ProductVariant/{v0 + 32768 * i}', 'mediaId': f'gid://shopify/MediaImage/{m}'})
print(json.dumps({'pid': f'gid://shopify/Product/{p}', 'v': v}, separators=(',', ':')))
