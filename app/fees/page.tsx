import type { Metadata } from 'next';

import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
  { name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
  { name: 'Fees', url: 'https://www.stride-podiatry.com.au/fees' },
]);

const pricingItems = [
  {
    title: 'Initial consultation',
    duration: 'Up to 60 minutes',
    price: '$225',
  },
  {
    title: 'Subsequent consultation',
    duration: 'Up to 45 minutes',
    price: '$168.75',
  },
  {
    title: 'Custom foot orthotics',
    duration: 'Prescription orthotic device',
    price: '$700',
  },
] as const;

export const metadata: Metadata = {
  title: 'Fees | Stride Podiatry',
  description:
    'Home visit podiatry fees in Adelaide, including initial consultations, follow-up consultations, custom foot orthotics and Medicare GP Care Plan rebate information.',
  alternates: { canonical: 'https://www.stride-podiatry.com.au/fees' },
  openGraph: {
    title: 'Fees | Stride Podiatry',
    description:
      'Home visit podiatry fees in Adelaide, including initial consultations, follow-up consultations, custom foot orthotics and Medicare GP Care Plan rebate information.',
    url: 'https://www.stride-podiatry.com.au/fees',
  },
  twitter: {
    title: 'Fees | Stride Podiatry',
    description:
      'Home visit podiatry fees in Adelaide, including initial consultations, follow-up consultations, custom foot orthotics and Medicare GP Care Plan rebate information.',
  },
};

export default function FeesPage() {
  return (
    <section className="fees">
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsLd),
        }}
      />
      <div className="fees-container">
        <header className="fees-header">
          <p className="fees-eyebrow">Fees</p>
          <h1>Home visit podiatry fees</h1>
          <p className="fees-intro">
            Clear pricing for home-visit appointments.
          </p>
        </header>

        <div className="fees-pricing-card">
          <div className="fees-list" role="list" aria-label="Stride Podiatry fees">
            {pricingItems.map((item) => (
              <article key={item.title} className="fee-item" role="listitem">
                <div className="fee-item-copy">
                  <h2>{item.title}</h2>
                  <p>{item.duration}</p>
                </div>
                <p className="fee-item-price" aria-label={`${item.title} ${item.price}`}>
                  {item.price}
                </p>
              </article>
            ))}
          </div>
          <p className="fees-note">
            All prices are inclusive of consumables. GST will be applied where
            applicable.
          </p>
        </div>

        <section className="fees-rebates" aria-labelledby="rebate-options-heading">
          <div className="fees-rebates-header">
            <p className="fees-eyebrow">Rebates</p>
            <h2 id="rebate-options-heading">What rebate options are available?</h2>
          </div>

          <div className="fees-rebates-grid">
            <article className="fees-rebate-card">
              <p className="fees-rebate-eyebrow">Medicare GP Care Plan</p>
              <h3>Check eligibility with your GP</h3>
              <p>
                Speak with your GP to see whether you are eligible for a GP
                Chronic Condition Management Plan.
              </p>
              <ul className="fees-rebate-list">
                <li>
                  If eligible, you may be able to access up to 5 partially
                  rebated allied health visits per calendar year.
                </li>
                <li>
                  The current Medicare rebate is $61.80 per consultation.
                </li>
                <li>
                  If applicable, the rebate can be processed for you after the
                  appointment.
                </li>
              </ul>
            </article>

            <article className="fees-rebate-card fees-rebate-card--soft">
              <p className="fees-rebate-eyebrow">Private health</p>
              <h3>Private health rebates</h3>
              <p>
                Private health rebates may also be available, depending on your
                level of cover.
              </p>
              <ul className="fees-rebate-list">
                <li>Consultations are paid in full on the day of the appointment.</li>
                <li>
                  Private health claims are submitted by the patient after the
                  appointment.
                </li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}
