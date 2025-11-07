import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	trailingSlash: false,
	images: { unoptimized: true },
	async redirects() {
		return [
			{ source: '/about', destination: '/about-us', permanent: true },
			{ source: '/contact', destination: '/contact-us', permanent: true },
			{
				source: '/services/:slug/',
				destination: '/services/:slug',
				permanent: true,
			},
			{
				source: '/services/ingrown-toenails',
				destination: '/services/ingrown-toenail',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
