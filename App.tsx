import React from 'react';
import { Hero } from './components/Hero';
import { CoreConcept } from './components/CoreConcept';
import { TimelineSection } from './components/TimelineSection';
import { TechSpecs } from './components/TechSpecs';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="bg-neutral-950 min-h-screen text-white selection:bg-gold-500 selection:text-black">
      <div className="bg-neutral-950">
        <Hero />
        <CoreConcept />
        <TimelineSection />
        <TechSpecs />
        <Footer />
      </div>
    </main>
  );
};

export default App;