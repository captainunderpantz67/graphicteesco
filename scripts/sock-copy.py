#!/usr/bin/env python3
"""sock-copy.py <spec.json>: productSet variables (DRAFT) for a Printful #882 sock add-on, sizes S/M/L (catalog 22786/22787/22788), $18.99, no compare-at.
spec: {name, kw, handle, title, tags[], story[3], joke_a, ink, source (source product name, e.g. 'Sorry About Your Windshield crewneck'), seo{title,description}}"""
import json, re, sys
s = json.load(open(sys.argv[1])); N = s['name'] + ' Socks'
IDS = {'S': 22786, 'M': 22787, 'L': 22788}
faq = lambda q, a: f'<p><strong>{q}</strong><br>{a}</p>\n'
d = '<h3>The Story</h3>\n' + ''.join(f'<p>{p}</p>\n' for p in s['story']) + '''<p>The print runs the full length of each sock, from the cuff down the leg to the foot, with the lockup and the main art on the leg and a smaller repeat of the art on the foot. The background is solid, so there is no blank band where the knit shows.</p>
<h3>Details &amp; Fit</h3>
<ul>
<li>Sublimation crew socks with an all-over print</li>
<li>95% polyester, 5% spandex</li>
<li>Soft ribbed leg, plush cushioned bottom, breathable stretchy materials</li>
<li>Crew length</li>
<li>Size S: US women's 6–8, US men's 5–6.5</li>
<li>Size M: US women's 8.5–11, US men's 7–9.5</li>
<li>Size L: US women's 11.5–13, US men's 10–13</li>
<li>Blank product sourced from the US</li>
</ul>
<p>Slight color variation may appear on the side seams.</p>
<h3>Questions</h3>
''' + faq(f'What is the joke on the {N}?', s['joke_a']) \
 + faq(f'What are the {N} made of?', f'The {N} from Graphic Tees Co. are 95% polyester and 5% spandex, with a soft ribbed leg, a plush cushioned bottom and a stretchy, breathable knit. The print is sublimated into the fabric, so it stays soft and does not crack or peel.') \
 + faq(f'What size should I order in the {N}?', f'The {N} come in three sizes. Small fits US women\'s 6–8 and men\'s 5–6.5, medium fits women\'s 8.5–11 and men\'s 7–9.5, and large fits women\'s 11.5–13 and men\'s 10–13. Match your shoe size to the range and order that size.') \
 + faq(f'How do I wash the {N}?', f'Turn the {N} inside out, wash them in cold water with similar colors and hang them to dry or tumble dry on low. Skip bleach and fabric softener. Cold washing keeps {s["ink"]} bright through a lot of wear.') \
 + faq(f'Will the {N} arrive in time for Christmas?', f'Graphic Tees Co. makes each pair of {N} to order, and orders over $45 ship free in the US. For a Christmas stocking, order by about December 8 so the pair arrives with time to spare. Pair them with the {s["source"]} for a full set.') \
 + faq(f'What if the size is wrong on the {N}?', 'Graphic Tees Co. offers one free exchange in a new size within 30 days of delivery, as our exchange policy describes, and you do not mail the first pair back. If a pair arrives damaged, defective or misprinted, we send a free replacement or a full refund.')
inp = {'title': s['title'], 'handle': s['handle'], 'status': 'DRAFT', 'vendor': 'Graphic Tees Co.', 'productType': 'Socks', 'category': 'gid://shopify/TaxonomyCategory/aa-1-18',
       'tags': s['tags'], 'descriptionHtml': d, 'seo': s['seo'],
       'productOptions': [{'name': 'Size', 'values': [{'name': k} for k in IDS]}],
       'variants': [{'optionValues': [{'optionName': 'Size', 'name': k}], 'sku': f'{s["handle"]}-{v}', 'price': '18.99'} for k, v in IDS.items()]}
for w in ('frame', 'badge', 'border', 'shape behind'):
    if w in d.lower(): sys.stderr.write(f'HAS {w}\n')
sys.stderr.write('faq words %s; total %d; kw count %d\n' % ([len(a.split()) for _, a in re.findall(r'<strong>(.*?)</strong><br>(.*?)</p>', d)], len(re.sub('<[^>]+>', '', d).split()), d.lower().count(s['kw'].lower())))
print(json.dumps({'input': inp, 'synchronous': True}, ensure_ascii=False, separators=(',', ':')))
