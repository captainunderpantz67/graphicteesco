cd /home/user/graphicteesco
FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482800149 $(cat designs/a645r/fid-light.txt) 1080398177
for c in White Sand "Sport Grey" Ash; do ONLY="/ $c /" FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483385452 $(cat designs/a645r/fid-light.txt) 1080398177; done
ONLY="/ Navy /" FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483385452 $(cat designs/a645r/fid-navy.txt) 1080398177
echo DONE
