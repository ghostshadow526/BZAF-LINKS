/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Calculator, ShoppingCart, Check, Info, FlameKindling, Utensils } from 'lucide-react';
import { PRODUCTS } from '../data';
import { MeatProduct } from '../types';

interface ProductCatalogProps {
  onAddToCart: (product: MeatProduct, weight: number) => void;
}

export default function ProductCatalog({ onAddToCart }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Steaks' | 'Roasts' | 'Ground' | 'Wagyu'>('All');
  const [productWeights, setProductWeights] = useState<Record<string, number>>({});
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const categories: ('All' | 'Steaks' | 'Roasts' | 'Ground' | 'Wagyu')[] = ['All', 'Steaks', 'Roasts', 'Ground', 'Wagyu'];

  // Filter products
  const filteredProducts = PRODUCTS.filter(p => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  // Get current weight for a product (default to 2 lbs)
  const getWeight = (id: string) => productWeights[id] || 2;

  // Handle slider weight changes
  const handleWeightChange = (id: string, weight: number) => {
    setProductWeights(prev => ({ ...prev, [id]: weight }));
  };

  const handleAddToCart = (product: MeatProduct) => {
    const weight = getWeight(product.id);
    onAddToCart(product, weight);
    
    // Trigger localized success animation feedback
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1500);
  };

  // Get optimal cooking suggestion based on product type
  const getCookingTip = (category: string) => {
    switch (category) {
      case 'Steaks': return 'Pan-sear with butter & rosemary or Grill high heat';
      case 'Wagyu': return 'Sear briefly on a pre-heated cast iron, no oil needed';
      case 'Roasts': return 'Low & slow smoking or slow-roasted oven bake';
      case 'Ground': return 'Medium-high heat cast iron skillet or backyard grill';
      default: return 'Reverse sear or sous vide for premium results';
    }
  };

  return (
    <section id="cuts" className="py-24 bg-brand-slate border-y border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="catalog-header-wrapper">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-red uppercase block mb-3">
            MASTER BUTCHER SELECTIONS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight" id="catalog-title">
            BROWSE OUR PREMIUM CUTS
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 mb-6"></div>
          <p className="text-brand-gray text-sm sm:text-base font-light">
            Each cut is carved by hand on the day of delivery, vacuum sealed immediately, and labeled with its unique farm source and aging parameters.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="catalog-category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`font-display text-xs sm:text-sm font-bold tracking-widest px-6 py-3 rounded-lg border transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/10'
                  : 'bg-brand-dark/40 border-white/5 text-gray-300 hover:text-white hover:bg-brand-dark/80 hover:border-white/15'
              }`}
              id={`category-tab-${category.toLowerCase()}`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Products Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="catalog-grid">
          
          {/* Loop over filtered products */}
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const currentWeight = getWeight(product.id);
              const calculatedPrice = product.pricePerLb * currentWeight;
              const isAdded = addedProductId === product.id;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-brand-dark/50 border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
                  id={`product-card-${product.id}`}
                >
                  
                  {/* Card Media Section */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-dark" id={`card-media-${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      id={`card-img-${product.id}`}
                    />
                    
                    {/* Floating Aging Label */}
                    {product.aging && (
                      <div className="absolute bottom-4 left-4 bg-brand-dark/85 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md" id={`card-aging-${product.id}`}>
                        <span className="text-[10px] font-mono font-bold tracking-wider text-brand-red uppercase">
                          {product.aging}
                        </span>
                      </div>
                    )}

                    {/* Category Label */}
                    <div className="absolute top-4 left-4 bg-brand-red px-2.5 py-1 rounded text-[9px] font-mono tracking-widest text-white font-bold" id={`card-cat-${product.id}`}>
                      {product.category.toUpperCase()}
                    </div>

                    {/* Marbling Score Badge */}
                    {product.marblingScore && (
                      <div className="absolute top-4 right-4 bg-black/75 px-2.5 py-1 rounded text-[9px] font-mono tracking-widest text-brand-gray border border-white/15 font-semibold" id={`card-marbling-${product.id}`}>
                        {product.marblingScore}
                      </div>
                    )}
                  </div>

                  {/* Card Details Section */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-6" id={`card-body-${product.id}`}>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-display font-extrabold text-lg text-white group-hover:text-brand-red transition-colors duration-200">
                          {product.name}
                        </h3>
                        <span className="font-mono text-xs font-bold text-brand-red shrink-0 ml-2 mt-1">
                          ${product.pricePerLb.toFixed(2)}/LB
                        </span>
                      </div>
                      
                      <p className="text-xs text-gray-400 font-light leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Interactive Weight Slider & Pricing Calculator */}
                    <div className="bg-brand-slate/60 border border-white/5 rounded-xl p-4 space-y-3" id={`weight-calculator-${product.id}`}>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-brand-gray flex items-center gap-1">
                          <Calculator size={13} className="text-brand-red" />
                          SELECT WEIGHT:
                        </span>
                        <span className="text-white font-bold bg-brand-dark border border-white/10 px-2 py-0.5 rounded">
                          {currentWeight.toFixed(1)} LBs
                        </span>
                      </div>

                      <input 
                        type="range"
                        min="1.0"
                        max="10.0"
                        step="0.5"
                        value={currentWeight}
                        onChange={(e) => handleWeightChange(product.id, parseFloat(e.target.value))}
                        className="w-full accent-brand-red h-1.5 bg-brand-dark rounded-lg cursor-pointer appearance-none"
                        id={`weight-slider-${product.id}`}
                      />

                      <div className="flex items-center justify-between pt-1 border-t border-white/5">
                        <span className="text-[10px] font-mono text-brand-gray">ESTIMATED TOTAL:</span>
                        <span className="font-mono text-sm font-black text-white tracking-tight">
                          ${calculatedPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Quick Chef's Tip */}
                    <div className="flex items-start space-x-2 text-[10px] text-brand-gray bg-brand-dark/30 p-2 rounded-lg border border-white/5">
                      <Utensils size={12} className="text-brand-red/70 mt-0.5 shrink-0" />
                      <span><strong>Chef tip:</strong> {getCookingTip(product.category)}</span>
                    </div>

                    {/* Add To Cart Trigger */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`w-full py-3.5 rounded-xl text-xs font-display font-bold tracking-widest uppercase flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                          : 'bg-brand-red hover:bg-brand-red/90 text-white shadow-lg shadow-brand-red/5 hover:shadow-brand-red/15 transform hover:-translate-y-0.5'
                      }`}
                      id={`card-add-btn-${product.id}`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={14} className="animate-scale" />
                          <span>ADDED TO BASKET!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={14} />
                          <span>ADD {currentWeight.toFixed(1)} LBs TO BASKET</span>
                        </>
                      )}
                    </button>

                  </div>

                </motion.div>
              );
            })}

            {/* Custom Static Card showcasing seared steak - rhythmic design break! */}
            {selectedCategory === 'All' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-dark/30 border border-brand-red/20 rounded-2xl overflow-hidden flex flex-col justify-between p-6 relative group"
                id="dry-aging-showcase-card"
              >
                <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
                  <div className="w-full h-full bg-brand-red"></div>
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center space-x-2 text-brand-red" id="showcase-badge">
                    <FlameKindling size={16} className="animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase">THE DRY-AGING STANDARD</span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-white tracking-tight leading-snug">
                    HOW WE AGE TO PERFECTION
                  </h3>

                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Dry-aging isn’t just storage; it’s an art form. Our custom-designed Himalayan pink salt aging chambers draw out moisture while naturally occurring enzymes break down connective tissue. This concentrates the deep beefy flavor into a nutty, buttery delicacy.
                  </p>
                </div>

                {/* Sliced steak generated image embedding */}
                <div className="my-4 aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-black relative" id="showcase-image-wrapper">
                  <img 
                    src="/src/assets/images/seared_premium_steak_1783637281802.jpg" 
                    alt="Seared premium dry-aged steak serving suggestion" 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    id="showcase-sliced-steak-img"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-[8px] font-mono text-white tracking-widest uppercase font-semibold">
                    SERVING SUGGESTION
                  </div>
                </div>

                <div className="pt-2" id="showcase-card-footer">
                  <a 
                    href="#contact" 
                    className="text-xs font-mono font-bold text-brand-red hover:text-white transition-colors tracking-wider block"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('contact');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    CONSULT WITH OUR BUTCHER →
                  </a>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
