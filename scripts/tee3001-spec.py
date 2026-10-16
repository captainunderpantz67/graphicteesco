#!/usr/bin/env python3
"""tee3001-spec.py <out.json> <in.json>: builds the men's/unisex tee (Bella+Canvas 3001, Printful #71, S-4XL, $24.99/$29.99) spec for scripts/mkvars.py.
in.json: {title, handle, hook, art, wear, qa: [[q, a], ...], colors[], tags[], seo{title,description}, noun: 'Thanksgiving'|'Christmas'|..., why_no_dark: optional text}"""
import json, sys
i = json.load(open(sys.argv[2])); cols = i.get('colors') or ['White', 'Natural', 'Ash', 'Athletic Heather', 'Heather Dust', 'Tan']
qa = ''.join(f"<p><strong>{q}</strong><br>{a}</p>\n" for q, a in i['qa'])
fit = ("<p><strong>How does it fit?</strong><br>It is a classic unisex cut in S through 4XL. Order your usual size for a regular fit or size up for a looser one.</p>")
d = (f"<h3>The Story</h3>\n<p>{i['hook']}</p>\n<p>{i['art']}</p>\n<p>{i['wear']} Original art, made for Graphic Tees Co. and printed the day you order it.</p>\n"
     "<h3>Details &amp; Fit</h3>\n<ul>\n<li>Classic unisex fit, crew neck</li>\n<li>100% combed, ring-spun cotton (heather colors contain polyester)</li>\n<li>Fabric weight: 4.2 oz/yd² — lightweight</li>\n<li>Pre-shrunk, side-seamed construction, shoulder-to-shoulder taping</li>\n<li>Sizes S–4XL</li>\n"
     f"<li>Colors: {', '.join(cols)}</li>\n<li>Blank product sourced from Nicaragua, Honduras, or the US</li>\n</ul>\n<h3>Questions</h3>\n{qa}{fit}")
s = {"title": i['title'], "handle": i['handle'], "slug": i['handle'], "catalog": 71, "colors": cols, "sizes": ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], "price": "24.99", "compare": "29.99",
     "productType": "T-Shirt", "tags": i['tags'], "seo": i['seo'], "descriptionHtml": d}
json.dump(s, open(sys.argv[1], 'w'))
print(len(s['seo']['title']), len(s['seo']['description']))
