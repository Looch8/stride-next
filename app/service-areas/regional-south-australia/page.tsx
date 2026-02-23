import Link from 'next/link';
import type { Metadata } from 'next';

import { buildBreadcrumbList } from '@/lib/structured-data';

const canonical =
	'https://www.stride-podiatry.com.au/service-areas/regional-south-australia';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{
		name: 'Service Areas',
		url: 'https://www.stride-podiatry.com.au/service-areas',
	},
	{
		name: 'Regional South Australia',
		url: canonical,
	},
]);

export const metadata: Metadata = {
	title: 'Regional South Australia Podiatry | Stride Podiatry',
	description:
		'Mobile podiatry for regional South Australia by arrangement. Contact Stride Podiatry to confirm coverage and availability for your town.',
	alternates: { canonical },
	openGraph: {
		title: 'Regional South Australia Podiatry | Stride Podiatry',
		description:
			'Mobile podiatry for regional South Australia by arrangement. Contact Stride Podiatry to confirm coverage and availability for your town.',
		url: canonical,
	},
	twitter: {
		title: 'Regional South Australia Podiatry | Stride Podiatry',
		description:
			'Mobile podiatry for regional South Australia by arrangement. Contact Stride Podiatry to confirm coverage and availability for your town.',
	},
};

export default function RegionalSouthAustraliaPage() {
	return (
		<section className="service-areas">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
			/>
			<div className="service-areas-container">
				<h1>Regional South Australia Service Area</h1>
				<p>
					We regularly travel beyond metro Adelaide for home-visit podiatry.
					Regional visits are available by arrangement depending on location and
					scheduling.
				</p>
				<ul>
					<li>Whyalla</li>
					<li>Port Lincoln</li>
					<li>Wallaroo</li>
					<li>Kadina</li>
					<li>Port Pirie</li>
					<li>Port Augusta</li>
					<li>Clare</li>
					<li>Jamestown</li>
					<li>Peterborough</li>
					<li>Victor Harbor</li>
					<li>Goolwa</li>
					<li>Murray Bridge</li>
					<li>Mount Gambier</li>
					<li>Millicent</li>
					<li>Naracoorte</li>
					<li>Berri</li>
					<li>Renmark</li>
					<li>Loxton</li>
					<li>Tanunda</li>
					<li>Nuriootpa</li>
					<li>Angaston</li>
					<li>Port Broughton</li>
					<li>Moonta</li>
					<li>Streaky Bay</li>
					<li>Ceduna</li>
					<li>and more</li>
				</ul>
				<p>
					If you are in a regional area, call{' '}
					<a href="tel:+61468518993">0468 518 993</a> or{' '}
					<Link href="/contact-us">send an enquiry</Link> and we&apos;ll confirm
					availability for your location.
				</p>
				<p>
					Need metro coverage details? View all{' '}
					<Link href="/service-areas">service areas</Link>.
				</p>
			</div>
		</section>
	);
}
