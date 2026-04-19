import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import { services } from '@/content/services';

export const metadata: Metadata = {
	title: {
		absolute: 'Stride Podiatry | Mobile Podiatrist Adelaide',
	},
	description:
		'Home-visit podiatry across Adelaide for routine care, foot pain, ingrown toenails, NDIS, DVA, aged care and Support at Home.',
	keywords: [
		'home visit podiatrist Adelaide',
		'home visit podiatry Adelaide',
		'mobile podiatrist Adelaide',
		'mobile podiatry Adelaide',
	],
	alternates: { canonical: 'https://www.stride-podiatry.com.au' },
	openGraph: {
		siteName: 'Stride Podiatry',
		title: 'Stride Podiatry | Mobile Podiatrist Adelaide',
		description:
			'Home-visit podiatry across Adelaide for routine care, foot pain, ingrown toenails, NDIS, DVA, aged care and Support at Home.',
		url: 'https://www.stride-podiatry.com.au',
	},
	twitter: {
		title: 'Stride Podiatry | Mobile Podiatrist Adelaide',
		description:
			'Home-visit podiatry across Adelaide for routine care, foot pain, ingrown toenails, NDIS, DVA, aged care and Support at Home.',
	},
};

export default function HomePage() {
	const featuredServices = services.slice(0, 6);
	const serviceAreas = [
		{
			title: 'Northern Adelaide',
			suburbs:
				'Elizabeth, Salisbury, Modbury, Tea Tree Gully, Golden Grove and surrounding suburbs.',
		},
		{
			title: 'Southern Adelaide',
			suburbs:
				'Marion, Brighton, Glenelg, Hallett Cove, Reynella, Seaford and nearby areas.',
		},
		{
			title: 'Eastern Adelaide',
			suburbs:
				'Norwood, Burnside, Unley, Magill, Payneham, Campbelltown and surrounds.',
		},
		{
			title: 'Western Adelaide',
			suburbs:
				'Henley Beach, West Lakes, Port Adelaide, Woodville, Findon, Fulham and more.',
		},
	];

	return (
		<>
			<section className="hero-section">
				<div className="hero-background" aria-hidden="true">
					<Image
						src="/images/hero-bg.webp"
						alt=""
						fill
						priority
						fetchPriority="high"
						sizes="100vw"
						quality={72}
					/>
				</div>
				<div className="hero-overlay" aria-hidden="true" />
				<div className="hero-content hero-shell">
					<div className="hero-copy">
						<p className="hero-eyebrow">
							For homes, aged care and supported living
						</p>
						<h1 className="title">Mobile Podiatry Care in Adelaide</h1>
						<p className="hero-subtitle">
							Home visits for routine foot care, foot pain, diabetic foot
							checks and ongoing podiatry support.
						</p>
						<div className="hero-cta-group">
							<Link
								href="/booking"
								className="hero-cta-button"
								aria-label="Request an appointment with Stride Podiatry"
							>
								Request Appointment
							</Link>
							<a
								href="tel:+61468518993"
								className="hero-cta-secondary"
								aria-label="Call Stride Podiatry"
							>
								Call 0468 518 993
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="home-container">
				<div className="intro-profile">
					<div className="profile-image">
						<Image
							src="/images/profile-pic.webp"
							alt="Luke Wheldale — Mobile Podiatrist in Adelaide"
							width={350}
							height={525}
							sizes="(max-width: 480px) 220px, (max-width: 768px) 280px, (max-width: 1200px) 320px, 350px"
							quality={72}
						/>
					</div>
					<div className="profile-card">
						<p className="section-kicker">Your podiatrist</p>
						<h2>Calm, practical podiatry at home</h2>
						<p>
							<Link href="/about-us">Stride Podiatry</Link> provides podiatry
							home visits across Adelaide, so treatment is easier to organise
							when getting to a clinic is inconvenient.
						</p>
						<p>
							Private patients can book directly — <Link href="/fees">see fees</Link>. Visits are also available
							for{' '}
							<Link href="/services/aged-care-podiatry">aged care</Link>,{' '}
							<Link href="/services/ndis-podiatry">NDIS</Link>,{' '}
							<Link href="/services/dva-podiatry">DVA</Link> and{' '}
							<Link href="/services/support-at-home-podiatry">
								Support at Home
							</Link>{' '}
							arrangements where applicable.
						</p>
					</div>
				</div>

				<div className="home-text">
					<div className="welcome-card">
						<p className="section-kicker">Why people choose Stride</p>
						<h2>Home visits that are easy to organise</h2>
						<p>
							We provide treatment at home, in aged care, and in supported
							living. Common reasons people book include{' '}
							<Link href="/services/ingrown-toenail">ingrown toenail care</Link>
							, <Link href="/services/heel-arch-pain">heel pain treatment</Link>
							,{' '}
							<Link href="/services/diabetes-foot-care">
								diabetic foot assessments
							</Link>
							, <Link href="/services/custom-orthotics">custom orthotics</Link>{' '}
							and routine foot care.
						</p>
						<div className="value-grid">
							<div className="value-card">
								<h3>Care that comes to you</h3>
								<p>
									Useful for reduced mobility, recovery periods, busy homes
									and regular aged care visits.
								</p>
							</div>
							<div className="value-card">
								<h3>Clear treatment plans</h3>
								<p>
									Straightforward treatment and advice patients and carers can
									follow.
								</p>
							</div>
							<div className="value-card">
								<h3>Private and funded care</h3>
								<p>
									Private appointments are available, along with{' '}
									<Link href="/services/ndis-podiatry">NDIS</Link>,{' '}
									<Link href="/services/dva-podiatry">DVA</Link> and{' '}
									<Link href="/services/support-at-home-podiatry">
										Support at Home
									</Link>
									.
								</p>
							</div>
						</div>
					</div>

					<div className="service-highlight">
						<p className="section-kicker">Coverage</p>
						<h2>Across Adelaide metro, with regional SA by arrangement</h2>
						<p>
							Check the <Link href="/service-areas">service areas</Link> page
							to confirm suburb coverage for home visits.
						</p>
						<div className="area-grid">
							{serviceAreas.map((area) => (
								<div key={area.title} className="area-card">
									<h3>{area.title}</h3>
									<p>{area.suburbs}</p>
								</div>
							))}
						</div>
						<p className="contact-note">
							Outside metro Adelaide? Regional South Australia is available by
							arrangement.
						</p>
					</div>
				</div>
			</section>

			<section className="services-preview">
				<div className="section-content">
					<p className="section-kicker">Services</p>
					<h2>Popular mobile podiatry services</h2>
					<p className="section-intro">
						The main services people look for when they need a podiatrist to
						come to them.
					</p>
					<div className="service-preview-grid">
						{featuredServices.map((service) => (
							<Link
								key={service.slug}
								href={`/services/${service.slug}`}
								className="service-preview-card"
							>
								<span className="service-preview-title">{service.title}</span>
								<span className="service-preview-summary">
									{service.summary}
								</span>
								<span className="service-preview-link">Learn more</span>
							</Link>
						))}
					</div>
					<Link href="/services" className="view-all-services">
						View all services
					</Link>
				</div>
			</section>

			<section className="faq-preview">
				<div className="section-content">
					<p className="section-kicker">Questions</p>
					<h2>Questions about bookings, referrals or funding?</h2>
					<p>
						Visit the <Link href="/faq">FAQ page</Link> for quick answers
						about Medicare, NDIS, DVA, Support at Home and home visits.
					</p>
				</div>
			</section>

			<section className="cta-section">
				<div className="book-now">
					<h2>Need a podiatrist to come to you?</h2>
					<p>
						Request a <strong>home visit</strong>, or get in touch first if
						you want to check your suburb, referral pathway or funding option.
					</p>
					<Link href="/booking" className="book-now-button">
						Request a Home Visit
					</Link>
				</div>
			</section>
		</>
	);
}
