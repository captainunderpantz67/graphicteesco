#!/bin/bash
cd /home/user/graphicteesco
P=$(cat designs/c897/pid)
/usr/bin/python3 scripts/c-zipbuild.py sync designs/c897 $P > designs/c897/sync.log 2>&1
SECOND=Black SECOND_VID=17295 SECOND_IDS='{"S":17295,"M":17296,"L":17297,"XL":17298,"2XL":17299,"3XL":17300}' /usr/bin/python3 scripts/c-zipbuild.py sync designs/c897 $P > designs/c897/sync_black.log 2>&1
