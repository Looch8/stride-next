const siteUrl = 'https://stridepodiatry.com.au';

export type BreadcrumbItem = {
	name: string;
	url: string;
};

export type FaqItem = {
	question: string;
	answer: string;
};

type BlogPostingSchemaInput = {
	title: string;
	description: string;
	slug: string;
	date: string;
	image?: {
		src: string;
		width: number;
		height: number;
	};
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

export function buildBlogPostingSchema({
	title,
	description,
	slug,
	date,
	image,
}: BlogPostingSchemaInput) {
	const url = `${siteUrl}/blog/${slug}`;

	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		'@id': `${url}#article`,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': url,
		},
		url,
		headline: title,
		description,
		inLanguage: 'en-AU',
		datePublished: date,
		dateModified: date,
		image: image
			? {
					'@type': 'ImageObject',
					url: `${siteUrl}${image.src}`,
					width: image.width,
					height: image.height,
				}
			: `${siteUrl}/images/logo.png`,
		author: {
			'@type': 'Person',
			name: 'Luke Wheldale',
			jobTitle: 'Podiatrist',
			url: `${siteUrl}/about-us`,
		},
		publisher: {
			'@id': `${siteUrl}/#business`,
		},
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
			url: 'https://stridepodiatry.com.au',
			telephone: '+61881667589',
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
			servicePhone: '+61881667589',
		},
	};
}
