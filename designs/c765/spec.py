import json
title="Unisex Climbing – Afraid of Heights. Climbs Anyway. Hoodie"
story=["<p>AFRAID OF HEIGHTS. CLIMBS ANYWAY. is the climbing hoodie for the climber who is terrified and keeps going, worn to the climbing gym, the crag and the drive home.</p>",
"<p>AFRAID OF HEIGHTS. runs across the top in tall condensed capitals and CLIMBS ANYWAY. fills the bottom, even wider. Between them a climber in a beanie, harness and chalk bag clings flat to a sheer granite face with eyes squeezed shut and knees shaking, a rope trailing below and a few pebbles falling.</p>",
"<p>Navy carries cream and mustard lettering with a cream edge around the rock face; Sand gets dark slate and deep rust lettering. Original art, made for Graphic Tees Co. and printed the day you order it.</p>"]
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
faq=[("Is this hoodie warm enough for a cold crag?","Yes. The Afraid of Heights. Climbs Anyway. hoodie from Graphic Tees Co. is a Gildan 18500 pullover in 8 oz fleece, 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. It is an easy layer for cold approaches, belay stances and the drive home from the gym."),
("How does the Afraid of Heights. Climbs Anyway. hoodie fit?","It is a classic unisex cut in sizes S through 3XL. Order your usual size for a regular fit, or go up one for a roomier layer. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for a climber?","It is a natural one. Plenty of climbers are scared and climb anyway, so it lands with gym regulars, boulderers and the friend who keeps going. The Graphic Tees Co. hoodie comes in Sand and Navy, prints to order, and the free size exchange covers a wrong guess on size."),
("How do I wash the hoodie so the print lasts?","Turn the Graphic Tees Co. hoodie inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the shaking climber sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the Afraid of Heights. Climbs Anyway. hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in faq: print(len(a.split()))
h="<h3>The Story</h3>\n"+"\n".join(story)+"\n"+det+"<h3>Questions</h3>\n"+"\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q,a in faq)+"\n"
s={"title":title,"handle":"unisex-climbing-afraid-of-heights-climbs-anyway-hoodie","slug":"climbing-afraid-hoodie","catalog":146,"colors":["Sand","Navy"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"39.99","productType":"Hoodie",
"tags":["graphic-hoodies-for-men","graphic-hoodies-for-women","hoodie","climbing","ai-art","intake-done"],"seo":{"title":"Climbing Hoodie – Afraid of Heights.","description":"A funny climbing hoodie for the scared climber: AFRAID OF HEIGHTS. CLIMBS ANYWAY. Gildan pullover, 8 oz fleece, Sand or Navy."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c765/spec.json','w'))
