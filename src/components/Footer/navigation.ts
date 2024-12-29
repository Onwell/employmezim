import { NavSection } from './types';

export const navigation: NavSection[] = [
  {
    title: 'For Job Seekers',
    links: [
      { label: 'Browse Jobs', href: '/jobs' },
      { label: 'Career Advice', href: '#' },
      { label: 'Job Alerts', href: '#' },
      { label: 'Resume Tips', href: '#' }
    ]
  },
  {
    title: 'For Employers',
    links: [
      { label: 'Post a Job', href: '#' },
      { label: 'Browse Resumes', href: '#' },
      { label: 'Recruitment Solutions', href: '#' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' }
    ]
  }
];