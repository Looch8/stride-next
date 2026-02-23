export type NavLink = {
  href: string;
  label: string;
  dropdown?: 'services' | 'about' | 'serviceAreas';
};

export const primaryNavItems: readonly NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About', dropdown: 'about' },
  { href: '/service-areas', label: 'Service Areas', dropdown: 'serviceAreas' },
  { href: '/services', label: 'Services', dropdown: 'services' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: '/faq', label: 'FAQ' },
];
