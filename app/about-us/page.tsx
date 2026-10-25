import Image from 'next/image';
import type { Metadata } from 'next';

import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://stridepodiatry.com.au' },
	{ name: 'About Us', url: 'https://stridepodiatry.com.au/about-us' },
]);

export const metadata: Metadata = {
	title: 'About Stride Podiatry | Mobile Podiatrists Adelaide',
	description:
		'Stride Podiatry is an Adelaide mobile podiatry service run by podiatrists, with a team providing home visits for private patients, aged care and funded care.',
	alternates: { canonical: 'https://stridepodiatry.com.au/about-us' },
	openGraph: {
		title: 'About Stride Podiatry | Mobile Podiatrists Adelaide',
		description:
			'Stride Podiatry is an Adelaide mobile podiatry service run by podiatrists, with a team providing home visits for private patients, aged care and funded care.',
		url: 'https://stridepodiatry.com.au/about-us',
	},
	twitter: {
		title: 'About Stride Podiatry | Mobile Podiatrists Adelaide',
		description:
			'Stride Podiatry is an Adelaide mobile podiatry service run by podiatrists, with a team providing home visits for private patients, aged care and funded care.',
	},
};

export default function AboutPage() {
	return (
		<section className="about">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbsLd),
				}}
			/>
			<div className="about-container">
				<div className="about-header">
					<p className="about-eyebrow">About</p>
					<h1>Meet Stride Podiatry</h1>
					<p>
						Stride Podiatry is a mobile podiatry service based in Adelaide.
						Our team of podiatrists provides home visits for private
						patients, aged care residents and funded care clients.
					</p>
				</div>

				<div className="about-grid">
					<div className="about-photo-card">
						<Image
							src="/images/luke-arriving-home-visit.webp"
							alt="Stride Podiatry podiatrist arriving for a home visit in Adelaide"
							className="about-photo"
							width={420}
							height={280}
							sizes="(max-width: 768px) 100vw, 420px"
							quality={72}
						/>
					</div>

					<div className="about-card">
						<p className="about-card-eyebrow">The practice</p>
						<h2>Podiatry that comes to you</h2>
						<p>
							Stride Podiatry provides mobile foot care for adults and older
							adults across Adelaide. We support a wide range of needs, from
							routine nail and skin care to diabetes foot checks and ongoing
							pain management, with treatment matched to the person in front
							of us.
						</p>
						<p>
							Our service is built to remove the barriers that make foot care
							hard to access: transport, parking, waiting rooms and the effort
							of getting out of the house. Being seen at home takes the travel
							and the waiting out of an appointment, which matters most for
							people with limited mobility and for families already
							coordinating other care.
						</p>
						<p>
							We see private patients and also work with Medicare Chronic
							Disease Management, Support at Home, DVA and NDIS where
							applicable, coordinating with GPs, support coordinators,
							providers and families when needed.
						</p>
						<p>
							The aim is straightforward treatment, clear advice and care that
							is easy to keep up with over time.
						</p>
					</div>
				</div>

				<div className="about-card about-card--wide">
					<p className="about-card-eyebrow">Our team</p>
					<h2>A team of podiatrists</h2>
					<p>
						Stride Podiatry has grown from a single practitioner into a team
						of podiatrists covering Adelaide metro, with regional South
						Australia by arrangement. Every visit is carried out by a
						qualified podiatrist registered with AHPRA.
					</p>
					<p>
						Working as a team means appointments are easier to schedule,
						regular care stays on a consistent cycle, and cover is available
						when your usual podiatrist is away. Clinical notes stay with the
						practice, so whoever visits knows your history and your treatment
						plan.
					</p>
				</div>

				<div className="about-grid about-grid--reverse">
					<div className="about-card">
						<p className="about-card-eyebrow">Director</p>
						<h2>Luke Wheldale, Director</h2>
						<p>
							Luke Wheldale is the director of Stride Podiatry. He completed
							his Bachelor of Podiatry at the University of South Australia
							in 2020 and has since worked across private practice, community
							care and aged care.
						</p>
						<p>
							He has a strong interest in community podiatry, diabetic foot
							care, and painful skin and nail conditions, and sets the
							standard of care the team works to.
						</p>
					</div>

					<div className="about-photo-card">
						<Image
							src="/images/profile-pic.webp"
							alt="Luke Wheldale, Director of Stride Podiatry"
							className="about-photo about-photo--portrait"
							width={420}
							height={630}
							sizes="(max-width: 768px) 100vw, 420px"
							quality={76}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
