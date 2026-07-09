/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { CartItem, MeatProduct } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position to dynamically highlight the active navbar link
  useEffect(() => {
    const handleScroll = () => {
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
  }, []);

  const handleScrollTo = (sectionId: string) => {
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
  };

  const handleAddToCart = (product: MeatProduct, weight: number) => {
    // Generate a unique cart item ID based on the product and chosen weight
    // This allows having, e.g., one 2-pound Ribeye and one 4-pound Ribeye in the basket
    const cartItemId = `${product.id}-${weight.toFixed(1)}`;
    
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === cartItemId);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { id: cartItemId, product, weight, quantity: 1 }];
    });

    // Auto open the drawer so the customer gets instant, responsive feedback
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Sum of quantities of all items in cart
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-red selection:text-white" id="root-app-container">
      {/* Sticky Top Navigation */}
      <Navbar 
        cartCount={totalCartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onScrollTo={handleScrollTo}
        activeSection={activeSection}
      />

      {/* Main Pages Layout */}
      <main id="app-main-content">
        {/* Hero Landing Stage */}
        <Hero 
          onAddToCart={handleAddToCart} 
          onScrollTo={handleScrollTo} 
        />

        {/* Our Custom Premium Cuts Catalog */}
        <ProductCatalog 
          onAddToCart={handleAddToCart} 
        />

        {/* Why Choose Us & Premium Standards Section */}
        <WhyChooseUs />

        {/* Client Reviews Section */}
        <Testimonials />

        {/* Butcher Lounge Coordinates, Hours & Booking Enquiry */}
        <ContactSection />
      </main>

      {/* Shopping Basket & Checkout Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Aesthetic Footer Block */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}
