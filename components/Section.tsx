import React from 'react';

interface SectionProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section className="no-break-inside">
      <h2 className="text-xl font-bold text-gray-700 mb-3 flex items-center border-b-2 border-gray-200 pb-1">
        <i className={`bx ${icon} text-blue-600 mr-3 text-2xl`}></i>
        <span>{title}</span>
      </h2>
      {children}
    </section>
  );
};