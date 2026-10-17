#!/usr/bin/env python3
"""b-artnext.py <items.json> <outdir>: for each item writes <outdir>/<id>.spec.json (b-spec input) and <id>.vars.json (productSet variables, DRAFT, no compare-at, category by blank).
item: {id, title, short (product name used in FAQs), handle, slug, blank, colors[], tags[], kw, seo_title, seo_desc, hook, art, wear, extra_faq[[q,a]]}"""
import json, sys, os, subprocess
BL = {
 'pullover': dict(cat='hoodies', fabric='50% cotton, 50% polyester fleece at 8 oz/yd²', size='S through 3XL', warm='a midweight fleece hoodie with a double-lined hood and a front pouch pocket', det_sz='Sizes S–3XL'),
 'zip': dict(cat='hoodies', fabric='50% cotton, 50% polyester fleece at 8 oz/yd²', size='S through 3XL', warm='a midweight fleece zip-up with a metal zipper, front pouch pockets and an unlined hood', det_sz='Sizes S–3XL'),
 'oversized': dict(cat='hoodies', fabric='60% cotton, 40% polyester brushed fleece at 10 oz/yd²', size='S through 3XL', warm='a heavyweight 10 oz/yd² fleece hoodie with brushed fleece inside and a double-layered hood', det_sz='Sizes S–3XL'),
 'cropped': dict(cat='hoodies', fabric='52% cotton, 48% polyester fleece at 6.5 oz/yd²', size='S through 2XL', warm='a lighter 6.5 oz/yd² fleece, made to layer over a tee or a tank', det_sz='Sizes S–2XL'),
 'heavy': dict(cat='hoodies', fabric='a cotton and polyester blend fleece at 10 oz/yd²', size='XS through 3XL', warm='a heavyweight 10 oz/yd² fleece hoodie with a fleece-lined hood', det_sz='Sizes XS–3XL'),
}
FIT = {
 'pullover': 'It is a classic unisex cut, so order your usual size or go up one for a roomier fit over layers.',
 'zip': 'It is a regular unisex cut with a full zipper, so order your usual size or go up one to layer it over a sweater.',
 'oversized': 'It is cut roomy and boxy on purpose, so order your usual size for the intended oversized look or size down one for a closer fit.',
 'cropped': 'The body is cropped with a raw hem and dropped shoulders, so order your usual size, and size up one if you want the hem a little longer.',
 'heavy': 'It is a relaxed unisex cut made for layering, so order your usual size or size down one if you like a closer fit.',
}
def faq(i):
    b = BL[i['blank']]; n = i['short']; t = i['title']
    fx = i.get('fit_extra', '')
    qs = [
     (f"How does the {n} fit?", f"The {n} from Graphic Tees Co. comes in sizes {b['size']}. {FIT[i['blank']]} {fx}Compare the size chart with a hoodie you own."),
     (f"How warm is this {i['kw']}?", f"The {n} is {b['warm']}. The fabric is {b['fabric']}, warm enough for a cool evening and comfortable indoors. Graphic Tees Co. prints each one to order."),
     (f"How do I wash the {n}?", f"Turn the {n} inside out and wash it in cold water with similar colors, then tumble dry on low or hang it to dry. Skip bleach and fabric softener, and never iron over the print. Cold washing keeps the print looking sharp longer."),
     (f"Will the {n} arrive in time for Christmas?", f"Graphic Tees Co. prints each {n} to order, and orders over $45 ship free. For a Christmas gift, order by about December 8 so it arrives with time to spare. If the size is a guess, the free size exchange within 30 days covers the recipient too."),
     (f"What if the size is wrong on my {n}?", f"Graphic Tees Co. offers one free size exchange within 30 days of delivery on the {n}. We print the new size and you do not mail anything back. If a print arrives misprinted or damaged, we reprint it or refund it within 30 days of delivery."),
    ] + [tuple(x) for x in i.get('extra_faq', [])]
    for q, a in qs:
        w = len(a.split()); (not 40 <= w <= 60) and print("WC", i["id"], q[:30], w)
    return qs
items = json.load(open(sys.argv[1])); out = sys.argv[2]; os.makedirs(out, exist_ok=True)
for i in items:
    s = dict(title=i['title'], handle=i['handle'], slug=i['slug'], blank=i['blank'], colors=i['colors'], tags=i['tags'], kw=i['kw'], seo_title=i['seo_title'], seo_desc=i['seo_desc'],
             hook=i['hook'], art=i['art'], wear=i['wear'], faq=faq(i), sizes=None)
    s.pop('sizes')
    p = f"{out}/{i['id']}"; json.dump(s, open(p + '.in.json', 'w'), ensure_ascii=False)
    subprocess.check_call(['python3', 'scripts/b-spec.py', p + '.in.json', p + '.spec.json'])
    sp = json.load(open(p + '.spec.json')); sp['compare'] = None
    # fix the size line in the details to the sizes actually offered
    import re
    sp['descriptionHtml'] = re.sub(r'<li>Sizes [^<]*</li>', '<li>' + BL[i['blank']]['det_sz'] + '</li>', sp['descriptionHtml'])
    json.dump(sp, open(p + '.spec.json', 'w'), ensure_ascii=False)
    v = subprocess.check_output(['python3', 'scripts/mkvars.py', p + '.spec.json'])
    d = json.loads(v); d['input']['category'] = 'gid://shopify/TaxonomyCategory/aa-1-13-13'
    for x in d['input']['variants']: x.pop('compareAtPrice', None)
    json.dump(d, open(p + '.vars.json', 'w'), separators=(',', ':'), ensure_ascii=False)
    print(i['id'], len(d['input']['variants']), 'variants', len(open(p + '.vars.json').read()), 'bytes')
