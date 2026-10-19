"""#385 Fisher of Men half zip: keep the lake scene, re-set both lines in Big Shoulders Display Black.
usage: build.py <scene.png> <out.png> <head_fill> <sub_fill>"""
import sys
from PIL import Image, ImageDraw, ImageFont
scene, out, hf, sf = sys.argv[1:5]
FONT = 'designs/fonts/BigShouldersDisplay[wght].ttf'
art = Image.open(scene).convert('RGBA')
art = art.crop(art.getbbox())
AW = art.width

def line(text, fill, target, track):
    size = 400
    while True:
        f = ImageFont.truetype(FONT, size); f.set_variation_by_axes([900])
        adv = [f.getlength(c) for c in text]
        tot = sum(adv) + track * size * (len(text) - 1)
        if tot >= target: break
        size += 10
    f = ImageFont.truetype(FONT, size); f.set_variation_by_axes([900])
    im = Image.new('RGBA', (int(tot) + 400, size * 2), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    x = 200
    for c, a in zip(text, adv):
        d.text((x, 100), c, font=f, fill=fill); x += a + track * size
    return im.crop(im.getbbox())

h = line('FISHER OF MEN', hf, AW * 0.98, 0.05)
s = line('MOSTLY BASS', sf, AW * 0.98, 0.05)
print('head', h.size, 'sub', s.size, 'art', art.size)
GAP = 150
W = 3600
H = h.height + art.height + s.height + 2 * GAP
c = Image.new('RGBA', (W, H), (0, 0, 0, 0))
y = 0
for im in (h, art, s):
    c.alpha_composite(im, ((W - im.width) // 2, y)); y += im.height + GAP
c.save(out, dpi=(300, 300)); print(out, c.size)
