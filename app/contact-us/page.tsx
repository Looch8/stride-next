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
	url: 'https://www.stride-podiatry.com.au/contact-us/',
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
	title: 'Contact Stride Podiatry | Mobile Podiatrist Adelaide',
	description:
		'Contact Stride Podiatry to arrange a mobile podiatry visit in Adelaide. Call 0468 518 993 or email luke@stride-podiatry.com.au.',
	alternates: { canonical: 'https://www.stride-podiatry.com.au/contact-us' },
	openGraph: {
		title: 'Contact Stride Podiatry | Mobile Podiatrist Adelaide',
		description:
			'Contact Stride Podiatry to arrange a mobile podiatry visit in Adelaide. Call 0468 518 993 or email luke@stride-podiatry.com.au.',
		url: 'https://www.stride-podiatry.com.au/contact-us',
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
					<h1>Contact Stride Podiatry</h1>
					<p>
						Have a question? Need more information? We&apos;re here
						to help!
					</p>
				</div>

				<div className="contact-grid contact-grid--single">
					<div className="contact-panel contact-panel--hero">
						<div className="contact-hero-actions">
							<div>
								<h2>Call or text</h2>
								<a
									className="contact-link-primary"
									href="tel:+61468518993"
								>
									0468 518 993
								</a>
								<p className="contact-muted">
									Fastest way to confirm availability or ask a
									quick question.
								</p>
							</div>
							<a
								className="contact-call-button"
								href="tel:+61468518993"
							>
								Call now
							</a>
						</div>
					</div>

					<div className="contact-panel contact-panel--form">
						<h2>Send a quick message</h2>
						<p className="contact-muted">
							Prefer email? Share your details and we&apos;ll be
							in touch.
						</p>
						<ContactForm />
					</div>

					<div className="contact-panel contact-panel--details">
						<div className="contact-block">
							<h3>Email</h3>
							<a
								className="contact-link-primary"
								href="mailto:luke@stride-podiatry.com.au"
							>
								luke@stride-podiatry.com.au
							</a>
						</div>

						<div className="contact-block">
							<h3>Service area</h3>
							<p>Adelaide metro and regional South Australia.</p>
							<p className="contact-muted">
								Not sure if we cover your suburb? Call and
								we&apos;ll confirm.
							</p>
						</div>

						<div className="contact-block">
							<h3>Hours</h3>
							<p>Monday to Friday, 8:00am–5:00pm</p>
						</div>

						<div className="contact-block">
							<h3>FAQs</h3>
							<p>
								Before you call, visit our{' '}
								<Link href="/faq">FAQ page</Link> for quick
								answers.
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
									>
										<SocialIcon name={link.icon} />
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
