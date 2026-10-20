from PIL import Image, ImageDraw, ImageFont
import sys
art=Image.open('designs/a205/art.png').convert('RGBA'); art=art.crop(art.getbbox())
def line(text,font,size,maxw,fill,track=0.0,stroke=0,sfill=None):
    while True:
        f=ImageFont.truetype('designs/fonts/'+font,size)
        tr=int(size*track)
        adv=[f.getlength(c) for c in text]; tot=int(sum(adv)+tr*(len(text)-1)+2*stroke)
        if tot<=maxw: break
        size=int(size*0.98)
    asc,desc=f.getmetrics()
    im=Image.new('RGBA',(tot+400,asc+desc+300),(0,0,0,0)); d=ImageDraw.Draw(im); x=200
    for c,a in zip(text,adv):
        d.text((x,100),c,font=f,fill=fill,stroke_width=stroke,stroke_fill=sfill); x+=a+tr
    return im.crop(im.getbbox())
F1,F2=sys.argv[1:3]
def build(name,c1,c2):
    W=3250; gap=90
    h1=line('I DIDN\'T ASK',F1,900,W,c1)
    h2=line('FOR THE WREATH.',F2,900,W,c2)
    ah=int(1.09*W-h1.height-h2.height-2*gap); aw=int(ah*art.width/art.height)
    a2=art.resize((aw,ah),Image.LANCZOS)
    H=h1.height+gap+ah+gap+h2.height
    out=Image.new('RGBA',(W,H),(0,0,0,0)); y=0
    for im in (h1,a2,h2):
        out.alpha_composite(im,((W-im.width)//2,y)); y+=im.height+gap
    out.save(f'designs/a205/print-{name}.png'); print(name,out.size,'h1',h1.size,'h2',h2.size,'art',a2.size, round(aw/W,2))
    return out
d=build('sand',(59,36,23,255),(176,40,40,255)); n=build('navy',(247,236,212,255),(236,86,72,255))
ims=[]
for im,c in ((d,(214,203,180,255)),(n,(27,38,64,255))):
    bg=Image.new('RGBA',im.size,c); bg.alpha_composite(im); ims.append(bg.convert('RGB').resize((600,int(600*im.height/im.width))))
o=Image.new('RGB',(1200,ims[0].height)); o.paste(ims[0],(0,0)); o.paste(ims[1],(600,0)); o.save(sys.argv[3])
