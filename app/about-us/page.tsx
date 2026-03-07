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
	twitter: {
		title: 'About Us | Stride Podiatry',
		description:
			'Meet Luke Wheldale of Stride Podiatry. Expert mobile podiatry care with a friendly, patient-first approach across Adelaide.',
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
						Home-visit podiatry across Adelaide with a calm,
						practical approach for private patients, aged care,
						Support at Home and NDIS clients.
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
						<h2>Mobile podiatry built around accessibility</h2>
						<p>
							Stride Podiatry is a home-visit service dedicated to
							providing high-quality podiatry care in the comfort of
							your home. We support private patients as well as
							Medicare Chronic Disease Management, Support at Home,
							DVA and NDIS participants where applicable.
						</p>
						<p>
							We regularly work with older adults, people with
							mobility limitations and those managing chronic
							conditions, and we are experienced coordinating care
							with GPs, support coordinators, providers and families
							when needed.
						</p>
						<p>
							Our goal is to make foot care more accessible for
							people who prefer or require in-home visits, from
							routine treatment through to chronic condition
							management and mobility support.
						</p>
					</div>
				</div>

				<div className="about-grid about-grid--reverse">
					<div className="about-card">
						<p className="about-card-eyebrow">About Luke</p>
						<h2>Thoughtful, outcomes-focused care</h2>
						<p>
							Luke Wheldale completed his Bachelor of Podiatry at
							the University of South Australia in 2020. Since then
							he has worked across private practice, community care
							and aged care, building a broad clinical foundation in
							home-visit podiatry.
						</p>
						<p>
							He is especially passionate about community podiatry
							and helping people maintain mobility, comfort and
							independence through practical treatment and clear
							advice.
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
