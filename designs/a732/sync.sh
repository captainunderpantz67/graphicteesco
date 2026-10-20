cd /home/user/graphicteesco
ONLY="/ White /" FORCE=1 FW=1050 TOP=40 /usr/bin/python3 scripts/pf-sync.py setfile 483426709 $(cat designs/a732/fid-dark.txt) 1080398177
ONLY="/ Red /" FORCE=1 FW=1050 TOP=40 /usr/bin/python3 scripts/pf-sync.py setfile 483426709 $(cat designs/a732/fid-light.txt) 1080398177
echo DONE
