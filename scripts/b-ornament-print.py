#!/usr/bin/env python3
"""b-ornament-print.py <spec.json> <out.png>: Printful #881 ceramic ornament circle file, 954 x 954 (300 dpi, 2.76 in disc), whole square filled with the bg
so no white ring shows; all type and art stay inside the inner ~85% circle (R 405 px) because the edge wraps on the glaze, and below the string hole
(top_min, default y 180; the hole sits at file y ~95-160).
spec: {"art": path, "crop": [x0,y0,x1,y1] (optional), "bg": "#f3e7cf", "art_h": 380 (max art height), "gap": 14, "fill_w": 0.97, "top_min": 180,
       "top": [{"text":..., "font": file, "fill": "#1b2a4a", "stroke": 4, "stroke_fill": "#f3e7cf", "max": 90 (max px height), "axes": [..] (optional)}],
       "bottom": [...]}
Each line is sized to the chord of the safe circle at its far edge (the loudest it can be), capped by "max" height. Writes out.png and out-disc.png (white outside the disc)."""
import json, sys, math
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parent.parent
s = json.load(open(sys.argv[1])); N, C, R = 954, 477, s.get('radius', 405)
hx = lambda c: tuple(int(c[i:i + 2], 16) for i in (1, 3, 5))
art = Image.open(s['art']).convert('RGBA')
if s.get('crop'): art = art.crop(tuple(s['crop']))
a = np.array(art); rgb = a[..., :3].astype(int)
# opaque art on white: knock the white to transparent; art that already has transparency keeps its alpha
white = (rgb.min(axis=2) > 238) if (a[..., 3] < 250).mean() < 0.02 else np.zeros(rgb.shape[:2], bool)
a[..., 3] = np.where(white, 0, a[..., 3]); art = Image.fromarray(a)
art = art.crop(art.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox())
cv = Image.new('RGBA', (N, N), hx(s['bg']) + (255,)); d = ImageDraw.Draw(cv)
def fnt(l, size):
    f = ImageFont.truetype(str(ROOT / 'designs' / 'fonts' / l['font']), size)
    if l.get('axes'): f.set_variation_by_axes(l['axes'])
    return f
def chord(y0, y1):  # width of the safe circle at the vertical edge of [y0,y1] farthest from the centre
    dy = max(abs(y0 - C), abs(y1 - C)); return 2 * math.sqrt(max(R * R - dy * dy, 1))
lines = [('T', l) for l in s.get('top', [])] + [('A', None)] + [('B', l) for l in s.get('bottom', [])]
GAP = s.get('gap', 14); ah = s.get('art_h', 380)
def fit(l, y0, y1):
    wmax = chord(y0, y1) * s.get('fill_w', 0.97); size = 400
    while True:
        f = fnt(l, size); b = d.textbbox((0, 0), l['text'], font=f, stroke_width=l.get('stroke', 0))
        if b[2] - b[0] <= wmax and b[3] - b[1] <= l.get('max', 90): return f, b
        size -= 2
        if size < 20: return f, b
est = {}; BOT = s.get('bottom_max', 785)  # lowest y the last line may reach; the art shrinks to make the stack fit between top_min and here
for it in range(10):
    hs = [est.get(i, (l or {}).get('max', 90)) if l else ah for i, (k, l) in enumerate(lines)]
    tot = sum(hs) + GAP * (len(lines) - 1); y = max(C - tot / 2, s.get('top_min', 180)); pos = []
    for hh in hs: pos.append((y, y + hh)); y += hh + GAP
    if y - GAP > BOT: ah = max(120, ah - (y - GAP - BOT))
    for i, (k, l) in enumerate(lines):
        if l: f, b = fit(l, *pos[i]); est[i] = b[3] - b[1]
for i, (k, l) in enumerate(lines):
    y0, y1 = pos[i]
    if k == 'A':
        mh = ah; mw = round(art.width * mh / art.height); mw_max = chord(y0, y1)
        if mw > mw_max: mw = round(mw_max); mh = round(art.height * mw / art.width)
        cv.alpha_composite(art.resize((mw, mh), Image.LANCZOS), (C - mw // 2, round((y0 + y1) / 2 - mh / 2)))
    else:
        f, b = fit(l, y0, y1); tw, th = b[2] - b[0], b[3] - b[1]
        d.text((C - tw / 2 - b[0], (y0 + y1) / 2 - th / 2 - b[1]), l['text'], font=f, fill=hx(l['fill']), stroke_width=l.get('stroke', 0), stroke_fill=hx(l.get('stroke_fill', l['fill'])))
        print(f'{l["text"]}: {tw}x{th} of chord {chord(y0, y1):.0f} y {y0:.0f}-{y1:.0f}')
out = Path(sys.argv[2]); cv.convert('RGB').save(out)
m = Image.new('L', (N, N), 0); ImageDraw.Draw(m).ellipse((0, 0, N - 1, N - 1), fill=255)
bgw = Image.new('RGB', (N, N), (255, 255, 255)); bgw.paste(cv.convert('RGB'), mask=m); bgw.save(out.with_name(out.stem + '-disc.png'))
