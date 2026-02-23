import Link from 'next/link';
import type { Metadata } from 'next';

import { buildBreadcrumbList } from '@/lib/structured-data';

const canonical =
	'https://www.stride-podiatry.com.au/service-areas/northern-adelaide';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{
		name: 'Service Areas',
		url: 'https://www.stride-podiatry.com.au/service-areas',
	},
	{
		name: 'Northern Adelaide',
		url: canonical,
	},
]);

export const metadata: Metadata = {
	title: 'Northern Adelaide Podiatry | Stride Podiatry',
	description:
		'Mobile and home-visit podiatry in Northern Adelaide including Elizabeth, Salisbury, Modbury, Tea Tree Gully, Golden Grove, and surrounding suburbs.',
	alternates: { canonical },
	openGraph: {
		title: 'Northern Adelaide Podiatry | Stride Podiatry',
		description:
			'Mobile and home-visit podiatry in Northern Adelaide including Elizabeth, Salisbury, Modbury, Tea Tree Gully, Golden Grove, and surrounding suburbs.',
		url: canonical,
	},
	twitter: {
		title: 'Northern Adelaide Podiatry | Stride Podiatry',
		description:
			'Mobile and home-visit podiatry in Northern Adelaide including Elizabeth, Salisbury, Modbury, Tea Tree Gully, Golden Grove, and surrounding suburbs.',
	},
};

export default function NorthernAdelaidePage() {
	return (
		<section className="service-areas">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
			/>
			<div className="service-areas-container">
				<h1>Northern Adelaide Service Area</h1>
				<p>
					Stride Podiatry provides mobile and home-visit podiatry across
					Northern Adelaide suburbs.
				</p>
				<ul>
					<li>Elizabeth</li>
					<li>Salisbury</li>
					<li>Modbury</li>
					<li>Tea Tree Gully</li>
					<li>Golden Grove</li>
					<li>Mawson Lakes</li>
					<li>Parafield Gardens</li>
					<li>Gawler</li>
					<li>Pooraka</li>
					<li>Para Hills</li>
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
