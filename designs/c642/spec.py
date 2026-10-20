import json,subprocess
title="Women's Capybara – Per My Last Email, I'm Soaking Crewneck Sweatshirt"
hook="PER MY LAST EMAIL, I'M SOAKING. is the capybara sweatshirt for the woman who closed the laptop at 5:01, made for the Friday off, the spa day and every evening the inbox stays unanswered."
art="PER MY LAST EMAIL, runs across the top in tall condensed capitals and I'M SOAKING. fills the bottom in bold orange, even wider. Between them a calm capybara sits up to its chin in a steaming hot spring ringed with stones, an orange balanced on its head, wisps of steam rising behind it."
wear="Navy carries cream and orange lettering; Sand gets dark brown and orange lettering. It is the layer for a friend or sister to give the capybara fan who needs a day off. Original art, made for Graphic Tees Co. and printed the day you order it."
qs=[("Is this sweatshirt warm enough for a cold evening?","Yes. The Per My Last Email, I'm Soaking crewneck from Graphic Tees Co. is a Gildan 18000 in 8 oz fleece, 50% cotton and 50% polyester, with a ribbed neck, cuffs and waistband. It is an easy layer for cool evenings, the walk back from the spa and slow weekend mornings at home."),
("How does the Per My Last Email, I'm Soaking sweatshirt fit?","It is a classic unisex crewneck cut in sizes S through 3XL. Order your usual size for a regular fit, or go up one for a looser, cozier layer. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for a capybara fan?","It is a natural one. A calm capybara in a hot spring says what everyone feels at 5:01, so it lands with friends, sisters and coworkers. The Graphic Tees Co. sweatshirt comes in Navy and Sand, prints to order, and the free size exchange covers a wrong guess on size."),
("How do I wash the sweatshirt so the print lasts?","Turn the Graphic Tees Co. sweatshirt inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the soaking capybara sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the Per My Last Email, I'm Soaking sweatshirt for Christmas. Each Graphic Tees Co. sweatshirt is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in qs: print(len(a.split()))
seo=("Capybara Sweatshirt – Per My Last Email, I'm Soaking","A funny capybara sweatshirt for the Friday off: PER MY LAST EMAIL, I'M SOAKING. Gildan crewneck, 8 oz fleece, in Navy or Sand.")
print(len(seo[0]),len(seo[1]))
subprocess.run(['python3','scripts/crew-spec.py','designs/c642/spec.json',title,'womens-capybara-out-of-office-soaking-crewneck-sweatshirt','capy-soak-crew',seo[0],seo[1],hook,art,wear,"#".join(f"{q}|{a}" for q,a in qs),'Navy,Sand'],check=True)
s=json.load(open('designs/c642/spec.json')); s['compare']=None; s['tags']=['graphic-sweatshirts','sweatshirt','ai-art','intake-done']
json.dump(s,open('designs/c642/spec.json','w'))
