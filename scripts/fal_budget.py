"""Shared fal daily spend cap (Sam 2026-10-17: $16/day across all lanes, raised from $12).
charge(cost, label) runs before every paid fal call: it reads today's rows from the local docs/fal-spend.csv
and from origin/main (other lanes), refuses (exit 3) if the call would pass the cap, else appends a row.
Override the cap only with FAL_DAILY_CAP set by a human."""
import csv, datetime, io, os, pathlib, subprocess, sys, uuid
ROOT = pathlib.Path(__file__).resolve().parent.parent
LEDGER = ROOT / 'docs' / 'fal-spend.csv'
CAP = float(os.environ.get('FAL_DAILY_CAP', '16'))


def _rows(text):
    return [r for r in csv.reader(io.StringIO(text)) if len(r) >= 4 and r[0] != 'id']


def spent_today():
    today = datetime.datetime.utcnow().strftime('%Y-%m-%d')
    rows = {}
    if LEDGER.exists():
        for r in _rows(LEDGER.read_text()): rows[r[0]] = r
    try:
        subprocess.run(['git', '-C', str(ROOT), 'fetch', '-q', 'origin', 'main'], timeout=60, capture_output=True)
        remote = subprocess.run(['git', '-C', str(ROOT), 'show', 'origin/main:docs/fal-spend.csv'], capture_output=True, text=True, timeout=30).stdout
        for r in _rows(remote): rows[r[0]] = r
    except Exception:
        pass
    return sum(float(r[3]) for r in rows.values() if r[1].startswith(today))


def charge(cost, label):
    s = spent_today()
    if s + cost > CAP:
        sys.exit(f'fal daily cap: ${s:.2f} spent today (UTC), this call ${cost:.2f} would pass ${CAP:.0f}. Stop fal work; build non-fal items or wait for 00:00 UTC.')
    new = not LEDGER.exists()
    with open(LEDGER, 'a', newline='') as f:
        w = csv.writer(f)
        if new: w.writerow(['id', 'utc', 'label', 'usd'])
        w.writerow([uuid.uuid4().hex[:10], datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ'), label, f'{cost:.3f}'])
    print(f'fal spend: ${s + cost:.2f} of ${CAP:.0f} today', file=sys.stderr)
