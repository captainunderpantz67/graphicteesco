import sys; sys.path.insert(0,'.')
from designs.c_common import *
build(791,'designs/c791/art_pp.png',["TURN LEFT."],["REPEAT."],'cinzel',((31,42,77,255),(168,40,40,255)),AW=int(sys.argv[1]),W=int(sys.argv[2]),hfrac=float(sys.argv[3]),npunch=(235,70,60,255),kw=13,g=22)
