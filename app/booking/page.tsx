import type { Metadata } from 'next';

import BookingForm from '@/components/booking-form';
import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{ name: 'Booking', url: 'https://www.stride-podiatry.com.au/booking' },
]);

export const metadata: Metadata = {
	title: 'Request Appointment | Stride Podiatry',
	description:
		'Request a mobile podiatry home visit in Adelaide. No referral required for private bookings. Medicare CDM requires a GP referral. NDIS plan- and self-managed accepted.',
	alternates: { canonical: 'https://www.stride-podiatry.com.au/booking' },
	openGraph: {
		title: 'Request Appointment | Stride Podiatry',
		description:
			'Request a mobile podiatry home visit in Adelaide. No referral required for private bookings. Medicare CDM requires a GP referral. NDIS plan- and self-managed accepted.',
		url: 'https://www.stride-podiatry.com.au/booking',
	},
	twitter: {
		title: 'Request Appointment | Stride Podiatry',
		description:
			'Request a mobile podiatry home visit in Adelaide. No referral required for private bookings. Medicare CDM requires a GP referral. NDIS plan- and self-managed accepted.',
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
			<h1>Request Appointment</h1>
			<p>
				We&apos;ll contact you to confirm a suitable time and answer any
				questions before your appointment.
			</p>
			<BookingForm />
		</div>
	);
}
