import sys, os; sys.path.insert(0, '.')
from designs.lib import *
from PIL import Image
S = os.environ['S']; W = 2000; DARK = (20, 16, 12, 255)
ah = Image.open(S + '/k965.png').convert('RGBA'); ah = ah.crop(ah.getbbox())
ah = ah.resize((W, int(ah.height * W / ah.width)), Image.LANCZOS)
t1 = line('MOSTLY', 'cinzel', 0.5, W, CREAM, DARK, kw=13)
t2 = line('UNTANGLING.', 'cinzel', 0.98, W, CREAM, DARK, kw=13)
gap = 20; H = ah.height + gap + t1.height + 14 + t2.height; out = Image.new('RGBA', (W, H), (0, 0, 0, 0)); y = 0
for im, g in ((ah, gap), (t1, 14), (t2, 0)):
    out.alpha_composite(im, ((W - im.width) // 2, y)); y += im.height + g
out = out.crop(out.getbbox()); out.save('docs/print-files/965-untangling.png', dpi=(300, 300))
print(out.size, 'art', ah.size, 'art %of height', 100*ah.height//out.height, 'cap', t2.height, 'cap at FW625 px', round(t2.height*625/out.width), 'FW625 height', round(out.height*625/out.width))
c = Image.new('RGB', (1000, int(500 * out.height / out.width)))
for n, col in enumerate(((92, 84, 52, 255), (52, 62, 44, 255))):
    b = Image.new('RGBA', out.size, col); b.alpha_composite(out); c.paste(b.convert('RGB').resize((500, c.height)), (500 * n, 0))
c.save(S + '/prev965.jpg')
