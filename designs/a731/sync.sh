cd /home/user/graphicteesco
ONLY="/ White /" FORCE=1 FW=1500 TOP=60 /usr/bin/python3 scripts/pf-sync.py setfile 483426679 $(cat designs/a731/fid-dark.txt) 1080398177
ONLY="/ Red /" FORCE=1 FW=1500 TOP=60 /usr/bin/python3 scripts/pf-sync.py setfile 483426679 $(cat designs/a731/fid-light.txt) 1080398177
echo DONE
