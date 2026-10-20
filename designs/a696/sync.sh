cd /home/user/graphicteesco
ONLY="/ Sand /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483403172 $(cat designs/a696/fid-light.txt) 1080398177
ONLY="/ Maroon /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483403172 $(cat designs/a696/fid-dark.txt) 1080398177
echo DONE
