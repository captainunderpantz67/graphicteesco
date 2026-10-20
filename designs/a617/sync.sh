cd /home/user/graphicteesco
for c in Sand Navy; do lc=$(echo $c|tr A-Z a-z); ONLY="/ $c /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483383802 $(cat designs/a617/fid-$lc.txt) 1080398177; done
echo DONE
