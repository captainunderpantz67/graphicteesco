#!/usr/bin/env python3
"""mug-print.py <spec.json> <out.png>: Printful #19 11 oz mug print file, 2700 x 1050 px, transparent (white mug = light blank, dark ink only).
spec: {"art": path, "crop": [x0,y0,x1,y1] (motif only), "font": file, "w": lockup width px, "centers": [x, x] (lockup centres across the wrap), "top": px, "gap": px, "art_h": px,
       "rows": [{"t": "TEXT", "c": "#2b1a12", "w": width px (optional, default lockup width), "font": file (optional)} | {"art": true}]}
Each text row is scaled so its ink width equals its w; art is scaled to art_h. Prints the sizes."""
import json, sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parent.parent
s = json.load(open(sys.argv[1])); W, H = 2700, 1050; GAP = s.get('gap', 24); LW = s['w']
hx = lambda c: tuple(int(c[i:i + 2], 16) for i in (1, 3, 5))
art = Image.open(s['art']).convert('RGBA').crop(tuple(s['crop']))
art = art.crop(art.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox())
blocks = []
for r in s['rows']:
    if r.get('img'):
        im0 = Image.open(r['img']).convert('RGBA'); w = r.get('w', LW); h = round(im0.height * w / im0.width); blocks.append(im0.resize((w, h), Image.LANCZOS)); print(f'img {w}x{h}')
    elif r.get('art'):
        h = s['art_h']; w = round(art.width * h / art.height)
        if w > LW: w = LW; h = round(art.height * w / art.width)
        blocks.append(art.resize((w, h), Image.LANCZOS)); print(f'art {w}x{h}')
    else:
        fn = r.get('font', s['font']); f0 = ImageFont.truetype(str(ROOT / 'designs' / 'fonts' / fn), 400)
        b = f0.getbbox(r['t']); tw = b[2] - b[0]; sz = round(400 * r.get('w', LW) / tw)
        f = ImageFont.truetype(str(ROOT / 'designs' / 'fonts' / fn), sz); b = f.getbbox(r['t'])
        im = Image.new('RGBA', (b[2] - b[0], b[3] - b[1]), (0, 0, 0, 0))
        ImageDraw.Draw(im).text((-b[0], -b[1]), r['t'], font=f, fill=hx(r['c']) + (255,)); blocks.append(im); print(f'{r["t"]}: size {sz} {im.width}x{im.height}')
tot = sum(b.height for b in blocks) + GAP * (len(blocks) - 1); print('lockup height', tot)
cv = Image.new('RGBA', (W, H), (0, 0, 0, 0))
for cx in s['centers']:
    y = s.get('top', (H - tot) // 2)
    for b in blocks:
        cv.alpha_composite(b, (round(cx - b.width / 2), round(y))); y += b.height + GAP
cv.save(sys.argv[2])
