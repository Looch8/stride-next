import Link from 'next/link';
import type { Metadata } from 'next';

import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{
		name: 'Service Areas',
		url: 'https://www.stride-podiatry.com.au/service-areas',
	},
]);

export const metadata: Metadata = {
	title: 'Service Areas | Stride Podiatry',
	description:
		'Mobile podiatry across all Adelaide metro suburbs and regional South Australia by arrangement. Home visit podiatrist serving Adelaide.',
	alternates: {
		canonical: 'https://www.stride-podiatry.com.au/service-areas',
	},
	openGraph: {
		title: 'Service Areas | Stride Podiatry',
		description:
			'Mobile podiatry across all Adelaide metro suburbs and regional South Australia by arrangement. Home visit podiatrist serving Adelaide.',
		url: 'https://www.stride-podiatry.com.au/service-areas',
	},
	twitter: {
		title: 'Service Areas | Stride Podiatry',
		description:
			'Mobile podiatry across all Adelaide metro suburbs and regional South Australia by arrangement. Home visit podiatrist serving Adelaide.',
	},
};

export default function ServiceAreasPage() {
	return (
		<section className="service-areas">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbsLd),
				}}
			/>
			<div className="service-areas-container">
				<h1>Service Areas</h1>
				<p>
					Stride Podiatry provides mobile and home-visit podiatry
					across <strong>all Adelaide metro suburbs</strong> and
					<strong> regional South Australia</strong> by arrangement.
				</p>

				<h2>Adelaide Metro Coverage</h2>
				<ul>
					<li>
						<strong>Northern Adelaide:</strong> Elizabeth, Salisbury,
						Modbury, Tea Tree Gully, Golden Grove, Mawson Lakes,
						Parafield Gardens, Gawler, Pooraka, Para Hills
					</li>
					<li>
						<strong>Southern Adelaide:</strong> Noarlunga, Marion,
						Brighton, Glenelg, Hallett Cove, Morphett Vale,
						Reynella, Seaford, Christies Beach, Aldinga
					</li>
					<li>
						<strong>Eastern Adelaide:</strong> Norwood, Burnside,
						Unley, Glen Osmond, Magill, Kensington, Payneham,
						Campbelltown, Rostrevor, Athelstone
					</li>
					<li>
						<strong>Western Adelaide:</strong> Henley Beach, West
						Lakes, Port Adelaide, Seaton, Findon, Woodville, Grange,
						Fulham, Semaphore, Largs Bay
					</li>
					<li>
						<strong>Central Adelaide:</strong> Adelaide CBD, North
						Adelaide, Prospect, Walkerville, Kent Town, Mile End,
						Bowden, Thebarton, Goodwood, Parkside
					</li>
				</ul>

				<h2>Regional South Australia</h2>
				<p>
					We regularly travel beyond metro Adelaide. If you are in a
					regional area, contact us and we will confirm availability
					for your location.
				</p>

				<div className="service-areas-cta">
					<p>Not sure if we service your suburb?</p>
					<div>
						<Link href="/booking" className="book-now-button">
							Book a Home Visit
						</Link>
						<a href="tel:+61468518993" className="hero-cta-secondary">
							Call 0468 518 993
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
