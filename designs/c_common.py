"""Lane C hoodie helpers (from the c773 build). Run with /usr/bin/python3 from the repo root."""
import sys, json, os; sys.path.insert(0, '.')
from designs.lib import *
import numpy as np, cv2
CR = (246, 236, 214, 255); MU = (226, 169, 53, 255)
def load_art(path, edge=True, bottom_fade=False):
    art = Image.open(path).convert('RGBA'); al = np.array(art.getchannel('A'))
    n, lab, st, _ = cv2.connectedComponentsWithStats((al > 40).astype(np.uint8), connectivity=8); keep = np.zeros_like(al, bool)
    for i in range(1, n):
        if st[i, cv2.CC_STAT_AREA] > 15000: keep |= (lab == i)
    al[~keep] = 0; H0, W0 = al.shape
    if edge:
        rng = np.random.default_rng(7); nz = cv2.GaussianBlur(rng.random((H0, W0)).astype(np.float32), (0, 0), 6); nz = (nz - nz.min()) / (nz.max() - nz.min())
        yy, xx = np.mgrid[0:H0, 0:W0]; d = np.minimum.reduce([yy, xx, H0 - 1 - yy, W0 - 1 - xx]).astype(np.float32)
        al = (al * np.clip((d / 110) * 1.4 - nz * 0.9, 0, 1)).astype(np.uint8)
    art.putalpha(Image.fromarray(al)); return art.crop(art.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox())
def halo(a, px):
    al = np.array(a.getchannel('A')); k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * px + 1, 2 * px + 1)); d = cv2.dilate(al, k)
    h = Image.new('RGBA', a.size, CREAM); h.putalpha(Image.fromarray(d)); h.alpha_composite(a); return h
def build(n, art_path, head, punch, font, sand, AW=1800, W=3400, hfrac=0.9, pfrac=1.0, pfont=None, psame=False, hsame=False, npunch=MU):
    """head/punch: list of text lines. sand=(headline ink, punch ink). Writes docs/print-files/<n>-{navy,sand}.png and prints the 7h/7k/7l numbers."""
    art = load_art(art_path); art = art.resize((AW, round(art.height * AW / art.width)), Image.LANCZOS)
    for mode, (hc, pc, aa, bg) in {'navy': (CR, npunch, halo(art, 16), (31, 42, 77, 255)), 'sand': (sand[0], sand[1], art, (226, 214, 188, 255))}.items():
        hs = line_same(head, font, hfrac, W, hc, hc, kw=3) if hsame else [line(t, font, hfrac, W, hc, hc, kw=3) for t in head]; ps = line_same(punch, pfont or font, pfrac, W, pc, pc, kw=3) if psame else [line(t, pfont or font, pfrac, W, pc, pc, kw=3) for t in punch]
        out = lockup(aa, W, hs, ps, f'{n}-{mode}', {mode: bg}, g=40); out = out.crop(out.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox())
        out.save(f'docs/print-files/{n}-{mode}.png', dpi=(300, 300)); th = sum(l.height for l in hs + ps)
        print(mode, out.size, 'headline', max(l.width for l in hs), 'punch', max(l.width for l in ps), 'type', th, 'of', out.height, round(th / out.height, 2), 'subject', art.width, 'of', out.width, round(art.width / out.width, 2))

def spec(n, title, handle, slug, tags, seo, story, qa, cols=("Sand", "Navy"), inks=None):
    """Writes designs/c<n>/spec.json + vars.json (productSet input, DRAFT, no compare-at, hoodies category); prints FAQ word counts and checks."""
    h = "<h3>The Story</h3>\n" + "\n".join(f"<p>{p}</p>" for p in story) + "\n<h3>Details &amp; Fit</h3>\n<ul>\n<li>Classic unisex fit, pullover with a double-lined hood and matching drawcord</li>\n<li>50% pre-shrunk cotton, 50% polyester</li>\n<li>Fabric weight: 8.0 oz/yd²</li>\n<li>Air-jet spun yarn with a soft feel</li>\n<li>Front pouch pocket, ribbed cuffs and waistband with spandex</li>\n<li>Sizes S–3XL</li>\n<li>Colors: " + ", ".join(cols) + "</li>\n<li>Blank product sourced from Bangladesh, Nicaragua, Honduras or El Salvador</li>\n</ul>\n<h3>Questions</h3>\n" + "\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q, a in qa) + "\n"
    for q, a in qa: print(len(a.split()), q)
    print('seo', len(seo['title']), len(seo['description']), [w for w in ('frame', 'badge', 'shape behind', 'border') if w in h.lower()])
    d = f'designs/c{n}'
    json.dump({"title": title, "handle": handle, "slug": slug, "catalog": 146, "colors": list(cols), "sizes": ["S", "M", "L", "XL", "2XL", "3XL"], "price": "39.99", "compare": None, "productType": "Hoodie", "tags": tags, "seo": seo, "descriptionHtml": h}, open(f'{d}/spec.json', 'w'))
    import subprocess; v = json.loads(subprocess.check_output(['/usr/bin/python3', 'scripts/mkvars.py', f'{d}/spec.json']))
    v['input']['category'] = 'gid://shopify/TaxonomyCategory/aa-1-13-13'
    for x in v['input']['variants']: x.pop('compareAtPrice', None)
    json.dump(v, open(f'{d}/vars.json', 'w'), separators=(',', ':'), ensure_ascii=False)
def faqs(name, short, who_gift, gift_why, place_warm, art_word):
    """Standard 5 hoodie FAQs. name=the full print line, short=how the hoodie is called in answers."""
    return [(f"Is this {who_gift[0]} hoodie warm enough for {place_warm[0]}?", f"Yes. The {short} hoodie from Graphic Tees Co. is a Gildan 18500 pullover in 8 oz fleece, 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. It is an easy layer for {place_warm[1]}."),
     (f"How does the {short} hoodie fit?", f"It is a classic unisex cut in adult sizes S through 3XL. Order your usual size for a regular fit, or go up one for a roomier layer over a work shirt or base layer. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk."),
     (f"Is this a good gift for {who_gift[1]}?", f"{gift_why} It comes in Sand and Navy, prints to order, and the free size exchange covers a wrong guess on size."),
     ("How do I wash the hoodie so the print lasts?", f"Turn the Graphic Tees Co. hoodie inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the {art_word} sharp wash after wash."),
     ("When should I order for Christmas delivery?", f"Order by about December 8 to have the {short} hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
