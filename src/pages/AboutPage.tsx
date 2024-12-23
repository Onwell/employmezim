import React from 'react';
import { Users, Target, Globe } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Our Mission',
    description: 'To connect talented professionals with their dream careers and help companies find the perfect candidates to drive their success.'
  },
  {
    icon: Target,
    title: 'Our Vision',
    description: 'To become the leading job portal platform, known for innovation, reliability, and creating meaningful connections in the professional world.'
  },
  {
    icon: Globe,
    title: 'Our Values',
    description: 'We believe in transparency, integrity, and putting our users first. Our platform is built on trust and dedicated to serving both job seekers and employers.'
  }
];

export const AboutPage: React.FC = () => {
  return (
    <main className="flex-1">
      <div className="bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're dedicated to transforming how people find jobs and how companies hire talent.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Founded with a vision to revolutionize the job search experience, Job Portal has grown to become a trusted platform for both job seekers and employers. We understand the challenges of finding the right job and the right talent, which is why we've created a platform that makes these connections seamless and effective.
          </p>
        </div>
      </div>
    </main>
  );
};