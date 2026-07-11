/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, ShieldAlert, Check, HelpCircle, UtensilsCrossed, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data';
import { MeatProduct, ReservationDetails } from '../types';

interface BookingWizardProps {
  onClose?: () => void;
  isOpen: boolean;
}

export default function BookingWizard({ onClose, isOpen }: BookingWizardProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Step 1 states
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [foodIntolerances, setFoodIntolerances] = useState('');

  // Step 2 states (Pre-selected tasting menu cuts)
  const [selectedCuts, setSelectedCuts] = useState<string[]>([]);

  // Step 3 states (Contact info)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const [bookingId, setBookingId] = useState('');

  const toggleCutSelection = (cutId: string) => {
    setSelectedCuts((prev) =>
      prev.includes(cutId) ? prev.filter((id) => id !== cutId) : [...prev, cutId]
    );
  };

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !adults) return;
    setStep(2);
  };

  const handleNextStep2 = () => {
    setStep(3);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    // Generate unique reservation ID
    const resId = `RIDAS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(resId);
    setStep(4);
  };

  const handleReset = () => {
    setDate('');
    setTime('');
    setAdults('');
    setChildren('');
    setFoodIntolerances('');
    setSelectedCuts([]);
    setName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
    setStep(1);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6" id="booking-wizard-modal">
      
      {/* Background overlay with dark blurred overlay */}
      <div 
        className="fixed inset-0 bg-brand-dark/95 backdrop-blur-md transition-opacity cursor-pointer" 
        onClick={step === 4 ? handleReset : onClose}
        id="booking-backdrop"
      />

      {/* Main Container */}
      <div className="relative w-full max-w-4xl z-10 my-8" id="booking-container-inner">
        
        {/* Massive overlapping decorative background title precisely like the design in the image */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center z-0 hidden sm:block">
          <span className="font-display font-black text-7xl md:text-8xl text-white/[0.04] uppercase tracking-widest block">
            SUBMIT INQUIRY
          </span>
        </div>

        {/* Clean, high-impact white card inspired by the uploaded image */}
        <div 
          className="bg-white rounded-none shadow-2xl overflow-hidden relative z-10 transition-all duration-300"
          id="booking-wizard-card"
        >
          
          {/* Header block with red accent strip */}
          <div className="h-2 bg-brand-red w-full"></div>

          <div className="p-6 sm:p-10" id="booking-wizard-body">
            
            {/* Close button for overlay */}
            {onClose && step !== 4 && (
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors cursor-pointer p-1.5 rounded-lg hover:bg-gray-100"
                id="booking-close-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}

            {/* 3-Step Wizard Navigation exactly like the image layout */}
            {step <= 3 && (
              <div className="max-w-xl mx-auto mb-10" id="booking-steps-bar">
                <div className="flex items-center justify-between relative" id="steps-row">
                  
                  {/* Step 1 */}
                  <div className="flex flex-col items-center z-10" id="step-node-1">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all duration-300 ${
                        step === 1 
                          ? 'bg-brand-dark text-white' 
                          : 'bg-white border-2 border-brand-red/30 text-brand-red'
                      }`}
                    >
                      {step > 1 ? <Check size={16} /> : '1'}
                    </div>
                    <span className="font-sans font-medium text-xs mt-2 text-gray-600">Reservation</span>
                  </div>

                  {/* Horizontal line */}
                  <div className="absolute left-[12%] right-[58%] top-[20px] h-px bg-gray-200 z-0"></div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center z-10" id="step-node-2">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all duration-300 ${
                        step === 2 
                          ? 'bg-brand-dark text-white' 
                          : 'bg-white border-2 border-brand-red/30 text-brand-red'
                      }`}
                    >
                      {step > 2 ? <Check size={16} /> : '2'}
                    </div>
                    <span className="font-sans font-medium text-xs mt-2 text-gray-600">Menu</span>
                  </div>

                  {/* Horizontal line */}
                  <div className="absolute left-[54%] right-[16%] top-[20px] h-px bg-gray-200 z-0"></div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center z-10" id="step-node-3">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all duration-300 ${
                        step === 3 
                          ? 'bg-brand-dark text-white' 
                          : 'bg-white border-2 border-brand-red/30 text-brand-red'
                      }`}
                    >
                      3
                    </div>
                    <span className="font-sans font-medium text-xs mt-2 text-gray-600">Contact Informations</span>
                  </div>

                </div>
              </div>
            )}

            {/* STEP 1: RESERVATION DETAILS (Image layout replica) */}
            {step === 1 && (
              <form onSubmit={handleNextStep1} className="space-y-6 max-w-2xl mx-auto" id="booking-step1-form">
                
                {/* Date & Time Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-semibold text-gray-700">
                      Date <span className="text-brand-red font-bold">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-red"
                        id="booking-date-input"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-semibold text-gray-700">
                      Time <span className="text-brand-red font-bold">*</span>
                    </label>
                    <input 
                      type="time"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-red"
                      id="booking-time-input"
                    />
                  </div>
                </div>

                {/* Adults & Children Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-semibold text-gray-700">
                      Adults <span className="text-brand-red font-bold">*</span>
                    </label>
                    <select
                      required
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-brand-red cursor-pointer bg-white"
                      id="booking-adults-input"
                    >
                      <option value="" disabled>Insert Adults Number</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Adult' : 'Adults'}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-semibold text-gray-700">
                      Children <span className="text-brand-red font-bold">*</span>
                    </label>
                    <select
                      required
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-brand-red cursor-pointer bg-white"
                      id="booking-children-input"
                    >
                      <option value="" disabled>Insert Children Number</option>
                      <option value="0">None</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Food Intolerances Text Area */}
                <div className="space-y-1 text-left">
                  <label className="block text-xs font-semibold text-gray-700">
                    Food Intolerances
                  </label>
                  <textarea
                    rows={4}
                    value={foodIntolerances}
                    onChange={(e) => setFoodIntolerances(e.target.value)}
                    placeholder="Write your any food intolerances"
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-red resize-none"
                    id="booking-intolerances-input"
                  />
                </div>

                {/* Next Button precisely matching the deep brown/red brand in the image */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#da291c] hover:bg-[#b01f14] text-white font-display font-bold text-sm py-4 uppercase tracking-widest transition-colors cursor-pointer shadow-md rounded"
                    id="booking-next-1-btn"
                  >
                    Next
                  </button>
                </div>

              </form>
            )}

            {/* STEP 2: MENU PRE-SELECTION (NO PRICES!) */}
            {step === 2 && (
              <div className="space-y-6 max-w-2xl mx-auto text-left animate-fade-in" id="booking-step2-form">
                
                <div className="text-center mb-6">
                  <h4 className="font-display font-black text-lg text-gray-900 uppercase tracking-wider">
                    PRE-SELECT CUTS FOR YOUR TASTING MENU
                  </h4>
                  <p className="text-xs text-gray-500 font-light mt-1">
                    Select any dry-aged beef cuts from our cellar. We will pre-allocate and prepare them specifically for your table. (Zero additional charge for selection)
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[350px] overflow-y-auto pr-2" id="booking-menu-grid">
                  {PRODUCTS.map((cut) => {
                    const isSelected = selectedCuts.includes(cut.id);
                    return (
                      <div
                        key={cut.id}
                        onClick={() => toggleCutSelection(cut.id)}
                        className={`border rounded-lg p-4 flex items-center space-x-3 cursor-pointer transition-all duration-200 ${
                          isSelected 
                            ? 'bg-brand-red/5 border-brand-red shadow-sm' 
                            : 'bg-white border-gray-200 hover:border-gray-400'
                        }`}
                        id={`menu-selection-item-${cut.id}`}
                      >
                        {/* Selector indicator */}
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-brand-red border-brand-red text-white' : 'border-gray-300 bg-white'
                        }`}>
                          {isSelected && <Check size={12} />}
                        </div>

                        {/* Thumbnail */}
                        <div className="w-10 h-10 rounded overflow-hidden shrink-0 bg-gray-100">
                          <img src={cut.image} alt={cut.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>

                        {/* Text details */}
                        <div>
                          <h5 className="font-display font-bold text-xs text-gray-900">{cut.name}</h5>
                          <span className="text-[10px] font-mono text-gray-500">{cut.category} • {cut.aging || 'Fresh'}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full sm:w-1/3 border border-gray-300 text-gray-600 hover:text-gray-900 py-3.5 text-xs font-display font-bold tracking-widest uppercase transition-colors cursor-pointer rounded"
                    id="booking-back-1-btn"
                  >
                    BACK
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep2}
                    className="w-full sm:w-2/3 bg-brand-dark hover:bg-brand-dark/90 text-white py-3.5 text-xs font-display font-bold tracking-widest uppercase transition-colors cursor-pointer rounded"
                    id="booking-next-2-btn"
                  >
                    CONTINUE TO CONTACT
                  </button>
                </div>

              </div>
            )}

            {/* STEP 3: CONTACT INFORMATIONS */}
            {step === 3 && (
              <form onSubmit={handleSubmitBooking} className="space-y-6 max-w-2xl mx-auto text-left animate-fade-in" id="booking-step3-form">
                
                <div className="text-center mb-6">
                  <h4 className="font-display font-black text-lg text-gray-900 uppercase tracking-wider">
                    CONTACT INFORMATION
                  </h4>
                  <p className="text-xs text-gray-500 font-light mt-1">
                    Please provide your contact specifications to lock down this reservation slot.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Full Name <span className="text-brand-red font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Captain Carter"
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-red"
                    id="booking-name-input"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700">
                      Email Address <span className="text-brand-red font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. carter@shield.com"
                      className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-red"
                      id="booking-email-input"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700">
                      Phone Number <span className="text-brand-red font-bold">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +44 7911 123456"
                      className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-red"
                      id="booking-phone-input"
                    />
                  </div>
                </div>

                {/* Special Request Notes */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Special Requests / Lounge Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Requesting a booth, celebration details, custom thickness specs, etc."
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-red resize-none"
                    id="booking-requests-input"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-1/3 border border-gray-300 text-gray-600 hover:text-gray-900 py-3.5 text-xs font-display font-bold tracking-widest uppercase transition-colors cursor-pointer rounded"
                    id="booking-back-2-btn"
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-2/3 bg-[#da291c] hover:bg-[#b01f14] text-white py-3.5 text-xs font-display font-bold tracking-widest uppercase transition-colors cursor-pointer shadow-md rounded"
                    id="booking-confirm-btn"
                  >
                    CONFIRM RESERVATION
                  </button>
                </div>

              </form>
            )}

            {/* STEP 4: SUCCESS RECEIPT */}
            {step === 4 && (
              <div className="text-center max-w-xl mx-auto py-6 space-y-6 animate-fade-in" id="booking-success-screen">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-4 bg-emerald-100 text-emerald-600 rounded-full border border-emerald-200 shadow-sm">
                    <Check size={40} className="stroke-[2.5]" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-gray-900 tracking-tight uppercase">
                    TABLE RESERVED!
                  </h3>
                  <span className="font-mono text-xs font-bold text-brand-red bg-brand-red/15 px-3 py-1.5 rounded-lg border border-brand-red/25">
                    RESERVATION CODE: {bookingId}
                  </span>
                </div>

                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Excellent, <strong className="text-gray-900">{name}</strong>! Your tasting reservation at <strong className="text-gray-900">Ridas Meat Lounge</strong> is successfully secured. A confirmation containing your calendar invite and custom menu specifics has been dispatched to <strong className="text-gray-900">{email}</strong>.
                </p>

                {/* Summary Box */}
                <div className="border border-gray-200 rounded-xl bg-gray-50 overflow-hidden text-left" id="booking-summary-box">
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase">RESERVATION PARTICULARS:</span>
                  </div>
                  <div className="p-5 space-y-4 text-xs text-gray-700">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase font-mono">Date</span>
                        <span className="font-semibold text-gray-900">{date}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase font-mono">Time</span>
                        <span className="font-semibold text-gray-900">{time}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase font-mono">Party Size</span>
                        <span className="font-semibold text-gray-900">
                          {adults} {parseInt(adults) === 1 ? 'Adult' : 'Adults'}
                          {parseInt(children) > 0 && ` • ${children} ${parseInt(children) === 1 ? 'Child' : 'Children'}`}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase font-mono">Lounge Venue</span>
                        <span className="font-semibold text-gray-900">Carnaby St, London</span>
                      </div>
                    </div>

                    {selectedCuts.length > 0 && (
                      <div className="pt-3 border-t border-gray-200">
                        <span className="text-gray-400 block text-[10px] uppercase font-mono mb-2">PRE-ALLOCATED CUTS FOR TASTING:</span>
                        <div className="flex flex-wrap gap-2">
                          {selectedCuts.map(id => {
                            const p = PRODUCTS.find(prod => prod.id === id);
                            return p ? (
                              <span key={id} className="bg-brand-red/5 border border-brand-red/20 text-brand-red font-display font-semibold text-[10px] px-2.5 py-1 rounded">
                                {p.name.toUpperCase()}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    {foodIntolerances && (
                      <div className="pt-3 border-t border-gray-200">
                        <span className="text-gray-400 block text-[10px] uppercase font-mono">NOTED FOOD INTOLERANCES</span>
                        <p className="text-gray-700 italic font-light mt-1">"{foodIntolerances}"</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-brand-red/5 border border-brand-red/20 rounded-xl p-4 flex items-start space-x-3 text-left">
                  <UtensilsCrossed size={18} className="text-brand-red shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-display font-bold text-[10px] text-gray-900 uppercase tracking-wider block">PRE-ARRIVAL LOUNGE ADVISORY:</span>
                    <p className="text-[10px] text-gray-600 leading-relaxed font-light">
                      Please arrive 10 minutes prior to your allocated slot. If you need to make changes to your selected cuts or party headcount, please use the reservation code to contact our lounge hotline.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full bg-brand-dark hover:bg-brand-dark/95 text-white font-display font-bold text-xs py-4 rounded-lg tracking-widest uppercase transition-colors cursor-pointer"
                  id="booking-done-btn"
                >
                  Return to Lounge Home
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
