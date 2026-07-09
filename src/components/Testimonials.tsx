/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, Quote, PenTool, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data';
import { Review } from '../types';

export default function Testimonials() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [newCut, setNewCut] = useState('Heritage Tomahawk Steak');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;

    const newReviewItem: Review = {
      id: `custom-${Date.now()}`,
      author: newAuthor,
      rating: newRating,
      comment: newComment,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      cutReviewed: newCut
    };

    setReviewsList([newReviewItem, ...reviewsList]);
    setNewAuthor('');
    setNewRating(5);
    setNewComment('');
    setSubmitSuccess(true);

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <section id="reviews" className="py-24 bg-brand-slate border-y border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="reviews-header-wrapper">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-red uppercase block mb-3">
            GUESTBOOK & REVIEWS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight" id="reviews-title">
            APPROVED BY SERIOUS STEAK LOVERS
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 mb-6"></div>
          <p className="text-brand-gray text-sm sm:text-base font-light">
            We are honored to serve competitive pitmasters, home cooks, and fine steakhouse connoisseurs. Here is what they say about Ridas Meat.
          </p>
        </div>

        {/* Two Columns: Left reviews grid, Right "Submit your Review" form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="reviews-content-grid">
          
          {/* Reviews List Column */}
          <div className="lg:col-span-7 space-y-6" id="reviews-cards-list">
            {reviewsList.map((rev) => (
              <motion.div
                key={rev.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-brand-dark/40 border border-white/5 rounded-2xl p-6 relative hover:border-white/10 transition-all shadow-md group"
                id={`review-card-${rev.id}`}
              >
                {/* Decorative absolute Quote block */}
                <Quote size={40} className="absolute right-6 top-6 text-white/[0.03] group-hover:text-brand-red/[0.04] transition-colors" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4" id={`review-header-${rev.id}`}>
                  {/* Rating Stars & Author */}
                  <div>
                    <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                      {rev.author}
                    </h4>
                    <div className="flex items-center space-x-1 text-amber-500 mt-1" id={`review-stars-${rev.id}`}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          fill={i < rev.rating ? 'currentColor' : 'none'} 
                          className={i < rev.rating ? 'text-amber-500' : 'text-gray-600'} 
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-right sm:text-right text-[10px] font-mono text-brand-gray" id={`review-date-${rev.id}`}>
                    <span>{rev.date}</span>
                    {rev.cutReviewed && (
                      <span className="block text-brand-red/80 font-bold mt-0.5 uppercase tracking-widest">
                        PREPARED: {rev.cutReviewed.toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  "{rev.comment}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* Review Submission Form Column */}
          <div className="lg:col-span-5" id="reviews-form-column">
            <div className="bg-brand-dark/70 border border-white/5 rounded-2xl p-8 sticky top-28" id="submit-review-box">
              <div className="flex items-center space-x-2 text-brand-red mb-4" id="form-title-badge">
                <PenTool size={16} />
                <span className="text-xs font-mono font-bold tracking-widest uppercase">SHARE YOUR FEEDBACK</span>
              </div>

              <h3 className="font-display font-black text-xl text-white tracking-tight mb-2">
                SUBMIT A REVIEW
              </h3>
              <p className="text-xs text-brand-gray font-light leading-relaxed mb-6">
                Tell us about your grilling experience. We read every review to continuously perfect our butchering.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" id="review-submission-form">
                
                {/* Author input */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-brand-gray uppercase font-bold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="e.g. Capt. Henry Mitchell"
                    className="w-full bg-brand-slate border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-red/50 transition-colors"
                    id="form-author-input"
                  />
                </div>

                {/* Star rating selector */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-brand-gray uppercase font-bold">Star Rating</label>
                  <div className="flex items-center space-x-2 pt-1" id="form-stars-selector">
                    {[1, 2, 3, 4, 5].map((starValue) => (
                      <button
                        key={starValue}
                        type="button"
                        onClick={() => setNewRating(starValue)}
                        className="text-amber-500 hover:scale-110 transition-transform cursor-pointer focus:outline-none"
                        id={`star-select-${starValue}`}
                      >
                        <Star 
                          size={20} 
                          fill={starValue <= newRating ? 'currentColor' : 'none'} 
                          className={starValue <= newRating ? 'text-amber-500' : 'text-gray-600'} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Beef Cut prepared selector */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-brand-gray uppercase font-bold">Which Cut Did You Order?</label>
                  <select
                    value={newCut}
                    onChange={(e) => setNewCut(e.target.value)}
                    className="w-full bg-brand-slate border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-red/50 transition-colors cursor-pointer"
                    id="form-cut-select"
                  >
                    <option value="Prime Bone-In Ribeye">Prime Bone-In Ribeye</option>
                    <option value="Heritage Tomahawk Steak">Heritage Tomahawk Steak</option>
                    <option value="A5 Miyazaki Wagyu Striploin">A5 Miyazaki Wagyu Striploin</option>
                    <option value="Chateaubriand Tenderloin Cut">Chateaubriand Tenderloin Cut</option>
                    <option value="Competition-Grade Whole Brisket">Competition-Grade Whole Brisket</option>
                    <option value="Premium Wagyu Blend Burgers">Premium Wagyu Blend Burgers</option>
                  </select>
                </div>

                {/* Comment textarea */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-brand-gray uppercase font-bold">Your Review</label>
                  <textarea
                    required
                    rows={4}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write your review here. Be descriptive!"
                    className="w-full bg-brand-slate border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-red/50 transition-colors resize-none"
                    id="form-comment-textarea"
                  />
                </div>

                {/* Feedback Toast success */}
                {submitSuccess && (
                  <div className="flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20" id="form-success-toast">
                    <CheckCircle size={14} />
                    <span>Review published directly below! Thank you.</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-display font-bold text-xs py-3.5 rounded-lg tracking-widest uppercase transition-colors cursor-pointer shadow-lg shadow-brand-red/10"
                  id="form-submit-btn"
                >
                  PUBLISH REVIEW
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
