import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Upload } from 'lucide-react';
import { TimelineItem } from '../types';

interface PhaseCardProps {
  item: TimelineItem;
  index: number;
  onImageUpdate: (newImage: string) => void;
}

export const PhaseCard: React.FC<PhaseCardProps> = ({ item, index, onImageUpdate }) => {
  const isEven = index % 2 === 0;
  const isCompleted = item.status === 'completed';
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpdate(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Visual Side */}
      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div 
          className={`relative aspect-video rounded-xl overflow-hidden glass-panel group border cursor-pointer ${item.status === 'active' ? 'border-gold-500/50' : 'border-neutral-800'}`}
          onClick={handleImageClick}
        >
           <input 
             type="file" 
             ref={fileInputRef} 
             onChange={handleFileChange} 
             className="hidden" 
             accept="image/*"
           />

           {item.image ? (
             <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-500" />
           ) : (
             <div className="w-full h-full bg-neutral-900 flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
               <item.icon className="w-16 h-16 text-neutral-700" />
             </div>
           )}
           
           {/* Upload Overlay */}
           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="flex flex-col items-center gap-2 text-white bg-black/60 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Upload className="w-6 h-6 text-gold-500" />
                <span className="text-xs font-mono uppercase tracking-widest">Replace Image</span>
              </div>
           </div>

           <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none" />
           
           <div className="absolute bottom-4 left-4 pointer-events-none">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono text-gold-400 mb-2">
               {item.status === 'completed' ? 'COMPLETED' : item.status === 'active' ? 'IN PROGRESS' : 'PLANNED'}
             </div>
           </div>
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <span className={`text-sm font-mono tracking-widest ${isCompleted ? 'text-neutral-500' : 'text-gold-500'}`}>
            {item.phase}
          </span>
          <div className="h-[1px] flex-grow bg-neutral-800"></div>
        </div>

        <h3 className={`text-3xl font-serif mb-2 ${isCompleted ? 'text-neutral-400' : 'text-white'}`}>
          {item.title}
        </h3>
        <p className="text-lg text-neutral-500 mb-6">{item.subtitle}</p>

        <p className="text-neutral-300 leading-relaxed mb-8">
          {item.description}
        </p>

        <ul className="space-y-4">
          {item.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3">
              {isCompleted ? (
                <CheckCircle2 className="w-5 h-5 text-neutral-600 mt-1 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
              )}
              <span className={`text-sm ${isCompleted ? 'text-neutral-500' : 'text-neutral-200'}`}>
                {detail}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

    </div>
  );
};