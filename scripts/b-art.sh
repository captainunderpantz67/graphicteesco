#!/bin/bash
# b-art.sh <id> "<recraft prompt>" [close=100] [halo=20] [halo=1]   (halo=0 skips the camo underlay)
# recraft -> $S/a<id>_1.png (+ preview), print-prep -> p<id>.png, camo-halo -> k<id>.png (or knock-white when halo=0), preview sheet chk<id>.jpg on two camo-ish greens/greys.
cd "$(dirname "$0")/.."
S=${S:-/tmp/claude-0/-home-user-graphicteesco/a64dce1e-86db-5936-9694-ae2324b9f09b/scratchpad}
ID=$1; PR=$2; CL=${3:-100}; HA=${4:-20}
PR=$(echo "$PR" | sed "s/Isolated on plain background,/Plain white background,/")
python3 scripts/recraft.py $S/a${ID}_1.png "$PR" | tail -1
python3 -c "
from PIL import Image;Image.open('$S/a${ID}_1.png').convert('RGB').resize((800,800)).save('$S/a${ID}v.jpg')"
python3 scripts/print-prep.py $S/a${ID}_1.png $S/p$ID.png --width 3600 | tail -1
if [ "$HA" = 0 ]; then python3 scripts/knock-white.py $S/p$ID.png $S/k$ID.png 3000 | tail -3; else python3 scripts/camo-halo.py $S/p$ID.png $S/k$ID.png $CL $HA; fi
python3 -c "
from PIL import Image
im=Image.open('$S/k$ID.png').convert('RGBA');im=im.resize((600,int(600*im.height/im.width)))
c=Image.new('RGB',(1200,im.height))
for n,col in enumerate([(70,80,55),(45,45,48)]):
    b=Image.new('RGBA',im.size,col+(255,));b.alpha_composite(im);c.paste(b.convert('RGB'),(600*n,0))
c.save('$S/chk$ID.jpg')"
