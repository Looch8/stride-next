// layout.tsx
import type { Metadata } from 'next';
import { Nunito, Poppins } from 'next/font/google';
import type { ReactNode } from 'react';

import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import MobileCtaBar from '@/components/mobile-cta-bar';

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

const medicalBusinessJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'MedicalBusiness',
	name: 'Stride Podiatry',
	url: 'https://www.stride-podiatry.com.au',
	logo: 'https://www.stride-podiatry.com.au/images/logo.png',
	image: 'https://www.stride-podiatry.com.au/images/logo.png',
	telephone: '+61468518993',
	address: {
		'@type': 'PostalAddress',
		addressCountry: 'AU',
		addressRegion: 'SA',
		addressLocality: 'Adelaide',
	},
	description:
		'Mobile and home-visit podiatry clinic serving Adelaide metro and regional South Australia — General podiatry care, ingrown toenails, diabetic foot care, orthotics and musculoskeletal treatment.',
	areaServed: [
		{
			'@type': 'AdministrativeArea',
			name: 'Adelaide Metropolitan Area',
		},
		{
			'@type': 'AdministrativeArea',
			name: 'Regional South Australia',
		},
	],
	sameAs: [
		'https://www.facebook.com/p/Stride-Podiatry-61570588927493/',
		'https://www.instagram.com/stride.podiatry/',
	],
};

const websiteJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: 'Stride Podiatry',
	alternateName: 'Stride Podiatry Adelaide',
	url: 'https://www.stride-podiatry.com.au',
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
			<head>
				<script
					type="application/ld+json"
					suppressHydrationWarning
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(websiteJsonLd),
					}}
				/>
				<script
					type="application/ld+json"
					suppressHydrationWarning
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(medicalBusinessJsonLd),
					}}
				/>
			</head>
			<body className={`${nunito.variable} ${poppins.variable}`}>
				<a href="#main-content" className="skip-link">
					Skip to content
				</a>
				<SiteHeader />
				<main id="main-content" className="site-main">
					{children}
				</main>
				<SiteFooter />
				<MobileCtaBar />
			</body>
		</html>
	);
}
