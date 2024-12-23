import React from 'react';
import { X, Building2, MapPin, Calendar, Timer } from 'lucide-react';
import { Job } from '../types';
import { ApplyButton } from './ApplyButton';
import { formatDate, getRemainingDays } from '../utils/date';

interface JobDetailsProps {
  job: Job;
  onClose: () => void;
}

export const JobDetails: React.FC<JobDetailsProps> = ({ job, onClose }) => {
  const remainingDays = getRemainingDays(job.expires);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{job.title}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Building2 className="w-5 h-5 mr-2" />
              <span className="text-lg">{job.company}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Timer className="w-5 h-5 mr-2" />
              <span>Posted {formatDate(job.posted)}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Calendar className="w-5 h-5 mr-2" />
              <span className={remainingDays <= 7 ? 'text-red-600 dark:text-red-400 font-medium' : ''}>
                Expires {formatDate(job.expires)}
                {remainingDays > 0 && ` (${remainingDays} days remaining)`}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Description</h3>
            <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Requirements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
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
    </div>
  );
};