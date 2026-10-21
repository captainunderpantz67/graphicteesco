#!/usr/bin/env python3
"""b-camo-lockup.py <art.png> <out.png> "<LINE1>" ["<LINE2>"] [--top] [--accent=F26A1B]: R11.13 camo print.
Flat art (white bg) goes inside ONE solid bone rounded patch with a ~0.2 in (60 px) dark outline; lettering is heavy slab, bone fill with a dark keyline,
as wide as the patch. Default: lines below the patch; --top puts LINE1 above the patch and LINE2 below. Prints widths for the 7h/7l logs."""
import sys, subprocess, tempfile, os
from PIL import Image, ImageDraw, ImageFont, ImageChops
R = os.path.dirname(os.path.abspath(__file__)) + '/../'
args = [a for a in sys.argv[1:] if not a.startswith('--')]; top = '--top' in sys.argv
art, out = args[0], args[1]; lines = args[2:]
W = 3400; BONE = (242, 234, 211, 255); DARK = tuple(int(x) for x in os.environ['DARKC'].split(',')) + (255,) if os.environ.get('DARKC') else (17, 17, 17, 255); OUT = 60; PH = int(W * float(os.environ.get("PHR", "0.86")))
tmp = tempfile.mktemp(suffix='.png'); subprocess.run(['python3', R + 'scripts/print-prep.py', art, tmp, '--width', '3000'], check=True, capture_output=True)
a = Image.open(tmp).convert('RGBA'); bb = a.getbbox(); a = a.crop(bb)
inner = W - 2 * OUT - 160; s = min(inner / a.width, (PH - 2 * OUT - 160) / a.height); a = a.resize((int(a.width * s), int(a.height * s)), Image.LANCZOS)
ph = max(PH, a.height + 2 * OUT + 160)
import numpy as np  # enclosed white inside the art becomes the patch's bone (no white-on-cream seams)
_n = np.array(a); _w = (_n[..., :3].min(axis=2) >= 244) & (_n[..., 3] > 0); _n[_w, :3] = BONE[:3]; a = Image.fromarray(_n)
patch = Image.new('RGBA', (W, ph), (0, 0, 0, 0)); d = ImageDraw.Draw(patch)
d.rounded_rectangle((0, 0, W - 1, ph - 1), 150, fill=DARK); d.rounded_rectangle((OUT, OUT, W - 1 - OUT, ph - 1 - OUT), 110, fill=BONE)
patch.alpha_composite(a, ((W - a.width) // 2, (ph - a.height) // 2))
def font(sz):  # FONT=<file in designs/fonts> rotates the face (card 7r); variable faces are set to their heaviest weight
    f = ImageFont.truetype(R + 'designs/fonts/' + os.environ.get('FONT', 'AlfaSlabOne-Regular.ttf'), sz)
    try: f.set_variation_by_axes([float(os.environ.get('WGHT', 900))])
    except Exception: pass
    return f
def line(t):
    sz = 700
    while font(sz).getbbox(t)[2] > W - 70 and sz > 100: sz -= 1
    st = max(18, sz // 14); f = font(sz); b = f.getbbox(t, stroke_width=st)
    im = Image.new('RGBA', (b[2] - b[0] + 4, b[3] - b[1] + 4), (0, 0, 0, 0)); dd = ImageDraw.Draw(im)
    dd.text((-b[0] + 2, -b[1] + 2), t, font=f, fill=BONE, stroke_width=st, stroke_fill=DARK)
    return im.crop(im.getbbox())
L = [line(t) for t in lines]; gap = 70
mw = max(b.width for b in L); L = [b if b.width == mw else b.resize((mw, round(b.height * mw / b.width)), Image.LANCZOS) for b in L]
blocks = ([L[0], patch] + L[1:]) if top else ([patch] + L)
H = sum(b.height for b in blocks) + gap * (len(blocks) - 1)
c = Image.new('RGBA', (W, H), (0, 0, 0, 0)); y = 0
for b in blocks: c.alpha_composite(b, ((W - b.width) // 2, y)); y += b.height + gap
c = c.crop(c.getbbox()); c.save(out, dpi=(300, 300))
print('canvas', c.size, 'patch', W, 'x', ph, 'lines', [b.width for b in L], 'type px', sum(b.height for b in L), 'of', c.height, 'subject', a.width, 'of', W, '=%d%%' % (100 * a.width // W))
