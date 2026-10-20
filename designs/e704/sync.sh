cd /home/user/graphicteesco
export FW=1500 TOP=75 FORCE=1
ONLY='/ Storm /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483426030 1090473140 1080398177 >> designs/e704/s.log 2>&1
export FORCE=0
for i in 1 2 3; do ONLY='/ Storm /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483426030 1090473140 1080398177 >> designs/e704/s.log 2>&1; done
touch designs/e704/sync_done
