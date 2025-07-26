import type { ResumeData } from '@/types/resume';
import { Mail, Phone, Linkedin, Globe, MapPin, Briefcase, GraduationCap, Star, User } from 'lucide-react';
import Image from 'next/image';

interface TemplateProps {
  data: ResumeData;
}

const Section = ({ title, icon, children, className }: { title: string; icon: React.ReactNode; children: React.ReactNode, className?: string }) => (
  <section className={className}>
    <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    <div className="space-y-3">
      {children}
    </div>
  </section>
);


export default function ProfessionalTemplate({ data }: TemplateProps) {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="bg-white text-gray-800 p-8 font-sans text-[10pt] min-h-[297mm] flex">
      {/* Left Column */}
      <aside className="w-1/3 pr-8 border-r border-gray-200">
         {personalInfo.photoUrl && (
          <Image
            data-ai-hint="person"
            src={personalInfo.photoUrl}
            alt={personalInfo.name}
            width={120}
            height={120}
            className="rounded-full mx-auto mb-6"
          />
        )}
        <div className="space-y-6">
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Contact</h3>
                <div className="space-y-2 text-xs">
                    {personalInfo.email && <p className="flex items-start"><Mail className="w-3.5 h-3.5 mr-2 text-gray-500 shrink-0 mt-0.5" /> <span className="break-all">{personalInfo.email}</span></p>}
                    {personalInfo.phone && <p className="flex items-center"><Phone className="w-3.5 h-3.5 mr-2 text-gray-500 shrink-0" /> {personalInfo.phone}</p>}
                    {personalInfo.address && <p className="flex items-start"><MapPin className="w-3.5 h-3.5 mr-2 text-gray-500 shrink-0 mt-0.5" /> {personalInfo.address}</p>}
                    {personalInfo.linkedin && <p className="flex items-start"><Linkedin className="w-3.5 h-3.5 mr-2 text-gray-500 shrink-0 mt-0.5" /> <span className="break-all">{personalInfo.linkedin}</span></p>}
                    {personalInfo.website && <p className="flex items-start"><Globe className="w-3.5 h-3.5 mr-2 text-gray-500 shrink-0 mt-0.5" /> <span className="break-all">{personalInfo.website}</span></p>}
                </div>
            </div>

            <div>
                 <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Skills</h3>
                <div className="flex flex-wrap gap-1.5">
                    {skills.map(skill => <span key={skill} className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">{skill}</span>)}
                </div>
            </div>

            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Education</h3>
                {education.map(edu => (
                <div key={edu.id} className="mb-2 text-xs">
                  <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>

        </div>
      </aside>
      
      {/* Right Column */}
      <main className="w-2/3 pl-8">
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 font-headline">{personalInfo.name}</h1>
        </header>

         <Section title="About Me" icon={<User className="w-4 h-4" />}>
            <p className="leading-relaxed text-sm">{summary}</p>
          </Section>

        <Section title="Work Experience" icon={<Briefcase className="w-4 h-4" />} className="mt-6">
           <div className="space-y-4">
              {experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-md font-bold text-gray-800">{exp.role}</h3>
                    <p className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</p>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-1">{exp.company}</h4>
                  <ul className="list-disc list-inside text-xs space-y-1 text-gray-600">
                    {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.replace(/^- /, '')}</li>)}
                  </ul>
                </div>
              ))}
            </div>
        </Section>
      </main>
    </div>
  );
}
