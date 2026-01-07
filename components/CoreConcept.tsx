import React from 'react';
import { motion } from 'framer-motion';
import { Box, ArrowRight, Activity } from 'lucide-react';

export const CoreConcept: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">
            從<span className="text-neutral-500 line-through decoration-gold-500/50 decoration-2">靜態展示</span><br/>
            到 <span className="text-gold-400">動態洞察</span>
          </h2>
          
          <div className="space-y-8">
            <div className="pl-6 border-l border-neutral-800">
              <h4 className="text-neutral-500 text-sm font-mono uppercase tracking-wider mb-2">現狀</h4>
              <p className="text-neutral-300 text-lg">現有沙盤：精美但資訊固化。無法即時反映建築內部的生命體徵。</p>
            </div>
            
            <div className="pl-6 border-l-2 border-gold-500">
              <h4 className="text-gold-500 text-sm font-mono uppercase tracking-wider mb-2">機遇</h4>
              <p className="text-white text-xl font-light leading-relaxed">
                我們的機遇在於融合兩者。透過 AR 技術，將 ESG、能耗、安防等複雜數據直觀地疊加載物理沙盤之上，賦予建築生命。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Abstract Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] md:h-[500px] w-full glass-panel rounded-2xl p-8 flex items-center justify-center overflow-hidden"
        >
           {/* Abstract Lines */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(212,163,44,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,163,44,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
           
           <div className="relative z-10 flex items-center gap-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-2xl border border-neutral-700 bg-neutral-900 flex items-center justify-center mb-4 mx-auto">
                  <Box className="w-10 h-10 text-neutral-500" />
                </div>
                <span className="text-neutral-500 font-mono text-sm">Physical</span>
              </div>

              <div className="flex flex-col items-center">
                 <ArrowRight className="w-8 h-8 text-gold-500 mb-2" />
                 <span className="text-gold-500 text-xs font-mono">AR Overlay</span>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 rounded-2xl border border-gold-500/30 bg-gold-900/10 flex items-center justify-center mb-4 mx-auto shadow-[0_0_30px_rgba(212,163,44,0.15)]">
                  <Activity className="w-10 h-10 text-gold-400" />
                </div>
                <span className="text-gold-400 font-mono text-sm">Digital Twin</span>
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};