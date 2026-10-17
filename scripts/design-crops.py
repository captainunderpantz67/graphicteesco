#!/usr/bin/env python3
"""Where is the design on each product's front mockup? (Sam, 2026-10-17: "I can't really see the designs".)

Printful mockups show the whole garment on a 1000 px square, so the print is small on a phone. This finds
the print's bounding box on each product's first photo and writes a 4:5 crop rectangle around it. The product
page adds that crop (served by Shopify's CDN, crop=region) as a "design close-up" slide right after the cover.

Detection: the fabric color is the median of two strips on the torso sides (clear of a centered print); the
design is every pixel in the central torso area that differs from the fabric. Works on white, black and camo
blanks alike because it never compares against the background. Embroidery (small) gets a minimum crop so the
close-up still shows a little garment around it.

Output: src/data/design-crops.json {handle: {"src": imageUrlWithoutQuery, "x":, "y":, "w":, "h":}} (1000 px space)
  python3 scripts/design-crops.py            # all products
  python3 scripts/design-crops.py --sheet    # also write a contact sheet to /tmp for a visual check
"""
import io, json, statistics, sys, urllib.request
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
cfg = json.loads((ROOT / 'shopify.public.json').read_text())
DOM = cfg.get('domain') or cfg.get('storeDomain')
TOK = next(v for k, v in cfg.items() if 'token' in k.lower())
S = 250  # analysis size; results scale to 1000


def gql(query, variables):
    req = urllib.request.Request(f'https://{DOM}/api/2026-01/graphql.json', json.dumps({'query': query, 'variables': variables}).encode(),
                                 {'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': TOK})
    return json.load(urllib.request.urlopen(req))['data']


def dist(a, b):
    return sum((x - y) ** 2 for x, y in zip(a, b)) ** 0.5


def find(url, hooded=False):
    base = url.split('?')[0]
    im = Image.open(io.BytesIO(urllib.request.urlopen(base + f'?width={S}').read())).convert('RGB')
    W, H = im.size
    if W != H:
        return None
    px = im.load()
    strip = [px[x, y] for y in range(int(.32 * S), int(.58 * S)) for x in list(range(int(.27 * S), int(.32 * S))) + list(range(int(.68 * S), int(.73 * S)))]
    fabric = tuple(statistics.median(p[i] for p in strip) for i in range(3))
    # Hoodies: start below the hood, whose shading would otherwise read as part of the print.
    x0, x1, y0, y1 = int(.25 * S), int(.75 * S), int((.30 if hooded else .12) * S), int(.80 * S)
    cols, rows = [0] * S, [0] * S
    for y in range(y0, y1):
        for x in range(x0, x1):
            if dist(px[x, y], fabric) > 55:
                cols[x] += 1
                rows[y] += 1
    # A column/row counts only if it is dense relative to the busiest one, so thin drawstrings, zipper lines and
    # fabric folds don't stretch the box; the print itself is the dense block.
    cmin, rmin = max(3, .12 * max(cols)), max(3, .12 * max(rows))
    xs = [x for x in range(S) if cols[x] >= cmin]
    ys = [y for y in range(S) if rows[y] >= rmin]
    if len(xs) < 3 or len(ys) < 3:
        return None
    bx0, bx1, by0, by1 = xs[0], xs[-1], ys[0], ys[-1]
    k = 1000 / S
    if hooded:
        by0 = max(by0 - int(.09 * S), 0)  # headroom: prints often start right under the hood
    cx, cy = (bx0 + bx1) / 2 * k, (by0 + by1) / 2 * k
    w = max((bx1 - bx0) * k * 1.3, (by1 - by0) * k * 1.3 * 4 / 5, 260)  # 15% margin each side; min for embroidery
    w = min(w, 800)
    h = w * 5 / 4
    x = min(max(cx - w / 2, 0), 1000 - w)
    y = min(max(cy - h / 2, 0), 1000 - h)
    return {'src': base, 'x': round(x), 'y': round(y), 'w': round(w), 'h': round(h)}


out, after = {}, None
while True:
    d = gql('query($a:String){products(first:100,after:$a){pageInfo{hasNextPage endCursor} nodes{handle images(first:1){nodes{url}}}}}', {'a': after})['products']
    for p in d['nodes']:
        if p['images']['nodes']:
            try:
                r = find(p['images']['nodes'][0]['url'], hooded='hood' in p['handle'] or 'zip' in p['handle'])
            except Exception as e:
                print(p['handle'], 'skip', e, file=sys.stderr)
                r = None
            if r:
                out[p['handle']] = r
    if not d['pageInfo']['hasNextPage']:
        break
    after = d['pageInfo']['endCursor']

(ROOT / 'src/data/design-crops.json').write_text(json.dumps(out, indent=1, sort_keys=True) + '\n')
print(f'{len(out)} design crops', file=sys.stderr)

if '--sheet' in sys.argv:
    tiles = []
    for h, r in list(out.items())[:: max(1, len(out) // 24)][:24]:
        u = f"{r['src']}?crop=region&crop_left={r['x']}&crop_top={r['y']}&crop_width={r['w']}&crop_height={r['h']}&width=200"
        tiles.append(Image.open(io.BytesIO(urllib.request.urlopen(u).read())).convert('RGB').resize((160, 200)))
    sheet = Image.new('RGB', (8 * 165, 3 * 205), 'white')
    for i, t in enumerate(tiles):
        sheet.paste(t, ((i % 8) * 165, (i // 8) * 205))
    sheet.save('/private/tmp/claude-502/-Users-sam/4a7660b1-2fea-42dd-ba1c-ee401ebf8dee/scratchpad/design-crops-sheet.jpg')
    print('sheet: /private/tmp/claude-502/-Users-sam/4a7660b1-2fea-42dd-ba1c-ee401ebf8dee/scratchpad/design-crops-sheet.jpg', file=sys.stderr)
