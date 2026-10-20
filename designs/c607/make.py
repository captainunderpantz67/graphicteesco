import sys; sys.path.insert(0,'.')
from designs.lib import *
def getart(src,y0,y1):
    im=Image.open(src).convert('RGBA'); a=im.crop((0,y0,im.width,y1)); a=a.crop(a.getbbox()); return a.resize((int(a.width*0.94),int(a.height*0.94)),Image.LANCZOS)
ARTS={'sand':getart('docs/print-files/607-pickleball-hoodie-sand.png',558,3356),'navy':getart('docs/print-files/607-pickleball-hoodie-navy.png',586,3384)}
W=3359
NAVY=(30,40,76,255); RED=(206,70,52,255); DRED=(176,44,32,255)
for tag,c1,k1,c2,k2,bg in (('sand',NAVY,CREAM,DRED,CREAM,(214,196,160,255)),('navy',CREAM,NAVY,(244,120,100,255),NAVY,(38,50,88,255))):
    h1=line("STAY OUT OF THE KITCHEN.",'big',0.985,W,c1,k1,kw=27); h2=line("WE'RE TALKING.",'bowlby',0.985,W,c2,k2,kw=29)
    print(tag,'headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height,'art',ARTS[tag].size)
    art=ARTS[tag]; out=lockup(art,W,[h1],[h2],f'607-v2-talking-{tag}',{tag:bg}); print(out.size,out.height/out.width)
