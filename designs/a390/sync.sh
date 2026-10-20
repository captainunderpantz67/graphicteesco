cd /home/user/graphicteesco
FORCE=1 FW=1500 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482415348 $(cat designs/a390/fid-light.txt) 1080398177
ONLY="/ Navy /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482702758 $(cat designs/a390/fid-dark.txt) 1080398177
for c in White Sand Ash "Sport Grey"; do ONLY="/ $c /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482702758 $(cat designs/a390/fid-light.txt) 1080398177; done
echo DONE
