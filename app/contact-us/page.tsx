import type { Metadata } from 'next';

import ContactForm from '@/components/contact-form';

const contactLD = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: 'https://www.stride-podiatry.com.au/contact-us/',
  mainEntity: {
    '@type': 'MedicalBusiness',
    name: 'Stride Podiatry',
    telephone: '+61468518993',
    email: 'luke@stride-podiatry.com.au',
    areaServed: 'Adelaide',
  },
};

export const metadata: Metadata = {
  title: 'Contact Stride Podiatry | Mobile Podiatrist Adelaide',
  description:
    'Contact Stride Podiatry to arrange a mobile podiatry visit in Adelaide. Call 0468 518 993 or email luke@stride-podiatry.com.au.',
  alternates: { canonical: 'https://www.stride-podiatry.com.au/contact-us/' },
};

export default function ContactPage() {
  return (
    <section className="contact">
      <script
        key="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLD) }}
      />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Stride Podiatry</h1>
          <p>Have a question? Need more information? We&apos;re here to help!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <ul>
              <li>
                <div className="contact-item">
                  <span className="icon" aria-hidden="true">
                    📞
                  </span>
                  <div className="contact-details">
                    <strong>Call us</strong>
                    <a href="tel:+61468518993">0468 518 993</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <span className="icon" aria-hidden="true">
                    📧
                  </span>
                  <div className="contact-details">
                    <strong>Email us</strong>
                    <a href="mailto:luke@stride-podiatry.com.au">luke@stride-podiatry.com.au</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <span className="icon" aria-hidden="true">
                    📱
                  </span>
                  <div className="contact-details">
                    <strong>Follow us</strong>
                    <div className="social-links">
                      <a
                        href="https://www.facebook.com/profile.php?id=61570588927493"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://www.instagram.com/stride.podiatry/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
