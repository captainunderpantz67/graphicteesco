#!/usr/bin/env python3
"""b-lockup.py <spec.json>  lane B lockup: top line / art / bottom lines, all lines of a group at ONE font size.
spec: {"art": "art.png", "out": "print.png", "W": 3600, "art_w": 0.62, "knock": 3000, "gap": 50, "solid": true,
 "top": {"lines": ["PROMISED TO BEHAVE"], "font": "Graduate-Regular.ttf", "w": 0.9, "fill": "#f3e7cf", "stroke": 14, "sfill": "#f3e7cf"},
 "bottom": {"lines": ["FOR HOW LONG.", "DIDN'T SAY"], "font": ..., "w": 0.9, ...}}
Group font size = the size at which the widest line is w * W. An apostrophe is drawn with air on both sides so the stroke never fuses it to the next letter.
Prints each line's ink width (px) and the headline/punch width ratio."""
import json, subprocess, sys, tempfile, os
from PIL import Image, ImageDraw, ImageFont
S = json.load(open(sys.argv[1])); W = S.get('W', 3600); F = 'designs/fonts/'
def render(text, d, size):
    f = ImageFont.truetype(F + d['font'], size); sk = d.get('stroke', 0); air = int(size * d.get('apo_air', 0.07))
    parts = []
    for i, p in enumerate(text.split("'")):
        parts.append(p)
        if i < len(text.split("'")) - 1: parts.append("'")
    segs = []
    for p in parts:
        bb = f.getbbox(p, stroke_width=sk); segs.append((p, bb))
    tot = sum(bb[2] - bb[0] for _, bb in segs) + 2 * air * text.count("'") + 40
    h = max(bb[3] for _, bb in segs) + 40
    im = Image.new('RGBA', (tot + 40, h + 40), (0, 0, 0, 0)); dr = ImageDraw.Draw(im); x = 20
    for p, bb in segs:
        if p == "'": x += air
        dr.text((x - bb[0], 20), p, font=f, fill=d['fill'], stroke_width=sk, stroke_fill=d.get('sfill'))
        x += bb[2] - bb[0] + (air if p == "'" else 0)
    return im.crop(im.getbbox())
def group(d):
    size = 100
    while max(render(t, d, size).width for t in d['lines']) < W * d.get('w', 0.9) and size < 3000: size += 6
    ims = [render(t, d, size) for t in d['lines']]
    h = sum(i.height for i in ims) + 20 * (len(ims) - 1); o = Image.new('RGBA', (max(i.width for i in ims), h), (0, 0, 0, 0)); y = 0
    for i in ims: o.alpha_composite(i, ((o.width - i.width) // 2, y)); y += i.height + 20
    return o, [i.width for i in ims], size
tmp = tempfile.mktemp(suffix='.png')
Image.open(S['art']).convert('RGB').save(tmp)
subprocess.run([sys.executable, 'scripts/print-prep.py', tmp, tmp, '--width', str(int(W * S.get('art_w', 0.62)))] + (['--solid'] if S.get('solid') else []), check=True, stdout=subprocess.DEVNULL)
if S.get('knock', 3000): subprocess.run([sys.executable, 'scripts/knock-white.py', tmp, tmp, str(S['knock'])], check=True, stdout=subprocess.DEVNULL)
art = Image.open(tmp).convert('RGBA'); art = art.crop(art.getbbox()); os.remove(tmp)
l1, w1, s1 = group(S['top']); l2, w2, s2 = group(S['bottom']); gap = S.get('gap', 50)
H = l1.height + gap + art.height + gap + l2.height
o = Image.new('RGBA', (W, H), (0, 0, 0, 0))
o.alpha_composite(l1, ((W - l1.width) // 2, 0)); o.alpha_composite(art, ((W - art.width) // 2, l1.height + gap))
o.alpha_composite(l2, ((W - l2.width) // 2, H - l2.height))
o = o.crop(o.getbbox()); o.save(S['out'], dpi=(300, 300))
print(S['out'], o.size, 'headline px', w1, 'punch px', w2, 'ratio', round(max(w2) / max(w1), 2), 'type h', l1.height + l2.height, 'of', o.height, round((l1.height + l2.height) / o.height, 2))
