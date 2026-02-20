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
            This privacy policy explains how Stride Podiatry collects, uses,
            holds, and discloses your personal information, including health
            information, and how you can access and correct your information or
            make a complaint.
          </p>
        </header>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>1) Introduction</h2>
            <p>
              Stride Podiatry (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;) is committed to protecting your privacy and
              handling your information in accordance with the Privacy Act 1988
              (Cth) and the Australian Privacy Principles (APPs).
            </p>
            <p>
              We provide mobile podiatry services in Adelaide and regional
              South Australia and maintain clinical records in line with
              professional obligations and applicable regulatory requirements.
            </p>
            <ul className="privacy-list">
              <li>Email: admin@stride-podiatry.com.au</li>
              <li>Phone: 0468 518 993</li>
              <li>Location: Adelaide, South Australia</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>2) Why and when your consent is necessary</h2>
            <p>
              When you contact us, book an appointment, or receive services,
              you consent to our clinicians and staff accessing and using your
              personal information to provide podiatry care and related
              services.
            </p>
            <p>
              Only team members who need to access your information to perform
              their role will do so. If we need to use or disclose your
              information for a purpose not related to your care or our direct
              business operations, we will seek additional consent unless an
              exception applies under law.
            </p>
          </section>

          <section className="privacy-section">
            <h2>3) Why we collect, use, hold and share your information</h2>
            <ul className="privacy-list">
              <li>Assess, treat, and manage your podiatry needs.</li>
              <li>
                Book and manage appointments, including home visits and
                residential aged care visits.
              </li>
              <li>
                Communicate with you and, where relevant, your representative
                or carers.
              </li>
              <li>
                Coordinate care with other healthcare providers or support
                services involved in your care.
              </li>
              <li>
                Manage accounts, payments, invoicing, and claims where
                applicable.
              </li>
              <li>
                Meet legal, regulatory, and professional obligations, including
                clinical documentation.
              </li>
              <li>
                Support directly related business activities such as quality
                improvement, training, and risk management.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>4) What information we collect</h2>
            <ul className="privacy-list">
              <li>
                Identity and contact details: name, date of birth, address,
                phone number, and email.
              </li>
              <li>
                Health information: presenting concerns, medical history,
                relevant diagnoses, medications, allergies, mobility and falls
                risk, assessment findings, treatment plans, and progress notes.
              </li>
              <li>
                Care context information: facility details, carer or guardian
                details, responsible person details, and support coordinator
                details where relevant.
              </li>
              <li>
                Billing details: invoices, payment details, and plan-managed
                billing contacts where applicable.
              </li>
              <li>
                Website contact form information: name, email address, and
                message content.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>5) Dealing with us anonymously</h2>
            <p>
              Where lawful and practical, you may choose to deal with us
              anonymously or using a pseudonym. This may not be practical for
              providing healthcare services, maintaining clinical records, or
              completing billing and claims processes.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6) How we collect your personal information</h2>
            <p>We collect information in several ways, including:</p>
            <ul className="privacy-list">
              <li>
                Directly from you when you book, attend an appointment, or
                communicate with us by phone, email, SMS, or forms.
              </li>
              <li>
                During consultations and assessments, including mobile visits
                and residential aged care visits.
              </li>
              <li>Via referral pathways and care coordination communications.</li>
            </ul>
            <p>
              In some circumstances, where it is not practical or reasonable to
              collect from you directly, we may collect information from:
            </p>
            <ul className="privacy-list">
              <li>A guardian, carer, family member, or responsible person.</li>
              <li>
                Other healthcare providers involved in your care, such as GPs,
                hospitals, allied health providers, and specialists.
              </li>
              <li>
                Aged care providers, Support at Home providers, NDIS plan
                managers, or support coordinators where relevant to your care.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>7) Sharing and disclosure</h2>
            <p>
              We only share your information when necessary to support your
              care, operate our practice, or where required or authorised by
              law. This may include:
            </p>
            <ul className="privacy-list">
              <li>
                Other healthcare providers involved in your care, with consent
                where required.
              </li>
              <li>
                Aged care organisations, Support at Home providers, and support
                coordinators involved in your care arrangements.
              </li>
              <li>
                Service providers who support operations, including practice
                management and IT providers such as Splose, secure
                communications, and accounting or bookkeeping support.
              </li>
              <li>
                Government agencies or regulators where legally required, for
                example mandatory reporting or legal instruments.
              </li>
            </ul>
            <p>
              We may disclose information without consent where permitted by
              law, including to lessen or prevent a serious threat to life,
              health, or safety, to comply with court or tribunal orders, or
              for confidential dispute resolution.
            </p>
            <p>
              We do not use your health information for marketing, and we do
              not send direct marketing communications without your consent.
              You can opt out at any time. We may use de-identified information
              for quality improvement and service evaluation.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8) Overseas disclosure (website hosting and processing)</h2>
            <p>
              Our website is hosted and supported by third-party technology
              providers, including Vercel. When you submit information through
              our website, such as via our contact form, that information may
              be processed or stored outside Australia depending on how these
              providers and their subcontractors operate.
            </p>
            <p>
              We take reasonable steps to protect information when using service
              providers, including selecting reputable providers and applying
              security controls.
            </p>
            <p>
              <strong>
                Important note: Please avoid including sensitive health
                information in website contact forms. If you need to share
                clinical details, we can collect this securely by phone or
                during your appointment.
              </strong>
            </p>
          </section>

          <section className="privacy-section">
            <h2>9) How we store and protect your personal information</h2>
            <p>Your information may be stored in:</p>
            <ul className="privacy-list">
              <li>
                Electronic clinical and administrative records, including our
                practice management system such as Splose.
              </li>
              <li>Emails and messages used for appointment coordination.</li>
              <li>Paper notes or forms where used.</li>
              <li>Clinical photographs where relevant and with consent.</li>
            </ul>
            <p>
              We take reasonable steps to protect information from misuse, loss,
              unauthorised access, modification, or disclosure.
            </p>
            <ul className="privacy-list">
              <li>Role-based access controls and unique logins.</li>
              <li>Secure systems and reputable service providers.</li>
              <li>Staff confidentiality obligations.</li>
              <li>Secure retention and disposal practices.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>10) Access and correction</h2>
            <p>
              You may request access to your personal information and request
              corrections if it is inaccurate, incomplete, or out of date.
            </p>
            <p>
              Requests should be made in writing to admin@stride-podiatry.com.au.
              We will respond within a reasonable timeframe, generally within 30
              days.
            </p>
            <p>
              We may charge a reasonable fee for providing access, for example
              photocopying or administrative time, but we do not charge a fee
              for making a request.
            </p>
          </section>

          <section className="privacy-section">
            <h2>11) Complaints</h2>
            <p>
              If you have a privacy concern or complaint, contact us in writing
              at admin@stride-podiatry.com.au or by phone on 0468 518 993.
            </p>
            <p>
              We will acknowledge your complaint and aim to resolve it within a
              reasonable timeframe, generally within 30 days. If you are not
              satisfied with our response, you may lodge a complaint with the
              Office of the Australian Information Commissioner (OAIC).
            </p>
          </section>

          <section className="privacy-section">
            <h2>12) Privacy and our website (cookies and analytics)</h2>
            <p>
              Our website may use cookies and analytics tools to understand how
              visitors use the site and to improve performance. You can disable
              cookies in your browser settings, but parts of the site may not
              function as expected.
            </p>
            <p>
              We may also receive technical information such as IP address,
              browser type, pages visited, and approximate location depending
              on your device settings.
            </p>
          </section>

          <section className="privacy-section">
            <h2>13) Policy review</h2>
            <p>
              We review this policy periodically to ensure it remains current.
              The latest version is published on this page and the effective
              date is updated when changes are made.
            </p>
          </section>

          <section className="privacy-section privacy-disclaimer">
            <h2>14) Disclaimer</h2>
            <p>
              This policy provides general information and is not legal advice.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
