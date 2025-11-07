import { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
	return {
		rules: [{ userAgent: '*', allow: '/' }],
		sitemap: 'https://www.stride-podiatry.com.au/sitemap.xml',
		host: 'https://www.stride-podiatry.com.au',
	};
}
