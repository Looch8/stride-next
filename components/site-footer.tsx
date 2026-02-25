import Link from 'next/link';

import SocialIcon from '@/components/social-icon';
import { socialLinks } from '@/content/social-links';

const currentYear = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-contact-wrap">
            <p className="footer-eyebrow">Contact</p>
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
          </div>

          <div className="footer-link-groups">
            <div className="footer-links-group">
              <p className="footer-eyebrow">Quick Links</p>
              <div className="footer-links">
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact-us">Contact Us</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/privacy">Privacy Policy</Link>
              </div>
            </div>

            <div className="footer-links-group">
              <p className="footer-eyebrow">Service Areas</p>
              <div className="footer-links">
                <Link href="/service-areas">All Areas</Link>
                <Link href="/service-areas/northern-adelaide">Northern</Link>
                <Link href="/service-areas/southern-adelaide">Southern</Link>
                <Link href="/service-areas/eastern-adelaide">Eastern</Link>
                <Link href="/service-areas/western-adelaide">Western</Link>
                <Link href="/service-areas/central-adelaide">Central</Link>
                <Link href="/service-areas/regional-south-australia">Regional SA</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-social-links">
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

        <p className="copyright">© {currentYear} Stride Podiatry. All rights reserved.</p>
      </div>
    </footer>
  );
}
