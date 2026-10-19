#!/usr/bin/env python3
"""mug-copy.py <spec.json>: productSet variables (DRAFT) for a Printful #19 White Glossy Mug add-on (11 oz, variant 1320), $17.99, no compare-at.
spec: {name, kw, handle, title, tags[], story[3], joke_a, source (source product name), source_handle, seo{title,description}}"""
import json, re, sys
s = json.load(open(sys.argv[1])); N = s['name'] + ' Mug'
faq = lambda q, a: f'<p><strong>{q}</strong><br>{a}</p>\n'
d = '<h3>The Story</h3>\n' + ''.join(f'<p>{p}</p>\n' for p in s['story']) + '''<h3>Details &amp; Fit</h3>
<ul>
<li>White glossy ceramic mug, 11 oz</li>
<li>Height 3.8 in (9.6 cm), diameter 3.2 in (8.2 cm)</li>
<li>Dishwasher and microwave safe</li>
<li>Design printed on both sides, so it faces out for right- and left-handed drinkers</li>
<li>Blank product sourced from China</li>
</ul>
<p>Each mug is printed to order, so the color on your screen may differ slightly from the glaze.</p>
<h3>Questions</h3>
''' + faq(f'What is the joke on the {N}?', s['joke_a']) \
 + faq(f'What is the {N} made of and how big is it?', f'The {N} from Graphic Tees Co. is a white glossy ceramic mug that holds 11 ounces, about a big cup of coffee or tea. It stands 3.8 inches (9.6 cm) tall and is 3.2 inches (8.2 cm) across, with a standard handle that fits a normal hand comfortably.') \
 + faq(f'Is the {N} dishwasher and microwave safe?', f'Yes. The {N} is dishwasher and microwave safe, so it goes from the cupboard to the microwave to the sink without fuss. The print is made to hold up to regular washing, but a gentle hand wash will keep the glossy design looking its best for as long as you own it.') \
 + faq(f'Is the design on both sides of the {N}?', f'Yes. Graphic Tees Co. prints the design on both sides of the {N}, so the joke faces out whether you hold the handle in your right hand or your left. That also makes it easy to show off on a desk or a shelf, and nobody has to turn it to read it.') \
 + faq(f'Will the {N} arrive in time for Christmas?', f'Graphic Tees Co. makes each {N} to order, and orders over $45 ship free in the US. For Christmas, order by about December 8 so it arrives with time to spare. It matches the {s["source"]}, so you can give the two together as a set.') \
 + faq(f'What if the {N} arrives damaged?', f'Graphic Tees Co. sends a free replacement or a full refund if your {N} arrives damaged, defective or misprinted, as our exchange policy describes. Take a photo of the mug and the box and send it to us within 30 days of delivery, and we will make it right.')
inp = {'title': s['title'], 'handle': s['handle'], 'status': 'DRAFT', 'vendor': 'Graphic Tees Co.', 'productType': 'Mugs', 'category': 'gid://shopify/TaxonomyCategory/hg-11-10-5-5',
       'tags': s['tags'], 'descriptionHtml': d, 'seo': s['seo'],
       'productOptions': [{'name': 'Size', 'values': [{'name': '11 oz'}]}],
       'variants': [{'optionValues': [{'optionName': 'Size', 'name': '11 oz'}], 'sku': f'{s["handle"]}-1320', 'price': '17.99'}]}
for w in ('frame', 'badge', 'border', 'shape behind', 'personaliz'):
    if w in d.lower(): sys.stderr.write(f'HAS {w}\n')
sys.stderr.write('faq words %s; total %d; kw count %d\n' % ([len(a.split()) for _, a in re.findall(r'<strong>(.*?)</strong><br>(.*?)</p>', d)], len(re.sub('<[^>]+>', '', d).split()), d.lower().count(s['kw'].lower())))
print(json.dumps({'input': inp, 'synchronous': True}, ensure_ascii=False, separators=(',', ':')))
