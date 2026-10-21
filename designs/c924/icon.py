from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# tricorn pirate hat: peaked crown, wide brim swept up at both ends, with a skull and crossbones
d.polygon([(100,620),(420,540),(700,330),(1000,260),(1300,330),(1580,540),(1900,620),(1720,920),(1400,1080),(1000,1130),(600,1080),(280,920)],fill=0)
d.ellipse((840,420,1160,720),fill=255); d.rectangle((910,690,1090,790),fill=255)
d.ellipse((900,520,985,610),fill=0); d.ellipse((1015,520,1100,610),fill=0)
d.polygon([(1000,625),(975,675),(1025,675)],fill=0)
d.line((330,820,780,1040),fill=255,width=70); d.line((780,820,330,1040),fill=255,width=70)
d.line((1220,820,1670,1040),fill=255,width=70); d.line((1670,820,1220,1040),fill=255,width=70)
# reading glasses under it
d.ellipse((380,1260,880,1760),outline=0,width=90); d.ellipse((1120,1260,1620,1760),outline=0,width=90)
d.rectangle((860,1440,1140,1500),fill=0)
d.line((380,1390,230,1340),fill=0,width=70); d.line((1620,1390,1770,1340),fill=0,width=70)
im.save('designs/c924/chest_src.png'); im.resize((500,500)).save('designs/c924/icon_view.png')
