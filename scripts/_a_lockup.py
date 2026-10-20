#!/usr/bin/env python3
"""Lane A redo lockup: _a_lockup.py <art.png> <out_prefix> <order> <W> <ratio> <json lines>
lines = [{"text","font","fill_light","fill_dark"?...}] handled by caller; here: one variant per call.
usage: _a_lockup.py art out.png W totalratio order(h1,art,h2 | art,h1,h2 | h1,h2,art) spec.json
spec.json = [{"text":..,"font":..,"fill":[r,g,b],"maxw":0.97}, ...]  (1 or 2 lines)"""
import sys, json
from PIL import Image, ImageDraw, ImageFont
art, out, W, ratio, order, spec = sys.argv[1:7]; W = int(W); ratio = float(ratio); spec = json.load(open(spec))
a = Image.open(art).convert('RGBA'); a = a.crop(a.getbbox())
def line(t, font, fill, maxw, size=1400, track=0.0):
    while True:
        f = ImageFont.truetype('designs/fonts/' + font, size); tr = int(size * track)
        adv = [f.getlength(c) for c in t]; tot = int(sum(adv) + tr * (len(t) - 1))
        if tot <= maxw: break
        size = int(size * 0.99)
    asc, desc = f.getmetrics(); im = Image.new('RGBA', (tot + 400, asc + desc + 300), (0, 0, 0, 0)); d = ImageDraw.Draw(im); x = 200
    for c, w in zip(t, adv): d.text((x, 100), c, font=f, fill=tuple(fill) + (255,), stroke_width=spec_stroke(c), stroke_fill=(0, 0, 0, 0)); x += w + tr
    return im.crop(im.getbbox())
def spec_stroke(c): return 0
gap = 100
L = [line(s['text'], s['font'], s['fill'], int(W * s.get('maxw', 1.0)), s.get('size', 1400)) for s in spec]
texth = sum(l.height for l in L) + gap * len(L)
ah = int(ratio * W - texth); aw = int(ah * a.width / a.height)
if aw > W: aw = W; ah = int(aw * a.height / a.width)
a2 = a.resize((aw, ah), Image.LANCZOS)
parts = {'h1': L[0], 'h2': L[1] if len(L) > 1 else None, 'art': a2}
seq = [parts[k] for k in order.split(',') if parts.get(k) is not None]
H = sum(i.height for i in seq) + gap * (len(seq) - 1)
o = Image.new('RGBA', (W, H), (0, 0, 0, 0)); y = 0
for im in seq: o.alpha_composite(im, ((W - im.width) // 2, y)); y += im.height + gap
o.save(out); print(out, o.size, [i.size for i in seq], 'art', round(aw / W, 2), 'h2/h1', round(L[-1].height / L[0].height, 2) if len(L) > 1 else '')
