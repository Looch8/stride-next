import type { Metadata } from 'next';

import Link from 'next/link';

import ContactForm from '@/components/contact-form';
import SocialIcon from '@/components/social-icon';
import { socialLinks } from '@/content/social-links';
import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{ name: 'Contact', url: 'https://www.stride-podiatry.com.au/contact-us' },
]);

const contactLD = {
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	url: 'https://www.stride-podiatry.com.au/contact-us',
	mainEntity: {
		'@type': 'MedicalBusiness',
		name: 'Stride Podiatry',
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'AU',
			addressRegion: 'SA',
			addressLocality: 'Adelaide',
		},
		telephone: '+61468518993',
		email: 'luke@stride-podiatry.com.au',
		areaServed: 'Adelaide',
	},
};

export const metadata: Metadata = {
	title: 'Contact Us | Stride Podiatry',
	description:
		'Contact Stride Podiatry to arrange a mobile podiatry visit in Adelaide. Call 0468 518 993 or email luke@stride-podiatry.com.au.',
	alternates: { canonical: 'https://www.stride-podiatry.com.au/contact-us' },
	openGraph: {
		title: 'Contact Us | Stride Podiatry',
		description:
			'Contact Stride Podiatry to arrange a mobile podiatry visit in Adelaide. Call 0468 518 993 or email luke@stride-podiatry.com.au.',
		url: 'https://www.stride-podiatry.com.au/contact-us',
	},
	twitter: {
		title: 'Contact Us | Stride Podiatry',
		description:
			'Contact Stride Podiatry to arrange a mobile podiatry visit in Adelaide. Call 0468 518 993 or email luke@stride-podiatry.com.au.',
	},
};

export default function ContactPage() {
	return (
		<section className="contact">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbsLd),
				}}
			/>
			<script
				key="contact-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLD) }}
			/>
			<div className="contact-container">
				<div className="contact-header">
					<p className="contact-eyebrow">Contact</p>
					<h1>Contact Stride Podiatry</h1>
					<p>
						Call, email or send a quick message to arrange mobile
						podiatry care across Adelaide.
					</p>
				</div>

				<div className="contact-grid contact-grid--single">
					<div className="contact-panel contact-panel--hero">
						<div className="contact-hero-copy">
							<div>
								<p className="contact-eyebrow">Fastest option</p>
								<h2>Call or text for availability</h2>
								<p className="contact-lead">
									We can quickly confirm suburbs, funding pathways
									and suitable appointment times.
								</p>
							</div>
							<div className="contact-hero-actions">
								<div className="contact-stat-card">
									<span className="contact-stat-label">Phone</span>
									<a
										className="contact-link-primary"
										href="tel:+61468518993"
									>
										0468 518 993
									</a>
									<p className="contact-muted">
										Fastest way to organise a visit.
									</p>
								</div>
								<div className="contact-stat-card">
									<span className="contact-stat-label">Email</span>
									<a
										className="contact-link-primary"
										href="mailto:luke@stride-podiatry.com.au"
									>
										luke@stride-podiatry.com.au
									</a>
									<p className="contact-muted">
										Useful for referrals or longer enquiries.
									</p>
								</div>
							</div>
						</div>
						<div className="contact-hero-cta">
							<a
								className="contact-call-button"
								href="tel:+61468518993"
							>
								Call 0468 518 993
							</a>
						</div>
					</div>

					<div className="contact-content-grid">
						<div className="contact-panel contact-panel--form">
							<p className="contact-eyebrow">Message</p>
							<h2>Send a quick message</h2>
							<p className="contact-muted">
								Prefer email? Share your details and we&apos;ll be
								in touch.
							</p>
							<ContactForm />
						</div>

						<div className="contact-panel contact-panel--details">
							<div className="contact-block">
								<h3>Service area</h3>
								<p>Adelaide metro and regional South Australia by arrangement.</p>
								<p className="contact-muted">
									Not sure if we cover your suburb? Call and
									we&apos;ll confirm.
								</p>
							</div>

							<div className="contact-block">
								<h3>Hours</h3>
								<p>Monday to Friday, 8:00am to 5:00pm</p>
							</div>

							<div className="contact-block">
								<h3>Helpful links</h3>
								<p>
									Read our <Link href="/faq">FAQ page</Link> for quick
									answers, or use the booking form if you&apos;re ready to
									request an appointment.
								</p>
							</div>

							<div className="contact-block">
								<h3>Social</h3>
								<div className="social-links">
									{socialLinks.map((link) => (
										<a
											key={link.href}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={link.label}
											className="contact-social-link"
										>
											<SocialIcon name={link.icon} />
											<span>{link.label}</span>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
