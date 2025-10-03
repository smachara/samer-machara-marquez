import React from 'react';

interface SummaryProps {
  summary: string;
}

export const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <section className="py-4">
      <p className="text-center text-sm text-gray-700 leading-relaxed">
        {summary}
      </p>
    </section>
  );
};