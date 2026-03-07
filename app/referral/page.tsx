import type { Metadata } from 'next';
import Link from 'next/link';

import { buildBreadcrumbList } from '@/lib/structured-data';

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au/' },
	{ name: 'Referral', url: 'https://www.stride-podiatry.com.au/referral' },
]);

export const metadata: Metadata = {
	title: 'Referrals | Stride Podiatry',
	description:
		'Referral information for GPs and coordinators. We work with Medicare CDM referrals, NDIS plan- and self-managed clients, and Support at Home through providers.',
	alternates: { canonical: 'https://www.stride-podiatry.com.au/referral' },
	openGraph: {
		title: 'Referrals | Stride Podiatry',
		description:
			'Referral information for GPs and coordinators. We work with Medicare CDM referrals, NDIS plan- and self-managed clients, and Support at Home through providers.',
		url: 'https://www.stride-podiatry.com.au/referral',
	},
	twitter: {
		title: 'Referrals | Stride Podiatry',
		description:
			'Referral information for GPs and coordinators. We work with Medicare CDM referrals, NDIS plan- and self-managed clients, and Support at Home through providers.',
	},
};

export default function ReferralPage() {
	return (
		<section className="referral">
			<script
				key="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
			/>
			<div className="referral-container">
				<div className="referral-header">
					<p className="referral-eyebrow">Referral</p>
					<h1>Refer a patient</h1>
					<p className="referral-intro">
						Stride Podiatry accepts referrals from GPs, aged care providers,
						NDIS coordinators, case managers and other health professionals.
						Use the secure online form below or send through the PDF version if
						that better suits your workflow.
					</p>
				</div>

				<div className="referral-grid">
					<div className="referral-card">
						<p className="referral-card-eyebrow">Who we work with</p>
						<h2>Referral pathways we commonly support</h2>
						<ul className="referral-list">
							<li>GP referrals, including Medicare CDM arrangements</li>
							<li>NDIS plan-managed and self-managed participants</li>
							<li>Support at Home and aged care provider referrals</li>
							<li>Residential aged care, support coordination and case management</li>
						</ul>
					</div>

					<div className="referral-card referral-card--support">
						<p className="referral-card-eyebrow">Need help first?</p>
						<h2>Questions before sending a referral?</h2>
						<p>
							If you want to confirm service areas, referral suitability or the
							best pathway for a client, contact us and we can point you in the
							right direction.
						</p>
						<div className="referral-actions">
							<Link href="/contact-us" className="book-now-button">
								Contact us
							</Link>
							<a href="tel:+61468518993" className="hero-cta-secondary">
								Call 0468 518 993
							</a>
						</div>
					</div>
				</div>

				<section className="referral-card referral-card--form">
					<p className="referral-card-eyebrow">Online form</p>
					<h2>Submit a referral securely online</h2>
					<p>
						Complete the form below and it will be sent directly to Stride
						Podiatry through our secure system.
					</p>
					<div className="referral-form-container">
						<iframe
							src="https://stride-podiatry.splose.com/public-form/fcd1208d-e801-454b-a248-4ae9d65fd4dd"
							name="embeddableForm"
							scrolling="auto"
							loading="lazy"
							title="Stride Podiatry Referral Form"
						/>
					</div>
				</section>

				<section className="referral-card referral-card--download">
					<p className="referral-card-eyebrow">PDF option</p>
					<h2>Prefer to send a form manually?</h2>
					<p>
						Download the referral form, complete it, then email it through if
						that better fits your current process.
					</p>
					<div className="referral-links">
						<a href="/referral-form.pdf">Download referral form (PDF)</a>
						<a href="mailto:luke@stride-podiatry.com.au">
							Email completed form to luke@stride-podiatry.com.au
						</a>
						<Link href="/service-areas">Check service areas</Link>
					</div>
				</section>
			</div>
		</section>
	);
}
