import Image from 'next/image';
import type { Metadata } from 'next';

import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au' },
	{ name: 'About Us', url: 'https://www.stride-podiatry.com.au/about-us' },
]);

export const metadata: Metadata = {
	title: 'Luke Wheldale | Podiatrist Adelaide | Stride Podiatry',
	description:
		'Meet Luke Wheldale, the podiatrist behind Stride Podiatry. Home-visit podiatry across Adelaide for private patients, aged care and funded care.',
	alternates: { canonical: 'https://www.stride-podiatry.com.au/about-us' },
	openGraph: {
		title: 'Luke Wheldale | Podiatrist Adelaide | Stride Podiatry',
		description:
			'Meet Luke Wheldale, the podiatrist behind Stride Podiatry. Home-visit podiatry across Adelaide for private patients, aged care and funded care.',
		url: 'https://www.stride-podiatry.com.au/about-us',
	},
	twitter: {
		title: 'Luke Wheldale | Podiatrist Adelaide | Stride Podiatry',
		description:
			'Meet Luke Wheldale, the podiatrist behind Stride Podiatry. Home-visit podiatry across Adelaide for private patients, aged care and funded care.',
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
						Stride Podiatry is a mobile podiatry service based in Adelaide,
						providing home visits for private patients, aged care and funded
						care clients.
					</p>
				</div>

				<div className="about-grid">
					<div className="about-photo-card">
						<Image
							src="/images/profile-pic.webp"
							alt="Stride Podiatry — home-visit podiatry in Adelaide"
							className="about-photo about-photo--portrait"
							width={420}
							height={630}
							sizes="(max-width: 768px) 100vw, 420px"
							quality={72}
						/>
					</div>

					<div className="about-card">
						<p className="about-card-eyebrow">The practice</p>
						<h2>Podiatry that comes to you</h2>
						<p>
							Stride Podiatry is built around home visits. We see private
							patients and also work with Medicare Chronic Disease
							Management, Support at Home, DVA and NDIS where applicable.
						</p>
						<p>
							A lot of our work involves older adults, people with mobility
							issues, and clients who need regular foot care at home. We also
							coordinate with GPs, support coordinators, providers and
							families when needed.
						</p>
						<p>
							The aim is straightforward treatment, clear advice and a service
							that fits around the patient instead of the other way around.
						</p>
					</div>
				</div>

				<div className="about-grid about-grid--reverse">
					<div className="about-card">
						<p className="about-card-eyebrow">About Luke</p>
						<h2>About Luke Wheldale</h2>
						<p>
							Luke Wheldale completed his Bachelor of Podiatry at
							the University of South Australia in 2020. Since then
							he has worked across private practice, community care
							and aged care.
						</p>
						<p>
							He has a strong interest in community podiatry, routine foot
							care, painful skin and nail conditions, and helping people stay
							comfortable and mobile at home.
						</p>
						<p>
							Outside of work, Luke enjoys time with his family,
							playing guitar, reading and travelling.
						</p>
					</div>

					<div className="about-photo-card">
						<Image
							src="/images/me-casual.jpg"
							alt="Luke Wheldale, Podiatrist"
							className="about-photo"
							width={420}
							height={310}
							sizes="(max-width: 768px) 100vw, 420px"
							quality={76}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
