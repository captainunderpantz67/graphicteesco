#!/usr/bin/env python3
"""Build productSet variables (DRAFT) from a spec file; prints compact JSON to pass to the Shopify MCP.
spec: {title, handle, slug, catalog (Printful product id), colors[], sizes[] (optional), price, compare, tags[], seo{title,description}, descriptionHtml, productType}"""
import json, os, sys, urllib.request
s = json.load(open(sys.argv[1]))
T = os.environ['PRINTFUL_TOKEN']
cat = json.load(urllib.request.urlopen(urllib.request.Request(f'https://api.printful.com/products/{s["catalog"]}', headers={'Authorization': 'Bearer ' + T, 'User-Agent': 'gtc-builder'})))['result']['variants']
ORDER = ['XS','S','M','L','XL','2XL','3XL','4XL','5XL']
by = {}
for v in cat: by.setdefault(v['color'], {})[v['size']] = v['id']
vars_ = []
for c in s['colors']:
    for z in sorted(by[c], key=lambda z: ORDER.index(z) if z in ORDER else 99):
        if s.get('sizes') and z not in s['sizes']: continue
        vars_.append({'optionValues': [{'optionName': 'Color', 'name': c}, {'optionName': 'Size', 'name': z}],
                      'sku': f'{s["slug"]}-{by[c][z]}', 'price': s['price'], **({'compareAtPrice': s['compare']} if s.get('compare') else {})})
sizes = list(dict.fromkeys(z['optionValues'][1]['name'] for z in vars_))
inp = {'title': s['title'], 'handle': s['handle'], 'status': 'DRAFT', 'vendor': 'Graphic Tees Co.', 'productType': s['productType'],
       'tags': s['tags'], 'descriptionHtml': s['descriptionHtml'], 'seo': s['seo'],
       'productOptions': [{'name': 'Color', 'values': [{'name': c} for c in s['colors']]}, {'name': 'Size', 'values': [{'name': z} for z in sizes]}],
       'variants': vars_}
print(json.dumps({'input': inp}, separators=(',', ':'), ensure_ascii=False))
sys.stderr.write(f'{len(vars_)} variants\n')
