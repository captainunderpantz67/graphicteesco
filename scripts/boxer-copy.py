#!/usr/bin/env python3
"""boxer-copy.py <spec.json>: productSet variables (DRAFT) for a Printful #428 boxer-brief add-on, 7 sizes XS-3XL, $34.99, no compare-at.
spec: {name (design name, e.g. 'Sisyphus Had Bad Programming'), niche ('Gym'), kw (primary keyword), joke_q (FAQ 1 question tail), joke_a, story[3 paragraphs],
       ink (ink/colors sentence for the wash FAQ), source (source product name, e.g. 'Sisyphus tee'), tags[], seo{title,description}, handle, title}"""
import json, sys
s = json.load(open(sys.argv[1])); N = s['name'] + ' Boxer Briefs'
IDS = {'XS': 11445, 'S': 11446, 'M': 11447, 'L': 11448, 'XL': 11449, '2XL': 11450, '3XL': 11451}
faq = lambda q, a: f'<p><strong>{q}</strong><br>{a}</p>\n'
d = '<h3>The Story</h3>\n' + ''.join(f'<p>{p}</p>\n' for p in s['story']) + '''<p>The all-over print wraps the front, the legs and the seat, and the waistband stays plain and soft, so nothing prints where it rubs.</p>
<h3>Details &amp; Fit</h3>
<ul>
<li>All-over print men's boxer briefs, mid-rise fit</li>
<li>93% polyester, 7% spandex stretch fabric (US)</li>
<li>Fabric weight: 7.08 oz/yd² (240 g/m²)</li>
<li>Lined front pouch for extra support</li>
<li>4 cm covered elastic waistband, no back seam</li>
<li>Overlock and coverstitch seams, crotch panel</li>
<li>Sizes XS–3XL</li>
<li>Blank product components sourced from Mexico and China</li>
</ul>
<h3>Questions</h3>
''' + faq(f'What is the joke on the {N}?', s['joke_a']) \
 + faq(f'What are the {N} made of?', f'The {N} from Graphic Tees Co. are 93% polyester and 7% spandex at 7.08 oz/yd², a smooth stretch knit with a lined front pouch, a covered 4 cm waistband and no back seam. The all-over print is sublimated into the fabric, so it does not crack or peel.') \
 + faq(f'How do I wash the {N}?', f'Turn the {N} inside out, wash them in cold water with similar colors and hang them to dry or tumble dry low. Skip bleach and fabric softener. Cold washing keeps {s["ink"]} crisp through a lot of wash days.') \
 + faq(f'How do the {N} fit?', f'The {N} are a mid-rise boxer brief in sizes XS through 3XL, cut close with stretch. Check the size chart against a pair you already wear. If you are between sizes, most men order the larger one for a comfortable leg.') \
 + faq(f'Will the {N} arrive in time for Christmas?', f'Graphic Tees Co. makes each pair of {N} to order, and orders over $45 ship free in the US. For a Christmas gift, order by about December 8 so the pair arrives with time to spare. Pair them with the {s["source"]} for a full set.') \
 + faq(f'What if the size is wrong on the {N}?', 'Graphic Tees Co. offers one free exchange in a new size within 30 days of delivery, as our exchange policy describes, and you do not mail the first pair back. If a pair arrives damaged, defective or misprinted, we send a free replacement or a full refund.')
inp = {'title': s['title'], 'handle': s['handle'], 'status': 'DRAFT', 'vendor': 'Graphic Tees Co.', 'productType': 'Boxer Briefs', 'category': 'gid://shopify/TaxonomyCategory/aa-1-8-3-2',
       'tags': s['tags'], 'descriptionHtml': d, 'seo': s['seo'],
       'productOptions': [{'name': 'Size', 'values': [{'name': k} for k in IDS]}],
       'variants': [{'optionValues': [{'optionName': 'Size', 'name': k}], 'sku': f'{s["handle"]}-{v}', 'price': '34.99'} for k, v in IDS.items()]}
import re
for w in ('frame', 'badge', 'border', 'shape behind'):
    if w in d.lower(): sys.stderr.write(f'HAS {w}\n')
sys.stderr.write('faq words %s; total %d; kw count %d\n' % ([len(a.split()) for _, a in re.findall(r'<strong>(.*?)</strong><br>(.*?)</p>', d)], len(re.sub('<[^>]+>', '', d).split()), d.lower().count(s['kw'].lower())))
print(json.dumps({'input': inp, 'synchronous': True}, ensure_ascii=False, separators=(',', ':')))
