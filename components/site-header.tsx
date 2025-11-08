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

import { serviceNavItems } from '@/content/services';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About' },
  { href: '/services', label: 'Services', dropdown: true },
  { href: '/booking', label: 'Booking' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: '/referral', label: 'Referrals' },
  { href: '/faq', label: 'FAQ' },
] as const;

const dropdownServices = [
  { href: '/services', label: 'All Services' },
  ...serviceNavItems.map((service) => ({
    href: `/services/${service.slug}`,
    label: service.title,
  })),
];

type HeaderContentProps = {
  pathname: string;
};

function HeaderContent({ pathname }: HeaderContentProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
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
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const toggleServices = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setServicesOpen((prev) => !prev);
  };

  const handleNavClick = (event: ReactMouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('a')) {
      setIsMobileMenuOpen(false);
      setServicesOpen(false);
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
            src="/images/logo.png"
            alt="Stride Podiatry logo"
            className="logo-image"
            width={180}
            height={48}
            priority
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

        <ul
          id="primary-navigation"
          className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={handleNavClick}
        >
          {NAV_LINKS.map((link) => {
            if (link.dropdown) {
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
      </nav>
    </header>
  );
}

export default function SiteHeader() {
  const pathname = usePathname() ?? '/';
  return <HeaderContent key={pathname} pathname={pathname} />;
}
