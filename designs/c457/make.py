import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/457-eight-nights-of-fried-food.png').convert('RGBA')
a=im.crop((0,360,im.width,3330)); a=a.crop(a.getbbox())
W=3450
NAVY=(27,42,94,255)
for tag,fill,key in (('navy',NAVY,CREAM),('cream',CREAM,NAVY)):
    top=[line('EIGHT NIGHTS.','bowlby',1.0,W,fill,key,kw=15)]
    bot=[line('ZERO','bowlby',1.0,W,fill,key,kw=15),line('SALAD.','bowlby',1.0,W,fill,key,kw=15)]
    aw=int(W*0.58); art=a.resize((aw,int(a.height*aw/a.width)))
    o=lockup(art,W,top,bot,'457-zero-salad-'+tag,{'grey':(128,128,128,255),'sand':(226,212,185,255),'lblue':(168,196,224,255),'navy':(26,34,62,255)},g=50)
    th=top[0].height+sum(b.height for b in bot)
    print(tag,'head',top[0].width,'punch',[b.width for b in bot],'type',th,'of',o.height,th/o.height,'subject',art.width,art.width/W,o.size)
