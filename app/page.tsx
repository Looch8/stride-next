import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

const orgLD = {
	'@context': 'https://schema.org',
	'@type': 'MedicalBusiness',
	name: 'Stride Podiatry',
	url: 'https://www.stride-podiatry.com.au/',
	telephone: '+61468518993',
	email: 'luke@stride-podiatry.com.au',
	image: 'https://www.stride-podiatry.com.au/images/logo.png',
	areaServed: {
		'@type': 'AdministrativeArea',
		name: 'Adelaide Metropolitan Area',
		address: {
			'@type': 'PostalAddress',
			addressRegion: 'SA',
			addressCountry: 'AU',
		},
	},
	priceRange: '$$$',
	description:
		'Mobile and home-visit podiatry clinic serving Adelaide metro and regional South Australia — General podiatry care, ingrown toenails, diabetic foot care, orthotics and musculoskeletal treatment.',
	slogan: 'Home visit podiatry in Adelaide',
	serviceType: [
		'Home visit podiatrist Adelaide',
		'Mobile podiatrist Adelaide',
		'Home visit podiatry Adelaide',
	],
	availableService: [
		{
			'@type': 'MedicalTherapy',
			name: 'Home Visit Podiatry',
			areaServed: 'Greater Adelaide',
			serviceAudience:
				'Residents needing in-home care, NDIS participants, Support at Home clients',
		},
		{
			'@type': 'MedicalTherapy',
			name: 'Mobile Podiatry for Aged Care & Chronic Conditions',
			areaServed: 'Adelaide Metro',
			serviceAudience:
				'Aged care residents, NDIS participants, private patients, Support at Home clients',
		},
	],
	keywords: [
		'home visit podiatrist Adelaide',
		'home visit podiatry Adelaide',
		'mobile podiatrist Adelaide',
	],
	sameAs: [
		'https://www.facebook.com/profile.php?id=61570588927493',
		'https://www.instagram.com/stride.podiatry/',
	],
};

export const metadata: Metadata = {
	title: 'Stride Podiatry | Mobile Podiatrist Adelaide',
	description:
		'Mobile & home-visit podiatry across Adelaide and regional SA. Expert care for ingrown toenails, heel pain, diabetes, orthotics and aged care.',
	keywords: [
		'home visit podiatrist Adelaide',
		'home visit podiatry Adelaide',
		'mobile podiatrist Adelaide',
		'mobile podiatry Adelaide',
	],
	alternates: { canonical: 'https://www.stride-podiatry.com.au/' },
};

export default function HomePage() {
	return (
		<>
			<script
				key="org-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLD) }}
			/>

			<section className="hero-section">
				<div className="hero-content">
					<h1 className="title">
						Mobile & Home Visit Podiatrist in Adelaide
					</h1>
					<h2 className="subtitle">
						Stride Podiatry — Trusted Home Podiatry Care
					</h2>
					<Link
						href="/booking"
						className="hero-cta-button"
						aria-label="Book a home visit with Stride Podiatry"
					>
						Book Your Home Visit
					</Link>
				</div>
			</section>

			<section className="home-visit-section">
				<div className="section-content">
					<h2>Need a Home Visit Podiatrist in Adelaide?</h2>
					<p>
						We are a dedicated{' '}
						<strong>
							home visit podiatry service for Adelaide and
							surrounding regions
						</strong>
						, helping busy families, aged care residents, NDIS
						participants and anyone who prefers podiatry at home.
						From routine nail and skin care through to complex
						biomechanical assessments, we bring the complete clinic
						experience to your front door anywhere in South
						Australia.
					</p>
					<p>
						Every appointment includes a full assessment plus
						personalised treatment plan. We travel with sterilised
						instruments, and the equipment needed to manage{' '}
						<strong>ingrown toenails</strong>,{' '}
						<strong>diabetic foot checks</strong>,{' '}
						<strong>heel pain</strong> and{' '}
						<strong>custom orthotics</strong> without you needing to
						leave home.
					</p>
					<ul className="home-visit-benefits">
						<li>Same-week availability for Adelaide home visits</li>
						<li>
							Private, CDM/Medicare, DVA, NDIS and Support at Home
							patients welcome
						</li>
						<li>
							We visit houses, retirement villages, and
							residential aged care facilities.
						</li>
					</ul>
				</div>
			</section>

			<section className="home-container">
				<div className="profile-image">
					<Image
						src="/images/profile-pic.webp"
						alt="Luke Wheldale — Mobile Podiatrist in Adelaide"
						width={350}
						height={420}
						priority
					/>
				</div>

				<div className="home-text">
					<div className="welcome-card">
						<h2>Professional Mobile Podiatry Across Adelaide</h2>
						<p className="highlight-text">
							No referral is necessary to see a podiatrist—
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
							<Link href="/services#ingrown-toenails">
								ingrown toenail care
							</Link>
							,{' '}
							<Link href="/services#heel-pain">
								heel pain treatment
							</Link>
							,{' '}
							<Link href="/services#diabetic-assessments">
								diabetic foot assessments
							</Link>
							,{' '}
							<Link href="/services#orthotics">
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
							<em>Contact us — we may still be able to help.</em>
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
						General foot care, custom orthotics, foot pain
						treatment, ingrown toenail care, diabetes management,
						biomechanical assessment and more — delivered at your
						home.
					</p>
					<Link href="/services" className="view-all-services">
						View All Services
					</Link>
				</div>
			</section>

			<section className="coverage-section">
				<div className="section-content">
					<h2>We Accept All Major Funding Schemes</h2>
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
						Documentation from your provider helps us process claims
						quickly. Private patients are always welcome—no referral
						needed.
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
