import sys; sys.path.insert(0,'.')
from designs.lib import *
src=Image.open('designs/c898/src_print.png').convert('RGBA'); a=src.crop((0,0,src.width,2189)); a=a.crop(a.getbbox())
print('art',a.size)
W=3000; FONT=sys.argv[1] if len(sys.argv)>1 else 'oswald'; AW=float(sys.argv[2]) if len(sys.argv)>2 else 0.47
for tag,hf,pf,key in (('ash',(190,60,100,255),(38,50,86,255),CREAM),('light',(244,176,196,255),(250,214,72,255),(20,26,44,255))):
    top=[line('MY BACKHAND',FONT,0.96,W,hf,key,kw=15)]
    bot=line_same(['HAS','OPINIONS'],FONT,1.0,W,pf,key,kw=15)
    aw=int(W*AW); art=a.resize((aw,int(a.height*aw/a.width)))
    o=lockup(art,W,top,bot,'898-backhand-'+tag,{'grey':(150,150,150,255),'navy':(26,34,62,255),'black':(20,20,20,255)},g=40)
    th=top[0].height+sum(b.height for b in bot)
    print(tag,'head',top[0].width,'punch',[b.width for b in bot],'type',th,'of',o.height,round(th/o.height,3),'subject',art.width,round(art.width/W,2),o.size,'aspect',round(o.height/o.width,2))
