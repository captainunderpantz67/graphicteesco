#!/bin/bash
while ps -eo args | grep -v grep | grep -q "c895/run"; do sleep 20; done
cd /home/user/graphicteesco
P=$(cat designs/c894/pid)
/usr/bin/python3 scripts/c-zipbuild.py sync designs/c894 $P > designs/c894/sync.log 2>&1
SECOND=Black SECOND_VID=17295 SECOND_IDS='{"S":17295,"M":17296,"L":17297,"XL":17298,"2XL":17299,"3XL":17300}' /usr/bin/python3 scripts/c-zipbuild.py sync designs/c894 $P > designs/c894/sync_black.log 2>&1
scripts/c-mock2.sh designs/c894
