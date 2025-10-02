import React from 'react';
import { cvData } from './cvData';
import type { Job, Education, Certificate } from './types';
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { FloatingActions } from './components/FloatingActions';
import { Section } from './components/Section';

const ExperienceItem: React.FC<{ job: Job }> = ({ job }) => (
  <div className="no-break-inside mb-4">
    <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
    <p className="text-sm font-medium text-blue-600">{job.period} | {job.company}</p>
    {job.companyDescription && <p className="text-xs text-gray-500 mt-1">{job.companyDescription}</p>}
    <ul className="mt-2 list-none space-y-1 pl-1">
      {job.responsibilities.map((resp, index) => (
        <li key={index} className="relative pl-4 text-sm text-gray-600 leading-snug">
          <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-blue-600"></span>
          {resp}
        </li>
      ))}
    </ul>
  </div>
);

const EducationItem: React.FC<{ edu: Education }> = ({ edu }) => (
  <div className="flex justify-between items-start mb-2">
    <div>
      <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
      <p className="text-sm text-gray-500">{edu.institution}</p>
    </div>
    <p className="text-sm text-gray-500 text-right flex-shrink-0 ml-4">{edu.period}</p>
  </div>
);

const CertificateItem: React.FC<{ cert: Certificate }> = ({ cert }) => (
    <div className="mb-2">
        <h4 className="font-medium text-sm text-gray-700">{cert.title}</h4>
        <p className="text-xs text-gray-500">{cert.issuer} | {cert.date}</p>
    </div>
);

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main id="cv-content" className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-lg print:shadow-none print:p-0">
        <Header personalInfo={cvData.personalInfo} />
        <Summary summary={cvData.summary} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 mt-6">
          <div className="md:col-span-2">
            <Section title="Expériences Professionnelles" icon="bx-briefcase-alt-2">
              {cvData.experience.map((job, index) => (
                <ExperienceItem key={index} job={job} />
              ))}
            </Section>
          </div>

          <div className="md:col-span-1 space-y-6 mt-6 md:mt-0">
            <Section title="Formation" icon="bxs-graduation">
              {cvData.education.map((edu, index) => (
                <EducationItem key={index} edu={edu} />
              ))}
            </Section>

            <Section title="Compétences" icon="bxs-chip">
              <div className="space-y-3">
                {cvData.skills.map((skillCat, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-sm text-gray-800 mb-1.5">{skillCat.category}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {skillCat.items.map((item, itemIndex) => (
                        <span key={itemIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
            
            <Section title="Certificats" icon="bxs-certification">
              {cvData.certificates.map((cert, index) => (
                 <CertificateItem key={index} cert={cert} />
              ))}
            </Section>

            <Section title="Langues" icon="bx-chat">
              <ul className="space-y-1">
                {cvData.languages.map((lang, index) => (
                  <li key={index} className="flex justify-between text-sm text-gray-700">
                    <span>{lang.name}</span>
                    <span className="text-gray-500">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Références" icon="bx-quote-alt-left">
                <p className="text-sm text-gray-600 italic">
                    {cvData.references}
                </p>
            </Section>
          </div>
        </div>
      </main>
      <FloatingActions onPrint={handlePrint} />
    </div>
  );
}