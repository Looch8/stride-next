// layout.tsx
import type { Metadata } from 'next';
import { Nunito, Poppins } from 'next/font/google';
import type { ReactNode } from 'react';

import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';

import './globals.css';

const nunito = Nunito({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-body',
	display: 'swap',
});

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-heading',
	display: 'swap',
});

const organizationJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'Stride Podiatry',
	url: 'https://www.stride-podiatry.com.au',
	logo: 'https://www.stride-podiatry.com.au/images/logo.png',
	description:
		'Mobile and home-visit podiatry clinic serving Adelaide metro and regional South Australia — General podiatry care, ingrown toenails, diabetic foot care, orthotics and musculoskeletal treatment.',
	slogan: 'Adelaide mobile & home-visit podiatrist',
	sameAs: [
		'https://www.facebook.com/p/Stride-Podiatry-61570588927493/',
		'https://www.instagram.com/stride.podiatry/',
	],
	areaServed: {
		'@type': 'City',
		name: 'Adelaide',
	},
	serviceType: 'Mobile podiatry and home visit podiatrist services',
};

export const metadata: Metadata = {
	metadataBase: new URL('https://www.stride-podiatry.com.au'),
	title: {
		default: 'Stride Podiatry',
		template: '%s | Stride Podiatry',
	},
	description:
		'Mobile and home-visit podiatrist across Adelaide. Foot care for ingrown toenails, heel pain, diabetes assessments, orthotics, aged care and more.',
	keywords: [
		'home visit podiatrist Adelaide',
		'home visit podiatry Adelaide',
		'mobile podiatrist Adelaide',
		'mobile podiatry Adelaide',
		'home care podiatrist Adelaide',
	],
	openGraph: {
		type: 'website',
		siteName: 'Stride Podiatry',
		title: 'Stride Podiatry | Mobile & Home Visit Podiatrist Adelaide',
		description:
			'Mobile & home-visit podiatry across Adelaide and regional SA. Expert care for ingrown toenails, heel pain, diabetes, orthotics and aged care.',
		url: 'https://www.stride-podiatry.com.au',
		images: [
			{
				url: '/images/logo.png',
				width: 512,
				height: 512,
				alt: 'Stride Podiatry',
			},
		],
	},
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
		],
		apple: [
			{
				url: '/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
	},

	manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={`${nunito.variable} ${poppins.variable}`}>
				<a href="#main-content" className="skip-link">
					Skip to content
				</a>
				<SiteHeader />
				<main id="main-content" className="site-main">
					{children}
				</main>
				<SiteFooter />
				<script
					type="application/ld+json"
					suppressHydrationWarning
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationJsonLd),
					}}
				/>
			</body>
		</html>
	);
}
