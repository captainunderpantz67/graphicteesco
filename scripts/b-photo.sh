#!/bin/bash
# b-photo.sh <name> <design image> <registry #> "<scene>" "<shirt>"  [crop=1]
# fal-photo.py (seedream, ONE image per attempt: R6.2 budget, 2 attempts max per cover) with the registry person, retried on a dropped connection; crops the mockup to the upper body first (crop=1)
# and writes a contact sheet to $S/cv<name>.jpg.
cd "$(dirname "$0")/.."
S=${S:-/tmp/claude-0/-home-user-graphicteesco/a64dce1e-86db-5936-9694-ae2324b9f09b/scratchpad}
N=$1; D=$2; R=$3; SC=$4; SH=$5; CROP=${6:-1}
if [ "$CROP" = 1 ]; then python3 -c "
from PIL import Image
im=Image.open('$D');w,h=im.size;im.crop((int(w*.1),0,int(w*.9),int(h*.8))).save('$S/d_$N.jpg')"; D=$S/d_$N.jpg; fi
P="${PERSON:-$(grep "^| $R " docs/model-registry.md | cut -d'|' -f3 | sed 's/^ *//;s/ *$//')}"
rm -f designs/fal/$N/seedream-*.png
for t in 1 2 3; do python3 scripts/fal-photo.py --design "$D" --name $N --model seedream --n 1 --person "$P" --scene "$SC" --shirt "$SH" ${FIT:+--fit "$FIT"} 2>&1 | tail -1
  [ -f designs/fal/$N/seedream-1.png ] && break; sleep $((t*5)); done
python3 -c "
from PIL import Image
ims=[Image.open(f'designs/fal/$N/seedream-{i}.png').convert('RGB') for i in (1,)]
ims=[i.resize((600,int(600*i.height/i.width))) for i in ims]
c=Image.new('RGB',(600,max(i.height for i in ims)));[c.paste(i,(600*n,0)) for n,i in enumerate(ims)];c.save('$S/cv$N.jpg')"
