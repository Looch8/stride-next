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
		'Mobile podiatry across Adelaide metro and regional South Australia. View our area pages for Northern, Southern, Eastern, Western, Central Adelaide, and Regional South Australia coverage.',
	alternates: {
		canonical: 'https://www.stride-podiatry.com.au/service-areas',
	},
	openGraph: {
		title: 'Service Areas | Stride Podiatry',
		description:
			'Mobile podiatry across Adelaide metro and regional South Australia. View our area pages for Northern, Southern, Eastern, Western, Central Adelaide, and Regional South Australia coverage.',
		url: 'https://www.stride-podiatry.com.au/service-areas',
	},
	twitter: {
		title: 'Service Areas | Stride Podiatry',
		description:
			'Mobile podiatry across Adelaide metro and regional South Australia. View our area pages for Northern, Southern, Eastern, Western, Central Adelaide, and Regional South Australia coverage.',
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
					Stride Podiatry provides mobile and home-visit podiatry across{' '}
					<strong>Adelaide metro suburbs</strong> and{' '}
					<strong>regional South Australia</strong> by arrangement.
				</p>

				<h2>Browse By Area</h2>
				<ul>
					<li>
						<strong>
							<Link href="/service-areas/northern-adelaide">
								Northern Adelaide
							</Link>
						</strong>
					</li>
					<li>
						<strong>
							<Link href="/service-areas/southern-adelaide">
								Southern Adelaide
							</Link>
						</strong>
					</li>
					<li>
						<strong>
							<Link href="/service-areas/eastern-adelaide">
								Eastern Adelaide
							</Link>
						</strong>
					</li>
					<li>
						<strong>
							<Link href="/service-areas/western-adelaide">
								Western Adelaide
							</Link>
						</strong>
					</li>
					<li>
						<strong>
							<Link href="/service-areas/central-adelaide">
								Central Adelaide
							</Link>
						</strong>
					</li>
					<li>
						<strong>
							<Link href="/service-areas/regional-south-australia">
								Regional South Australia
							</Link>
						</strong>
					</li>
				</ul>

				<div className="service-areas-cta">
					<p>Not sure if we service your suburb?</p>
					<div>
						<Link href="/contact-us" className="book-now-button">
							Send Enquiry
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
