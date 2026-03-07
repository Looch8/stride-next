import Link from 'next/link';

import SocialIcon from '@/components/social-icon';
import { socialLinks } from '@/content/social-links';

const currentYear = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-eyebrow">Stride Podiatry</p>
            <h2 className="footer-title">Mobile podiatry that feels clear, calm and professional.</h2>
            <p className="footer-description">
              Home visits across Adelaide for routine foot care, painful conditions,
              diabetic assessments, aged care and supported care arrangements.
            </p>
            <div className="footer-contact">
              <a href="tel:+61468518993" className="contact-link">
                <span>0468 518 993</span>
              </a>
              <a href="mailto:luke@stride-podiatry.com.au" className="contact-link">
                <span>luke@stride-podiatry.com.au</span>
              </a>
            </div>
            <div className="footer-tags" aria-label="Funding and care options">
              <Link href="/services/home-visit-podiatry">Private bookings</Link>
              <Link href="/services/ndis-podiatry">NDIS</Link>
              <Link href="/services/aged-care-podiatry">Aged care</Link>
              <Link href="/services/support-at-home-podiatry">Support at Home</Link>
            </div>
          </div>

          <div className="footer-link-groups">
            <div className="footer-links-group">
              <p className="footer-eyebrow">Quick Links</p>
              <div className="footer-links">
                <Link href="/about-us">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/referral">Referrals</Link>
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
