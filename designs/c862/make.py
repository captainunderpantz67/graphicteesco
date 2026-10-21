import sys; sys.path.insert(0,'.')
from designs.lib import *
a=Image.open('designs/c862/art_only.png').convert('RGBA')
W=3000
FONT=sys.argv[1] if len(sys.argv)>1 else 'big'
for tag,hf,pf,key in (('ash',(38,50,86,255),(171,72,36,255),CREAM),('light',CREAM,(226,170,60,255),(20,26,44,255))):
    top=[line('CATCH AND',FONT,0.96,W,hf,key,kw=15),line('RELEASE',FONT,0.96,W,hf,key,kw=15)]
    bot=[line('(MOSTLY RELEASE)',FONT,1.0,W,pf,key,kw=15)]
    aw=int(W*0.5); art=a.resize((aw,int(a.height*aw/a.width)))
    o=lockup(art,W,top,bot,'862-catch-release-'+tag,{'grey':(150,150,150,255),'navy':(26,34,62,255),'black':(20,20,20,255)},g=40)
    th=sum(t.height for t in top)+bot[0].height
    print(tag,'head',[t.width for t in top],'punch',[b.width for b in bot],'type',th,'of',o.height,round(th/o.height,3),'subject',art.width,round(art.width/W,2),o.size,'aspect',round(o.height/o.width,2))
