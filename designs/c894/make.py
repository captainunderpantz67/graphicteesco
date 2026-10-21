import sys; sys.path.insert(0,'.')
from designs.lib import *
import numpy as np, cv2
im=Image.open('designs/c894/src_print.png').convert('RGBA'); a=im.crop((0,332,im.width,3292)); a=a.crop(a.getbbox())
n=np.array(a); al=n[:,:,3]>40; r,g,b=[n[:,:,i].astype(int) for i in range(3)]
lum=(r*3+g*6+b)//10; ink=(al&(lum<95)&((r-b)<60)).astype('uint8')
nc,lab,st,_=cv2.connectedComponentsWithStats(ink,8)
out=n.copy(); cream=np.array([240,228,200])
k=cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(15,15))
er=cv2.erode(ink,k)
for i in range(1,nc):
    m=lab==i
    if st[i,4]>25000:
        band=m&(er==0); out[band,:3]=cream; out[m&(er>0),3]=0
    else: out[m,:3]=cream
light=Image.fromarray(out,'RGBA'); light.convert('RGBA').save('designs/c894/art_light.png'); a.save('designs/c894/art_dark.png')
W=3000; FONT='cinzel'; AW=float(sys.argv[1]); HF=float(sys.argv[2])
for tag,hf,pf,key,art0 in (('ash',(150,60,30,255),(38,50,86,255),CREAM,a),('light',(236,128,84,255),(246,236,214,255),(20,26,44,255),light)):
    top=line_same(['SISYPHUS','HAD'],FONT,HF,W,hf,key,kw=15)
    bot=line_same(['BAD','PROGRAMMING'],FONT,1.0,W,pf,key,kw=15)
    aw=int(W*AW); art=art0.resize((aw,int(a.height*aw/a.width)))
    o=lockup(art,W,top,bot,'894-sisyphus-'+tag,{'grey':(150,150,150,255),'navy':(26,34,62,255),'black':(20,20,20,255)},g=50)
    th=sum(t.height for t in top)+sum(b.height for b in bot)
    print(tag,'head',[t.width for t in top],'punch',[b.width for b in bot],'type',th,'of',o.height,round(th/o.height,3),'subject',art.width,round(art.width/W,2),o.size,'aspect',round(o.height/o.width,2))
