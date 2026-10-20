import sys; sys.path.insert(0,'.')
from designs.lib import *
import numpy as np, cv2
art=Image.open('designs/c647/art_pp.png').convert('RGBA'); art=art.crop(art.getchannel('A').point(lambda v:255 if v>10 else 0).getbbox())
W=3400; AH=1900; art=art.resize((round(art.width*AH/art.height),AH),Image.LANCZOS)
def halo(a,px):
    al=np.array(a.getchannel('A')); k=cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(2*px+1,2*px+1)); d=cv2.dilate(al,k)
    h=Image.new('RGBA',a.size,CREAM); h.putalpha(Image.fromarray(d)); h.alpha_composite(a); return h
CR=(246,236,214,255); MU=(226,168,52,255); NV=(31,42,77,255); RD=(184,64,45,255)
for mode,(hc,pc,aa) in {'navy':(CR,MU,halo(art,16)),'sand':(NV,RD,art)}.items():
    h=line('RUN CLUB.','big',0.9,W,hc,hc,kw=3); p=line('FOR THE COFFEE.','big',1.0,W,pc,pc,kw=3)
    out=lockup(aa,W,[h],[p],f'647-{mode}',{'navy':(31,42,77,255),'sand':(226,214,188,255)},g=40)
    print(mode,out.size,'headline',h.width,'punch',p.width,'ratio',round(p.width/h.width,2),'type h',h.height+p.height,'of',out.height,round((h.height+p.height)/out.height,2),'subject',art.width,'of',W,round(art.width/W,2))
