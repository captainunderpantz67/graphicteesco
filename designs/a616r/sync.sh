cd /home/user/graphicteesco
FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482799311 $(cat designs/a616r/fid-sand.txt) 1080398177
for c in Sand Navy; do lc=$(echo $c|tr A-Z a-z); ONLY="/ $c /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483383802 $(cat designs/a616r/fid-$lc.txt) 1080398177; done
echo DONE
