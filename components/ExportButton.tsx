import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ExportButtonProps {
  targetRef: React.RefObject<HTMLDivElement>;
}

export const ExportButton: React.FC<ExportButtonProps> = ({ targetRef }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    if (!targetRef.current) return;
    setIsExporting(true);

    try {
      const element = targetRef.current;
      
      // Temporary style adjustments for better capture
      const originalStyle = element.style.transform;
      element.style.transform = "none"; // Reset scroll transforms if any

      const canvas = await html2canvas(element, {
        scale: 2, // High resolution
        useCORS: true,
        backgroundColor: '#0a0a0a', // Ensure dark background
        logging: false,
        allowTaint: true,
      });

      // Restore styles
      element.style.transform = originalStyle;

      const imgData = canvas.toDataURL('image/jpeg', 0.9);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
      pdf.save('FarEastern_AR_Blueprint.pdf');
    } catch (error) {
      console.error('Export failed', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 bg-gold-500 text-neutral-950 font-bold rounded-full shadow-[0_0_20px_rgba(212,163,44,0.4)] hover:bg-gold-400 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isExporting ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Generating...</span>
        </>
      ) : (
        <>
          <Download className="w-5 h-5" />
          <span>Download Blueprint</span>
        </>
      )}
    </button>
  );
};