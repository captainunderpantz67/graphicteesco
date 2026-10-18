#!/usr/bin/env python3
"""#275 quality-reset print: White Elephant art (cropped from the live print, old Alfa Slab lines dropped)
over a stacked lockup I STOLE IT. / I'M KEEPING IT. in Bowlby One, both lines full width. usage: build.py <src.png> <out.png>"""
import sys
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parents[2]; F = ROOT / 'designs' / 'fonts'
src, out = sys.argv[1:3]
W = 3400
a = Image.open(src).convert('RGBA')
art = a.crop((0, 300, a.width, 2735)); art = art.crop(art.getbbox())
art = art.resize((W, int(art.height * W / art.width)), Image.LANCZOS)
def line(text, fill, width, size=900):
    f = ImageFont.truetype(str(F / 'BowlbyOne-Regular.ttf'), size)
    bb = f.getbbox(text)
    img = Image.new('RGBA', (bb[2] + 40, bb[3] + 40), (0, 0, 0, 0))
    ImageDraw.Draw(img).text((10, 10), text, font=f, fill=fill)
    img = img.crop(img.getbbox())
    return img.resize((width, int(img.height * width / img.width)), Image.LANCZOS)
h = line('I STOLE IT.', '#8a2a22', W); s = line("I'M KEEPING IT.", '#2b3a57', W)
g1, g2 = 110, 60
c = Image.new('RGBA', (W, art.height + g1 + h.height + g2 + s.height), (0, 0, 0, 0))
c.alpha_composite(art, (0, 0)); c.alpha_composite(h, (0, art.height + g1)); c.alpha_composite(s, (0, art.height + g1 + h.height + g2))
c = c.crop(c.getbbox()); c.save(out, dpi=(300, 300))
print(out, c.size, 'head h', h.height, 'sub h', s.height, 'ratio %.2f' % (s.height / h.height))
