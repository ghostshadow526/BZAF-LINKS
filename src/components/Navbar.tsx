/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../data';

interface NavbarProps {
  onBookClick: () => void;
  onScrollTo: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onBookClick, onScrollTo, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: "IBRO'S FISH", id: 'fish' },
    { label: 'OUR HISTORY', id: 'why-us' },
    { label: 'REVIEWS', id: 'reviews' },
    { label: 'OUR GALLERY', id: 'gallery' }
  ];

  // Defensive routing function to ensure all links display and navigate correctly
  const handleNavClick = (id: string) => {
    if (id !== 'gallery' && id !== 'fish') {
      const el = document.getElementById(id);
      if (!el) {
        console.warn(`Target section #${id} was not found in the DOM tree, performing graceful fallback.`);
      }
    }
    onScrollTo(id);
    setIsOpen(false);
  };

  // Perform filtering for interactive search overlay
  const searchResults = PRODUCTS.filter(p => {
    if (!searchQuery) return false;
    const query = searchQuery.toLowerCase();
    return p.name.toLowerCase().includes(query) || 
           p.category.toLowerCase().includes(query) || 
           p.description.toLowerCase().includes(query);
  });

  const handleSearchResultClick = (productId: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    onScrollTo('cuts');
    
    // Graceful delay to wait for scroll animation, then pin-point highlight the card
    setTimeout(() => {
      const element = document.getElementById(`product-card-${productId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('ring-4', 'ring-brand-red', 'scale-[1.03]', 'shadow-2xl', 'shadow-brand-red/30');
        setTimeout(() => {
          element.classList.remove('ring-4', 'ring-brand-red', 'scale-[1.03]', 'shadow-2xl', 'shadow-brand-red/30');
        }, 2500);
      }
    }, 800);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 h-20 overflow-hidden" 
      id="main-nav"
    >
      {/* Absolute background image layer with fallback color to ensure it always renders perfectly */}
      <div 
        className="absolute inset-0 z-0 bg-[#111115]"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/navwall.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay to match image design style and ensure high contrast for links */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo - Replicating a premium title label on the left */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center space-x-2"
            id="nav-logo-container"
          >
            <span className="font-display font-black text-sm sm:text-base tracking-widest text-white hover:text-brand-red transition-colors uppercase select-none">
              RIDAS MEAT
            </span>
          </div>

          {/* Desktop Navigation Links - Centered Circular Logo Option in the exact middle of options */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8" id="desktop-nav-links">
            <button
              onClick={() => handleNavClick('home')}
              className={`font-display text-xs lg:text-sm font-bold tracking-widest transition-colors duration-200 cursor-pointer ${
                activeSection === 'home' 
                  ? 'text-brand-red' 
                  : 'text-gray-300 hover:text-white'
              }`}
              id="nav-link-home"
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick('fish')}
              className={`font-display text-xs lg:text-sm font-bold tracking-widest transition-colors duration-200 cursor-pointer ${
                activeSection === 'fish' 
                  ? 'text-brand-red' 
                  : 'text-gray-300 hover:text-white'
              }`}
              id="nav-link-fish"
            >
              IBRO'S FISH
            </button>

            {/* Centered Circular Logo replacing the WHY US text link */}
            <button
              onClick={() => handleNavClick('why-us')}
              className="px-2 group relative flex flex-col items-center justify-center focus:outline-none"
              id="nav-logo-centered-trigger"
              aria-label="Rida Legacy Promise"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-red bg-brand-dark shadow-lg shadow-brand-red/20 transition-all duration-300 group-hover:scale-110 group-hover:border-white">
                <img 
                  src="https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/logo.png.png" 
                  alt="Rida Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </button>

            <button
              onClick={() => handleNavClick('reviews')}
              className={`font-display text-xs lg:text-sm font-bold tracking-widest transition-colors duration-200 cursor-pointer ${
                activeSection === 'reviews' 
                  ? 'text-brand-red' 
                  : 'text-gray-300 hover:text-white'
              }`}
              id="nav-link-reviews"
            >
              REVIEWS
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className={`font-display text-xs lg:text-sm font-bold tracking-widest transition-colors duration-200 cursor-pointer ${
                activeSection === 'gallery' 
                  ? 'text-brand-red' 
                  : 'text-gray-300 hover:text-white'
              }`}
              id="nav-link-gallery"
            >
              OUR GALLERY
            </button>
          </div>

          {/* Actions: Search icon and mobile trigger (Shop Now & Cart removed precisely per requested instructions) */}
          <div className="flex items-center space-x-4" id="nav-actions-container">
            {/* Functional Search Icon Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-brand-red text-gray-300 p-2.5 transition-colors cursor-pointer rounded-full hover:bg-white/5" 
              aria-label="Search Catalog"
              id="nav-search-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-brand-slate rounded-lg cursor-pointer"
              aria-label="Toggle Navigation Menu"
              id="nav-mobile-menu-trigger"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-brand-dark px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-fade-in" id="mobile-nav-drawer">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-3 px-4 rounded-lg font-display text-base font-semibold tracking-wider cursor-pointer ${
                activeSection === item.id 
                  ? 'bg-brand-red/10 text-brand-red font-bold' 
                  : 'text-gray-300 hover:bg-brand-slate hover:text-white'
              }`}
              id={`nav-mobile-link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-white/5 flex flex-col space-y-3 px-4">
            <div className="flex items-center text-xs font-mono text-brand-gray">
              <ShieldCheck size={14} className="text-brand-red mr-2" />
              <span>100% Traceable Angus Beef</span>
            </div>
            <button
              onClick={() => { onBookClick(); setIsOpen(false); }}
              className="w-full bg-brand-red hover:bg-brand-red/90 text-center py-3 rounded text-xs font-display font-bold tracking-widest text-white uppercase"
            >
              BOOK A TABLE NOW
            </button>
          </div>
        </div>
      )}

      {/* Immersive Functional Search Overlay */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-lg flex flex-col pt-24 px-4 sm:px-6 lg:px-8 animate-fade-in"
          id="search-overlay-modal"
        >
          <div className="max-w-3xl mx-auto w-full flex flex-col space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-display font-black text-sm tracking-widest text-brand-red uppercase">
                SEARCH OUR MASTER CUTS
              </span>
              <button 
                onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                className="text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-full transition-all cursor-pointer"
                aria-label="Close search"
              >
                <X size={24} />
              </button>
            </div>

            <div className="relative">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type to search (e.g., Ribeye, Wagyu, Tomahawk, Roast)..."
                autoFocus
                className="w-full bg-brand-dark/80 border border-white/10 rounded-xl px-5 py-4 text-white text-lg placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
              />
            </div>

            {/* Live Search Results */}
            <div className="max-h-[60vh] overflow-y-auto space-y-3 pr-2" id="search-results-list">
              {searchResults.length > 0 ? (
                searchResults.map((product) => (
                  <div 
                    key={product.id}
                    onClick={() => handleSearchResultClick(product.id)}
                    className="flex items-center justify-between bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 rounded-xl p-4 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 bg-brand-dark shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-display font-bold text-sm text-white group-hover:text-brand-red transition-colors">
                          {product.name}
                        </h4>
                        <span className="text-[10px] font-mono text-brand-red font-bold uppercase tracking-wider block mt-0.5">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <span className="text-xs font-mono font-bold text-white px-2 py-1 bg-white/5 rounded">
                        {product.aging || 'Hand-Selected'}
                      </span>
                    </div>
                  </div>
                ))
              ) : searchQuery ? (
                <div className="text-center py-12 text-gray-500">
                  No products matched "{searchQuery}"
                </div>
              ) : (
                <div className="text-left text-gray-500 py-4 text-xs font-mono tracking-wider uppercase">
                  POPULAR SUGGESTIONS:
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Ribeye', 'Wagyu', 'Tomahawk', 'Striploin', 'Tenderloin'].map((term) => (
                      <button 
                        key={term}
                        onClick={() => setSearchQuery(term)}
                        className="bg-white/5 hover:bg-brand-red/10 border border-white/5 hover:border-brand-red/20 px-3 py-1.5 rounded-lg text-gray-300 hover:text-white transition-all text-xs cursor-pointer"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
