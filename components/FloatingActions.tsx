import React from 'react';

interface FloatingActionsProps {
  onPrint: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onPrint }) => {
  const handleDownload = () => {
    const pdfUrl = 'https://smachara.github.io/samer-machara-marquez/assets/cv-samer-machara-marquez-2025.pdf';
    // const link = document.createElement('a');
    // link.href = pdfUrl;
    // link.download = 'cv-samer-machara-marquez-2025.pdf';
    // document.body.appendChild(link);
    // link.click();
    window.open(pdfUrl, '_blank');
    // document.body.removeChild(link);
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 print:hidden">
      <button
        onClick={handleDownload}
        className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-transform transform hover:scale-110"
        title="Télécharger le CV en PDF"
        aria-label="Télécharger le CV en PDF"
      >
        <i className='bx bxs-download text-2xl'></i>
      </button>

      <button
        onClick={onPrint}
        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-110"
        title="Imprimer ou Enregistrer en PDF"
        aria-label="Imprimer ou Enregistrer en PDF"
      >
        <i className='bx bxs-printer text-2xl'></i>
      </button>
    
    </div>
  );
};