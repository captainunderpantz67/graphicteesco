from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# head with pointed ears (outline)
pts=[(360,330),(760,640),(1240,640),(1640,330),(1600,1250),(1300,1650),(700,1650),(400,1250)]
d.line(pts+[pts[0]],fill=0,width=120,joint='curve')
# side-eye: almond eyes with pupils pushed to one side, flat lids
for ex in (720,1280):
    d.ellipse((ex-230,860,ex+230,1130),outline=0,width=70)
    d.ellipse((ex+20,900,ex+190,1070),fill=0)
    d.rectangle((ex-250,860,ex+250,930),fill=0)
d.polygon([(900,1280),(1100,1280),(1000,1380)],fill=0)    # nose
d.rounded_rectangle((900,1460,1100,1510),20,fill=0)       # flat mouth
im.save('designs/c912/chest_src.png'); im.resize((500,500)).save('designs/c912/icon_view.png')
