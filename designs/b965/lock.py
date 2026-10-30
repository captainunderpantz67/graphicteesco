import sys, subprocess; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image
W = 2000; DARK = (20, 16, 12, 255)
subprocess.run(['/usr/bin/python3', 'scripts/camo-halo.py', 'designs/b965/art_p.png', 'designs/b965/art_h.png', '40', '16'], check=True)
ah = Image.open('designs/b965/art_h.png').convert('RGBA'); ah = ah.crop(ah.getbbox())
AH = 1500; ah = ah.resize((int(ah.width * AH / ah.height), AH), Image.LANCZOS)
t1 = line('MOSTLY', 'graduate', 0.6, W, CREAM, DARK, kw=13)
t2 = line('UNTANGLING.', 'graduate', 1.0, W, CREAM, DARK, kw=13)
gap = 30; H = ah.height + gap + t1.height + 20 + t2.height; out = Image.new('RGBA', (W, H), (0, 0, 0, 0)); y = 0
for im, g in ((ah, gap), (t1, 20), (t2, 0)):
    out.alpha_composite(im, ((W - im.width) // 2, y)); y += im.height + g
out = out.crop(out.getbbox()); out.save('docs/print-files/965-untangling.png', dpi=(300, 300))
print(out.size, 'art', ah.size, 'art %of height', 100*ah.height//out.height, 'cap', t2.height, 'cap at FW625 px', round(t2.height*625/out.width), 'FW625 height', round(out.height*625/out.width))
for n, c in (('duck', (92, 84, 52, 255)), ('forest', (52, 62, 44, 255))):
    b = Image.new('RGBA', out.size, c); b.alpha_composite(out); b.convert('RGB').resize((500, int(500 * out.height / out.width))).save(f'designs/b965/prev_{n}.png')
