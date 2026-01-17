import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Refer a Patient | Stride Podiatry Adelaide',
	description:
		'Referral information for GPs and coordinators. We accept Medicare CDM, NDIS, Support at Home and aged care referrals for mobile podiatry across Adelaide.',
	alternates: { canonical: 'https://www.stride-podiatry.com.au/referral' },
	openGraph: {
		title: 'Refer a Patient | Stride Podiatry Adelaide',
		description:
			'Referral information for GPs and coordinators. We accept GPMP/TCA (Medicare CDM), NDIS and aged care referrals for mobile podiatry across Adelaide.',
		url: 'https://www.stride-podiatry.com.au/referral',
	},
};

export default function ReferralPage() {
	return (
		<div className="referral-container">
			<h1>Refer a Patient</h1>
			<p>
				If you&apos;re a care coordinator, GP or provider, you can refer
				a patient to Stride Podiatry using our secure online form or by
				downloading a PDF copy.
			</p>

			<section className="form-section">
				<h2>Option 1: Submit Online</h2>
				<p>
					Complete and submit the secure form below. Your referral
					will be sent directly to Stride Podiatry through our online
					system.
				</p>
				<div className="form-container">
					<iframe
						src="https://stride-podiatry.splose.com/public-form/fcd1208d-e801-454b-a248-4ae9d65fd4dd"
						name="embeddableForm"
						scrolling="auto"
						loading="lazy"
						title="Stride Podiatry Referral Form"
					/>
				</div>
			</section>

			<section className="form-section">
				<h2>Option 2: Download PDF Form</h2>
				<p>
					If you prefer, you can download and complete our PDF
					referral form instead.
				</p>
				<p>
					📄 <strong>Download:</strong>{' '}
					<a href="/referral-form.pdf">
						Stride Podiatry Referral Form (PDF)
					</a>
				</p>
				<p>
					📬 Email completed forms to:{' '}
					<a href="mailto:luke@stride-podiatry.com.au">
						luke@stride-podiatry.com.au
					</a>
				</p>
				<p>
					📞 For queries, call <strong>0468 518 993</strong>
				</p>
			</section>
		</div>
	);
}
