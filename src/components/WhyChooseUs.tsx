/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Timer, Truck, Leaf, Sparkles, Award } from 'lucide-react';
import { ADVANTAGES } from '../data';

export default function WhyChooseUs() {
  
  // Resolve icon component dynamically
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="text-brand-red w-8 h-8" />;
      case 'Timer':
        return <Timer className="text-brand-red w-8 h-8" />;
      case 'Truck':
        return <Truck className="text-brand-red w-8 h-8" />;
      default:
        return <Award className="text-brand-red w-8 h-8" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-brand-dark relative overflow-hidden scroll-mt-16">
      {/* Background design accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/[0.02] rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main section heading block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16" id="why-us-intro">
          
          <div className="lg:col-span-5 text-center lg:text-left" id="why-us-title-wrapper">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-red uppercase block mb-3">
              THE RIDAS PROMISE
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
              WHY CHOOSE OUR <br className="hidden lg:block" />
              <span className="text-brand-red">PREMIUM BEEF</span>
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto lg:mx-0 mt-6"></div>
          </div>

          <div className="lg:col-span-7" id="why-us-subtitle-wrapper">
            <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              Unlike industrial supermarkets, Ridas Meat operates on a boutique farm-to-table supply network. We reject high-yield shortcuts to prioritize animal welfare, rich natural marbling, and precision wet and dry aging.
            </p>
          </div>

        </div>

        {/* 3 Column Grid with custom sketches/bordered boxes inspired by the bottom footer blocks in the image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="advantages-grid">
          {ADVANTAGES.map((adv, idx) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group bg-brand-slate/40 border border-white/5 hover:border-brand-red/25 rounded-2xl p-8 hover:bg-brand-slate/80 hover:shadow-2xl transition-all duration-500"
              id={`advantage-card-${idx}`}
            >
              {/* Corner accent border line that illuminates on hover */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-brand-red/0 rounded-tr-2xl group-hover:w-8 group-hover:h-8 group-hover:border-brand-red/60 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-brand-red/0 rounded-bl-2xl group-hover:w-8 group-hover:h-8 group-hover:border-brand-red/60 transition-all duration-300"></div>

              {/* Icon Container */}
              <div className="bg-brand-dark border border-white/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-red/35 transition-all duration-300 shadow-lg">
                {renderIcon(adv.icon)}
              </div>

              {/* Copy */}
              <h3 className="font-display font-black text-lg text-white mb-3 tracking-wide group-hover:text-brand-red transition-colors duration-200">
                {adv.title.toUpperCase()}
              </h3>
              
              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                {adv.description}
              </p>

              {/* Accent footer indicator */}
              <div className="mt-6 flex items-center text-[10px] font-mono tracking-widest text-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>GUARANTEED QUALITY STANDARD</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small stats/trust strip */}
        <div className="mt-16 bg-brand-slate/30 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-around items-center gap-6" id="why-us-stats-strip">
          <div className="text-center">
            <span className="font-display font-black text-2xl sm:text-3xl text-brand-red block">100%</span>
            <span className="text-[10px] font-mono text-brand-gray uppercase tracking-widest">Grass-Fed Certified</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <span className="font-display font-black text-2xl sm:text-3xl text-brand-red block">28 - 45</span>
            <span className="text-[10px] font-mono text-brand-gray uppercase tracking-widest">Days Dry Aged</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <span className="font-display font-black text-2xl sm:text-3xl text-brand-red block">12+</span>
            <span className="text-[10px] font-mono text-brand-gray uppercase tracking-widest">Generations of Heritage</span>
          </div>
        </div>

      </div>
    </section>
  );
}
