export type ServiceAreaLink = {
  href: string;
  label: string;
};

export type ServiceAreaContent = {
  slug: string;
  name: string;
  pageTitle: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  eyebrow: string;
  intro: string;
  localContext: string;
  visitTypes: string[];
  suburbs: string[];
  popularServices: ServiceAreaLink[];
  closingNote: string;
};

const baseUrl = 'https://www.stride-podiatry.com.au/service-areas';

export const serviceAreas: ServiceAreaContent[] = [
  {
    slug: 'central-adelaide',
    name: 'Central Adelaide',
    pageTitle: 'Central Adelaide podiatry service area',
    metaTitle: 'Central Adelaide Podiatry | Stride Podiatry',
    metaDescription:
      'Mobile and home-visit podiatry in Central Adelaide including Adelaide CBD, North Adelaide, Prospect, Walkerville, Mile End, Goodwood and nearby inner-metro suburbs.',
    canonical: `${baseUrl}/central-adelaide`,
    eyebrow: 'Service area',
    intro:
      'Stride Podiatry provides mobile and home-visit podiatry across Central Adelaide, including Adelaide CBD and surrounding inner-metro suburbs close to the city.',
    localContext:
      'Central Adelaide visits cover Adelaide CBD, North Adelaide and the surrounding inner suburbs. They are especially helpful for apartment residents, older adults, people with limited mobility, and clients in high-density areas where parking, traffic or public transport can make clinic visits harder.',
    visitTypes: [
      'Home visits for Adelaide CBD, inner-metro households and apartment living',
      'Aged care and retirement living appointments',
      'Regular podiatry care for clients wanting a convenient local service',
    ],
    suburbs: [
      'Adelaide CBD',
      'North Adelaide',
      'Prospect',
      'Walkerville',
      'Kent Town',
      'Mile End',
      'Bowden',
      'Thebarton',
      'Goodwood',
      'Parkside',
      'Unley',
      'Norwood',
      'Medindie',
      'College Park',
      'Rose Park',
    ],
    popularServices: [
      { href: '/services/home-visit-podiatry', label: 'Home Visit Podiatry' },
      { href: '/services/aged-care-podiatry', label: 'Aged Care Podiatry' },
      { href: '/services/general-podiatry', label: 'General podiatry care' },
      { href: '/services/heel-arch-pain', label: 'Heel and arch pain treatment' },
    ],
    closingNote:
      'If you are in Adelaide CBD or the surrounding inner suburbs and want to confirm access, parking or the right appointment type, contact us and we can point you in the right direction.',
  },
  {
    slug: 'eastern-adelaide',
    name: 'Eastern Adelaide',
    pageTitle: 'Eastern Adelaide service area',
    metaTitle: 'Eastern Adelaide Podiatry | Stride Podiatry',
    metaDescription:
      'Mobile and home-visit podiatry in Eastern Adelaide including Norwood, Burnside, Magill, Payneham, Campbelltown and surrounding suburbs.',
    canonical: `${baseUrl}/eastern-adelaide`,
    eyebrow: 'Service area',
    intro:
      'Stride Podiatry provides mobile and home-visit podiatry across Eastern Adelaide, with visits available to homes, retirement living and supported care settings.',
    localContext:
      'Eastern Adelaide includes a mix of established residential suburbs, family homes and older residents wanting to stay active and independent. Home visits can make ongoing podiatry care much easier when travelling to a clinic becomes inconvenient.',
    visitTypes: [
      'Routine foot care and pain management at home',
      'Appointments for older adults and supported living clients',
      'Practical podiatry care without travel or waiting rooms',
    ],
    suburbs: [
      'Norwood',
      'Burnside',
      'Unley',
      'Glen Osmond',
      'Magill',
      'Kensington',
      'Payneham',
      'Campbelltown',
      'Rostrevor',
      'Athelstone',
      'Tranmere',
      'St Morris',
      'Erindale',
      'Beaumont',
      'Toorak Gardens',
    ],
    popularServices: [
      { href: '/services/general-podiatry', label: 'General podiatry care' },
      { href: '/services/diabetes-foot-care', label: 'Diabetes foot care' },
      { href: '/services/heel-arch-pain', label: 'Heel and arch pain treatment' },
      { href: '/services/custom-orthotics', label: 'Custom orthotics' },
    ],
    closingNote:
      'If you are in the eastern suburbs and want to check appointment availability for your location, call and we can confirm the best next step.',
  },
  {
    slug: 'northern-adelaide',
    name: 'Northern Adelaide',
    pageTitle: 'Northern Adelaide service area',
    metaTitle: 'Northern Adelaide Podiatry | Stride Podiatry',
    metaDescription:
      'Mobile and home-visit podiatry in Northern Adelaide including Elizabeth, Salisbury, Modbury, Tea Tree Gully, Golden Grove and surrounding suburbs.',
    canonical: `${baseUrl}/northern-adelaide`,
    eyebrow: 'Service area',
    intro:
      'Stride Podiatry provides mobile and home-visit podiatry across Northern Adelaide suburbs, helping clients access care without needing to travel into clinic settings.',
    localContext:
      'Northern Adelaide covers a broad spread of residential suburbs, family homes, retirement communities and supported living arrangements. Mobile visits can be especially useful where transport, mobility, time constraints or travel distance make clinic appointments harder to manage.',
    visitTypes: [
      'Home visits for private patients and older adults',
      'Appointments for NDIS and supported living clients',
      'Regular podiatry care across a wide northern-metro area',
    ],
    suburbs: [
      'Elizabeth',
      'Salisbury',
      'Modbury',
      'Tea Tree Gully',
      'Golden Grove',
      'Mawson Lakes',
      'Parafield Gardens',
      'Gawler',
      'Pooraka',
      'Para Hills',
    ],
    popularServices: [
      { href: '/services/home-visit-podiatry', label: 'Home Visit Podiatry' },
      { href: '/services/ndis-podiatry', label: 'NDIS Podiatry' },
      { href: '/services/aged-care-podiatry', label: 'Aged Care Podiatry' },
      { href: '/services/ingrown-toenail', label: 'Ingrown toenail treatment' },
    ],
    closingNote:
      'If you are located in the far northern suburbs or near the edge of metro coverage, contact us to confirm the best appointment options.',
  },
  {
    slug: 'regional-south-australia',
    name: 'Regional South Australia',
    pageTitle: 'Regional South Australia service area',
    metaTitle: 'Regional South Australia Podiatry | Stride Podiatry',
    metaDescription:
      'Mobile podiatry for regional South Australia by arrangement. Contact Stride Podiatry to confirm coverage and availability for your town.',
    canonical: `${baseUrl}/regional-south-australia`,
    eyebrow: 'Service area',
    intro:
      'Stride Podiatry regularly travels beyond metro Adelaide for home-visit podiatry. Regional South Australia visits are available by arrangement depending on location, scheduling and travel requirements.',
    localContext:
      'Regional appointments can be a practical option for clients who need ongoing podiatry but have limited local access, whether that is for older adults at home, supported care clients, or people needing regular treatment in towns outside metro Adelaide.',
    visitTypes: [
      'Regional home visits by arrangement',
      'Support for clients who need ongoing care outside metro Adelaide',
      'Coordination around travel planning and appointment timing',
    ],
    suburbs: [
      'Whyalla',
      'Port Lincoln',
      'Wallaroo',
      'Kadina',
      'Port Pirie',
      'Port Augusta',
      'Clare',
      'Jamestown',
      'Peterborough',
      'Victor Harbor',
      'Goolwa',
      'Murray Bridge',
      'Mount Gambier',
      'Millicent',
      'Naracoorte',
      'Berri',
      'Renmark',
      'Loxton',
      'Tanunda',
      'Nuriootpa',
      'Angaston',
      'Port Broughton',
      'Moonta',
      'Streaky Bay',
      'Ceduna',
    ],
    popularServices: [
      { href: '/services/home-visit-podiatry', label: 'Home Visit Podiatry' },
      { href: '/services/support-at-home-podiatry', label: 'Support at Home Podiatry' },
      { href: '/services/aged-care-podiatry', label: 'Aged Care Podiatry' },
      { href: '/contact-us', label: 'Contact us to confirm availability' },
    ],
    closingNote:
      'Regional coverage depends on your town and the current travel schedule, so calling first is the best way to confirm whether we can assist.',
  },
  {
    slug: 'southern-adelaide',
    name: 'Southern Adelaide',
    pageTitle: 'Southern Adelaide service area',
    metaTitle: 'Southern Adelaide Podiatry | Stride Podiatry',
    metaDescription:
      'Mobile and home-visit podiatry in Southern Adelaide including Noarlunga, Marion, Brighton, Glenelg, Hallett Cove and surrounding suburbs.',
    canonical: `${baseUrl}/southern-adelaide`,
    eyebrow: 'Service area',
    intro:
      'Stride Podiatry provides mobile and home-visit podiatry across Southern Adelaide suburbs, including coastal communities and surrounding residential areas.',
    localContext:
      'Southern Adelaide includes a wide spread of homes, coastal suburbs, retirement living and supported care settings. Home visits are often helpful for clients who want ongoing podiatry without the travel involved in getting to a clinic.',
    visitTypes: [
      'Home visits for coastal and southern-metro suburbs',
      'Appointments for older adults, families and supported care clients',
      'Practical in-home treatment for regular podiatry needs',
    ],
    suburbs: [
      'Noarlunga',
      'Marion',
      'Brighton',
      'Glenelg',
      'Hallett Cove',
      'Morphett Vale',
      'Reynella',
      'Seaford',
      'Christies Beach',
      'Aldinga',
    ],
    popularServices: [
      { href: '/services/general-podiatry', label: 'General podiatry care' },
      { href: '/services/heel-arch-pain', label: 'Heel and arch pain treatment' },
      { href: '/services/aged-care-podiatry', label: 'Aged Care Podiatry' },
      { href: '/services/support-at-home-podiatry', label: 'Support at Home Podiatry' },
    ],
    closingNote:
      'If you are in the southern suburbs and want to confirm whether your address is covered, call and we can talk it through.',
  },
  {
    slug: 'western-adelaide',
    name: 'Western Adelaide',
    pageTitle: 'Western Adelaide service area',
    metaTitle: 'Western Adelaide Podiatry | Stride Podiatry',
    metaDescription:
      'Mobile and home-visit podiatry in Western Adelaide including Henley Beach, West Lakes, Port Adelaide, Woodville, Semaphore and surrounding suburbs.',
    canonical: `${baseUrl}/western-adelaide`,
    eyebrow: 'Service area',
    intro:
      'Stride Podiatry provides mobile and home-visit podiatry across Western Adelaide suburbs, including coastal locations, established residential areas and communities around Port Adelaide.',
    localContext:
      'Western Adelaide home visits are useful for clients in beachside suburbs, retirement living, busy family homes and older adults who want treatment at home rather than travelling across the western corridor for appointments.',
    visitTypes: [
      'Mobile podiatry for homes across western suburbs',
      'Visits to retirement living, residential care and supported settings',
      'Care suited to clients who want convenience and continuity',
    ],
    suburbs: [
      'Henley Beach',
      'West Lakes',
      'Port Adelaide',
      'Seaton',
      'Findon',
      'Woodville',
      'Grange',
      'Fulham',
      'Semaphore',
      'Largs Bay',
      'Glenelg North',
      'Royal Park',
      'Albert Park',
      'Beverley',
      'Croydon Park',
    ],
    popularServices: [
      { href: '/services/home-visit-podiatry', label: 'Home Visit Podiatry' },
      { href: '/services/general-podiatry', label: 'General podiatry care' },
      { href: '/services/ingrown-toenail', label: 'Ingrown toenail treatment' },
      { href: '/services/custom-orthotics', label: 'Custom orthotics' },
    ],
    closingNote:
      'If you are in the western suburbs and need help confirming the right service or appointment type, get in touch and we can guide you.',
  },
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getRequiredServiceAreaBySlug(slug: string): ServiceAreaContent {
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    throw new Error(`Missing service area content for ${slug}`);
  }

  return area;
}
