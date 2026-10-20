from PIL import Image, ImageDraw, ImageFont, ImageFilter
FD='designs/fonts/'
RED=(196,52,44,255); NAVY=(28,40,84,255); MUST=(226,164,40,255); CREAM=(246,236,214,255); BROWN=(58,36,24,255)
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
def build(tag,c1,k1,bgc):
    art=Image.open('designs/c506/art_rag.png').convert('RGBA'); W=art.width
    h1=line("RETIRED.",'PlayfairDisplay[wght].ttf',0.80,W,c1,k1,kw=29,var=[900])
    pa=line("BAD AT GOLF",'AlfaSlabOne-Regular.ttf',0.84,W,MUST,NAVY,kw=27)
    pb=line("FULL-TIME.",'AlfaSlabOne-Regular.ttf',0.84,W,MUST,NAVY,kw=27)
    # same type size for both punch lines: scale the wider one down to match the narrower line's size
    print(tag,'headline px',h1.width,'punch px',pa.width,pb.width,'heights',h1.height,pa.height,pb.height)
    g=40; P=Image.new('RGBA',(W,pa.height+30+pb.height),(0,0,0,0)); P.alpha_composite(pa,((W-pa.width)//2,0)); P.alpha_composite(pb,((W-pb.width)//2,pa.height+30))
    H=h1.height+g+art.height+g+P.height
    out=Image.new('RGBA',(W,H),(0,0,0,0))
    out.alpha_composite(h1,((W-h1.width)//2,0)); y=h1.height+g
    out.alpha_composite(art,(0,y)); y+=art.height+g
    out.alpha_composite(P,(0,y))
    out.save(f'docs/print-files/506-v3-bad-{tag}.png'); print(out.size,H/W)
    bg=Image.new('RGBA',out.size,bgc); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*H/W))).save(f'designs/c506/prev3_{tag}.png')
build('ash',NAVY,CREAM,(200,200,200,255))
build('navy',CREAM,NAVY,(38,50,88,255))
