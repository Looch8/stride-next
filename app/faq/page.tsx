import type { Metadata } from 'next';

import FAQList, { type FAQItem } from '@/components/faq-list';

const faqData: FAQItem[] = [
  {
    question: 'Do I need a referral to see a podiatrist?',
    answer:
      "No, you don't need a referral to book with Stride Podiatry. We accept private bookings, Medicare CDM plans, NDIS and DVA clients.",
  },
  {
    question: 'Do you accept Medicare, NDIS, and DVA clients?',
    answer:
      'Yes—Medicare CDM (with GP referral), DVA Gold Card holders, and NDIS (where eligible).',
  },
  {
    question: 'Where do you provide mobile podiatry services?',
    answer: 'Across the Adelaide metro area. If you’re outside this region, contact us to discuss options.',
  },
  {
    question: 'What conditions do you treat?',
    answer:
      'Foot pain, general footcare, ingrown toenails, diabetic foot care, corns, calluses, plantar fasciitis, footwear assessments and more.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'Call us, email us, or use our online booking form.',
  },
  {
    question: 'What should I expect during a home visit?',
    answer:
      'Assessment, treatment as needed, and advice on footwear and mobility to keep your feet healthy.',
  },
];

const faqLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export const metadata: Metadata = {
  title: 'Podiatry FAQs | Stride Podiatry Adelaide',
  description:
    'Answers to common questions about mobile podiatry in Adelaide: Medicare CDM, NDIS, DVA, service areas, conditions treated, and what to expect.',
  alternates: { canonical: 'https://www.stride-podiatry.com.au/faq/' },
};

export default function FAQPage() {
  return (
    <section className="faq">
      <script
        key="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLD) }}
      />
      <div className="faq-container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p className="faq-intro">
            Find answers about our mobile podiatry services, bookings and treatments.
          </p>
        </div>

        <FAQList items={faqData} />

        <div className="faq-contact">
          <p>Still have questions?</p>
          <p>Contact us for more information about our services.</p>
        </div>
      </div>
    </section>
  );
}
