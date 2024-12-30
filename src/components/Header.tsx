import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { MainNav } from './Navigation/MainNav';

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Employ Me Zim</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <MainNav />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};