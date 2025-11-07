import type { MetadataRoute } from 'next';

import { servicePaths, siteUrl } from '@/content/services';

const baseRoutes = [
	'/',
	'/about-us',
	'/services',
	'/booking',
	'/contact-us',
	'/referral',
	'/faq',
];

export default function sitemap(): MetadataRoute.Sitemap {
	return [...baseRoutes, ...servicePaths].map((path) => ({
		url: `${siteUrl}${path === '/' ? '' : path}`,
		lastModified: new Date(),
	}));
}
