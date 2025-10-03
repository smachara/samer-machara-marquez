import React from 'react';
import type { PersonalInfo } from '../types';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const ContactItem: React.FC<{ icon: string; text: string; link?: string; isLink: boolean }> = ({ icon, text, link, isLink }) => (
  <div className="flex items-center text-xs text-gray-600">
    <i className={`bx ${icon} text-blue-600 mr-2 text-base`}></i>
    {isLink ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

export const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start pb-4 border-b border-gray-200">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">{personalInfo.name}</h1>
        <h2 className="text-md font-semibold text-blue-600 mt-1">{personalInfo.title}</h2>
      </div>
      <div className="mt-4 sm:mt-0 grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-1 text-right">
         <ContactItem icon="bxs-map" text={personalInfo.location} isLink={false} />
         <ContactItem icon="bxs-envelope" text={personalInfo.email} link={`mailto:${personalInfo.email}`} isLink={true} />
         <ContactItem icon="bxs-phone" text={personalInfo.phone} link={`tel:${personalInfo.phone.replace(/\s/g, '')}`} isLink={true} />
         <ContactItem icon="bxl-linkedin" text={personalInfo.linkedin} link={`https://${personalInfo.linkedin}`} isLink={true} />
         <ContactItem icon="bxl-github" text={personalInfo.github} link={`https://${personalInfo.github}`} isLink={true} />
         <ContactItem icon="bx-globe" text={personalInfo.website} link={`https://${personalInfo.website}`} isLink={true} />
      </div>
    </header>
  );
};