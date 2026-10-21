#!/bin/bash
# c-newrun.sh <dir (designs/cNNN)> <shopify numeric product id> <hand-id NNN> [sizes S-3XL|S-5XL]
# New zip product (lane C): wait for the Printful sync product, start the paced sync chain (Ash+Navy, then Black), make the 3 back + 3 chest mockups
# (m_black/navy/ash_back|front.jpg), the contact sheet, host them in docs/hosted as cNNN_m_*.jpg and push. Run with bash; needs PRINTFUL_TOKEN.
D=$1; SP=$2; N=$3; SZ=${4:-S-3XL}
for i in $(seq 1 10); do P=$(/usr/bin/python3 scripts/pf-find.py $SP 2>&1 | awk '{print $1}'); case "$P" in [0-9]*) break;; esac; sleep 15; done
echo PID $P; echo $P > $D/pid
if [ "$SZ" = "S-5XL" ]; then IDS='{"S":17295,"M":17296,"L":17297,"XL":17298,"2XL":17299,"3XL":17300,"4XL":17301,"5XL":17302}'; else IDS='{"S":17295,"M":17296,"L":17297,"XL":17298,"2XL":17299,"3XL":17300}'; fi
(nohup sh -c "SECOND=Navy /usr/bin/python3 scripts/c-zipbuild.py sync $D $P > $D/sync.log 2>&1; SECOND=Black ONLY_SECOND=1 SECOND_IDS='$IDS' /usr/bin/python3 scripts/c-zipbuild.py sync $D $P > $D/sync_black.log 2>&1" >/dev/null 2>&1 &)
SECOND=Navy /usr/bin/python3 scripts/c-zipbuild.py mock $D $P > $D/mock.log 2>&1
for f in navy_back navy_front ash_back ash_front; do cp $D/m_$f.jpg $D/n_$f.jpg; done
SECOND=Black SECOND_VID=17295 /usr/bin/python3 scripts/c-zipbuild.py mock $D $P > $D/mock_black.log 2>&1
mv $D/m_navy_back.jpg $D/m_black_back.jpg; mv $D/m_navy_front.jpg $D/m_black_front.jpg
for f in navy_back navy_front ash_back ash_front; do cp $D/n_$f.jpg $D/m_$f.jpg; done
/usr/bin/python3 -c "
from PIL import Image
ims=[Image.open('$D/m_%s.jpg'%n).convert('RGB').resize((500,500)) for n in ('black_back','navy_back','ash_back','black_front')]
c=Image.new('RGB',(2000,500)); [c.paste(im,(i*500,0)) for i,im in enumerate(ims)]; c.save('$D/contact.jpg')"
for n in black_back navy_back ash_back black_front navy_front ash_front; do /usr/bin/python3 scripts/fal-host.py $D/m_$n.jpg c${N}_m_$n.jpg 2>&1 | tail -n1 >/dev/null; done
git pull -q --rebase --autostash origin main 2>&1 | tail -n1; git push -q origin main 2>&1 | tail -n1
echo done
