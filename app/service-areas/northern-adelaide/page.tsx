import type { Metadata } from 'next';

import ServiceAreaPage from '@/components/service-area-page';
import { getRequiredServiceAreaBySlug } from '@/content/service-areas';
import { buildBreadcrumbList } from '@/lib/structured-data';

const area = getRequiredServiceAreaBySlug('northern-adelaide');

const canonical = area.canonical;

const breadcrumbsLd = buildBreadcrumbList([
	{ name: 'Home', url: 'https://www.stride-podiatry.com.au' },
	{
		name: 'Service Areas',
		url: 'https://www.stride-podiatry.com.au/service-areas',
	},
	{
		name: 'Northern Adelaide',
		url: canonical,
	},
]);

export const metadata: Metadata = {
	title: area.metaTitle,
	description: area.metaDescription,
	alternates: { canonical },
	openGraph: {
		title: area.metaTitle,
		description: area.metaDescription,
		url: canonical,
	},
	twitter: {
		title: area.metaTitle,
		description: area.metaDescription,
	},
};

export default function NorthernAdelaidePage() {
	return <ServiceAreaPage area={area} breadcrumbsLd={breadcrumbsLd} />;
}
