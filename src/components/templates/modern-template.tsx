import type { ResumeData } from '@/types/resume';
import { Mail, Phone, Linkedin, Globe, MapPin } from 'lucide-react';
import Image from 'next/image';

interface TemplateProps {
  data: ResumeData;
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-headline font-bold text-primary-foreground mb-4 border-b-2 border-primary/50 pb-2">
    {children}
  </h2>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-gray-600/50 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
    {children}
  </span>
);

export default function ModernTemplate({ data }: TemplateProps) {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="min-h-[297mm] flex font-sans bg-gray-800 text-gray-300">
      {/* Left Column */}
      <div className="w-1/3 bg-gray-900/70 p-8">
        {personalInfo.photoUrl && (
          <Image
            data-ai-hint="person"
            src={personalInfo.photoUrl}
            alt={personalInfo.name}
            width={150}
            height={150}
            className="rounded-full mx-auto mb-6 border-4 border-primary/80 shadow-lg"
          />
        )}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-headline font-bold text-white">{personalInfo.name}</h1>
        </div>

        <div className="space-y-4 text-sm">
          <h3 className="text-lg font-headline font-semibold text-white border-b border-gray-600 pb-1 mb-2">Contact</h3>
          {personalInfo.email && <p className="flex items-center break-all"><Mail className="w-4 h-4 mr-3 text-primary shrink-0" /> {personalInfo.email}</p>}
          {personalInfo.phone && <p className="flex items-center"><Phone className="w-4 h-4 mr-3 text-primary" /> {personalInfo.phone}</p>}
          {personalInfo.address && <p className="flex items-center"><MapPin className="w-4 h-4 mr-3 text-primary" /> {personalInfo.address}</p>}
          {personalInfo.linkedin && <p className="flex items-center break-all"><Linkedin className="w-4 h-4 mr-3 text-primary shrink-0" /> {personalInfo.linkedin}</p>}
          {personalInfo.website && <p className="flex items-center break-all"><Globe className="w-4 h-4 mr-3 text-primary shrink-0" /> {personalInfo.website}</p>}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-headline font-semibold text-white border-b border-gray-600 pb-1 mb-2">Skills</h3>
          <div className="flex flex-wrap">
            {skills.map(skill => <Pill key={skill}>{skill}</Pill>)}
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-headline font-semibold text-white border-b border-gray-600 pb-1 mb-2">Education</h3>
           {education.map(edu => (
            <div key={edu.id} className="mb-3 text-sm">
              <h4 className="font-bold text-white">{edu.degree}</h4>
              <p className="text-gray-400">{edu.institution}</p>
              <p className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="w-2/3 p-8">
        <section className="mb-8">
          <SectionTitle>Summary</SectionTitle>
          <p className="leading-relaxed text-sm">{summary}</p>
        </section>

        <section>
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-6">
            {experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-sm text-gray-400">{exp.startDate} - {exp.endDate}</p>
                </div>
                <h4 className="text-md font-semibold text-primary/80 mb-2">{exp.company}</h4>
                <ul className="list-disc list-inside text-sm space-y-1 pl-2 text-gray-400">
                  {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.replace(/^- /, '')}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
