'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from 'react';

import { primaryNavItems } from '@/content/navigation';
import { serviceNavItems } from '@/content/service-nav-items';

const dropdownServices = [
  { href: '/services', label: 'All Services' },
  ...serviceNavItems.map((service) => ({
    href: `/services/${service.slug}`,
    label: service.title,
  })),
];

const dropdownAbout = [
  { href: '/about-us', label: 'About Stride Podiatry' },
  { href: '/referral', label: 'Referrals' },
  { href: '/blog', label: 'Blog' },
];

const dropdownServiceAreas = [
  { href: '/service-areas', label: 'All Service Areas' },
  { href: '/service-areas/northern-adelaide', label: 'Northern Adelaide' },
  { href: '/service-areas/southern-adelaide', label: 'Southern Adelaide' },
  { href: '/service-areas/eastern-adelaide', label: 'Eastern Adelaide' },
  { href: '/service-areas/western-adelaide', label: 'Western Adelaide' },
  { href: '/service-areas/central-adelaide', label: 'Central Adelaide' },
  {
    href: '/service-areas/regional-south-australia',
    label: 'Regional South Australia',
  },
];

type HeaderContentProps = {
  pathname: string;
};

function HeaderContent({ pathname }: HeaderContentProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 50;
      setIsScrolled((prev) => (prev === nextIsScrolled ? prev : nextIsScrolled));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
        setAboutOpen(false);
        setServiceAreasOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setServicesOpen(false);
        setAboutOpen(false);
        setServiceAreasOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMobileMenuOpen);
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () =>
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      if (!next) {
        setServicesOpen(false);
        setAboutOpen(false);
        setServiceAreasOpen(false);
      }
      return next;
    });

  const toggleServices = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAboutOpen(false);
    setServiceAreasOpen(false);
    setServicesOpen((prev) => !prev);
  };

  const toggleAbout = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setServicesOpen(false);
    setServiceAreasOpen(false);
    setAboutOpen((prev) => !prev);
  };

  const toggleServiceAreas = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setServicesOpen(false);
    setAboutOpen(false);
    setServiceAreasOpen((prev) => !prev);
  };

  const handleNavClick = (event: ReactMouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('a')) {
      setIsMobileMenuOpen(false);
      setServicesOpen(false);
      setAboutOpen(false);
      setServiceAreasOpen(false);
    }
  };

  const isActive = (href: string, options?: { startsWith?: string }) => {
    if (options?.startsWith) {
      return pathname.startsWith(options.startsWith);
    }
    return pathname === href;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav
        className="navbar"
        aria-label="Primary"
        ref={navRef}
      >
        <Link href="/" className="logo" aria-label="Stride Podiatry home">
          <Image
            src="/images/logo.webp"
            alt="Stride Podiatry logo"
            className="logo-image"
            width={640}
            height={214}
            sizes="(max-width: 768px) 132px, 180px"
            quality={80}
          />
        </Link>

        <button
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation menu"
          aria-controls="primary-navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
          type="button"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <div
          className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}
        >
          <div
            className="mobile-menu-panel"
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mobile-menu-header">
              <Link href="/" className="logo" aria-label="Stride Podiatry home">
                <Image
                  src="/images/logo.webp"
                  alt="Stride Podiatry logo"
                  className="logo-image"
                  width={640}
                  height={214}
                  sizes="132px"
                  quality={80}
                />
              </Link>
              <button
                className="mobile-menu-close"
                type="button"
                onClick={toggleMobileMenu}
                aria-label="Close navigation menu"
              >
                ×
              </button>
            </div>

            <Link
              href="/booking"
              className="mobile-booking-button"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request a Home Visit
            </Link>

            <ul
              id="primary-navigation"
              className="nav-links"
              onClick={handleNavClick}
            >
              {primaryNavItems.map((link) => {
                if (link.dropdown === 'services') {
                  return (
                    <li
                      key={link.href}
                      className={`has-dropdown ${servicesOpen ? 'open' : ''}`}
                    >
                      <button
                        className="dropdown-trigger"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={servicesOpen}
                        onClick={toggleServices}
                      >
                        Services <span className="chev">▾</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        {dropdownServices.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              className={
                                pathname === service.href ? 'active' : undefined
                              }
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                if (link.dropdown === 'about') {
                  return (
                    <li
                      key={link.href}
                      className={`has-dropdown ${aboutOpen ? 'open' : ''}`}
                    >
                      <button
                        className="dropdown-trigger"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={aboutOpen}
                        onClick={toggleAbout}
                      >
                        About <span className="chev">▾</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        {dropdownAbout.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={
                                pathname === item.href ? 'active' : undefined
                              }
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                if (link.dropdown === 'serviceAreas') {
                  return (
                    <li
                      key={link.href}
                      className={`has-dropdown ${serviceAreasOpen ? 'open' : ''}`}
                    >
                      <button
                        className="dropdown-trigger"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={serviceAreasOpen}
                        onClick={toggleServiceAreas}
                      >
                        Service Areas <span className="chev">▾</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        {dropdownServiceAreas.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={
                                item.href === '/service-areas'
                                  ? pathname === '/service-areas'
                                    ? 'active'
                                    : undefined
                                  : pathname.startsWith(item.href)
                                    ? 'active'
                                    : undefined
                              }
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={
                        link.href === '/services'
                          ? isActive('/services', { startsWith: '/services' })
                            ? 'active'
                            : undefined
                          : isActive(link.href)
                            ? 'active'
                            : undefined
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Link href="/booking" className="header-booking-button">
          Request a Home Visit
        </Link>
      </nav>
    </header>
  );
}

export default function SiteHeader() {
  const pathname = usePathname() ?? '/';
  return <HeaderContent key={pathname} pathname={pathname} />;
}
