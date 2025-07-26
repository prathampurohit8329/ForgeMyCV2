import type { ResumeData } from '@/types/resume';
import { Mail, Phone, Linkedin, Globe, MapPin } from 'lucide-react';
import Image from 'next/image';

interface TemplateProps {
  data: ResumeData;
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 font-headline">
      {children}
    </h2>
  );

export default function MinimalistTemplate({ data }: TemplateProps) {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="bg-white text-gray-800 p-10 font-sans text-[10.5pt] min-h-[297mm]">
        <header className='text-center mb-10'>
            <h1 className="text-4xl font-bold font-headline text-gray-900">{personalInfo.name}</h1>
            <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-1 mt-3 text-xs text-gray-600">
                {personalInfo.phone && <span className="flex items-center"><Phone className="w-3 h-3 mr-1.5" />{personalInfo.phone}</span>}
                {personalInfo.email && <span className="flex items-center"><Mail className="w-3 h-3 mr-1.5" />{personalInfo.email}</span>}
                {personalInfo.address && <span className="flex items-center"><MapPin className="w-3 h-3 mr-1.5" />{personalInfo.address}</span>}
                {personalInfo.linkedin && <span className="flex items-center"><Linkedin className="w-3 h-3 mr-1.5" />{personalInfo.linkedin}</span>}
                {personalInfo.website && <span className="flex items-center"><Globe className="w-3 h-3 mr-1.5" />{personalInfo.website}</span>}
            </div>
        </header>

        <div className='grid grid-cols-12 gap-x-10'>
            <div className='col-span-8 space-y-6'>
                {summary && (
                    <section>
                        <SectionTitle>Summary</SectionTitle>
                        <p className="text-sm leading-relaxed">{summary}</p>
                    </section>
                )}
                
                <section>
                    <SectionTitle>Experience</SectionTitle>
                    <div className="space-y-4">
                    {experience.map(exp => (
                        <div key={exp.id}>
                            <div className="flex justify-between items-baseline mb-0.5">
                                <h3 className="font-bold text-md text-gray-800">{exp.role}</h3>
                                <p className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</p>
                            </div>
                            <h4 className="text-sm font-semibold text-gray-600 mb-1">{exp.company}</h4>
                            <ul className="list-disc list-outside text-sm space-y-1 text-gray-700 pl-4">
                                {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.replace(/^- /, '')}</li>)}
                            </ul>
                        </div>
                    ))}
                    </div>
                </section>
            </div>
            <div className='col-span-4 space-y-6'>
                 <section>
                    <SectionTitle>Skills</SectionTitle>
                    <div className="flex flex-wrap gap-2">
                        {skills.map(skill => <span key={skill} className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">{skill}</span>)}
                    </div>
                </section>
                <section>
                    <SectionTitle>Education</SectionTitle>
                    <div className="space-y-3">
                        {education.map(edu => (
                            <div key={edu.id} className="text-sm">
                            <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                            <p className="text-gray-600">{edu.institution}</p>
                            <p className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </div>

    </div>
  );
}
