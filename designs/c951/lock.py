import sys; sys.path.insert(0,'.')
from designs.lib import *
from PIL import Image
W=3000
src=Image.open('designs/c951/src_print.png').convert('RGBA').crop((0,489,3413,3741))
bb=src.getbbox(); src=src.crop(bb)
art=src.resize((1310,int(src.height*1310/src.width)),Image.LANCZOS)
def build(name,head,punch,key,g=36):
    h=line('I ONLY RUN','bowlby',0.93,W,head,key,kw=27)
    p=line('DOWNHILL.','bowlby',0.98,W,punch,key,kw=27)
    out=lockup(art,W,[h],[p],name,{'dark':(30,30,30,255),'ash':(190,190,190,255)},g=g)
    th=h.height+p.height+2*g
    print(name,'headline',h.width,'punch',p.width,'=%d%%'%(100*p.width/h.width),'type',th,'of',out.height,'=%.1f%%'%(100*th/out.height),'subject',art.width,'of',W,'=%.0f%%'%(100*art.width/W),out.size)
build('951-run-dark',CREAM,(236,170,50,255),(20,26,44,255))
build('951-run-light',(20,26,44,255),(190,70,40,255),CREAM)
