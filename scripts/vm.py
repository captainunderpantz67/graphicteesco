#!/usr/bin/env python3
"""vm.py <first variant id> <first media id> <colors> [sizes=6]: variantMedia JSON for productVariantAppendMedia (ids step by 32768 in creation order)"""
import json,sys
v0,m0,n=int(sys.argv[1]),int(sys.argv[2]),int(sys.argv[3]); s=int(sys.argv[4]) if len(sys.argv)>4 else 6
print(json.dumps([{'variantId':f'gid://shopify/ProductVariant/{v0+32768*(c*s+z)}','mediaIds':[f'gid://shopify/MediaImage/{m0+32768*c}']} for c in range(n) for z in range(s)],separators=(',',':')))
