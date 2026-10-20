import json
title="Women's Mom – Motherhood Didn't Change Me. It Exposed Me. Hoodie"
story=["<p>MOTHERHOOD DIDN'T CHANGE ME. IT EXPOSED ME. is the mama hoodie for the mom who is calm on the outside and in charge of chaos on the inside, made for school runs, cold sidelines and Christmas morning.</p>",
"<p>MOTHERHOOD DIDN'T CHANGE ME. runs across the top in heavy rust slab capitals and IT EXPOSED ME. fills the bottom in dark green, just as wide. Between them a prim 1950s housewife in pearls sips coffee on her sofa while a toddler climbs the bookshelf, the dog sits in the laundry basket and crayon scribbles and loose papers float behind her.</p>",
"<p>Sand and Light Pink both carry the same dark rust and green lettering, so every word reads on either color. Original art, made for Graphic Tees Co. and printed the day you order it.</p>"]
det="""<h3>Details &amp; Fit</h3>
<ul>
<li>Classic unisex fit, pullover with a double-lined hood and matching drawcord</li>
<li>50% pre-shrunk cotton, 50% polyester</li>
<li>Fabric weight: 8.0 oz/yd²</li>
<li>Air-jet spun yarn with a soft feel</li>
<li>Front pouch pocket, ribbed cuffs and waistband with spandex</li>
<li>Sizes S–3XL</li>
<li>Colors: Sand, Light Pink</li>
<li>Blank product sourced from Bangladesh, Nicaragua, Honduras or El Salvador</li>
</ul>
"""
faq=[("Is this hoodie warm enough for a cold sideline?","Yes. The Motherhood Didn't Change Me. It Exposed Me. hoodie from Graphic Tees Co. is a Gildan 18500 pullover in 8 oz fleece, 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. It is an easy layer for school drop-off, soccer sidelines and early mornings with coffee."),
("How does the Motherhood Didn't Change Me. It Exposed Me. hoodie fit?","It is a classic unisex cut in sizes S through 3XL. Order your usual size for a regular fit, or go up one for a roomier, cozier layer. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for a mom?","It is a natural one. Every mom knows which parts of herself motherhood exposed, so it lands with best friends, sisters and partners. The Graphic Tees Co. hoodie comes in Sand and Light Pink, prints to order, and the free size exchange covers a wrong guess on size for Christmas or Mother's Day."),
("How do I wash the hoodie so the print lasts?","Turn the Graphic Tees Co. hoodie inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the unbothered housewife sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the Motherhood Didn't Change Me. It Exposed Me. hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in faq: print(len(a.split()))
h="<h3>The Story</h3>\n"+"\n".join(story)+"\n"+det+"<h3>Questions</h3>\n"+"\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q,a in faq)+"\n"
s={"title":title,"handle":"womens-mom-motherhood-exposed-me-hoodie","slug":"mom-exposed-hoodie","catalog":146,"colors":["Sand","Light Pink"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"39.99","productType":"Hoodie",
"tags":["graphic-hoodies-for-women","hoodie","ai-art","intake-done"],"seo":{"title":"Mama Hoodie – Motherhood Didn't Change Me","description":"A funny mama hoodie for the mom who was exposed, not changed: MOTHERHOOD DIDN'T CHANGE ME. IT EXPOSED ME. Gildan pullover, Sand or Light Pink."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c646/spec.json','w'))
