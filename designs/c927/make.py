import sys; sys.path.insert(0,'.')
from designs.lock import *
a=Image.open('designs/c927/art_only.png').convert('RGBA'); d=Image.open('designs/c927/art_dark.png').convert('RGBA')
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]; PF=float(sys.argv[4]) if len(sys.argv)>4 else 1.0
run(a,d,'927-lattes',[['LUNGES']],[['& LATTES']],F,AW,((150,80,70,255),(38,50,86,255),CREAM),((244,160,180,255),(246,236,214,255),(20,26,44,255)),HF=HF,PF=PF)
