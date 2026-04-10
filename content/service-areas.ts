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
      'Mobile podiatry across Central Adelaide, including the CBD and nearby inner suburbs.',
    localContext:
      'Central Adelaide visits cover the CBD, North Adelaide and surrounding inner suburbs. Home visits suit apartment residents, older adults and anyone who would rather avoid parking, traffic or public transport.',
    visitTypes: [
      'Home visits across the CBD and inner suburbs',
      'Aged care and retirement living visits',
      'Routine podiatry without clinic travel',
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
      'If you are in the CBD or inner suburbs and want to check access, parking or appointment options, contact us.',
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
      'Mobile podiatry across Eastern Adelaide for homes, retirement living and supported care settings.',
    localContext:
      'Eastern Adelaide includes family homes, older residents and people who want regular care without the trip to a clinic.',
    visitTypes: [
      'Routine foot care and foot pain treatment at home',
      'Visits for older adults and supported living clients',
      'Care without travel or waiting rooms',
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
      'If you are in the eastern suburbs and want to check availability, call and we\'ll confirm.',
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
      'Mobile podiatry across Northern Adelaide, with home visits instead of clinic travel.',
    localContext:
      'Northern Adelaide covers a wide area of homes, retirement communities and supported living settings. Home visits are often the easier option when transport, mobility or distance make clinic visits harder.',
    visitTypes: [
      'Home visits for private patients and older adults',
      'Visits for NDIS and supported living clients',
      'Regular podiatry across the northern suburbs',
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
      'If you are in the far northern suburbs or near the edge of metro coverage, contact us to check your options.',
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
      'Regional South Australia visits are available by arrangement, depending on location and scheduling.',
    localContext:
      'Regional visits can help when regular podiatry is needed and local options are limited, including for older adults at home and supported care clients.',
    visitTypes: [
      'Regional home visits by arrangement',
      'Regular care outside metro Adelaide where available',
      'Planning around travel and timing',
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
      'Regional coverage depends on your town and the current travel schedule, so call first to check availability.',
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
      'Mobile podiatry across Southern Adelaide, including coastal and surrounding suburbs.',
    localContext:
      'Southern Adelaide includes homes, coastal suburbs, retirement living and supported care settings. Home visits make regular podiatry simpler when clinic travel is a hassle.',
    visitTypes: [
      'Home visits across coastal and southern suburbs',
      'Visits for older adults, families and supported care clients',
      'Regular podiatry at home',
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
      'If you are in the southern suburbs and want to check your address, call and we\'ll confirm.',
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
      'Mobile podiatry across Western Adelaide, including coastal suburbs and the Port Adelaide area.',
    localContext:
      'Western Adelaide visits suit beachside suburbs, retirement living, family homes and older adults who would rather be seen at home.',
    visitTypes: [
      'Home visits across the western suburbs',
      'Visits to retirement living, residential care and supported settings',
      'Regular podiatry without clinic travel',
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
      'If you are in the western suburbs and want to check the right service or appointment type, get in touch.',
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
