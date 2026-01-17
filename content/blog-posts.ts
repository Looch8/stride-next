export type BlogSection = {
	heading: string;
	paragraphs: string[];
	list?: string[];
};

export type BlogPost = {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	description: string;
	intro: string;
	sections: BlogSection[];
	cta: {
		heading: string;
		body: string;
		primaryLabel: string;
		primaryHref: string;
		secondaryLabel: string;
		secondaryHref: string;
	};
};

export const blogPosts: BlogPost[] = [
	{
		slug: 'mobile-home-visit-podiatry-adelaide',
		title: "Home visit podiatry: What to Expect (and who it's for)",
		date: '2026-01-17',
		excerpt:
			'Home-visit podiatry keeps care accessible when travel is tough. Here’s who it suits, what happens in a visit, and how to prepare.',
		description:
			'Learn who podiatry home visits are suited to, what happens during an appointment, how to prepare, and how to book.',
		intro: 'Home-visit podiatry brings professional foot care to your door. It’s designed for people who find clinic visits difficult or inconvenient, while maintaining the same clinical standards you’d expect in a podiatry practice.',
		sections: [
			{
				heading: 'Who home visits are suited to',
				paragraphs: [
					'Home visits are a good option when getting to a clinic is hard, uncomfortable, or unsafe. They can also help carers who need appointments that fit around busy schedules.',
				],
				list: [
					'Older adults who prefer care at home',
					'People with reduced mobility, chronic pain, or balance issues',
					'NDIS participants and Support at Home clients, particularly if travel is tiring or disruptive',
					'Post-operative patients who need temporary support',
					'Anyone who values convenience',
				],
			},
			{
				heading: 'What happens in a typical visit',
				paragraphs: [
					'We complete an assessment, provide treatment, and leave you with clear, practical advice. If orthotics or follow-up care are needed, we organise everything with minimal disruption. Each visit is tailored to the individual, and the focus may vary depending on medical history, mobility, and current concerns.',
				],
				list: [
					'Health history review and goal setting',
					'Foot and lower-limb assessment',
					'Treatment such as nail care, corn and callus removal, or pain management',
					'Footwear advice and mobility tips',
					'Plan for next steps, referrals, or orthotics if required',
				],
			},
			{
				heading: 'How to prepare for your appointment',
				paragraphs: [
					'A well-lit space is usually all that’s needed. We bring the necessary equipment with us. If you have health information or care plans, keep them nearby.',
				],
				list: [
					'A chair with good lighting and enough space for us to work',
					'Any health documents, care plans, or medication lists',
					'Your regular footwear and any orthotics or support aids you use',
				],
			},
			{
				heading: 'Service area notes',
				paragraphs: [
					'We provide mobile podiatry across the Adelaide metro area. Regional South Australia may be available by arrangement — feel free to get in touch if you’re unsure whether we service your area.',
				],
			},
		],
		cta: {
			heading: 'Ready to book a home visit?',
			body: 'Call us for current availability or book online and we will confirm the next suitable time.',
			primaryLabel: 'Book online',
			primaryHref: '/booking',
			secondaryLabel: 'Call 0468 518 993',
			secondaryHref: 'tel:+61468518993',
		},
	},
];
