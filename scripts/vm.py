#!/usr/bin/env python3
"""vm.py <first variant id> <first media id> <sizes per color, e.g. 6,6,5,6,6 or 5x6>: variantMedia JSON for productVariantAppendMedia (ids step by 32768 in creation order)"""
import json,sys
v,m=int(sys.argv[1]),int(sys.argv[2]); a=sys.argv[3]
sz=[int(a.split('x')[1])]*int(a.split('x')[0]) if 'x' in a else [int(x) for x in a.split(',')]
e=[]
for c,n in enumerate(sz):
    for _ in range(n): e.append({'variantId':f'gid://shopify/ProductVariant/{v}','mediaIds':[f'gid://shopify/MediaImage/{m+32768*c}']}); v+=32768
print(json.dumps(e,separators=(',',':')))
