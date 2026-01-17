import type { Metadata } from 'next';

import BookingForm from '@/components/booking-form';
import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{ name: 'Booking', url: 'https://www.stride-podiatry.com.au/booking' },
]);

export const metadata: Metadata = {
	title: 'Book a Mobile Podiatrist | Stride Podiatry Adelaide',
	description:
		'Request a mobile podiatry home visit in Adelaide. No referral needed. We accept Medicare CDM (GPMP/TCA), NDIS and private patients.',
	alternates: { canonical: 'https://www.stride-podiatry.com.au/booking' },
	openGraph: {
		title: 'Book a Mobile Podiatrist | Stride Podiatry Adelaide',
		description:
			'Request a mobile podiatry home visit in Adelaide. No referral needed. We accept Medicare CDM (GPMP/TCA), NDIS and private patients.',
		url: 'https://www.stride-podiatry.com.au/booking',
	},
};

export default function BookingPage() {
	return (
		<div className="booking-container">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
			/>
			<h1>Request a Home Visit</h1>
			<p>
				We&apos;ll contact you to confirm a suitable time and answer any
				questions before your appointment.
			</p>
			<BookingForm />
		</div>
	);
}
