import type { ResumeData } from '@/types/resume';
import { Mail, Phone, Linkedin, Globe, MapPin, Briefcase, GraduationCap, Award, Lightbulb } from 'lucide-react';
import Image from 'next/image';

interface TemplateProps {
  data: ResumeData;
}

const Section = ({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) => (
  <section className="mb-6">
    <h2 className="text-sm font-bold uppercase tracking-[.2em] text-blue-600 mb-3 flex items-center">
      {icon && <span className="mr-3">{icon}</span>}
      {title}
    </h2>
    <div className="space-y-4">{children}</div>
  </section>
);


export default function ExecutiveTemplate({ data }: TemplateProps) {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="bg-white text-gray-800 p-10 font-sans text-[11pt] min-h-[297mm]">
      <header className="flex items-center mb-8 pb-4 border-b-2 border-gray-200">
        {personalInfo.photoUrl && (
          <Image
            data-ai-hint="person"
            src={personalInfo.photoUrl}
            alt={personalInfo.name}
            width={100}
            height={100}
            className="rounded-full mr-8 border-4 border-gray-100"
          />
        )}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 font-headline">{personalInfo.name}</h1>
          <div className="flex items-center space-x-5 mt-2 text-xs text-gray-500">
            {personalInfo.email && <span className="flex items-center"><Mail className="w-3.5 h-3.5 mr-1.5" />{personalInfo.email}</span>}
            {personalInfo.phone && <span className="flex items-center"><Phone className="w-3.5 h-3.5 mr-1.5" />{personalInfo.phone}</span>}
            {personalInfo.address && <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1.5" />{personalInfo.address}</span>}
          </div>
           <div className="flex items-center space-x-5 mt-1 text-xs text-gray-500">
             {personalInfo.linkedin && <span className="flex items-center"><Linkedin className="w-3.5 h-3.5 mr-1.5" />{personalInfo.linkedin}</span>}
            {personalInfo.website && <span className="flex items-center"><Globe className="w-3.5 h-3.5 mr-1.5" />{personalInfo.website}</span>}
           </div>
        </div>
      </header>

      <main className="grid grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="col-span-2">
           <Section title="Professional Summary">
            <p className="leading-relaxed text-sm">{summary}</p>
          </Section>

          <Section title="Work Experience" icon={<Briefcase size={18} />}>
            {experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-md font-bold text-gray-800">{exp.role}</h3>
                  <p className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</p>
                </div>
                <h4 className="text-sm font-semibold text-blue-600 mb-1">{exp.company}</h4>
                <ul className="list-disc list-inside text-xs space-y-1 text-gray-600">
                  {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.replace(/^- /, '')}</li>)}
                </ul>
              </div>
            ))}
          </Section>
        </div>

        {/* Right Column */}
        <div className="col-span-1">
          <Section title="Skills" icon={<Lightbulb size={18} />}>
             <div className="flex flex-wrap gap-1.5">
                {skills.map(skill => <span key={skill} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">{skill}</span>)}
            </div>
          </Section>
          
          <Section title="Education" icon={<GraduationCap size={18} />}>
            {education.map(edu => (
              <div key={edu.id} className="text-sm">
                <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </Section>
        </div>
      </main>
    </div>
  );
}
