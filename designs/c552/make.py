from PIL import Image, ImageDraw, ImageFont, ImageFilter
FD='designs/fonts/'
RED=(196,52,44,255); NAVY=(27,40,78,255); CREAM=(246,236,214,255); BROWN=(58,36,24,255)
def line(text,font,wfrac,W,fill,key,kw=31,track=0):
    f=ImageFont.truetype(FD+font,800); adv=[f.getlength(c) for c in text]
    tot=sum(adv)+track*(len(text)-1); size=int(800*W*wfrac/tot)
    f=ImageFont.truetype(FD+font,size); adv=[f.getlength(c) for c in text]; tr=int(track*size/800)
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
src=Image.open('docs/print-files/552-one-more-row-hoodie.png').convert('RGBA')
W=src.width; art=src.crop((0,371,W,3303))
h1=line("DON'T TALK TO ME.",'Anton-Regular.ttf',0.80,W,RED,CREAM,kw=25,track=14)
h2=line("I'M COUNTING.",'BowlbyOne-Regular.ttf',0.97,W,NAVY,CREAM,kw=29)
print('h1',h1.size,'h2',h2.size,'ratio h2/h1',h2.height/h1.height)
g=34; H=h1.height+g+art.height+g+h2.height
out=Image.new('RGBA',(W,H),(0,0,0,0))
out.alpha_composite(h1,((W-h1.width)//2,0)); y=h1.height+g
out.alpha_composite(art,(0,y)); y+=art.height+g
out.alpha_composite(h2,((W-h2.width)//2,y))
out.save('docs/print-files/552-v2-counting.png'); print(out.size,H/W)
for n,c in (('sand',(214,196,160,255)),('pink',(244,214,222,255))):
    bg=Image.new('RGBA',out.size,c); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*H/W))).save(f'designs/c552/prev_{n}.png')
