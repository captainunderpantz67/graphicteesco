#!/bin/bash
# c-zipinfo.sh <shopify numeric product id> <dir>: finds the sync product, downloads the current back art to <dir>/back.png and prints a preview path
mkdir -p $2; P=$(/usr/bin/python3 scripts/pf-find.py $1 | awk '{print $1}'); echo pid $P
curl -s -H "Authorization: Bearer $PRINTFUL_TOKEN" https://api.printful.com/sync/products/$P | python3 -c "
import json,sys;r=json.load(sys.stdin)['result']['sync_variants']
v=r[0];b=[f for f in v['files'] if f['type']=='back'][0];print(b['url'],b['width'],b['height'])
print(sorted({x['name'].split(' / ')[1] for x in r}))" | tee $2/info.txt
curl -s -o $2/back.png $(head -1 $2/info.txt | awk '{print $1}')
/usr/bin/python3 -c "
from PIL import Image
im=Image.open('$2/back.png').convert('RGBA');bg=Image.new('RGBA',im.size,(150,150,150,255));bg.alpha_composite(im);bg.convert('RGB').resize((800,int(800*im.height/im.width))).save('$2/back_prev.jpg')"
