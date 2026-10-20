#!/usr/bin/env python3
"""#356 redo: EIGHT SECONDS OF (Rye) / art / BAD DECISIONS (Bevan, full print width, overlaps the hooves).
navy file (Navy hoodie): cream + mustard, thin cream halo on the art. sand file (Sand hoodie): navy + red, no halo."""
import subprocess, sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter
F = 'designs/fonts/'
W = 3600
def line(text, font, width, fill, stroke, sfill):
    size = 100
    while True:
        f = ImageFont.truetype(F + font, size)
        bb = f.getbbox(text, stroke_width=stroke)
        if bb[2] - bb[0] >= width or size > 3000: break
        size += 8
    im = Image.new('RGBA', (bb[2] - bb[0] + 40, bb[3] - bb[1] + 40), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((20 - bb[0], 20 - bb[1]), text, font=f, fill=fill, stroke_width=stroke, stroke_fill=sfill)
    return im.crop(im.getbbox())
def build(out, c1, c2, s1, s2, k1, k2, halo):
    subprocess.run([sys.executable, 'scripts/print-prep.py', 'designs/e356b/art.png', 'designs/e356b/_art.png', '--width', str(int(W * 0.72))], check=True, stdout=subprocess.DEVNULL)
    subprocess.run([sys.executable, 'scripts/knock-white.py', 'designs/e356b/_art.png', 'designs/e356b/_art.png', '3000'], check=True)
    art = Image.open('designs/e356b/_art.png').convert('RGBA'); art = art.crop(art.getbbox())
    if halo:
        r = halo; a = art.split()[3].point(lambda v: 255 if v > 40 else 0)
        grown = a.filter(ImageFilter.MaxFilter(2 * r + 1)).filter(ImageFilter.GaussianBlur(2))
        ring = Image.new('RGBA', art.size, '#f3e7cf'); ring.putalpha(grown)
        pad = Image.new('RGBA', (art.width + 2 * r, art.height + 2 * r), (0, 0, 0, 0))
        pad.alpha_composite(ring, (r, r)); pad.alpha_composite(art, (r, r)); art = pad
    l1 = line('EIGHT SECONDS OF', 'Rye-Regular.ttf', int(W * 0.78), c1, k1, s1)
    l2 = line('BAD DECISIONS', 'Bevan-Regular.ttf', W, c2, k2, s2)
    H = l1.height + 30 + art.height
    o = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    o.alpha_composite(art, ((W - art.width) // 2, l1.height + 30))
    o.alpha_composite(l1, ((W - l1.width) // 2, 0))
    o2 = Image.new('RGBA', (W, H + l2.height - int(art.height * 0.12)), (0, 0, 0, 0)); o2.alpha_composite(o)
    o2.alpha_composite(l2, ((W - l2.width) // 2, o2.height - l2.height))
    o = o2.crop(o2.getbbox()); o.save(out, dpi=(300, 300))
    print(out, o.size, 'tall in at FW1500:', round(o.height / o.width * 10, 1), 'l1/l2 h', round(l1.height / l2.height, 2))
CREAM, MUST, NAVY, RED = '#f3e7cf', '#f0b43c', '#1c2a52', '#c8362b'
build('designs/e356b/print_navy.png', CREAM, MUST, NAVY, NAVY, 0, 14, 6)
build('designs/e356b/print_sand.png', NAVY, RED, CREAM, CREAM, 0, 12, 0)
