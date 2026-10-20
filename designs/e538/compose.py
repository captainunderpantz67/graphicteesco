#!/usr/bin/env python3
"""#538 type redo: heavy Alfa Slab stacked lockup around the existing 1950s housewife art (transparent), all inks dark for the light blanks."""
import sys
from PIL import Image, ImageDraw, ImageFont
F = 'designs/fonts/'
src = Image.open('docs/print-files/538-motherhood-exposed-me.png').convert('RGBA')
art = src.crop((0, 540, src.width, 3250)); art = art.crop(art.getbbox()); art.save('designs/e538/art.png')
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
RUST, BROWN, GREEN = '#b4502d', '#3b2a1d', '#3f5a3a'
l1 = line("MOTHERHOOD DIDN'T", 'AlfaSlabOne-Regular.ttf', RUST, 6, BROWN, W)
l2 = line('CHANGE ME.', 'AlfaSlabOne-Regular.ttf', RUST, 6, BROWN, W)
l3 = line('IT EXPOSED ME.', 'Bevan-Regular.ttf', GREEN, 0, GREEN, int(W * 0.96))
gaps = [30, 50, 50]
stack = [l1, l2, art, l3]
H = sum(i.height for i in stack) + sum(gaps)
out = Image.new('RGBA', (max(i.width for i in stack), H), (0, 0, 0, 0))
y = 0
for k, i in enumerate(stack):
    out.alpha_composite(i, ((out.width - i.width) // 2, y)); y += i.height + (gaps[k] if k < 3 else 0)
out.save(sys.argv[1], dpi=(300, 300))
print(out.size, [i.size for i in stack], 'ratio', out.height / out.width, 'l3/l1 height', l3.height / l1.height)
