import json,subprocess
title="Men's Welder – Welds Like a Stack of Dimes. Paid Like One. Crewneck Sweatshirt"
hook="WELDS LIKE A STACK OF DIMES. PAID LIKE ONE. is the welder sweatshirt for the fabricator whose beads are perfect and whose paycheck is not, made for cold shop mornings and the drive out to the job site."
art="WELDS LIKE A STACK OF DIMES. runs across the top in heavy slab capitals and PAID LIKE ONE. fills the bottom. Between them a gloved hand runs a TIG torch along a row of coins welded into a perfect bead on a steel plate, sparks flying, with a small stack of dimes beside it."
wear="Navy carries cream and orange lettering with a cream edge around the art; Sand gets navy and burnt orange lettering. It is the layer for the crew, the wife or the kids to give the welder who is still waiting on a raise."
qs=[("Is this welder sweatshirt warm enough for a cold shop?","Yes. The Welds Like a Stack of Dimes crewneck from Graphic Tees Co. is a Gildan 18000 in 8 oz fleece, 50% cotton and 50% polyester, with a ribbed neck, cuffs and waistband. It has no hood to get in the way of a helmet, which makes it an easy layer for early mornings in the shop or out at the job site."),
("How does the Welds Like a Stack of Dimes sweatshirt fit?","It is a classic unisex crewneck cut in sizes S through 3XL. Order your usual size for a regular fit, or go up one for a looser layer over a work shirt. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for a welder?","It is a natural one. Every welder knows a stack of dimes is the prettiest bead you can run, and the pay joke lands with the whole crew. The Graphic Tees Co. sweatshirt comes in Navy and Sand, prints to order, and the free size exchange covers a wrong guess on size."),
("How do I wash the sweatshirt so the print lasts?","Turn the Graphic Tees Co. sweatshirt inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the glowing weld sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the Welds Like a Stack of Dimes sweatshirt for Christmas. Each Graphic Tees Co. sweatshirt is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in qs: print(len(a.split()))
seo=("Welder Sweatshirt – Welds Like a Stack of Dimes","A funny welder sweatshirt for the crew: WELDS LIKE A STACK OF DIMES. PAID LIKE ONE. Gildan crewneck, 8 oz fleece, in Navy or Sand.")
print(len(seo[0]),len(seo[1]))
subprocess.run(['python3','scripts/crew-spec.py','designs/c643/spec.json',title,'mens-welder-stacks-dimes-wants-more-dimes-crewneck-sweatshirt','welder-dimes-crew',seo[0],seo[1],hook,art,wear,"#".join(f"{q}|{a}" for q,a in qs),'Navy,Sand'],check=True)
s=json.load(open('designs/c643/spec.json')); s['compare']=None; s['tags']=['graphic-sweatshirts','sweatshirt','ai-art','intake-done']
h=s['descriptionHtml'].replace("<h3>Details &amp; Fit</h3>","<h3>Details &amp; Fit</h3>",1); s['descriptionHtml']=h
json.dump(s,open('designs/c643/spec.json','w'))
