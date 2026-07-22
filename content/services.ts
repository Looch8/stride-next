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

export type ServiceBodyImage = {
  src: string;
  alt: string;
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
  overviewDetails?: string[];
  bodyImage?: ServiceBodyImage;
  sections: ServiceSection[];
  faqs?: ServiceFaq[];
  relatedLinks?: ServiceRelatedLink[];
  homeVisitOnly?: boolean;
  anchorId?: string;
};

export const siteUrl = 'https://stridepodiatry.com.au';

export const services: ServiceContent[] = [
  {
    slug: 'home-visit-podiatry',
    title: 'Home Visit Podiatry',
    pageTitle: 'Home Visit Podiatry in Adelaide',
    summary: 'Podiatry home visits across Adelaide for private, aged care and funded clients.',
    heroImage: '/images/luke-arriving-home-visit.webp',
    heroAlt: 'Podiatrist arriving for a home visit carrying mobile podiatry equipment',
    metaTitle: 'Home Visit Podiatry Adelaide | Mobile Podiatrist | Stride Podiatry',
    metaDescription:
      'Home visit podiatry in Adelaide for private patients, aged care and funded care, including routine foot care, pain treatment and orthotics.',
    canonical: `${siteUrl}/services/home-visit-podiatry`,
    overview:
      'We provide podiatry at home across Adelaide metro, with regional South Australia by arrangement.',
    overviewDetails: [
      'Stride Podiatry is a fully mobile service: there is no clinic to travel to. Your podiatrist brings everything needed for the appointment, including sterilised instruments and a full podiatry kit, so the care you receive at home matches what you would expect in a clinic room.',
      'A visit starts with a short history and an assessment of the problem, followed by treatment on the day wherever possible: nail and skin care, offloading for pressure areas, or a plan for pain that needs more than one visit. You will always finish the appointment knowing what was done and what the next step is.',
      'Home visits remove the parts of a podiatry appointment that are hardest for many people: arranging transport, parking, walking distances and waiting rooms. That makes them practical for older adults, people recovering from surgery or illness, carers who would otherwise need to organise an outing, and busy households where a clinic trip never quite fits.',
      'Visits are available across the Adelaide metropolitan area, with regional South Australia by arrangement. Private patients can book directly without a referral, and funded arrangements (Medicare Chronic Disease Management, NDIS, DVA and Support at Home) are supported where applicable.',
    ],
    bodyImage: {
      src: '/images/luke-home-visit-travel.webp',
      alt: 'Mobile podiatrist loading a full podiatry kit before home visits across Adelaide',
    },
    sections: [
      {
        heading: 'Why book a home visit',
        items: [
          'No travel, parking or waiting rooms',
          'Useful for reduced mobility, recovery, busy households and aged care',
          'Appointments at home, in supported living or in aged care',
        ],
      },
      {
        heading: 'Who we see',
        items: [
          'Private patients',
          'Older adults at home or in aged care',
          'NDIS plan-managed and self-managed participants',
          'People recovering from surgery or injury',
          'Anyone who prefers care at home',
        ],
      },
      {
        heading: 'Common reasons for a visit',
        items: [
          'Nail care, corns, calluses and skin care',
          'Ingrown toenails and diabetic foot checks',
          'Heel, arch and forefoot pain',
          'Custom orthotics and footwear advice',
        ],
      },
      {
        heading: 'Coverage',
        items: [
          'Adelaide metro suburbs',
          'Regional South Australia by arrangement',
          'Call to check your suburb',
        ],
      },
      {
        heading: 'Funding',
        items: [
          'Private bookings (no referral required)',
          'Medicare CDM with GP referral',
          'NDIS plan-managed and self-managed clients',
          'Support at Home and DVA where applicable',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you provide podiatry home visits across Adelaide?',
        answer:
          'Yes. We provide home visits across Adelaide metro, with regional South Australia by arrangement.',
      },
      {
        question: 'Are you home visits only?',
        answer:
          'Yes. We are a home-visit-only service. Appointments are provided at home, in aged care or in supported living settings.',
      },
      {
        question: 'Who is home visit podiatry suited to?',
        answer:
          'Home visits suit older adults, people with reduced mobility, carers organising support and anyone who would rather avoid clinic travel.',
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
    summary: 'Podiatry home visits for NDIS participants across Adelaide.',
    heroImage: '/images/luke-ndis-podiatry.webp',
    heroAlt: 'Podiatrist providing nail and foot care during an NDIS home visit',
    metaTitle: 'NDIS Podiatry Adelaide | Home Visits | Stride Podiatry',
    metaDescription:
      'NDIS podiatry home visits in Adelaide for plan-managed and self-managed participants needing treatment, assessments and ongoing foot care.',
    canonical: `${siteUrl}/services/ndis-podiatry`,
    overview:
      'We provide NDIS podiatry home visits across Adelaide, with regional visits by arrangement. We work with participants, families and support teams to keep care simple.',
    overviewDetails: [
      'Podiatry under the NDIS is about more than nail care: it supports mobility, comfort and independence. For many participants, regular foot care removes a barrier to daily activity, and assessment picks up problems early, before they limit walking or cause pain.',
      'We see plan-managed and self-managed participants. Invoices are formatted to NDIS requirements and sent promptly to the participant or plan manager, and progress notes or reports can be provided for plan reviews when requested.',
      'Appointments happen where the participant is most comfortable: at home, in supported independent living or in community settings. Your podiatrist works at the participant’s pace and can coordinate directly with support coordinators, families and support workers, so appointments are easy to organise and easy to repeat.',
    ],
    bodyImage: {
      src: '/images/luke-arriving-home-visit.webp',
      alt: 'Podiatrist arriving for an NDIS podiatry home visit in Adelaide',
    },
    sections: [
      {
        heading: 'How we help',
        items: [
          'Foot care, pain management and mobility support',
          'Assessments, treatment plans and progress notes',
          'Clear communication with coordinators, families and support workers',
        ],
      },
      {
        heading: 'Plan-managed and self-managed participants',
        items: [
          'Invoices that match NDIS requirements',
          'Home visits across Adelaide metro',
          'Direct coordination with your support team where needed',
        ],
      },
      {
        heading: 'Where visits can happen',
        items: [
          'Private homes and supported accommodation',
          'Residential settings and community living arrangements',
          'Appointments shaped around access needs',
        ],
      },
      {
        heading: 'What to expect',
        items: [
          'Assessment and treatment based on the client’s goals and daily needs',
          'Ongoing foot care, pain management and practical advice',
          'A calm, straightforward approach for regular support',
        ],
      },
      {
        heading: 'Getting started',
        items: [
          'Adelaide metro, with regional South Australia by arrangement',
          'Call or book online to discuss availability',
          'Share your plan details or coordinator contact and we can help with the next step',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you provide NDIS podiatry home visits in Adelaide?',
        answer:
          'Yes. We provide NDIS podiatry home visits across Adelaide metro, with regional visits by arrangement.',
      },
      {
        question: 'Do you work with plan-managed and self-managed participants?',
        answer:
          'Yes. We work with both plan-managed and self-managed participants, and can coordinate with support teams where needed.',
      },
      {
        question: 'Where can NDIS appointments take place?',
        answer:
          'Appointments can take place in private homes, supported accommodation and other community living settings.',
      },
    ],
    relatedLinks: [
      { href: '/services/home-visit-podiatry', label: 'Home visit podiatry in Adelaide' },
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
    summary: 'Regular podiatry for older adults at home, in retirement living and in residential aged care.',
    heroImage: '/images/luke-aged-care-podiatry.webp',
    heroAlt: 'Podiatrist smiling with an older client during a home visit',
    metaTitle: 'Aged Care Podiatry Adelaide | Home Visits | Stride Podiatry',
    metaDescription:
      'Aged care podiatry home visits across Adelaide for older adults in private homes, retirement living and residential aged care facilities.',
    canonical: `${siteUrl}/services/aged-care-podiatry`,
    overview:
      'We provide podiatry for older adults across Adelaide, including private homes, retirement living and residential aged care.',
    overviewDetails: [
      'Foot problems have an outsized effect on older adults. Painful nails or a build-up of hard skin can make every step uncomfortable, and reduced circulation or sensation raises the risk of wounds that are slow to heal. Regular podiatry keeps feet comfortable and picks up changes early, which supports mobility, balance and confidence on the feet.',
      'Most aged care clients are seen on a regular cycle for nail and skin care, with diabetes foot checks and footwear reviews built in where needed. Family members, carers and facility staff are welcome to arrange and manage bookings on a resident’s behalf.',
      'We visit private homes, retirement villages and residential aged care facilities across Adelaide. For facilities, a single attendance can cover several residents, with notes provided for care records.',
    ],
    bodyImage: {
      src: '/images/luke-general-foot-care.webp',
      alt: 'Routine nail and skin care during an aged care home visit',
    },
    sections: [
      {
        heading: 'Common care needs',
        items: [
          'Nail and skin care, corns and calluses',
          'Foot pain, balance concerns and footwear issues',
          'Diabetes foot checks and risk monitoring',
        ],
      },
      {
        heading: 'Where we visit',
        items: [
          'Private homes',
          'Retirement villages and residential aged care facilities',
          'Appointments arranged around resident routines and carers',
        ],
      },
      {
        heading: 'How we work',
        items: [
          'Clear communication with family members, carers and staff',
          'Regular scheduling for residents who need ongoing care',
          'A respectful, practical approach',
        ],
      },
      {
        heading: 'Funding and coverage',
        items: [
          'Private bookings, Medicare CDM, Support at Home and NDIS where applicable',
          'Adelaide metro, with regional South Australia by arrangement',
          'Call to discuss your location or care arrangement',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you provide aged care podiatry home visits in Adelaide?',
        answer:
          'Yes. We provide home visits for older adults across Adelaide in private homes, retirement living and residential aged care.',
      },
      {
        question: 'Can family members or carers help organise appointments?',
        answer:
          'Yes. We regularly coordinate with family members, carers and facility staff.',
      },
      {
        question: 'Do you visit residential aged care facilities?',
        answer:
          'Yes. We visit residential aged care facilities, retirement villages and private homes.',
      },
    ],
    relatedLinks: [
      { href: '/services/support-at-home-podiatry', label: 'Support at Home podiatry' },
      { href: '/services/dva-podiatry', label: 'DVA podiatry home visits' },
      { href: '/services/home-visit-podiatry', label: 'Home visit podiatry in Adelaide' },
      { href: '/contact-us', label: 'Talk through a care arrangement' },
    ],
    homeVisitOnly: true,
  },
  {
    slug: 'support-at-home-podiatry',
    title: 'Support at Home Podiatry',
    pageTitle: 'Support at Home Podiatry',
    summary: 'In-home podiatry for older adults using Support at Home funding.',
    heroImage: '/images/luke-support-at-home.webp',
    heroAlt: 'Mobile podiatrist ready to provide Support at Home foot care in Adelaide',
    metaTitle: 'Support at Home Podiatry Adelaide | Stride Podiatry',
    metaDescription:
      'Support at Home podiatry in Adelaide with mobile home visits for older adults using funded in-home support for regular foot care and treatment.',
    canonical: `${siteUrl}/services/support-at-home-podiatry`,
    overview:
      'We provide in-home podiatry for older adults receiving Support at Home services across Adelaide.',
    overviewDetails: [
      'Support at Home is the Australian Government’s in-home aged care program, replacing Home Care Packages. If podiatry is included in your care plan, your funding can generally be used for regular home visits, including routine foot care, diabetes foot checks and treatment for foot pain.',
      'We work directly with providers and case managers to set services up: confirming what is covered, agreeing on a visit schedule and invoicing the provider, so there is no paperwork left with the client or family. If you are not sure whether podiatry is included in a plan, we can help you ask the right questions.',
      'Because care is delivered entirely at home, there is no transport to organise and no disruption to the routines that in-home support is designed to protect. Visits can be scheduled alongside other services and repeated on a regular cycle.',
    ],
    bodyImage: {
      src: '/images/luke-diabetic-foot-care.webp',
      alt: 'Diabetes foot check during a Support at Home podiatry visit',
    },
    sections: [
      {
        heading: 'About Support at Home',
        items: [
          'Support at Home is the in-home aged care program that follows Home Care Packages',
          'Eligible clients may be able to use funding for podiatry',
          'Podiatry can be part of regular foot care and mobility support',
        ],
      },
      {
        heading: 'How podiatry can help',
        items: [
          'Routine nail and skin care, corns and calluses',
          'Foot pain treatment and mobility support',
          'Diabetes foot checks and ongoing monitoring where needed',
        ],
      },
      {
        heading: 'How we work with providers',
        items: [
          'We work with providers, case managers and families',
          'We can coordinate appointments and ongoing care',
          'Care is delivered at home rather than in a clinic',
        ],
      },
      {
        heading: 'Funding and coverage',
        items: [
          'Support at Home funding may cover podiatry where included in the care plan',
          'Adelaide metro, with regional South Australia by arrangement',
          'We can confirm service details and scheduling with providers',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you provide Support at Home podiatry in Adelaide?',
        answer:
          'Yes. We provide Support at Home podiatry across Adelaide as home visits.',
      },
      {
        question: 'Can you work with Support at Home providers and case managers?',
        answer:
          'Yes. We regularly coordinate with providers, case managers and families.',
      },
      {
        question: 'Can podiatry be delivered at home under Support at Home?',
        answer:
          'In many cases, yes. If podiatry is included in the care arrangements, we can provide regular home visits.',
      },
    ],
    relatedLinks: [
      { href: '/services/aged-care-podiatry', label: 'Aged care podiatry' },
      { href: '/services/dva-podiatry', label: 'DVA podiatry in Adelaide' },
      { href: '/services/home-visit-podiatry', label: 'Home visit podiatry in Adelaide' },
      { href: '/referral', label: 'Referral information for providers' },
    ],
    homeVisitOnly: true,
  },
  {
    slug: 'dva-podiatry',
    title: 'DVA Podiatry',
    pageTitle: 'DVA Podiatry',
    summary: 'Home-visit podiatry for eligible DVA clients across Adelaide.',
    heroImage: '/images/luke-home-visit-travel.webp',
    heroAlt: 'Mobile podiatrist heading out to a DVA home visit',
    metaTitle: 'DVA Podiatry Adelaide | Home Visits | Stride Podiatry',
    metaDescription:
      'DVA podiatry home visits in Adelaide for eligible veterans and clients needing treatment, regular foot care and practical support at home.',
    canonical: `${siteUrl}/services/dva-podiatry`,
    overview:
      'We provide DVA podiatry home visits across Adelaide for eligible clients who prefer to be seen at home.',
    overviewDetails: [
      'Eligible veterans can access podiatry through DVA arrangements, with care provided at home rather than in a clinic. This suits older veterans, anyone with mobility or transport barriers, and clients who simply prefer to be seen in their own home.',
      'DVA podiatry usually requires a referral from a GP. If you are unsure about eligibility or the paperwork, call first, and we can explain exactly what is needed and coordinate with your GP where appropriate, so nothing is left for you to chase.',
      'Common visit work includes routine nail and skin care, treatment for corns and calluses, foot pain management and diabetic foot monitoring. Many DVA clients are seen on a regular cycle so care stays consistent.',
    ],
    bodyImage: {
      src: '/images/luke-forefoot-skin-care.webp',
      alt: 'Skin and nail care during a DVA podiatry home visit',
    },
    sections: [
      {
        heading: 'Who this service suits',
        items: [
          'Eligible DVA clients needing treatment or regular foot care',
          'Older veterans who prefer care at home',
          'People with mobility issues, pain or transport barriers',
        ],
      },
      {
        heading: 'How visits work',
        items: [
          'Home visits only',
          'Visits to private homes, retirement living and aged care where appropriate',
          'Straightforward appointments shaped around the client and home environment',
        ],
      },
      {
        heading: 'Referrals and claiming',
        items: [
          'We can explain whether a referral is required',
          'If needed, we can coordinate with your GP or referrer around the paperwork',
          'If you are unsure about eligibility or claiming, contact us first',
        ],
      },
      {
        heading: 'Common treatments',
        items: [
          'Routine nail and skin care, corns and calluses',
          'Foot pain treatment, including heel pain and pressure-related discomfort',
          'Diabetes foot checks, circulation concerns and ongoing monitoring',
        ],
      },
      {
        heading: 'Coverage',
        items: [
          'Adelaide metro home visits',
          'Regional South Australia by arrangement',
          'Call to check suburb coverage and availability',
        ],
      },
      {
        heading: 'How to book',
        items: [
          'Call or request an appointment online',
          'Let us know the booking is for a DVA client',
          'We can coordinate with family members, carers or referrers where needed',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you provide DVA podiatry home visits in Adelaide?',
        answer:
          'Yes. We provide DVA podiatry home visits across Adelaide metro, with regional South Australia by arrangement.',
      },
      {
        question: 'Do I need a referral for DVA podiatry?',
        answer:
          'Referral requirements can depend on the arrangement, so contact us and we can explain what is needed.',
      },
      {
        question: 'What treatments can be provided during a DVA home visit?',
        answer:
          'Common treatments include nail and skin care, corn and callus treatment, pain management and diabetic foot checks.',
      },
      {
        question: 'Do you visit private homes and aged care settings?',
        answer:
          'Yes. Appointments can be provided in private homes and, where appropriate, in retirement living or aged care settings.',
      },
    ],
    relatedLinks: [
      { href: '/services/home-visit-podiatry', label: 'Home visit podiatry in Adelaide' },
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
    summary: 'Treatment for nails, corns, calluses and other routine foot care needs.',
    heroImage: '/images/luke-general-foot-care.webp',
    heroAlt: 'Podiatrist trimming toenails during general foot care at home',
    metaTitle: 'General Podiatry Care Adelaide | Stride Podiatry',
    metaDescription:
      'General foot and nail care at home across Adelaide. Mobile podiatry for nails, corns, calluses and cracked heels.',
    canonical: `${siteUrl}/services/general-podiatry`,
    overview:
      'We treat common foot and nail problems so you can stay comfortable and mobile.',
    overviewDetails: [
      'Routine care covers the everyday problems that make feet uncomfortable: thickened or hard-to-cut nails, corns, callus build-up and dry, cracked heels. These are among the most common reasons people book a home visit, and most can be treated fully in a single appointment.',
      'Treatment is gentle and straightforward: nails are reduced and shaped, corns and callus are removed painlessly, and skin care advice is given so the results last longer between visits. Many clients book a regular cycle so problems never get the chance to build up.',
    ],
    bodyImage: {
      src: '/images/luke-ingrown-toenail-care.webp',
      alt: 'Careful nail care during a general podiatry home visit',
    },
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
          'Safe removal of corns and callus',
          'Moisturising and footwear advice to help prevent recurrence',
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
    summary: 'Treatment for painful or infected ingrown toenails.',
    heroImage: '/images/luke-ingrown-toenail-care.webp',
    heroAlt: 'Close-up of podiatrist carefully trimming a toenail',
    metaTitle: 'Ingrown Toenail Treatment Adelaide | Stride Podiatry',
    metaDescription:
      'Prompt ingrown toenail care at home in Adelaide. Conservative treatment, bracing and minor procedures when needed.',
    canonical: `${siteUrl}/services/ingrown-toenail`,
    overview:
      'We treat painful or infected ingrown nails to help reduce pain and lower recurrence risk.',
    overviewDetails: [
      'An ingrown toenail happens when the nail edge presses into or pierces the surrounding skin, usually on the big toe. It often starts as mild tenderness and can progress quickly to swelling, redness and infection, and because every step puts pressure on the toe, it rarely settles on its own once established.',
      'Most ingrown nails can be treated conservatively in a single home visit: the offending nail edge is cleared, the area is dressed, and you get clear advice on trimming and footwear to reduce the chance of it coming back. For nails that keep recurring, a minor procedure under local anaesthetic may be recommended, and we will explain the options and what is involved before anything goes ahead.',
    ],
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
          'Practical advice to help prevent recurrence',
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
    summary: 'Diabetic foot checks and care to help prevent complications.',
    heroImage: '/images/luke-diabetic-foot-care.webp',
    heroAlt: 'Podiatrist performing diabetic foot care with a sanding drill',
    metaTitle: 'Diabetes Foot Care Adelaide | Stride Podiatry',
    metaDescription:
      'Diabetes foot assessments at home in Adelaide. Mobile podiatry for screening, risk reduction and ulcer prevention.',
    canonical: `${siteUrl}/services/diabetes-foot-care`,
    overview:
      'Diabetes can affect circulation and sensation. Regular podiatry helps detect issues early and lower the risk of ulcers and infection.',
    overviewDetails: [
      'Diabetes can gradually affect the nerves and blood supply to the feet, which means injuries can go unnoticed and heal slowly. A regular diabetes foot assessment checks sensation, circulation and skin integrity, giving you and your GP a clear picture of risk before problems develop.',
      'A home-based assessment works just like a clinic check: sensation testing, pulse checks, and a review of skin, nails and footwear. You get a plain-language explanation of your risk level, and a written summary can be provided for your GP or care team. Higher-risk feet are reviewed more often, with routine care scheduled to keep skin and nails safe between checks.',
    ],
    bodyImage: {
      src: '/images/luke-general-foot-care.webp',
      alt: 'Routine skin and nail care as part of diabetic foot management at home',
    },
    sections: [
      {
        heading: 'Assessment includes',
        items: [
          'Neurological and vascular screening',
          'Footwear and risk evaluation',
          'Skin/nail care and education',
        ],
      },
      {
        heading: 'How we treat',
        items: [
          'Regular care to lower risk',
          'Pressure offloading and footwear updates',
          'Care plans and practical advice',
        ],
      },
      {
        heading: 'When to seek care',
        items: [
          'New wounds or skin breakdown',
          'Colour or temperature changes',
          'Swelling or pain with diabetes',
          'A new diabetes diagnosis',
        ],
      },
    ],
    anchorId: 'diabetic-assessments',
  },
  {
    slug: 'biomechanics-gait',
    title: 'Biomechanics & Gait',
    summary: 'Assess movement and address the causes of pain or overload.',
    heroImage: '/images/luke-biomechanics-child.webp',
    heroAlt: "Podiatrist assessing a child's foot and lower limb",
    metaTitle: 'Biomechanics & Gait | Stride Podiatry',
    metaDescription:
      'Biomechanics and gait assessment at home in Adelaide. Load management, strength and orthotic options to reduce pain.',
    canonical: `${siteUrl}/services/biomechanics-gait`,
    overview:
      'We assess how your feet and legs move during daily life and exercise to find the cause of pain or overload.',
    overviewDetails: [
      'How your feet and legs move affects everything above them. A biomechanical assessment looks at joint range, strength, alignment and walking pattern to work out why pain keeps returning, whether it shows up in the foot, ankle, shin or knee.',
      'Assessments are done in your home, including gait analysis and functional testing. From there, treatment might involve a strengthening program, footwear changes or custom orthotics. The aim is always to address the cause of the overload, not just the symptom.',
      'Children’s concerns such as flat feet, intoeing and activity-related pain are also assessed, with an emphasis on reassurance and practical guidance for parents.',
    ],
    bodyImage: {
      src: '/images/luke-heel-arch-treatment.webp',
      alt: 'Hands-on treatment following a biomechanical assessment',
    },
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
          'Functional testing and gait analysis',
          'Strength and mobility programs',
          'Custom orthotic prescription when indicated',
        ],
      },
      {
        heading: 'When to seek care',
        items: [
          'Ongoing pain with walking/exercise or everyday tasks',
          'Frequent flare-ups or setbacks',
          'Difficulty returning to activity',
        ],
      },
    ],
  },
  {
    slug: 'custom-orthotics',
    title: 'Custom Orthotics',
    summary: 'Custom orthotics prescribed to support foot mechanics and reduce pain.',
    heroImage: '/images/luke-biomechanics-child.webp',
    heroAlt: 'Podiatrist assessing the foot and lower limb before orthotic prescription',
    metaTitle: 'Custom Orthotics Adelaide | Stride Podiatry',
    metaDescription:
      'Custom orthotics prescribed at home in Adelaide to support foot mechanics, reduce pain and improve comfort.',
    canonical: `${siteUrl}/services/custom-orthotics`,
    overview:
      'Orthotics can reduce strain and improve comfort when they are prescribed from a proper assessment.',
    overviewDetails: [
      'Custom orthotics are prescription insoles made from a scan of your feet, designed to redistribute load and support the way you move. Prescribed well, they can make a real difference to heel, arch, knee and forefoot pain, which is why the assessment matters more than the device itself.',
      'The full orthotic process happens at home: a biomechanical assessment first, then a 3D scan using a mobile scanning system, and a return visit to fit and adjust the finished orthotics. We also review your footwear, because orthotics only work as well as the shoes they sit in.',
    ],
    bodyImage: {
      src: '/images/luke-footwear-advice.webp',
      alt: 'Reviewing footwear during an orthotic assessment and fitting',
    },
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
          'Orthotic design and prescription based on your needs',
          'Fit checks and adjustment plan',
        ],
      },
      {
        heading: 'When to seek care',
        items: [
          'Persistent pain despite footwear changes',
          'Recurrent injuries with activity',
          'Fatigue or soreness with standing or walking',
        ],
      },
    ],
    anchorId: 'orthotics',
  },
  {
    slug: 'heel-arch-pain',
    title: 'Heel & Arch Pain',
    summary: 'Assessment and treatment for heel and arch pain.',
    heroImage: '/images/luke-heel-arch-treatment.webp',
    heroAlt: 'Podiatrist treating the foot to help with heel and arch pain',
    metaTitle: 'Heel & Arch Pain Adelaide | Stride Podiatry',
    metaDescription:
      'Home-visit treatment for heel and arch pain in Adelaide. Plantar fasciitis, heel spurs and Achilles issues managed at home.',
    canonical: `${siteUrl}/services/heel-arch-pain`,
    overview: 'We assess heel and arch pain and put a treatment plan in place to settle it down.',
    overviewDetails: [
      'Heel and arch pain is one of the most common problems podiatrists treat. Plantar fasciitis (pain under the heel that is worst with the first steps of the morning) is the usual culprit, but Achilles issues, heel spurs and arch strain can present similarly and each needs slightly different management.',
      'Assessment at home covers your history, footwear, foot posture and the way you move. Treatment usually combines load management, taping or padding, footwear changes, a progressive strengthening program and orthotics where indicated. Most heel pain responds well to conservative care, though it takes consistency over weeks rather than days.',
    ],
    bodyImage: {
      src: '/images/luke-footwear-advice.webp',
      alt: 'Footwear review as part of heel and arch pain treatment',
    },
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
          'Load and activity plans',
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
    summary: 'Advice on shoes that suit your feet, symptoms and day-to-day needs.',
    heroImage: '/images/luke-footwear-advice.webp',
    heroAlt: 'Podiatrist discussing supportive footwear with a client',
    metaTitle: 'Footwear Advice | Stride Podiatry',
    metaDescription:
      'Footwear advice at home in Adelaide. Get recommendations matched to your foot shape, support needs and activity.',
    canonical: `${siteUrl}/services/footwear-advice`,
    overview:
      'The right shoes can make a big difference. We help you choose footwear that suits your feet and how you use them.',
    overviewDetails: [
      'The wrong shoes contribute to a surprising share of foot pain, and the right ones are often the cheapest, most effective part of treatment. What counts as “right” depends on your foot shape, symptoms and what you do in an average day, not on brand or price.',
      'During a visit we assess your current footwear for fit, wear pattern and support, and give specific recommendations, including features and models to look for. For older adults, footwear checks also consider slip and trip risk around the home.',
    ],
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
    summary: 'Assessment and treatment for sport-related foot and ankle problems.',
    heroImage: '/images/luke-heel-arch-treatment.webp',
    heroAlt: 'Podiatrist treating a sport-related foot complaint',
    metaTitle: 'Sports Podiatry Adelaide | Stride Podiatry',
    metaDescription:
      'Sports podiatry at home in Adelaide. Assessments, injury prevention and treatment plans for active people.',
    canonical: `${siteUrl}/services/sports-podiatry`,
    overview:
      'We assess mechanics, manage load and build a plan that helps you keep training.',
    overviewDetails: [
      'Sport-related foot and ankle problems usually come down to load: training that increased faster than the tissues could adapt. Shin splints, Achilles pain, plantar fasciitis and forefoot overload all tend to follow this pattern, and managing them well means adjusting load, not just resting until the pain fades and then returns.',
      'Assessment covers your training history, footwear, mechanics and gait. Treatment plans are built around keeping you active where possible, using progressive loading, strength work, footwear changes and orthotics where indicated.',
    ],
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
          'Progressive loading and strength programs',
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
    summary: 'Assessment and treatment for bunions, Morton’s neuroma, hammertoes and other forefoot problems.',
    heroImage: '/images/luke-forefoot-skin-care.webp',
    heroAlt: 'Podiatrist treating skin and forefoot discomfort',
    metaTitle: 'Forefoot Pain | Stride Podiatry',
    metaDescription:
      'Assessment and home-visit treatment for forefoot pain in Adelaide including bunions, neuroma and hammer toes.',
    canonical: `${siteUrl}/services/forefoot-pain`,
    overview:
      'Forefoot pain can come from joint irritation, nerve compression or toe alignment issues. We assess the cause and make a plan to reduce pain.',
    overviewDetails: [
      'Pain in the ball of the foot or toes has many possible causes, including bunions, Morton’s neuroma, capsulitis and hammer toes, and they are managed differently, so an accurate assessment matters. Burning or tingling usually suggests nerve involvement, while sharp pain on push-off points to joint or soft tissue overload.',
      'Most forefoot problems respond well to conservative care: pressure offloading with padding or toe props, footwear changes (often simply a wider toe box), and orthotics where load needs redistributing. A lot can be done before surgery ever needs to be considered.',
    ],
    bodyImage: {
      src: '/images/luke-footwear-advice.webp',
      alt: 'Footwear advice to reduce forefoot pressure',
    },
    sections: [
      {
        heading: 'Common conditions',
        items: [
          'Bunions (hallux valgus)',
          'Morton’s neuroma or interdigital nerve irritation',
          'Hammer toes or claw toes',
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
          'Strength and mobility exercises for forefoot stability',
          'Footwear updates, including a wider toe box where needed',
          'Custom or prefabricated orthotics when indicated',
        ],
      },
      {
        heading: 'When to seek care',
        items: [
          'Pain during walking, standing or push-off',
          'Burning or tingling between the toes or under the forefoot',
          'Visible toe changes, rubbing or recurrent corns and callus',
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
