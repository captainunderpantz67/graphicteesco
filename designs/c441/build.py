#!/usr/bin/env python3
"""#441 type redo: octopus art (cropped above the old Lobster lettering) over a stacked heavy AlfaSlabOne lockup
EIGHT ARMS, / ZERO HUGS, both lines full art width, cream and coral pulled from the art. usage: build.py <src.png> <out.png>"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parents[2]; F = ROOT / 'designs' / 'fonts'
src, out = sys.argv[1:3]
a = Image.open(src).convert('RGBA')
art = a.crop((0, 0, a.width, 2280)); art = art.crop(art.getbbox())
W = art.width
# print must fit the 1650x1650 front area at FW 1500 (aspect <= 1.09): art at 76% of the lockup width
art = art.resize((int(W * 0.76), int(art.height * 0.76)), Image.LANCZOS)
def line(text, fill, width, size=1200):
    f = ImageFont.truetype(str(F / 'AlfaSlabOne-Regular.ttf'), size)
    bb = f.getbbox(text, stroke_width=14)
    img = Image.new('RGBA', (bb[2] + 80, bb[3] + 80), (0, 0, 0, 0))
    ImageDraw.Draw(img).text((20, 20), text, font=f, fill=fill, stroke_width=14, stroke_fill='#1c2a40')
    img = img.crop(img.getbbox())
    return img.resize((width, int(img.height * width / img.width)), Image.LANCZOS)
h = line('EIGHT ARMS,', '#f3e6cb', W); s = line('ZERO HUGS', '#ee6c63', W)
g1, g2 = 20, 50
c = Image.new('RGBA', (W, art.height + g1 + h.height + g2 + s.height), (0, 0, 0, 0))
c.alpha_composite(art, ((W - art.width) // 2, 0)); c.alpha_composite(h, (0, art.height + g1)); c.alpha_composite(s, (0, art.height + g1 + h.height + g2))
c = c.crop(c.getbbox()); c.save(out, dpi=(300, 300))
print(out, c.size, 'head h', h.height, 'sub h', s.height, 'ratio %.2f' % (s.height / h.height))
