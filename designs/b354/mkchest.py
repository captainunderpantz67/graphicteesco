import subprocess,sys
from PIL import Image, ImageFilter
D='designs/b354/'
subprocess.run([sys.executable,'scripts/print-prep.py',D+'art.png',D+'chest_t.png','--width','1500'],check=True,stdout=subprocess.DEVNULL)
subprocess.run([sys.executable,'scripts/knock-white.py',D+'chest_t.png',D+'chest_t.png','3000'],check=True,stdout=subprocess.DEVNULL)
a=Image.open(D+'chest_t.png').convert('RGBA'); a=a.crop(a.getbbox())
r=6; m=a.split()[3].point(lambda v:255 if v>40 else 0).filter(ImageFilter.MaxFilter(2*r+1)).filter(ImageFilter.GaussianBlur(1))
ring=Image.new('RGBA',a.size,'#f3e7cf'); ring.putalpha(m)
p=Image.new('RGBA',(a.width+2*r,a.height+2*r),(0,0,0,0)); p.alpha_composite(ring,(r,r)); p.alpha_composite(a,(r,r)); p.save(D+'chest.png',dpi=(300,300)); print(p.size)
