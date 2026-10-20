import json
title="Men's Camping – Slept Outside. Have Notes. Hoodie"
story=["<p>SLEPT OUTSIDE. HAVE NOTES. is the camp hoodie for the guy who survived one night in a tent and would like to file a review, made for the drive home, the campfire and every trip he was dragged along on.</p>",
"<p>SLEPT OUTSIDE. runs across the top in heavy serif capitals and HAVE NOTES. fills the bottom, even wider. Between them a rumpled man with hair standing straight up sits in a sleeping bag outside a pup tent, a steaming enamel mug in both hands and a deadpan stare, a squirrel perched on his boot and a pine cone squashed under the sleeping pad.</p>",
"<p>Navy carries cream and mustard lettering with a cream edge around the camper; Sand gets deep pine green and rust lettering. Original art, made for Graphic Tees Co. and printed the day you order it.</p>"]
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
faq=[("Is this hoodie warm enough around a campfire?","Yes. The Slept Outside. Have Notes. hoodie from Graphic Tees Co. is a Gildan 18500 pullover in 8 oz fleece, 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. It is a good layer for cold campsite mornings, evenings by the fire and the long drive home."),
("How does the Slept Outside. Have Notes. hoodie fit?","It is a classic unisex cut in sizes S through 3XL. Order your usual size for a regular fit, or go up one for a roomier layer over a flannel. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for a reluctant camper?","It is a natural one. Every friend who gets dragged on the yearly camping trip knows the feeling, and the squashed pine cone and wrecked hair make the joke land. It comes in Sand and Navy, prints to order, and the free size exchange covers a wrong guess on size."),
("How do I wash the hoodie so the print lasts?","Turn the Graphic Tees Co. hoodie inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the rumpled camper sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the Slept Outside. Have Notes. hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in faq: print(len(a.split()))
h="<h3>The Story</h3>\n"+"\n".join(story)+"\n"+det+"<h3>Questions</h3>\n"+"\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q,a in faq)+"\n"
s={"title":title,"handle":"mens-camping-slept-outside-have-notes-hoodie","slug":"camp-notes-hoodie","catalog":146,"colors":["Sand","Navy"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"39.99","productType":"Hoodie",
"tags":["camping","graphic-hoodies-for-men","hoodie","ai-art","intake-done"],"seo":{"title":"Funny Camp Hoodie – Slept Outside. Have Notes.","description":"A funny camp hoodie for the guy who slept outside and has notes: SLEPT OUTSIDE. HAVE NOTES. Gildan pullover, 8 oz fleece, Sand or Navy."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c698/spec.json','w'))
