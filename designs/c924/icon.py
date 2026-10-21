from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# tricorn pirate hat (three upturned brims) with a skull badge
d.polygon([(200,980),(520,520),(1000,420),(1480,520),(1800,980),(1560,1120),(1000,880),(440,1120)],fill=0)
d.ellipse((880,560,1120,760),fill=255); d.rectangle((940,740,1060,800),fill=255)
d.ellipse((925,620,965,670),fill=0); d.ellipse((1035,620,1075,670),fill=0)
d.polygon([(1000,690),(985,725),(1015,725)],fill=0)
# reading glasses under it: two round lenses, bridge and arms
d.ellipse((380,1200,880,1700),outline=0,width=90); d.ellipse((1120,1200,1620,1700),outline=0,width=90)
d.rectangle((860,1380,1140,1440),fill=0)
d.line((380,1330,230,1280),fill=0,width=70); d.line((1620,1330,1770,1280),fill=0,width=70)
im.save('designs/c924/chest_src.png'); im.resize((500,500)).save('designs/c924/icon_view.png')
