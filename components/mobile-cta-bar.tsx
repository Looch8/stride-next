export default function MobileCtaBar() {
  return (
    <div
      className="mobile-cta-bar"
      role="region"
      aria-label="Quick actions"
      aria-hidden="false"
    >
      <a
        href="tel:+61881667589"
        className="mobile-cta phone"
      >
        Call 08 8166 7589
      </a>
      <a
        href="/booking"
        className="mobile-cta book"
      >
        Request Appointment
      </a>
    </div>
  );
}
