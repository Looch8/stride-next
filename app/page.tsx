import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

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
	return (
		<>
			<section className="hero-section">
					<div className="hero-content">
						<h1 className="title">
							Mobile & Home Visit Podiatrist in Adelaide
						</h1>
						<h2 className="subtitle">
							Stride Podiatry — Trusted Home Podiatry Care
						</h2>
						<p className="hero-subtitle">
							We come to you across Adelaide metro and regional SA.
						</p>
						<div className="hero-cta-group">
							<Link
								href="/booking"
								className="hero-cta-button"
								aria-label="Request a home visit with Stride Podiatry"
							>
								Request a Home Visit
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
				</section>
			<section className="home-container">
				<div className="profile-image">
					<Image
						src="/images/profile-pic.webp"
						alt="Luke Wheldale — Mobile Podiatrist in Adelaide"
						width={350}
						height={525}
						sizes="(max-width: 768px) 100vw, 350px"
					/>
				</div>

				<div className="home-text">
					<div className="welcome-card">
						<h2>Professional Mobile Podiatry Across Adelaide</h2>
						<p className="highlight-text">
							No referral is required for private bookings—
							<strong>
								book a podiatry home visit directly with us
								today!
							</strong>
						</p>
					</div>

					<div className="service-highlight">
						<p>
							We deliver full <strong>podiatry home visit</strong>{' '}
							care, bringing the same services you receive in a
							clinic to your home, workplace or aged care
							facility. That includes{' '}
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
					</div>

					<div className="location-card">
						<h3>Service Areas</h3>
						<p>
							<strong>
								We cover ALL of Adelaide Metro including:
							</strong>
						</p>
						<p>
							Prefer a quick check? See our{' '}
							<Link href="/service-areas">full service areas</Link>{' '}
							list, including regional South Australia by
							arrangement.
						</p>

							<ul className="location-list">
							<li>
								<strong>Northern Adelaide:</strong> Elizabeth,
								Salisbury, Modbury, Tea Tree Gully, Golden
								Grove, Mawson Lakes, Parafield Gardens, Gawler,
								Pooraka, Para Hills
							</li>
							<li>
								<strong>Southern Adelaide:</strong> Noarlunga,
								Marion, Brighton, Glenelg, Hallett Cove,
								Morphett Vale, Reynella, Seaford, Christies
								Beach, Aldinga
							</li>
							<li>
								<strong>Eastern Adelaide:</strong> Norwood,
								Burnside, Unley, Glen Osmond, Magill,
								Kensington, Payneham, Campbelltown, Rostrevor,
								Athelstone
							</li>
							<li>
								<strong>Western Adelaide:</strong> Henley Beach,
								West Lakes, Port Adelaide, Seaton, Findon,
								Woodville, Grange, Fulham, Semaphore, Largs Bay
							</li>
							<li>
								<strong>Central Adelaide:</strong> Adelaide CBD,
								North Adelaide, Prospect, Walkerville, Kent
								Town, Mile End, Bowden, Thebarton, Goodwood,
								Parkside
							</li>
							</ul>
							<p className="contact-note">
							Outside Adelaide Metro?{' '}
							<em>
								We cover regional South Australia by
								arrangement.
							</em>
						</p>
					</div>

					<div className="contact-card">
						<h3>Get in Touch</h3>
						<div className="contact-info">
							<p>
								📞 <strong>Phone:</strong>{' '}
								<a href="tel:+61468518993">0468 518 993</a>
							</p>
							<p>
								📧 <strong>Email:</strong>{' '}
								<a href="mailto:luke@stride-podiatry.com.au">
									luke@stride-podiatry.com.au
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="services-preview">
				<div className="section-content">
					<h2>Our Mobile Podiatry Services</h2>
						<p>
							<Link href="/services/general-podiatry">
								General foot care
							</Link>
							,{' '}
							<Link href="/services/custom-orthotics">
								custom orthotics
							</Link>
							,{' '}
							<Link href="/services/heel-arch-pain">
								foot pain treatment
							</Link>
							,{' '}
							<Link href="/services/ingrown-toenail">
								ingrown toenail care
							</Link>
							,{' '}
							<Link href="/services/diabetes-foot-care">
								diabetes management
							</Link>
							,{' '}
							<Link href="/services/biomechanics-gait">
								biomechanical assessment
							</Link>{' '}
							and more delivered at your home.
						</p>
					<Link href="/services" className="view-all-services">
						View All Services
					</Link>
				</div>
			</section>

			<section className="coverage-section">
				<div className="section-content">
					<h2>We Work With Major Funding Schemes</h2>
					<ul className="insurance-list">
						<li>
							<strong>
								National Disability Insurance Scheme (NDIS)
							</strong>
						</li>
						<li>
							<strong>
								Chronic Disease Management (CDM / Medicare)
							</strong>
						</li>
						<li>
							<strong>Support at Home (SaH)</strong>
						</li>
						<li>
							<strong>
								Department of Veterans’ Affairs (DVA)
							</strong>
						</li>
						<li>
							<strong>Private Health Insurance</strong>
						</li>
					</ul>
					<p className="insurance-note">
						Medicare CDM requires a GP referral. NDIS plan- and
						self-managed accepted. Support at Home is via providers.
						Private patients are always welcome—no referral
						required.
					</p>
				</div>
			</section>

			<section className="faq-preview">
				<div className="section-content">
					<h2>Have Questions?</h2>
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
