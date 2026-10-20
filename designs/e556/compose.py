#!/usr/bin/env python3
"""#556 type redo: heavy two-line lockup around the existing golfer art (transparent), all inks dark for the six light blanks."""
import sys
from PIL import Image, ImageDraw, ImageFont
F = 'designs/fonts/'
src = Image.open('docs/print-files/556-army-golf.png').convert('RGBA')
art = src.crop((0, 330, src.width, 3010)); art = art.crop(art.getbbox()); art.save('designs/e556/art.png')
W = art.width
def line(text, font, fill, stroke, sfill, width):
    size = 80
    while True:
        f = ImageFont.truetype(F + font, size)
        bb = f.getbbox(text, stroke_width=stroke)
        if bb[2] - bb[0] >= width or size > 2000:
            break
        size += 4
    im = Image.new('RGBA', (bb[2] - bb[0] + 20, bb[3] - bb[1] + 20), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((10 - bb[0], 10 - bb[1]), text, font=f, fill=fill, stroke_width=stroke, stroke_fill=sfill)
    return im.crop(im.getbbox())
ORANGE, BROWN, GREEN = '#c8642a', '#3b2a1d', '#2f4a33'
l1 = line('LEFT. RIGHT. LEFT.', 'BowlbyOne-Regular.ttf', ORANGE, 8, BROWN, W)
l2 = line('I PLAY ARMY GOLF.', 'Bevan-Regular.ttf', GREEN, 0, GREEN, int(W * 0.96))
gap = 40
stack = [l1, art, l2]
H = sum(i.height for i in stack) + gap * 2
out = Image.new('RGBA', (max(i.width for i in stack), H), (0, 0, 0, 0))
y = 0
for i in stack:
    out.alpha_composite(i, ((out.width - i.width) // 2, y)); y += i.height + gap
out.save(sys.argv[1], dpi=(300, 300))
print(out.size, [i.size for i in stack], 'ratio', out.height / out.width)
