import Link from 'next/link';

import type { ServiceAreaContent } from '@/content/service-areas';

type ServiceAreaPageProps = {
  area: ServiceAreaContent;
  breadcrumbsLd: unknown;
};

export default function ServiceAreaPage({
  area,
  breadcrumbsLd,
}: ServiceAreaPageProps) {
  return (
    <section className="service-areas">
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />
      <div className="service-areas-container">
        <div className="service-areas-header">
          <p className="service-areas-eyebrow">{area.eyebrow}</p>
          <h1>{area.pageTitle}</h1>
          <p className="service-areas-intro">{area.intro}</p>
        </div>

        <div className="service-area-detail-grid">
          <div className="service-area-card">
            <p className="service-area-card-eyebrow">Local context</p>
            <h2>How this area is covered</h2>
            <p>{area.localContext}</p>
          </div>

          <div className="service-area-card">
            <p className="service-area-card-eyebrow">Appointments</p>
            <h2>Common visit types</h2>
            <ul className="service-area-checks">
              {area.visitTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="service-area-card service-area-card--suburbs">
          <p className="service-area-card-eyebrow">Coverage</p>
          <h2>Suburbs and locations</h2>
          <ul className="service-area-suburbs">
            {area.suburbs.map((suburb) => (
              <li key={suburb}>{suburb}</li>
            ))}
          </ul>
        </div>

        <div className="service-area-detail-grid">
          <div className="service-area-card">
            <p className="service-area-card-eyebrow">Popular services</p>
            <h2>Useful links</h2>
            <div className="service-area-links">
              {area.popularServices.map((service) => (
                <Link key={service.href} href={service.href}>
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="service-area-card service-area-card--cta">
            <p className="service-area-card-eyebrow">Need help?</p>
            <h2>Book or enquire</h2>
            <p>{area.closingNote}</p>
            <div className="service-area-actions">
              <Link href="/booking" className="book-now-button">
                Request appointment
              </Link>
              <a href="tel:+61468518993" className="hero-cta-secondary">
                Call 0468 518 993
              </a>
            </div>
            <p className="service-area-note">
              Need another location? View all{' '}
              <Link href="/service-areas">service areas</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
