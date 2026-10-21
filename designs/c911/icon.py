from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# head outline + floppy ears
d.ellipse((600,240,1400,1040),outline=0,width=110)
d.ellipse((440,420,720,1160),fill=0); d.ellipse((1280,420,1560,1160),fill=0)
d.ellipse((810,600,890,680),fill=0); d.ellipse((1110,600,1190,680),fill=0)       # eyes
d.ellipse((900,770,1100,930),fill=0)                                              # nose
# striped sock hanging from the mouth: cuff, tube and a kicked-out foot
d.rounded_rectangle((900,960,1110,1380),28,fill=0)
for y in (1020,1110,1200):
    d.rectangle((900,y,1110,y+42),fill=255)
d.polygon([(900,1290),(1110,1290),(1110,1430),(700,1430),(700,1330),(780,1290)],fill=0)
d.ellipse((650,1290,790,1430),fill=0)
im.save('designs/c911/chest_src.png'); im.resize((500,500)).save('designs/c911/icon_view.png')
