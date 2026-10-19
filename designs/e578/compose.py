#!/usr/bin/env python3
"""#578 type redo: Bowlby One cream SCARY DOG. + Anton mustard AFRAID OF THE VACUUM. at full art width around the existing pit bull art (all colors are dark blanks)."""
import sys
from PIL import Image, ImageDraw, ImageFont
F = 'designs/fonts/'
src = Image.open('docs/print-files/578-scary-dog.png').convert('RGBA')
art = src.crop((0, 560, src.width, 3590)); art = art.crop(art.getbbox()); art.save('designs/e578/art.png')
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
CREAM, MUSTARD, BROWN = '#f3e6c8', '#e8a935', '#2a1a10'
l1 = line('SCARY DOG.', 'BowlbyOne-Regular.ttf', CREAM, 0, CREAM, W)
l2 = line('AFRAID OF THE VACUUM.', 'Anton-Regular.ttf', MUSTARD, 0, MUSTARD, W)
gaps = [40, 50]
stack = [l1, art, l2]
H = sum(i.height for i in stack) + sum(gaps)
out = Image.new('RGBA', (max(i.width for i in stack), H), (0, 0, 0, 0))
y = 0
for k, i in enumerate(stack):
    out.alpha_composite(i, ((out.width - i.width) // 2, y)); y += i.height + (gaps[k] if k < 2 else 0)
out.save(sys.argv[1], dpi=(300, 300))
print(out.size, [i.size for i in stack], 'ratio', out.height / out.width, 'l2/l1 height', l2.height / l1.height)
