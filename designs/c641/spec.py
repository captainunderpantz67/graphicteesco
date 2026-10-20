import json
title="Women's Baseball Mom – His Batting Average Is My Personality Zip Hoodie"
story=["<p>HIS BATTING AVERAGE IS MY PERSONALITY. is the baseball mom hoodie for doubleheaders, cold bleachers and the drive between fields, with the full print across the back and a small scene over the heart.</p>",
"<p>HIS BATTING AVERAGE runs across the top of the back and IS MY PERSONALITY. fills the bottom, just as wide, in heavy condensed capitals. Between them a folding camp chair stands in the grass with a striped blanket draped over it, a thermos in the cup holder, a baseball glove with a ball, a bag of sunflower seeds spilling and a stadium seat cushion beside it. The same scene, with no words, sits small on the left chest.</p>",
"<p>The ink is navy and faded red on both Ash and White. Original art, made for Graphic Tees Co. and printed the day you order it.</p>"]
det="""<h3>Details &amp; Fit</h3>
<ul>
<li>Regular fit zip-up hoodie with a metal zipper</li>
<li>50% cotton, 50% polyester, soft fleece inside and outside</li>
<li>Fabric weight: 8 oz/yd² (271 g/m²)</li>
<li>Air-jet spun yarn for reduced piling</li>
<li>Front pouch pockets and an unlined hood with color-matched drawcord</li>
<li>Double-needle stitching at shoulders, armholes, neck, waistband and cuffs</li>
<li>Full print on the back, small scene on the left chest</li>
<li>Sizes S–3XL</li>
<li>Colors: Ash, White (the White blank may look off-white)</li>
</ul>
"""
faq=[("Is this zip hoodie warm enough for a cold ballpark?","Yes. The His Batting Average Is My Personality zip hoodie from Graphic Tees Co. is a Gildan 18600 in 8 oz fleece, 50% cotton and 50% polyester, soft inside and outside, with front pouch pockets and a hood. It is an easy layer for chilly bleachers, evening games and the drive between fields."),
("Where is the print on this zip hoodie?","The full HIS BATTING AVERAGE IS MY PERSONALITY. design is printed across the back, because the zipper splits the front. A small version of the scene with no words sits on the left chest. Graphic Tees Co. prints each hoodie to order, so the back print stays sharp and centered."),
("How does it fit, and can I exchange it?","It is a regular unisex fit in sizes S through 3XL, so most people keep their usual size, or go up one for a roomier layer. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for a baseball mom?","It is a natural one. Every baseball mom has sat through a doubleheader on a folding chair, so it lands with the team, the kids and dad. The Graphic Tees Co. hoodie comes in Ash and White, prints to order, and the free size exchange covers a wrong guess on size."),
("When should I order for Christmas delivery?","Order by about December 8 to have the zip hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Care is simple: turn it inside out, wash cold with similar colors and tumble dry low."),]
for q,a in faq: print(len(a.split()))
h="<h3>The Story</h3>\n"+"\n".join(story)+"\n"+det+"<h3>Questions</h3>\n"+"\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q,a in faq)+"\n"
s={"title":title,"handle":"womens-baseball-mom-bases-loaded-mom-exhausted-zip-hoodie","slug":"baseball-mom-zip-hoodie","catalog":692,"colors":["Ash","White"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"44.99","productType":"Hoodie",
"tags":["graphic-hoodies-for-women","hoodie","zip-up-hoodies","zip-up-hoodies-for-women","ai-art","intake-done"],"seo":{"title":"Baseball Mom Hoodie – His Batting Average","description":"A funny baseball mom hoodie: HIS BATTING AVERAGE IS MY PERSONALITY. Zip-up Gildan fleece with the full print on the back, in Ash or White."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c641/spec.json','w'))
