#!/usr/bin/env python3
"""#711 sweatpants: #625 words + butler crop re-laid for the left leg (Printful 412 area 525x2175 @150dpi -> 1050x4350 @300dpi).
Words turned 90 deg CCW (read bottom to top), three lines side by side, every cap height >= 300 px (1 in on the leg).
usage: build.py <heavy art png> <out png>"""
import sys
from PIL import Image, ImageDraw, ImageFont
src, out = sys.argv[1:3]
W, H = 1050, 4350
F = 'designs/fonts/'
INK = '#1c1510'; GOLD = '#8a6a1f'
def render(text, ff, fill, cap, track, axes=None):
    f = ImageFont.truetype(F + ff, 600)
    if axes: f.set_variation_by_axes(axes)
    cb = f.getbbox('H'); capref = cb[3] - cb[1]
    size = int(600 * cap / capref); f = ImageFont.truetype(F + ff, size)
    if axes: f.set_variation_by_axes(axes)
    tr = track * size
    wd = sum(f.getlength(c) + tr for c in text) + 80
    im = Image.new('RGBA', (int(wd), size * 2), (0, 0, 0, 0)); d = ImageDraw.Draw(im); x = 40
    for c in text:
        d.text((x, size // 2), c, font=f, fill=fill); x += f.getlength(c) + tr
    return im.crop(im.getbbox())
CAP = 297
l1 = render('RACK YOUR', 'Bevan-Regular.ttf', INK, CAP, -0.020)
l2 = render('WEIGHTS.', 'Bevan-Regular.ttf', INK, CAP, 0.0)
l3 = render('Respectfully.', 'PlayfairDisplay-Italic[wght].ttf', GOLD, CAP, 0.024, [900])
print('line px (len x thick):', l1.size, l2.size, l3.size)
G = int(sys.argv[3]) if len(sys.argv) > 3 else 9
thick = l1.height + l2.height + l3.height + 2 * G
print('thickness', thick, 'of', W)
rot = [x.rotate(90, expand=True) for x in (l1, l2, l3)]
# art crop (butler, tray, plate) from the heavy print: art rows between headline and punch
a = Image.open(src).convert('RGBA')
art = a.crop((480, 780, 1700, 2520)); art = art.crop(art.getbbox())
AW = 900; art = art.resize((AW, round(art.height * AW / art.width)), Image.LANCZOS)
print('art', art.size)
c = Image.new('RGBA', (W, H), (0, 0, 0, 0))
c.alpha_composite(art, ((W - AW) // 2, 0))
y0 = art.height + 150
x = (W - thick) // 2
for r in rot:
    c.alpha_composite(r, (x, y0 + 0)); x += r.width + G
bb = c.getbbox(); print('bbox', bb, 'bottom margin', H - bb[3])
c.crop((0, 0, W, bb[3])).save(out, dpi=(300, 300))
print('lengths: headline', max(l1.width, l2.width), 'punch', l3.width, 'ratio %.0f%%' % (100 * l3.width / max(l1.width, l2.width)))
