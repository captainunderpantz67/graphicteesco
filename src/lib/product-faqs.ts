import type { Product } from './shopify';

// One source for a product's FAQs: the visible "Questions" drawer, the FAQPage schema and the Merchant
// feed's question_and_answer all read this, so the three always say the same thing word for word.
// Product copy keeps them under <h3>Questions</h3> as <p><strong>Q</strong><br>A</p>.
export const productFaqs = (p: Product) => {
  const isHoodie = /hood/i.test(p.productType) || /hood/i.test(p.title);
  const isSweat = !isHoodie && /sweatshirt|crewneck/i.test(p.productType + ' ' + p.title);
  const parts = p.descriptionHtml.split(/<h3[^>]*>(.*?)<\/h3>/i);
  let questionsHtml = '';
  for (let i = 1; i < parts.length; i += 2) if (/questions/i.test(parts[i])) questionsHtml = parts[i + 1];
  const qa = [...questionsHtml.matchAll(/<p><strong>(.*?)<\/strong><br>(.*?)<\/p>/gi)].map((m) => ({
    q: m[1].replace(/<[^>]+>/g, ''), a: m[2].replace(/<[^>]+>/g, ''),
  }));
  const careQ = { q: `How do I wash this ${isHoodie ? 'hoodie' : isSweat ? 'sweatshirt' : 'graphic tee'}?`, a: 'Inside out, cold water, gentle cycle. Skip bleach and fabric softener, then hang dry or tumble dry low. Never iron directly on the print.' };
  return [...qa, careQ];
};
