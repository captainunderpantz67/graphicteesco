#!/usr/bin/env python3
"""#245 quality-reset print: Nana's Cookies art (cropped from the live print, old RECIPE NOT AVAILABLE line dropped)
over a stacked heavy lockup THE RECIPE / DIES WITH ME. in Bevan, both lines full width. usage: build.py <src.png> <out.png>"""
import sys
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parents[2]; F = ROOT / 'designs' / 'fonts'
src, out = sys.argv[1:3]
W = 3400
a = Image.open(src).convert('RGBA'); al = np.array(a)[:, :, 3]
rows = (al > 20).sum(1)
# find the empty gap above the old small line (bottom 15% of the canvas)
gap = [y for y in range(2800, 3300) if rows[y] == 0]
print('gap rows', gap[:3], gap[-3:] if gap else None)
cut = gap[0] if gap else 3060
art = a.crop((0, 0, 3600, cut)); art = art.crop(art.getbbox())
art = art.resize((W, int(art.height * W / art.width)), Image.LANCZOS)
def line(text, fill, width, size=900):
    f = ImageFont.truetype(str(F / 'Bevan-Regular.ttf'), size)
    bb = f.getbbox(text)
    img = Image.new('RGBA', (bb[2] + 40, bb[3] + 40), (0, 0, 0, 0))
    ImageDraw.Draw(img).text((10, 10), text, font=f, fill=fill)
    img = img.crop(img.getbbox())
    return img.resize((width, int(img.height * width / img.width)), Image.LANCZOS)
h = line('THE RECIPE', '#5a2a17', W); s = line('DIES WITH ME.', '#a8362d', W)
g1, g2 = 110, 50
c = Image.new('RGBA', (W, art.height + g1 + h.height + g2 + s.height), (0, 0, 0, 0))
c.alpha_composite(art, (0, 0)); c.alpha_composite(h, (0, art.height + g1)); c.alpha_composite(s, (0, art.height + g1 + h.height + g2))
c = c.crop(c.getbbox()); c.save(out, dpi=(300, 300))
print(out, c.size, 'head h', h.height, 'sub h', s.height, 'ratio %.2f' % (s.height / h.height), 'art w %.2f of head' % (art.width / W))
