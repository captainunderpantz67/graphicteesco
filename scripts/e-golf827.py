#!/usr/bin/env python3
"""e-golf827.py <outdir>: #827 golf AOP zip panels (Printful #717, 5250 x 6000). Course map cells overlapped by a 110 px feathered dissolve (upright, no half-tile ghosting),
tiny code-drawn golf balls with deadpan labels set in Oswald (un-mirrored in every cell), chest ball-on-tee, back lockup 4300 px wide."""
import sys, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter
R = 'docs/print-files/'; out = sys.argv[1]; PW, PH, CELL, BAND = 5250, 6000, 1300, 110; STR = CELL - BAND; K = CELL / 1024
import numpy as np
m = Image.open(R + '827-map.png').convert('RGB').resize((CELL, CELL), Image.LANCZOS)
r = np.clip(np.arange(CELL) / BAND, 0, 1); r = r * r * (3 - 2 * r)  # smoothstep ramp over the overlap band
P = Image.new('RGB', (PW, PH))
for i in range((PW - BAND) // STR + 1):
    for j in range((PH - BAND) // STR + 1):
        ax = r if i else np.ones(CELL); ay = r if j else np.ones(CELL)
        mask = Image.fromarray((np.minimum.outer(ay, ax) * 255).astype(np.uint8)); P.paste(m, (i * STR, j * STR), mask)
F = ImageFont.truetype('designs/fonts/Oswald[wght].ttf', 82); F.set_variation_by_axes([700])
# (ball x, y, label, label cx, cy) in 1024-map coords; labels kept clear of the overlap bands
ITEMS = [(470, 402, 'casual water', 505, 335), (642, 408, 'still looking', 705, 548), (583, 898, 'provisional', 545, 760),
         (846, 812, 'drop zone', 840, 770), (214, 872, 'the goose has it', 360, 965)]
D = ImageDraw.Draw(P)
def ball(cx, cy, r):
    D.ellipse([cx - r - 7, cy - r - 7, cx + r + 7, cy + r + 7], fill=(24, 56, 38))
    D.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(255, 252, 240))
    for dx, dy in ((-.4, -.3), (.2, -.45), (.45, .1), (-.15, .25), (.1, .5)):
        D.ellipse([cx + dx * r - 3, cy + dy * r - 3, cx + dx * r + 3, cy + dy * r + 3], fill=(205, 198, 180))
for i in range((PW - BAND) // STR + 1):
    for j in range((PH - BAND) // STR + 1):
        pt = lambda x, y: (i * STR + x * K, j * STR + y * K)
        for bx, by, txt, lx, ly in ITEMS:
            ball(*pt(bx, by), 17); D.text(pt(lx, ly), txt, font=F, fill=(250, 240, 214), stroke_width=9, stroke_fill=(20, 46, 32), anchor='mm')
P.save(out + '/plain.png')
P.convert('RGB').save(out + '/plain.jpg', quality=92)
P.crop((0, 0, PW, 3750)).convert('RGB').save(out + '/pocket.jpg', quality=92)
chest = Image.open(out + '/chest_new.png').convert('RGBA')
Fr = P.convert('RGBA'); Fr.alpha_composite(chest, (3383, 1503)); Fr.convert('RGB').save(out + '/front.jpg', quality=92)
lk = Image.open(R + '827-backlockup.png').convert('RGBA'); w = 4300; lk = lk.resize((w, round(lk.height * w / lk.width)), Image.LANCZOS)
Bk = P.convert('RGBA'); Bk.alpha_composite(lk, ((PW - w) // 2, 900)); Bk.convert('RGB').save(out + '/back.jpg', quality=92)
print(lk.size)
