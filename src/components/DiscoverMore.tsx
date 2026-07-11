/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface CountUpProps {
  target: number;
  duration?: number;
}

function CountUp({ target, duration = 1200 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out quad
      const easePercentage = percentage * (2 - percentage);
      const currentCount = Math.floor(easePercentage * target);

      setCount(currentCount);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [hasStarted, target, duration]);

  return <span ref={elementRef}>{count}</span>;
}

export default function DiscoverMore() {
  const { scrollY } = useScroll();
  // Map scroll position to rotation degree. This will rotate the premium badge
  // clockwise on scroll down and anti-clockwise on scroll up.
  const rotate = useTransform(scrollY, [0, 5000], [0, 720]);

  return (
    <section 
      id="discover-more" 
      className="relative bg-[#f4f3f0] text-brand-dark py-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      {/* Top Torn Paper Edge Overlay */}
      <div className="absolute top-0 left-0 right-0 h-8 w-full z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1200 40" 
          preserveAspectRatio="none" 
          className="w-full h-full text-brand-dark fill-current"
        >
          <path d="M0,0 L15,14 L32,8 L48,16 L65,10 L82,15 L101,9 L118,14 L135,7 L152,16 L171,11 L189,17 L205,10 L222,14 L238,8 L255,16 L273,11 L291,17 L308,9 L325,14 L342,7 L359,16 L378,11 L396,17 L412,10 L429,14 L445,8 L462,16 L480,11 L498,17 L515,9 L532,14 L549,7 L566,16 L585,11 L603,17 L619,10 L636,14 L652,8 L669,16 L687,11 L705,17 L722,9 L739,14 L756,7 L773,16 L792,11 L810,17 L826,10 L843,14 L859,8 L876,16 L894,11 L912,17 L929,9 L946,14 L963,7 L980,16 L999,11 L1017,17 L1033,10 L1050,14 L1066,8 L1083,16 L1101,11 L1119,17 L1136,9 L1153,14 L1170,7 L1187,16 L1200,10 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* Bottom Torn Paper Edge Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-8 w-full z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1200 40" 
          preserveAspectRatio="none" 
          className="w-full h-full text-brand-dark fill-current rotate-180"
        >
          <path d="M0,0 L15,14 L32,8 L48,16 L65,10 L82,15 L101,9 L118,14 L135,7 L152,16 L171,11 L189,17 L205,10 L222,14 L238,8 L255,16 L273,11 L291,17 L308,9 L325,14 L342,7 L359,16 L378,11 L396,17 L412,10 L429,14 L445,8 L462,16 L480,11 L498,17 L515,9 L532,14 L549,7 L566,16 L585,11 L603,17 L619,10 L636,14 L652,8 L669,16 L687,11 L705,17 L722,9 L739,14 L756,7 L773,16 L792,11 L810,17 L826,10 L843,14 L859,8 L876,16 L894,11 L912,17 L929,9 L946,14 L963,7 L980,16 L999,11 L1017,17 L1033,10 L1050,14 L1066,8 L1083,16 L1101,11 L1119,17 L1136,9 L1153,14 L1170,7 L1187,16 L1200,10 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Stat Counters & Explore text */}
          <div className="lg:col-span-4 flex flex-col space-y-10" id="discover-left-stats">
            <div className="text-left">
              <span className="font-handwritten text-[#a5583a] text-3xl select-none block mb-2">
                Explore our world
              </span>
            </div>

            <div className="space-y-8">
              {/* Stat 1 */}
              <div className="flex items-center space-x-6" id="stat-row-1">
                <span className="font-display font-black text-5xl sm:text-6xl xl:text-7xl text-brand-dark tracking-tighter leading-none min-w-[140px]">
                  +<CountUp target={15} />
                </span>
                <div className="text-left border-l-2 border-[#a5583a]/20 pl-4 py-1">
                  <h4 className="font-display font-bold text-base text-brand-dark uppercase tracking-wide">
                    The Simple One
                  </h4>
                  <p className="text-gray-500 text-xs font-light max-w-[180px] leading-tight mt-1">
                    Carefully portioned cut tailored for individual culinary masters.
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center space-x-6" id="stat-row-2">
                <span className="font-display font-black text-5xl sm:text-6xl xl:text-7xl text-brand-dark tracking-tighter leading-none min-w-[140px]">
                  +<CountUp target={271} />
                </span>
                <div className="text-left border-l-2 border-[#a5583a]/20 pl-4 py-1">
                  <h4 className="font-display font-bold text-base text-brand-dark uppercase tracking-wide">
                    Essential Pack
                  </h4>
                  <p className="text-gray-500 text-xs font-light max-w-[180px] leading-tight mt-1">
                    A rich selection of daily favorites for robust family banquets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Discover & Feature image details */}
          <div className="lg:col-span-8 flex flex-col space-y-8 text-left" id="discover-right-content">
            
            {/* Header Area with Rotating Premium Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6" id="discover-header-area">
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark uppercase tracking-tight leading-[1.05] max-w-lg">
                Discover more <br className="hidden sm:block" />
                about our work
              </h2>
              
              {/* Rotating Premium Quality Badge */}
              <motion.div 
                style={{ rotate }}
                className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 relative self-start sm:self-center"
                id="rotating-premium-badge"
              >
                <img 
                  src="https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/goat.png" 
                  alt="Premium Quality" 
                  className="w-full h-full object-contain drop-shadow-md select-none"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Feature Description & Image Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4" id="discover-feature-row">
              {/* Left Column of Row: Image (Larger) */}
              <div className="md:col-span-7 relative group overflow-hidden bg-brand-dark shadow-xl aspect-[3/2] rounded" id="discover-image-container">
                <img 
                  src="https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/SaveClip.App_618825142_17848722651665304_1247894988905462155_n.jpg" 
                  alt="Flawless Dry-Aging Process" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Right Column of Row: Descriptions */}
              <div className="md:col-span-5 space-y-6 text-gray-700 text-xs sm:text-sm font-light leading-relaxed pr-2" id="discover-text-container">
                <p>
                  Professional consulting tailored to meet your unique business challenges and goals.
                </p>
                <p>
                  Comprehensive marketing strategies focused on increasing brand awareness and sales.
                </p>
              </div>
            </div>

            {/* Bottom Row Navigation Links (Section Footer) */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-10 border-t border-brand-dark/5 text-xs font-display font-extrabold uppercase tracking-widest text-brand-dark mt-4" id="discover-links-footer">
              <a href="#cuts" className="flex items-center space-x-1 group hover:text-brand-red transition-colors duration-300">
                <span>Support</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">&gt;</span>
              </a>
              <a href="#why-us" className="flex items-center space-x-1 group hover:text-brand-red transition-colors duration-300">
                <span>Maintenance</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">&gt;</span>
              </a>
              <a href="#contact" className="flex items-center space-x-1 group hover:text-brand-red transition-colors duration-300">
                <span>Marketing</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">&gt;</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

