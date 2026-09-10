import { NavItem, NavAction } from '@/types';

export const mainNavItems: NavItem[] = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Deployment', href: '#deployment' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Technology', href: '#technology' },
];

export const navActions: NavAction[] = [
  { label: 'Pilot Program', href: '#pilot', variant: 'secondary' },
  { label: 'Request Demo', href: '#contact', variant: 'primary' },
];

export const footerLinks = {
  product: [
    { label: 'Overview', href: '#solution' },
    { label: 'Features', href: '#features' },
    { label: 'Deployment Options', href: '#deployment' },
    { label: 'Security & Privacy', href: '#technology' },
  ],
  useCases: [
    { label: 'Educational Institutions', href: '#use-cases' },
    { label: 'Healthcare & Clinics', href: '#use-cases' },
    { label: 'SMEs & Enterprises', href: '#use-cases' },
    { label: 'Legal & Consulting', href: '#use-cases' },
  ],
  company: [
    { label: 'About NodiAI', href: '/about' },
    { label: 'Pilot Program', href: '#pilot' },
    { label: 'Contact Us', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};
