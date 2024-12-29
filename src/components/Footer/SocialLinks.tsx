import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { Icon: Facebook, href: 'https://www.facebook.com/smugsolutions/', label: 'Facebook' },
  { Icon: Twitter, href: 'https://x.com/smugsolutions', label: 'Twitter' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/onwell-masaraure-b14200130/', label: 'LinkedIn' },
  { Icon: Instagram, href: 'https://www.instagram.com/smug_solutions/', label: 'Instagram' }
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          aria-label={label}
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
};