#!/usr/bin/env python3
"""boxer-print.py <spec.json> <out.png>: Printful #428 boxer-brief full-wrap print (7350 x 2550, 'default' placement).
The wrap's center is the BACK seat (a line wider than ~2000 px wraps onto the front and gets cut), so the lockup is 3 stacked lines
~2000 px wide centered at x=3675, and the art motif repeats in a half-drop grid around a clear text zone (rows start below the waistband).
spec: {"art": path, "crop": [x0,y0,x1,y1] (motif only, no text), "bg": "#f3e7cf", "font": "Cinzel[wght].ttf", "axes": [900] (optional),
       "lines": [["TEXT", "#111111"], ...], "mh": 520 (motif height), "outline": 0 (optional px stroke), "outline_fill": "#111111"}"""
import json, sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parent.parent
s = json.load(open(sys.argv[1]))
W, H = 7350, 2550
hx = lambda c: tuple(int(c[i:i + 2], 16) for i in (1, 3, 5))
art = Image.open(s['art']).convert('RGBA').crop(tuple(s['crop']))
art = art.crop(art.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox())
mh = s.get('mh', 520); art = art.resize((round(art.width * mh / art.height), mh), Image.LANCZOS)
cv = Image.new('RGBA', (W, H), hx(s['bg']) + (255,))
zx0, zx1, zy0, zy1 = 2500, 4850, 760, 1900
stepx, stepy = art.width + 260, mh + 170
for r, y in enumerate(range(380, H - 300, stepy)):
    off = (stepx // 2) if r % 2 else 0
    for x in range(-off, W, stepx):
        if x + art.width > zx0 - 120 and x < zx1 + 120 and y + mh > zy0 - 100 and y < zy1 + 100: continue
        cv.alpha_composite(art, (x, y))
d = ImageDraw.Draw(cv)
def fnt(size):
    f = ImageFont.truetype(str(ROOT / 'designs' / 'fonts' / s['font']), size)
    if s.get('axes'): f.set_variation_by_axes(s['axes'])
    return f
sizes = []
for k, (t, col) in enumerate(s['lines']):
    size = s.get('size', 300); f = fnt(size)
    while d.textlength(t, font=f) > 2000: size -= 5; f = fnt(size)
    w = d.textlength(t, font=f)
    cy = 820 + 310 * k
    kw = {'stroke_width': s['outline'], 'stroke_fill': hx(s['outline_fill'])} if s.get('outline') else {}
    d.text(((W - w) / 2, cy), t, font=f, fill=hx(col), anchor='lm', **kw); sizes.append(size)
print(sizes)
cv.convert('RGB').save(sys.argv[2])
