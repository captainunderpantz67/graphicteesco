import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c910/src_print.png').convert('RGBA'); a=im.crop((0,59,im.width,1728)); a=a.crop(a.getbbox()); a.save('designs/c910/art_only.png')
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]
run(a,a,'910-octopus',[['EIGHT','ARMS,']],[['ZERO HUGS']],F,AW,((150,52,52,255),(38,50,86,255),CREAM),((244,150,140,255),(246,236,214,255),(20,26,44,255)),HF=HF)
