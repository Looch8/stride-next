import type { MetadataRoute } from 'next';

import { blogPosts } from '@/content/blog-posts';
import { servicePaths, siteUrl } from '@/content/services';

// Dates reflect when each page's content was last meaningfully changed.
// Update the relevant entry whenever a page is edited.
const baseRoutes: Array<{ path: string; date: string }> = [
	{ path: '/', date: '2026-04-19' },
	{ path: '/about-us', date: '2026-01-01' },
	{ path: '/services', date: '2026-01-01' },
	{ path: '/fees', date: '2026-04-19' },
	{ path: '/booking', date: '2026-01-01' },
	{ path: '/contact-us', date: '2026-01-01' },
	{ path: '/referral', date: '2026-04-19' },
	{ path: '/faq', date: '2026-01-01' },
	{ path: '/blog', date: '2026-03-07' },
	{ path: '/service-areas', date: '2026-01-01' },
	{ path: '/service-areas/northern-adelaide', date: '2026-01-01' },
	{ path: '/service-areas/southern-adelaide', date: '2026-01-01' },
	{ path: '/service-areas/eastern-adelaide', date: '2026-01-01' },
	{ path: '/service-areas/western-adelaide', date: '2026-01-01' },
	{ path: '/service-areas/central-adelaide', date: '2026-01-01' },
	{ path: '/service-areas/regional-south-australia', date: '2026-01-01' },
	{ path: '/privacy', date: '2026-01-01' },
];

export default function sitemap(): MetadataRoute.Sitemap {
	const baseEntries = baseRoutes.map(({ path, date }) => ({
		url: `${siteUrl}${path === '/' ? '' : path}`,
		lastModified: new Date(date),
	}));

	const serviceEntries = servicePaths.map((path) => ({
		url: `${siteUrl}${path}`,
		lastModified: new Date('2026-01-01'),
	}));

	const blogEntries = blogPosts.map((post) => ({
		url: `${siteUrl}/blog/${post.slug}`,
		lastModified: new Date(post.date),
	}));

	return [...baseEntries, ...serviceEntries, ...blogEntries];
}
