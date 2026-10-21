import sys; sys.path.insert(0,'.')
from designs.lock import *
import numpy as np
im=Image.open('designs/c912/src_print.png').convert('RGBA'); a=im.crop((0,0,im.width,1931)); a=a.crop(a.getbbox()); a.save('designs/c912/art_light.png')
n=np.array(a); n[:,:,0]=38; n[:,:,1]=50; n[:,:,2]=86; dark=Image.fromarray(n,'RGBA'); dark.save('designs/c912/art_dark.png')
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]
run(dark,a,'912-cat',[['CLOCKED IT.']],[['SAID','NOTHING.']],F,AW,((38,50,86,255),(150,52,80,255),CREAM),((246,236,214,255),(244,160,180,255),(20,26,44,255)),HF=HF,PF=float(sys.argv[4]) if len(sys.argv)>4 else 1.0)
