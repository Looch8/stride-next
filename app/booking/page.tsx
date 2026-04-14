import type { Metadata } from 'next';
import Link from 'next/link';

import BookingForm from '@/components/booking-form';
import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au' },
	{ name: 'Booking', url: 'https://www.stride-podiatry.com.au/booking' },
]);

export const metadata: Metadata = {
	title: 'Book a Podiatry Home Visit in Adelaide | Stride Podiatry',
	description:
		'Request a podiatry home visit in Adelaide. Private bookings welcome, with support for Medicare CDM, NDIS, DVA, aged care and Support at Home where applicable.',
	alternates: { canonical: 'https://www.stride-podiatry.com.au/booking' },
	openGraph: {
		title: 'Book a Podiatry Home Visit in Adelaide | Stride Podiatry',
		description:
			'Request a podiatry home visit in Adelaide. Private bookings welcome, with support for Medicare CDM, NDIS, DVA, aged care and Support at Home where applicable.',
		url: 'https://www.stride-podiatry.com.au/booking',
	},
	twitter: {
		title: 'Book a Podiatry Home Visit in Adelaide | Stride Podiatry',
		description:
			'Request a podiatry home visit in Adelaide. Private bookings welcome, with support for Medicare CDM, NDIS, DVA, aged care and Support at Home where applicable.',
	},
};

export default function BookingPage() {
	return (
		<section className="booking">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
			/>
			<div className="booking-container">
				<div className="booking-header">
					<p className="booking-eyebrow">Booking</p>
					<h1>Request an appointment</h1>
					<p>
						Send your details and we&apos;ll get back to confirm timing,
						suburb coverage and anything else we need before the visit.
					</p>
				</div>

				<div className="booking-grid">
					<div className="booking-panel booking-panel--form">
						<p className="booking-panel-eyebrow">Appointment Request form</p>
						<h2>Tell us what you need</h2>
						<p className="booking-muted">
							Private bookings are welcome. We can also help with Medicare
							CDM, <Link href="/services/ndis-podiatry">NDIS</Link>,{' '}
							<Link href="/services/dva-podiatry">DVA</Link>,{' '}
							<Link href="/services/aged-care-podiatry">aged care</Link>{' '}
							and{' '}
							<Link href="/services/support-at-home-podiatry">
								Support at Home
							</Link>{' '}
							where relevant.
						</p>
						<BookingForm />
					</div>

					<div className="booking-sidebar">
						<div className="booking-panel booking-panel--info">
							<p className="booking-panel-eyebrow">What happens next</p>
							<h2>What happens next</h2>
							<div className="booking-info-list">
								<div className="booking-info-item">
									<span className="booking-info-step">1</span>
									<p>We review your request.</p>
								</div>
								<div className="booking-info-item">
									<span className="booking-info-step">2</span>
									<p>We contact you if we need more details and offer a time.</p>
								</div>
								<div className="booking-info-item">
									<span className="booking-info-step">3</span>
									<p>You get the details before the visit.</p>
								</div>
							</div>
						</div>

						<div className="booking-panel booking-panel--contact">
							<p className="booking-panel-eyebrow">Prefer to call?</p>
							<h2>Fastest way to book</h2>
							<p className="booking-muted">
								Call if you want to check suburb coverage, discuss funding,
								or talk through the right type of appointment first.
							</p>
							<p className="booking-muted">
								Useful if you need{' '}
								<Link href="/services/ndis-podiatry">NDIS podiatry</Link>,{' '}
								<Link href="/services/dva-podiatry">DVA podiatry</Link>{' '}
								or{' '}
								<Link href="/services/support-at-home-podiatry">
									Support at Home podiatry
								</Link>
								.
							</p>
							<a href="tel:+61468518993" className="contact-call-button">
								Call 0468 518 993
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
