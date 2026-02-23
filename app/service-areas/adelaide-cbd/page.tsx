import Link from 'next/link';
import type { Metadata } from 'next';

import { buildBreadcrumbList } from '@/lib/structured-data';

const canonical = 'https://www.stride-podiatry.com.au/service-areas/adelaide-cbd';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{
		name: 'Service Areas',
		url: 'https://www.stride-podiatry.com.au/service-areas',
	},
	{
		name: 'Adelaide CBD',
		url: canonical,
	},
]);

export const metadata: Metadata = {
	title: 'Podiatry in Adelaide CBD | Stride Podiatry',
	description:
		'Need a mobile podiatrist in Adelaide CBD? Stride Podiatry provides home-visit podiatry including general foot care, ingrown toenail treatment, diabetes foot care, and custom orthotics.',
	alternates: { canonical },
	openGraph: {
		title: 'Podiatry in Adelaide CBD | Stride Podiatry',
		description:
			'Mobile and home-visit podiatry in Adelaide CBD. Call 0468 518 993 or request a booking online.',
		url: canonical,
	},
	twitter: {
		title: 'Podiatry in Adelaide CBD | Stride Podiatry',
		description:
			'Mobile and home-visit podiatry in Adelaide CBD. Call 0468 518 993 or request a booking online.',
	},
};

export default function AdelaideCbdAreaPage() {
	return (
		<section className="service-areas">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
			/>
			<div className="service-areas-container">
				<h1>Podiatry in Adelaide CBD</h1>
				<p>
					Stride Podiatry provides mobile and home-visit podiatry across Adelaide
					CBD. We can visit homes, apartments, retirement communities, and
					workplaces in and around the city.
				</p>

				<h2>Popular services in Adelaide CBD</h2>
				<ul>
					<li>
						<Link href="/services/general-podiatry">General podiatry care</Link>{' '}
						for nails, corns and calluses
					</li>
					<li>
						<Link href="/services/ingrown-toenail">
							Ingrown toenail treatment
						</Link>
					</li>
					<li>
						<Link href="/services/diabetes-foot-care">Diabetes foot care</Link>{' '}
						and risk checks
					</li>
					<li>
						<Link href="/services/heel-arch-pain">Heel and arch pain care</Link>
					</li>
					<li>
						<Link href="/services/custom-orthotics">Custom orthotics</Link> and
						footwear guidance
					</li>
				</ul>

				<h2>Book or enquire</h2>
				<p>
					Call <a href="tel:+61468518993">0468 518 993</a> to confirm
					availability, or{' '}
					<Link href="/booking">request a booking online</Link>.
				</p>
				<p>
					Need to check another location? Visit our{' '}
					<Link href="/service-areas">full service areas page</Link>.
				</p>
			</div>
		</section>
	);
}
