/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DiscoverMore from './components/DiscoverMore';
import ProductCatalog from './components/ProductCatalog';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import BookingWizard from './components/BookingWizard';
import Footer from './components/Footer';
import GalleryPage from './components/GalleryPage';
import IbrosFishPage from './components/IbrosFishPage';
import MarqueeTicker from './components/MarqueeTicker';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'gallery' | 'fish'>('home');
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position to dynamically highlight the active navbar link
  useEffect(() => {
    const handleScroll = () => {
      if (currentView !== 'home') return;
      const sections = ['home', 'cuts', 'why-us', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 160; // offset for navigation header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleScrollTo = (sectionId: string) => {
    if (sectionId === 'gallery') {
      setCurrentView('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('gallery');
      return;
    }

    if (sectionId === 'fish') {
      setCurrentView('fish');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('fish');
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      setActiveSection(sectionId);
      // Wait for rendering to restore DOM elements
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // offset for the sticky nav bar
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // offset for the sticky nav bar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setActiveSection(sectionId);
      }
    }
  };

  return (
    <div className="min-h-screen bg-transparent selection:bg-brand-red selection:text-white" id="root-app-container">
      {/* Sticky Top Navigation */}
      <Navbar 
        onBookClick={() => setIsBookingOpen(true)} 
        onScrollTo={handleScrollTo}
        activeSection={
          currentView === 'gallery' 
            ? 'gallery' 
            : currentView === 'fish' 
            ? 'fish' 
            : activeSection
        }
      />

      {/* Main Pages Layout */}
      <main id="app-main-content">
        {currentView === 'gallery' ? (
          <GalleryPage onBackToHome={() => handleScrollTo('home')} onBookClick={() => setIsBookingOpen(true)} />
        ) : currentView === 'fish' ? (
          <IbrosFishPage onBackToHome={() => handleScrollTo('home')} onBookClick={() => setIsBookingOpen(true)} />
        ) : (
          <>
            {/* Hero Landing Stage */}
            <Hero 
              onBookClick={() => setIsBookingOpen(true)} 
              onScrollTo={handleScrollTo} 
            />

            {/* Quality stats & certifications infinite marquee ticker */}
            <div className="relative z-20">
              <MarqueeTicker />
            </div>

            {/* Discover More About Our Work Section (Torn Paper Design) */}
            <DiscoverMore />

            {/* Our Custom Premium Cuts Catalog */}
            <ProductCatalog 
              onBookClick={() => setIsBookingOpen(true)} 
            />

            {/* Why Choose Us & Premium Standards Section */}
            <WhyChooseUs onBookClick={() => setIsBookingOpen(true)} />

            {/* Client Reviews Section */}
            <Testimonials />

            {/* Butcher Lounge Coordinates, Hours & Booking Enquiry */}
            <ContactSection onBookClick={() => setIsBookingOpen(true)} />
          </>
        )}
      </main>

      {/* Booking & Table Reservation Wizard Overlay */}
      <BookingWizard 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Aesthetic Footer Block */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}
