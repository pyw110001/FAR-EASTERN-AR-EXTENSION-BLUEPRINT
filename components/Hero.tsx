import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/10">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=8')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/90 to-neutral-950" />
      
      {/* Animated Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 flex items-center justify-center gap-4"
        >
          <span className="h-[1px] w-12 bg-gold-500/50"></span>
          <span className="text-gold-400 font-mono tracking-[0.3em] text-sm uppercase">Far Eastern Group</span>
          <span className="h-[1px] w-12 bg-gold-500/50"></span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-tight mb-6"
        >
          <span className="block text-white">空间即界面</span>
          <span className="block text-gradient-gold text-4xl md:text-6xl mt-2">AR沙盘与智慧建筑的融合新生</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-neutral-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto"
        >
          上海远企大楼 AR项目扩展方案 • 从静态展示到动态洞察
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll to Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
};