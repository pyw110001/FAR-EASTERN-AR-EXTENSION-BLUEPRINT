import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 py-12 border-t border-neutral-900 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h4 className="font-serif text-2xl text-neutral-700 mb-4">Far Eastern Group</h4>
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