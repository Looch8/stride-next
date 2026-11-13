import type { Metadata } from 'next';
import Link from 'next/link';

import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://stridepodiatry.com.au' },
	{
		name: 'Cancellation Policy',
		url: 'https://stridepodiatry.com.au/cancellation-policy',
	},
]);

const lastUpdated = '13 November 2026';

const description =
	'Stride Podiatry cancellation policy: please give more than 24 hours’ notice to cancel or reschedule. Late cancellations and missed appointments are charged in full.';

export const metadata: Metadata = {
	title: 'Cancellation Policy | Stride Podiatry',
	description,
	alternates: {
		canonical: 'https://stridepodiatry.com.au/cancellation-policy',
	},
	openGraph: {
		title: 'Cancellation Policy | Stride Podiatry',
		description,
		url: 'https://stridepodiatry.com.au/cancellation-policy',
	},
	twitter: {
		title: 'Cancellation Policy | Stride Podiatry',
		description,
	},
};

export default function CancellationPolicyPage() {
	return (
		<section className="privacy">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbsLd),
				}}
			/>
			<div className="privacy-container">
				<header className="privacy-header">
					<h1>Cancellation Policy</h1>
					<p className="privacy-meta">Last updated: {lastUpdated}</p>
				</header>

				<div className="privacy-content">
					<section className="privacy-section">
						<p>
							If you need to cancel or reschedule, please let us
							know more than 24 hours before your appointment and
							we&rsquo;ll find you another time. You can call us
							on <a href="tel:0881667589">08 8166 7589</a> or
							email{' '}
							<a href="mailto:info@stridepodiatry.com.au">
								info@stridepodiatry.com.au
							</a>
							.
						</p>
						<p>
							If less than 24 hours&rsquo; notice is given, or
							you&rsquo;re not home when we arrive, the full cost
							of the appointment (100%) will be charged.
						</p>
						<p>
							By booking an appointment with us, you agree to
							this policy. If you have any questions, please{' '}
							<Link href="/contact-us">get in touch</Link>.
						</p>
					</section>
				</div>
			</div>
		</section>
	);
}
