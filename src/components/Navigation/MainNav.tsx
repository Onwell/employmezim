import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Browse Jobs', href: '/jobs' },
  { label: 'About Us', href: '/about' },
  { label: 'Resume Tips', href: '/blogs' },
  { label: 'Contact Us', href: '/contact' },
];

export const MainNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map(({ label, href }) => (
        <Link
          key={href}
          to={href}
          className={`text-base font-medium transition-colors ${
            location.pathname === href
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};