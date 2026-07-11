/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, ShieldCheck, Flame } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = 2026;

  const handleBackToTop = () => {
    onScrollTo('home');
  };

  return (
    <footer className="bg-brand-dark border-t border-white/5 py-16 relative" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/5" id="footer-upper">
          
          {/* Brand block */}
          <div className="md:col-span-4 space-y-4 flex flex-col items-center md:items-start text-center md:text-left" id="footer-brand">
            <div className="w-16 h-16 rounded-sm overflow-hidden border border-white/10 bg-[#16161b] p-1 flex items-center justify-center select-none" id="footer-logo">
              <img 
                src="https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/ridalogo.png" 
                alt="Rida Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[11px] text-brand-gray font-light max-w-xs leading-relaxed">
              Premium dry-aged beef supplies and culinary consulting services. Raised sustainably, butchered by hand, delivered in deep cold states.
            </p>
          </div>

          {/* Links block */}
          <div className="md:col-span-5 flex justify-center space-x-6 flex-wrap" id="footer-links">
            {['home', 'fish', 'why-us', 'reviews', 'gallery'].map((section) => (
              <button
                key={section}
                onClick={() => onScrollTo(section)}
                className="text-xs font-mono tracking-wider font-bold text-gray-400 hover:text-white uppercase cursor-pointer"
                id={`footer-link-${section}`}
              >
                {section === 'fish' ? "IBRO'S FISH" : section === 'why-us' ? 'OUR HISTORY' : section === 'gallery' ? 'OUR GALLERY' : section}
              </button>
            ))}
          </div>

          {/* Guarantee statement block */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end space-y-1.5" id="footer-guarantee">
            <div className="flex items-center space-x-2 text-brand-red text-xs font-bold" id="footer-badge-item">
              <ShieldCheck size={14} />
              <span className="font-mono tracking-wider uppercase">NAFDAC APPROVED</span>
            </div>
            <span className="text-[9px] font-mono text-brand-gray uppercase text-center md:text-right">
              REGISTRATION NO. 01-8374-MEAT • PREMIUM SELECTION
            </span>
          </div>

        </div>

        {/* Lower row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" id="footer-lower">
          
          <div className="text-left" id="footer-copyright">
            <span className="text-[10px] font-mono text-brand-gray block">
              © {currentYear} Ridas Meat. All Rights Reserved. Crafted with Culinary Precision.
            </span>
            <span className="text-[8px] font-mono text-brand-gray/50 block mt-0.5">
              Warning: consumption of undercooked premium ribeyes may lead to unprecedented steakhouse standards.
            </span>
          </div>

          {/* Back to top arrow */}
          <button
            onClick={handleBackToTop}
            className="group p-3 bg-brand-slate border border-white/10 hover:border-brand-red/50 text-gray-400 hover:text-white rounded-lg transition-all duration-300 cursor-pointer"
            aria-label="Back to Top"
            id="back-to-top-btn"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

      </div>
    </footer>
  );
}
