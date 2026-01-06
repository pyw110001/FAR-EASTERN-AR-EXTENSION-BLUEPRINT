import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TIMELINE_DATA } from '../constants';
import { PhaseCard } from './PhaseCard';

export const TimelineSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  
  // State to handle image updates
  const [phases, setPhases] = useState(TIMELINE_DATA);

  const handleImageUpdate = (id: string, newImage: string) => {
    setPhases(prevPhases => 
      prevPhases.map(phase => 
        phase.id === id ? { ...phase, image: newImage } : phase
      )
    );
  };

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-950">
       <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        
        <motion.div style={{ opacity }} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">我们的实现路径</h2>
          <p className="text-neutral-400 font-mono">三步进化，打造智慧孪生</p>
        </motion.div>

        {/* Vertical Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-40 bottom-40 w-[1px] bg-neutral-800 -translate-x-1/2 z-0" />

        <div className="relative z-10">
          {phases.map((item, index) => (
            <PhaseCard 
              key={item.id} 
              item={item} 
              index={index} 
              onImageUpdate={(newImage) => handleImageUpdate(item.id, newImage)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};