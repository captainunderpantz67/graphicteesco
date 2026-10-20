cd /home/user/graphicteesco
export FW=1650 TOP=75 FORCE=1
ONLY='/ Black /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456009 1080398177 >> designs/e658r/s.log 2>&1
ONLY='/ Navy /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456009 1080398177 >> designs/e658r/s.log 2>&1
ONLY='/ Dark Grey Heather /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456009 1080398177 >> designs/e658r/s.log 2>&1
ONLY='/ Heather Forest /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456009 1080398177 >> designs/e658r/s.log 2>&1
ONLY='/ Steel Blue /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456009 1080398177 >> designs/e658r/s.log 2>&1
ONLY='/ Natural /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456085 1080398177 >> designs/e658r/s.log 2>&1
ONLY='/ Ash /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456085 1080398177 >> designs/e658r/s.log 2>&1
ONLY='/ Athletic Heather /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456085 1080398177 >> designs/e658r/s.log 2>&1
export FORCE=0
for i in 1 2 3; do ONLY='/ Black /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456009 1080398177 >> designs/e658r/s.log 2>&1 ; ONLY='/ Navy /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456009 1080398177 >> designs/e658r/s.log 2>&1 ; ONLY='/ Dark Grey Heather /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456009 1080398177 >> designs/e658r/s.log 2>&1 ; ONLY='/ Heather Forest /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456009 1080398177 >> designs/e658r/s.log 2>&1 ; ONLY='/ Steel Blue /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456009 1080398177 >> designs/e658r/s.log 2>&1 ; ONLY='/ Natural /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456085 1080398177 >> designs/e658r/s.log 2>&1 ; ONLY='/ Ash /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456085 1080398177 >> designs/e658r/s.log 2>&1 ; ONLY='/ Athletic Heather /' /tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile 483384746 1090456085 1080398177 >> designs/e658r/s.log 2>&1; done
touch designs/e658r/sync_done
