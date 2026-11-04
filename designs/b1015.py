import sys; sys.path.insert(0,'.')
from designs.lib import *
W=1800
def build(name,hfill,pfill,key,kw):
    h=line_same(['I GOT UP','AT 4 AM'],'oswald',0.80,W,hfill,key,kw=kw)
    p=line_same(['FOR A','TOASTER.'],'interblack',1.0,W,pfill,key,kw=kw)
    t=stack(h,W,gap=14); b=stack(p,W,gap=18)
    H=t.height+50+b.height
    o=Image.new('RGBA',(W,H),(0,0,0,0)); o.alpha_composite(t,(0,0)); o.alpha_composite(b,(0,t.height+50)); o.save(f'docs/print-files/{name}.png')
    print(name,o.size,'headline',[x.width for x in h],'punch',[x.width for x in p],'type/print h',(sum(x.height for x in h)+sum(x.height for x in p))/H)
RED=(205,38,42,255); INK=(26,26,30,255); GOLD=(244,190,64,255)
build('b1015-light',INK,RED,INK,3)
build('b1015-dark',GOLD,CREAM,(18,18,20,255),21)
