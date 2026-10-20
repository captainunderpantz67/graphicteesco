cd /home/user/graphicteesco
for c in Dust Navy; do lc=$(echo $c|tr A-Z a-z); ONLY="/ $c /" FORCE=1 FW=1500 TOP=0 /usr/bin/python3 scripts/pf-sync.py setfile 482422062 $(cat designs/a408/fid-$lc.txt) 1080398177; done
echo DONE
