import json
title="Men's Cat Dad – Can't, Cat's on Me Hoodie"
story=["<p>CAN'T. CAT'S ON ME. is the cat dad hoodie for the recliner, the couch and every plan the cat cancels by falling asleep on his lap.</p>",
"<p>CAN'T. runs across the top in huge heavy capitals and CAT'S ON ME. fills the bottom at full width. Between them a big grey tabby sleeps curled loaf-style on a red plaid blanket over a man's lap in a striped recliner, corduroy knees and slippers below, a remote and a coffee mug on the side table.</p>",
"<p>Navy carries cream and mustard lettering with a dark keyline; Sand gets dark brown and rust lettering. It is the layer for anyone who has been pinned under a sleeping cat for two hours and refuses to move. Original art, made for Graphic Tees Co. and printed the day you order it.</p>"]
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
faq=[("Is this hoodie warm enough for a night on the couch?","Yes. The Can't, Cat's on Me hoodie from Graphic Tees Co. is a Gildan 18500 pullover in 8 oz fleece, 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. It is an easy layer for the recliner, the couch and cold mornings, and the pouch keeps hands warm."),
("How does the Can't, Cat's on Me hoodie fit?","It is a classic unisex cut in sizes S through 3XL. Order your usual size for a regular fit, or go up one for a roomier layer. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for a cat dad?","It is a natural one. Every cat owner has used the excuse, so the joke lands with partners, kids and friends who know the cat always wins. The Graphic Tees Co. hoodie comes in Sand and Navy, prints to order, and the free size exchange covers a wrong guess on size."),
("How do I wash the hoodie so the print lasts?","Turn the Graphic Tees Co. hoodie inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the sleeping tabby sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the Can't, Cat's on Me hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in faq: print(len(a.split()))
h="<h3>The Story</h3>\n"+"\n".join(story)+"\n"+det+"<h3>Questions</h3>\n"+"\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q,a in faq)+"\n"
s={"title":title,"handle":"mens-cat-dad-cant-cats-on-me-hoodie","slug":"cat-dad-cant-hoodie","catalog":146,"colors":["Sand","Navy"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"39.99","productType":"Hoodie",
"tags":["graphic-hoodies-for-men","hoodie","ai-art","intake-done"],"seo":{"title":"Cat Dad Hoodie – Can't, Cat's on Me","description":"A funny cat dad hoodie for the man pinned under a sleeping tabby: CAN'T. CAT'S ON ME. Gildan pullover, 8 oz fleece, in Sand or Navy."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c640/spec.json','w'))
