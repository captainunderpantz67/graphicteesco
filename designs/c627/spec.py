import json
title="Men's Christian – Still Under Construction Heavyweight Hoodie"
story=["<p>STILL UNDER CONSTRUCTION. PHILIPPIANS 1:6 is a Christian pullover for the man who knows God is not finished with him yet, worn to church, to the shop and on cold mornings out in the yard.</p>",
"<p>STILL UNDER runs across the top and CONSTRUCTION. fills the bottom in heavy serif capitals, with PHILIPPIANS 1:6 beneath it. Between them an old wooden chair is held in a bench vise while it is being mended, on a workbench with a hand plane, mallet, ruler and chisels, curling shavings scattered across the floor. The carpenter at work is Jesus, and the verse is about a good work that is carried on to completion.</p>",
"<p>Storm Blue carries cream lettering with a cream edge around the bench; Sandstone gets dark brown lettering. Original art, made for Graphic Tees Co. and printed the day you order it.</p>"]
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
faq=[("Is this hoodie warm enough for a cold church parking lot?","Yes. The Still Under Construction hoodie from Graphic Tees Co. is a heavyweight Independent Trading pullover in 10 oz cotton and polyester fleece with a soft fleece-lined hood. It is built for cold mornings, early services and long days in the shop, and the relaxed cut layers easily over a shirt."),
("How does the Still Under Construction hoodie fit?","It is a relaxed heavyweight cut in sizes XS through 3XL, roomy enough to layer over a flannel. Order your usual size for the intended slouch, or go down one for a closer fit. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk."),
("Is this a good gift for a dad, husband or pastor?","It is a natural one. The Philippians 1:6 reference and the workbench say the same quiet thing to a man still being worked on. It suits a dad, husband, pastor or small-group leader, comes in Sandstone and Storm Blue, prints to order, and the free size exchange covers a wrong guess."),
("How do I wash the hoodie so the print lasts?","Turn the Graphic Tees Co. hoodie inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the workbench sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the Still Under Construction hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in faq: print(len(a.split()))
h="<h3>The Story</h3>\n"+"\n".join(story)+"\n"+det+"<h3>Questions</h3>\n"+"\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q,a in faq)+"\n"
s={"title":title,"handle":"mens-christian-rebuilt-by-a-carpenter-heavyweight-hoodie","slug":"christian-construction-hoodie","catalog":1543,"colors":["Sandstone","Storm Blue"],"price":"49.99","productType":"Hoodie",
"tags":["christian-hoodies","heavyweight-hoodies","graphic-hoodies-for-men","hoodie","ai-art","intake-done"],"seo":{"title":"Christian Pullover – Still Under Construction","description":"A Christian pullover with a workbench and Philippians 1:6: STILL UNDER CONSTRUCTION. Heavyweight 10 oz hoodie in Sandstone or Storm Blue."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c627/spec.json','w'))
