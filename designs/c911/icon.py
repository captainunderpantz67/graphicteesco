from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# floppy ears (filled), head outline
d.ellipse((330,420,780,1180),fill=0); d.ellipse((1220,420,1670,1180),fill=0)
d.ellipse((620,240,1380,1100),outline=0,width=110)
d.ellipse((800,610,880,690),fill=0); d.ellipse((1120,610,1200,690),fill=0)      # eyes
d.ellipse((900,800,1100,920),fill=0)                                              # nose
# sock held across the mouth: tube with stripes and a heel notch
d.rounded_rectangle((560,1010,1440,1300),80,fill=0)
for x in (700,860,1020,1180):
    d.rectangle((x,1010,x+70,1300),fill=255)
d.rounded_rectangle((1330,1010,1560,1520),70,fill=0)   # sock leg dropping down on the right
for y in (1100,1230,1360):
    d.rectangle((1330,y,1560,y+55),fill=255)
im.save('designs/c911/chest_src.png'); im.resize((500,500)).save('designs/c911/icon_view.png')
