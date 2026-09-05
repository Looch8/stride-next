import Link from 'next/link';

export default function NotFound() {
	return (
		<section className="not-found">
			<div className="not-found-container">
				<h1>404</h1>
				<h2>Page Not Found</h2>
				<p>
					Sorry, the page you’re looking for doesn’t exist or may have been moved.
				</p>
				<Link href="/" className="back-home-btn">
					Back to Home
				</Link>
				<p className="not-found-suggestion">
					You might be looking for one of these:
				</p>
				<ul className="not-found-links">
					<li>
						<Link href="/services">Our services</Link>
					</li>
					<li>
						<Link href="/service-areas">Service areas</Link>
					</li>
					<li>
						<Link href="/booking">Request an appointment</Link>
					</li>
					<li>
						<Link href="/contact-us">Contact us</Link>
					</li>
				</ul>
			</div>
		</section>
	);
}
