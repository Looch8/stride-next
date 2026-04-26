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
		slug: 'how-often-should-you-see-a-podiatrist',
		title: 'How Often Should You See a Podiatrist? A Guide for Older Adults and Home-Visit Patients',
		date: '2026-04-26',
		excerpt:
			'There is no single answer — how often depends on your health, foot condition and how well you can manage care between visits.',
		description:
			'How often older adults and home-visit patients should see a podiatrist, including guidance for routine care, ongoing conditions and knowing when to book sooner.',
		intro: 'How often you should see a podiatrist depends on your health, mobility and what is going on with your feet. For some people, once or twice a year is enough. For others — particularly older adults, people with diabetes or those who find self-care difficult — regular visits every six to eight weeks make a noticeable difference.',
		image: {
			src: '/images/footcare_at_home.png',
			alt: 'Podiatrist providing foot care at home for an older adult',
			width: 1672,
			height: 941,
		},
		sections: [
			{
				heading: 'Why there is no universal answer',
				paragraphs: [
					'Podiatry visits are not like a fixed annual check-up. The right interval depends on what your feet actually need and how well problems can be managed between appointments.',
					'Someone with healthy feet and no difficulty reaching them may only need to come in when something changes. Someone with thickening nails, reduced sensation, or diabetes needs more consistent monitoring.',
				],
			},
			{
				heading: 'Every 6 to 8 weeks: routine care for older adults',
				paragraphs: [
					'For many older adults living at home, a visit every six to eight weeks works well. This allows nails to be trimmed safely, callus to be managed before it becomes painful, and any skin changes to be caught early.',
					'This interval is also practical for people who find it difficult to manage their own feet — whether due to reduced mobility, poor eyesight or trouble bending.',
				],
				list: [
					'Nails that grow quickly or thicken easily',
					'Callus or corns that return between visits',
					'Difficulty trimming your own nails safely',
					'Reduced mobility or flexibility',
					'Skin that bruises or breaks down easily',
				],
			},
			{
				heading: 'More frequent visits for ongoing conditions',
				paragraphs: [
					'Some conditions require closer monitoring. People with diabetes, peripheral vascular disease or peripheral neuropathy benefit from more regular checks, as small changes in the skin or circulation can progress quickly if unnoticed.',
					'NDIS and Support at Home clients often have visit frequency built into their care plan. If you are unsure whether your plan covers regular podiatry, it is worth checking with your coordinator.',
				],
				list: [
					'Diabetes with foot involvement or reduced sensation',
					'Poor circulation or peripheral vascular disease',
					'Active wounds, ulcers or skin breakdown',
					'Fungal nail infection requiring ongoing treatment',
					'Painful foot deformities affecting daily walking',
				],
			},
			{
				heading: 'Annual or as-needed visits for lower-risk patients',
				paragraphs: [
					'If your feet are generally healthy and you can manage routine care yourself, an annual visit or booking when something changes is often enough.',
					'A yearly check can still be useful — it gives you a chance to ask about footwear, any new aches, or changes you have noticed but not acted on.',
				],
			},
			{
				heading: 'Signs you should book sooner rather than later',
				paragraphs: [
					'Do not wait for the next scheduled visit if you notice any of the following. These are worth getting looked at promptly.',
				],
				list: [
					'A new wound, blister, or area of skin breakdown that has not healed in a few days',
					'Increased pain in the heel, ball of the foot or toes',
					'A nail that has become ingrown, infected or very painful',
					'Numbness, tingling or a change in sensation in the feet',
					'Redness or swelling that is getting worse',
				],
			},
			{
				heading: 'How home visits make regular care easier',
				paragraphs: [
					'For older adults and people with limited mobility, keeping up with regular podiatry can be the hard part. Home visits remove the need to organise transport or wait in a clinic.',
					'Because we come to you, it is easier to keep appointments consistent — which matters more than the exact interval.',
				],
			},
		],
		cta: {
			heading: 'Not sure how often you should be seen?',
			body: 'Get in touch to discuss what makes sense for your situation, or request a home visit to get started.',
			primaryLabel: 'Request a home visit',
			primaryHref: '/booking',
			secondaryLabel: 'Call 0468 518 993',
			secondaryHref: 'tel:+61468518993',
		},
	},
	{
		slug: 'can-a-podiatrist-treat-thick-toenails-during-a-home-visit',
		title: 'Can a Podiatrist Treat Thick Toenails During a Home Visit?',
		date: '2026-03-07',
		excerpt:
			'Yes. Thick toenails can usually be treated during a home visit with the same tools used in clinic.',
		description:
			'How thick toenails are treated during a podiatry home visit, including nail reduction and when extra care may be needed.',
		intro: 'Yes. Thick toenails can usually be treated during a home visit. We bring the same equipment used for routine clinic care, including drills and podiatry instruments, so nails can be reduced safely at home.',
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
					'Thick toenails are common, especially in older adults and in people with long-term nail trauma, fungal nail changes, circulation issues or difficulty reaching their feet.',
					'When nails become very thick, they can press on shoes, cause pain and become hard to manage safely at home.',
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
					'After checking the nails, skin and circulation, we use podiatry tools to reduce the nail thickness and improve comfort.',
					'Portable drills and instruments let us file thick nails down in a controlled way, smooth rough edges and make them easier to manage between visits.',
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
					'Yes. For routine thick toenail care, treatment is much the same as it would be in clinic. The main difference is that we bring the equipment to you.',
					'For many people, a home visit is easier than organising transport or getting to a clinic.',
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
					'Some thick nails are linked to fungal infection, repeated trauma or marked nail deformity such as gryphotic nails. In these cases, ongoing treatment may be better than a once-off trim.',
					'If there are signs of infection, skin breakdown, significant pain, or concerns related to circulation or diabetes, extra care or referral may be needed.',
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
					'Home visits are particularly helpful for people who cannot safely manage nail care on their own or who find clinic visits difficult.',
					'They also make things easier for family members and carers organising support.',
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
			body: 'Request an appointment online or call to arrange a home visit for yourself or a family member.',
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
			'Home-visit podiatry helps when getting to a clinic is hard. Here’s who it suits, what happens and how to prepare.',
		description:
			'Who podiatry home visits suit, what happens during an appointment, how to prepare and how to book.',
		intro: 'Home-visit podiatry brings foot care to your door. It suits people who find clinic visits difficult, tiring or inconvenient.',
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
					'Home visits are a good option when getting to a clinic is hard, uncomfortable or unsafe. They also help carers who need appointments to fit around the day.',
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
					'We assess the problem, provide treatment and leave you with clear advice. If orthotics or follow-up care are needed, we explain the next step.',
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
					'A well-lit space is usually all that is needed. We bring the equipment. If you have health information or care plans, keep them nearby.',
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
					'We provide mobile podiatry across Adelaide metro. Regional South Australia may be available by arrangement if needed.',
				],
			},
		],
		cta: {
			heading: 'Ready to book a home visit?',
			body: 'Call for availability or book online and we will confirm the next suitable time.',
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
			'Regular podiatry helps older adults stay mobile and comfortable at home by picking up small problems early.',
		description:
			'Why ongoing podiatry care matters for older adults at home, including comfort, mobility and falls prevention.',
		intro: 'Foot health affects comfort, mobility and balance. As we age, changes in circulation, skin, joints and sensation can increase the risk of pain, wounds and falls. Regular podiatry helps pick up small problems before they get harder to manage.',
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
					'Ageing changes the feet in several ways. Skin often becomes thinner, nails can thicken, joints may stiffen and circulation can reduce.',
					'Conditions such as diabetes, arthritis and peripheral vascular disease can increase that risk further.',
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
					'Falls are a major health risk for older Australians. Foot pain and poor footwear are common contributors.',
					'Podiatry can reduce painful pressure points, improve comfort and support safer day-to-day movement.',
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
					'For many older adults, clinic travel is tiring or impractical. Home visits keep care simple and reduce disruption.',
					'Regular visits also help monitor skin, circulation and nail health so changes can be managed early.',
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
					'The aim is to maintain comfort, prevent complications and support independence at home.',
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
					'Consider booking if you notice pain, skin changes, nail changes or reduced confidence when walking.',
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
