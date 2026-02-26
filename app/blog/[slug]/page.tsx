import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { blogPosts } from '@/content/blog-posts';

const formatDate = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const normalizeSlug = (slugParam: string) =>
  decodeURIComponent(slugParam).replace(/\/+$/, '').toLowerCase();

const resolvePost = (slugParam: string) => {
  const slug = normalizeSlug(slugParam);
  return blogPosts.find((item) => item.slug.toLowerCase() === slug);
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = resolvePost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Stride Podiatry`,
    description: post.description,
    alternates: {
      canonical: `https://www.stride-podiatry.com.au/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: `${post.title} | Stride Podiatry`,
      description: post.description,
      url: `https://www.stride-podiatry.com.au/blog/${post.slug}`,
      images: [
        {
          url: post.image?.src ?? '/images/logo.png',
          width: post.image?.width ?? 512,
          height: post.image?.height ?? 512,
          alt: post.image?.alt ?? 'Stride Podiatry',
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = resolvePost(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="blog-post">
      <article className="blog-post-container">
        <Link href="/blog" className="blog-back-link">
          ← Back to Blog
        </Link>
        <header className="blog-post-header">
          <p className="blog-post-date">{formatDate(post.date)}</p>
          <h1>{post.title}</h1>
          <p className="blog-post-intro">{post.intro}</p>
          {post.image ? (
            <Image
              src={post.image.src}
              alt={post.image.alt}
              className="blog-post-image"
              width={post.image.width}
              height={post.image.height}
              sizes="(max-width: 900px) 100vw, 720px"
              priority
            />
          ) : null}
        </header>

        <div className="blog-post-body">
          {post.sections.map((section) => (
            <section key={section.heading} className="blog-section">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul className="blog-list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <div className="blog-cta">
          <h2>{post.cta.heading}</h2>
          <p>{post.cta.body}</p>
          <div className="blog-cta-actions">
            <a href={post.cta.primaryHref} className="blog-cta-primary">
              {post.cta.primaryLabel}
            </a>
            <a href={post.cta.secondaryHref} className="blog-cta-secondary">
              {post.cta.secondaryLabel}
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
