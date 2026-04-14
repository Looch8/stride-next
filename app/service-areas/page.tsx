import Link from 'next/link';
import type { Metadata } from 'next';

import { serviceAreas } from '@/content/service-areas';
import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au' },
	{
		name: 'Service Areas',
		url: 'https://www.stride-podiatry.com.au/service-areas',
	},
]);

export const metadata: Metadata = {
	title: 'Adelaide Service Areas | Stride Podiatry',
	description:
		'See the Adelaide suburbs and regions covered by Stride Podiatry. Check service areas for home-visit podiatry availability.',
	alternates: {
		canonical: 'https://www.stride-podiatry.com.au/service-areas',
	},
	openGraph: {
		title: 'Adelaide Service Areas | Stride Podiatry',
		description:
			'See the Adelaide suburbs and regions covered by Stride Podiatry. Check service areas for home-visit podiatry availability.',
		url: 'https://www.stride-podiatry.com.au/service-areas',
	},
	twitter: {
		title: 'Adelaide Service Areas | Stride Podiatry',
		description:
			'See the Adelaide suburbs and regions covered by Stride Podiatry. Check service areas for home-visit podiatry availability.',
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
				<div className="service-areas-header">
					<p className="service-areas-eyebrow">Service areas</p>
					<h1>Where we visit</h1>
					<p className="service-areas-intro">
						Stride Podiatry provides home-visit podiatry across Adelaide
						metro, with regional South Australia by arrangement. Browse by
						area to check suburb coverage.
					</p>
				</div>

				<div className="service-areas-grid">
					{serviceAreas.map((area) => (
						<article key={area.slug} className="service-area-index-card">
							<p className="service-area-card-eyebrow">{area.eyebrow}</p>
							<h2 className="service-area-index-title">{area.name}</h2>
							<p className="service-area-index-copy">{area.localContext}</p>
							<Link
								href={`/service-areas/${area.slug}`}
								className="service-area-index-link"
							>
								View area details
							</Link>
						</article>
					))}
				</div>

				<div className="service-area-card service-area-index-cta">
					<p className="service-area-card-eyebrow">Need help?</p>
					<h2>Not sure which area fits your suburb?</h2>
					<p>
						If you are near the edge of metro coverage, or need a
						regional visit, contact us and we&apos;ll check.
					</p>
					<div className="service-area-actions">
						<Link href="/contact-us" className="book-now-button">
							Contact us
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
