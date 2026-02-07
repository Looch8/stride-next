import Link from 'next/link';

import SocialIcon from '@/components/social-icon';
import { socialLinks } from '@/content/social-links';

const currentYear = new Date().getFullYear();

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
              <SocialIcon name={link.icon} />
            </a>
          ))}
        </div>

        <div className="footer-links">
          <Link href="/privacy">Privacy Policy</Link>
        </div>

        <p className="copyright">© {currentYear} Stride Podiatry. All rights reserved.</p>
      </div>
    </footer>
  );
}
