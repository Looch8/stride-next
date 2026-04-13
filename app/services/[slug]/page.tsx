import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { services } from '@/content/services';
import {
  buildBreadcrumbList,
  buildServiceSchema,
} from '@/lib/structured-data';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: service.canonical },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: service.canonical,
    },
    twitter: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const currentService = service;
  const breadcrumbsLd = buildBreadcrumbList([
    { name: 'Home', url: 'https://www.stride-podiatry.com.au' },
    { name: 'Services', url: 'https://www.stride-podiatry.com.au/services' },
    { name: currentService.title, url: currentService.canonical },
  ]);
  const serviceLd = buildServiceSchema({
    name: currentService.title,
    description: currentService.metaDescription,
    url: currentService.canonical,
    areaServed: ['Adelaide Metropolitan Area', 'Regional South Australia'],
  });

  return (
    <section className="services service-detail">
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />
      <script
        key="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <div className="services-container">
        <div className="services-header">
          <p className="services-eyebrow">Service</p>
          <h1>{currentService.pageTitle ?? currentService.title}</h1>
          <p className="services-intro">{currentService.summary}</p>
        </div>

        {currentService.heroImage ? (
          <div className="service-hero-image">
            <Image
              src={currentService.heroImage}
              alt={currentService.heroAlt}
              width={960}
              height={480}
              sizes="(max-width: 1024px) 100vw, 960px"
            />
          </div>
        ) : null}

        <div className="service-detail-body">
          {currentService.overview ? (
            <>
              <h2>Overview</h2>
              <p>{currentService.overview}</p>
            </>
          ) : null}

          {currentService.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="detail-cta">
            <Link href="/booking" className="book-now-button">
              Request Appointment
            </Link>
          </div>

          {currentService.relatedLinks?.length ? (
            <div className="service-related-links">
              <h2>Helpful links</h2>
              <ul>
                {currentService.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
