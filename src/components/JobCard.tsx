import React from 'react';
import { Building2, MapPin, Timer, Calendar } from 'lucide-react';
import { Job } from '../types';
import { formatDate, getRemainingDays } from '../utils/date';

interface JobCardProps {
  job: Job;
  onClick: (job: Job) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  const remainingDays = getRemainingDays(job.expires);

  return (
    <div 
      onClick={() => onClick(job)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
          <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
            <Building2 className="w-4 h-4 mr-2" />
            <span>{job.company}</span>
          </div>
        </div>
        <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
          {job.type}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300 text-sm">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <Timer className="w-4 h-4 mr-1" />
          <span>Posted {formatDate(job.posted)}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          <span className={remainingDays <= 7 ? 'text-red-600 dark:text-red-400 font-medium' : ''}>
            {remainingDays > 0 
              ? `Expires in ${remainingDays} days`
              : 'Expired'}
          </span>
        </div>
      </div>
    </div>
  );
};