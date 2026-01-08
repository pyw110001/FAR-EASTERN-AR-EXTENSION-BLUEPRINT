import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 py-12 border-t border-neutral-900 text-center">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* Logo Image Replacement */}
        <img 
          src="https://i.ibb.co/B2svMC5v/LOGO-BK.png" 
          alt="Far Eastern Group" 
          className="h-12 md:h-14 mb-6 opacity-90 hover:opacity-100 transition-opacity"
        />
        <p className="text-neutral-500 text-sm font-mono mb-8">
          AR EXTENSION PROJECT • CONFIDENTIAL
        </p>
        <p className="text-neutral-800 text-xs">
          © 2024 Design Concept. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};