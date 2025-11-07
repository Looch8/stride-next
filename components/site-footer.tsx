const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    href: 'https://www.facebook.com/profile.php?id=61570588927493',
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/stride.podiatry/?hl=en',
    label: 'Instagram',
  },
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <a href="tel:+61468518993" className="contact-link">
            <span aria-hidden="true">📞</span>
            <span>0468 518 993</span>
          </a>
          <a href="mailto:luke@stride-podiatry.com.au" className="contact-link">
            <span aria-hidden="true">✉️</span>
            <span>luke@stride-podiatry.com.au</span>
          </a>
        </div>

        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="copyright">© {currentYear} Stride Podiatry. All rights reserved.</p>
      </div>
    </footer>
  );
}
