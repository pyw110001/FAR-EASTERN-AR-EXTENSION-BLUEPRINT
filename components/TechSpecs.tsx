import React from 'react';
import { motion } from 'framer-motion';
import { TECH_SPECS } from '../constants';

export const TechSpecs: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">技术实力</h2>
          <p className="text-gold-500 font-mono text-sm uppercase tracking-widest">驱动未来的坚实核心</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_SPECS.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-panel p-8 rounded-xl border border-white/5 hover:border-gold-500/30 transition-colors group"
            >
              <div className="mb-6 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                <spec.icon className="w-6 h-6 text-neutral-400 group-hover:text-gold-400 transition-colors" />
              </div>
              
              <h3 className="text-neutral-500 text-xs font-mono uppercase tracking-wider mb-2">
                {spec.label}
              </h3>
              <p className="text-2xl font-bold text-white mb-2">{spec.value}</p>
              
              {spec.description && (
                <p className="text-sm text-neutral-400 leading-snug">
                  {spec.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-gold-900/20 to-neutral-900 border border-gold-500/10 text-center"
        >
            <h3 className="text-2xl font-serif text-white mb-2">共同开启建筑交互新纪元</h3>
            <p className="text-neutral-400 max-w-2xl mx-auto text-sm">
              为参观者、管理者与决策者提供前所未有的交互体验。
            </p>
        </motion.div>
      </div>
    </section>
  );
};