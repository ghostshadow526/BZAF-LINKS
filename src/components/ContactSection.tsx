/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, ShieldAlert, CheckSquare } from 'lucide-react';

export default function ContactSection() {
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
    <section id="contact" className="py-24 bg-brand-dark scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="contact-header-wrapper">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-red uppercase block mb-3">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight" id="contact-title">
            VISIT THE BUTCHER LOUNGE
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 mb-6"></div>
          <p className="text-brand-gray text-sm sm:text-base font-light">
            Have questions about dry-aging, custom thickness, bulk restaurant pricing, or wholesale accounts? Reach out to our master butcher team.
          </p>
        </div>

        {/* Contact info cards & map & form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-grid">
          
          {/* Left Column: Coordinates & Map */}
          <div className="lg:col-span-6 space-y-8" id="contact-coordinates-column">
            
            {/* Quick stats list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="contact-details-grid">
              
              <div className="bg-brand-slate/40 border border-white/5 rounded-xl p-5 flex items-start space-x-4">
                <div className="p-3 bg-brand-red/10 rounded-lg text-brand-red shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Butcher Lounge</h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    1208 Carnaby Street<br />London, W1F 7DY, UK
                  </p>
                </div>
              </div>

              <div className="bg-brand-slate/40 border border-white/5 rounded-xl p-5 flex items-start space-x-4">
                <div className="p-3 bg-brand-red/10 rounded-lg text-brand-red shrink-0">
                  <Phone size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Direct Hotline</h4>
                  <p className="text-xs text-gray-400 font-mono font-light leading-relaxed">
                    +44 (0) 20 7432 7637<br />
                    orders@ridasmeat.com
                  </p>
                </div>
              </div>

              <div className="bg-brand-slate/40 border border-white/5 rounded-xl p-5 flex items-start space-x-4">
                <div className="p-3 bg-brand-red/10 rounded-lg text-brand-red shrink-0">
                  <Clock size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Lounge Hours</h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Tue - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>

              <div className="bg-brand-slate/40 border border-white/5 rounded-xl p-5 flex items-start space-x-4">
                <div className="p-3 bg-brand-red/10 rounded-lg text-brand-red shrink-0">
                  <Mail size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Wholesale Enquiries</h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Our wholesale team answers in under 4 hours.<br />
                    trade@ridasmeat.com
                  </p>
                </div>
              </div>

            </div>

            {/* Custom high-end dark-themed aesthetic Map Placeholder */}
            <div className="relative h-[250px] rounded-xl overflow-hidden border border-white/10 bg-brand-slate" id="map-placeholder-box">
              {/* Slate/Charcoal stylized grid look to prevent bright map visual clashing */}
              <div className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')" }}></div>
              
              {/* Radial gradient shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40"></div>
              
              {/* Centered locator indicator */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="bg-brand-red text-white p-3.5 rounded-full shadow-lg shadow-brand-red/35"
                >
                  <MapPin size={22} />
                </motion.div>
                <h4 className="font-display font-extrabold text-sm text-white tracking-widest uppercase mt-4">
                  RIDAS MEAT BAR
                </h4>
                <p className="text-[10px] font-mono text-brand-gray uppercase mt-1">
                  CARNABY ST • CENTRAL LONDON
                </p>
                
                {/* Visual detail elements to match complex designs */}
                <span className="text-[9px] font-mono text-brand-red uppercase mt-4 bg-black/60 px-2 py-0.5 rounded border border-brand-red/15">
                  ● VALET PARKING AVAILABLE
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact/Booking Form */}
          <div className="lg:col-span-6" id="contact-form-column">
            <div className="bg-brand-slate/30 border border-white/5 rounded-2xl p-8" id="contact-form-box">
              <h3 className="font-display font-black text-xl text-white tracking-tight mb-2">
                SEND AN ENQUIRY
              </h3>
              <p className="text-xs text-brand-gray font-light leading-relaxed mb-6">
                Fill out the secure form below. Our butcher lounge representative will follow up immediately via email or text message.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" id="enquiry-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-brand-gray uppercase font-bold">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Robert Downey"
                      className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-red/50 transition-colors"
                      id="enquiry-name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-brand-gray uppercase font-bold">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. robert@ironman.com"
                      className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-red/50 transition-colors"
                      id="enquiry-email"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-brand-gray uppercase font-bold">Message / Custom Cut specs</label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your specific request (e.g. 2-inch thickness Tomahawks, bulk strip order, etc.)"
                    className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-red/50 transition-colors resize-none"
                    id="enquiry-msg"
                  />
                </div>

                {success && (
                  <div className="flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-500/10 p-4 rounded-lg border border-emerald-500/20" id="enquiry-success">
                    <CheckSquare size={14} />
                    <span>Your message was sent successfully! We will contact you shortly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-display font-bold text-xs py-3.5 rounded-lg tracking-widest uppercase flex items-center justify-center space-x-2 transition-colors cursor-pointer shadow-lg shadow-brand-red/10"
                  id="enquiry-submit-btn"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING MESSAGE...</span>
                  ) : (
                    <>
                      <span>TRANSMIT ENQUIRY</span>
                      <Send size={12} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
