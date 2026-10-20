cd /home/user/graphicteesco
for c in Black Navy "Forest Green"; do ONLY="/ $c /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483392870 $(cat designs/a589/fid-dark.txt) 1080398177; done
for c in White Sand "Sport Grey" Ash; do ONLY="/ $c /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483392870 $(cat designs/a589/fid-light.txt) 1080398177; done
echo DONE
