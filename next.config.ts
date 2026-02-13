import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	trailingSlash: false,
	images: { unoptimized: true },
	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{ type: 'host', value: 'stride-podiatry.com.au' },
					{ type: 'header', key: 'x-forwarded-proto', value: 'http' },
				],
				destination: 'https://www.stride-podiatry.com.au/:path*',
				permanent: true,
			},
			{
				source: '/:path*',
				has: [{ type: 'host', value: 'stride-podiatry.com.au' }],
				destination: 'https://www.stride-podiatry.com.au/:path*',
				permanent: true,
			},
			{ source: '/about', destination: '/about-us', permanent: true },
			{ source: '/contact', destination: '/contact-us', permanent: true },
			{
				source: '/services/:slug/',
				destination: '/services/:slug',
				permanent: true,
			},
			{
				source: '/services/mobile-home-visit-podiatry-adelaide',
				destination: '/services/home-visit-podiatry',
				permanent: true,
			},
			{
				source: '/services/ndis-podiatry-adelaide',
				destination: '/services/ndis-podiatry',
				permanent: true,
			},
			{
				source: '/services/aged-care-podiatry-adelaide',
				destination: '/services/aged-care-podiatry',
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
