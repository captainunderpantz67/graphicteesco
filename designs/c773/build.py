import sys; sys.path.insert(0,'.')
from designs.lib import *
import numpy as np, cv2
art=Image.open('designs/c773/art_pp.png').convert('RGBA')
al=np.array(art.getchannel('A')); n,lab,st,_=cv2.connectedComponentsWithStats((al>40).astype(np.uint8),connectivity=8)
keep=np.zeros_like(al,bool)
for i in range(1,n):
    if st[i,cv2.CC_STAT_AREA]>15000: keep|=(lab==i)
al[~keep]=0
# ragged-fade all four straight image edges so no cut line shows
H0,W0=al.shape; rng=np.random.default_rng(7); noise=cv2.GaussianBlur(rng.random((H0,W0)).astype(np.float32),(0,0),6); noise=(noise-noise.min())/(noise.max()-noise.min())
yy,xx=np.mgrid[0:H0,0:W0]; d=np.minimum.reduce([yy,xx,H0-1-yy,W0-1-xx]).astype(np.float32); R=110
m=np.clip((d/R)*1.4-noise*0.9,0,1); al=(al*m).astype(np.uint8)
art.putalpha(Image.fromarray(al)); art=art.crop(art.getchannel('A').point(lambda v:255 if v>10 else 0).getbbox())
W=3400; AW=int(sys.argv[1]) if len(sys.argv)>1 else 1900; art=art.resize((AW,round(art.height*AW/art.width)),Image.LANCZOS)
def halo(a,px):
    al=np.array(a.getchannel('A')); k=cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(2*px+1,2*px+1)); d=cv2.dilate(al,k)
    h=Image.new('RGBA',a.size,CREAM); h.putalpha(Image.fromarray(d)); h.alpha_composite(a); return h
CR=(246,236,214,255); MU=(226,169,53,255); BR=(58,36,24,255); RD=(158,64,28,255)
for mode,(hc,pc,aa,bg) in {'navy':(CR,MU,halo(art,16),(31,42,77,255)),'sand':(BR,RD,art,(226,214,188,255))}.items():
    h=line("FULL SEND.",'big',0.9,W,hc,hc,kw=3); p=line("MOSTLY MUD.",'big',1.0,W,pc,pc,kw=3)
    out=lockup(aa,W,[h],[p],f'773-{mode}',{mode:bg},g=40)
    out=out.crop(out.getchannel('A').point(lambda v:255 if v>10 else 0).getbbox()); out.save(f'docs/print-files/773-{mode}.png',dpi=(300,300))
    th=h.height+p.height
    print(mode,out.size,'headline',h.width,'punch',p.width,'ratio',round(p.width/h.width,2),'type',th,'of',out.height,round(th/out.height,2),'subject',art.width,'of',out.width,round(art.width/out.width,2))
