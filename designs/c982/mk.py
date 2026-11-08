import sys; sys.path.insert(0,'.')
from designs.lib import *
from PIL import Image
src=Image.open('designs/c982/src.png').convert('RGBA').crop((0,356,3250,3083)); src=src.crop(src.getbbox())
W=3000; art=src.resize((2200,int(src.height*2200/src.width)),Image.LANCZOS)
cfg={'sand':((31,40,75,255),(150,38,32,255),(246,236,214,255)),'navy':((246,236,214,255),(240,120,100,255),(20,25,45,255))}
for k,(h,p,key) in cfg.items():
    top=[line('SHARING IS NOT','bevan',1.0,W,h,key)]; bot=[line('MY LOVE LANGUAGE','bevan',1.0,W,p,key)]
    o=lockup(art,W,top,bot,'c982_'+k,{'sand':(231,217,184,255),'navy':(26,34,62,255)})
    o.save(f'designs/c982/print_{k}.png'); print(k,o.size,top[0].width,bot[0].width,art.width,top[0].height+bot[0].height)
