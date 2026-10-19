#!/usr/bin/env python3
"""b-ornament-copy.py <spec.json>: productSet variables (DRAFT) for a Printful #881 ceramic ornament (circle, catalog variant 22782), $14.99, no compare-at.
spec: {name (e.g. 'Pickleball – My Partner Says It Was Out'), kw, handle, tags[], story[3 paras, kw in the first], joke_a (FAQ answer about the joke), source_name, source_url_handle,
       who (short phrase for FAQ), seo{title,description}}"""
import json, re, sys
s = json.load(open(sys.argv[1])); N = s['name'] + ' Ornament'
faq = lambda q, a: f'<p><strong>{q}</strong><br>{a}</p>\n'
src = f'<a href="/products/{s["source_handle"]}">{s["source_name"]}</a>'
d = '<h3>The Story</h3>\n' + ''.join(f'<p>{p}</p>\n' for p in s['story']) + '''<h3>Details &amp; Fit</h3>
<ul>
<li>Glossy ceramic ornament, 100% ceramic, circle shape</li>
<li>Diameter: 2.76 in (7 cm), thickness: 0.125 in (3 mm)</li>
<li>Glossy finish with a white ceramic back</li>
<li>Gold-colored string included, ready to hang on the tree</li>
<li>Sublimation print</li>
<li>Blank product sourced from China</li>
</ul>
<p>Each ornament is made to order. Ceramic is fragile: hang it on a sturdy branch and wrap it for storage.</p>
<h3>Questions</h3>
''' + faq(f'What is the joke on the {N}?', s['joke_a']) \
 + faq(f'What is the {N} made of and how big is it?', f'The {N} from Graphic Tees Co. is a 100% ceramic circle with a glossy finish and a white back. It measures 2.76 inches (7 cm) across and 0.125 inches thick, so it sits easily on a tree branch or tied to a gift.') \
 + faq(f'How do I hang the {N}?', f'The {N} comes with a gold-colored string already attached, so you can loop it over a branch, a wreath, a gift ribbon or a hook. It is a small, light ornament, so any sturdy branch holds it. Hang it where it will not swing into harder decorations.') \
 + faq(f'How do I care for the {N}?', f'Wipe the {N} clean with a soft, dry or slightly damp cloth and do not scrub the print. It is ceramic, so it can chip if dropped or knocked against other ornaments. After the holidays, wrap it in tissue and store it in a padded box.') \
 + faq(f'Will the {N} arrive in time for Christmas?', f'Graphic Tees Co. makes each {N} to order, and orders over $45 ship free in the US. For Christmas, order by about December 8 so it arrives with time to spare. It also works as a stocking stuffer and matches the {s["source_name"]}.')
inp = {'title': s['name'] + ' Ornament', 'handle': s['handle'], 'status': 'DRAFT', 'vendor': 'Graphic Tees Co.', 'productType': 'Ornaments', 'category': 'gid://shopify/TaxonomyCategory/hg-3-58-7',
       'tags': s['tags'], 'descriptionHtml': d, 'seo': s['seo'],
       'productOptions': [{'name': 'Shape', 'values': [{'name': 'Circle'}]}],
       'variants': [{'optionValues': [{'optionName': 'Shape', 'name': 'Circle'}], 'sku': f'{s["handle"]}-22782', 'price': '14.99'}]}
for w in ('frame', 'badge', 'border', 'shape behind', 'porcelain', 'two-sided', 'personaliz', 'lockup'):
    if w in d.lower(): sys.stderr.write(f'HAS {w}\n')
sys.stderr.write('faq words %s; total %d; kw count %d\n' % ([len(a.split()) for _, a in re.findall(r'<strong>(.*?)</strong><br>(.*?)</p>', d)], len(re.sub('<[^>]+>', '', d).split()), d.lower().count(s['kw'].lower())))
print(json.dumps({'input': inp, 'synchronous': True}, ensure_ascii=False, separators=(',', ':')))
