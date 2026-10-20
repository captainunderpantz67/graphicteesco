cd /home/user/graphicteesco
ONLY="/ Sand /" FORCE=1 /usr/bin/python3 scripts/pf-emb-sync.py 482690521 "#333366" $(cat designs/a491/fid-navy.txt)
ONLY="/ Navy /" FORCE=1 /usr/bin/python3 scripts/pf-emb-sync.py 482690521 "#FFFFFF" $(cat designs/a491/fid-white.txt)
echo DONE
