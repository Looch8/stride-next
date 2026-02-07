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
import { serviceNavItems } from '@/content/services';

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

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setServicesOpen(false);
    }
  }, [isMobileMenuOpen]);

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
      }
      return next;
    });

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
                  src="/images/logo.png"
                  alt="Stride Podiatry logo"
                  className="logo-image"
                  width={160}
                  height={44}
                  priority
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

            <ul
              id="primary-navigation"
              className="nav-links"
              onClick={handleNavClick}
            >
              {primaryNavItems.map((link) => {
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
          </div>
        </div>
      </nav>
    </header>
  );
}

export default function SiteHeader() {
  const pathname = usePathname() ?? '/';
  return <HeaderContent key={pathname} pathname={pathname} />;
}
