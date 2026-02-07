export type ServiceSection = {
  heading: string;
  items: string[];
};

export type ServiceContent = {
  slug: string;
  title: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  overview: string;
  sections: ServiceSection[];
  anchorId?: string;
};

export const siteUrl = 'https://www.stride-podiatry.com.au';

export const services: ServiceContent[] = [
  {
    slug: 'home-visit-podiatry',
    title: 'Home Visit Podiatry',
    summary: 'Mobile podiatry care delivered to homes, workplaces, and aged care.',
    heroImage: '/images/homevisit.png',
    heroAlt: 'Podiatrist arriving for a home visit and greeting a patient',
    metaTitle: 'Home Visit Podiatry | Stride Podiatry',
    metaDescription:
      'Mobile and home-visit podiatry across Adelaide and regional South Australia. We come to you for foot care, pain and orthotics.',
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
  },
  {
    slug: 'ndis-podiatry',
    title: 'NDIS Podiatry',
    summary: 'NDIS podiatry services delivered at home across Adelaide.',
    heroImage: '/images/ndispodiatry.png',
    heroAlt: 'Podiatrist treating a client using a wheelchair during an NDIS visit',
    metaTitle: 'NDIS Podiatry | Stride Podiatry',
    metaDescription:
      'NDIS podiatry in Adelaide with mobile home visits. Plan and self-managed participants supported with assessments and treatment.',
    canonical: `${siteUrl}/services/ndis-podiatry`,
    overview:
      'We provide NDIS podiatry home visits across Adelaide and regional South Australia. We work with plan-managed and self-managed participants and support coordinators.',
    sections: [
      {
        heading: 'NDIS podiatry support',
        items: [
          'Foot care, pain management and mobility support',
          'Assessments, treatment plans and progress notes',
          'Clear communication with coordinators and families',
        ],
      },
      {
        heading: 'Plan and self-managed',
        items: [
          'Invoices aligned to NDIS requirements',
          'Flexible scheduling for in-home appointments',
          'We can coordinate with your support team',
        ],
      },
      {
        heading: 'What to expect',
        items: [
          'Initial assessment and goal setting',
          'Treatment tailored to your needs and environment',
          'Follow-up care and practical advice',
        ],
      },
      {
        heading: 'Service area',
        items: [
          'All Adelaide metro suburbs',
          'Regional South Australia by arrangement',
        ],
      },
      {
        heading: 'Getting started',
        items: [
          'Call or book online to discuss availability',
          'Share your plan details or coordinator contact',
          'We confirm appointment time and next steps',
        ],
      },
    ],
  },
  {
    slug: 'aged-care-podiatry',
    title: 'Aged Care Podiatry',
    summary: 'In-home and residential aged care podiatry across Adelaide.',
    heroImage: '/images/agedcarepodiatry.png',
    heroAlt: 'Podiatrist walking alongside an older client using a four-wheel walker',
    metaTitle: 'Aged Care Podiatry | Stride Podiatry',
    metaDescription:
      'Aged care podiatry home visits across Adelaide. Foot care for older adults in homes and residential facilities.',
    canonical: `${siteUrl}/services/aged-care-podiatry`,
    overview:
      'We provide podiatry care for older adults in private homes and residential aged care facilities across Adelaide and regional South Australia.',
    sections: [
      {
        heading: 'Common aged care needs',
        items: [
          'Nail and skin care, corns and calluses',
          'Foot pain, balance concerns and footwear issues',
          'Diabetes foot checks and risk monitoring',
        ],
      },
      {
        heading: 'In-home and facility visits',
        items: [
          'Home visits for seniors and carers',
          'Visits to retirement villages and facilities',
          'Flexible scheduling to suit routines',
        ],
      },
      {
        heading: 'Funding and referrals',
        items: [
          'Private bookings welcome',
          'Medicare CDM with GP referral',
          'Support at Home via providers',
          'NDIS plan and self-managed where applicable',
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
