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
	image?: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
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
		slug: 'can-a-podiatrist-treat-thick-toenails-during-a-home-visit',
		title: 'Can a Podiatrist Treat Thick Toenails During a Home Visit?',
		date: '2026-03-07',
		excerpt:
			'Yes. Thick toenails can usually be treated during a home visit using the same professional tools and approach you would expect in a clinic.',
		description:
			'Learn how thick toenails are treated during a podiatry home visit, including assessment, reduction with domiciliary drills, and when further care may be needed.',
		intro: 'Yes. In most cases, thick toenails can be treated safely and effectively during a podiatry home visit. The treatment is very similar to what you would expect in a clinic setting. We bring professional equipment with us, including domiciliary drills and podiatry instruments, so nails can be reduced carefully and comfortably in your home.',
		image: {
			src: '/images/podiatry-drill-gryphotic-toenail-blog.png',
			alt: 'Podiatrist reducing a thick toenail with a drill during treatment',
			width: 1536,
			height: 1024,
		},
		sections: [
			{
				heading: 'Why thick toenails need proper treatment',
				paragraphs: [
					'Thick toenails are common, especially in older adults and people who have had long-term nail trauma, fungal nail changes, circulation issues, or difficulty reaching their feet safely.',
					'When nails become very thick, they can press on footwear, cause pain, trap debris, and become difficult to manage at home. Trying to cut them yourself can also be risky if the nails are hard, curved, or close to the skin.',
				],
				list: [
					'Pain or pressure in shoes',
					'Difficulty trimming nails safely',
					'Nails that are curved, brittle, or crumbly',
					'Reduced mobility or difficulty reaching the feet',
					'Concerns about skin injury, bleeding, or infection',
				],
			},
			{
				heading: 'How treatment works during a home visit',
				paragraphs: [
					'Home-visit treatment is designed to mirror the standard of care you would expect in a clinic. After assessing the nails and surrounding skin, we use professional podiatry tools to reduce nail thickness and improve comfort.',
					'We bring domiciliary drills and appropriate instruments with us, which allow us to gently file down thickened nails in a controlled way. This helps reduce bulk, smooth rough edges, and make the nails easier to maintain between visits.',
				],
				list: [
					'Assessment of the nail, skin, and circulation',
					'Careful trimming and reduction of thickened nail plate',
					'Use of domiciliary drills to gently debulk the nail',
					'Smoothing sharp or rough edges',
					'Advice on ongoing care and when to book again',
				],
			},
			{
				heading: 'Is the treatment similar to a clinic appointment?',
				paragraphs: [
					'Yes. For routine management of thick toenails, the overall treatment is very similar to a clinic appointment. The main difference is simply that we bring the equipment to you.',
					'For many patients, a home visit is more practical and less stressful than travelling to a clinic, especially when mobility, transport, or caring responsibilities make appointments harder to arrange.',
				],
				list: [
					'Professional podiatry instruments brought to your home',
					'Clinical assessment before treatment begins',
					'Care tailored to your comfort, mobility, and medical history',
					'Clear explanation of what is being done and why',
				],
			},
			{
				heading: 'When extra care or referral may be needed',
				paragraphs: [
					'Some thick nails are linked to fungal infection, repeated trauma, or significant nail deformity such as gryphotic nails. In these cases, ongoing treatment may be recommended rather than a once-off trim.',
					'If there are signs of infection, skin breakdown, significant pain, or concerns relating to circulation or diabetes, we may recommend additional management or liaise with your GP or other healthcare providers where appropriate.',
				],
				list: [
					'Very curved or gryphotic nails',
					'Suspected fungal nail changes',
					'Painful pressure on adjacent toes or skin',
					'Redness, swelling, or signs of infection',
					'High-risk foot concerns such as diabetes or poor circulation',
				],
			},
			{
				heading: 'Who home treatment is especially helpful for',
				paragraphs: [
					'Home visits are particularly helpful for people who cannot safely manage nail care on their own or who find it difficult to attend a clinic.',
					'They are also useful for family members and carers arranging support for an older parent or someone with limited mobility.',
				],
				list: [
					'Older adults living at home',
					'People with reduced mobility or balance concerns',
					'NDIS participants and Support at Home clients',
					'People recovering from illness or surgery',
					'Family members organising care for a loved one',
				],
			},
		],
		cta: {
			heading: 'Need help with thick toenails at home?',
			body: 'Request an appointment online or call us to arrange a home visit for yourself or a family member.',
			primaryLabel: 'Request appointment',
			primaryHref: '/booking',
			secondaryLabel: 'Call 0468 518 993',
			secondaryHref: 'tel:+61468518993',
		},
	},
	{
		slug: 'mobile-home-visit-podiatry-adelaide',
		title: "Home visit podiatry: What to Expect (and who it's for)",
		date: '2026-01-17',
		excerpt:
			'Home-visit podiatry keeps care accessible when travel is tough. Here’s who it suits, what happens in a visit, and how to prepare.',
		description:
			'Learn who podiatry home visits are suited to, what happens during an appointment, how to prepare, and how to book.',
		intro: 'Home-visit podiatry brings professional foot care to your door. It’s designed for people who find clinic visits difficult or inconvenient, while maintaining the same clinical standards you’d expect in a podiatry practice.',
		image: {
			src: '/images/mobile-podiatrist-home-visit-adelaide.png',
			alt: 'Podiatrist providing a home visit appointment in Adelaide',
			width: 1200,
			height: 800,
		},
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
	{
		slug: 'why-regular-podiatry-is-important-for-older-adults-living-at-home',
		title: 'Why Regular Podiatry Is Important for Older Adults Living at Home',
		date: '2026-02-26',
		excerpt:
			'Regular podiatry helps older adults stay mobile, stable, and independent at home by preventing small foot issues from becoming bigger health risks.',
		description:
			'Learn why ongoing podiatry care matters for older adults at home, including falls prevention, comfort, and independence.',
		intro: 'Foot health plays an important role in mobility, balance, and independence. As we age, changes in circulation, skin integrity, joint health, and sensation can increase the risk of pain, wounds, and falls. Regular podiatry helps identify small problems early, before they become larger issues that affect safety and quality of life.',
		image: {
			src: '/images/regular-podiatry-older-adults-home-visits-adelaide.png',
			alt: 'Mobile podiatrist treating an older adult at home in Adelaide',
			width: 1536,
			height: 1024,
		},
		sections: [
			{
				heading: 'Why Foot Health Matters More With Age',
				paragraphs: [
					'Ageing affects the feet in several ways. Skin often becomes thinner, nails can thicken, joints may stiffen, and circulation can reduce over time.',
					'Conditions such as diabetes, arthritis, and peripheral vascular disease can further increase risk, especially when changes in feet are not picked up early.',
				],
				list: [
					'Thickened or fungal nails',
					'Corns and callus that cause discomfort',
					'Reduced sensation or numbness',
					'Foot deformities such as bunions or claw toes',
					'Heel or forefoot pain affecting walking',
				],
			},
			{
				heading: 'Falls Risk and Foot Health',
				paragraphs: [
					'Falls are one of the most significant health risks for older Australians. While strength and balance are key factors, foot pain and poor footwear are often overlooked contributors.',
					'Podiatry treatment can reduce painful pressure points, improve gait comfort, and support safer movement day to day.',
				],
				list: [
					'Reducing painful pressure points',
					'Managing nail and skin conditions that alter gait',
					'Advising on appropriate footwear',
					'Assessing foot mechanics and balance',
					'Prescribing orthotics where indicated',
				],
			},
			{
				heading: 'Benefits of Regular Home Visits',
				paragraphs: [
					'For many older adults, travelling to a clinic can be tiring or impractical. Mobile podiatry delivers care in a familiar home environment, reducing disruption and stress.',
					'Regular visits also support ongoing monitoring of skin, circulation, and nail health so changes can be managed early.',
				],
				list: [
					'People with reduced mobility or balance concerns',
					'Those recovering from illness or surgery',
					'Support at Home or NDIS participants',
					'Individuals who rely on carers for transport',
				],
			},
			{
				heading: 'What Ongoing Care May Involve',
				paragraphs: [
					'Each appointment is tailored to the individual. The goal is to maintain comfort, prevent complications, and support independence at home.',
				],
				list: [
					'Nail trimming and management of thickened nails',
					'Corn and callus reduction',
					'Diabetic foot checks',
					'Skin and circulation assessment',
					'Footwear advice',
					'Orthotic review or prescription if required',
				],
			},
			{
				heading: 'When to Consider Booking',
				paragraphs: [
					'Early intervention can prevent more complex problems down the track. Consider booking if you notice pain, skin changes, nail changes, or reduced confidence when walking.',
				],
				list: [
					'New or increasing foot pain',
					'Changes in nail thickness or colour',
					'Skin breakdown or slow-healing areas',
					'Difficulty cutting nails safely',
					'Reduced confidence when walking',
				],
			},
		],
		cta: {
			heading: 'Need support with foot care at home?',
			body: 'Book a home visit or contact us to discuss regular podiatry care for yourself or a family member.',
			primaryLabel: 'Book a home visit',
			primaryHref: '/booking',
			secondaryLabel: 'Contact us',
			secondaryHref: '/contact-us',
		},
	},
];
