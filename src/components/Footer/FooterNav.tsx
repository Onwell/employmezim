import React from 'react';
import { Link } from 'react-router-dom';
import { NavSection } from './types';
import { navigation } from './navigation';

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