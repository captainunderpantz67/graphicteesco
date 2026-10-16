#!/usr/bin/env python3
"""b-spec.py <in.json> <out.json>: lane B hoodie spec for scripts/mkvars.py.
in.json: {title, handle, slug, blank: pullover|zip|heavy, colors[], tags[], kw, seo_title, seo_desc, hook, art, wear, faq[[q,a],..]}"""
import json, sys
i = json.load(open(sys.argv[1]))
B = {
 'pullover': dict(catalog=146, price='39.99', compare='44.99', details=['Classic fit pullover hoodie with a front pouch pocket', '50% pre-shrunk cotton, 50% polyester', 'Fabric weight: 8 oz/yd²', 'Double-lined hood with matching drawcord', 'Quarter-turned body to avoid a crease down the middle', 'Rib-knit cuffs and waistband with spandex', 'Sizes S–5XL (Sand runs S–3XL)'], origin='Bangladesh, Nicaragua, Honduras or El Salvador'),
 'zip': dict(catalog=692, price='44.99', compare='49.99', details=['Regular fit zip-up hoodie with a metal zipper', '50% cotton, 50% polyester fleece, soft inside and outside', 'Fabric weight: 8 oz/yd²', 'Front pouch pockets and an unlined hood with color-matched drawcord', 'Double-needle stitching at shoulders, armholes, neck, waistband and cuffs', 'Sizes S–5XL (Ash runs S–3XL)'], origin='Honduras and El Salvador'),
 'heavy': dict(catalog=1543, price='49.99', compare='54.99', details=['Heavyweight fleece hoodie with a relaxed fit for easy layering', 'Cotton and polyester blend fleece fabric', 'Fabric weight: 10 oz/yd²', 'Soft fleece-lined hood', 'Ribbed cuffs and waistband, durable double-stitched seams', 'Tear-away label', 'Sizes XS–3XL'], origin='Pakistan'),
}
b = B[i['blank']]; cols = i['colors']
lis = ''.join(f'<li>{d}</li>\n' for d in b['details'])
qs = ''.join(f'<p><strong>{q}</strong><br>{a}</p>\n' for q, a in i['faq'])
h = (f"<h3>The Story</h3>\n<p>{i['hook']}</p>\n<p>{i['art']} {i['wear']} Original art, made for Graphic Tees Co. and printed the day you order it.</p>\n"
     f"<h3>Details &amp; Fit</h3>\n<ul>\n{lis}<li>{len(cols)} colors: {' and '.join(cols)}</li>\n<li>Blank product sourced from {b['origin']}</li>\n</ul>\n<h3>Questions</h3>\n{qs}").rstrip('\n')
s = {'title': i['title'], 'handle': i['handle'], 'slug': i['slug'], 'catalog': b['catalog'], 'colors': cols, 'price': b['price'], 'compare': b['compare'],
     'productType': 'Hoodie', 'tags': i['tags'], 'seo': {'title': i['seo_title'], 'description': i['seo_desc']}, 'descriptionHtml': h}
assert len(i['seo_title']) <= 60 and len(i['seo_desc']) <= 155, (len(i['seo_title']), len(i['seo_desc']))
json.dump(s, open(sys.argv[2], 'w'), ensure_ascii=False)
