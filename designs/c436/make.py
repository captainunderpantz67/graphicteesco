from PIL import Image, ImageDraw, ImageFont, ImageFilter
FD='designs/fonts/'
RED=(196,52,44,255); NAVY=(30,42,84,255); RED=(206,52,44,255); CREAM=(246,236,214,255); BROWN=(58,36,24,255)
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
    src=Image.open('docs/print-files/436-ignoring-you-professionally.png').convert('RGBA'); W=src.width
    art=src.crop((0,0,W,3735)); art=art.crop(art.getbbox()); sc=0.86; art=art.resize((int(art.width*sc),int(art.height*sc)),Image.LANCZOS)
    h1=line("THAT'S NOT A WAVE.",'BigShouldersDisplay[wght].ttf',0.97,W,c1,k1,kw=27,var=[900])
    h2=line("IT'S A NO.",'BowlbyOne-Regular.ttf',0.99,W,RED,CREAM,kw=29)
    print(tag,'headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height)
    g=36; H=h1.height+g+art.height+g+h2.height
    out=Image.new('RGBA',(W,H),(0,0,0,0))
    out.alpha_composite(h1,((W-h1.width)//2,0)); y=h1.height+g
    out.alpha_composite(art,((W-art.width)//2,y)); y+=art.height+g
    out.alpha_composite(h2,((W-h2.width)//2,y))
    out.save(f'docs/print-files/436-v3-no-wave-{tag}.png'); print(out.size,H/W)
    bg=Image.new('RGBA',out.size,bgc); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*H/W))).save(f'designs/c436/prev3_{tag}.png')
build('sandstone',NAVY,CREAM,(190,160,120,255))
build('storm',CREAM,NAVY,(86,112,148,255))
