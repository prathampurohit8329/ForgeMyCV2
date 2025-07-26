import type { ResumeData } from '@/types/resume';

export const initialData: ResumeData = {
  personalInfo: {
    name: 'Your Name',
    email: 'your.email@example.com',
    phone: '123-456-7890',
    linkedin: 'linkedin.com/in/yourprofile',
    website: 'yourportfolio.com',
    address: 'City, State',
    photoUrl: '',
  },
  summary:
    'A brief summary about your professional background, skills, and career goals. Highlight your most important qualifications.',
  experience: [
    {
      id: 'exp1',
      company: 'Awesome Company',
      role: 'Software Engineer',
      startDate: '2022-01',
      endDate: 'Present',
      description:
        '- Developed and maintained web applications using React and Node.js.\n- Collaborated with cross-functional teams to deliver high-quality software.\n- Improved application performance by 20%.',
    },
  ],
  education: [
    {
      id: 'edu1',
      institution: 'University of Technology',
      degree: 'B.S. in Computer Science',
      startDate: '2018-09',
      endDate: '2022-05',
      description: 'Relevant coursework: Data Structures, Algorithms, Web Development.',
    },
  ],
  skills: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'Problem Solving'],
  projects: [],
  certifications: [],
  languages: [{id: 'lang1', name: 'English', proficiency: 'Native'}],
};
