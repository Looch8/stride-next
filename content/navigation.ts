export type NavDropdown = 'services' | 'about' | 'serviceAreas' | 'patientInfo';

export type NavLink = {
  href: string;
  label: string;
  dropdown?: NavDropdown;
};

export const primaryNavItems: readonly NavLink[] = [
  { href: '/about-us', label: 'About', dropdown: 'about' },
  { href: '/service-areas', label: 'Service Areas', dropdown: 'serviceAreas' },
  { href: '/services', label: 'Services', dropdown: 'services' },
  { href: '/referral', label: 'Referrals' },
  { href: '/contact-us', label: 'Contact' },
  { href: '/faq', label: 'Patient Info', dropdown: 'patientInfo' },
];
