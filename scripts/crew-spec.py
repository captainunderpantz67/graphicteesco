#!/usr/bin/env python3
"""crew-spec.py <out.json> <title> <handle> <slug> "<seo title>" "<seo description>" "<hook>" "<art paragraph>" "<wear paragraph>" "<q1|a1#q2|a2#q3|a3>" [colors=White,Sand,Light Pink,Sport Grey,Ash]
Standard Gildan 18000 (#145) crewneck spec (S-3XL, $34.99/$39.99, tags christmas-sweatshirts + sweatshirt) for scripts/mkvars.py."""
import json, sys
o, title, handle, slug, st, sd, hook, art, wear, qq = sys.argv[1:11]
cols = sys.argv[11].split(',') if len(sys.argv) > 11 else ['White', 'Sand', 'Light Pink', 'Sport Grey', 'Ash']
qs = ''.join(f"<p><strong>{q.split('|')[0]}</strong><br>{q.split('|')[1]}</p>\n" for q in qq.split("#"))
h = (f"<h3>The Story</h3>\n<p>{hook}</p>\n<p>{art}</p>\n<p>{wear} Original art, made for Graphic Tees Co. and printed the day you order it.</p>\n"
     "<h3>Details &amp; Fit</h3>\n<ul>\n<li>Classic unisex crewneck sweatshirt fit</li>\n<li>50% cotton, 50% polyester fleece</li>\n<li>Fabric weight: 8 oz/yd²</li>\n<li>Ribbed crew neck, cuffs and waistband; no hood, no pockets</li>\n<li>Sizes S–3XL</li>\n"
     f"<li>{len(cols)} colors: {', '.join(cols)}</li>\n</ul>\n<h3>Questions</h3>\n{qs}").rstrip('\n')
s = {"title": title, "handle": handle, "slug": slug, "catalog": 145, "colors": cols, "sizes": ["S", "M", "L", "XL", "2XL", "3XL"], "price": "34.99", "compare": "39.99",
     "productType": "Sweatshirt", "tags": ["christmas-sweatshirts", "sweatshirt", "ai-art", "intake-done"], "seo": {"title": st, "description": sd}, "descriptionHtml": h}
json.dump(s, open(o, 'w'))
