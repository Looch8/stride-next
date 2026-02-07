import type { Metadata } from 'next';

import FAQList, { type FAQItem } from '@/components/faq-list';
import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{ name: 'FAQ', url: 'https://www.stride-podiatry.com.au/faq' },
]);

const faqData: FAQItem[] = [
	{
		question: 'Do I need a referral to see a podiatrist?',
		answer: 'No referral is required for private bookings. Medicare CDM requires a GP referral. We also see NDIS plan- and self-managed clients, Support at Home clients, DVA patients where applicable, and private health insurance patients.',
	},
	{
		question: 'What time will you arrive for my appointment?',
		answer: 'As a mobile service, appointments are booked within an approximate 2-hour arrival window. This allows flexibility for travel time, traffic and individual patient needs. We’ll confirm your appointment window in advance and do our best to keep you updated if there are any delays.',
	},
	{
		question: 'How do orthotics work as a mobile podiatry service?',
		answer: 'We can complete a thorough biomechanical assessment in your home, similar to what you would receive in a clinic. This includes clinical assessment, muscle and joint testing, gait analysis and diagnosis where required. If custom orthotics are indicated, we use a mobile scanning system during the appointment. Your orthotics are then manufactured, and we book a follow-up home visit to fit and adjust them to your footwear, ensuring comfort and correct function.',
	},
	{
		question: 'Do you accept Medicare, NDIS, and DVA clients?',
		answer: 'We work with Medicare CDM referrals, NDIS plan- and self-managed clients, Support at Home, and private health insurance. We may see DVA patients where applicable.',
	},
	{
		question: 'Where do you provide mobile podiatry services?',
		answer: 'Across all Adelaide metro suburbs and regional South Australia by arrangement. If you’re unsure, contact us to confirm coverage.',
	},
	{
		question: 'What conditions do you treat?',
		answer: 'Foot pain, general footcare, ingrown toenails, diabetic foot care, corns, calluses, plantar fasciitis, footwear assessments and more.',
	},
	{
		question: 'How do I book an appointment?',
		answer: 'Call us, email us, or use our online booking form.',
	},
	{
		question: 'What should I expect during a home visit?',
		answer: 'Assessment, treatment as needed, and advice on footwear and mobility to keep your feet healthy.',
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
		'Answers to common questions about mobile podiatry in Adelaide: Medicare CDM, NDIS, DVA, service areas, conditions treated, and what to expect.',
	alternates: { canonical: 'https://www.stride-podiatry.com.au/faq' },
	openGraph: {
		title: 'FAQs | Stride Podiatry',
		description:
			'Answers to common questions about mobile podiatry in Adelaide: Medicare CDM, NDIS, DVA, service areas, conditions treated, and what to expect.',
		url: 'https://www.stride-podiatry.com.au/faq',
	},
	twitter: {
		title: 'FAQs | Stride Podiatry',
		description:
			'Answers to common questions about mobile podiatry in Adelaide: Medicare CDM, NDIS, DVA, service areas, conditions treated, and what to expect.',
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
					<h1>Frequently Asked Questions</h1>
					<p className="faq-intro">
						Find answers about our mobile podiatry services,
						bookings and treatments.
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
