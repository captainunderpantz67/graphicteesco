#!/usr/bin/env python3
"""#365 redo (zip hoodie, back print): same party skull (rows above the old DEAD SERIOUS line), new lockup FORMER (Rye) / LIFE OF THE PARTY (Bevan, full art width).
navy file: cream + mustard on Navy; ash file: soft black + red on Ash (no cream fill on a light blank)."""
from PIL import Image, ImageDraw, ImageFont
F = 'designs/fonts/'
src = Image.open('docs/print-files/365-dead-serious.png').convert('RGBA').crop((0, 0, 3319, 4116)); art = src.crop(src.getbbox()); W = art.width
def line(text, font, width, fill, stroke, sfill):
    size = 100
    while True:
        f = ImageFont.truetype(F + font, size); bb = f.getbbox(text, stroke_width=stroke)
        if bb[2] - bb[0] >= width or size > 3000: break
        size += 8
    im = Image.new('RGBA', (bb[2] - bb[0] + 40, bb[3] - bb[1] + 40), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((20 - bb[0], 20 - bb[1]), text, font=f, fill=fill, stroke_width=stroke, stroke_fill=sfill)
    return im.crop(im.getbbox())
def build(out, c1, c2, s1, s2, k2):
    l1 = line('FORMER', 'Rye-Regular.ttf', int(W * 0.5), c1, 0, s1)
    l2 = line('LIFE OF THE PARTY', 'Bevan-Regular.ttf', W, c2, k2, s2)
    H = art.height + 40 + l1.height + 40 + l2.height
    o = Image.new('RGBA', (W, H), (0, 0, 0, 0)); o.alpha_composite(art, (0, 0))
    o.alpha_composite(l1, ((W - l1.width) // 2, art.height + 40)); o.alpha_composite(l2, ((W - l2.width) // 2, H - l2.height))
    o = o.crop(o.getbbox()); o.save(out, dpi=(300, 300))
    print(out, o.size, 'l1/l2 h', round(l1.height / l2.height, 2), 'ratio', round(o.height / o.width, 2))
build('designs/e365b/print_navy.png', '#f3e7cf', '#f0b43c', None, '#1c2a52', 14)
build('designs/e365b/print_ash.png', '#1d1b19', '#b3342b', None, '#f3e7cf', 0)
