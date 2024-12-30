import { Blog } from '../types/blog';
import { FileText, Book, Award } from 'lucide-react';

export const blogs: Blog[] = [
  {
    id: '1',
    title: 'How to Write an Effective Resume',
    excerpt: 'Learn the key elements of a strong resume and how to make yours stand out to potential employers.',
    content: `
A well-crafted resume is your ticket to landing your dream job. Here's how to make yours stand out:

1. Start with a Strong Summary
- Keep it concise and targeted
- Highlight your most relevant skills and achievements
- Tailor it to the specific job you're applying for

2. Highlight Key Achievements
- Use specific numbers and metrics
- Focus on results rather than responsibilities
- Include relevant awards and recognition

3. Structure Your Experience
- List experiences in reverse chronological order
- Include company name, position, and dates
- Focus on achievements rather than duties

4. Skills Section
- Include both hard and soft skills
- Prioritize skills mentioned in the job description
- Keep it relevant to the position

5. Education and Certifications
- List your most recent education first
- Include relevant certifications
- Mention academic achievements if recent graduate

Remember to:
- Keep it to 1-2 pages
- Use consistent formatting
- Proofread carefully
- Update regularly
    `,
    author: 'Career Expert',
    date: '2024-03-20',
    readTime: '5 min read',
    icon: FileText,
  },
  {
    id: '2',
    title: 'Resume Formatting Tips',
    excerpt: 'Professional formatting guidelines to make your resume look clean and professional.',
    content: `
The format of your resume is just as important as its content. Here's how to make it look professional:

1. Choose the Right Font
- Use professional fonts like Arial, Calibri, or Helvetica
- Keep font size between 10-12 points
- Use consistent fonts throughout

2. Layout and Spacing
- Maintain consistent margins (0.5" to 1")
- Use white space effectively
- Keep alignment consistent
- Use bullet points for better readability

3. Section Organization
- Place most important information at the top
- Use clear section headings
- Keep sections clearly separated

4. File Format
- Save as PDF to preserve formatting
- Use a clear naming convention
- Test on different devices

5. Visual Elements
- Use bold and italics sparingly
- Consider using subtle color accents
- Ensure proper contrast for readability

Pro Tips:
- Test print your resume
- Ask others to review the layout
- Keep backup copies in different formats
    `,
    author: 'HR Professional',
    date: '2024-03-19',
    readTime: '4 min read',
    icon: Book,
  },
  {
    id: '3',
    title: 'Skills Section: What to Include',
    excerpt: 'A comprehensive guide on highlighting your skills effectively on your resume.',
    content: `
Your skills section is crucial in catching a recruiter's attention. Here's how to make it effective:

1. Technical Skills
- List relevant software and tools
- Include programming languages if applicable
- Mention industry-specific technologies
- Rate your proficiency honestly

2. Soft Skills
- Communication abilities
- Leadership experience
- Problem-solving capabilities
- Team collaboration
- Time management

3. Industry-Specific Skills
- Include keywords from job descriptions
- Focus on in-demand skills
- Keep up with industry trends
- Highlight unique specializations

4. Organization
- Group similar skills together
- Prioritize most relevant skills
- Use clear, concise descriptions
- Update regularly

5. Verification
- Be prepared to demonstrate skills
- Include certifications when possible
- Keep examples ready for interviews

Best Practices:
- Don't oversell your abilities
- Focus on quality over quantity
- Keep it relevant to the position
- Update as you learn new skills
    `,
    author: 'Recruitment Specialist',
    date: '2024-03-18',
    readTime: '6 min read',
    icon: Award,
  },
];