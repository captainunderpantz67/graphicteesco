#!/usr/bin/env python3
"""ornament-copy.py <spec.json>: productSet variables (DRAFT) for a Printful #881 ceramic ornament add-on (Circle, catalog 22782), $14.99, no compare-at.
spec: {name, kw, handle, title, tags[], story[3], joke_a, source (source product name), source_handle, seo{title,description}}"""
import json, re, sys
s = json.load(open(sys.argv[1])); N = s['name'] + ' Ornament'
faq = lambda q, a: f'<p><strong>{q}</strong><br>{a}</p>\n'
d = '<h3>The Story</h3>\n' + ''.join(f'<p>{p}</p>\n' for p in s['story']) + '''<p>The print is set for a small round disc: the words sit large across the middle, the art sits under them, and a solid background fills the whole ornament so no bare white ring shows around the edge.</p>
<h3>Details &amp; Fit</h3>
<ul>
<li>Glossy ceramic ornament, circle shape</li>
<li>100% ceramic</li>
<li>Diameter: 2.76 in (7 cm)</li>
<li>Thickness: 0.125 in (3 mm)</li>
<li>Print on the front, white backing</li>
<li>Gold-colored string included</li>
<li>Blank product sourced from China</li>
</ul>
<p>Each ornament is printed to order, so the color on your screen may differ slightly from the glaze.</p>
<h3>Questions</h3>
''' + faq(f'What is the joke on the {N}?', s['joke_a']) \
 + faq(f'What is the {N} made of and how big is it?', f'The {N} from Graphic Tees Co. is a glossy 100% ceramic disc that is 2.76 inches (7 cm) across and 0.125 inches (3 mm) thick. The design is printed on the front, the back is plain white, and the finish is smooth and shiny, so the colors look bright on the tree.') \
 + faq(f'How do I hang the {N}?', f'The {N} comes with a gold-colored string already attached through the hole at the top. Loop it over a branch, a hook or a doorknob and it hangs straight. Keep it on a sturdy branch, away from the edge of the tree, because ceramic is heavier than plastic.') \
 + faq(f'How do I care for the {N}?', f'Ceramic is breakable, so handle the {N} gently and do not drop it. To clean it, wipe the glossy front with a soft, damp cloth and dry it. Do not scrub it or put it in the dishwasher. Wrap it in tissue and store it in a small box between holidays.') \
 + faq(f'Will the {N} arrive in time for Christmas?', f'Graphic Tees Co. makes each {N} to order, and orders over $45 ship free in the US. For Christmas, order by about December 8 so it arrives with time to spare. It matches the {s["source"]} if you want a set.') \
 + faq(f'What if the {N} arrives damaged?', f'Graphic Tees Co. sends a free replacement or a full refund if your {N} arrives damaged, defective or misprinted, as our exchange policy describes. Take a photo of the ornament and the box and send it to us within 30 days of delivery, and we will make it right.')
inp = {'title': s['title'], 'handle': s['handle'], 'status': 'DRAFT', 'vendor': 'Graphic Tees Co.', 'productType': 'Ornaments', 'category': s.get('category', 'gid://shopify/TaxonomyCategory/hg-3-58-7'),
       'tags': s['tags'], 'descriptionHtml': d, 'seo': s['seo'],
       'productOptions': [{'name': 'Shape', 'values': [{'name': 'Circle'}]}],
       'variants': [{'optionValues': [{'optionName': 'Shape', 'name': 'Circle'}], 'sku': f'{s["handle"]}-22782', 'price': '14.99'}]}
for w in ('frame', 'badge', 'border', 'shape behind', 'porcelain', 'two-sided', 'personaliz'):
    if w in d.lower(): sys.stderr.write(f'HAS {w}\n')
sys.stderr.write('faq words %s; total %d; kw count %d\n' % ([len(a.split()) for _, a in re.findall(r'<strong>(.*?)</strong><br>(.*?)</p>', d)], len(re.sub('<[^>]+>', '', d).split()), d.lower().count(s['kw'].lower())))
print(json.dumps({'input': inp, 'synchronous': True}, ensure_ascii=False, separators=(',', ':')))
