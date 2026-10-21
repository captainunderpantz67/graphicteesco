import sys, json; sys.path.insert(0,'.')
from designs.lock import *
n, AW, HF, F = sys.argv[1], float(sys.argv[2]), float(sys.argv[3]), sys.argv[4]; PF = float(sys.argv[5]) if len(sys.argv) > 5 else 1.0
c = json.load(open(f'designs/c{n}/cfg.json')); D = f'designs/c{n}/'
im = Image.open(D + 'src_print.png').convert('RGBA'); a = im.crop((0, c['rows'][0], im.width, c['rows'][1])); a = a.crop(a.getbbox()); a.save(D + 'art_only.png'); print(a.size)
d = D + 'art_dark.png'
import os
ad = Image.open(d).convert('RGBA') if os.path.exists(d) else a
run(a, ad, f"{n}-{c['name']}", c['top'], c['bot'], F, AW, tuple(tuple(x) for x in c['ash']), tuple(tuple(x) for x in c['light']), HF=HF, PF=PF)
