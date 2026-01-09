import React, { useState } from 'react';
import { Loader2, Image as ImageIcon } from 'lucide-react';
import html2canvas from 'html2canvas';

interface Section {
  name: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

interface ExportButtonProps {
  sections: Section[];
}

export const ExportButton: React.FC<ExportButtonProps> = ({ sections }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);

    try {
      // Iterate through each section and export as PNG
      for (const section of sections) {
        if (!section.ref.current) continue;
        
        const element = section.ref.current;
        
        // Use html2canvas to capture the element
        const canvas = await html2canvas(element, {
          scale: 2, // High resolution for better quality
          useCORS: true, // Enable CORS for external images
          backgroundColor: '#0a0a0a', // Force background color
          logging: false,
        });

        // Convert to data URL
        const imgData = canvas.toDataURL('image/png');
        
        // Create a temporary link to trigger download
        const link = document.createElement('a');
        link.href = imgData;
        link.download = `FarEastern_${section.name}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Small delay to prevent browser throttling downloads
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    } catch (error) {
      console.error('Export failed', error);
      alert('Failed to generate PNGs. Please check console for details.');
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
          <span>Processing...</span>
        </>
      ) : (
        <>
          <ImageIcon className="w-5 h-5" />
          <span>Export PNGs</span>
        </>
      )}
    </button>
  );
};