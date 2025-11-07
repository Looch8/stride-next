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
			</div>
		</section>
	);
}
