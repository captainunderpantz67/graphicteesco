#!/usr/bin/env python3
"""#713 sweatpants: #577 DO NOT DISTURB. / BISCUITS IN PROGRESS. + calico crop re-laid for the left leg (Printful 412 area 525x2175 @150dpi -> 1050x4350 @300dpi).
Words turned 90 deg CCW (read bottom to top), three lines side by side (headline one line, punch broken in two), every cap >= 300 px (1 in on the leg).
usage: build.py <navy|light> <art-cut png> <out png>"""
import sys
from PIL import Image, ImageDraw, ImageFont
mode, src, out = sys.argv[1:4]
W, H = 1050, 4350
F = 'designs/fonts/'
if mode == 'navy': C1, C2, SK, SW = '#f6ead2', '#f2a3ab', '#2a1a12', 6
else: C1, C2, SK, SW = '#3b2a20', '#7a2f3f', None, 0
def render(text, fill, cap, track):
    f = ImageFont.truetype(F + 'AlfaSlabOne-Regular.ttf', 600); cb = f.getbbox('H'); capref = cb[3] - cb[1]
    size = int(600 * cap / capref); f = ImageFont.truetype(F + 'AlfaSlabOne-Regular.ttf', size); tr = track * size
    wd = sum(f.getlength(c) + tr for c in text) + 6 * SW + 200
    im = Image.new('RGBA', (int(wd), size * 2), (0, 0, 0, 0)); d = ImageDraw.Draw(im); x = 3 * SW + 60
    for c in text:
        d.text((x, size // 2), c, font=f, fill=fill, stroke_width=SW, stroke_fill=SK or fill); x += f.getlength(c) + tr
    return im.crop(im.getbbox())
l1 = render('DO NOT DISTURB.', C1, 300, -0.02)
l2 = render('BISCUITS', C2, 320, 0.0)
l3 = render('IN PROGRESS.', C2, 320, 0.0)
print('line px (len x thick):', l1.size, l2.size, l3.size)
rot = [x.rotate(90, expand=True) for x in (l1, l2, l3)]
G = 14
thick = sum(r.width for r in rot) + 2 * G
print('thickness', thick, 'of', W)
span = max(r.height for r in rot)
a = Image.open(src).convert('RGBA'); a = a.crop(a.getbbox())
GAP = 100
AH = H - span - GAP - 10
AW = min(900, round(a.width * AH / a.height)); art = a.resize((AW, round(a.height * AW / a.width)), Image.LANCZOS)
print('art', art.size)
c = Image.new('RGBA', (W, H), (0, 0, 0, 0))
c.alpha_composite(art, ((W - AW) // 2, 0))
y0 = art.height + GAP
x = (W - thick) // 2
for r in rot:
    c.alpha_composite(r, (x, y0)); x += r.width + G
bb = c.getbbox(); print('bbox', bb, 'bottom margin', H - bb[3])
c.crop((0, 0, W, bb[3])).save(out, dpi=(300, 300))
print('headline', l1.height, 'x', l1.width, '| punch lines', l2.width, l3.width, 'combined', l2.width + l3.width, 'ratio of phrase %.0f%%' % (100 * (l2.width + l3.width) / l1.width), 'longest line %.0f%%' % (100 * max(l2.width, l3.width) / l1.width), 'subject', AW, 'of', W, '= %.0f%%' % (100 * AW / W))
