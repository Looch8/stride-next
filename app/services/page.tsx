import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import { services } from '@/content/services';
import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
  { name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
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
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Ingrown Toenail Treatment',
        url: 'https://www.stride-podiatry.com.au/services/ingrown-toenail',
        serviceType: 'Ingrown toenail treatment',
        areaServed: 'Adelaide and regional South Australia',
        provider: {
          '@type': 'MedicalBusiness',
          name: 'Stride Podiatry',
          url: 'https://www.stride-podiatry.com.au/',
          address: businessAddress,
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Diabetic Foot Care',
        url: 'https://www.stride-podiatry.com.au/services/diabetes-foot-care',
        serviceType: 'Diabetic foot care',
        areaServed: 'Adelaide and regional South Australia',
        provider: {
          '@type': 'MedicalBusiness',
          name: 'Stride Podiatry',
          url: 'https://www.stride-podiatry.com.au/',
          address: businessAddress,
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Custom Orthotics',
        url: 'https://www.stride-podiatry.com.au/services/custom-orthotics',
        serviceType: 'Custom orthotics',
        areaServed: 'Adelaide and regional South Australia',
        provider: {
          '@type': 'MedicalBusiness',
          name: 'Stride Podiatry',
          url: 'https://www.stride-podiatry.com.au/',
          address: businessAddress,
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Heel & Arch Pain',
        url: 'https://www.stride-podiatry.com.au/services/heel-arch-pain',
        serviceType: 'Heel and arch pain treatment',
        areaServed: 'Adelaide and regional South Australia',
        provider: {
          '@type': 'MedicalBusiness',
          name: 'Stride Podiatry',
          url: 'https://www.stride-podiatry.com.au/',
          address: businessAddress,
        },
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Services | Stride Podiatry',
  description:
    'Mobile podiatry in Adelaide: general foot & nail care, heel and arch pain, ingrown toenails, diabetes assessments, biomechanics, custom orthotics, footwear advice and sports podiatry.',
  alternates: { canonical: 'https://www.stride-podiatry.com.au/services' },
  openGraph: {
    title: 'Services | Stride Podiatry',
    description:
      'Mobile podiatry in Adelaide: general foot & nail care, heel and arch pain, ingrown toenails, diabetes assessments, biomechanics, custom orthotics, footwear advice and sports podiatry.',
    url: 'https://www.stride-podiatry.com.au/services',
  },
  twitter: {
    title: 'Services | Stride Podiatry',
    description:
      'Mobile podiatry in Adelaide: general foot & nail care, heel and arch pain, ingrown toenails, diabetes assessments, biomechanics, custom orthotics, footwear advice and sports podiatry.',
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
            Explore home-visit podiatry for private patients, NDIS participants,
            aged care, Support at Home and common foot concerns treated in the
            comfort of home.
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
