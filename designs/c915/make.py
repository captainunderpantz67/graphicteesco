import sys; sys.path.insert(0,'.')
from designs.lock import *
import numpy as np
a=Image.open('designs/c915/clean_full.png').convert('RGBA'); _n=np.array(a); _n[_n[:,:,3]<=40,3]=0; a=Image.fromarray(_n,'RGBA'); a=a.crop(a.getbbox()); a.save('designs/c915/art_only.png'); print('art',a.size)
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]
run(a,a,'915-goose',[['LOOSE']],[['GOOSE']],F,AW,((200,96,24,255),(38,50,86,255),CREAM),((248,170,70,255),(246,236,214,255),(20,26,44,255)),HF=HF)
