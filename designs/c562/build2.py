#!/usr/bin/env python3
"""#562 v2: MIMI heavy full width on top; art scaled to R, right aligned, pulled up under it; SAYS YES. in the art's empty upper-left void.
usage: build2.py <src.png> <out.png> [R] [Wsays] [lift]"""
import sys
from PIL import Image, ImageDraw, ImageFont
src, out = sys.argv[1:3]; R = float(sys.argv[3]); WS = float(sys.argv[4]); LIFT = int(sys.argv[5])
a = Image.open(src).convert('RGBA'); L = a.width
ImageDraw.Draw(a).rectangle((0, 0, 1625, 1235), fill=(0, 0, 0, 0))
art = a.crop(a.getbbox()); art = art.resize((int(art.width * R), int(art.height * R)), Image.LANCZOS)
f = 'designs/fonts/BowlbyOne-Regular.ttf'
def line(txt, fill, w):
    size = 900
    while True:
        ft = ImageFont.truetype(f, size); bb = ft.getbbox(txt)
        if bb[2] - bb[0] <= w: break
        size -= 4
    im = Image.new('RGBA', (bb[2] + 40, bb[3] + 40), (0, 0, 0, 0)); ImageDraw.Draw(im).text((10, 10), txt, font=ft, fill=fill)
    return im.crop(im.getbbox())
h1 = line('MIMI', '#b8302a', L)
sa = line('SAYS', '#1b2745', int(L * WS)); ye = line('YES.', '#1b2745', int(L * WS))
sc = min(1, sa.width / max(sa.width, 1))
# same type size for both lines: scale YES. by the SAYS height ratio
ye = line('YES.', '#1b2745', int(L * WS * 10)) ; k = sa.height / ye.height; ye = ye.resize((int(ye.width * k), sa.height), Image.LANCZOS)
s1 = Image.new('RGBA', (max(sa.width, ye.width), sa.height * 2 + 40), (0, 0, 0, 0)); s1.alpha_composite(sa, (0, 0)); s1.alpha_composite(ye, (0, sa.height + 40))
H = h1.height; gap = 60
artY = H + gap - LIFT
c = Image.new('RGBA', (L, artY + art.height), (0, 0, 0, 0))
c.alpha_composite(art, (L - art.width, artY))
c.alpha_composite(h1, (0, 0))
c.alpha_composite(s1, (0, H + gap + 30))
c = c.crop(c.getbbox()); c.save(out, dpi=(300, 300))
print(out, c.size, 'aspect %.2f' % (c.height / c.width), 'MIMI h', H, 'says h', s1.height, 'says w', s1.width, 'ratio %.2f' % (s1.height / H))
