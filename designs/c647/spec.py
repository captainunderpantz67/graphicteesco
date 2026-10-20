import json
title="Unisex Running – Run Club. For the Coffee. Hoodie"
story=["<p>RUN CLUB. FOR THE COFFEE. is the run club hoodie for the Saturday group that is really there for the post-run coffee line, made for cold sidewalks, turkey trots and every warm-up that ends at the café door.</p>",
"<p>RUN CLUB. runs across the top in tall condensed capitals and FOR THE COFFEE. fills the bottom even wider. Between them three 1970s joggers in sweatbands, short shorts and striped tube socks jog in place outside a corner coffee shop, paper cups steaming in their hands while one points toward the door.</p>",
"<p>Navy carries cream lettering with mustard for the punchline and a cream edge around the joggers; Sand gets navy and red lettering. It is the layer for the group chat that says it is running at 7 and means coffee at 7:45. Original art, made for Graphic Tees Co. and printed the day you order it.</p>"]
det="""<h3>Details &amp; Fit</h3>
<ul>
<li>Classic unisex fit, pullover with a double-lined hood and matching drawcord</li>
<li>50% pre-shrunk cotton, 50% polyester</li>
<li>Fabric weight: 8.0 oz/yd²</li>
<li>Air-jet spun yarn with a soft feel</li>
<li>Front pouch pocket, ribbed cuffs and waistband with spandex</li>
<li>Sizes S–3XL</li>
<li>Colors: Sand, Navy</li>
<li>Blank product sourced from Bangladesh, Nicaragua, Honduras or El Salvador</li>
</ul>
"""
faq=[("Is this run club hoodie warm enough for cold morning runs?","Yes. The Run Club. For the Coffee. hoodie from Graphic Tees Co. is a Gildan 18500 pullover in 8 oz fleece, 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. It is a good warm-up layer for chilly sidewalks, trailheads and the wait outside the coffee shop."),
("How does the Run Club. For the Coffee. hoodie fit?","It is a classic unisex cut in sizes S through 3XL. Order your usual size for a regular fit, or go up one for a roomier layer over a long sleeve. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for a runner in my Saturday group?","It is a natural one. Every social runner knows the run is the excuse for the coffee, so the joke lands with training buddies, race friends and anyone who signs up for the 5K for the post-race bagel. It comes in Sand and Navy, prints to order, and the free size exchange covers a wrong guess."),
("How do I wash the hoodie so the print lasts?","Turn the Graphic Tees Co. hoodie inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the three joggers sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the Run Club. For the Coffee. hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in faq: print(len(a.split()))
h="<h3>The Story</h3>\n"+"\n".join(story)+"\n"+det+"<h3>Questions</h3>\n"+"\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q,a in faq)+"\n"
s={"title":title,"handle":"unisex-running-run-club-mostly-a-coffee-club-hoodie","slug":"run-club-coffee-hoodie","catalog":146,"colors":["Sand","Navy"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"39.99","productType":"Hoodie",
"tags":["graphic-hoodies-for-men","graphic-hoodies-for-women","hoodie","ai-art","intake-done"],"seo":{"title":"Run Club Hoodie – Run Club. For the Coffee.","description":"A funny run club hoodie for the group that runs for the coffee: RUN CLUB. FOR THE COFFEE. Gildan pullover, 8 oz fleece, in Sand or Navy."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c647/spec.json','w'))
