#!/usr/bin/env python3
"""#562 hoodie: type-only redo. Art from docs/print-files/562-mimi-says-yes-hoodie.png with the old upper-left text erased.
One full-width heavy line MIMI (red) SAYS YES. (navy) in Bowlby One above the art, art scaled to R x width.
usage: build.py <src.png> <out.png> [R]"""
import sys
from PIL import Image, ImageDraw, ImageFont
src, out = sys.argv[1:3]; R = float(sys.argv[3]) if len(sys.argv) > 3 else 0.80
a = Image.open(src).convert('RGBA')
d = ImageDraw.Draw(a); d.rectangle((0, 0, 1625, 1235), fill=(0, 0, 0, 0))
art = a.crop(a.getbbox()); L = a.width
art = art.resize((int(L * R), int(art.height * R)), Image.LANCZOS)
f = 'designs/fonts/BowlbyOne-Regular.ttf'
def fit(txt, w):
    s = 500
    while True:
        ft = ImageFont.truetype(f, s); bb = ft.getbbox(txt)
        if bb[2] - bb[0] <= w: return ft, bb
        s -= 4
def line(txt, fill, w):
    size = 900
    while True:
        ft = ImageFont.truetype(f, size); bb = ft.getbbox(txt)
        if bb[2] - bb[0] <= w: break
        size -= 4
    im = Image.new('RGBA', (bb[2] + 40, bb[3] + 40), (0, 0, 0, 0)); ImageDraw.Draw(im).text((10, 10), txt, font=ft, fill=fill)
    return im.crop(im.getbbox())
h1 = line('MIMI', '#b8302a', L); h2 = line('SAYS YES.', '#1b2745', L)
h = Image.new('RGBA', (L, h1.height + 45 + h2.height), (0, 0, 0, 0))
h.alpha_composite(h1.resize((L, h1.height)) if h1.width != L else h1, (0, 0)); h.alpha_composite(h2, ((L - h2.width) // 2, h1.height + 45))
size = 0
g = 50
c = Image.new('RGBA', (L, h.height + g + art.height), (0, 0, 0, 0))
c.alpha_composite(h.resize((L, int(h.height * L / h.width))) if h.width != L else h, (0, 0))
c.alpha_composite(art, ((L - art.width) // 2, h.height + g))
c = c.crop(c.getbbox()); c.save(out, dpi=(300, 300))
print(out, c.size, 'aspect %.2f' % (c.height / c.width), 'size', size, 'headline h', h.height)
