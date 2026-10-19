from PIL import Image, ImageDraw, ImageFont
src=Image.open('designs/a618/print.png').convert('RGBA')
cat=src.crop((0,700,src.width,2700)); cat=cat.crop(cat.getbbox())
RED=(200,30,60,255); GREEN=(31,94,52,255); PINK=(244,167,178,255)
def line(text,font,size,maxw,fill,stroke=0,sfill=None,track=0.0):
    while True:
        f=ImageFont.truetype('designs/fonts/'+font,size)
        adv=[f.getlength(c) for c in text]; t=int(size*track)
        tot=int(sum(adv)+t*(len(text)-1))
        if tot<=maxw: break
        size=int(size*0.97)
    asc,desc=f.getmetrics()
    im=Image.new('RGBA',(tot+300,asc+desc+200),(0,0,0,0)); d=ImageDraw.Draw(im); x=150
    for c,a in zip(text,adv):
        d.text((x,100),c,font=f,fill=fill,stroke_width=stroke,stroke_fill=sfill); x+=a+t
    return im.crop(im.getbbox())
W=cat.width
h1=line('SANTA GETS','BowlbyOne-Regular.ttf',900,W,RED)
h2=line('ALL THE CREDIT','AlfaSlabOne-Regular.ttf',900,W-40,GREEN,10,PINK)
print(cat.size,h1.size,h2.size)
gap=70
H=h1.height+gap+cat.height+gap+h2.height
out=Image.new('RGBA',(W,H),(0,0,0,0)); y=0
out.alpha_composite(h1,((W-h1.width)//2,0)); y=h1.height+gap
out.alpha_composite(cat,(0,y)); y+=cat.height+gap
out.alpha_composite(h2,((W-h2.width)//2,y))
out.save('designs/a618/print2.png'); print(out.size)
bg=Image.new('RGBA',out.size,(40,40,40,255)); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*H/W))).save('designs/a618/prev2.png')
