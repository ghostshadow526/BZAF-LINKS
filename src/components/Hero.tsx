/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onBookClick: () => void;
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onBookClick, onScrollTo }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-[115vh] pt-40 sm:pt-48 pb-32 flex items-center justify-start overflow-hidden bg-brand-dark"
      style={{
        backgroundImage: "url('https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20" id="hero-grid">
        <div className="max-w-4xl flex flex-col space-y-10 text-left animate-fade-in pl-0" id="hero-left-content">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Branded Logo Badge */}
            <div className="flex items-center space-x-6 mb-4" id="hero-logo-badge">
              <img 
                src="https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/ridalogo.png" 
                alt="Rida Logo" 
                className="w-24 sm:w-32 h-auto object-contain select-none"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <span className="font-handwritten text-[#a5583a] text-3xl block select-none leading-none">Established Heritage</span>
                <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase block mt-2">Rida Premium Quality</span>
              </div>
            </div>

            <h1 className="font-display font-black text-white uppercase select-none leading-none tracking-tight" id="hero-main-title">
              <span className="block text-4xl sm:text-6xl lg:text-7xl tracking-tight">THE ONLY MEAT</span>
              <span className="block text-xl sm:text-3xl lg:text-4xl text-brand-red font-extrabold tracking-wide mt-4">YOU'LL EVER NEED</span>
            </h1>

            <p className="text-gray-300 text-xs sm:text-sm font-light max-w-xl leading-relaxed my-6" id="hero-tagline">
              Master-carved by hand, hand-selected from elite organic pastures, and aged to flawless perfection. Taste the legendary standard of premium cuts reserved for culinary purists.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onScrollTo('contact')}
                className="bg-white/5 backdrop-blur-md border border-white/10 text-white font-display font-bold text-xs sm:text-sm tracking-[0.2em] px-10 py-5 uppercase transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:text-brand-red hover:scale-105 active:scale-95 shadow-xl shadow-black/40 inline-flex items-center space-x-2 rounded-sm cursor-pointer"
                id="hero-inquire-btn"
              >
                <span>INQUIRE WITH US &gt;</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bento Promo Banner Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5 z-20"></div>
    </section>
  );
}
