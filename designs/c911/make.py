import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c911/src_print.png').convert('RGBA'); a=im.crop((0,830,im.width,3844)); a=a.crop(a.getbbox()); a.save('designs/c911/art_only.png')
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]
run(a,a,'911-golden',[['I BROUGHT','YOU A SOCK.']],[["YOU'RE",'WELCOME.']],F,AW,((160,50,28,255),(38,50,86,255),CREAM),((244,150,90,255),(246,236,214,255),(20,26,44,255)),HF=HF)
