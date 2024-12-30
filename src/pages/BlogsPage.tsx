import React from 'react';
import { FileText, Book, Award } from 'lucide-react';

const blogs = [
  {
    title: 'How to Write an Effective Resume',
    excerpt: 'Learn the key elements of a strong resume and how to make yours stand out to potential employers.',
    author: 'Career Expert',
    date: '2024-03-20',
    readTime: '5 min read',
    icon: FileText,
  },
  {
    title: 'Resume Formatting Tips',
    excerpt: 'Professional formatting guidelines to make your resume look clean and professional.',
    author: 'HR Professional',
    date: '2024-03-19',
    readTime: '4 min read',
    icon: Book,
  },
  {
    title: 'Skills Section: What to Include',
    excerpt: 'A comprehensive guide on highlighting your skills effectively on your resume.',
    author: 'Recruitment Specialist',
    date: '2024-03-18',
    readTime: '6 min read',
    icon: Award,
  },
];

export const BlogsPage: React.FC = () => {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Resume Tips & Career Advice</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Expert guidance to help you create an impressive resume and advance your career
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => {
          const Icon = blog.icon;
          return (
            <article
              key={blog.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {blog.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{blog.author}</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
};