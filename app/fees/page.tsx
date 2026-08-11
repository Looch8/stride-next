import type { Metadata } from 'next';

import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
  { name: 'Home', url: 'https://stridepodiatry.com.au' },
  { name: 'Fees', url: 'https://stridepodiatry.com.au/fees' },
]);

const pricingItems = [
  {
    title: 'Home visits',
    price: '$165',
  },
] as const;

export const metadata: Metadata = {
  title: 'Fees | Stride Podiatry',
  description:
    'Home visit podiatry fees in Adelaide, including initial and follow-up consultations, custom orthotics and Medicare rebate information.',
  alternates: { canonical: 'https://stridepodiatry.com.au/fees' },
  openGraph: {
    title: 'Fees | Stride Podiatry',
    description:
      'Home visit podiatry fees in Adelaide, including initial and follow-up consultations, custom orthotics and Medicare rebate information.',
    url: 'https://stridepodiatry.com.au/fees',
  },
  twitter: {
    title: 'Fees | Stride Podiatry',
    description:
      'Home visit podiatry fees in Adelaide, including initial and follow-up consultations, custom orthotics and Medicare rebate information.',
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
            Support at Home, Private, and Medicare
          </p>
        </header>

        <div className="fees-pricing-card">
          <div className="fees-list" role="list" aria-label="Stride Podiatry fees">
            {pricingItems.map((item) => (
              <article key={item.title} className="fee-item" role="listitem">
                <div className="fee-item-copy">
                  <h2>{item.title}</h2>
                </div>
                <p className="fee-item-price" aria-label={`${item.title} ${item.price}`}>
                  {item.price}
                </p>
              </article>
            ))}
          </div>
        </div>

        <section className="fees-orthotics" aria-labelledby="orthotics-heading">
          <h2 id="orthotics-heading">Custom foot orthotics</h2>
          <p>
            Includes biomechanical assessment, 3D scanning, gait analysis,
            orthotic prescription, manufacture, and fitting. Fees are quoted at
            your assessment. Funding may be available through NDIS, Support at
            Home or DVA.
          </p>
        </section>

        <div className="fees-notes" aria-label="Additional fee information">
          <p className="fees-note">GST will be applied where applicable.</p>
          <p className="fees-note">
            NDIS appointments are billed in accordance with current NDIS
            Pricing Arrangements and Price Limits. This may include separate
            provider travel where applicable.
          </p>
          <p className="fees-note">
            Extended consultations and written reports (GP letters, NDIS or
            funding reports) are quoted separately.
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
                Ask your GP if you are eligible for a GP Chronic Condition
                Management Plan.
              </p>
              <ul className="fees-rebate-list">
                <li>
                  If eligible, you may be able to access up to 5 partially
                  rebated allied health visits per calendar year.
                </li>
                <li>
                  A Medicare rebate applies per consultation, in line with
                  the current schedule fee.
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
                You may also be able to claim through private health, depending
                on your cover.
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
