import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c919/src_print.png').convert('RGBA'); a=im.crop((0,388,im.width,2858)); a=a.crop(a.getbbox()); a.save('designs/c919/art_only.png'); print(a.size)
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]; PF=float(sys.argv[4]) if len(sys.argv)>4 else 1.0
run(a,a,'919-car',[['NOT','STOPPING.']],[['HOLD IT.']],F,AW,((190,80,40,255),(38,50,86,255),CREAM),((244,160,110,255),(246,236,214,255),(20,26,44,255)),HF=HF,PF=PF)
