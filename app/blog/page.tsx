import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { blogPosts } from '@/content/blog-posts';

const formatDate = (value: string) =>
	new Date(`${value}T00:00:00`).toLocaleDateString('en-AU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

export const metadata: Metadata = {
	title: 'Blog | Stride Podiatry',
	description:
		'Practical tips and updates from Stride Podiatry. Learn about mobile podiatry care, home visits, and foot health in Adelaide.',
	alternates: { canonical: 'https://www.stride-podiatry.com.au/blog' },
	openGraph: {
		title: 'Blog | Stride Podiatry',
		description:
			'Practical tips and updates from Stride Podiatry. Learn about mobile podiatry care, home visits, and foot health in Adelaide.',
		url: 'https://www.stride-podiatry.com.au/blog',
	},
	twitter: {
		title: 'Blog | Stride Podiatry',
		description:
			'Practical tips and updates from Stride Podiatry. Learn about mobile podiatry care, home visits, and foot health in Adelaide.',
	},
};

export default function BlogIndexPage() {
	const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

	return (
		<section className="blog-page">
			<div className="blog-container">
				<div className="blog-header">
					<h1>Blog</h1>
					<p>
						Advice and insights on podiatry, home visits, industry
						and aged care.
					</p>
				</div>

				<div className="blog-grid">
					{posts.map((post) => (
						<article key={post.slug} className="blog-card">
							{post.image ? (
								<Link
									href={`/blog/${post.slug}`}
									className="blog-card-image-link"
									aria-label={`Read ${post.title}`}
								>
									<Image
										src={post.image.src}
										alt={post.image.alt}
										className="blog-card-image"
										width={post.image.width}
										height={post.image.height}
										sizes="(max-width: 900px) 100vw, 33vw"
									/>
								</Link>
							) : null}
							<p className="blog-date">{formatDate(post.date)}</p>
							<h2>{post.title}</h2>
							<p className="blog-excerpt">{post.excerpt}</p>
							<Link
								href={`/blog/${post.slug}`}
								className="blog-read-more"
							>
								Read more
							</Link>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
