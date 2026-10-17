#!/usr/bin/env python3
"""b-aopvars.py <in.json> <out vars.json>: productSet variables for a Printful all-over-print product (catalog 1419 hoodie / 1418 sweatshirt), Size option only.
in.json: {title, handle, slug, catalog, price, compare, tags[], seo_title, seo_desc, hook, art, wear, faq[[q,a]..], details[], productType, origin}"""
import json, sys, os, urllib.request
i = json.load(open(sys.argv[1])); T = os.environ['PRINTFUL_TOKEN']
cat = json.load(urllib.request.urlopen(urllib.request.Request(f'https://api.printful.com/products/{i["catalog"]}', headers={'Authorization': 'Bearer ' + T, 'User-Agent': 'gtc-builder'})))['result']['variants']
ORDER = ['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL']
by = {v['size']: v['id'] for v in cat}; sizes = [z for z in ORDER if z in by]
assert len(i['seo_title']) <= 60 and len(i['seo_desc']) <= 155, (len(i['seo_title']), len(i['seo_desc']))
lis = ''.join(f'<li>{d}</li>\n' for d in i['details'])
qs = ''.join(f'<p><strong>{q}</strong><br>{a}</p>\n' for q, a in i['faq'])
h = (f"<h3>The Story</h3>\n<p>{i['hook']}</p>\n<p>{i['art']} {i['wear']} Original art, made for Graphic Tees Co. and printed the day you order it.</p>\n"
     f"<h3>Details &amp; Fit</h3>\n<ul>\n{lis}</ul>\n<h3>Questions</h3>\n{qs}").rstrip('\n')
v = [{'optionValues': [{'optionName': 'Size', 'name': z}], 'sku': f'{i["slug"]}-{by[z]}', 'price': i['price'], 'compareAtPrice': i['compare']} for z in sizes]
inp = {'title': i['title'], 'handle': i['handle'], 'status': 'DRAFT', 'vendor': 'Graphic Tees Co.', 'productType': i.get('productType', 'Hoodie'), 'tags': i['tags'], 'descriptionHtml': h,
       'seo': {'title': i['seo_title'], 'description': i['seo_desc']}, 'productOptions': [{'name': 'Size', 'values': [{'name': z} for z in sizes]}], 'variants': v}
json.dump({'input': inp}, open(sys.argv[2], 'w'), separators=(',', ':'), ensure_ascii=False)
spec = {'title': i['title'], 'handle': i['handle'], 'slug': i['slug'], 'catalog': i['catalog'], 'colors': ['Pink Camo'], 'price': i['price'], 'compare': i['compare'], 'productType': inp['productType'],
        'tags': i['tags'], 'seo': inp['seo'], 'descriptionHtml': h}
json.dump(spec, open(sys.argv[2].replace('vars', 'spec'), 'w'), ensure_ascii=False)
print([(x['sku'].split('-')[-1], x['optionValues'][0]['name']) for x in v]); print(len(v), 'variants')
