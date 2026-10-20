from PIL import Image, ImageDraw, ImageFont, ImageFilter
FD='designs/fonts/'
RED=(196,52,44,255); ROSE=(154,59,93,255); NAVY=(38,50,90,255); PINK=(244,166,192,255); DROSE=(122,31,60,255); CREAM=(246,236,214,255); BROWN=(58,36,24,255)
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
    im=Image.open('docs/print-files/489-already-over-it-kindly.png').convert('RGBA'); W=im.width
    art=im.crop((0,381,W,2445)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*1.25),int(art.height*1.25)),Image.LANCZOS)
    h1=line("I'M NOT MAD.",'Cinzel[wght].ttf',0.97,W,c1,k1,kw=27,var=[900])
    h2=line("I'M STEEPING.",'PlayfairDisplay[wght].ttf',0.90,W,c2,k2,kw=27,var=[900])
    print(tag,'h1',h1.size,'h2',h2.size,'ratio h2/h1',h2.height/h1.height,'art',art.size)
    g=40; H=h1.height+g+art.height+g+h2.height
    out=Image.new('RGBA',(W,H),(0,0,0,0))
    out.alpha_composite(h1,((W-h1.width)//2,0)); y=h1.height+g
    out.alpha_composite(art,((W-art.width)//2,y)); y+=art.height+g
    out.alpha_composite(h2,((W-h2.width)//2,y))
    out.save(f'docs/print-files/489-v2-steeping-{tag}.png'); print(out.size,H/W)
    bg=Image.new('RGBA',out.size,bgc); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*H/W))).save(f'designs/c489/prev_{tag}.png')
build('sand',ROSE,CREAM,NAVY,CREAM,(214,196,160,255))
build('navy',CREAM,NAVY,PINK,DROSE,(38,50,88,255))
