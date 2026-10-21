#!/bin/bash
# c-twinsrc.sh <source handle> <dir>: downloads the source product's front print to <dir>/src_print.png, writes <dir>/src_view.jpg and prints the row gaps
# (needs the Shopify numeric product id: pass it as $3)
mkdir -p $2; P=$(/usr/bin/python3 scripts/pf-find.py $3 | awk '{print $1}'); echo sync pid $P
curl -s -H "Authorization: Bearer $PRINTFUL_TOKEN" https://api.printful.com/sync/products/$P | python3 -c "
import json,sys,urllib.request;r=json.load(sys.stdin)['result']['sync_variants']
v=r[0]; f=[f for f in v['files'] if f['type'] in ('default','front') and f['url']][0]; print(v['name'],f['width'],f['height'])
open('$2/src_print.png','wb').write(urllib.request.urlopen(f['url']).read())"
/usr/bin/python3 - <<PY
import numpy as np
from PIL import Image
im=Image.open('$2/src_print.png').convert('RGBA'); a=np.array(im)[:,:,3]>40; rows=a.sum(1)
gaps=[];s=None
for y,v in enumerate(rows):
    if v<6:
        if s is None:s=y
    else:
        if s is not None and y-s>6: gaps.append((s,y))
        s=None
print(im.size,gaps)
bg=Image.new('RGBA',im.size,(40,40,40,255)); bg.alpha_composite(im); bg.convert('RGB').resize((700,int(700*im.height/im.width))).save('$2/src_view.jpg')
PY
