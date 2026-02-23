import Link from 'next/link';
import type { Metadata } from 'next';

import { buildBreadcrumbList } from '@/lib/structured-data';

const canonical =
	'https://www.stride-podiatry.com.au/service-areas/western-adelaide';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{
		name: 'Service Areas',
		url: 'https://www.stride-podiatry.com.au/service-areas',
	},
	{
		name: 'Western Adelaide',
		url: canonical,
	},
]);

export const metadata: Metadata = {
	title: 'Western Adelaide Podiatry | Stride Podiatry',
	description:
		'Mobile and home-visit podiatry in Western Adelaide including Henley Beach, West Lakes, Port Adelaide, Woodville, Semaphore, and surrounding suburbs.',
	alternates: { canonical },
	openGraph: {
		title: 'Western Adelaide Podiatry | Stride Podiatry',
		description:
			'Mobile and home-visit podiatry in Western Adelaide including Henley Beach, West Lakes, Port Adelaide, Woodville, Semaphore, and surrounding suburbs.',
		url: canonical,
	},
	twitter: {
		title: 'Western Adelaide Podiatry | Stride Podiatry',
		description:
			'Mobile and home-visit podiatry in Western Adelaide including Henley Beach, West Lakes, Port Adelaide, Woodville, Semaphore, and surrounding suburbs.',
	},
};

export default function WesternAdelaidePage() {
	return (
		<section className="service-areas">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
			/>
			<div className="service-areas-container">
				<h1>Western Adelaide Service Area</h1>
				<p>
					Stride Podiatry provides mobile and home-visit podiatry across Western
					Adelaide suburbs.
				</p>
				<ul>
					<li>Henley Beach</li>
					<li>West Lakes</li>
					<li>Port Adelaide</li>
					<li>Seaton</li>
					<li>Findon</li>
					<li>Woodville</li>
					<li>Grange</li>
					<li>Fulham</li>
					<li>Semaphore</li>
					<li>Largs Bay</li>
					<li>Glenelg North</li>
					<li>Royal Park</li>
					<li>Albert Park</li>
					<li>Beverley</li>
					<li>Croydon Park</li>
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
