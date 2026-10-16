// Product/Offer JSON-LD for a custom-shirt page. Mirrors src/lib/schema.ts productSchema (brand, single Offer,
// shipping and return facts) for a made-to-order product that has no fixed images beyond the page's example.
import { site } from '../../data/site';
import { SALE_ENDS } from '../schema';
import type { CustomPage } from '../../data/configurator/pages';

const ORG_ID = `${site.url}/#organization`;

export const customProductSchema = (page: CustomPage, price: string, compareAt: string | null, image: string) => {
  const f = site.facts;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: page.title.split(' – ')[0],
    description: page.description,
    image: [image],
    brand: { '@type': 'Brand', name: site.name },
    category: 'T-Shirt',
    material: 'Bella+Canvas 3001, lightweight 4.2 oz cotton',
    additionalProperty: [{ '@type': 'PropertyValue', name: 'Personalization', value: 'Made to order from the customer’s own photo or text' }],
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'USD',
      ...(compareAt && Number(compareAt) > Number(price) ? {
        priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'https://schema.org/StrikethroughPrice', price: compareAt, priceCurrency: 'USD' },
        priceValidUntil: SALE_ENDS,
      } : {}),
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: `${site.url}/custom/${page.slug}/`,
      seller: { '@id': ORG_ID },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: '4.95', currency: 'USD' },
        shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'US' },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 5, unitCode: 'DAY' },
          transitTime: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 8, unitCode: 'DAY' },
        },
      },
      ...(f.returnsPolicy && f.returnWindowDays && f.returnCountry ? {
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          applicableCountry: f.returnCountry,
          returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
          merchantReturnDays: f.returnWindowDays,
          returnFees: 'https://schema.org/FreeReturn',
          refundType: 'https://schema.org/ExchangeRefund',
        },
      } : {}),
    },
  };
};
