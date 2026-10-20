from PIL import Image, ImageDraw, ImageFont, ImageFilter
FD='designs/fonts/'
RED=(196,52,44,255); NAVY=(26,38,76,255); PINK=(226,38,96,255); CREAM=(246,236,214,255); BROWN=(58,36,24,255)
def line(text,font,wfrac,W,fill,key,kw=31,track=0,var=None):
    def mk(sz):
        f=ImageFont.truetype(FD+font,sz)
        if var: f.set_variation_by_axes(var)
        return f
    f=mk(800); adv=[f.getlength(c) for c in text]
    tot=sum(adv)+track*(len(text)-1); size=int(800*W*wfrac/tot)
    f=mk(size); adv=[f.getlength(c) for c in text]; tr=int(track*size/800)
    asc,desc=f.getmetrics(); tot=int(sum(adv)+tr*(len(text)-1))
    pad=80; im=Image.new('RGBA',(tot+2*pad,asc+desc+2*pad),(0,0,0,0))
    def draw(layer,col):
        d=ImageDraw.Draw(layer); x=pad
        for c,a in zip(text,adv): d.text((x,pad),c,font=f,fill=col); x+=a+tr
    k=Image.new('L',im.size,0); d=ImageDraw.Draw(k); x=pad
    for c,a in zip(text,adv): d.text((x,pad),c,font=f,fill=255); x+=a+tr
    k=k.filter(ImageFilter.MaxFilter(kw)); im.paste(Image.new('RGBA',im.size,key),(0,0),k)
    draw(im,fill)
    return im.crop(im.getbbox())
src=Image.open('docs/print-files/563-gigi-hoodie.png').convert('RGBA'); W=src.width
import numpy as np
aa=np.array(src.crop((0,666,W,3118)))
aa[:14,:2000,3]=0; aa[:14,2300:,3]=0
aa[2425:,:900,3]=0; aa[2425:,1420:,3]=0
art=Image.fromarray(aa); art=art.crop(art.getbbox())
h1=line("GIGI",'AlfaSlabOne-Regular.ttf',0.78,W,PINK,CREAM,kw=33)
h2a=line("BECAUSE GRANDMA",'Oswald[wght].ttf',0.85,W,NAVY,CREAM,kw=25,track=10,var=[700])
h2b=line("SOUNDED OLD.",'Oswald[wght].ttf',0.85,W,NAVY,CREAM,kw=25,track=10,var=[700])
h2=Image.new('RGBA',(W,h2a.height+30+h2b.height),(0,0,0,0)); h2.alpha_composite(h2a,((W-h2a.width)//2,0)); h2.alpha_composite(h2b,((W-h2b.width)//2,h2a.height+30)); print('h2a',h2a.size,'h2b',h2b.size)
print('h1',h1.size,'h2',h2.size,'ratio h2/h1',h2.height/h1.height)
g=40; H=h1.height+g+art.height+g+h2.height
out=Image.new('RGBA',(W,H),(0,0,0,0))
out.alpha_composite(h1,((W-h1.width)//2,0)); y=h1.height+g
out.alpha_composite(art,((W-art.width)//2,y)); y+=art.height+g
out.alpha_composite(h2,((W-h2.width)//2,y))
out.save('docs/print-files/563-v2-gigi.png'); print(out.size,H/W,'art',art.size)
for n,c in (('sand',(214,196,160,255)),('grey',(160,160,165,255))):
    bg=Image.new('RGBA',out.size,c); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*H/W))).save(f'designs/c563/prev_{n}.png')
