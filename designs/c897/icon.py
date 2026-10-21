from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# ledge
d.rounded_rectangle((180,1230,1180,1340),40,fill=0)
d.rectangle((300,1340,400,1700),fill=0)
# mug on its own layer, tipped past the edge
L=Image.new('L',(800,800),255); m=ImageDraw.Draw(L)
m.rounded_rectangle((150,200,550,640),70,outline=0,width=70)
m.rectangle((150,260,550,330),fill=0)   # coffee line
m.ellipse((500,300,700,520),outline=0,width=60)
m.rectangle((470,340,560,480),fill=255); m.rectangle((470,300,560,340),fill=255)
m.rounded_rectangle((150,200,550,640),70,outline=0,width=70)
L=L.rotate(-38,expand=False,fillcolor=255,resample=Image.BICUBIC)
im.paste(L,(1010,830),Image.eval(L,lambda v:255-v))
d=ImageDraw.Draw(im)
# arm + paw pushing from left
d.line((100,980,560,1090),fill=0,width=190)
d.ellipse((470,950,740,1210),fill=0)
for cx,cy in ((520,900),(620,880),(720,930)):
    d.ellipse((cx-55,cy-55,cx+55,cy+55),fill=0)
# splash drops
for cx,cy,r in ((1560,760,60),(1700,880,45),(1650,620,40),(1450,640,35)):
    d.ellipse((cx-r,cy-r,cx+r,cy+r),fill=0)
im.save('designs/c897/chest_src.png'); im.resize((500,500)).save('designs/c897/icon_view.png')
