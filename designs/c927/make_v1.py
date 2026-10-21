import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c927/src_print.png').convert('RGBA'); a=im.crop((0,428,im.width,im.height)); a=a.crop(a.getbbox()); a.save('designs/c927/art_only.png'); print(a.size)
F=sys.argv[1]; HF=float(sys.argv[2]); PF=float(sys.argv[3]); COL=int(sys.argv[4]); ART=int(sys.argv[5])
run_side(a,a,'927-lattes',[['LUNGES','&']],[['LATTES']],F,((150,80,70,255),(38,50,86,255),CREAM),((244,160,180,255),(246,236,214,255),(20,26,44,255)),HF=HF,PF=PF,COL=COL,ART=ART)
