/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ProductCatalogProps {
  onBookClick: () => void;
}

// Hand-drawn sketch SVG components with dark strokes
const SkewerIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-dark fill-none stroke-[1.1] stroke-current select-none" id="icon-skewer">
    {/* Handle and Main skewer line */}
    <path d="M15 85 L85 15" />
    <circle cx="13" cy="87" r="3" />
    {/* Skewered meat cubes and veggies */}
    <rect x="25" y="60" width="14" height="14" rx="2" transform="rotate(-45 32 67)" className="fill-none" />
    <rect x="42" y="43" width="14" height="14" rx="2" transform="rotate(-45 49 50)" className="fill-none" />
    <rect x="59" y="26" width="14" height="14" rx="2" transform="rotate(-45 66 33)" className="fill-none" />
    {/* Spacers representing onion/peppers */}
    <path d="M25 75 L35 65" />
    <path d="M42 58 L52 48" />
    <path d="M59 41 L69 31" />
  </svg>
);

const RibsIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-dark fill-none stroke-[1.1] stroke-current select-none" id="icon-ribs">
    {/* Curved bone columns */}
    <path d="M25 45 C 35 20, 42 20, 48 45" />
    <path d="M40 45 C 50 20, 57 20, 63 45" />
    <path d="M55 45 C 65 20, 72 20, 78 45" />
    <path d="M70 45 C 80 20, 87 20, 93 45" />
    {/* Individual bone tips */}
    <circle cx="36" cy="25" r="2" />
    <circle cx="51" cy="25" r="2" />
    <circle cx="66" cy="25" r="2" />
    <circle cx="81" cy="25" r="2" />
    {/* Main ribeye slab outline */}
    <path d="M12 45 C 22 35, 82 35, 92 45 C 92 65, 12 65, 12 45 Z" />
    {/* Shading/texture */}
    <path d="M18 52 C 38 48, 68 48, 86 52" />
  </svg>
);

const SteakIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-dark fill-none stroke-[1.1] stroke-current select-none" id="icon-steak">
    {/* Steak perimeter boundary */}
    <path d="M25 30 C 15 50, 22 80, 52 80 C 72 80, 82 65, 82 45 C 82 25, 62 15, 42 20 C 32 22, 28 25, 25 30 Z" />
    {/* Distinct fat band */}
    <path d="M25 30 C 27 25, 33 22, 42 20 C 52 18, 62 25, 72 28 C 78 30, 80 35, 82 45" />
    {/* Marrow bone */}
    <path d="M52 45 C 52 35, 62 30, 67 35 C 69 40, 65 48, 55 48 C 53 48, 52 46, 52 45 Z" />
    <circle cx="60" cy="39" r="3" />
    {/* Meat grains and marbling */}
    <path d="M32 45 Q 37 50, 39 42" />
    <path d="M37 60 Q 45 62, 47 55" />
    <path d="M57 62 Q 65 58, 62 52" />
  </svg>
);

const DrumstickIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-dark fill-none stroke-[1.1] stroke-current select-none" id="icon-drumstick">
    {/* Drumstick fleshy bulb */}
    <path d="M25 45 C 20 25, 45 15, 60 30 C 70 40, 65 55, 55 65 L40 80" />
    {/* Exposed leg bone */}
    <path d="M42 78 L32 88" />
    {/* Cartilage bone joints */}
    <circle cx="29" cy="85" r="4" />
    <circle cx="34" cy="90" r="4" />
    {/* Simple shading line */}
    <path d="M38 42 C 45 38, 52 42, 55 50" />
  </svg>
);

export default function ProductCatalog({ onBookClick }: ProductCatalogProps) {
  return (
    <section 
      id="cuts" 
      className="relative w-full bg-[#f4f3f0] border-y border-brand-dark/5 scroll-mt-16 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen lg:min-h-[1050px] items-stretch">
        
        {/* Left Side: Full-bleed tall video occupying the side completely */}
        <div 
          className="lg:col-span-5 relative h-[500px] lg:h-auto w-full bg-brand-dark bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/section2.jpg')" }}
          id="catalog-video-col"
        >
          <video 
            src="https://ik.imagekit.io/qjg532nyu/SaveClip.App_AQNAJ0MQ5xoUT0cvd7Ure1uBgHUmnr58S2Ii_vr2HmDQY1swHr41rMweJIQaC2XRQWAK0iHsudlqAtDdpEsjQSy0.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster="https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/section2.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            id="catalog-looping-video"
          />
          {/* Transparent clean look, no dark filter or artificial shade */}
        </div>

        {/* Right Side: Clean light grey/off-white background with dark elements */}
        <div className="lg:col-span-7 flex flex-col justify-center py-16 lg:py-24 px-6 sm:px-12 lg:px-20 text-brand-dark text-left bg-[#f4f3f0]" id="catalog-content-col">
          
          {/* Handdrawn tiny label */}
          <span className="font-handwritten text-[#a5583a] text-3xl select-none block mb-3" id="catalog-cursive-label">
            the ridas promise
          </span>
          
          {/* Main Huge Typography Header */}
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-5xl text-brand-dark uppercase tracking-tight leading-[1.0] mb-6" id="catalog-main-title">
            why choose our <br />
            premium beef
          </h2>
          
          {/* Description Copy block */}
          <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed max-w-xl mb-10" id="catalog-desc-para">
            Unlike industrial supermarkets, Ridas Meat operates on a boutique farm-to-table supply network. We reject high-yield shortcuts to prioritize animal welfare, rich natural marbling, and precision wet and dry aging.
          </p>

          {/* 3 Premium Feature Cards with Rida Logo in the middle one */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mb-6" id="catalog-features-grid">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-start" id="feat-certified">
              <div className="mb-4">
                <SkewerIcon />
              </div>
              <h4 className="font-display font-black text-base text-brand-dark uppercase tracking-wide">
                100% Certified Premium
              </h4>
              <p className="text-gray-500 text-xs font-light mt-2 leading-relaxed">
                We only source from high-welfare farms that practice sustainable grazing, raising cattle with zero added hormones or non-therapeutic antibiotics.
              </p>
              <div className="mt-4 text-[9px] font-mono text-[#a5583a] tracking-widest font-semibold uppercase">
                GUARANTEED QUALITY STANDARD
              </div>
            </div>
            
            {/* Feature 2: With Circular Rida Logo */}
            <div className="flex flex-col items-start" id="feat-dryaging">
              <div className="mb-4 w-16 h-16 rounded-full overflow-hidden border border-brand-dark/15 flex items-center justify-center p-1 bg-white select-none">
                <img 
                  src="https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/logo.png.png" 
                  alt="Rida Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-display font-black text-base text-brand-dark uppercase tracking-wide">
                Artisanal Dry Aging
              </h4>
              <p className="text-gray-500 text-xs font-light mt-2 leading-relaxed">
                Our master butchers age beef in custom Himalayan salt brick chambers, temperature-locked to concentrate deep, nutty, umami undertones.
              </p>
              <div className="mt-4 text-[9px] font-mono text-[#a5583a] tracking-widest font-semibold uppercase">
                GUARANTEED QUALITY STANDARD
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-start" id="feat-delivery">
              <div className="mb-4">
                <DrumstickIcon />
              </div>
              <h4 className="font-display font-black text-base text-brand-dark uppercase tracking-wide">
                Precision Cold Delivery
              </h4>
              <p className="text-gray-500 text-xs font-light mt-2 leading-relaxed">
                Every order is hand-cut, vacuum-sealed, and shipped in custom thermal insulation with active gel-pack cooling to guarantee fresh kitchen arrival.
              </p>
              <div className="mt-4 text-[9px] font-mono text-[#a5583a] tracking-widest font-semibold uppercase">
                GUARANTEED QUALITY STANDARD
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
