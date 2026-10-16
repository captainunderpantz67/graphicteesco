#!/usr/bin/env python3
"""hoodie-spec.py <out.json> <title> <handle> <slug> "<primary keyword>" "<seo title>" "<seo description>" "<hook line>" "<art paragraph>" "<wear paragraph>" "<q1|a1>" "<q2|a2>" [colors=Sand,Sport Grey]
Builds the standard Pullover Gildan 18500 (#146) spec (S-3XL, $39.99/$44.99, tags christmas-hoodies + hoodie) for scripts/mkvars.py."""
import json, sys
o, title, handle, slug, kw, st, sd, hook, art, wear, q1, q2 = sys.argv[1:13]
cols = sys.argv[13].split(',') if len(sys.argv) > 13 else ['Sand', 'Sport Grey']
qs = ''.join(f"<p><strong>{q.split('|')[0]}</strong><br>{q.split('|')[1]}</p>" for q in (q1, q2))
size_q = f"<p><strong>How does it fit?</strong><br>It is a classic unisex cut in S through 3XL. Order your usual size, or go up one for a roomier fit over layers.</p>"
h = (f"<h3>The Story</h3>\n<p>{hook}</p>\n<p>{art}</p>\n<p>{wear} Original art, made for Graphic Tees Co. and printed the day you order it.</p>\n"
     "<h3>Details &amp; Fit</h3>\n<ul>\n<li>Classic unisex fit, pullover with a double-lined hood and matching drawcord</li>\n<li>50% pre-shrunk cotton, 50% polyester</li>\n<li>Fabric weight: 8.0 oz/yd²</li>\n<li>Air-jet spun yarn with a soft feel</li>\n<li>Front pouch pocket, ribbed cuffs and waistband with spandex</li>\n<li>Sizes S–3XL</li>\n"
     f"<li>Colors: {', '.join(cols)}</li>\n<li>Blank product sourced from Bangladesh, Nicaragua, Honduras or El Salvador</li>\n</ul>\n<h3>Questions</h3>\n{qs}{size_q}").replace('</p><p>', '</p>\n<p>')
s = {"title": title, "handle": handle, "slug": slug, "catalog": 146, "colors": cols, "sizes": ["S", "M", "L", "XL", "2XL", "3XL"], "price": "39.99", "compare": "44.99",
     "productType": "Hoodie", "tags": ["christmas-hoodies", "hoodie", "ai-art", "intake-done"], "seo": {"title": st, "description": sd}, "descriptionHtml": h}
json.dump(s, open(o, 'w'))
