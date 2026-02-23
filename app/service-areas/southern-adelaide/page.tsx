import Link from 'next/link';
import type { Metadata } from 'next';

import { buildBreadcrumbList } from '@/lib/structured-data';

const canonical =
	'https://www.stride-podiatry.com.au/service-areas/southern-adelaide';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{
		name: 'Service Areas',
		url: 'https://www.stride-podiatry.com.au/service-areas',
	},
	{
		name: 'Southern Adelaide',
		url: canonical,
	},
]);

export const metadata: Metadata = {
	title: 'Southern Adelaide Podiatry | Stride Podiatry',
	description:
		'Mobile and home-visit podiatry in Southern Adelaide including Noarlunga, Marion, Brighton, Glenelg, Hallett Cove, and surrounding suburbs.',
	alternates: { canonical },
	openGraph: {
		title: 'Southern Adelaide Podiatry | Stride Podiatry',
		description:
			'Mobile and home-visit podiatry in Southern Adelaide including Noarlunga, Marion, Brighton, Glenelg, Hallett Cove, and surrounding suburbs.',
		url: canonical,
	},
	twitter: {
		title: 'Southern Adelaide Podiatry | Stride Podiatry',
		description:
			'Mobile and home-visit podiatry in Southern Adelaide including Noarlunga, Marion, Brighton, Glenelg, Hallett Cove, and surrounding suburbs.',
	},
};

export default function SouthernAdelaidePage() {
	return (
		<section className="service-areas">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
			/>
			<div className="service-areas-container">
				<h1>Southern Adelaide Service Area</h1>
				<p>
					Stride Podiatry provides mobile and home-visit podiatry across
					Southern Adelaide suburbs.
				</p>
				<ul>
					<li>Noarlunga</li>
					<li>Marion</li>
					<li>Brighton</li>
					<li>Glenelg</li>
					<li>Hallett Cove</li>
					<li>Morphett Vale</li>
					<li>Reynella</li>
					<li>Seaford</li>
					<li>Christies Beach</li>
					<li>Aldinga</li>
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
