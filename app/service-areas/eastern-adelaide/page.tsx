import Link from 'next/link';
import type { Metadata } from 'next';

import { buildBreadcrumbList } from '@/lib/structured-data';

const canonical =
	'https://www.stride-podiatry.com.au/service-areas/eastern-adelaide';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{
		name: 'Service Areas',
		url: 'https://www.stride-podiatry.com.au/service-areas',
	},
	{
		name: 'Eastern Adelaide',
		url: canonical,
	},
]);

export const metadata: Metadata = {
	title: 'Eastern Adelaide Podiatry | Stride Podiatry',
	description:
		'Mobile and home-visit podiatry in Eastern Adelaide including Norwood, Burnside, Unley, Magill, Kensington, Payneham, and surrounding suburbs.',
	alternates: { canonical },
	openGraph: {
		title: 'Eastern Adelaide Podiatry | Stride Podiatry',
		description:
			'Mobile and home-visit podiatry in Eastern Adelaide including Norwood, Burnside, Unley, Magill, Kensington, Payneham, and surrounding suburbs.',
		url: canonical,
	},
	twitter: {
		title: 'Eastern Adelaide Podiatry | Stride Podiatry',
		description:
			'Mobile and home-visit podiatry in Eastern Adelaide including Norwood, Burnside, Unley, Magill, Kensington, Payneham, and surrounding suburbs.',
	},
};

export default function EasternAdelaidePage() {
	return (
		<section className="service-areas">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
			/>
			<div className="service-areas-container">
				<h1>Eastern Adelaide Service Area</h1>
				<p>
					Stride Podiatry provides mobile and home-visit podiatry across Eastern
					Adelaide suburbs.
				</p>
				<ul>
					<li>Norwood</li>
					<li>Burnside</li>
					<li>Unley</li>
					<li>Glen Osmond</li>
					<li>Magill</li>
					<li>Kensington</li>
					<li>Payneham</li>
					<li>Campbelltown</li>
					<li>Rostrevor</li>
					<li>Athelstone</li>
					<li>Tranmere</li>
					<li>St Morris</li>
					<li>Erindale</li>
					<li>Beaumont</li>
					<li>Toorak Gardens</li>
				</ul>
				<p>
					Need details for another area? View all{' '}
					<Link href="/service-areas">service areas</Link>.
				</p>
				<p>
					Call <a href="tel:+61468518993">0468 518 993</a> or{' '}
					<Link href="/booking">request a booking online</Link>.
				</p>
			</div>
		</section>
	);
}
