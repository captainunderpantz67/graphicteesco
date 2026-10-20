import json
title="Men's Running – I Only Run Downhill Hoodie"
story=["<p>I ONLY RUN DOWNHILL. is the running hoodie for the runner who loves the easy half of every route and the non-runner who only jogs when gravity helps, worn to the turkey trot, cold Saturday long runs and race-day sidelines.</p>",
"<p>I ONLY RUN runs across the top and DOWNHILL. fills the bottom, even wider, in heavy slab capitals. Between them a grinning 1950s jogger in a sweatband and short shorts bounds down a grassy slope with his arms flung wide, a steep road rising behind him.</p>",
"<p>Navy carries cream lettering with a cream edge around the runner and the slope; Sand gets navy and faded red lettering. Original art, made for Graphic Tees Co. and printed the day you order it.</p>"]
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
faq=[("Is this hoodie warm enough for a cold morning run?","Yes. The I Only Run Downhill hoodie from Graphic Tees Co. is a Gildan 18500 pullover in 8 oz fleece, 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. It is a good warm-up layer for chilly starting lines, cold long runs and the walk back to the car."),
("How does the I Only Run Downhill hoodie fit?","It is a classic unisex cut in sizes S through 3XL. Order your usual size for a regular fit, or go up one for a roomier layer over a long sleeve. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for a runner?","It is a natural one. Every runner knows the joy of the downhill half, and every non-runner knows the feeling, so it lands with training partners, race friends and family. It comes in Sand and Navy, prints to order, and the free size exchange covers a wrong guess on size."),
("How do I wash the hoodie so the print lasts?","Turn the Graphic Tees Co. hoodie inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the bounding runner sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the I Only Run Downhill hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in faq: print(len(a.split()))
h="<h3>The Story</h3>\n"+"\n".join(story)+"\n"+det+"<h3>Questions</h3>\n"+"\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q,a in faq)+"\n"
s={"title":title,"handle":"mens-running-i-only-run-downhill-hoodie","slug":"running-downhill-hoodie","catalog":146,"colors":["Sand","Navy"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"39.99","productType":"Hoodie",
"tags":["graphic-hoodies-for-men","hoodie","running","ai-art","intake-done"],"seo":{"title":"Running Hoodie – I Only Run Downhill","description":"A funny running hoodie for the runner who only runs downhill: I ONLY RUN DOWNHILL. Gildan pullover, 8 oz fleece, Sand or Navy."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c760/spec.json','w'))
