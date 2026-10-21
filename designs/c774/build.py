import sys; sys.path.insert(0,'.')
from designs.c_common import *
build(774,'designs/c774/art_pp.png',["OFF DUTY."],["STILL JUDGING","YOUR PARKING."],'anton',((31,42,77,255),(158,30,30,255)),AW=int(sys.argv[1]) if len(sys.argv)>1 else 1800)
