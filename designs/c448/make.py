from PIL import Image, ImageDraw, ImageFont, ImageFilter
FD='designs/fonts/'
RED=(196,52,44,255); NAVY=(36,52,108,255); RED=(200,66,58,255); CREAM=(246,236,214,255); BROWN=(58,36,24,255)
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
    src=Image.open('docs/print-files/448-grill-wizard.png').convert('RGBA'); W=src.width
    art=src.crop((0,0,W,3666)); sc=0.86; art=art.resize((int(W*sc),int(art.height*sc)),Image.LANCZOS)
    h1=line("ABRA-KEBAB-RA!",'AlfaSlabOne-Regular.ttf',0.97,W,c1,k1,kw=27)
    h2=line("GRILL WIZARD",'Fraunces[SOFT,WONK,opsz,wght].ttf',0.80,W,RED,CREAM,kw=25,var=[0,900,72,0])
    print(tag,'h1',h1.size,'h2',h2.size,'ratio h2/h1',h2.height/h1.height)
    g=36; H=h1.height+g+art.height+g+h2.height
    out=Image.new('RGBA',(W,H),(0,0,0,0))
    out.alpha_composite(h1,((W-h1.width)//2,0)); y=h1.height+g
    out.alpha_composite(art,((W-art.width)//2,y)); y+=art.height+g
    out.alpha_composite(h2,((W-h2.width)//2,y))
    out.save(f'docs/print-files/448-v2-abra-{tag}.png'); print(out.size,H/W)
    bg=Image.new('RGBA',out.size,bgc); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*H/W))).save(f'designs/c448/prev_{tag}.png')
build('ash',NAVY,CREAM,(200,200,200,255))
build('navy',CREAM,NAVY,(38,50,88,255))
