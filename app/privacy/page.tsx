import type { Metadata } from 'next';

import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
  { name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
  { name: 'Privacy Policy', url: 'https://www.stride-podiatry.com.au/privacy' },
]);

const effectiveDate = new Intl.DateTimeFormat('en-AU', {
  timeZone: 'Australia/Adelaide',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date());

export const metadata: Metadata = {
  title: 'Privacy Policy | Stride Podiatry',
  description:
    'Privacy Policy for Stride Podiatry covering how we collect, use, store, and share personal and health information for patient care in Australia.',
  alternates: { canonical: 'https://www.stride-podiatry.com.au/privacy' },
  openGraph: {
    title: 'Privacy Policy | Stride Podiatry',
    description:
      'How Stride Podiatry collects, uses, stores, and shares personal and health information for care delivery in Australia.',
    url: 'https://www.stride-podiatry.com.au/privacy',
  },
  twitter: {
    title: 'Privacy Policy | Stride Podiatry',
    description:
      'How Stride Podiatry collects, uses, stores, and shares personal and health information for care delivery in Australia.',
  },
};

export default function PrivacyPage() {
  return (
    <section className="privacy">
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />
      <div className="privacy-container">
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="privacy-meta">Effective date: {effectiveDate}</p>
          <p className="privacy-intro">
            Stride Podiatry is committed to protecting your privacy. This policy
            explains how we collect, use, store, and disclose personal and
            health information in line with the Australian Privacy Principles
            under the Privacy Act 1988 (Cth).
          </p>
        </header>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>Who we are</h2>
            <p>
              Stride Podiatry provides mobile podiatry services in South
              Australia.
            </p>
            <ul className="privacy-list">
              <li>Email: admin@stride-podiatry.com.au</li>
              <li>Phone: 0468 518 993</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>What information we collect</h2>
            <ul className="privacy-list">
              <li>Name and contact details.</li>
              <li>Health information relevant to your podiatry care.</li>
              <li>Appointment and service details.</li>
              <li>Payment and billing details (where applicable).</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>How we collect information</h2>
            <ul className="privacy-list">
              <li>Referral, contact, and booking forms on our website.</li>
              <li>Phone calls, emails, and messages with you or your carer.</li>
              <li>During consultations and assessments.</li>
              <li>
                Cookies and basic analytics on our website (we may use these to
                understand how the site is used).
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Why we collect information</h2>
            <ul className="privacy-list">
              <li>To book and manage appointments.</li>
              <li>To provide podiatry assessment, treatment, and advice.</li>
              <li>To coordinate care with relevant providers and services.</li>
              <li>For administration, billing, and record keeping.</li>
              <li>To improve our services and website experience.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Sharing and disclosure</h2>
            <p>
              We only share information when it is necessary to support your
              care or required by law. This may include:
            </p>
            <ul className="privacy-list">
              <li>Relevant healthcare providers involved in your care.</li>
              <li>Aged care organisations and support coordinators.</li>
              <li>Government agencies or regulators where legally required.</li>
              <li>
                IT and practice management service providers who help us deliver
                services (such as Splose).
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Storage and security</h2>
            <p>
              We store and manage patient records in our practice management
              software (Splose). We take reasonable steps to protect information
              from misuse, loss, unauthorised access, or disclosure. This
              includes access controls and secure systems.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Access and correction</h2>
            <p>
              You can request access to, or correction of, your personal
              information. Contact us using the details above and we will
              respond within a reasonable timeframe.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Complaints</h2>
            <p>
              If you have a concern about privacy, please contact us first so we
              can try to resolve it. If you are not satisfied with our response,
              you can lodge a complaint with the Office of the Australian
              Information Commissioner (OAIC).
            </p>
          </section>

          <section className="privacy-section">
            <h2>Website analytics and cookies</h2>
            <p>
              Our website may use cookies and analytics tools to understand how
              visitors use the site and to improve performance. You can disable
              cookies in your browser settings, but parts of the site may not
              function as expected.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The latest version
              will always be available on this page.
            </p>
          </section>

          <section className="privacy-section privacy-disclaimer">
            <h2>Disclaimer</h2>
            <p>
              This policy provides general information only and is not legal
              advice.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
