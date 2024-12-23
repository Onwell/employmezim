import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300">
          Last updated: March 20, 2024
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          We collect information that you provide directly to us, including:
        </p>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>Name and contact information</li>
          <li>Resume and professional experience</li>
          <li>Job preferences and search history</li>
          <li>Account credentials</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>Provide and improve our services</li>
          <li>Match you with relevant job opportunities</li>
          <li>Communicate with you about our services</li>
          <li>Ensure platform security and prevent fraud</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          3. Information Sharing
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          We may share your information with:
        </p>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>Employers when you apply for jobs</li>
          <li>Service providers who assist our operations</li>
          <li>Law enforcement when required by law</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          4. Your Rights
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </div>
    </main>
  );
};