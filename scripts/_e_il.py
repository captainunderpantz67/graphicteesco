import sys
l=sys.argv[1]; p='docs/intake-log.md'; L=open(p).read().split('\n')
i=next((k for k,x in enumerate(L) if x.startswith('RUNNING lane E')),0)
L.insert(i+1,l); open(p,'w').write('\n'.join(L))
