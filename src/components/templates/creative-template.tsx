import type { ResumeData } from '@/types/resume';
import { Mail, Phone, Linkedin, Globe, MapPin, Star, Briefcase, GraduationCap, Lightbulb } from 'lucide-react';
import Image from 'next/image';

interface TemplateProps {
  data: ResumeData;
}

const Section = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
  <section className="mb-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
      {icon}
      <span className="ml-3">{title}</span>
    </h2>
    {children}
  </section>
);

export default function CreativeTemplate({ data }: TemplateProps) {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="bg-white text-gray-700 p-8 font-sans text-[12pt] min-h-[297mm]">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          {personalInfo.photoUrl && (
            <Image
              data-ai-hint="person"
              src={personalInfo.photoUrl}
              alt={personalInfo.name}
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 border-4 border-gray-200 shadow-lg"
            />
          )}
          <h1 className="text-3xl font-bold text-center text-gray-900">{personalInfo.name}</h1>
          <div className="mt-6 space-y-3 text-sm">
            {personalInfo.email && <p className="flex items-center"><Mail className="w-4 h-4 mr-3 text-gray-500" /> {personalInfo.email}</p>}
            {personalInfo.phone && <p className="flex items-center"><Phone className="w-4 h-4 mr-3 text-gray-500" /> {personalInfo.phone}</p>}
            {personalInfo.address && <p className="flex items-center"><MapPin className="w-4 h-4 mr-3 text-gray-500" /> {personalInfo.address}</p>}
            {personalInfo.linkedin && <p className="flex items-center"><Linkedin className="w-4 h-4 mr-3 text-gray-500" /> {personalInfo.linkedin}</p>}
            {personalInfo.website && <p className="flex items-center"><Globe className="w-4 h-4 mr-3 text-gray-500" /> {personalInfo.website}</p>}
          </div>

           <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center"><Lightbulb className="w-5 h-5 mr-2" /> Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => <span key={skill} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-md">{skill}</span>)}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Section title="About Me" icon={<Star className="w-6 h-6 text-yellow-500" />}>
            <p className="leading-relaxed text-sm">{summary}</p>
          </Section>

          <Section title="Work Experience" icon={<Briefcase className="w-6 h-6 text-blue-500" />}>
            <div className="space-y-6">
              {experience.map(exp => (
                <div key={exp.id} className="border-l-4 border-blue-200 pl-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
                    <p className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</p>
                  </div>
                  <h4 className="text-md font-semibold text-gray-600 mb-2">{exp.company}</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                    {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.replace(/^- /, '')}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
          
          <Section title="Education" icon={<GraduationCap className="w-6 h-6 text-green-500" />}>
             <div className="space-y-4">
              {education.map(edu => (
                <div key={edu.id} className="border-l-4 border-green-200 pl-4">
                  <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <p>{edu.institution}</p>
                    <p>{edu.startDate} - {edu.endDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
