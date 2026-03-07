import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import { services } from '@/content/services';

export const metadata: Metadata = {
	title: { absolute: 'Stride Podiatry | Mobile Podiatrist Adelaide' },
	description:
		'Mobile podiatry across Adelaide and regional South Australia. Home visits for ingrown toenails, diabetes care, heel pain, orthotics, NDIS and aged care.',
	keywords: [
		'home visit podiatrist Adelaide',
		'home visit podiatry Adelaide',
		'mobile podiatrist Adelaide',
		'mobile podiatry Adelaide',
	],
	alternates: { canonical: 'https://www.stride-podiatry.com.au/' },
	openGraph: {
		title: 'Stride Podiatry | Mobile Podiatrist Adelaide',
		description:
			'Mobile podiatry across Adelaide and regional South Australia. Home visits for ingrown toenails, diabetes care, heel pain, orthotics, NDIS and aged care.',
		url: 'https://www.stride-podiatry.com.au/',
	},
	twitter: {
		title: 'Stride Podiatry | Mobile Podiatrist Adelaide',
		description:
			'Mobile podiatry across Adelaide and regional South Australia. Home visits for ingrown toenails, diabetes care, heel pain, orthotics, NDIS and aged care.',
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
						<h1 className="title">
							Mobile Podiatry Care in Adelaide
						</h1>
						<p className="hero-subtitle">
							Stride Podiatry provides professional home visits
							for routine care, painful conditions, diabetic foot
							assessments and ongoing support.
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
						<ul className="hero-trust-list" aria-label="Key benefits">
							<li>No referral needed for private bookings</li>
							<li>Adelaide metro coverage with regional visits by arrangement</li>
							<li>NDIS, aged care and Support at Home services</li>
						</ul>
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
						<h2>Professional care with a calm, practical approach</h2>
						<p>
							Stride Podiatry is built around accessible care for
							people who want expert treatment without travel,
							waiting rooms or unnecessary friction.
						</p>
						<p>
							Private patients can book directly, and visits are
							also available for aged care, NDIS and other funded
							arrangements where applicable.
						</p>
					</div>
				</div>

				<div className="home-text">
					<div className="welcome-card">
						<p className="section-kicker">Why people choose Stride</p>
						<h2>Home-visit podiatry designed to feel straightforward</h2>
						<p>
							We deliver full <strong>podiatry home visit</strong>{' '}
							care, bringing the services you would expect in a
							clinic to your home, workplace or aged care
							setting. That includes{' '}
								<Link href="/services/ingrown-toenail">
									ingrown toenail care
								</Link>
								,{' '}
								<Link href="/services/heel-arch-pain">
									heel pain treatment
								</Link>
								,{' '}
								<Link href="/services/diabetes-foot-care">
									diabetic foot assessments
								</Link>
								,{' '}
								<Link href="/services/custom-orthotics">
									custom orthotics
								</Link>
								, and more.
						</p>
						<div className="value-grid">
							<div className="value-card">
								<h3>Convenient care</h3>
								<p>
									Ideal for busy households, reduced mobility,
									recovery periods and ongoing aged care needs.
								</p>
							</div>
							<div className="value-card">
								<h3>Clear treatment plans</h3>
								<p>
									Assessments, treatment and practical advice
									that patients and carers can easily follow.
								</p>
							</div>
							<div className="value-card">
								<h3>Flexible support</h3>
								<p>
									Available for private appointments plus a
									range of funded care pathways.
								</p>
							</div>
						</div>
					</div>

					<div className="service-highlight">
						<p className="section-kicker">Coverage</p>
						<h2>Across Adelaide metro, with regional SA by arrangement</h2>
						<p>
							Prefer a quick suburb check? View the{' '}
							<Link href="/service-areas">full service areas</Link>{' '}
							page for a detailed breakdown.
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
							Outside metro Adelaide? Regional South Australia can
							be arranged case by case.
						</p>
					</div>

					<div className="contact-card contact-card-inline">
						<div>
							<p className="section-kicker">Contact</p>
							<h2>Need to confirm an area or funding option?</h2>
						</div>
						<div className="contact-info">
							<a href="tel:+61468518993">0468 518 993</a>
							<a href="mailto:luke@stride-podiatry.com.au">
								luke@stride-podiatry.com.au
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="services-preview">
				<div className="section-content">
					<p className="section-kicker">Services</p>
					<h2>Popular mobile podiatry services</h2>
					<p className="section-intro">
						Treatment is delivered in-home with the same focus on
						clinical standards, comfort and clear follow-up advice.
					</p>
					<div className="service-preview-grid">
						{featuredServices.map((service) => (
							<Link
								key={service.slug}
								href={`/services/${service.slug}`}
								className="service-preview-card"
							>
								<span className="service-preview-title">
									{service.title}
								</span>
								<span className="service-preview-summary">
									{service.summary}
								</span>
								<span className="service-preview-link">
									Learn more
								</span>
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
					<h2>Need more detail before booking?</h2>
					<p>
						Visit our <Link href="/faq">FAQ Page</Link> for answers
						about services, Medicare, NDIS and more.
					</p>
				</div>
			</section>

			<section className="cta-section">
				<div className="book-now">
					<h2>Ready to Take the First Step?</h2>
					<p>
						Book your <strong>home-visit appointment</strong> today
						and experience expert podiatry care at your convenience.
					</p>
					<Link href="/booking" className="book-now-button">
						Book Now
					</Link>
				</div>
			</section>
		</>
	);
}
