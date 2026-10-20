cd /home/user/graphicteesco
for c in "Dark Grey Heather" Navy Black "Heather Forest"; do ONLY="/ $c /" FORCE=1 FW=1500 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482701854 $(cat designs/a580/fid-dark.txt) 1080398177; done
for c in White Natural Ash "Athletic Heather"; do ONLY="/ $c /" FORCE=1 FW=1500 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482701854 $(cat designs/a580/fid-light.txt) 1080398177; done
echo DONE
