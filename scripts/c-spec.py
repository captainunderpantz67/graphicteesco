#!/usr/bin/env python3
"""c-spec.py <dir> <in.json>: writes <dir>/spec.json for a Gildan 18600 embroidered zip twin (the c895-c899 copy skeleton).
in.json keys: title, handle, kw (primary phrase, e.g. 'floral zip up hoodie'), kwtitle ('Floral Zip Up Hoodie'), short (statement as written, 'Wildly Low Maintenance'),
who (line one after 'This <kw> is for'), art (what the art shows incl. colours), headline, punch (as printed), inks (ink sentence), chest (e.g. 'a small wildflower with two leaves'), chestshort,
wrist, warm (when it is warm enough), gift_who, gift_line, men (bool), women (bool), colors (default Black,Navy,Ash), seo_desc"""
import json, sys
d, p = sys.argv[1:3]; c = json.load(open(p)); cols = c.get('colors', ['Black', 'Navy', 'Ash'])
h = c['handle']; kw = c['kw']; sh = c['short']; ccol = ' and '.join([', '.join(cols[:-1]), cols[-1]]) if len(cols) > 2 else ' and '.join(cols)
dark = [x for x in cols if x != 'Ash']; dk = ' and '.join(dark)
html = f'''<h3>The Story</h3>
<p>This {kw} is for {c['who']}</p>
<p>{c['art']} {c.get('layout_story') or (c['headline'] + ' runs above it and ' + c['punch'] + ' below in ' + c['face'] + ', the second line a touch wider than the first')}: {c['inks']}. The full print is on the back. On the front, {c['chest']} is embroidered on the left chest{'' if c['wrist'] == '-' else ', and the ' + ('words' if ' ' in c['wrist'] else 'word') + ' ' + c['wrist'] + (' are' if ' ' in c['wrist'] else ' is') + ' stitched on the left cuff'}, in white thread on {dk} and navy thread on Ash. Original art, made for Graphic Tees Co. and printed and stitched the day you order it.</p>
<h3>Details &amp; Fit</h3>
<ul>
<li>Regular fit zip-up hoodie with a metal zipper</li>
<li>50% cotton, 50% polyester fleece, soft inside and outside</li>
<li>Fabric weight: 8 oz/yd²</li>
<li>Embroidered left-chest {c['chestshort']}{'' if c['wrist'] == '-' else ' and left-cuff ' + c['wrist']}, printed back</li>
<li>Front pouch pockets and an unlined hood with color-matched drawcord</li>
<li>Double-needle stitching at shoulders, armholes, neck, waistband and cuffs</li>
<li>Sizes S–3XL</li>
<li>{len(cols)} colors: {ccol}</li>
<li>Blank product sourced from Honduras and El Salvador</li>
</ul>
<h3>Questions</h3>
'''
faq = [
 (f"How does the {sh} zip hoodie fit?", f"The {sh} {kw} from Graphic Tees Co. is a regular unisex fit in sizes S through 3XL. Order your usual size for an easy layer over a tee, or go up one for a roomier fit. The first size exchange within 30 days is free."),
 (f"Is this {kw.replace(' zip up hoodie', '')} hoodie warm enough for {c['warm']}?", f"It is a mid-weight layer. The Graphic Tees Co. zip hoodie is a Gildan 18600 in 8 oz fleece, 50% cotton and 50% polyester, soft inside and outside, with a metal zipper, front pouch pockets and an unlined hood. It handles {c['warm2']} well."),
 ("Where are the print and the embroidery on this zip hoodie?", f"The full design, {c.get('layout_faq') or (c['headline'] + ' above the art and ' + c['punch'] + ' below')}, is printed across the back so the zipper never splits it. On the front, {c['chest']} sits on the left chest{'' if c.get('chestwords') else ' with no words'}{'.' if c['wrist'] == '-' else ', and ' + c['wrist'] + ' is stitched on the left cuff.'}"),
 ("How do I care for the embroidery on this hoodie?", f"Zip the Graphic Tees Co. hoodie, turn it inside out and wash cold with similar colors, then tumble dry on low or hang dry. Skip bleach and do not iron over the stitching. {('The ' + c['chestshort'] + ' on the chest is stitched thread,') if c['wrist'] == '-' else 'The ' + c['chestshort'] + ' on the chest and the ' + c['wrist'] + ' cuff are stitched thread,'} which keeps its shape wash after wash with gentle care."),
 (f"Is it a good gift for {c['gift_who']}, and when should I order for Christmas?", f"Yes, {c['gift_line']} Graphic Tees Co. makes each embroidered hoodie to order, so for Christmas order by about December 8. Orders over $45 ship free in the US, and one free size exchange within 30 days covers a wrong guess on size."),
]
for q, a in faq: assert 36 <= len(a.split()) <= 66, (q, len(a.split()))
html += '\n'.join(f'<p><strong>{q}</strong><br>{a}</p>' for q, a in faq)
tags = ['zip-up-hoodies'] + (['zip-up-hoodies-for-men'] if c.get('men') else []) + (['zip-up-hoodies-for-women'] if c.get('women') else []) + (['graphic-hoodies-for-men'] if c.get('men') else []) + (['graphic-hoodies-for-women'] if c.get('women') else []) + c.get('extra_tags', []) + ['black-zip-up-hoodies', 'hoodie', 'ai-art', 'intake-done']
html = html.replace('The The ', 'The ').replace('the The ', 'The ')
seo = {'title': c.get('seo_title') or f"{c['kwtitle']} – {sh}", 'description': c['seo_desc']}
s = {'title': c['title'], 'handle': h, 'slug': h, 'catalog': 692, 'colors': cols, 'sizes': ['S', 'M', 'L', 'XL', '2XL', '3XL'], 'price': '57.99', 'productType': 'Hoodie', 'tags': tags, 'seo': seo, 'descriptionHtml': html}
print(len(seo['title']), len(seo['description']), [len(a.split()) for q, a in faq])
json.dump(s, open(f'{d}/spec.json', 'w'), ensure_ascii=False)
# productSet variables (DRAFT, category) printed to <dir>/vars.json
import subprocess
v = json.loads(subprocess.check_output([sys.executable, 'scripts/mkvars.py', f'{d}/spec.json'], text=True, stderr=subprocess.DEVNULL))
v['input']['category'] = 'gid://shopify/TaxonomyCategory/aa-1-13-13'
json.dump(v, open(f'{d}/vars.json', 'w'), ensure_ascii=False, separators=(',', ':'))
