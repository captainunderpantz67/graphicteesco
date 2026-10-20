import json,subprocess
title="Unisex Otter – Today's Plan: Horizontal. Crewneck Sweatshirt"
hook="TODAY'S PLAN: HORIZONTAL. is the otter sweatshirt for slow Sundays, long drives and the first coffee of the day, worn by anyone whose whole schedule is a posture."
art="TODAY'S PLAN: runs across the top in heavy slab capitals and HORIZONTAL. fills the bottom, even wider. Between them a sea otter floats on its back in teal waves, eyes closed, a steaming coffee mug held on its belly, kelp curling behind it."
wear="Navy carries cream and orange lettering; Sand gets dark brown and rust lettering. It is the layer for a partner or friend to give the otter fan who is never in a hurry. Original art, made for Graphic Tees Co. and printed the day you order it."
qs=[("Is this crewneck warm enough for a slow morning?","Yes. The Today's Plan: Horizontal crewneck from Graphic Tees Co. is a Gildan 18000 in 8 oz fleece, 50% cotton and 50% polyester, with a ribbed neck, cuffs and waistband. It is an easy layer for coffee on the porch, long drives and lazy weekend mornings at home."),
("How does the Today's Plan: Horizontal sweatshirt fit?","It is a classic unisex crewneck cut in sizes S through 3XL. Order your usual size for a regular fit, or go up one for a looser, cozier layer. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for an otter fan?","It is a natural one. A sea otter floating with a coffee says everything about a day with no plans, so it lands with partners, friends and anyone who loves otters. The Graphic Tees Co. sweatshirt comes in Navy and Sand, prints to order, and the free size exchange covers a wrong guess."),
("How do I wash the sweatshirt so the print lasts?","Turn the Graphic Tees Co. sweatshirt inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the floating otter sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the Today's Plan: Horizontal sweatshirt for Christmas. Each Graphic Tees Co. sweatshirt is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in qs: print(len(a.split()))
seo=("Otter Sweatshirt – Today's Plan: Horizontal.","A funny otter sweatshirt for slow days: TODAY'S PLAN: HORIZONTAL. A floating sea otter with a coffee. Gildan crewneck, 8 oz fleece, Navy or Sand.")
print(len(seo[0]),len(seo[1]))
subprocess.run(['python3','scripts/crew-spec.py','designs/c644/spec.json',title,'unisex-otter-currently-drifting-crewneck-sweatshirt','otter-plan-crew',seo[0],seo[1],hook,art,wear,"#".join(f"{q}|{a}" for q,a in qs),'Navy,Sand'],check=True)
s=json.load(open('designs/c644/spec.json')); s['compare']=None; s['tags']=['graphic-sweatshirts','sweatshirt','ai-art','intake-done']
json.dump(s,open('designs/c644/spec.json','w'))
