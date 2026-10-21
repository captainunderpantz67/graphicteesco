#!/bin/bash
cd /home/user/graphicteesco; D=$1; P=$(cat $D/pid)
/usr/bin/python3 scripts/c-zipbuild.py mock $D $P > $D/mock.log 2>&1
cp $D/urls.json $D/urls_navy.json
for f in back front; do cp $D/m_navy_$f.jpg $D/mN_$f.jpg; done
SECOND=Black SECOND_VID=17295 /usr/bin/python3 scripts/c-zipbuild.py mock $D $P > $D/mock_black.log 2>&1
cp $D/urls.json $D/urls_black.json
for f in back front; do cp $D/m_navy_$f.jpg $D/mB_$f.jpg; done
touch $D/mock.done
