#!/bin/bash
# c-pre.sh <dir> "<alt name>" "<front detail>": chk, media.json, contact sheet; prints the productCreateMedia media variable
cd /home/user/graphicteesco; D=$1
/usr/bin/python3 scripts/c-chk.py $D || exit 1
/usr/bin/python3 scripts/c-media.py $D "$2" "$3"
/usr/bin/python3 - <<PY
from PIL import Image
D='$D/'
ims=[Image.open(D+p).convert('RGB').resize((500,500)) for p in ('mB_back.jpg','mN_back.jpg','m_ash_front.jpg','mB_front.jpg')]
c=Image.new('RGB',(2000,500))
for i,m in enumerate(ims): c.paste(m,(i*500,0))
c.save(D+'contact.jpg')
PY
