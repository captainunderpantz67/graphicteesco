#!/usr/bin/env python3
"""#715 sweatpants: #624 THE VIEW BETTER / BE WORTH IT. + the marmot-on-the-switchbacks art (light-ink v2 crop, cream halo) re-laid for the left leg (Printful 412 area 525x2175 @150dpi -> 1050x4350 @300dpi).
Words turned 90 deg CCW (read bottom to top), two lines side by side, hoodie fonts and fills (Anton cream, Bowlby One orange, no keyline). The punch is kept at least as long as the headline (R3.7.8).
usage: build.py <art-cut png> <out png>"""
import sys
from PIL import Image, ImageDraw, ImageFont
src, out = sys.argv[1:3]
W, H = 1050, 4350
F = 'designs/fonts/'
def render(text, font, fill, cap):
    f = ImageFont.truetype(F + font, 600); cb = f.getbbox('H'); capref = cb[3] - cb[1]
    size = int(600 * cap / capref); f = ImageFont.truetype(F + font, size)
    im = Image.new('RGBA', (int(f.getlength(text)) + 200, size * 2), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((60, size // 2), text, font=f, fill=fill)
    return im.crop(im.getbbox())
l1 = render('THE VIEW BETTER', 'Anton-Regular.ttf', '#f6ead2', 400)
l2 = render('BE WORTH IT.', 'BowlbyOne-Regular.ttf', '#f08a4b', 300)
print('headline', l1.size, 'punch', l2.size)
rot = [x.rotate(90, expand=True) for x in (l1, l2)]
G = 50
thick = sum(r.width for r in rot) + G
span = max(r.height for r in rot)
a = Image.open(src).convert('RGBA'); a = a.crop(a.getbbox())
GAP = 100
AH = H - span - GAP - 10
AW = min(960, round(a.width * AH / a.height)); art = a.resize((AW, round(a.height * AW / a.width)), Image.LANCZOS)
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
