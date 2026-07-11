/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';
import MarqueeTicker from './MarqueeTicker';

interface IbrosFishPageProps {
  onBackToHome: () => void;
  onBookClick: () => void;
}

export default function IbrosFishPage({ onBackToHome, onBookClick }: IbrosFishPageProps) {
  return (
    <div className="min-h-screen bg-[#0e0e11] pt-24 relative overflow-hidden font-sans text-white" id="ibros-fish-page-view">
      
      {/* Hero Section with Custom Background */}
      <div 
        className="relative w-full min-h-[110vh] flex items-center justify-center bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5"
        style={{ 
          backgroundImage: "url('https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/wallpaper.jpg')" 
        }}
        id="ibros-fish-hero"
      >
        {/* Dark Overlays for premium mood and readable contrast */}
        <div className="absolute inset-0 bg-black/45 z-0 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-0" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0e0e11] to-transparent pointer-events-none z-0" />

        <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center justify-center text-center px-4" id="fish-coming-soon-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-8"
          >
            {/* Elegant Back Button */}
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-[#a5583a] hover:text-white transition-colors uppercase group cursor-pointer"
              id="fish-back-btn"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </button>

            {/* Premium Header */}
            <div className="space-y-2 mt-4">
              <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#a5583a] font-bold block">
                the premium maritime collection
              </span>
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wider" id="fish-brand-header">
                IBRO'S FISH
              </h1>
            </div>

            {/* Cursive Big White Coming Soon Title */}
            <div className="relative py-4" id="fish-cursive-title-wrapper">
              <h2 className="font-handwritten text-white text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] select-none leading-none tracking-normal transform rotate-[-2deg]" id="fish-coming-soon-title">
                Coming Soon
              </h2>
            </div>

            {/* Est. Heritage subtitle */}
            <p className="text-gray-400 font-mono text-xs tracking-widest uppercase mt-6 max-w-md mx-auto leading-relaxed">
              Uncompromising Quality & Sustainable Sourcing
              <br />
              <span className="text-white/60 mt-2 block font-sans text-[11px] font-bold">FALL 2026</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Infinite scrolling marquee ticker showing quality stats & certifications */}
      <div className="relative z-20 -mt-8 mb-4">
        <MarqueeTicker />
      </div>

      {/* Testimonials section right beneath the main info */}
      <div className="w-full relative z-10" id="fish-testimonials-section">
        <Testimonials />
      </div>

      {/* Contact Us section below Testimonials */}
      <div className="w-full relative z-10" id="fish-contact-section">
        <ContactSection onBookClick={onBookClick} />
      </div>

    </div>
  );
}
