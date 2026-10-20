from PIL import Image, ImageDraw, ImageFont, ImageFilter
FD='designs/fonts/'
RED=(196,52,44,255); BROWN=(58,36,18,255); RUST=(190,84,30,255); ORG=(240,138,60,255); CREAM=(246,236,214,255); BROWN=(58,36,24,255)
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
def build(tag,c1,k1,c2,k2,bgc):
    im=Image.open('docs/print-files/334-laying-low-till-friday.png').convert('RGBA'); W=im.width
    art=im.crop((0,416,W,3052))
    h1=line("NO TURKEY HERE.",'AlfaSlabOne-Regular.ttf',0.86,W,c1,k1,kw=27)
    pa=line("JUST A GUY",'Oswald[wght].ttf',0.89,W,c2,k2,kw=23,track=8,var=[700]); pb=line("IN A HOODIE.",'Oswald[wght].ttf',0.89,W,c2,k2,kw=23,track=8,var=[700])
    h2=Image.new('RGBA',(W,pa.height+24+pb.height),(0,0,0,0)); h2.alpha_composite(pa,((W-pa.width)//2,0)); h2.alpha_composite(pb,((W-pb.width)//2,pa.height+24)); print('punch lines px',pa.width,pb.width)
    print(tag,'headline px',h1.width,'punch block px',h2.width,'heights',h1.height,h2.height)
    g=36; H=h1.height+g+art.height+g+h2.height
    out=Image.new('RGBA',(W,H),(0,0,0,0))
    out.alpha_composite(h1,((W-h1.width)//2,0)); y=h1.height+g
    out.alpha_composite(art,(0,y)); y+=art.height+g
    out.alpha_composite(h2,((W-h2.width)//2,y))
    out.save(f'docs/print-files/334-v3-no-turkey-{tag}.png'); print(out.size,H/W)
    bg=Image.new('RGBA',out.size,bgc); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*H/W))).save(f'designs/c334/prev3_{tag}.png')
build('sand',BROWN,CREAM,RUST,CREAM,(214,196,160,255))
build('navy',CREAM,BROWN,ORG,BROWN,(38,50,88,255))
