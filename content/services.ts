export type ServiceSection = {
  heading: string;
  items: string[];
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceRelatedLink = {
  href: string;
  label: string;
};

export type ServiceContent = {
  slug: string;
  title: string;
  pageTitle?: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  overview: string;
  sections: ServiceSection[];
  faqs?: ServiceFaq[];
  relatedLinks?: ServiceRelatedLink[];
  homeVisitOnly?: boolean;
  anchorId?: string;
};

export const siteUrl = 'https://www.stride-podiatry.com.au';

export const services: ServiceContent[] = [
  {
    slug: 'home-visit-podiatry',
    title: 'Home Visit Podiatry',
    pageTitle: 'Home Visit Podiatry',
    summary: 'Mobile podiatry care for private patients at home, work, or aged care.',
    heroImage: '/images/homevisit.png',
    heroAlt: 'Podiatrist arriving for a home visit and greeting a patient',
    metaTitle: 'Home Visit Podiatry Adelaide | Mobile Podiatrist | Stride Podiatry',
    metaDescription:
      'Home visit podiatry in Adelaide for private patients, aged care and funded care pathways. Home visits only with treatment for foot care, pain and orthotics.',
    canonical: `${siteUrl}/services/home-visit-podiatry`,
    overview:
      'Stride Podiatry provides in-home podiatry across Adelaide metro and regional South Australia. We bring the clinic to you with professional, fully equipped home visits.',
    sections: [
      {
        heading: 'Why choose home visits',
        items: [
          'Comfort and convenience in your own home',
          'No travel, parking or waiting rooms',
          'Ideal for seniors, busy families and mobility limitations',
        ],
      },
      {
        heading: 'Who we help',
        items: [
          'NDIS plan and self-managed participants',
          'Aged care residents and older adults at home',
          'People recovering from surgery or injury',
          'Anyone who prefers a home visit podiatrist',
        ],
      },
      {
        heading: 'What we treat',
        items: [
          'Nail and skin care, corns and calluses',
          'Ingrown toenails and diabetic foot checks',
          'Heel, arch and forefoot pain',
          'Custom orthotics and footwear advice',
        ],
      },
      {
        heading: 'Service area',
        items: [
          'All Adelaide metro suburbs',
          'Regional South Australia by arrangement',
          'Call to confirm availability for your area',
        ],
      },
      {
        heading: 'Funding options',
        items: [
          'Private bookings (no referral required)',
          'Medicare CDM with GP referral',
          'NDIS plan and self-managed clients accepted',
          'Support at Home and DVA where applicable',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you provide podiatry home visits across Adelaide?',
        answer:
          'Yes. Stride Podiatry provides home visit podiatry across Adelaide metro suburbs, with regional South Australia available by arrangement.',
      },
      {
        question: 'Are you home visits only?',
        answer:
          'Yes. Stride Podiatry is a home-visit-only service, so appointments are provided in your home, workplace, aged care setting, or supported living environment rather than in a clinic.',
      },
      {
        question: 'Who is home visit podiatry suited to?',
        answer:
          'Home visit podiatry is useful for older adults, people with reduced mobility, busy households, carers organising support, and anyone who prefers treatment without travel or waiting rooms.',
      },
    ],
    relatedLinks: [
      { href: '/services/ndis-podiatry', label: 'NDIS podiatry home visits' },
      { href: '/services/support-at-home-podiatry', label: 'Support at Home podiatry' },
      { href: '/services/dva-podiatry', label: 'DVA podiatry in Adelaide' },
      { href: '/service-areas', label: 'Adelaide service areas' },
    ],
    homeVisitOnly: true,
  },
  {
    slug: 'ndis-podiatry',
    title: 'NDIS Podiatry',
    pageTitle: 'NDIS Podiatry',
    summary: 'Podiatry for NDIS participants, with home visits and support-team coordination.',
    heroImage: '/images/ndispodiatry.png',
    heroAlt: 'Podiatrist treating a client using a wheelchair during an NDIS visit',
    metaTitle: 'NDIS Podiatry Adelaide | Home Visits | Stride Podiatry',
    metaDescription:
      'NDIS podiatry home visits in Adelaide for plan-managed and self-managed participants needing treatment, assessments and ongoing foot care support.',
    canonical: `${siteUrl}/services/ndis-podiatry`,
    overview:
      'Stride Podiatry provides NDIS podiatry home visits across Adelaide and regional South Australia by arrangement. We work with plan-managed and self-managed participants, along with support coordinators, families and support teams, to provide practical podiatry care in the places clients feel most comfortable.',
    sections: [
      {
        heading: 'How Stride supports NDIS clients',
        items: [
          'Foot care, pain management and mobility support',
          'Assessments, treatment plans and progress notes',
          'Clear communication with coordinators, families and support workers',
        ],
      },
      {
        heading: 'Plan- and self-managed participants',
        items: [
          'Invoices aligned to NDIS requirements',
          'Flexible scheduling for in-home appointments',
          'We can coordinate directly with your support team where needed',
        ],
      },
      {
        heading: 'Where we see NDIS participants',
        items: [
          'Private homes and supported accommodation',
          'Residential settings and community-based living arrangements',
          'Appointments shaped around the client environment and access needs',
        ],
      },
      {
        heading: 'What to expect from visits',
        items: [
          'Initial assessment and treatment tailored to the client goals and daily needs',
          'Ongoing foot care, pain management and practical advice',
          'A calm, straightforward approach that works well for participants needing regular support',
        ],
      },
      {
        heading: 'Service area and getting started',
        items: [
          'All Adelaide metro suburbs, with regional South Australia by arrangement',
          'Call or book online to discuss availability and service needs',
          'Share your plan details or coordinator contact and we can help organise the next steps',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you provide NDIS podiatry home visits in Adelaide?',
        answer:
          'Yes. Stride Podiatry provides NDIS podiatry home visits across Adelaide metro suburbs, with regional visits available by arrangement.',
      },
      {
        question: 'Do you work with plan-managed and self-managed participants?',
        answer:
          'Yes. We work with both plan-managed and self-managed NDIS participants and can coordinate with support coordinators, families, and support workers where needed.',
      },
      {
        question: 'Where can NDIS appointments take place?',
        answer:
          'Appointments can be provided in private homes, supported accommodation, and other community-based living environments where home visits are the best fit.',
      },
    ],
    relatedLinks: [
      { href: '/services/home-visit-podiatry', label: 'Home visit podiatry' },
      { href: '/services/dva-podiatry', label: 'DVA podiatry' },
      { href: '/referral', label: 'Referral information for providers' },
      { href: '/service-areas', label: 'Check Adelaide service areas' },
      { href: '/booking', label: 'Request an appointment' },
    ],
    homeVisitOnly: true,
  },
  {
    slug: 'aged-care-podiatry',
    title: 'Aged Care Podiatry',
    pageTitle: 'Aged Care Podiatry',
    summary: 'Regular podiatry for older adults in residential aged care and retirement living.',
    heroImage: '/images/agedcarepodiatry.png',
    heroAlt: 'Podiatrist walking alongside an older client using a four-wheel walker',
    metaTitle: 'Aged Care Podiatry Adelaide | Home Visits | Stride Podiatry',
    metaDescription:
      'Aged care podiatry home visits across Adelaide for older adults in private homes, retirement living and residential aged care facilities.',
    canonical: `${siteUrl}/services/aged-care-podiatry`,
    overview:
      'Stride Podiatry provides podiatry care for older adults in private homes, retirement living and residential aged care facilities across Adelaide, with regional South Australia by arrangement. We work with residents, families, carers and facilities to provide regular foot care and practical ongoing support.',
    sections: [
      {
        heading: 'How Stride supports aged care clients',
        items: [
          'Nail and skin care, corns and calluses',
          'Foot pain, balance concerns and footwear issues',
          'Diabetes foot checks and risk monitoring for older clients',
        ],
      },
      {
        heading: 'Where we provide aged care podiatry',
        items: [
          'Private homes for older adults living independently or with family support',
          'Retirement villages and residential aged care facilities',
          'Appointments arranged around resident routines, carers and facility processes',
        ],
      },
      {
        heading: 'Working with residents, families and facilities',
        items: [
          'Clear communication with family members, carers and site staff',
          'Regular podiatry scheduling for residents who need ongoing care',
          'A practical, respectful approach suited to older adults with complex needs',
        ],
      },
      {
        heading: 'Funding, referrals and service area',
        items: [
          'Private bookings welcome, with Medicare CDM, Support at Home and NDIS available where applicable',
          'All Adelaide metro suburbs, with regional South Australia by arrangement',
          'Call to discuss your location, facility or care arrangement',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you provide aged care podiatry home visits in Adelaide?',
        answer:
          'Yes. We provide home visit podiatry for older adults across Adelaide in private homes, retirement living, and residential aged care settings.',
      },
      {
        question: 'Can family members or carers help organise appointments?',
        answer:
          'Yes. We regularly coordinate with family members, carers, and facility staff to organise suitable appointments and ongoing care.',
      },
      {
        question: 'Do you visit residential aged care facilities?',
        answer:
          'Yes. We can provide podiatry visits in residential aged care facilities as well as retirement villages and private homes.',
      },
    ],
    relatedLinks: [
      { href: '/services/support-at-home-podiatry', label: 'Support at Home podiatry' },
      { href: '/services/dva-podiatry', label: 'DVA podiatry home visits' },
      { href: '/services/home-visit-podiatry', label: 'Home visit podiatry' },
      { href: '/contact-us', label: 'Talk through a care arrangement' },
    ],
    homeVisitOnly: true,
  },
  {
    slug: 'support-at-home-podiatry',
    title: 'Support at Home Podiatry',
    pageTitle: 'Support at Home Podiatry',
    summary: 'Funded in-home podiatry for older adults using Support at Home services.',
    heroImage: '/images/regular-podiatry-older-adults-home-visits-adelaide.png',
    heroAlt: 'Home visit podiatry care for an older adult receiving in-home support',
    metaTitle: 'Support at Home Podiatry Adelaide | Stride Podiatry',
    metaDescription:
      'Support at Home podiatry in Adelaide with mobile home visits for older adults using funded in-home support for regular foot care and treatment.',
    canonical: `${siteUrl}/services/support-at-home-podiatry`,
    overview:
      'Stride Podiatry provides in-home podiatry for older adults receiving Support at Home services across Adelaide. Support at Home replaces the previous Home Care Packages model, and can help eligible clients access funded podiatry as part of the services that keep them safe, mobile and comfortable at home.',
    sections: [
      {
        heading: 'What Support at Home means',
        items: [
          'Support at Home is the in-home aged care program that follows the previous Home Care Packages model',
          'Eligible older adults may have funding available for services that support independence, mobility and day-to-day wellbeing',
          'Podiatry may form part of that support when regular foot care or treatment is clinically appropriate',
        ],
      },
      {
        heading: 'How podiatry can help',
        items: [
          'Routine nail and skin care, corns and calluses',
          'Foot pain management and mobility-focused treatment',
          'Diabetes foot checks and ongoing monitoring where needed',
        ],
      },
      {
        heading: 'How Stride works with Support at Home providers',
        items: [
          'Stride Podiatry works with multiple aged care and in-home support businesses to deliver podiatry to their clients',
          'We can coordinate with providers, case managers and families around appointments and ongoing care needs',
          'This helps clients receive podiatry in the home without the stress of travelling to a clinic',
        ],
      },
      {
        heading: 'Funding and home visits',
        items: [
          'Clients may be able to use Support at Home funding for podiatry where it is included in their care arrangements',
          'We are happy to work alongside providers to confirm service details and scheduling',
        ],
      },
      {
        heading: 'Service area',
        items: [
          'All Adelaide metro suburbs',
          'Regional South Australia by arrangement',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you provide Support at Home podiatry in Adelaide?',
        answer:
          'Yes. Stride Podiatry provides Support at Home podiatry across Adelaide with appointments delivered as home visits rather than clinic appointments.',
      },
      {
        question: 'Can you work with Support at Home providers and case managers?',
        answer:
          'Yes. We regularly coordinate with providers, case managers, and families to help organise appointments and ongoing podiatry support.',
      },
      {
        question: 'Can podiatry be delivered at home under Support at Home?',
        answer:
          'In many cases, yes. If podiatry is included in the client care arrangements, we can provide regular home visits to help maintain comfort, mobility, and foot health.',
      },
    ],
    relatedLinks: [
      { href: '/services/aged-care-podiatry', label: 'Aged care podiatry' },
      { href: '/services/dva-podiatry', label: 'DVA podiatry in Adelaide' },
      { href: '/services/home-visit-podiatry', label: 'Home visit podiatry' },
      { href: '/referral', label: 'Referral information for providers' },
    ],
    homeVisitOnly: true,
  },
  {
    slug: 'dva-podiatry',
    title: 'DVA Podiatry',
    pageTitle: 'DVA Podiatry',
    summary: 'Home-visit podiatry for eligible DVA clients across Adelaide.',
    heroImage: '/images/homevisit.png',
    heroAlt: 'Podiatrist arriving for a home visit with an older client',
    metaTitle: 'DVA Podiatry Adelaide | Home Visits | Stride Podiatry',
    metaDescription:
      'DVA podiatry home visits in Adelaide for eligible veterans and clients needing treatment, regular foot care and practical support at home.',
    canonical: `${siteUrl}/services/dva-podiatry`,
    overview:
      'Stride Podiatry provides DVA podiatry home visits across Adelaide for eligible clients who want practical foot care, pain management and ongoing support without the need to travel to a clinic.',
    sections: [
      {
        heading: 'Who DVA podiatry is for',
        items: [
          'Eligible DVA clients needing podiatry treatment or regular foot care',
          'Older veterans who prefer care at home',
          'People with mobility limitations, pain, or transport barriers',
        ],
      },
      {
        heading: 'Home visit appointments for DVA clients',
        items: [
          'Home visits only, with no clinic appointments',
          'Visits to private homes, retirement living, and aged care settings where appropriate',
          'A calm, practical appointment process shaped around the client and home environment',
        ],
      },
      {
        heading: 'Referrals and claiming process',
        items: [
          'We can discuss whether a referral is required for your situation',
          'If needed, we can coordinate with your GP or referrer around the paperwork',
          'If you are unsure about eligibility or claiming details, contact us and we can talk through the next step',
        ],
      },
      {
        heading: 'Common treatments',
        items: [
          'Routine nail and skin care, corns and calluses',
          'Foot pain treatment, including heel pain and pressure-related discomfort',
          'Diabetes foot checks, circulation concerns, and ongoing monitoring where required',
        ],
      },
      {
        heading: 'Service areas across Adelaide',
        items: [
          'Adelaide metro home visits',
          'Regional South Australia by arrangement',
          'Call to confirm suburb coverage, availability, and the most suitable appointment type',
        ],
      },
      {
        heading: 'How to book',
        items: [
          'Call or request an appointment online',
          'Let us know if the booking is for a DVA client so we can guide the next step',
          'We can also coordinate with family members, carers, or referrers where needed',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you provide DVA podiatry home visits in Adelaide?',
        answer:
          'Yes. Stride Podiatry provides DVA podiatry home visits across Adelaide metro suburbs, with regional South Australia available by arrangement.',
      },
      {
        question: 'Do I need a referral for DVA podiatry?',
        answer:
          'Referral requirements can depend on the arrangement and eligibility pathway, so the best first step is to contact us and we can explain what is needed for your situation.',
      },
      {
        question: 'What treatments can be provided during a DVA home visit?',
        answer:
          'Common treatments include nail and skin care, corn and callus treatment, pain management, diabetic foot checks, and practical treatment plans for ongoing foot concerns.',
      },
      {
        question: 'Do you visit private homes and aged care settings?',
        answer:
          'Yes. DVA podiatry appointments can be provided in private homes and, where appropriate, in retirement living or aged care environments.',
      },
    ],
    relatedLinks: [
      { href: '/services/home-visit-podiatry', label: 'Home visit podiatry' },
      { href: '/services/aged-care-podiatry', label: 'Aged care podiatry' },
      { href: '/referral', label: 'Referral information for providers' },
      { href: '/service-areas', label: 'Adelaide service areas' },
      { href: '/booking', label: 'Request a DVA appointment' },
    ],
    homeVisitOnly: true,
  },
  {
    slug: 'general-podiatry',
    title: 'General Podiatry Care',
    summary: 'Nails, corns and calluses — keep your feet healthy and comfortable.',
    heroImage: '/images/general-foot-care.jpg',
    heroAlt: 'General podiatry care at home',
    metaTitle: 'General Podiatry Care | Stride Podiatry',
    metaDescription:
      'General foot and nail care at home across Adelaide. Mobile podiatry for nails, corns, calluses and cracked heels.',
    canonical: `${siteUrl}/services/general-podiatry`,
    overview:
      'We keep nails, corns and calluses under control so your feet stay healthy and comfortable.',
    sections: [
      {
        heading: 'Common issues',
        items: [
          'Thickened or painful nails',
          'Corns and calluses',
          'Cracked heels, dry skin',
        ],
      },
      {
        heading: 'How we treat',
        items: [
          'Gentle nail reduction and debridement',
          'Safe removal of corns/callus',
          'Moisturising & footwear advice to prevent recurrence',
        ],
      },
      {
        heading: 'When to seek care',
        items: [
          'Painful buildup of skin or nails',
          'Skin splitting or pressure areas',
          'Discomfort walking or standing',
        ],
      },
    ],
  },
  {
    slug: 'ingrown-toenail',
    title: 'Ingrown Toenail Treatment',
    summary: 'Relief for painful or infected ingrown toenails.',
    heroImage: '/images/ingrown-nail.jpg',
    heroAlt: 'Ingrown toenail care',
    metaTitle: 'Ingrown Toenail Treatment | Stride Podiatry',
    metaDescription:
      'Prompt ingrown toenail care at home in Adelaide. Conservative treatment, bracing and minor procedures when needed.',
    canonical: `${siteUrl}/services/ingrown-toenail`,
    overview:
      'We treat painful or infected ingrown nails to help reduce pain and lower recurrence risk.',
    sections: [
      {
        heading: 'Common issues',
        items: [
          'Pain and redness along the nail edge',
          'Swelling or infection',
          'Recurrent ingrown toenails',
        ],
      },
      {
        heading: 'How we treat',
        items: [
          'Conservative nail edge clearing',
          'Minor procedures under local anaesthetic if indicated',
          'Tailored advice to reduce recurrence',
        ],
      },
      {
        heading: 'When to seek care',
        items: [
          'Increasing pain or swelling',
          'Pus or signs of infection',
          'Recurrent ingrown nails affecting daily life',
        ],
      },
    ],
    anchorId: 'ingrown-toenails',
  },
  {
    slug: 'diabetes-foot-care',
    title: 'Diabetes Foot Care',
    summary: 'Assessments and care to prevent complications.',
    heroImage: '/images/diabetesCare2.png',
    heroAlt: 'Diabetes foot assessment',
    metaTitle: 'Diabetes Foot Care | Stride Podiatry',
    metaDescription:
      'Diabetes foot assessments at home in Adelaide. Mobile podiatry for screening, risk reduction and ulcer prevention.',
    canonical: `${siteUrl}/services/diabetes-foot-care`,
    overview:
      'Diabetes can affect circulation and sensation. Regular podiatry helps detect issues early and lower the risk of ulcers and infection.',
    sections: [
      {
        heading: 'Assessment includes',
        items: [
          'Neurological & vascular screening',
          'Footwear and risk evaluation',
          'Skin/nail care and education',
        ],
      },
      {
        heading: 'How we treat',
        items: [
          'Regular care to lower risk',
          'Pressure offloading and footwear updates',
          'Care plans and education tailored to you',
        ],
      },
      {
        heading: 'When to seek care',
        items: [
          'New wounds or skin breakdown',
          'Colour or temperature changes',
          'Swelling or pain with diabetes',
          'Newly diagnosed diabetics',
        ],
      },
    ],
    anchorId: 'diabetic-assessments',
  },
  {
    slug: 'biomechanics-gait',
    title: 'Biomechanics & Gait',
    summary: 'Analyse movement and address imbalances.',
    heroImage: '/images/biomechanicsImg.jpg',
    heroAlt: 'Biomechanics and gait assessment',
    metaTitle: 'Biomechanics & Gait | Stride Podiatry',
    metaDescription:
      'Biomechanics and gait assessment at home in Adelaide. Load management, strength and orthotic options to reduce pain.',
    canonical: `${siteUrl}/services/biomechanics-gait`,
    overview:
      'We assess how your feet and legs move during daily life and exercise. Optimising load and mechanics helps reduce pain and prevent recurrence.',
    sections: [
      {
        heading: 'Common issues',
        items: [
          'Shin pain or knee tracking discomfort',
          'Recurring foot/ankle aches with walking or running',
          'Fatigue or imbalance from footwear or workload',
        ],
      },
      {
        heading: 'How we treat',
        items: [
          'Functional tests and gait analysis',
          'Strength/mobility programming',
          'Custom orthotic prescription when indicated',
        ],
      },
      {
        heading: 'When to seek care',
        items: [
          'Ongoing pain with walking/exercise or everyday tasks',
          'Frequent “niggles” or setbacks',
          'Difficulty returning to activity',
        ],
      },
    ],
  },
  {
    slug: 'custom-orthotics',
    title: 'Custom Orthotics',
    summary: 'Personalised devices to support and relieve pain.',
    heroImage: '/images/orthoticsImg.jpg',
    heroAlt: 'Custom foot orthotics',
    metaTitle: 'Custom Orthotics | Stride Podiatry',
    metaDescription:
      'Custom orthotics prescribed at home in Adelaide to support foot mechanics, reduce pain and improve comfort.',
    canonical: `${siteUrl}/services/custom-orthotics`,
    overview:
      'Orthotics can support your feet, optimise mechanics and reduce pain when prescribed from a thorough biomechanical assessment.',
    sections: [
      {
        heading: 'Common reasons for orthotics',
        items: [
          'Chronic heel or arch pain',
          'Ankle, knee, or hip pain',
          'Recurrent overuse injuries',
          'Work or sport demands needing extra support',
        ],
      },
      {
        heading: 'What we do',
        items: [
          'Detailed lower limb assessment',
          'Orthotic design and prescription tailored to your individual needs',
          'Fit checks and adjustment plan',
        ],
      },
      {
        heading: 'When to seek care',
        items: [
          'Persistent pain despite footwear changes',
          'Recurrent injuries with activity',
          'Fatigue or soreness with standing/walking',
        ],
      },
    ],
    anchorId: 'orthotics',
  },
  {
    slug: 'heel-arch-pain',
    title: 'Heel & Arch Pain',
    summary: 'Diagnosis and treatment plans that get you moving.',
    heroImage: '/images/foot-pain.jpg',
    heroAlt: 'Heel and arch pain treatment',
    metaTitle: 'Heel & Arch Pain | Stride Podiatry',
    metaDescription:
      'Home-visit treatment for heel and arch pain in Adelaide. Plantar fasciitis, heel spurs and Achilles issues managed at home.',
    canonical: `${siteUrl}/services/heel-arch-pain`,
    overview: 'We diagnose and treat heel and arch pain so you can move comfortably again.',
    sections: [
      {
        heading: 'Common conditions',
        items: [
          'Plantar fasciitis and heel spurs',
          'Achilles tendinopathy',
          'Overuse or load-related arch pain',
        ],
      },
      {
        heading: 'How we treat',
        items: [
          'Loading and activity plans',
          'Footwear and orthotic options',
          'Mobility and strengthening exercises',
        ],
      },
      {
        heading: 'When to seek care',
        items: [
          'Morning pain or first-step pain',
          'Worsening symptoms over weeks',
          'Pain impacting work or sport',
        ],
      },
    ],
    anchorId: 'heel-pain',
  },
  {
    slug: 'footwear-advice',
    title: 'Footwear Advice',
    summary: 'Shoes that fit your feet and your life.',
    heroImage: '/images/shoewear.jpg',
    heroAlt: 'Footwear advice session',
    metaTitle: 'Footwear Advice | Stride Podiatry',
    metaDescription:
      'Footwear advice at home in Adelaide. Get recommendations matched to your foot shape, support needs and activity.',
    canonical: `${siteUrl}/services/footwear-advice`,
    overview:
      'The right shoes can dramatically improve comfort and reduce injury risk. We help you choose footwear that suits your feet and activity.',
    sections: [
      {
        heading: 'What we consider',
        items: [
          'Foot shape and arch profile',
          'Support and stability needs',
          'Work, daily activity and sport demands',
        ],
      },
      {
        heading: 'Outcomes',
        items: [
          'Clear guidance on models to try',
          'Better comfort and support',
          'Lower risk of recurring aches',
        ],
      },
    ],
  },
  {
    slug: 'sports-podiatry',
    title: 'Sports Podiatry',
    summary: 'Prevent and treat sport-related foot/ankle issues.',
    heroImage: '/images/sportsPodiatryImg.jpeg',
    heroAlt: 'Sports podiatry assessment',
    metaTitle: 'Sports Podiatry | Stride Podiatry',
    metaDescription:
      'Sports podiatry at home in Adelaide. Assessments, injury prevention and treatment plans for active people.',
    canonical: `${siteUrl}/services/sports-podiatry`,
    overview:
      'We help active people stay active — assessing mechanics, managing load and building resilience for your sport.',
    sections: [
      {
        heading: 'Common issues',
        items: [
          'Shin splints, plantar fasciitis, Achilles pain',
          'Forefoot or ankle overload',
          'Recurrent pain with training',
        ],
      },
      {
        heading: 'How we treat',
        items: [
          'Sport-specific assessment and gait review',
          'Progressive loading & strength programs',
          'Footwear and orthotic options as needed',
        ],
      },
      {
        heading: 'When to seek care',
        items: [
          'Pain that returns with training',
          'Setbacks increasing in frequency',
          'Unsure how to progress safely',
        ],
      },
    ],
  },
  {
    slug: 'forefoot-pain',
    title: 'Forefoot Pain',
    summary: 'Bunions, Morton’s neuroma, hammertoes and more.',
    heroImage: '/images/bunion.jpg',
    heroAlt: 'Forefoot pain assessment and treatment',
    metaTitle: 'Forefoot Pain | Stride Podiatry',
    metaDescription:
      'Assessment and home-visit treatment for forefoot pain in Adelaide including bunions, neuroma and hammer toes.',
    canonical: `${siteUrl}/services/forefoot-pain`,
    overview:
      'Forefoot pain can stem from joint irritation, nerve compression or altered toe mechanics. We identify the drivers—load, footwear and gait—and create a plan to reduce pain and keep you active.',
    sections: [
      {
        heading: 'Common conditions',
        items: [
          'Bunions (hallux valgus)',
          'Morton’s neuroma / interdigital nerve irritation',
          'Hammer toes / claw toes',
          'Capsulitis or synovitis of the lesser toe joints',
          'Metatarsalgia (ball-of-foot pain)',
          'Sesamoiditis (big toe joint)',
        ],
      },
      {
        heading: 'How we treat',
        items: [
          'Detailed assessment of gait, load and footwear',
          'Pressure offloading and padding for sensitive areas',
          'Toe props, spacers and taping to improve alignment',
          'Strength & mobility exercises for forefoot stability',
          'Footwear updates (wider toe box, forefoot rocker if needed)',
          'Custom or prefabricated orthotics when indicated',
        ],
      },
      {
        heading: 'When to seek care',
        items: [
          'Pain during walking, standing or push-off',
          'Burning or tingling between toes / under the forefoot',
          'Visible toe deviation, rubbing, or recurrent corns/callus',
        ],
      },
    ],
  },
];

export const serviceMap = new Map(
  services.map((service) => [service.slug, service]),
);

export const servicePaths = services.map((service) => `/services/${service.slug}`);

export const serviceNavItems = services.map((service) => ({
  slug: service.slug,
  title: service.title,
}));
