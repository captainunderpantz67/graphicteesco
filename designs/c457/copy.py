import re,json
N='Eight Nights. Zero Salad.'
crew_faq=[
("How does the Eight Nights. Zero Salad. crewneck fit?","The Eight Nights. Zero Salad. crewneck from Graphic Tees Co. comes in sizes S through 3XL. It is a classic unisex cut, so order your usual size or go up one for a roomier fit. Compare the size chart with a crewneck sweatshirt you own, and remember the first size exchange is free."),
("How warm is this Hanukkah sweater?","The Eight Nights. Zero Salad. crewneck is a midweight 8 oz/yd² fleece crewneck with no hood and ribbed cuffs and waistband. The fabric is 50% cotton, 50% polyester fleece, warm enough for a cool evening by the stove and comfortable indoors. Graphic Tees Co. prints each one to order."),
("How do I wash the Eight Nights. Zero Salad. crewneck?","Turn the Eight Nights. Zero Salad. crewneck inside out and wash it in cold water with similar colors, then tumble dry on low or hang it to dry. Skip bleach and fabric softener, and never iron over the print. Cold washing keeps the navy letters and the latkes looking sharp longer."),
("What if the size is wrong on my Eight Nights. Zero Salad. crewneck?","Graphic Tees Co. offers one free size exchange within 30 days of delivery on the Eight Nights. Zero Salad. crewneck. We print the new size and you do not mail anything back. If a print arrives misprinted or damaged, we reprint it or refund it within 30 days of delivery."),
("Will the Eight Nights. Zero Salad. crewneck arrive before Hanukkah?","Hanukkah 2026 begins at sundown on Friday, December 4. Graphic Tees Co. prints each Eight Nights. Zero Salad. crewneck to order, so order by about November 20 for it to arrive before the first night. Orders over $45 ship free, and one free size exchange within 30 days covers a wrong guess."),
]
tee_faq=[
("How does the Eight Nights. Zero Salad. tee fit?","This relaxed women's tee from Graphic Tees Co. runs S through 3XL in a lightweight 4.2 oz/yd² cotton. Order your usual size for an easy fit or go up one for an oversized look. We cover one free size exchange within 30 days if the size is off."),
("Which color should I pick?","White and Natural show the navy letters and the golden latkes most clearly. Pink and Heather Blue Lagoon give you a bolder, more playful backdrop, Athletic Heather is a quieter pick, and Navy carries cream letters instead, so ZERO SALAD stays easy to read on all six colors of this Hanukkah shirt."),
("Will it arrive before Hanukkah?","Hanukkah 2026 begins at sundown on Friday, December 4. Graphic Tees Co. prints each tee to order, so order by about November 20 for it to arrive before the first night. Orders over $45 ship free, and one free size exchange within 30 days covers a wrong guess."),
("How do I wash this tee?","Turn it inside out, wash it cold with similar colors and tumble dry on low or hang it to dry. Skip bleach and fabric softener, and never iron over the print. Cold washing keeps the letters and the latkes looking sharp through every night of Hanukkah."),
("What if the size is wrong?","Graphic Tees Co. offers one free size exchange within 30 days of delivery on this tee. We print the new size and you do not mail anything back. If a print arrives misprinted or damaged, we reprint it or refund it within 30 days of delivery."),
]
for n,f in (('crew',crew_faq),('tee',tee_faq)):
    print(n,[len(a.split()) for q,a in f])
def faq(f): return '\n'.join(f'<p><strong>{q}</strong><br>{a}</p>' for q,a in f)
story_crew='''<h3>The Story</h3>
<p>Eight nights, zero salad: this Hanukkah sweater says what every latke-frying kitchen is thinking, over a golden stack of latkes with sour cream and applesauce and two powdered jelly doughnuts.</p>
<p>EIGHT NIGHTS. sits above the art and ZERO SALAD. below it in huge navy slab capitals, ZERO on one line and SALAD. on the next. In between is a vintage diner-menu illustration of a stack of crisp potato latkes with sour cream and applesauce, a little steam rising, and two powdered sufganiyot on a blue-rimmed plate, one with a bite taken out. The palette is warm gold, cream, cornflower blue and navy. Wear it to the latke fry-off, the family candle lighting or give it to the one who always hosts. Original art, made for Graphic Tees Co. and printed the day you order it.</p>
<h3>Details &amp; Fit</h3>
<ul>
<li>Classic fit crewneck sweatshirt</li>
<li>50% cotton, 50% polyester, pre-shrunk</li>
<li>Fabric weight: 8 oz/yd² fleece</li>
<li>1x1 athletic rib knit collar with spandex</li>
<li>Air-jet spun yarn for a soft feel</li>
<li>Double-needle stitched collar, shoulders, armholes, cuffs and hem</li>
<li>Sizes S–3XL</li>
<li>2 colors: Sand and Light Blue</li>
</ul>
<h3>Questions</h3>
'''
story_tee='''<h3>The Story</h3>
<p>Eight nights, zero salad: this Hanukkah shirt for women says what every latke-frying kitchen is thinking, over a golden stack of latkes with sour cream and applesauce and two powdered jelly doughnuts.</p>
<p>EIGHT NIGHTS. sits above the art and ZERO SALAD. below it in huge slab capitals, ZERO on one line and SALAD. on the next, navy on the light colors and cream on Navy. In between is a vintage diner-menu illustration of a stack of crisp potato latkes with sour cream and applesauce, a little steam rising, and two powdered sufganiyot on a blue-rimmed plate, one with a bite taken out. The palette is warm gold, cream, cornflower blue and navy.</p>
<p>Wear it to the latke fry-off, the Friday-night dinner or give it to the one who always hosts. Original art, made for Graphic Tees Co. and printed the day you order it.</p>
<h3>Details &amp; Fit</h3>
<ul>
<li>Relaxed fit, crew neck</li>
<li>100% combed, ring-spun cotton (heather colors contain polyester)</li>
<li>Fabric weight: 4.2 oz/yd² — lightweight</li>
<li>Pre-shrunk, side-seamed construction</li>
<li>Sizes S–3XL</li>
<li>Colors: White, Natural, Pink, Heather Blue Lagoon, Athletic Heather, Navy</li>
<li>Blank product sourced from Nicaragua, Honduras, or the US</li>
</ul>
<h3>Questions</h3>
'''
json.dump({'crew':story_crew+faq(crew_faq),'tee':story_tee+faq(tee_faq)},open('designs/c457/copy.json','w'),ensure_ascii=False)
for k in ('crew','tee'):
    h=json.load(open('designs/c457/copy.json'))[k]; print(k,[w for w in ('frame','badge','shape behind','border') if w in h])
