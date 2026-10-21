from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# barbell behind the helmet
d.rectangle((120,1000,1880,1090),fill=0)
for x0 in (120,270,1600,1750):
    d.rounded_rectangle((x0,620,x0+120,1470),30,fill=0)
# great helm: solid silhouette with a T-shaped opening (eye slit + breathing slit), crest plume
d.rounded_rectangle((650,380,1350,1560),300,fill=0)
d.rectangle((650,1360,1350,1560),fill=0)
d.rectangle((720,780,1280,880),fill=255)          # eye slit
d.rectangle((960,880,1040,1300),fill=255)          # vertical breathing slit
for y in (1000,1100,1200,1300):
    d.ellipse((760,y,820,y+46),fill=255); d.ellipse((1180,y,1240,y+46),fill=255)
d.polygon([(900,380),(980,160),(1180,80),(1120,260),(1100,380)],fill=0)   # plume
im.save('designs/c923/chest_src.png'); im.resize((500,500)).save('designs/c923/icon_view.png')
