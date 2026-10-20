#!/usr/bin/env python3
"""#712 sweatpants: #479 Tag Soup words + deer chef crop re-laid for the left leg (Printful 412 area 525x2175 @150dpi -> 1050x4350 @300dpi).
Words turned 90 deg CCW (read bottom to top). Lobster/AlfaSlabOne, same fills and black keylines as the hoodie print.
usage: build.py <hoodie print png> <out png>"""
import sys
from PIL import Image, ImageDraw, ImageFont
src, out = sys.argv[1:3]
W, H = 1050, 4350
F = 'designs/fonts/'
def render(text, ff, fill, cap, track, stroke_ratio, skey='#111111'):
    f = ImageFont.truetype(F + ff, 600); cb = f.getbbox('H'); capref = cb[3] - cb[1]
    size = int(600 * cap / capref); f = ImageFont.truetype(F + ff, size)
    sw = round(size * stroke_ratio); tr = track * size
    wd = sum(f.getlength(c) + tr for c in text) + 6 * sw + 200
    im = Image.new('RGBA', (int(wd), size * 2), (0, 0, 0, 0)); d = ImageDraw.Draw(im); x = 3 * sw + 60
    for c in text:
        d.text((x, size // 2), c, font=f, fill=fill, stroke_width=sw, stroke_fill=skey); x += f.getlength(c) + tr
    return im.crop(im.getbbox())
l1 = render("Today's Special", 'Lobster-Regular.ttf', '#ef6c1e', 300, 0.0, 16 / 420)
l2 = render('TAG SOUP', 'AlfaSlabOne-Regular.ttf', '#f3e7cf', 360, 0.03, 22 / 640)
print('line px (len x thick):', l1.size, l2.size)
rot = [x.rotate(90, expand=True) for x in (l1, l2)]
G = 40
thick = sum(r.width for r in rot) + G
a = Image.open(src).convert('RGBA')
art = a.crop((0, 495, a.width, 3843)); art = art.crop(art.getbbox())
AW = 900; art = art.resize((AW, round(art.height * AW / art.width)), Image.LANCZOS)
print('art', art.size)
c = Image.new('RGBA', (W, H), (0, 0, 0, 0))
c.alpha_composite(art, ((W - AW) // 2, 0))
y0 = art.height + 130
span = max(r.height for r in rot)
x = (W - thick) // 2
for r in rot:
    c.alpha_composite(r, (x, y0 + (span - r.height) // 2)); x += r.width + G
bb = c.getbbox(); print('bbox', bb, 'bottom margin', H - bb[3])
c.crop((0, 0, W, bb[3])).save(out, dpi=(300, 300))
print('headline', l1.width, 'punch', l2.width, 'ratio %.0f%%' % (100 * l2.width / l1.width), 'subject', AW, 'of', W, '= %.0f%%' % (100 * AW / W))
