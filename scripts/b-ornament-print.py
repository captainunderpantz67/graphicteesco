#!/usr/bin/env python3
"""b-ornament-print.py <spec.json> <out.png>: Printful #881 ceramic ornament (circle) print file, 954 x 954 px, flat bg disc, type kept inside the safe circle.
spec: {"art": path, "crop": [x0,y0,x1,y1] (motif only), "bg": "#1f2d3d", "font": file, "axes": {...} (optional), "safe": 405 (inner radius px),
       "rows": [{"t": "TEXT", "c": "#f3e7cf", "h": cap height px, "w": max width px (optional)} | {"art": true, "h": height px}], "gap": 14}
Rows stack top to bottom, centred as a block; each text row is shrunk until its corners sit inside the safe circle. Prints the fit widths."""
import json, math, sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parent.parent
s = json.load(open(sys.argv[1])); S = 954; C = S / 2; R = s.get('safe', 405); GAP = s.get('gap', 14)
hx = lambda c: tuple(int(c[i:i + 2], 16) for i in (1, 3, 5))
art = Image.open(s['art']).convert('RGBA').crop(tuple(s['crop']))
art = art.crop(art.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox())
cv = Image.new('RGBA', (S, S), hx(s['bg']) + (255,)); d = ImageDraw.Draw(cv)
def fnt(sz):
    f = ImageFont.truetype(str(ROOT / 'designs' / 'fonts' / s['font']), sz)
    if s.get('axes'):
        ax = [a['name'].decode() if isinstance(a['name'], bytes) else a['name'] for a in f.get_variation_axes()]
        f.set_variation_by_axes([s['axes'].get(n, a['default']) for n, a in zip(ax, f.get_variation_axes())])
    return f
def half(dy): return math.sqrt(max(0, R * R - dy * dy))
rows = s['rows']; tot = sum(r['h'] for r in rows) + GAP * (len(rows) - 1); y = s["top"] if "top" in s else C - tot / 2 + s.get("dy", 0)
for r in rows:
    h = r['h']
    if r.get('art'):
        w = round(art.width * h / art.height); mw = 2 * half(max(abs(y - C), abs(y + h - C)))
        if w > mw: w = int(mw); h = round(art.height * w / art.width)
        cv.alpha_composite(art.resize((w, h), Image.LANCZOS), (round(C - w / 2), round(y))); print(f'art {w}x{h} at y {y:.0f}')
    else:
        sz = 400
        while True:
            f = fnt(sz); b = d.textbbox((0, 0), r['t'], font=f); th = b[3] - b[1]; tw = b[2] - b[0]
            lim = 2 * half(max(abs(y - C), abs(y + th - C)))
            if r.get('w'): lim = min(lim, r['w'])
            if th <= h and tw <= lim: break
            sz -= 2
        d.text((C - tw / 2 - b[0], y - b[1]), r['t'], font=f, fill=hx(r['c'])); print(f'{r["t"]}: size {sz} {tw}x{th} limit {lim:.0f} at y {y:.0f}')
        h = th
    y += h + GAP
cv.convert('RGB').save(sys.argv[2])
"""ornament-print.py <spec.json> <out.png>: Printful #881 ceramic ornament circle file, 954 x 954 (300 dpi, 2.76 in disc), whole square filled with the bg
so no white ring shows; all type and art stay inside the inner ~85% circle (R 405 px) because the edge wraps on the glaze.
spec: {"art": path, "crop": [x0,y0,x1,y1] (optional), "bg": "#f3e7cf", "art_h": 380 (max art height), "gap": 14,
       "top": [{"text":..., "font": file, "fill": "#1b2a4a", "stroke": 4, "stroke_fill": "#f3e7cf", "max": 90 (max px height), "axes": [..] (optional)}],
       "bottom": [...]}
Each line is sized to the chord of the safe circle at its far edge (the loudest it can be), capped by "max" cap height."""
import json, sys, math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parent.parent
s = json.load(open(sys.argv[1])); N, C, R = 954, 477, s.get('radius', 405)
hx = lambda c: tuple(int(c[i:i + 2], 16) for i in (1, 3, 5))
art = Image.open(s['art']).convert('RGBA')
if s.get('crop'): art = art.crop(tuple(s['crop']))
bb = art.getchannel('A').point(lambda v: 255 if v < 250 else 0).getbbox()
# art on white: knock white to transparent from the border (flood) so the bg shows through
import numpy as np
a = np.array(art); rgb = a[..., :3].astype(int)
white = (rgb.min(axis=2) > 238) if (a[..., 3] < 250).mean() < 0.02 else np.zeros(rgb.shape[:2], bool)  # opaque art on white: knock the white; transparent art: keep its alpha
from collections import deque
h, w = white.shape; seen = np.zeros_like(white); q = deque()
for x in range(w):
    for y in (0, h - 1):
        if white[y, x] and not seen[y, x]: seen[y, x] = True; q.append((y, x))
for y in range(h):
    for x in (0, w - 1):
        if white[y, x] and not seen[y, x]: seen[y, x] = True; q.append((y, x))
while q:
    y, x = q.popleft()
    for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        yy, xx = y + dy, x + dx
        if 0 <= yy < h and 0 <= xx < w and white[yy, xx] and not seen[yy, xx]: seen[yy, xx] = True; q.append((yy, xx))
a[..., 3] = np.where(seen | (white & s.get("knock_all", True)), 0, a[..., 3]); art = Image.fromarray(a)
art = art.crop(art.getchannel('A').getbbox())
cv = Image.new('RGBA', (N, N), hx(s['bg']) + (255,)); d = ImageDraw.Draw(cv)
def fnt(l, size):
    f = ImageFont.truetype(str(ROOT / 'designs' / 'fonts' / l['font']), size)
    if l.get('axes'): f.set_variation_by_axes(l['axes'])
    return f
def chord(y0, y1): # width of safe circle at the vertical edge of [y0,y1] farthest from the centre
    dy = max(abs(y0 - C), abs(y1 - C)); return 2 * math.sqrt(max(R * R - dy * dy, 1))
lines = [('T', l) for l in s.get('top', [])] + [('A', None)] + [('B', l) for l in s.get('bottom', [])]
GAP = s.get('gap', 14); ah = s.get('art_h', 380)
est = {}
for it in range(6):
    # lay out with current size estimates, then re-fit sizes to the chord at their positions
    hs = [est.get(i, (l or {}).get('max', 90)) if l else ah for i, (k, l) in enumerate(lines)]
    tot = sum(hs) + GAP * (len(lines) - 1); y = C - tot / 2; pos = []
    for hh in hs: pos.append((y, y + hh)); y += hh + GAP
    for i, (k, l) in enumerate(lines):
        if not l: continue
        wmax = chord(*pos[i]) * s.get('fill_w', 0.97); size = 400
        while True:
            f = fnt(l, size); b = d.textbbox((0, 0), l['text'], font=f, stroke_width=l.get('stroke', 0))
            if b[2] - b[0] <= wmax and b[3] - b[1] <= l.get('max', 90): break
            size -= 2
        est[i] = b[3] - b[1]
ah_fit = ah; y0a = pos[[i for i, (k, l) in enumerate(lines) if k == 'A'][0]]
for i, (k, l) in enumerate(lines):
    y0, y1 = pos[i]
    if k == 'A':
        mh = ah; mw = round(art.width * mh / art.height); mw_max = chord(y0, y1) * 1.0
        if mw > mw_max: mw = round(mw_max); mh = round(art.height * mw / art.width)
        cv.alpha_composite(art.resize((mw, mh), Image.LANCZOS), (C - mw // 2, round((y0 + y1) / 2 - mh / 2)))
    else:
        wmax = chord(y0, y1) * s.get('fill_w', 0.97); size = 400
        while True:
            f = fnt(l, size); b = d.textbbox((0, 0), l['text'], font=f, stroke_width=l.get('stroke', 0))
            if b[2] - b[0] <= wmax and b[3] - b[1] <= l.get('max', 90): break
            size -= 2
        tw, th = b[2] - b[0], b[3] - b[1]
        d.text((C - tw / 2 - b[0], (y0 + y1) / 2 - th / 2 - b[1]), l['text'], font=f, fill=hx(l['fill']), stroke_width=l.get('stroke', 0), stroke_fill=hx(l.get('stroke_fill', l['fill'])))
out = Path(sys.argv[2]); cv.convert('RGB').save(out)
prev = cv.convert('RGB'); m = Image.new('L', (N, N), 0); ImageDraw.Draw(m).ellipse((0, 0, N - 1, N - 1), fill=255)
bgw = Image.new('RGB', (N, N), (255, 255, 255)); bgw.paste(prev, mask=m); bgw.save(out.with_name(out.stem + '-disc.png'))
