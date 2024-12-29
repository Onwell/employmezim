import React from 'react';
import { Briefcase } from 'lucide-react';
import { FooterNav } from './FooterNav';
import { SocialLinks } from './SocialLinks';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-3">
              <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Employ Me Zim | Job Portal</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              Connecting talented professionals with their dream careers. Find your next opportunity today.
            </p>
            <SocialLinks />
          </div>
          <div className="mt-12 xl:mt-0 xl:col-span-2">
            <FooterNav />
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} Employ Me Zim | Job Portal. All rights reserved. Website Designed by Onwell Masaraure
          </p>
        </div>
      </div>
    </footer>
  );
};