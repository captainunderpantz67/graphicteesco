#!/usr/bin/env python3
"""#555 type redo: stacked heavy lockup around the existing goat art (transparent), light-blank ink."""
import sys
from PIL import Image, ImageDraw, ImageFont
F = 'designs/fonts/'
src = Image.open('docs/print-files/555-treat-me-like-wildlife.png').convert('RGBA')
art = src.crop((0, 608, src.width, 2496)); art = art.crop(art.getbbox()); art.save('designs/e555/art.png')
W = art.width
art = art.resize((int(W*0.86), int(art.height*0.86)), Image.LANCZOS)
def line(text, font, fill, stroke, sfill, width, wght=None):
    size = 80
    while True:
        f = ImageFont.truetype(F + font, size)
        if wght: f.set_variation_by_axes([wght])
        bb = f.getbbox(text, stroke_width=stroke)
        if bb[2] - bb[0] >= width or size > 2000:
            break
        size += 4
    im = Image.new('RGBA', (bb[2] - bb[0] + 20, bb[3] - bb[1] + 20), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((10 - bb[0], 10 - bb[1]), text, font=f, fill=fill, stroke_width=stroke, stroke_fill=sfill)
    return im.crop(im.getbbox())
RUST, NAVY, GREEN = '#b6492f', '#1f2a44', '#3d6650'
l1 = line('TREAT ME LIKE', 'Anton-Regular.ttf', RUST, 10, NAVY, W)
l2 = line('WILDLIFE.', 'Anton-Regular.ttf', NAVY, 0, NAVY, W)
l3 = line('ADMIRE FROM 25 YARDS.', 'Anton-Regular.ttf', GREEN, 6, NAVY, int(W * 0.96))
gap = 30
stack = [l1, l2, art, l3]
H = sum(i.height for i in stack) + gap * 3
out = Image.new('RGBA', (max(i.width for i in stack), H), (0, 0, 0, 0))
y = 0
for i in stack:
    out.alpha_composite(i, ((out.width - i.width) // 2, y)); y += i.height + gap
out.save(sys.argv[1], dpi=(300, 300))
print(out.size, [i.size for i in stack], 'ratio', out.height / out.width)
