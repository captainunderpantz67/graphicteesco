import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c935/src_print.png').convert('RGBA'); a=im.crop((0,1137,im.width,4131)); a=a.crop(a.getbbox()); a.save('designs/c935/art_only.png'); print(a.size)
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]; PF=float(sys.argv[4]) if len(sys.argv)>4 else 1.0
run(a,a,'935-welder',[['IF YOU CAN','STEP OVER IT,']],[['I CAN','FILL IT.']],F,AW,((170,60,30,255),(38,50,86,255),CREAM),((250,140,60,255),(246,236,214,255),(20,26,44,255)),HF=HF,PF=PF)
