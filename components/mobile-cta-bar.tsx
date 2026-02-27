export default function MobileCtaBar() {
  return (
    <div
      className="mobile-cta-bar"
      role="region"
      aria-label="Quick actions"
      aria-hidden="false"
    >
      <a
        href="tel:+61468518993"
        className="mobile-cta phone"
      >
        Call 0468 518 993
      </a>
      <a
        href="/booking"
        className="mobile-cta book"
      >
        Book
      </a>
    </div>
  );
}
