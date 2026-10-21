"""designs/lock.py: generic stacked lockup for lane C twins.
usage in a make.py:  from designs.lock import run;  run(art_dark, art_light, name, top=[['LINE','LINE2']], bot=[['L3']], font='anton', AW=.5, tw=(..), cols=((hf,pf,key) ash, (hf,pf,key) light), HF=.8, PF=1.0)
top/bot: list of GROUPS; each group is rendered with line_same at one size (group widest = wfrac*W).  Prints the 7h/7k/7l numbers."""
import sys; sys.path.insert(0, '.')
from designs.lib import *
def run(a_ash, a_light, name, top, bot, font, AW, ash, light, HF=0.8, PF=1.0, W=3000, g=50, kw=15):
    for tag, (hf, pf, key), art0 in (('ash', ash, a_ash), ('light', light, a_light)):
        T = [l for grp in top for l in line_same(grp, font, HF, W, hf, key, kw=kw)]
        B = [l for grp in bot for l in line_same(grp, font, PF, W, pf, key, kw=kw)]
        aw = int(W * AW); art = art0.resize((aw, int(art0.height * aw / art0.width)))
        o = lockup(art, W, T, B, f'{name}-{tag}', {'grey': (150, 150, 150, 255), 'navy': (26, 34, 62, 255), 'black': (20, 20, 20, 255)}, g=g)
        th = sum(t.height for t in T) + sum(b.height for b in B)
        print(tag, 'head', [t.width for t in T], 'punch', [b.width for b in B], 'type', th, 'of', o.height, round(th / o.height, 3), 'subject', art.width, round(art.width / W, 2), o.size, 'aspect', round(o.height / o.width, 2))

def run_side(a_ash, a_light, name, top, bot, font, ash, light, HF=0.85, PF=1.0, COL=1380, ART=1500, GAP=44, art_left=True, kw=15):
    """tall art beside a text column (art ART px wide, column COL px wide): top groups then bottom groups stacked in the column"""
    for tag, (hf, pf, key), art0 in (('ash', ash, a_ash), ('light', light, a_light)):
        h = [l for grp in top for l in line_same(grp, font, HF, COL, hf, key, kw=kw)]; p = [l for grp in bot for l in line_same(grp, font, PF, COL, pf, key, kw=kw)]
        sc = ART / art0.width; art = art0.resize((int(art0.width * sc), int(art0.height * sc)))
        lines = h + p; th = sum(l.height for l in lines) + GAP * (len(lines) - 1) + 70
        H = max(art.height, th); out = Image.new('RGBA', (art.width + COL + 60, H), (0, 0, 0, 0)); ax = 0 if art_left else COL + 60; tx = art.width + 60 if art_left else 0
        out.alpha_composite(art, (ax, (H - art.height) // 2)); y = (H - th) // 2
        for i, l in enumerate(lines):
            if i == len(h): y += 70
            out.alpha_composite(l, (tx + (COL - l.width) // 2, y)); y += l.height + GAP
        out = out.crop(out.getbbox()); out.save(f'docs/print-files/{name}-{tag}.png')
        for tt, c in {'grey': (150, 150, 150, 255), 'navy': (26, 34, 62, 255), 'black': (20, 20, 20, 255)}.items():
            bg = Image.new('RGBA', out.size, c); bg.alpha_composite(out); bg.convert('RGB').resize((600, int(600 * out.height / out.width))).save(f'designs/prev_{name}-{tag}_{tt}.png')
        ty = sum(l.height for l in lines)
        print(tag, 'head', [l.width for l in h], 'punch', [l.width for l in p], 'type', ty, 'of', out.height, round(ty / out.height, 3), 'subject', art.width, round(art.width / out.width, 2), out.size, 'aspect', round(out.height / out.width, 2))
