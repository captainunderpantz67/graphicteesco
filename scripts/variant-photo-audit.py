#!/usr/bin/env python3
"""Which product colors have a photo that really shows that color?

Printful attaches a mockup to every variant. When a color had no mockup generated, it gets another
color's photo (Maroon shows the Black shirt). The page and the Google feed must never show a
mismatched color (Merchant Center: the image must show the variant).

For every photo shared by several colors, this samples the garment's fabric color (left torso, clear of
the print) and gives the photo to the closest swatch. Colors left with no photo of their own are written
as null. Output: src/data/variant-photos.json  {handle: {color: imageUrlWithoutQuery | null}}
Only products with a shared or missing photo are listed; every other color is fine as-is.

Re-run after builders generate the missing mockups (the file then shrinks toward empty).
  python3 scripts/variant-photo-audit.py
"""
import io, json, re, statistics, sys, urllib.request
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
cfg = json.loads((ROOT / 'shopify.public.json').read_text())
DOM = cfg.get('domain') or cfg.get('storeDomain')
TOK = next(v for k, v in cfg.items() if 'token' in k.lower())
SWATCH = dict(re.findall(r"'([^']+)':\s*'(#[0-9a-fA-F]{6})'", (ROOT / 'src/lib/swatches.ts').read_text()))


def gql(query, variables):
    req = urllib.request.Request(f'https://{DOM}/api/2026-01/graphql.json', json.dumps({'query': query, 'variables': variables}).encode(),
                                 {'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': TOK})
    return json.load(urllib.request.urlopen(req))['data']


def rgb(h):
    return tuple(int(h[i:i + 2], 16) for i in (1, 3, 5))


def fabric(url):
    """Median color of a patch on the shirt's left torso (viewer's left), away from the centered print."""
    im = Image.open(io.BytesIO(urllib.request.urlopen(url.split('?')[0] + '?width=300').read())).convert('RGB').resize((300, 300))
    px = [im.getpixel((x, y)) for x in range(80, 100) for y in range(170, 220)]
    return tuple(statistics.median(p[i] for p in px) for i in range(3))


def dist(a, b):
    return sum((x - y) ** 2 for x, y in zip(a, b)) ** 0.5


out, after = {}, None
while True:
    d = gql('query($a:String){products(first:100,after:$a){pageInfo{hasNextPage endCursor} nodes{handle variants(first:250){nodes{image{url} selectedOptions{name value}}}}}}', {'a': after})['products']
    for p in d['nodes']:
        c2i = {}
        for v in p['variants']['nodes']:
            c = [o['value'] for o in v['selectedOptions'] if o['name'].lower() in ('color', 'colour')]
            if c:
                c2i.setdefault(c[0], v['image']['url'].split('?')[0] if v['image'] else None)
        i2c = {}
        for c, i in c2i.items():
            i2c.setdefault(i, []).append(c)
        if all(i and len(cs) == 1 for i, cs in i2c.items()):
            continue
        fixed = {c: i for c, i in c2i.items() if i and len(i2c[i]) == 1}
        for i, cs in i2c.items():
            if not i or len(cs) == 1:
                for c in cs:
                    fixed.setdefault(c, None)
                continue
            f = fabric(i)
            scored = sorted((dist(f, rgb(SWATCH[c])), c) for c in cs if c in SWATCH)
            owner = scored[0][1] if scored and scored[0][0] < 70 else None
            for c in cs:
                fixed[c] = i if c == owner else None
        out[p['handle']] = fixed
    if not d['pageInfo']['hasNextPage']:
        break
    after = d['pageInfo']['endCursor']

(ROOT / 'src/data/variant-photos.json').write_text(json.dumps(out, indent=1, sort_keys=True) + '\n')
missing = sum(1 for m in out.values() for i in m.values() if i is None)
print(f'{len(out)} products with shared photos; {missing} colors have no photo of their own', file=sys.stderr)
