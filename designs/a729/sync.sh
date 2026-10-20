cd /home/user/graphicteesco
ONLY="/ White /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483426495 $(cat designs/a729/fid-dark.txt) 1080398177
ONLY="/ Red /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483426495 $(cat designs/a729/fid-light.txt) 1080398177
echo DONE
