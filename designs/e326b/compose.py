#!/usr/bin/env python3
"""#326 redo: NOT TODAY, / HONEY. over the sleeping-bee daisy. Fraunces Black (soft). Headline full print width, HONEY. breaks into the lower petals.
navy file (Navy hoodie): cream + honey gold, cream halo on the art. sand file (Sand hoodie): navy + burnt amber, cream keyline only on HONEY."""
import subprocess, sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter
F = 'designs/fonts/Fraunces[SOFT,WONK,opsz,wght].ttf'
W = 3600
def line(text, width, fill, stroke, sfill):
    size = 200
    while True:
        f = ImageFont.truetype(F, size); f.set_variation_by_axes([144, 900, 100, 0])
        bb = f.getbbox(text, stroke_width=stroke)
        if bb[2] - bb[0] >= width or size > 3000: break
        size += 8
    im = Image.new('RGBA', (bb[2] - bb[0] + 40, bb[3] - bb[1] + 40), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((20 - bb[0], 20 - bb[1]), text, font=f, fill=fill, stroke_width=stroke, stroke_fill=sfill)
    return im.crop(im.getbbox())
def build(out, c1, c2, s1, s2, k1, k2, halo):
    subprocess.run([sys.executable, 'designs/e326b/fill.py'], check=True)
    art = Image.open('designs/e326b/_art.png').convert('RGBA'); art = art.crop(art.getbbox())
    if halo:
        r = halo; a = art.split()[3].point(lambda v: 255 if v > 40 else 0)
        grown = a.filter(ImageFilter.MaxFilter(2 * r + 1)).filter(ImageFilter.GaussianBlur(2))
        ring = Image.new('RGBA', art.size, '#f3e7cf'); ring.putalpha(grown)
        pad = Image.new('RGBA', (art.width + 2 * r, art.height + 2 * r), (0, 0, 0, 0))
        pad.alpha_composite(ring, (r, r)); pad.alpha_composite(art, (r, r)); art = pad
    l1 = line('NOT TODAY,', W, c1, k1, s1)
    l2 = line('HONEY.', int(art.width * 0.98), c2, k2, s2)
    H = l1.height + 30 + art.height
    o = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    o.alpha_composite(art, ((W - art.width) // 2, l1.height + 30))
    o.alpha_composite(l1, ((W - l1.width) // 2, 0))
    # HONEY. breaks into the lower petals: bottom of the word sits ~12% above the art's bottom edge
    y2 = H - int(art.height * 0.10) - l2.height
    o.alpha_composite(l2, ((W - l2.width) // 2, y2))
    o = o.crop(o.getbbox()); o.save(out, dpi=(300, 300))
    print(out, o.size, 'tall in at FW1500:', round(o.height / o.width * 1500 / 150, 1), 'l1 w/art w', l1.width / art.width, 'l2/l1 h', l2.height / l1.height)
CREAM, GOLD, NAVY, AMBER = '#f3e7cf', '#f0b43c', '#1c2a52', '#a85a0e'
build('designs/e326b/print_navy.png', CREAM, GOLD, NAVY, NAVY, 0, 16, 0)
build('designs/e326b/print_sand.png', NAVY, AMBER, CREAM, CREAM, 0, 14, 0)
