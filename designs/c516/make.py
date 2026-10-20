import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/516-currently-burrowed-hoodie.png').convert('RGBA'); W=im.width
art=im.crop((0,291,W,1986)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*0.95),int(art.height*0.95)),Image.LANCZOS)
DK=(60,30,28,255); RED=(190,54,52,255); DRED=(150,36,36,255); CORAL=(240,120,110,255)
for tag,c1,k1,c2,k2,bg in (('sand',DK,CREAM,DRED,CREAM,(214,196,160,255)),('grey',DK,CREAM,DRED,CREAM,(160,160,165,255))):
    h1=line("OUT OF OFFICE.",'bowlby',0.97,W,c1,k1,kw=29); pa=line("BACK IN SPRING.",'alfa',0.985,W,c2,k2,kw=27); pb=pa
    print(tag,'headline px',h1.width,'punch px',pa.width,pb.width,'heights',h1.height,pa.height,pb.height,'art',art.size)
    out=lockup(art,W,[h1],[pa],f'516-v2-quilt-{tag}',{tag:bg}); print(out.size,out.height/out.width)
