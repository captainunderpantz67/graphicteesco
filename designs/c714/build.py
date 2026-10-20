#!/usr/bin/env python3
"""#714 sweatpants: #490 PLANS CANCELED. / MOOD IMPROVED. + the cat-in-the-armchair art re-laid for the left leg (Printful 412 area 525x2175 @150dpi -> 1050x4350 @300dpi).
Words turned 90 deg CCW (read bottom to top), two lines side by side, Anton (Bevan is 1.9x wider and cannot hold 1 in caps on the leg), same fills and dark keyline as the hoodie print. The punch is scaled until it is as long as the headline (R3.7.8).
usage: build.py <art-cut png> <out png>"""
import sys
from PIL import Image, ImageDraw, ImageFont
src, out = sys.argv[1:3]
W, H = 1050, 4350
FONT = 'designs/fonts/Anton-Regular.ttf'
SK, SW = '#2a1b14', 8
def render(text, fill, cap):
    f = ImageFont.truetype(FONT, 600); cb = f.getbbox('H'); capref = cb[3] - cb[1]
    size = int(600 * cap / capref); f = ImageFont.truetype(FONT, size)
    wd = f.getlength(text) + 6 * SW + 200
    im = Image.new('RGBA', (int(wd), size * 2), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    d.text((3 * SW + 60, size // 2), text, font=f, fill=fill, stroke_width=SW, stroke_fill=SK)
    return im.crop(im.getbbox())
l1 = render('PLANS CANCELED.', '#ee7f48', 400)
cap2 = 400
while True:
    l2 = render('MOOD IMPROVED.', '#f3e7cf', cap2)
    if l2.width >= l1.width: break
    cap2 += 4
print('headline', l1.size, 'punch', l2.size, 'cap2', cap2)
rot = [x.rotate(90, expand=True) for x in (l1, l2)]
G = 40
thick = sum(r.width for r in rot) + G
span = max(r.height for r in rot)
a = Image.open(src).convert('RGBA'); a = a.crop(a.getbbox())
GAP = 100
AH = H - span - GAP - 10
AW = min(900, round(a.width * AH / a.height)); art = a.resize((AW, round(a.height * AW / a.width)), Image.LANCZOS)
print('thickness', thick, 'of', W, 'art', art.size)
c = Image.new('RGBA', (W, H), (0, 0, 0, 0))
c.alpha_composite(art, ((W - AW) // 2, 0))
y0 = art.height + GAP
x = (W - thick) // 2
for r in rot:
    c.alpha_composite(r, (x, y0)); x += r.width + G
bb = c.getbbox(); print('bbox', bb, 'bottom margin', H - bb[3])
c.crop((0, 0, W, bb[3])).save(out, dpi=(300, 300))
print('headline %d / punch %d px = %.0f%%' % (l1.width, l2.width, 100 * l2.width / l1.width), '| subject', AW, 'of', W, '= %.0f%%' % (100 * AW / W))
