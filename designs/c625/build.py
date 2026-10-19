#!/usr/bin/env python3
"""#625 hoodie: type-only redo. Butler art from docs/print-files/625-rack-your-weights.png (rows 190-3080 are art).
Headline RACK YOUR WEIGHTS. in Bevan at full art width, near-black; Respectfully. in Playfair Black Italic gold, heavy.
usage: build.py <src.png> <out.png>"""
import sys
from PIL import Image, ImageDraw, ImageFont
src, out = sys.argv[1:3]
a = Image.open(src).convert('RGBA')
art = a.crop((0, 300, a.width, 3040)); art = art.crop(art.getbbox())
L = art.width
R = float(sys.argv[3]) if len(sys.argv) > 3 else 0.72
F = 'designs/fonts/'
def line(text, fontfile, fill, width, axes=None):
    size = 400
    while True:
        f = ImageFont.truetype(F + fontfile, size)
        if axes: f.set_variation_by_axes(axes)
        bb = f.getbbox(text)
        if bb[2] - bb[0] <= width or size < 50: break
        size -= 6
    im = Image.new('RGBA', (bb[2] + 40, bb[3] + size), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((10, 10), text, font=f, fill=fill)
    return im.crop(im.getbbox())
h1 = line('RACK YOUR', 'Bevan-Regular.ttf', '#1c1510', L)
h2 = line('WEIGHTS.', 'Bevan-Regular.ttf', '#1c1510', L)
h = Image.new('RGBA', (L, h1.height + 50 + h2.height), (0, 0, 0, 0)); h.alpha_composite(h1, ((L-h1.width)//2, 0)); h.alpha_composite(h2, ((L-h2.width)//2, h1.height + 50))
art = art.resize((int(L*R), int(art.height*R)), Image.LANCZOS)
s = line('Respectfully.', 'PlayfairDisplay-Italic[wght].ttf', '#8a6a1f', int(L * 0.72), [900])
g1, g2 = 90, 70
c = Image.new('RGBA', (L, h.height + g1 + art.height + g2 + s.height), (0, 0, 0, 0))
c.alpha_composite(h, ((L - h.width) // 2, 0))
c.alpha_composite(art, ((L-art.width)//2, h.height + g1))
c.alpha_composite(s, ((L - s.width) // 2, h.height + g1 + art.height + g2))
c = c.crop(c.getbbox()); c.save(out, dpi=(300, 300))
print(out, c.size, 'aspect %.2f' % (c.height / c.width), 'headline h', h.height, 'sub h', s.height)
