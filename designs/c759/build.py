import sys; sys.path.insert(0,'.')
from designs.lib import *
import numpy as np, cv2
art=Image.open('designs/c759/art_pp.png').convert('RGBA')
al=np.array(art.getchannel('A')); n,lab,st,_=cv2.connectedComponentsWithStats((al>40).astype(np.uint8),connectivity=8)
keep=np.zeros_like(al,bool)
for i in range(1,n):
    if st[i,cv2.CC_STAT_AREA]>15000: keep|=(lab==i)
al[~keep]=0
art.putalpha(Image.fromarray(al)); art=art.crop(art.getchannel('A').point(lambda v:255 if v>10 else 0).getbbox())
W=3400; AW=int(sys.argv[1]) if len(sys.argv)>1 else 2300; art=art.resize((AW,round(art.height*AW/art.width)),Image.LANCZOS)
def halo(a,px):
    al=np.array(a.getchannel('A')); k=cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(2*px+1,2*px+1)); d=cv2.dilate(al,k)
    h=Image.new('RGBA',a.size,CREAM); h.putalpha(Image.fromarray(d)); h.alpha_composite(a); return h
CR=(246,236,214,255); MU=(226,169,53,255); GK=(34,40,48,255); RD=(172,56,44,255)
for mode,(hc,pc,aa,bg) in {'navy':(CR,MU,halo(art,16),(31,42,77,255)),'sand':(GK,RD,art,(226,214,188,255))}.items():
    h=line("NOT YELLING.",'bowlby',0.9,W,hc,hc,kw=3); p=line("JUST HUSKY.",'bowlby',1.0,W,pc,pc,kw=3)
    out=lockup(aa,W,[h],[p],f'759-{mode}',{mode:bg},g=40)
    out=out.crop(out.getchannel('A').point(lambda v:255 if v>10 else 0).getbbox()); out.save(f'docs/print-files/759-{mode}.png',dpi=(300,300))
    th=h.height+p.height
    print(mode,out.size,'headline',h.width,'punch',p.width,'ratio',round(p.width/h.width,2),'type',th,'of',out.height,round(th/out.height,2),'subject',art.width,'of',out.width,round(art.width/out.width,2))
