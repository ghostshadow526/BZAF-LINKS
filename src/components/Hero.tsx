/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight, Award, Flame } from 'lucide-react';
import { PRODUCTS, REVIEWS } from '../data';
import { MeatProduct } from '../types';

interface HeroProps {
  onAddToCart: (product: MeatProduct, weight: number) => void;
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onAddToCart, onScrollTo }: HeroProps) {
  // Use first 3 featured cuts for the sidebar list
  const featuredCuts = PRODUCTS.slice(0, 3);
  const featuredReview = REVIEWS[0];

  const handleFeaturedClick = (product: MeatProduct) => {
    // Scroll to catalog section, or add to cart with a standard weight of 2 lbs
    onAddToCart(product, 2);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-brand-dark"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #171720 0%, #0b0b0e 80%)'
      }}
    >
      {/* Decorative Dark Charcoal Textures and Ambient Smoke Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1600')" }}></div>
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="hero-grid">
        
        {/* Left Side Content - Bold branding and customer review card */}
        <div className="lg:col-span-4 flex flex-col space-y-8 text-center lg:text-left" id="hero-left-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 bg-brand-red/10 border border-brand-red/20 px-3 py-1.5 rounded-full" id="hero-badge">
              <Flame size={14} className="text-brand-red animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-brand-red uppercase">RIDAS CUSTOM DRY-AGING</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl text-white tracking-tight leading-none" id="hero-main-title">
              THE ONLY MEAT <br />
              <span className="text-brand-red relative inline-block mt-2">
                YOU'LL EVER NEED
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-brand-red/30"></span>
              </span>
            </h1>
            
            <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
              We deliver premium, sustainably-raised, hand-selected dry-aged beef cut precisely by master butchers. Direct to your kitchen.
            </p>
          </motion.div>

          {/* Solid Red BUY NOW button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="hero-buy-now-wrapper"
          >
            <button
              onClick={() => onScrollTo('cuts')}
              className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white font-display font-bold text-sm sm:text-base px-10 py-4 rounded-lg tracking-widest inline-flex items-center justify-center space-x-2 shadow-lg shadow-brand-red/20 hover:shadow-brand-red/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              id="hero-buy-now-btn"
            >
              <span>BUY NOW</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Floating Glass Testimonial Badge - Styled precisely like the John Smith block in the image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-brand-slate/65 border border-white/10 rounded-xl p-5 backdrop-blur-md shadow-2xl text-left max-w-md mx-auto lg:mx-0"
            id="hero-testimonial-badge"
          >
            <div className="flex items-center space-x-1 text-amber-500 mb-2" id="hero-testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-300 text-xs font-light italic leading-relaxed mb-3">
              "{featuredReview.comment}"
            </p>
            <div className="flex items-center justify-between" id="hero-testimonial-footer">
              <span className="text-[11px] font-mono tracking-wider font-semibold text-white uppercase">
                {featuredReview.author}
              </span>
              <button 
                onClick={() => onScrollTo('reviews')}
                className="text-[11px] font-mono tracking-wider text-brand-red hover:text-white font-bold transition-colors cursor-pointer"
              >
                SEE ALL REVIEWS →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Center Section - Centered floating raw prime steak with culinary particle details */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12" id="hero-center-steak-wrapper">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-full max-w-sm sm:max-w-md"
          >
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-brand-red/20 rounded-full filter blur-[80px] pointer-events-none scale-75 animate-pulse"></div>

            {/* Gentle float animation for the raw prime steak */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 1.5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative cursor-pointer group"
              onClick={() => onScrollTo('cuts')}
              id="floating-steak-container"
            >
              <img 
                src="/src/assets/images/prime_ribeye_steak_1783637253288.jpg"
                alt="Ridas Prime Bone-In Ribeye Steak" 
                className="w-full h-auto object-contain rounded-2xl shadow-2xl border border-white/5 group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                id="floating-steak-img"
              />
              
              {/* Overlay highlight badging */}
              <div className="absolute top-4 right-4 bg-black/75 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md flex items-center space-x-1" id="steak-award-badge">
                <Award size={12} className="text-brand-red" />
                <span className="text-[10px] font-mono tracking-widest text-white uppercase">TOP CHOICE</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Abstract floating salt grains */}
          <div className="absolute inset-0 pointer-events-none opacity-50 select-none">
            <span className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white/70 rounded-full filter blur-[0.5px]"></span>
            <span className="absolute bottom-1/3 left-12 w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="absolute top-12 right-1/3 w-1.5 h-1 bg-white/80 rounded-sm transform rotate-45"></span>
            <span className="absolute bottom-1/4 right-12 w-1 h-1 bg-white/60 rounded-full filter blur-[0.5px]"></span>
          </div>
        </div>

        {/* Right Side Column - OUR FEATURED PRODUCTS List */}
        <div className="lg:col-span-3 flex flex-col justify-center space-y-6" id="hero-right-column">
          <div className="text-center lg:text-left" id="featured-products-title-wrapper">
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-brand-gray block mb-1">
              SELECT AND TAP CUT
            </span>
            <h3 className="font-display font-extrabold text-lg text-white tracking-wider uppercase">
              OUR FEATURED PRODUCTS
            </h3>
          </div>

          <div className="space-y-4" id="featured-products-list">
            {featuredCuts.map((cut, index) => (
              <motion.div
                key={cut.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onClick={() => handleFeaturedClick(cut)}
                className="group flex items-center justify-between bg-brand-slate/40 hover:bg-brand-slate/80 border border-white/5 hover:border-white/15 rounded-xl p-3 backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-lg transform hover:-translate-x-1"
                id={`featured-item-${cut.id}`}
              >
                {/* Thumbnail */}
                <div className="flex items-center space-x-3" id={`featured-left-${cut.id}`}>
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 bg-brand-dark flex-shrink-0 relative">
                    <img 
                      src={cut.image} 
                      alt={cut.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      id={`featured-thumb-${cut.id}`}
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-display font-bold text-xs text-white tracking-wider group-hover:text-brand-red transition-colors">
                      {cut.name.toUpperCase()}
                    </h4>
                    <span className="text-[10px] font-mono text-brand-gray block mt-0.5">
                      {cut.marblingScore} • {cut.aging}
                    </span>
                  </div>
                </div>

                {/* Price block - styled precisely like the prominent red price tag in the design */}
                <div 
                  className="bg-brand-red group-hover:bg-brand-red/90 px-3 py-2 rounded-lg text-right min-w-[70px] flex flex-col justify-center transition-colors shadow-md shadow-brand-red/10"
                  id={`featured-price-block-${cut.id}`}
                >
                  <span className="font-mono text-[11px] font-bold text-white leading-none block">
                    ${cut.pricePerLb.toFixed(2)}
                  </span>
                  <span className="text-[8px] font-mono tracking-widest text-white/80 block mt-0.5 font-semibold">
                    / LB
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center lg:text-left pt-2" id="hero-explore-all-cuts-wrapper">
            <button 
              onClick={() => onScrollTo('cuts')}
              className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold tracking-widest text-brand-gray hover:text-brand-red transition-colors cursor-pointer group"
            >
              <span>BROWSE ALL PREMIUM CUTS</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      {/* Bento Promo Banner Footer at the very bottom of Hero */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-red via-brand-red/80 to-brand-slate"></div>
    </section>
  );
}
