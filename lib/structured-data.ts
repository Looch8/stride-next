export type BreadcrumbItem = {
	name: string;
	url: string;
};

export type FaqItem = {
	question: string;
	answer: string;
};

type ServiceSchemaInput = {
	name: string;
	description: string;
	url: string;
	serviceType?: string;
	areaServed: string[];
};

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url,
		})),
	};
}

export function buildFaqPage(items: FaqItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: items.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	};
}

export function buildServiceSchema({
	name,
	description,
	url,
	serviceType,
	areaServed,
}: ServiceSchemaInput) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name,
		description,
		url,
		serviceType: serviceType ?? name,
		areaServed: areaServed.map((area) => ({
			'@type': 'AdministrativeArea',
			name: area,
		})),
		provider: {
			'@type': 'MedicalBusiness',
			name: 'Stride Podiatry',
			url: 'https://www.stride-podiatry.com.au',
			telephone: '+61468518993',
			address: {
				'@type': 'PostalAddress',
				addressCountry: 'AU',
				addressRegion: 'SA',
				addressLocality: 'Adelaide',
			},
		},
		availableChannel: {
			'@type': 'ServiceChannel',
			serviceUrl: url,
			servicePhone: '+61468518993',
		},
	};
}
