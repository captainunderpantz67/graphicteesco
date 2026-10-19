#!/usr/bin/env python3
"""#239 quality-reset print: Resting My Eyes art (live print cropped above the old thin sage line) over a stacked
heavy Anton lockup RESTING / MY EYES, both lines full width, tree green and hat red pulled from the art.
usage: build-crew.py <src.png> <out.png> <art width fraction>  (crewneck file: art narrower so the stack fits the 16 in print area at FW 1650)"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parents[2]; F = ROOT / 'designs' / 'fonts'
src, out = sys.argv[1:3]
W = 3400
a = Image.open(src).convert('RGBA')
art = a.crop((0, 0, 3600, 3166)); art = art.crop(art.getbbox())
AW = int(W * float(sys.argv[3])); art = art.resize((AW, int(art.height * AW / art.width)), Image.LANCZOS)
def line(text, fill, width, size=1400):
    f = ImageFont.truetype(str(F / 'Anton-Regular.ttf'), size)
    bb = f.getbbox(text)
    img = Image.new('RGBA', (bb[2] + 40, bb[3] + 40), (0, 0, 0, 0))
    ImageDraw.Draw(img).text((10, 10), text, font=f, fill=fill)
    img = img.crop(img.getbbox())
    return img.resize((width, int(img.height * width / img.width)), Image.LANCZOS)
h = line('RESTING', '#2f4a3a', W); s = line('MY EYES', '#b5403a', W)
g1, g2 = 110, 50
c = Image.new('RGBA', (W, art.height + g1 + h.height + g2 + s.height), (0, 0, 0, 0))
c.alpha_composite(art, ((W - AW) // 2, 0)); c.alpha_composite(h, (0, art.height + g1)); c.alpha_composite(s, (0, art.height + g1 + h.height + g2))
c = c.crop(c.getbbox()); c.save(out, dpi=(300, 300))
print(out, c.size, 'head h', h.height, 'sub h', s.height, 'ratio %.2f' % (s.height / h.height))
