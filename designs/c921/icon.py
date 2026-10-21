from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# strawberry body (heart-ish), seed dots, leaf cap, stem
d.polygon([(380,640),(1620,640),(1500,1080),(1120,1500),(1000,1570),(880,1500),(500,1080)],fill=0)
d.ellipse((380,420,1000,900),fill=0); d.ellipse((1000,420,1620,900),fill=0)
for x,y in ((700,980),(900,1100),(1100,1000),(1300,1100),(780,1230),(1000,1290),(1220,1230),(900,1400),(1100,1400),(560,820),(1440,820)):
    d.ellipse((x-34,y-52,x+34,y+52),fill=255)
# leaf cap (jagged) and stem
d.polygon([(380,640),(560,470),(720,560),(860,420),(1000,540),(1140,420),(1280,560),(1440,470),(1620,640),(1400,720),(1000,780),(600,720)],fill=255)
d.polygon([(380,640),(560,470),(720,560),(860,420),(1000,540),(1140,420),(1280,560),(1440,470),(1620,640),(1400,720),(1000,780),(600,720)],outline=0,width=70)
d.line((1000,540,1010,380,1120,300),fill=0,width=80,joint='curve')
# shy side-glance eyes (pupils to one side)
for ex in (780,1220):
    d.ellipse((ex-110,900,ex+110,1020),fill=255)
    d.ellipse((ex-30,915,ex+80,1010),fill=0)
im.save('designs/c921/chest_src.png'); im.resize((500,500)).save('designs/c921/icon_view.png')
