from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# station wagon body (side view), long roof, windows knocked out, roof rack with luggage
d.polygon([(220,1180),(300,1000),(560,900),(1450,900),(1560,1000),(1780,1060),(1840,1180),(1840,1320),(220,1320)],fill=0)
for (x0,x1) in ((560,860),(900,1180),(1220,1500)):
    d.polygon([(x0,950),(x1,950),(x1,1100),(x0,1100)],fill=255)
d.polygon([(380,1100),(500,960),(520,1100)],fill=255)
d.rectangle((1500,1110,1560,1120),fill=255)
# luggage stack on the roof
d.rounded_rectangle((520,700,1100,880),30,fill=0); d.rounded_rectangle((760,520,1380,720),30,fill=0)
d.rounded_rectangle((1100,740,1480,880),30,fill=0)
d.rectangle((900,690,960,730),fill=255)
d.line((520,880,1480,880),fill=0,width=40)
# wheels with hubs
for cx in (560,1500):
    d.ellipse((cx-210,1180,cx+210,1600),fill=0); d.ellipse((cx-110,1280,cx+110,1500),fill=255); d.ellipse((cx-45,1345,cx+45,1435),fill=0)
im.save('designs/c919/chest_src.png'); im.resize((500,500)).save('designs/c919/icon_view.png')
