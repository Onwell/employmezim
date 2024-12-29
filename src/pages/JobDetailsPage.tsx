import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Building2, MapPin, Calendar, Timer, ArrowLeft } from 'lucide-react';
import { jobs } from '../data/jobs';
import { formatDate, getRemainingDays } from '../utils/date';
import { ApplyButton } from '../components/ApplyButton';

export const JobDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return (
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Job Not Found</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">The job you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/jobs')}
            className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Jobs
          </button>
        </div>
      </main>
    );
  }

  const remainingDays = getRemainingDays(job.expires);

  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate('/jobs')}
        className="mb-6 inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Jobs
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{job.title}</h1>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Building2 className="w-5 h-5 mr-2" />
                  {job.company}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Timer className="w-5 h-5 mr-2" />
                  Posted {formatDate(job.posted)}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className={remainingDays <= 7 ? 'text-red-600 dark:text-red-400 font-medium' : ''}>
                    {remainingDays > 0 
                      ? `Expires in ${remainingDays} days`
                      : 'Expired'}
                  </span>
                </div>
              </div>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              {job.type}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Description</h2>
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">{job.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Requirements</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            {remainingDays > 0 ? (
              <ApplyButton job={job} />
            ) : (
              <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-red-600 dark:text-red-400">
                This job posting has expired
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};