import json
title="Unisex Pug – Wrinkled. Not Worried. Hoodie"
story=["<p>WRINKLED. NOT WORRIED. is the pug hoodie for pug owners and pug people, worn to the dog park, the couch and the vet waiting room by anyone who has learned from a pug that a few wrinkles are no reason to worry.</p>",
"<p>WRINKLED. runs across the top in heavy slab capitals and NOT WORRIED. fills the bottom, even wider. Between them a fawn pug with a black mask lies back on a round, tufted mustard cushion with red tassels, one front paw resting on its chest, forehead deeply wrinkled and tongue tip just showing.</p>",
"<p>Navy carries cream and mustard lettering with a cream edge around the pug; Sand gets deep brown-black and faded red lettering. It also makes a gift from the pug's grandparents. Original art, made for Graphic Tees Co. and printed the day you order it.</p>"]
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
faq=[("Is this hoodie warm enough for a cold dog walk?","Yes. The Wrinkled. Not Worried. hoodie from Graphic Tees Co. is a Gildan 18500 pullover in 8 oz fleece, 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. It is an easy layer for early dog-park mornings, evening walks and long afternoons on the couch."),
("How does the Wrinkled. Not Worried. hoodie fit?","It is a classic unisex cut in sizes S through 3XL. Order your usual size for a regular fit, or go up one for a roomier, cozier layer. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for a pug owner?","It is a natural one. Anyone who lives with a pug knows the wrinkled, unbothered look, so it lands with pug owners, grandparents and friends. The Graphic Tees Co. hoodie comes in Sand and Navy, prints to order, and the free size exchange covers a wrong guess on size."),
("How do I wash the hoodie so the print lasts?","Turn the Graphic Tees Co. hoodie inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the lounging pug sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the Wrinkled. Not Worried. hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in faq: print(len(a.split()))
h="<h3>The Story</h3>\n"+"\n".join(story)+"\n"+det+"<h3>Questions</h3>\n"+"\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q,a in faq)+"\n"
s={"title":title,"handle":"unisex-pug-wrinkled-not-worried-hoodie","slug":"pug-wrinkled-hoodie","catalog":146,"colors":["Sand","Navy"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"39.99","productType":"Hoodie",
"tags":["graphic-hoodies-for-men","graphic-hoodies-for-women","hoodie","pug","ai-art","intake-done"],"seo":{"title":"Pug Hoodie – Wrinkled. Not Worried.","description":"A funny pug hoodie for pug people: WRINKLED. NOT WORRIED. A lounging pug on a tasseled cushion. Gildan pullover, 8 oz fleece, Sand or Navy."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c757/spec.json','w'))
