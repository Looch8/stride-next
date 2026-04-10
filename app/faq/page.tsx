import type { Metadata } from 'next';
import Link from 'next/link';

import FAQList, { type FAQItem } from '@/components/faq-list';
import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{ name: 'FAQ', url: 'https://www.stride-podiatry.com.au/faq' },
]);

const faqData: FAQItem[] = [
	{
		question: 'Do I need a referral to see a podiatrist?',
		answer: 'No referral is needed for private bookings. Medicare CDM requires a GP referral. We also see NDIS plan- and self-managed clients, Support at Home clients and DVA clients where applicable.',
	},
	{
		question: 'What time will you arrive for my appointment?',
		answer: 'Appointments are booked within an approximate 2-hour arrival window. This allows for travel time, traffic and the needs of earlier patients. We’ll confirm the window in advance and keep you updated if there is a delay.',
	},
	{
		question: 'What is your cancellation and no-show policy?',
		answer:
			'We require at least 2 clear business days’ notice for cancellations or changes. If less notice is given, or an appointment is missed, the full consultation fee may apply.',
	},
	{
		question: 'How do orthotics work as a mobile podiatry service?',
		answer: 'We can complete a biomechanical assessment in your home, including gait analysis and testing where needed. If custom orthotics are suitable, we use a mobile scanning system during the visit, then return for fitting and adjustments once they are made.',
	},
	{
		question: 'Do you accept Medicare, NDIS, and DVA clients?',
		answer: 'We work with Medicare CDM referrals, NDIS plan- and self-managed clients, Support at Home and DVA where applicable.',
	},
	{
		question: 'Where do you provide mobile podiatry services?',
		answer: 'Across Adelaide metro, with regional South Australia by arrangement. If you’re unsure, contact us to check your suburb.',
	},
	{
		question: 'What conditions do you treat?',
		answer: 'Foot pain, general foot care, ingrown toenails, diabetic foot care, corns, calluses, plantar fasciitis and footwear issues.',
	},
	{
		question: 'How do I book an appointment?',
		answer: 'Call, email or use the online booking form.',
	},
	{
		question: 'What should I expect during a home visit?',
		answer: 'We assess the problem, provide treatment and give clear advice on what to do next.',
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
	title: 'FAQs | Stride Podiatry',
	description:
		'Answers to common questions about mobile podiatry in Adelaide, including bookings, Medicare, NDIS, DVA and service areas.',
	alternates: { canonical: 'https://www.stride-podiatry.com.au/faq' },
	openGraph: {
		title: 'FAQs | Stride Podiatry',
		description:
			'Answers to common questions about mobile podiatry in Adelaide, including bookings, Medicare, NDIS, DVA and service areas.',
		url: 'https://www.stride-podiatry.com.au/faq',
	},
	twitter: {
		title: 'FAQs | Stride Podiatry',
		description:
			'Answers to common questions about mobile podiatry in Adelaide, including bookings, Medicare, NDIS, DVA and service areas.',
	},
};

export default function FAQPage() {
	return (
		<section className="faq">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbsLd),
				}}
			/>
			<script
				key="faq-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLD) }}
			/>
			<div className="faq-container">
				<div className="faq-header">
					<p className="faq-eyebrow">FAQ</p>
					<h1>Common questions</h1>
					<p className="faq-intro">
						Quick answers about bookings, funding and home visits.
					</p>
				</div>

				<FAQList items={faqData} />
				<div className="faq-contact">
					<p className="faq-contact-eyebrow">Still need help?</p>
					<h2>Need more information?</h2>
					<p>
						Visit our <Link href="/contact-us">contact page</Link>{' '}
						if you&apos;d like to ask about services, service areas or
						availability.
					</p>
				</div>
			</div>
		</section>
	);
}
