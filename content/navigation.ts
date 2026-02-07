export type NavLink = {
  href: string;
  label: string;
  dropdown?: boolean;
};

export const primaryNavItems: readonly NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About' },
  { href: '/services', label: 'Services', dropdown: true },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/booking', label: 'Booking' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: '/referral', label: 'Referrals' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
];
