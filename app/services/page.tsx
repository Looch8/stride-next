import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import { services } from '@/content/services';
import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
  { name: 'Home', url: 'https://www.stride-podiatry.com.au' },
  { name: 'Services', url: 'https://www.stride-podiatry.com.au/services' },
]);

const businessAddress = {
  '@type': 'PostalAddress',
  addressCountry: 'AU',
  addressRegion: 'SA',
  addressLocality: 'Adelaide',
};

const servicesLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      url: service.canonical,
      serviceType: service.title,
      areaServed: 'Adelaide and regional South Australia',
      provider: {
        '@type': 'MedicalBusiness',
        name: 'Stride Podiatry',
        url: 'https://www.stride-podiatry.com.au',
        address: businessAddress,
      },
    },
  })),
};

export const metadata: Metadata = {
  title: 'Mobile Podiatry Services Adelaide | Home Visits | Stride Podiatry',
  description:
    'Mobile podiatry home visits in Adelaide for private patients, NDIS, Support at Home, DVA, aged care, foot pain and routine foot care.',
  alternates: { canonical: 'https://www.stride-podiatry.com.au/services' },
  openGraph: {
    title: 'Mobile Podiatry Services Adelaide | Home Visits | Stride Podiatry',
    description:
      'Mobile podiatry home visits in Adelaide for private patients, NDIS, Support at Home, DVA, aged care, foot pain and routine foot care.',
    url: 'https://www.stride-podiatry.com.au/services',
  },
  twitter: {
    title: 'Mobile Podiatry Services Adelaide | Home Visits | Stride Podiatry',
    description:
      'Mobile podiatry home visits in Adelaide for private patients, NDIS, Support at Home, DVA, aged care, foot pain and routine foot care.',
  },
};

export default function ServicesPage() {
  return (
    <section className="services">
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />
      <script
        key="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }}
      />
      <div className="services-container">
        <div className="services-header">
          <p className="services-eyebrow">Services</p>
          <h1>Mobile podiatry services across Adelaide</h1>
          <p className="services-intro">
            Home visits for private patients, NDIS, aged care, DVA, Support at
            Home and common foot problems.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Link
              id={service.anchorId ?? service.slug}
              href={`/services/${service.slug}`}
              key={service.slug}
              className="service-card"
              aria-label={`${service.title} details`}
            >
              <div className="service-image">
                <Image
                  src={service.heroImage}
                  alt={service.heroAlt}
                  width={640}
                  height={420}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                />
              </div>
              <div className="service-card-body">
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <span className="service-card-link">Learn more</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
