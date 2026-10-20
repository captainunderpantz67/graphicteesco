#!/usr/bin/env python3
"""Lane A lockup v2 (builder card 7h/7k): headline line(s) ABOVE the art, punch line(s) BELOW, every line fitted to the full print width,
art scaled so the type is >= 41% of the print height. Logs ink widths and "type <px> of <print height px>".
usage: _a_lockup2.py <art.png> <out.png> <W> <spec.json> [share=0.41]
spec = {"above":[{"text","font","fill":[r,g,b],"wght"?}], "below":[...], "gap":90}"""
import sys, json
from PIL import Image, ImageDraw, ImageFont
art, out, W, spec = sys.argv[1], sys.argv[2], int(sys.argv[3]), json.load(open(sys.argv[4]))
share = float(sys.argv[5]) if len(sys.argv) > 5 else 0.41
a = Image.open(art).convert('RGBA'); a = a.crop(a.getbbox())
def line(t, font, fill, maxw, wght=None, size=2000, fixed=False):
    while True:
        f = ImageFont.truetype('designs/fonts/' + font, size)
        if wght: f.set_variation_by_axes([wght])
        w = f.getlength(t)
        if w <= maxw or fixed: break
        size = int(size * 0.995)
    asc, desc = f.getmetrics()
    im = Image.new('RGBA', (int(w) + 400, asc + desc + 300), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((200, 100), t, font=f, fill=tuple(fill) + (255,))
    return im.crop(im.getbbox())
gap = spec.get('gap', 90); fw = int(W * 0.985)
def fitsize(t, font, maxw, wght=None):
    size = 2000
    while True:
        f = ImageFont.truetype('designs/fonts/' + font, size)
        if wght: f.set_variation_by_axes([wght])
        if f.getlength(t) <= maxw: return size
        size = int(size * 0.995)
def group(lines, eq):
    if not eq:
        return [line(s['text'], s['font'], s['fill'], int(fw * s.get('wfrac', 1.0)), s.get('wght')) for s in lines]
    sz = min(fitsize(s['text'], s['font'], fw, s.get('wght')) for s in lines)
    return [line(s['text'], s['font'], s['fill'], fw, s.get('wght'), size=sz, fixed=True) for s in lines]
A = group(spec['above'], spec.get('eq_above'))
B = group(spec['below'], spec.get('eq_below'))
T = sum(i.height for i in A + B)
ngaps = len(A) + len(B)  # gaps between all blocks
if 'subject' in spec:  # card 7l: subject at least this share of the lockup width, lockup grows taller
    aw = int(spec['subject'] * W); ah = int(aw * a.height / a.width); H = T + ah + gap * ngaps
else:
    H = int(T / share)
    ah = H - T - gap * ngaps
    aw = int(ah * a.width / a.height)
    if aw > W:
        aw = W; ah = int(aw * a.height / a.width); H = T + ah + gap * ngaps
a2 = a.resize((aw, ah), Image.LANCZOS)
o = Image.new('RGBA', (W, H), (0, 0, 0, 0)); y = 0
for im in A: o.alpha_composite(im, ((W - im.width) // 2, y)); y += im.height + gap
o.alpha_composite(a2, ((W - aw) // 2, y)); y += ah + gap
for im in B: o.alpha_composite(im, ((W - im.width) // 2, y)); y += im.height + gap
o = o.crop(o.getbbox()); o.save(out)
print(out, o.size, 'above', [i.width for i in A], 'below', [i.width for i in B], 'art', a2.size, 'type %d of %d px (%.0f%%)' % (T, o.height, 100 * T / o.height), 'subject %d of %d px (%.0f%%)' % (a2.width, o.width, 100 * a2.width / o.width))
