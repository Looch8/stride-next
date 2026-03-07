export type NavLink = {
  href: string;
  label: string;
  dropdown?: 'services' | 'about' | 'serviceAreas';
};

export const primaryNavItems: readonly NavLink[] = [
  { href: '/about-us', label: 'About', dropdown: 'about' },
  { href: '/service-areas', label: 'Service Areas', dropdown: 'serviceAreas' },
  { href: '/services', label: 'Services', dropdown: 'services' },
  { href: '/contact-us', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];
