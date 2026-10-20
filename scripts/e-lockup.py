#!/usr/bin/env python3
"""e-lockup.py <spec.json>  lane E redo lockup: top line / art / bottom line (bottom overlaps the art by `overlap` of its height).
spec: {"art": "art.png", "out": "print.png", "W": 3600, "art_w": 0.72, "knock": 3000, "halo": 0, "halo_fill": "#f3e7cf", "fill_petals": false,
 "top": {"text": "...", "font": "Bevan-Regular.ttf", "axes": [..], "w": 1.0, "fill": "#fff", "stroke": 0, "sfill": null},
 "bottom": {... same}, "overlap": 0.10, "gap": 30, "erase": [[x0,y0,x1,y1,"dark"]]}
Prints size, height at FW1500 and the line-height ratio. Art is run through scripts/print-prep.py (flood from border) + knock-white."""
import json, subprocess, sys, tempfile, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np
S = json.load(open(sys.argv[1])); W = S.get('W', 3600); F = 'designs/fonts/'
def line(d, ref_w):
    f0 = lambda size: (lambda f: (f.set_variation_by_axes(d['axes']) if d.get('axes') else None, f)[1])(ImageFont.truetype(F + d['font'], size))
    size = 100; sk = d.get('stroke', 0); width = int(ref_w * d.get('w', 1))
    while True:
        f = f0(size); bb = f.getbbox(d['text'], stroke_width=sk)
        if bb[2] - bb[0] >= width or size > 3500: break
        size += 8
    im = Image.new('RGBA', (bb[2] - bb[0] + 40, bb[3] - bb[1] + 40), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((20 - bb[0], 20 - bb[1]), d['text'], font=f, fill=d['fill'], stroke_width=sk, stroke_fill=d.get('sfill'))
    return im.crop(im.getbbox())
tmp = tempfile.mktemp(suffix='.png')
a0 = Image.open(S['art']).convert('RGB')
for x0, y0, x1, y1 in S.get('erase_dark', []):
    arr = np.array(a0); reg = arr[y0:y1, x0:x1]; m = reg.max(2) < S.get("erase_thr", 70); reg[m] = 255; a0 = Image.fromarray(arr)
a0.save(tmp)
subprocess.run([sys.executable, 'scripts/print-prep.py', tmp, tmp, '--width', str(int(W * S.get('art_w', 0.72)))] + (['--solid'] if S.get('solid') else []), check=True, stdout=subprocess.DEVNULL)
if S.get('knock', 3000): subprocess.run([sys.executable, 'scripts/knock-white.py', tmp, tmp, str(S.get('knock', 3000))], check=True, stdout=subprocess.DEVNULL)
art = Image.open(tmp).convert('RGBA'); art = art.crop(art.getbbox()); os.remove(tmp)
if S.get('halo'):
    r = S['halo']; a = art.split()[3].point(lambda v: 255 if v > 40 else 0)
    grown = a.filter(ImageFilter.MaxFilter(2 * r + 1)).filter(ImageFilter.GaussianBlur(2))
    ring = Image.new('RGBA', art.size, S.get('halo_fill', '#f3e7cf')); ring.putalpha(grown)
    pad = Image.new('RGBA', (art.width + 2 * r, art.height + 2 * r), (0, 0, 0, 0)); pad.alpha_composite(ring, (r, r)); pad.alpha_composite(art, (r, r)); art = pad
gap = S.get('gap', 30)
def stack(d):
    parts = d['text'].split('|')
    ims = [line(dict(d, text=t), W) for t in parts]
    if len(ims) == 1: return ims[0]
    h = sum(i.height for i in ims) + 14 * (len(ims) - 1); o = Image.new('RGBA', (max(i.width for i in ims), h), (0, 0, 0, 0)); y = 0
    for i in ims: o.alpha_composite(i, ((o.width - i.width) // 2, y)); y += i.height + 14
    return o
l1 = stack(S['top']); l2 = line(S['bottom'], W if S['bottom'].get('ref', 'W') == 'W' else art.width)
ov = int(art.height * S.get('overlap', 0.10))
H = l1.height + gap + art.height + l2.height - ov
o = Image.new('RGBA', (W, H), (0, 0, 0, 0))
o.alpha_composite(art, ((W - art.width) // 2, l1.height + gap)); o.alpha_composite(l1, ((W - l1.width) // 2, 0))
o.alpha_composite(l2, ((W - l2.width) // 2, H - l2.height))
o = o.crop(o.getbbox()); o.save(S['out'], dpi=(300, 300))
print(S['out'], o.size, 'tall in at FW1500:', round(o.height / o.width * 10, 1), 'l1/l2 h', round(l1.height / l2.height, 2), 'l1 w/art', round(l1.width / art.width, 2))
