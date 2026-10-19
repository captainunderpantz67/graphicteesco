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
# v2 (director REDO 2026-10-18): every line is sized to the full leg width (MAXW, >= 90% of the visible ~820 px) and the lockup + art
# fill the leg from just under the cuff (y 700) to ~1 in above the heel (y 2700). A second file, rotated 180 deg, goes on the two FRONT placements
# (the Printful front-view sock is drawn toe-up, so the unrotated panel read upside down there): out-front.png.
LEG0, LEG1, GAP, CAP = 700, 2700, s.get('gap', 45), s.get('cap', 330)
def tight(t, f):
    b = d.textbbox((0, 0), t, font=f); return b[1], b[3]
UNI = None
if s.get('uniform'):  # every word the same size, set by the longest line (director REDO #660: the punch word must not be the smallest)
    UNI = max(sz for sz in range(CAP, 20, -4) if all(d.textlength(t, font=fnt(sz)) <= MAXW for t, _ in s.get('top', []) + s.get('bottom', [])))
def sized(t):
    sz = UNI or CAP
    while d.textlength(t, font=fnt(sz)) > MAXW: sz -= 4
    f = fnt(sz); y0, y1 = tight(t, f); return f, y0, y1 - y0
rows = [('T', t, c) for t, c in s.get('top', [])] + [('A', None, None)] + [('B', t, c) for t, c in s.get('bottom', [])] + ([('A', None, None)] if s.get('art_twice') else [])
nA = sum(1 for r in rows if r[0] == 'A')
meas = {i: sized(t) for i, (k, t, c) in enumerate(rows) if t}
th = sum(m[2] for m in meas.values()) + GAP * (len(rows) - 1)
mh = (LEG1 - LEG0 - th) // nA; mw = round(art.width * mh / art.height)
if mw > MAXW: mw = MAXW; mh = round(art.height * mw / art.width)
left = LEG1 - LEG0 - th - mh * nA
if left > 300: y, extra = LEG0 + left // 2, 0  # art is width-limited: centre the block on the leg
else: y, extra = LEG0, left // max(1, len(rows) - 1)
for i, (k, t, c) in enumerate(rows):
    if k == 'A':
        cv.alpha_composite(art.resize((mw, mh), Image.LANCZOS), (CX - mw // 2, y)); y += mh + GAP + extra
    else:
        f, y0, h = meas[i]; w = d.textlength(t, font=f); d.text((CX - w / 2, y - y0), t, font=f, fill=hx(c)); y += h + GAP + extra
mini = art.resize((s.get('mini', 420), round(art.height * s.get('mini', 420) / art.width)), Image.LANCZOS)
yy = 3300
while yy + mini.height < 5000:
    cv.alpha_composite(mini, (CX - mini.width // 2, yy)); yy += mini.height + 140
out = Path(sys.argv[2]); cv = cv.convert('RGB'); cv.save(out)
cv.rotate(180).save(out.with_name(out.stem + '-front' + out.suffix))
