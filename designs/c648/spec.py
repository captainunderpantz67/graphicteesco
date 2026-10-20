import json
title="Men's Marathon – Finisher. Soul Still at Mile 20. Heavyweight Hoodie"
story=["<p>FINISHER. SOUL STILL AT MILE 20. is the marathon hoodie for the runner who crossed the line and left a piece of himself back at mile 20, made for race week, the morning after and the first Christmas with a new medal on the hook.</p>",
"<p>FINISHER. runs across the top in tall condensed capitals and SOUL STILL AT MILE 20. fills the bottom on two lines, even wider. Between them a 1950s runner in a singlet and short shorts sits slumped on a curb in a crinkled foil blanket, a plain medal on a red ribbon at his chest, a tipped paper cup beside his shoe, staring into the distance.</p>",
"<p>Storm Blue carries cream and coral lettering with a cream edge around the runner; Sandstone gets navy and red lettering. It is the layer for the cold walk back to the car after the finish line. Original art, made for Graphic Tees Co. and printed the day you order it.</p>"]
det="""<h3>Details &amp; Fit</h3>
<ul>
<li>Heavyweight hoodie with a relaxed fit for easy layering</li>
<li>Cotton and polyester blend fleece</li>
<li>Fabric weight: 10 oz/yd² (339 g/m²)</li>
<li>Soft fleece-lined hood for added warmth</li>
<li>Ribbed cuffs and waistband, durable double-stitched seams</li>
<li>Tear-away label</li>
<li>Sizes XS–3XL</li>
<li>Colors: Sandstone, Storm Blue</li>
<li>Blank product sourced from Pakistan</li>
</ul>
"""
faq=[("Is this marathon hoodie warm enough for the walk back after a race?","Yes. The Finisher. Soul Still at Mile 20. hoodie from Graphic Tees Co. is a heavyweight Independent Trading pullover in 10 oz cotton and polyester fleece with a soft fleece-lined hood. It is built for cold race mornings, the long wait for the shuttle and the slow walk to the car once the finish line is behind you."),
("How does the Finisher. Soul Still at Mile 20. hoodie fit?","It is a relaxed heavyweight cut in sizes XS through 3XL, roomy enough to layer over a race shirt. Order your usual size for the intended slouch, or go down one for a closer fit. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk."),
("Is this a good gift for a first-time marathoner?","It is a natural one. Anyone who has hit mile 20 knows the joke, and anyone who has not still reads finished but barely. It suits a husband, dad or running buddy after the race, comes in Sandstone and Storm Blue, prints to order, and the free size exchange covers a wrong guess."),
("How do I wash the hoodie so the print lasts?","Turn the Graphic Tees Co. hoodie inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the slumped runner sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the Finisher. Soul Still at Mile 20. hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in faq: print(len(a.split()))
h="<h3>The Story</h3>\n"+"\n".join(story)+"\n"+det+"<h3>Questions</h3>\n"+"\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q,a in faq)+"\n"
s={"title":title,"handle":"mens-marathon-finisher-still-at-mile-20-heavyweight-hoodie","slug":"marathon-finisher-hoodie","catalog":1543,"colors":["Sandstone","Storm Blue"],"price":"49.99","productType":"Hoodie",
"tags":["graphic-hoodies-for-men","hoodie","heavyweight-hoodies","ai-art","intake-done"],"seo":{"title":"Marathon Hoodie – Finisher. Soul Still at Mile 20.","description":"A funny marathon hoodie for the runner who finished but is still at mile 20: FINISHER. SOUL STILL AT MILE 20. Heavyweight 10 oz fleece."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c648/spec.json','w'))
