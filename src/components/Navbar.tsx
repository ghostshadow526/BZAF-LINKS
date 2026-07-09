/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Phone, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onScrollTo: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ cartCount, onCartClick, onScrollTo, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'OUR CUTS', id: 'cuts' },
    { label: 'WHY US', id: 'why-us' },
    { label: 'REVIEWS', id: 'reviews' },
    { label: 'CONTACT', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/5" id="main-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Styled precisely like the "MEAT MASTER" block from the image */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center bg-brand-red px-6 h-20 -ml-4 sm:-ml-6 lg:-ml-8 relative group overflow-hidden"
            id="nav-logo-container"
          >
            <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="font-display font-extrabold text-2xl tracking-widest text-white relative z-10 select-none">
              RIDAS MEAT
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8" id="desktop-nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-display text-sm font-semibold tracking-wider transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-brand-red font-bold' 
                    : 'text-gray-300 hover:text-white'
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions: Phone Number, Cart & Order Now */}
          <div className="flex items-center space-x-4" id="nav-actions-container">
            {/* Phone badge */}
            <a 
              href="tel:+155574327" 
              className="hidden lg:flex items-center text-xs font-mono text-brand-gray hover:text-brand-red transition-colors space-x-1"
              id="nav-phone-link"
            >
              <Phone size={12} />
              <span>(555) 743-2763</span>
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2.5 text-gray-300 hover:text-white bg-brand-slate hover:bg-brand-slate/80 border border-white/10 rounded-lg transition-all duration-200 cursor-pointer group"
              aria-label="Open Shopping Cart"
              id="nav-cart-btn"
            >
              <ShoppingBag size={20} className="group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span 
                  className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-[10px] font-mono font-bold text-white ring-2 ring-brand-dark animate-bounce"
                  id="nav-cart-badge"
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Shop Now Action Button */}
            <button
              onClick={() => handleNavClick('cuts')}
              className="hidden sm:inline-flex border border-white/20 hover:border-brand-red px-5 py-2.5 rounded-lg text-sm font-display font-bold tracking-wider hover:bg-brand-red/10 transition-all duration-300 cursor-pointer"
              id="nav-shop-now-btn"
            >
              SHOP NOW
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-brand-slate rounded-lg cursor-pointer"
              aria-label="Toggle Navigation Menu"
              id="nav-mobile-menu-trigger"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
              onClick={() => { handleNavClick('cuts'); setIsOpen(false); }}
              className="w-full bg-brand-red hover:bg-brand-red/90 text-center py-3 rounded-lg text-sm font-display font-bold tracking-widest text-white"
            >
              EXPLORE OUR CUTS
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
