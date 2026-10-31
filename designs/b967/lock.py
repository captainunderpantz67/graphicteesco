import sys, subprocess; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image
W = 2400; DARK = (20, 16, 12, 255)
subprocess.run(['/usr/bin/python3', 'scripts/camo-halo.py', 'designs/b967/art_p.png', 'designs/b967/art_h.png', '30', '14'], check=True, env={**__import__('os').environ, 'FILL': '0'})
ah = Image.open('designs/b967/art_h.png').convert('RGBA'); ah = ah.crop(ah.getbbox())
AW = int(W * 0.86); ah = ah.resize((AW, int(ah.height * AW / ah.width)), Image.LANCZOS)
t1 = line('SWITCHBACKS', 'fraunces', 0.80, W, CREAM, DARK, kw=17)
t2 = line('BUILD CHARACTER.', 'fraunces', 1.0, W, CREAM, DARK, kw=17)
g = 20; H = t1.height + g + ah.height + g + t2.height
out = Image.new('RGBA', (W, H), (0, 0, 0, 0)); y = 0
for im in (t1, ah, t2):
    out.alpha_composite(im, ((W - im.width) // 2, y)); y += im.height + g
out = out.crop(out.getbbox()); out.save('docs/print-files/967-switchbacks.png', dpi=(300, 300))
print(out.size, 'headline', t1.width, 'punch', t2.width, round(100*t2.width/t1.width), '%', 'art %of FW', round(100*ah.width/out.width), 'type px', t1.height+t2.height, 'of', out.height, 'cap at FW1500', round(t2.height*1500/out.width), 'height at FW1500', round(out.height*1500/out.width))
for n, c in (('duck', (92, 84, 52, 255)), ('forest', (52, 62, 44, 255))):
    b = Image.new('RGBA', out.size, c); b.alpha_composite(out); b.convert('RGB').resize((500, int(500 * out.height / out.width))).save(f'designs/b967/prev_{n}.png')
