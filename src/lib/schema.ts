import { siteConfig } from '../data/site';

type SchemaInput = {
  type: 'LocalBusiness' | 'Service' | 'FAQPage' | 'BreadcrumbList';
  pageUrl?: string;
  serviceName?: string;
  serviceDescription?: string;
  faqs?: { question: string; answer: string }[];
  breadcrumbs?: { name: string; url: string }[];
};

export function buildSchema(input: SchemaInput) {
  const base = siteConfig.siteUrl;

  if (input.type === 'LocalBusiness') {
    const schema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': siteConfig.schemaType,
      '@id': `${base}/#business`,
      name: siteConfig.businessName,
      url: base,
      image: `${base}/images/hero-background.png`,
      telephone: siteConfig.phoneRaw,
      email: siteConfig.email,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.geo.lat,
        longitude: siteConfig.geo.lng,
      },
      areaServed: siteConfig.serviceArea.map((a) => ({
        '@type': 'City',
        name: `${a.city}, FL`,
      })),
      openingHoursSpecification: siteConfig.openingHours.map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.days,
        opens: h.opens,
        closes: h.closes,
      })),
      sameAs: Object.values(siteConfig.social).filter(Boolean),
    };

    if (siteConfig.reviews.rating && siteConfig.reviews.count) {
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: siteConfig.reviews.rating,
        reviewCount: siteConfig.reviews.count,
      };
    }

    return schema;
  }

  if (input.type === 'Service') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: input.serviceName,
      description: input.serviceDescription,
      provider: {
        '@type': siteConfig.schemaType,
        name: siteConfig.businessName,
        telephone: siteConfig.phoneRaw,
      },
      areaServed: siteConfig.serviceArea.map((a) => `${a.city}, FL`),
      url: input.pageUrl,
    };
  }

  if (input.type === 'FAQPage' && input.faqs?.length) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: input.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  if (input.type === 'BreadcrumbList' && input.breadcrumbs?.length) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: input.breadcrumbs.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
  }

  return null;
}
