import React from 'react';

interface FloatingActionsProps {
  onPrint: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onPrint }) => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 print:hidden">
      <button
        onClick={onPrint}
        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-110"
        title="Imprimer ou Enregistrer en PDF"
      >
        <i className='bx bxs-printer text-2xl'></i>
      </button>
    </div>
  );
};