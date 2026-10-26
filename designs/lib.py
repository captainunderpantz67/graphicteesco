"""Lane C lockup helper: from designs.lib import *"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
FD = 'designs/fonts/'
CREAM = (246, 236, 214, 255)
F = dict(alfa='AlfaSlabOne-Regular.ttf', anton='Anton-Regular.ttf', bevan='Bevan-Regular.ttf', big='BigShouldersDisplay[wght].ttf', bowlby='BowlbyOne-Regular.ttf',
         cinzel='Cinzel[wght].ttf', fraunces='Fraunces[SOFT,WONK,opsz,wght].ttf', oswald='Oswald[wght].ttf', playfair='PlayfairDisplay[wght].ttf',
         playfairi='PlayfairDisplay-Italic[wght].ttf', rye='Rye-Regular.ttf', graduate='Graduate-Regular.ttf', yellowtail='Yellowtail-Regular.ttf', interblack='InterDisplay-Black.otf', damion='Damion-Regular.ttf')
VAR = dict(big=[900], cinzel=[900], fraunces=[9, 900, 60, 1], oswald=[700], playfair=[900], playfairi=[900])
def line(text, font, wfrac, W, fill, key, kw=27, track=0):
    ff = F[font]; var = VAR.get(font)
    def mk(sz):
        f = ImageFont.truetype(FD + ff, sz)
        if var: f.set_variation_by_axes(var)
        return f
    f = mk(800); adv = [f.getlength(c) for c in text]; tot = sum(adv) + track * (len(text) - 1); size = int(800 * W * wfrac / tot)
    f = mk(size); adv = [f.getlength(c) for c in text]; tr = int(track * size / 800)
    asc, desc = f.getmetrics(); tot = int(sum(adv) + tr * (len(text) - 1)); pad = 80
    im = Image.new('RGBA', (tot + 2 * pad, asc + desc + 2 * pad), (0, 0, 0, 0))
    k = Image.new('L', im.size, 0); d = ImageDraw.Draw(k); x = pad
    for c, a in zip(text, adv): d.text((x, pad), c, font=f, fill=255); x += a + tr
    k = k.filter(ImageFilter.MaxFilter(kw)); im.paste(Image.new('RGBA', im.size, key), (0, 0), k)
    d = ImageDraw.Draw(im); x = pad
    for c, a in zip(text, adv): d.text((x, pad), c, font=f, fill=fill); x += a + tr
    out = im.crop(im.getbbox())
    import os; st = float(os.environ.get('STRETCH', '1'))
    if st != 1: out = out.resize((out.width, int(out.height * st)))
    return out
def stack(lines, W, gap=24):
    h = sum(l.height for l in lines) + gap * (len(lines) - 1); out = Image.new('RGBA', (W, h), (0, 0, 0, 0)); y = 0
    for l in lines: out.alpha_composite(l, ((W - l.width) // 2, y)); y += l.height + gap
    return out
def lockup(art, W, top, bottom, name, bgs, g=36):
    """art: RGBA image; top/bottom: list of line images; saves docs/print-files/<name>.png and previews on each bg"""
    t = stack(top, W) if top else None; b = stack(bottom, W) if bottom else None
    H = (t.height + g if t else 0) + art.height + (g + b.height if b else 0)
    out = Image.new('RGBA', (W, H), (0, 0, 0, 0)); y = 0
    if t: out.alpha_composite(t, (0, 0)); y = t.height + g
    out.alpha_composite(art, ((W - art.width) // 2, y)); y += art.height + g
    if b: out.alpha_composite(b, (0, y))
    out.save(f'docs/print-files/{name}.png')
    for tag, c in bgs.items():
        bg = Image.new('RGBA', out.size, c); bg.alpha_composite(out); bg.convert('RGB').resize((600, int(600 * H / W))).save(f'designs/prev_{name}_{tag}.png')
    return out
def widths(*ls): return [l.width for l in ls]
def line_same(texts, font, wfrac, W, fill, key, kw=27, track=0):
    """Render several lines at ONE font size: the widest line takes wfrac*W. Returns the list of line images."""
    ref = max(texts, key=lambda t: len(t)); imgs = [line(t, font, wfrac, W, fill, key, kw, track) for t in texts]
    # fit by widest rendered natural width: scale factors from the independently fitted widths
    widest = max(i.width for i in imgs); out = []
    for t in texts:
        f = ImageFont.truetype(FD + F[font], 800)
        if VAR.get(font): f.set_variation_by_axes(VAR[font])
        nat = sum(f.getlength(c) for c in t) + track * (len(t) - 1)
        out.append(nat)
    big = max(out); size_ratio = (W * wfrac) / big
    res = []
    for t, nat in zip(texts, out):
        res.append(line(t, font, (nat * size_ratio) / W, W, fill, key, kw, track))
    return res
