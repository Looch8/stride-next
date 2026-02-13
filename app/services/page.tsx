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
          <h1>Our Podiatry Services</h1>
          <p>
            Home visit podiatry across Adelaide metro and regional South Australia by arrangement.
            Learn more about{' '}
            <Link href="/services/home-visit-podiatry">
              mobile home visits
            </Link>
            ,{' '}
            <Link href="/services/ndis-podiatry">NDIS podiatry</Link>
            , and{' '}
            <Link href="/services/aged-care-podiatry">
              aged care podiatry
            </Link>
            .
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
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <div className="service-image">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  width={640}
                  height={420}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
