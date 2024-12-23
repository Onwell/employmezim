import React from 'react';
import { Mail } from 'lucide-react';
import { Job } from '../types';
import { createEmailTemplate } from '../utils/email';

interface ApplyButtonProps {
  job: Job;
}

export const ApplyButton: React.FC<ApplyButtonProps> = ({ job }) => {
  const handleApply = () => {
    const { subject, body } = createEmailTemplate(job);
    const mailtoLink = `mailto:${job.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <button 
      onClick={handleApply}
      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
    >
      <Mail className="w-5 h-5" />
      Apply Now
    </button>
  );
};