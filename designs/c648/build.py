import sys; sys.path.insert(0,'.')
from designs.lib import *
import numpy as np, cv2
art=Image.open('designs/c648/art_pp.png').convert('RGBA'); art=art.crop(art.getchannel('A').point(lambda v:255 if v>10 else 0).getbbox())
W=3400; AH=1750; art=art.resize((round(art.width*AH/art.height),AH),Image.LANCZOS)
def halo(a,px):
    al=np.array(a.getchannel('A')); k=cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(2*px+1,2*px+1)); d=cv2.dilate(al,k)
    h=Image.new('RGBA',a.size,CREAM); h.putalpha(Image.fromarray(d)); h.alpha_composite(a); return h
CR=(246,236,214,255); RD=(214,86,70,255); NV=(31,42,77,255); RD2=(176,54,42,255)
for mode,(hc,pc,aa,bg) in {'storm':(CR,RD,halo(art,16),(60,80,110,255)),'sand':(NV,RD2,art,(212,196,166,255))}.items():
    h=line('FINISHER.','anton',0.75,W,hc,hc,kw=3); ps=line_same(['SOUL STILL','AT MILE 20.'],'anton',0.85,W,pc,pc,kw=3)
    out=lockup(aa,W,[h],ps,f'648-{mode}',{mode:bg},g=40)
    out=out.crop(out.getchannel('A').point(lambda v:255 if v>10 else 0).getbbox()); out.save(f'docs/print-files/648-{mode}.png',dpi=(300,300))
    th=h.height+sum(p.height for p in ps)
    print(mode,out.size,'headline',h.width,'punch widths',[p.width for p in ps],'ratio',round(max(p.width for p in ps)/h.width,2),'type',th,'of',out.height,round(th/out.height,2),'subject',art.width,'of',W,round(art.width/W,2))
