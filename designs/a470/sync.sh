cd /home/user/graphicteesco
for c in Black Navy; do ONLY="/ $c /" FORCE=1 FW=1500 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482688507 $(cat designs/a470/fid-dark.txt) 1080398177; done
for c in White Natural Pink "Heather Stone" "Athletic Heather"; do ONLY="/ $c /" FORCE=1 FW=1500 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482688507 $(cat designs/a470/fid-light.txt) 1080398177; done
echo DONE
