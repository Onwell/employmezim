import { Job } from '../types';

export const createEmailTemplate = (job: Job) => {
  const subject = `Application for ${job.title} position at ${job.company}`;
  
  const body = `Dear Hiring Manager,

I am writing to express my interest in the ${job.title} position at ${job.company}.

[Please include your resume and introduction here]

Best regards,
[Your name]`;

  return { subject, body };
};