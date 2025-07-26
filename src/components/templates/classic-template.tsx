import type { ResumeData } from '@/types/resume';
import { Mail, Phone, Linkedin, Globe, MapPin } from 'lucide-react';
import Image from 'next/image';

interface TemplateProps {
  data: ResumeData;
}

export default function ClassicTemplate({ data }: TemplateProps) {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="bg-white text-gray-800 p-8 font-serif text-[11pt] min-h-[297mm]">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-wider uppercase font-headline text-gray-900">{personalInfo.name}</h1>
        <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-gray-600">
          {personalInfo.address && <span className="flex items-center"><MapPin className="w-3 h-3 mr-1.5" />{personalInfo.address}</span>}
          {personalInfo.phone && <span className="flex items-center"><Phone className="w-3 h-3 mr-1.5" />{personalInfo.phone}</span>}
          {personalInfo.email && <span className="flex items-center"><Mail className="w-3 h-3 mr-1.5" />{personalInfo.email}</span>}
          {personalInfo.linkedin && <span className="flex items-center"><Linkedin className="w-3 h-3 mr-1.5" />{personalInfo.linkedin}</span>}
          {personalInfo.website && <span className="flex items-center"><Globe className="w-3 h-3 mr-1.5" />{personalInfo.website}</span>}
        </div>
      </header>
      
      <div className="border-t-4 border-gray-700 pt-6">
        <section className="mb-6">
          <h2 className="text-lg font-headline font-bold uppercase tracking-widest border-b-2 border-gray-200 pb-1 mb-3">Summary</h2>
          <p className="text-sm leading-relaxed">{summary}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-headline font-bold uppercase tracking-widest border-b-2 border-gray-200 pb-1 mb-3">Experience</h2>
          {experience.map(exp => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-md">{exp.role}</h3>
                <p className="text-xs">{exp.startDate} - {exp.endDate}</p>
              </div>
              <p className="italic text-sm text-gray-700">{exp.company}</p>
              <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.replace(/^- /, '')}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-headline font-bold uppercase tracking-widest border-b-2 border-gray-200 pb-1 mb-3">Education</h2>
          {education.map(edu => (
            <div key={edu.id} className="mb-3">
               <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-md">{edu.degree}</h3>
                <p className="text-xs">{edu.startDate} - {edu.endDate}</p>
              </div>
              <p className="italic text-sm text-gray-700">{edu.institution}</p>
              <p className="text-sm italic text-gray-600 mt-1">{edu.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-lg font-headline font-bold uppercase tracking-widest border-b-2 border-gray-200 pb-1 mb-3">Skills</h2>
          <p className="text-sm">{skills.join(' • ')}</p>
        </section>
      </div>
    </div>
  );
}
