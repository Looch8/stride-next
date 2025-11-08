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
	sameAs: [
		'https://www.facebook.com/p/Stride-Podiatry-61570588927493/',
		'https://www.instagram.com/stride.podiatry/',
	],
};

export const metadata: Metadata = {
	metadataBase: new URL('https://www.stride-podiatry.com.au'),
	title: {
		default: 'Stride Podiatry',
		template: '%s | Stride Podiatry',
	},
	description:
		'Mobile podiatry across Adelaide. Home-visit foot care, ingrown toenails, heel and arch pain, diabetes foot assessments, orthotics and more.',
	openGraph: {
		type: 'website',
		siteName: 'Stride Podiatry',
		title: 'Stride Podiatry',
		description:
			'Mobile podiatry across Adelaide. Home-visit foot care, ingrown toenails, heel and arch pain, diabetes foot assessments, orthotics and more.',
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
