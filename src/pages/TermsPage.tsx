import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300">
          Last updated: March 20, 2024
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          By accessing and using Job Portal, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          2. User Accounts
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          When creating an account, you must provide accurate and complete information. You are responsible for maintaining the security of your account and password.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          3. Job Postings
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Employers must ensure that job postings are:
        </p>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>Accurate and truthful</li>
          <li>Compliant with all applicable laws</li>
          <li>Free from discriminatory content</li>
          <li>Related to genuine job opportunities</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          4. Prohibited Activities
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Users must not:
        </p>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>Post false or misleading information</li>
          <li>Violate any laws or regulations</li>
          <li>Interfere with the platform's operation</li>
          <li>Collect user information without consent</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          5. Termination
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          We reserve the right to terminate or suspend accounts that violate these terms or for any other reason at our discretion.
        </p>
      </div>
    </main>
  );
};