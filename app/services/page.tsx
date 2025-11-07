import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import { services } from '@/content/services';

export const metadata: Metadata = {
  title: 'Podiatry Services in Adelaide | Home Visits',
  description:
    'Mobile podiatry in Adelaide: general foot & nail care, heel and arch pain, ingrown toenails, diabetes assessments, biomechanics, custom orthotics, footwear advice and sports podiatry.',
  alternates: { canonical: 'https://www.stride-podiatry.com.au/services/' },
};

export default function ServicesPage() {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h1>Our Podiatry Services</h1>
          <p>Comprehensive foot care solutions tailored to you. Select a service to learn more.</p>
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
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
