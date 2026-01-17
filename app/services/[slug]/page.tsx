import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { services } from '@/content/services';

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

  return (
    <section className="services service-detail">
      <div className="services-container">
        <div className="services-header">
          <h1>{currentService.title}</h1>
        </div>

        {currentService.heroImage ? (
          <div className="service-hero-image">
            <Image
              src={currentService.heroImage}
              alt={currentService.heroAlt}
              width={960}
              height={480}
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
              Book a Home Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
