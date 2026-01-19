import Image from 'next/image';
import type { Metadata } from 'next';

import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{ name: 'About Us', url: 'https://www.stride-podiatry.com.au/about-us' },
]);

export const metadata: Metadata = {
	title: 'About Us | Stride Podiatry',
	description:
		'Meet Luke Wheldale of Stride Podiatry. Expert mobile podiatry care with a friendly, patient-first approach across Adelaide.',
	alternates: { canonical: 'https://www.stride-podiatry.com.au/about-us' },
	openGraph: {
		title: 'About Us | Stride Podiatry',
		description:
			'Meet Luke Wheldale of Stride Podiatry. Expert mobile podiatry care with a friendly, patient-first approach across Adelaide.',
		url: 'https://www.stride-podiatry.com.au/about-us',
	},
};

export default function AboutPage() {
	return (
		<div className="about-container">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
			/>
			<div className="about-section">
				<div className="about-text">
					<h1>About Stride Podiatry</h1>
					<p>
						Stride Podiatry is a home-visit service dedicated to
						providing high-quality podiatry care in the comfort of
						your home. We support private patients as well as
						Medicare Chronic Disease Management (CDM/EPC), DVA and
						NDIS participants.
					</p>
					<p>
						We regularly work with older adults, people with
						mobility limitations and those managing chronic
						conditions, and we are experienced coordinating care
						with GPs, support coordinators and families when needed.
					</p>
					<p>
						Our mission is to make foot care accessible and
						comprehensive for people who prefer or require in-home
						visits, from routine care to chronic conditions and
						mobility support.
					</p>
					<p>
						If you’re looking for a trusted, reliable podiatrist in
						Adelaide who comes to you, Stride Podiatry is here to
						help.
					</p>
				</div>
				<Image
					src="/images/profile-pic.webp"
					alt="Stride Podiatry — home-visit podiatry in Adelaide"
					className="profile-photo"
					width={420}
					height={420}
				/>
			</div>

			<div className="about-section">
				<Image
					src="/images/me-casual.jpg"
					alt="Luke Wheldale, Podiatrist"
					className="profile-photo"
					width={420}
					height={420}
				/>
				<div className="about-text">
					<h2>About Luke</h2>
					<p>
						Hi, I’m Luke Wheldale. I’m passionate about delivering
						quality podiatry care and serving the Adelaide
						community. I’m a family man and an active member of my
						local church.
					</p>
					<p>
						When I’m not helping patients, you’ll find me with my
						family, playing guitar, reading or travelling. Finding
						balance helps me bring my best to both work and home.
					</p>
				</div>
			</div>
		</div>
	);
}
