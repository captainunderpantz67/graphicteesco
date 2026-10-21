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
