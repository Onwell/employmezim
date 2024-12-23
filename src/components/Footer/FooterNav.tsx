import React from 'react';
import { Link } from 'react-router-dom';

interface NavSection {
  title: string;
  links: { label: string; href: string; }[];
}

const navigation: NavSection[] = [
  {
    title: 'For Job Seekers',
    links: [
      { label: 'Browse Jobs', href: '/' },
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
      { label: 'Pricing', href: '#' }
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

export const FooterNav: React.FC = () => {
  return (
    <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3">
      {navigation.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
            {section.title}
          </h3>
          <ul className="mt-4 space-y-3">
            {section.links.map((link) => (
              <li key={link.label}>
                {link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};