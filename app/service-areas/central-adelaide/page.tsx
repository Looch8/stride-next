import Link from 'next/link';
import type { Metadata } from 'next';

import { buildBreadcrumbList } from '@/lib/structured-data';

const canonical =
	'https://www.stride-podiatry.com.au/service-areas/central-adelaide';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{
		name: 'Service Areas',
		url: 'https://www.stride-podiatry.com.au/service-areas',
	},
	{
		name: 'Central Adelaide',
		url: canonical,
	},
]);

export const metadata: Metadata = {
	title: 'Central Adelaide Podiatry | Stride Podiatry',
	description:
		'Mobile and home-visit podiatry in Central Adelaide including Adelaide CBD, North Adelaide, Prospect, Walkerville, Mile End, Goodwood, and surrounding suburbs.',
	alternates: { canonical },
	openGraph: {
		title: 'Central Adelaide Podiatry | Stride Podiatry',
		description:
			'Mobile and home-visit podiatry in Central Adelaide including Adelaide CBD, North Adelaide, Prospect, Walkerville, Mile End, Goodwood, and surrounding suburbs.',
		url: canonical,
	},
	twitter: {
		title: 'Central Adelaide Podiatry | Stride Podiatry',
		description:
			'Mobile and home-visit podiatry in Central Adelaide including Adelaide CBD, North Adelaide, Prospect, Walkerville, Mile End, Goodwood, and surrounding suburbs.',
	},
};

export default function CentralAdelaidePage() {
	return (
		<section className="service-areas">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
			/>
			<div className="service-areas-container">
				<h1>Central Adelaide Service Area</h1>
				<p>
					Stride Podiatry provides mobile and home-visit podiatry across Central
					Adelaide suburbs.
				</p>
				<ul>
					<li>Adelaide CBD</li>
					<li>North Adelaide</li>
					<li>Prospect</li>
					<li>Walkerville</li>
					<li>Kent Town</li>
					<li>Mile End</li>
					<li>Bowden</li>
					<li>Thebarton</li>
					<li>Goodwood</li>
					<li>Parkside</li>
					<li>Unley</li>
					<li>Norwood</li>
					<li>Medindie</li>
					<li>College Park</li>
					<li>Rose Park</li>
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
