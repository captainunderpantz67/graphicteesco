#!/usr/bin/env python3
"""#632 type redo: Big Shoulders Display Black NOT WEIRD. + Bowlby One JUST THE GOALIE. both at full art width. light file (dark blanks): cream + mustard; dark file (Natural, Ash, Athletic Heather): navy + red with cream keylines. Same goalie art."""
import sys
from PIL import Image, ImageDraw, ImageFont
F = 'designs/fonts/'
def line(text, font, fill, stroke, sfill, width, axes=None):
    size = 80
    while True:
        f = ImageFont.truetype(F + font, size)
        if axes: f.set_variation_by_axes(axes)
        bb = f.getbbox(text, stroke_width=stroke)
        if bb[2] - bb[0] >= width or size > 2400: break
        size += 4
    im = Image.new('RGBA', (bb[2] - bb[0] + 20, bb[3] - bb[1] + 20), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((10 - bb[0], 10 - bb[1]), text, font=f, fill=fill, stroke_width=stroke, stroke_fill=sfill)
    return im.crop(im.getbbox())
def build(src, rows, out, c1, c2, s1, s2, k):
    art = Image.open(src).convert('RGBA').crop((0,) + (rows[0],) + (Image.open(src).width, rows[1])); art = art.crop(art.getbbox())
    W = art.width
    l1 = line('NOT WEIRD.', 'BigShouldersDisplay[wght].ttf', c1, k, s1, int(W * 0.91), [900])
    l2 = line('JUST THE GOALIE.', 'BowlbyOne-Regular.ttf', c2, k, s2, W)
    stack = [l1, art, l2]; gaps = [40, 50]
    o = Image.new('RGBA', (max(i.width for i in stack), sum(i.height for i in stack) + sum(gaps)), (0, 0, 0, 0)); y = 0
    for n, i in enumerate(stack):
        o.alpha_composite(i, ((o.width - i.width) // 2, y)); y += i.height + (gaps[n] if n < 2 else 0)
    o.save(out, dpi=(300, 300)); print(out, o.size, 'ratio', o.height / o.width, 'l2/l1', l2.height / l1.height)
CREAM, MUSTARD, NAVY, RED = '#f3e7cf', '#e8b13a', '#1b2a4a', '#c24a3c'
build('designs/e632/print_light.png', (440, 3470), 'designs/e632b/print_light.png', CREAM, MUSTARD, NAVY, NAVY, 0)
build('designs/e632/print_dark.png', (430, 3450), 'designs/e632b/print_dark.png', NAVY, RED, CREAM, CREAM, 14)
