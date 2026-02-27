import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const contentSecurityPolicy = [
	"default-src 'self'",
	"base-uri 'self'",
	"form-action 'self'",
	"frame-ancestors 'self'",
	"object-src 'none'",
	"script-src 'self' 'unsafe-inline'",
	"style-src 'self' 'unsafe-inline'",
	"img-src 'self' data: blob: https:",
	"font-src 'self' data:",
	"connect-src 'self' https:",
	"manifest-src 'self'",
	"frame-src 'self'",
	"trusted-types default",
	...(isProduction ? ["upgrade-insecure-requests"] : []),
].join('; ');

const securityHeaders = [
	{
		key: 'Content-Security-Policy',
		value: contentSecurityPolicy,
	},
	{
		key: 'Content-Security-Policy-Report-Only',
		value: "require-trusted-types-for 'script'; trusted-types default",
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=63072000; includeSubDomains; preload',
	},
	{ key: 'X-Content-Type-Options', value: 'nosniff' },
	{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
	{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
	{ key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
	{ key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
	{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = {
	trailingSlash: false,
	compress: true,
	images: {
		formats: ['image/avif', 'image/webp'],
		minimumCacheTTL: 60 * 60 * 24 * 7,
		deviceSizes: [360, 414, 640, 768, 828, 1024, 1200],
		imageSizes: [16, 32, 64, 96, 128, 180, 256, 384],
	},
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
	async headers() {
		return [
			{
				source: '/:path*',
				headers: securityHeaders,
			},
		];
	},
};

export default nextConfig;
