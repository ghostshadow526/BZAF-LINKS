/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface WhyChooseUsProps {
  onBookClick?: () => void;
}

// Hand-drawn sketch SVG components with dark strokes
const SkewerIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-dark fill-none stroke-[1.1] stroke-current select-none" id="why-icon-skewer">
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
  <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-dark fill-none stroke-[1.1] stroke-current select-none" id="why-icon-ribs">
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
  <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-dark fill-none stroke-[1.1] stroke-current select-none" id="why-icon-steak">
    {/* Steak perimeter boundary */}
    <path d="M25 30 C 15 50, 22 80, 52 80 C 72 80, 82 65, 82 45 C 82 25, 62 15, 42 20 C 32 22, 28 25, 25 30 Z" />
    {/* Distinct fat band */}
    <path d="M25 30 C 27 25, 33 22, 42 20 C 52 18, 62 25, 72 28 C 78 30, 80 35, 82 45" />
    {/* Marrow bone */}
    <path d="M52 45 C 52 35, 62 30, 67 35 Q 69 40, 65 48 C 55 48, 53 48, 52 45 Z" />
    <circle cx="60" cy="39" r="3" />
    {/* Meat grains and marbling */}
    <path d="M32 45 Q 37 50, 39 42" />
    <path d="M37 60 Q 45 62, 47 55" />
    <path d="M57 62 Q 65 58, 62 52" />
  </svg>
);

const DrumstickIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 text-brand-dark fill-none stroke-[1.1] stroke-current select-none" id="why-icon-drumstick">
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

export default function WhyChooseUs({ onBookClick = () => {} }: WhyChooseUsProps) {
  return (
    <section 
      id="why-us" 
      className="relative w-full bg-[#f4f3f0] border-b border-brand-dark/5 scroll-mt-16 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen lg:min-h-[850px] items-stretch">
        
        {/* Left Side: Clean light grey/off-white background with dark elements */}
        <div className="lg:col-span-7 flex flex-col justify-center py-16 lg:py-24 px-6 sm:px-12 lg:px-20 text-brand-dark text-left bg-[#f4f3f0]" id="why-us-content-col">
          
          {/* Handdrawn tiny label */}
          <span className="font-handwritten text-[#a5583a] text-3xl select-none block mb-3" id="why-us-cursive-label">
            our history
          </span>
          
          {/* Main Huge Typography Header */}
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-5xl text-brand-dark uppercase tracking-tight leading-[1.0] mb-6" id="why-us-main-title">
            We help your <br />
            business grow
          </h2>
          
          {/* Description Copy block */}
          <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed max-w-xl mb-10" id="why-us-desc-para">
            Our team is committed to delivering high-quality services tailored to your needs. With years of experience and a passion for excellence, we focus on creating solutions that truly make a difference. We believe in building strong relationships based on trust and clear communication.
          </p>

          {/* 4 Feature Cards with Custom Hand-Drawn Minimalist Meat Sketches */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 max-w-xl mb-4" id="why-us-features-grid">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-start" id="why-feat-planning">
              <SkewerIcon />
              <h4 className="font-display font-bold text-lg text-brand-dark uppercase tracking-wide mt-4">
                Planning
              </h4>
              <p className="text-gray-500 text-xs font-light mt-1">
                High Quality Standards
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-start" id="why-feat-assistance">
              <RibsIcon />
              <h4 className="font-display font-bold text-lg text-brand-dark uppercase tracking-wide mt-4">
                Assistance
              </h4>
              <p className="text-gray-500 text-xs font-light mt-1">
                Attention To Detail
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-start" id="why-feat-management">
              <SteakIcon />
              <h4 className="font-display font-bold text-lg text-brand-dark uppercase tracking-wide mt-4">
                Management
              </h4>
              <p className="text-gray-500 text-xs font-light mt-1">
                Premium Experience
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="flex flex-col items-start" id="why-feat-coordination">
              <DrumstickIcon />
              <h4 className="font-display font-bold text-lg text-brand-dark uppercase tracking-wide mt-4">
                Coordination
              </h4>
              <p className="text-gray-500 text-xs font-light mt-1">
                Trusted Expert Support
              </p>
            </div>

          </div>

        </div>

        {/* Right Side: Full-bleed tall video occupying the side completely */}
        <div 
          className="lg:col-span-5 relative h-[500px] lg:h-auto w-full bg-brand-dark bg-cover bg-center overflow-hidden"
          id="why-us-video-col"
        >
          <video 
            src="https://ik.imagekit.io/qjg532nyu/SaveClip.App_AQPXIhozgjk4I60CcGpQ6RAy1TgKNJYE47cFDKrIJ4oligNsKSN6-jvHSgksNO-Bbj_AajE-doVRP49GZZCilKJWt9N3zzHzNvMb-w8.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
            id="why-us-looping-video"
          />
          {/* Transparent clean look, no dark filter or artificial shade */}
        </div>

      </div>
    </section>
  );
}
