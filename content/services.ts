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
    slug: 'general-podiatry',
    title: 'General Podiatry Care',
    summary: 'Nails, corns and calluses — keep your feet healthy and comfortable.',
    heroImage: '/images/general-foot-care.jpg',
    heroAlt: 'General podiatry care at home',
    metaTitle: 'General Podiatry Care | Stride Podiatry',
    metaDescription:
      'General foot & nail care at home across Adelaide — nails, corns, calluses and cracked heels. Comfortable, convenient podiatry care.',
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
      'Prompt care for ingrown toenails — conservative care, bracing and minor procedures when indicated.',
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
      'Diabetes foot assessments at home — neurological & vascular screening, risk reduction and education to prevent ulcers.',
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
      'Assessment of foot mechanics and gait — load management, strength and orthotic options to reduce pain and improve function.',
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
      'Custom orthotics prescribed from detailed assessment to support foot mechanics, reduce pain and improve comfort.',
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
      'Diagnosis and treatment for heel and arch pain — plantar fasciitis, heel spurs and Achilles issues managed at home.',
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
      'Get footwear recommendations matched to your foot shape, support needs and activity — comfort and injury prevention.',
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
      'Sport-specific assessments, injury prevention and treatment plans for active people — delivered at home.',
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
      'Assessment and home-visit treatment for forefoot pain including bunions, Morton’s neuroma and hammer toes. Mobile podiatry across Adelaide.',
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
