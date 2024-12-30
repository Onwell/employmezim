import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogs } from '../data/blogs';

export const BlogDetailPage: React.FC = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Blog Not Found</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">The article you're looking for doesn't exist.</p>
          <Link
            to="/blogs"
            className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  const Icon = blog.icon;

  return (
    <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        to="/blogs"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blogs
      </Link>

      <article>
        <div className="mb-8">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mb-6">
            <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <span>{blog.author}</span>
            <span className="mx-2">•</span>
            <span>{blog.date}</span>
            <span className="mx-2">•</span>
            <span>{blog.readTime}</span>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index} className="text-gray-600 dark:text-gray-400 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
};