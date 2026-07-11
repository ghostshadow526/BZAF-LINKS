/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckSquare, Send } from 'lucide-react';

interface ContactSectionProps {
  onBookClick?: () => void;
}

export default function ContactSection({ onBookClick }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simulate sending contact message
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }, 1200);
  };

  return (
    <section 
      id="contact" 
      className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-brand-dark bg-cover bg-center relative scroll-mt-16 min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/ndimg-parallax-10.jpg')" }}
    >
      {/* Curved Section Divider (Slope) bridging the dark section above and this dark section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none translate-y-[-1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] sm:h-[70px] md:h-[90px]">
          <path d="M0,0 L0,40 Q600,120 1200,40 L1200,0 Z" fill="#0e0e11" />
        </svg>
      </div>

      {/* Dark overlay for the section to keep high-contrast focus on the card */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-stretch gap-6">
        
        {/* Main Inner Container with navwall.jpg background */}
        <div 
          className="w-full bg-cover bg-center rounded-sm relative shadow-2xl overflow-hidden border border-white/5"
          style={{ backgroundImage: "url('https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/navwall.jpg')" }}
          id="contact-inner-card"
        >
          {/* Inner dark overlay for excellent readability and sleek look */}
          <div className="absolute inset-0 bg-brand-dark/95 mix-blend-multiply z-0 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[#16161b]/90 z-0 pointer-events-none"></div>

          {/* Card Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 sm:p-12 lg:p-16 items-start">
            
            {/* Left Column: Bridging Connections & Exceptional Service */}
            <div className="lg:col-span-7 flex flex-col justify-start" id="contact-text-col">
              
              <span className="font-handwritten text-[#a5583a] text-3xl select-none block mb-3" id="contact-cursive-label">
                Bridging Connections
              </span>
              
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-[1.0] mb-8" id="contact-card-title">
                Exceptional <br />
                Service
              </h2>

              {/* 2x2 Clean Layout Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8" id="contact-info-grid">
                
                {/* Block 1 */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-mono font-bold text-[#a5583a] uppercase tracking-widest">
                    Customer Support
                  </h4>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    Consultancy <span className="font-mono">+1 473 483 384</span>
                  </p>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    Planning <span className="font-mono">+1 395 393 595</span>
                  </p>
                </div>

                {/* Block 2 */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-mono font-bold text-[#a5583a] uppercase tracking-widest">
                    Headquarter
                  </h4>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    1080 Brickell Ave - Miami
                  </p>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    United States of America
                  </p>
                </div>

                {/* Block 3 */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-mono font-bold text-[#a5583a] uppercase tracking-widest">
                    General Inquiries
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                    We value your feedback and are eager to provide any information
                  </p>
                </div>

                {/* Block 4 */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-mono font-bold text-[#a5583a] uppercase tracking-widest">
                    Collaboration
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                    We welcome collaboration proposals and partnership inquiries
                  </p>
                </div>

              </div>

            </div>

            {/* Right Column: Contact Us Form */}
            <div className="lg:col-span-5 w-full" id="contact-form-col">
              <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mb-4" id="contact-us-heading">
                Contact Us
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4" id="contact-direct-form">
                
                <div className="space-y-1">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full bg-[#1c1c22]/50 border border-white/10 px-4 py-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#a5583a]/60 transition-colors"
                    id="contact-field-name"
                  />
                </div>

                <div className="space-y-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full bg-[#1c1c22]/50 border border-white/10 px-4 py-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#a5583a]/60 transition-colors"
                    id="contact-field-email"
                  />
                </div>

                <div className="space-y-1">
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="w-full bg-[#1c1c22]/50 border border-white/10 px-4 py-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#a5583a]/60 transition-colors resize-none"
                    id="contact-field-msg"
                  />
                </div>

                {success && (
                  <div className="flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-500/10 p-3.5 rounded border border-emerald-500/25" id="contact-form-success">
                    <CheckSquare size={14} className="shrink-0" />
                    <span>Message transmitted successfully!</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#8c220f] hover:bg-[#a32b17] text-white font-display font-bold text-xs px-12 py-3.5 uppercase tracking-widest transition-colors cursor-pointer w-32 flex items-center justify-center"
                  id="contact-btn-send"
                >
                  {isSubmitting ? '...' : 'Send'}
                </button>

              </form>
            </div>

          </div>

          {/* Footer Line & Brand Badges */}
          <div className="border-t border-white/10 mx-8 sm:mx-12 lg:mx-16 pb-8 pt-6 relative z-10" id="contact-inner-footer">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              
              {/* Links */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-mono uppercase tracking-widest text-gray-400">
                <a href="#partnerships" className="hover:text-white transition-colors">Partnerships</a>
                <span className="text-[#a5583a]">•</span>
                <a href="#support" className="hover:text-white transition-colors">Customer Support</a>
                <span className="text-[#a5583a]">•</span>
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
