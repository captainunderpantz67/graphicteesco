#!/usr/bin/env python3
"""#649 type redo: OFF DUTY. Bowlby One heavy at full art width, NOT LOOKING AT YOUR SINK. Anton one line, full width, same plumber art.
light file (dark blanks): cream + mustard; dark file (Natural, Ash, Athletic Heather): navy + red with cream keylines."""
from PIL import Image, ImageDraw, ImageFont
F = 'designs/fonts/'
def line(text, font, fill, stroke, sfill, width):
    size = 80
    while True:
        f = ImageFont.truetype(F + font, size)
        bb = f.getbbox(text, stroke_width=stroke)
        if bb[2] - bb[0] >= width or size > 2400: break
        size += 4
    im = Image.new('RGBA', (bb[2] - bb[0] + 20, bb[3] - bb[1] + 20), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((10 - bb[0], 10 - bb[1]), text, font=f, fill=fill, stroke_width=stroke, stroke_fill=sfill)
    return im.crop(im.getbbox())
def build(src, rows, out, c1, c2, s, k):
    im = Image.open(src).convert('RGBA'); art = im.crop((0, rows[0], im.width, rows[1])); art = art.crop(art.getbbox()); W = art.width
    l1 = line('OFF DUTY.', 'BowlbyOne-Regular.ttf', c1, k, s, W)
    l2 = line('NOT LOOKING AT YOUR SINK.', 'Anton-Regular.ttf', c2, k, s, W)
    stack = [l1, art, l2]; gaps = [40, 50]
    o = Image.new('RGBA', (max(i.width for i in stack), sum(i.height for i in stack) + sum(gaps)), (0, 0, 0, 0)); y = 0
    for n, i in enumerate(stack):
        o.alpha_composite(i, ((o.width - i.width) // 2, y)); y += i.height + (gaps[n] if n < 2 else 0)
    o.save(out, dpi=(300, 300)); print(out, o.size, 'ratio', o.height / o.width, 'l2/l1', l2.height / l1.height)
CREAM, MUSTARD, NAVY, RED = '#f3e7cf', '#e8b13a', '#1b2a4a', '#c24a3c'
build('designs/e649/print_light.png', (380, 3230), 'designs/e649b/print_light.png', CREAM, MUSTARD, NAVY, 0)
build('designs/e649/print_dark.png', (370, 3210), 'designs/e649b/print_dark.png', NAVY, RED, CREAM, 14)
