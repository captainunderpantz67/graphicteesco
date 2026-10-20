cd /home/user/graphicteesco
for c in Black Navy; do ONLY="/ $c /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482318671 $(cat designs/a219/fid-dark.txt) 1080398177; done
for c in Sand White "Sport Grey"; do ONLY="/ $c /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482318671 $(cat designs/a219/fid-light.txt) 1080398177; done
echo DONE
