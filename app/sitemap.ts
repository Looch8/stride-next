import type { MetadataRoute } from 'next';

import { blogPosts } from '@/content/blog-posts';
import { servicePaths, siteUrl } from '@/content/services';

const baseRoutes = [
	'/',
	'/about-us',
	'/services',
	'/booking',
	'/contact-us',
	'/referral',
	'/faq',
	'/blog',
	'/service-areas',
	'/privacy',
];

export default function sitemap(): MetadataRoute.Sitemap {
	const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`);

	return [...baseRoutes, ...servicePaths, ...blogPaths].map((path) => ({
		url: `${siteUrl}${path === '/' ? '' : path}`,
		lastModified: new Date(),
	}));
}
