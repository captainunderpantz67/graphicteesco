import sys, subprocess; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image
W = 2352; DARK = (20, 16, 12, 255)
subprocess.run(['/usr/bin/python3', 'scripts/camo-halo.py', 'designs/b304/art_p.png', 'designs/b304/art_h.png', '50', '16'], check=True)
ah = Image.open('designs/b304/art_h.png').convert('RGBA'); ah = ah.crop(ah.getbbox())
ah = ah.resize((W, int(ah.height * W / ah.width)), Image.LANCZOS)
t = line('DEAD TILL FRIDAY.', 'damion', 0.97, W, CREAM, DARK, kw=19)
gap = 40; H = ah.height + gap + t.height; out = Image.new('RGBA', (W, H), (0, 0, 0, 0))
out.alpha_composite(ah, ((W - ah.width) // 2, 0)); out.alpha_composite(t, ((W - t.width) // 2, ah.height + gap))
out = out.crop(out.getbbox()); out.save('docs/print-files/304-possum.png', dpi=(300, 300))
print(out.size, 'art', ah.size, 'art %of height', 100 * ah.height // out.height, 'cap', t.height, 'text w', t.width, 'cap at FW625 px', round(t.height * 625 / out.width))
for n, c in (('darkwood', (60, 56, 44, 255)), ('forest', (52, 62, 44, 255))):
    b = Image.new('RGBA', out.size, c); b.alpha_composite(out); b.convert('RGB').resize((500, int(500 * out.height / out.width))).save(f'designs/b304/prev_{n}.png')
