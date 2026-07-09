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
          <div className="md:col-span-4 space-y-4 text-center md:text-left" id="footer-brand">
            <span className="font-display font-black text-2xl tracking-widest text-brand-red select-none">
              RIDAS MEAT
            </span>
            <p className="text-[11px] text-brand-gray font-light max-w-xs leading-relaxed">
              Premium dry-aged beef supplies and culinary consulting services. Raised sustainably, butchered by hand, delivered in deep cold states.
            </p>
          </div>

          {/* Links block */}
          <div className="md:col-span-5 flex justify-center space-x-6 flex-wrap" id="footer-links">
            {['home', 'cuts', 'why-us', 'reviews', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => onScrollTo(section)}
                className="text-xs font-mono tracking-wider font-bold text-gray-400 hover:text-white uppercase cursor-pointer"
                id={`footer-link-${section}`}
              >
                {section === 'cuts' ? 'OUR CUTS' : section === 'why-us' ? 'WHY US' : section}
              </button>
            ))}
          </div>

          {/* Guarantee statement block */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end space-y-1.5" id="footer-guarantee">
            <div className="flex items-center space-x-2 text-brand-red text-xs font-bold" id="footer-badge-item">
              <ShieldCheck size={14} />
              <span className="font-mono tracking-wider uppercase">100% TRACEABLE ANGUS</span>
            </div>
            <span className="text-[9px] font-mono text-brand-gray uppercase text-center md:text-right">
              EST. NO. GB-1283-MEAT • APPROVED BY FDA/DEFRA
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
