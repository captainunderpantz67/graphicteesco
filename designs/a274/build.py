#!/usr/bin/env python3
"""#274 crewneck light-ink file for Navy: #273's approved TAKE 41. / STILL SMILING. print with the lockup recolored
(TAKE 41. warm red #f0705f, STILL SMILING. cream #f5ecd7); art above the lockup is copied untouched. usage: build.py <273-take-41.png> <out.png>"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parents[2]; F = ROOT / 'designs' / 'fonts'
src, out = sys.argv[1:3]
W = 3400; ART_H = 3426
a = Image.open(src).convert('RGBA')
art = a.crop((0, 0, W, ART_H))
def line(text, fill, width, size=900):
    f = ImageFont.truetype(str(F / 'Fraunces[SOFT,WONK,opsz,wght].ttf'), size)
    f.set_variation_by_axes([24, 900, 100, 0])
    bb = f.getbbox(text)
    img = Image.new('RGBA', (bb[2] + 40, bb[3] + 40), (0, 0, 0, 0))
    ImageDraw.Draw(img).text((10, 10), text, font=f, fill=fill)
    img = img.crop(img.getbbox())
    return img.resize((width, int(img.height * width / img.width)), Image.LANCZOS)
h = line('TAKE 41.', '#f0705f', W); s = line('STILL SMILING.', '#f5ecd7', W)
g1, g2 = 110, 60
c = Image.new('RGBA', (W, art.height + g1 + h.height + g2 + s.height), (0, 0, 0, 0))
c.alpha_composite(art, (0, 0)); c.alpha_composite(h, (0, art.height + g1)); c.alpha_composite(s, (0, art.height + g1 + h.height + g2))
c = c.crop(c.getbbox()); c.save(out, dpi=(300, 300))
print(out, c.size)
