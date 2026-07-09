/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, CreditCard, ChevronRight, CheckCircle2, AlertTriangle, Truck } from 'lucide-react';
import { CartItem, OrderDetails } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [step, setStep] = useState<'cart' | 'checkout' | 'receipt'>('cart');
  
  // Checkout form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('delivery');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [placedOrder, setPlacedOrder] = useState<{ id: string; details: OrderDetails; items: CartItem[]; total: number } | null>(null);

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + (item.product.pricePerLb * item.weight * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  // Free premium delivery on orders over $150
  const deliveryFee = deliveryMethod === 'pickup' ? 0 : (subtotal >= 150 ? 0 : 15.00);
  const grandTotal = subtotal + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (deliveryMethod === 'delivery' && !address) return;

    const orderId = `RM-${Math.floor(100000 + Math.random() * 900000)}`;
    const details: OrderDetails = { name, email, phone, deliveryMethod, address, notes };
    
    setPlacedOrder({
      id: orderId,
      details,
      items: [...cartItems],
      total: grandTotal
    });
    
    setStep('receipt');
  };

  const handleReset = () => {
    onClearCart();
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setNotes('');
    setStep('cart');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={step === 'receipt' ? handleReset : onClose}
            className="fixed inset-0 bg-black/85 z-50 backdrop-blur-sm"
            id="cart-backdrop"
          />

          {/* Drawer container sliding from right */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:max-w-md bg-brand-slate border-l border-white/5 z-50 shadow-2xl flex flex-col justify-between"
            id="cart-drawer-container"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-brand-dark/40" id="cart-header">
              <div className="flex items-center space-x-2" id="cart-header-title">
                <ShoppingBag size={18} className="text-brand-red" />
                <span className="font-display font-black text-base text-white tracking-widest uppercase">
                  {step === 'cart' ? 'YOUR SELECTIONS' : step === 'checkout' ? 'SECURE SECURING' : 'ORDER CONFIRMED'}
                </span>
              </div>
              <button
                onClick={step === 'receipt' ? handleReset : onClose}
                className="p-1.5 hover:bg-brand-dark rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer"
                id="cart-close-btn"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content wrapper */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6" id="cart-drawer-scrollable-body">
              
              {/* STEP 1: CART OVERVIEW */}
              {step === 'cart' && (
                <>
                  {cartItems.length === 0 ? (
                    <div className="h-[60vh] flex flex-col items-center justify-center text-center space-y-4" id="cart-empty-state">
                      <div className="w-16 h-16 bg-brand-dark border border-white/5 rounded-full flex items-center justify-center text-brand-gray/50 mb-2">
                        <ShoppingBag size={28} />
                      </div>
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">YOUR BASKET IS EMPTY</h4>
                      <p className="text-xs text-brand-gray font-light max-w-xs leading-relaxed">
                        Explore our master butcher catalog and configure your premium cut selections.
                      </p>
                      <button
                        onClick={onClose}
                        className="bg-brand-red hover:bg-brand-red/90 text-white px-5 py-2.5 rounded-lg text-xs font-display font-bold tracking-widest uppercase transition-colors mt-2 cursor-pointer"
                      >
                        BROWSE CUTS
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4" id="cart-items-list">
                      {cartItems.map((item) => {
                        const itemPrice = item.product.pricePerLb * item.weight * item.quantity;
                        return (
                          <motion.div
                            key={item.id}
                            layout
                            className="bg-brand-dark/30 border border-white/5 rounded-xl p-4 flex items-center space-x-4 relative group"
                            id={`cart-row-${item.id}`}
                          >
                            {/* Product Thumbnail */}
                            <div className="w-14 h-14 rounded-lg overflow-hidden border border-white/10 shrink-0 relative">
                              <img 
                                src={item.product.image} 
                                alt={item.product.name} 
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>

                            {/* Descriptions */}
                            <div className="flex-grow space-y-1">
                              <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                                {item.product.name}
                              </h5>
                              <div className="flex items-center space-x-2 text-[10px] font-mono text-brand-gray">
                                <span className="bg-brand-slate px-1.5 py-0.5 rounded border border-white/5 text-white font-bold">
                                  {item.weight.toFixed(1)} LB Cut
                                </span>
                                <span>@ ${item.product.pricePerLb.toFixed(2)}/LB</span>
                              </div>
                            </div>

                            {/* Qty and Trash row */}
                            <div className="flex flex-col items-end justify-between space-y-3 shrink-0">
                              <span className="font-mono text-xs font-bold text-white">
                                ${itemPrice.toFixed(2)}
                              </span>
                              
                              <div className="flex items-center space-x-1.5 bg-brand-dark border border-white/10 rounded-lg p-1">
                                <button
                                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                  className="p-1 hover:text-brand-red text-gray-400 cursor-pointer"
                                  disabled={item.quantity <= 1}
                                  id={`qty-minus-${item.id}`}
                                >
                                  <Minus size={10} />
                                </button>
                                <span className="font-mono text-[11px] font-bold text-white px-1">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 hover:text-brand-red text-gray-400 cursor-pointer"
                                  id={`qty-plus-${item.id}`}
                                >
                                  <Plus size={10} />
                                </button>
                              </div>
                            </div>

                            {/* Remove button */}
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="absolute top-2 right-2 text-brand-gray/55 hover:text-brand-red transition-colors cursor-pointer"
                              aria-label="Remove item"
                              id={`remove-btn-${item.id}`}
                            >
                              <Trash2 size={12} />
                            </button>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </>
              )}

              {/* STEP 2: CHECKOUT INFO */}
              {step === 'checkout' && (
                <form onSubmit={handlePlaceOrder} className="space-y-4 text-left" id="secure-checkout-form">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-brand-gray uppercase font-bold">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Captain Carter"
                      className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-red/50"
                      id="checkout-name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-brand-gray uppercase font-bold">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. carter@sield.com"
                      className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-red/50"
                      id="checkout-email"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-brand-gray uppercase font-bold">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +44 7911 123456"
                      className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-red/50"
                      id="checkout-phone"
                    />
                  </div>

                  {/* Pickup / Delivery toggling */}
                  <div className="space-y-1 pt-1">
                    <label className="block text-[10px] font-mono text-brand-gray uppercase font-bold">Delivery Method</label>
                    <div className="grid grid-cols-2 gap-2 pt-1" id="checkout-method-tabs">
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod('delivery')}
                        className={`py-3 text-xs font-display font-bold rounded-lg border transition-all cursor-pointer ${
                          deliveryMethod === 'delivery'
                            ? 'bg-brand-red border-brand-red text-white'
                            : 'bg-brand-dark/40 border-white/10 text-gray-400 hover:text-white'
                        }`}
                        id="method-delivery-btn"
                      >
                        COLD DELIVERY
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod('pickup')}
                        className={`py-3 text-xs font-display font-bold rounded-lg border transition-all cursor-pointer ${
                          deliveryMethod === 'pickup'
                            ? 'bg-brand-red border-brand-red text-white'
                            : 'bg-brand-dark/40 border-white/10 text-gray-400 hover:text-white'
                        }`}
                        id="method-pickup-btn"
                      >
                        BUTCHER PICKUP
                      </button>
                    </div>
                  </div>

                  {deliveryMethod === 'delivery' && (
                    <div className="space-y-1 animate-fade-in" id="checkout-address-block">
                      <label className="block text-[10px] font-mono text-brand-gray uppercase font-bold">Delivery Address</label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Flat No, Street Name, Postal Code"
                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-red/50"
                        id="checkout-address"
                      />
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-brand-gray uppercase font-bold">Order Notes / Custom Requests</label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Leave in black porch cooler, or slice into exact 2-inch steaks."
                      className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-red/50 resize-none"
                      id="checkout-notes"
                    />
                  </div>

                  {/* Dynamic delivery free notifier */}
                  {deliveryMethod === 'delivery' && (
                    <div className="bg-brand-slate border border-white/5 rounded-lg p-3 flex items-center space-x-2 text-[10px] text-brand-gray">
                      <Truck size={14} className="text-brand-red" />
                      {subtotal >= 150 ? (
                        <span><strong className="text-emerald-400">FREE delivery active!</strong> Your order qualifies for free cold insulation transport.</span>
                      ) : (
                        <span>Add <strong className="text-white">${(150 - subtotal).toFixed(2)}</strong> more in premium cuts to qualify for free delivery.</span>
                      )}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-display font-bold text-xs py-3.5 rounded-lg tracking-widest uppercase transition-colors cursor-pointer mt-4 shadow-lg"
                    id="checkout-complete-btn"
                  >
                    PLACE SECURE ORDER (${grandTotal.toFixed(2)})
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep('cart')}
                    className="w-full border border-white/10 hover:border-white/20 text-gray-400 hover:text-white font-display font-bold text-xs py-3 rounded-lg tracking-widest uppercase transition-colors cursor-pointer"
                    id="checkout-back-btn"
                  >
                    BACK TO BASKET
                  </button>
                </form>
              )}

              {/* STEP 3: CONFIRMATION RECEIPT */}
              {step === 'receipt' && placedOrder && (
                <div className="space-y-6 text-center py-4 animate-fade-in" id="receipt-screen">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 className="font-display font-black text-lg text-white uppercase tracking-widest">ORDER TRANSMITTED!</h4>
                    <span className="font-mono text-xs font-bold text-brand-red bg-brand-dark px-2.5 py-1 rounded border border-white/5">
                      RECEIPT: {placedOrder.id}
                    </span>
                  </div>

                  <p className="text-xs text-brand-gray font-light leading-relaxed">
                    Thank you, <strong className="text-white">{placedOrder.details.name}</strong>. Our butchers have queued your premium selections. A confirmation invoice has been sent to <strong className="text-white">{placedOrder.details.email}</strong>.
                  </p>

                  {/* Summary receipt table */}
                  <div className="border border-white/10 rounded-xl bg-brand-dark/50 overflow-hidden text-left" id="receipt-table">
                    <div className="bg-brand-dark px-4 py-2 border-b border-white/10">
                      <span className="text-[9px] font-mono font-bold text-brand-gray uppercase">PREPARED CUT DETAILS:</span>
                    </div>
                    <div className="p-4 space-y-3 divide-y divide-white/5">
                      {placedOrder.items.map((item) => (
                        <div key={item.id} className="pt-2 first:pt-0 flex justify-between items-center text-xs">
                          <div className="space-y-0.5">
                            <span className="font-display font-bold text-white uppercase block">{item.product.name}</span>
                            <span className="font-mono text-[9px] text-brand-gray">
                              {item.quantity}x • {item.weight.toFixed(1)} LB Cut
                            </span>
                          </div>
                          <span className="font-mono text-white font-semibold shrink-0 ml-4">
                            ${(item.product.pricePerLb * item.weight * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-brand-slate px-4 py-3 border-t border-white/10 space-y-1 text-xs">
                      <div className="flex justify-between text-brand-gray">
                        <span>SUBTOTAL:</span>
                        <span className="font-mono font-bold text-white">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-brand-gray">
                        <span>DELIVERY METHOD:</span>
                        <span className="font-mono font-bold text-white uppercase">{placedOrder.details.deliveryMethod}</span>
                      </div>
                      {placedOrder.details.deliveryMethod === 'delivery' && (
                        <div className="flex justify-between text-brand-gray">
                          <span>COLD BOX SHIPPING:</span>
                          <span className="font-mono font-bold text-white">
                            {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between pt-2 border-t border-white/5 font-bold text-sm text-brand-red">
                        <span>TOTAL CHARGED:</span>
                        <span className="font-mono font-black">${placedOrder.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-red/10 border border-brand-red/20 rounded-xl p-4 flex items-start space-x-3 text-left">
                    <AlertTriangle size={18} className="text-brand-red shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-display font-bold text-[10px] text-white uppercase tracking-wider block">COLD CHAIN NOTICE:</span>
                      <p className="text-[10px] text-brand-gray leading-relaxed font-light">
                        Please prepare refrigerator shelf space. Your hand-cut selections are vacuum sealed and cold-locked; keep refrigerated immediately upon doorstep delivery.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full bg-white hover:bg-white/90 text-brand-dark font-display font-bold text-xs py-3.5 rounded-lg tracking-widest uppercase transition-colors cursor-pointer"
                    id="receipt-done-btn"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              )}

            </div>

            {/* Sticky bottom total summary action section for STEP 1 */}
            {step === 'cart' && cartItems.length > 0 && (
              <div className="p-6 border-t border-white/5 bg-brand-dark/60 space-y-4" id="cart-drawer-summary-footer">
                <div className="space-y-2 text-xs font-mono" id="summary-fee-lines">
                  <div className="flex justify-between text-brand-gray">
                    <span>Cuts Subtotal:</span>
                    <span className="font-bold text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-brand-gray">
                    <span>Insulated Cold Packaging:</span>
                    <span className="text-emerald-400 font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between text-brand-gray">
                    <span>Premium Cold Shipping:</span>
                    <span className="font-bold text-white">
                      {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/10 text-sm font-black text-brand-red">
                    <span>ESTIMATED TOTAL:</span>
                    <span className="text-base">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setStep('checkout')}
                  className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-display font-bold text-xs py-4 rounded-lg tracking-widest uppercase flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-brand-red/10"
                  id="checkout-init-btn"
                >
                  <span>PROCEED TO SECURE CHECKOUT</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
