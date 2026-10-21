from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# floppy ears first (behind), wide blocky head outline
d.ellipse((260,380,700,1180),fill=0); d.ellipse((1300,380,1740,1180),fill=0)
d.rounded_rectangle((520,300,1480,1280),300,outline=0,width=115)
# eyes (happy arcs), broad muzzle, nose
d.arc((680,620,900,780),200,340,fill=0,width=70); d.arc((1100,620,1320,780),200,340,fill=0,width=70)
d.rounded_rectangle((780,760,1220,1080),150,outline=0,width=60)
d.ellipse((900,780,1100,900),fill=0)
# big grin with tongue out
d.pieslice((760,930,1240,1270),0,180,fill=0)
d.rounded_rectangle((900,1130,1100,1480),90,fill=255); d.rounded_rectangle((900,1130,1100,1480),90,outline=0,width=50)
# collar with a round tag
d.rectangle((560,1290,1440,1380),fill=0); d.ellipse((900,1370,1100,1570),fill=0); d.ellipse((960,1430,1040,1510),fill=255)
im.save('designs/c916/chest_src.png'); im.resize((500,500)).save('designs/c916/icon_view.png')
