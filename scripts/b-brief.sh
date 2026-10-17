#!/bin/bash
# b-brief.sh <id>: the lines of a pipeline brief a build needs (blank, text, hook, art prompt, colors, keyword, cover, title/handle, tags, price).
grep -E "^\*\*|^- \*\*(Blank|Text on shirt|Hook|Art prompt|Colors|Primary keyword|Cover|Title|Tags|Price|Style)" $(ls docs/pipeline/$1-*.md) | grep -v "^- \*\*Blank" | cut -c1-1100
grep -E "^handle|^type" docs/pipeline/$1-*.md
