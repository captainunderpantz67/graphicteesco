#!/usr/bin/env python3
"""sock-print.py <spec.json> <out.png>: Printful #882 sublimation sock panel, 1348 x 5657 (used for all 4 leg placements).
Panel runs cuff (y 0) to toe (5657); the heel sits near y 3000, so the LEG is y ~650-2750 and the FOOT y ~3200-5000. Only the middle
~820 px (x 270-1090) shows from the side. Leg: lockup lines above/below the art motif, centered; foot: the motif scaled down, repeated.
spec: {"art": path, "crop": [x0,y0,x1,y1] (motif only), "bg": "#f3e7cf", "font": file, "axes": {"wght":900,...} (optional),
       "top": [["TEXT","#111"],...], "bottom": [[...]], "mini": 420 (foot motif width), "size": 150 (max line size)}"""
import json, sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parent.parent
s = json.load(open(sys.argv[1]))
W, H, CX, MAXW = 1348, 5657, 680, 800
hx = lambda c: tuple(int(c[i:i + 2], 16) for i in (1, 3, 5))
art = Image.open(s['art']).convert('RGBA').crop(tuple(s['crop']))
art = art.crop(art.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox())
cv = Image.new('RGBA', (W, H), hx(s['bg']) + (255,)); d = ImageDraw.Draw(cv)
def fnt(size):
    f = ImageFont.truetype(str(ROOT / 'designs' / 'fonts' / s['font']), size)
    if s.get('axes'):
        ax = [a['name'].decode() if isinstance(a['name'], bytes) else a['name'] for a in f.get_variation_axes()]
        f.set_variation_by_axes([s['axes'].get(n, a['default']) for n, a in zip(ax, f.get_variation_axes())])
    return f
def fit(lines):
    size = s.get('size', 170)
    for t, _ in lines:
        while d.textlength(t, font=fnt(size)) > MAXW: size -= 4
    return size
SZ = fit(s.get('top', []) + s.get('bottom', []))
def block(lines, y):
    f = fnt(SZ); asc, desc = f.getmetrics()
    for t, col in lines:
        w = d.textlength(t, font=f); d.text((CX - w / 2, y), t, font=f, fill=hx(col)); y += asc + desc + 10
    return y
y = block(s.get('top', []), 700) + 40
mw = MAXW; mh = round(art.height * mw / art.width)
room = 2700 - y - (len(s.get('bottom', [])) * (SZ + 60))
if mh > room: mh = room; mw = round(art.width * mh / art.height)
cv.alpha_composite(art.resize((mw, mh), Image.LANCZOS), (CX - mw // 2, y)); y += mh + 40
block(s.get('bottom', []), y)
mini = art.resize((s.get('mini', 420), round(art.height * s.get('mini', 420) / art.width)), Image.LANCZOS)
yy = 3300
while yy + mini.height < 5000:
    cv.alpha_composite(mini, (CX - mini.width // 2, yy)); yy += mini.height + 140
cv.convert('RGB').save(sys.argv[2])
