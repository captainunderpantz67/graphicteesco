#!/usr/bin/env python3
"""b-media.py <vars.json> <mk.json> <alt base> <first variant gid number> <first media gid number> <Color=mkVariantId>... [--emb]
Prints (1) productCreateMedia variables (one front image per color + the back view of the first color) and
(2) the productVariantAppendMedia mutation. Shopify hands out variant and media ids in steps of 32768, so only the first of each is needed.
mk.json is a scripts/pf-mockup.py output (front:main/back:main) or, with --emb, a scripts/pf-emb-mockup.py output (front/back)."""
import sys, json
A = [a for a in sys.argv[1:] if a != '--emb']; emb = '--emb' in sys.argv
vars_, mk, base, v0, m0 = A[:5]; pairs = [p.split('=') for p in A[5:]]; v0, m0 = int(v0), int(m0)
d = json.load(open(vars_))['input']; mk = json.load(open(mk))
fk, bk = ('front', 'back') if emb else ('front:main', 'back:main')
media = [{'originalSource': mk[vid][fk], 'alt': f'{base}, {c}, front view', 'mediaContentType': 'IMAGE'} for c, vid in pairs]
media.append({'originalSource': mk[pairs[0][1]][bk], 'alt': f'{base}, back view with Graphic Tees Co. neck logo', 'mediaContentType': 'IMAGE'})
print(json.dumps(media))
cols = [c for c, _ in pairs]; vm = []
for i, v in enumerate(d['variants']):
    c = v['optionValues'][0]['name']; vm.append('{variantId:"gid://shopify/ProductVariant/%d",mediaIds:["gid://shopify/MediaImage/%d"]}' % (v0 + 32768 * i, m0 + 32768 * cols.index(c)))
print('mutation{ a: productVariantAppendMedia(productId:"PRODUCT", variantMedia:[' + ','.join(vm) + ']){ userErrors{field message} } }')
