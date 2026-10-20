import json
title="Men's Construction – I'm Not Leaning. I'm Supervising. Hoodie"
story=["<p>I'M NOT LEANING. I'M SUPERVISING. is the construction hoodie for the foreman, the crew and the dad who supervises every home project, worn on the job site, at the tailgate and on the cold early shift.</p>",
"<p>I'M NOT LEANING. runs across the top in tall condensed capitals and I'M SUPERVISING. fills the bottom, even wider. Between them a burly worker in a hard hat and orange safety vest rests his whole weight on a shovel planted in a dirt pile, a paper coffee cup in his other hand, calmly watching a half-dug trench with one orange traffic cone beside it.</p>",
"<p>Navy carries cream and safety-orange lettering with a cream edge around the scene; Sand gets dark brown and deep rust lettering. Original art, made for Graphic Tees Co. and printed the day you order it.</p>"]
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
faq=[("Is this hoodie warm enough for a cold job site?","Yes. The I'm Not Leaning. I'm Supervising. hoodie from Graphic Tees Co. is a Gildan 18500 pullover in 8 oz fleece, 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. It is an easy layer under a vest for cold early shifts, tailgates and long days outside."),
("How does the I'm Not Leaning. I'm Supervising. hoodie fit?","It is a classic unisex cut in sizes S through 3XL. Order your usual size for a regular fit, or go up one for a roomier layer under a work jacket. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for a foreman or dad?","It is a natural one. Every crew has a guy who supervises, and every dad supervises the home project, so it lands with foremen, coworkers and families. The Graphic Tees Co. hoodie comes in Sand and Navy, prints to order, and the free size exchange covers a wrong guess on size."),
("How do I wash the hoodie so the print lasts?","Turn the Graphic Tees Co. hoodie inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the supervising worker sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the I'm Not Leaning. I'm Supervising. hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in faq: print(len(a.split()))
h="<h3>The Story</h3>\n"+"\n".join(story)+"\n"+det+"<h3>Questions</h3>\n"+"\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q,a in faq)+"\n"
s={"title":title,"handle":"mens-construction-not-leaning-supervising-hoodie","slug":"construction-super-hoodie","catalog":146,"colors":["Sand","Navy"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"39.99","productType":"Hoodie",
"tags":["graphic-hoodies-for-men","hoodie","construction","ai-art","intake-done"],"seo":{"title":"Construction Hoodie – I'm Not Leaning.","description":"A funny construction hoodie for the guy who supervises: I'M NOT LEANING. I'M SUPERVISING. Gildan pullover, 8 oz fleece, Sand or Navy."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c764/spec.json','w'))
