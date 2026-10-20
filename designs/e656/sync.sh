cd /home/user/graphicteesco
export FW=1650 TOP=75 FORCE=1
for c in Black Navy "Dark Grey Heather" "Heather Forest" Maroon; do ONLY="/ $c /" python3 scripts/pf-sync.py setfile 483356693 1090311837 1080398177 > "designs/e656/m/sync_${c// /_}.log" 2>&1; done
for c in Natural Ash "Athletic Heather"; do ONLY="/ $c /" python3 scripts/pf-sync.py setfile 483356693 1090311897 1080398177 > "designs/e656/m/sync_${c// /_}.log" 2>&1; done
echo done > designs/e656/m/sync_done
