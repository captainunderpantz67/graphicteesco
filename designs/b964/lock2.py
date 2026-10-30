import sys, subprocess, os; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image
S = os.environ['S']; W = 2200; DARK = (20, 16, 12, 255); ORANGE = (240, 100, 40, 255)
def shadow(im, d=26, col=ORANGE):
    a = im.split()[3]; sh = Image.new('RGBA', im.size, col); sh.putalpha(a)
    out = Image.new('RGBA', (im.width + d, im.height + d), (0, 0, 0, 0)); out.alpha_composite(sh, (d, d)); out.alpha_composite(im, (0, 0)); return out
ah = Image.open(S + '/k964.png').convert('RGBA'); ah = ah.crop(ah.getbbox())
AW = 1800; ah = ah.resize((AW, int(ah.height * AW / ah.width)), Image.LANCZOS)
t1 = shadow(line('Catch and Release', 'damion', 0.86, W, CREAM, DARK, kw=15))
t2 = shadow(line('(MOSTLY RELEASE)', 'bevan', 0.97, W, CREAM, DARK, kw=15))
gap = 30; H = t1.height + gap + ah.height + gap + t2.height; out = Image.new('RGBA', (W + 40, H), (0, 0, 0, 0)); y = 0
for im in (t1, ah, t2):
    out.alpha_composite(im, ((out.width - im.width) // 2, y)); y += im.height + gap
out = out.crop(out.getbbox()); out.save('docs/print-files/964-catch-release.png', dpi=(300, 300))
print(out.size, 'headline', t1.width, 'punch', t2.width, round(100*t2.width/t1.width), '% subject', ah.width, round(100*ah.width/max(t1.width,t2.width)), '% of print w', round(100*ah.width/out.width), 'type px', t1.height+t2.height, 'of', out.height, 'FW1500 height', round(out.height*1500/out.width))
for n, c in (('black', (34, 30, 28, 255)), ('forest', (52, 62, 44, 255))):
    b = Image.new('RGBA', out.size, c); b.alpha_composite(out); b.convert('RGB').resize((600, int(600 * out.height / out.width))).save(f'{S}/prev_{n}.png')
