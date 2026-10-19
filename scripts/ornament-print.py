#!/usr/bin/env python3
"""ornament-print.py <spec.json> <out.png>: Printful #881 ceramic ornament (circle) print file, 954 x 954 px, flat bg disc, type kept inside the safe circle.
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
