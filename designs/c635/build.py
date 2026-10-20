#!/usr/bin/env python3
"""#635 zip hoodie: type-only redo. Keeps headline + art from the live print files; AGAIN. re-set heavy (Bowlby One caps).
usage: build.py <dark|light>"""
import sys
from PIL import Image, ImageDraw, ImageFont
mode = sys.argv[1]
src = {'dark': ('docs/print-files/635-out-fished-dark-ink.png', (0, 304), (334, 3424)),
       'light': ('docs/print-files/635-out-fished-light-ink.png', (0, 319), (425, 3545))}[mode]
a = Image.open(src[0]).convert('RGBA'); W = a.width
head = a.crop((0, src[1][0], W, src[1][1])); art = a.crop((0, src[2][0], W, src[2][1]))
fill = '#1f2a4d' if mode == 'dark' else '#f3e9d2'
f = ImageFont.truetype('designs/fonts/BowlbyOne-Regular.ttf', 600)
size = 600
while f.getbbox('AGAIN.')[2] - f.getbbox('AGAIN.')[0] > int(W * 0.78): size -= 10; f = ImageFont.truetype('designs/fonts/BowlbyOne-Regular.ttf', size)
bb = f.getbbox('AGAIN.'); t = Image.new('RGBA', (bb[2] + 80, bb[3] + 80), (0, 0, 0, 0))
d = ImageDraw.Draw(t)
if mode == 'light': d.text((30, 30), 'AGAIN.', font=f, fill=fill, stroke_width=0)
else: d.text((30, 30), 'AGAIN.', font=f, fill=fill)
t = t.crop(t.getbbox())
c = Image.new('RGBA', (W, head.height + 40 + art.height + 70 + t.height), (0, 0, 0, 0))
c.alpha_composite(head, (0, 0)); c.alpha_composite(art, (0, head.height + 40))
c.alpha_composite(t, ((W - t.width) // 2, head.height + 40 + art.height + 70))
c = c.crop(c.getbbox()); c.save(f'docs/print-files/635-out-fished-{mode}-v2.png', dpi=(300, 300))
print(mode, c.size, 'headline h', head.height, 'again h', t.height)
