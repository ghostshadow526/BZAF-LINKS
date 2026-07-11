/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MeatProduct, Review } from './types';

export const PRODUCTS: MeatProduct[] = [
  {
    id: 'prime-ribeye',
    name: 'Prime Bone-In Ribeye',
    category: 'Steaks',
    description: 'Exquisitely marbled, rich steakhouse-style cut with the bone in to maximize flavor depth and juiciness during cooking. Hand-selected for optimal fat cap distribution.',
    image: '/src/assets/images/prime_ribeye_steak_1783637253288.jpg',
    marblingScore: 'BMS 4+',
    aging: '28-Day Dry Aged',
    isFeatured: true
  },
  {
    id: 'heritage-tomahawk',
    name: 'Heritage Tomahawk Steak',
    category: 'Steaks',
    description: 'The ultimate showstopper. Thick-cut prime ribeye with a full, French-trimmed bone, offering a buttery texture and massive, concentrated beefy flavor.',
    image: '/src/assets/images/raw_tomahawk_steak_1783637267596.jpg',
    marblingScore: 'BMS 5+',
    aging: '45-Day Dry Aged',
    isFeatured: true
  },
  {
    id: 'miyazaki-wagyu',
    name: 'A5 Miyazaki Wagyu Striploin',
    category: 'Wagyu',
    description: 'Directly imported from Miyazaki prefecture, Japan. Incredible snowflake-like marbling that melts at room temperature, delivering an unparalleled, decadent, melt-in-your-mouth flavor.',
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=800',
    marblingScore: 'A5 (BMS 12)',
    aging: '14-Day Wet Aged',
    isFeatured: true
  },
  {
    id: 'barrel-cut-tenderloin',
    name: 'Chateaubriand Tenderloin Cut',
    category: 'Steaks',
    description: 'The most tender cut available, taken from the thickest center part of the tenderloin. Lean yet incredibly delicate, perfect for elegant dinners.',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=800',
    marblingScore: 'BMS 3+',
    aging: '21-Day Wet Aged'
  },
  {
    id: 'competition-brisket',
    name: 'Competition-Grade Whole Brisket',
    category: 'Roasts',
    description: 'Whole packer brisket with a thick flat and juicy point. Ideal for low-and-slow smoking, producing a gorgeous bark and rich smoke ring.',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b98c6?auto=format&fit=crop&q=80&w=800',
    marblingScore: 'USDA Prime',
    aging: '14-Day Wet Aged'
  },
  {
    id: 'wagyu-burgers',
    name: 'Premium Wagyu Blend Burgers',
    category: 'Ground',
    description: 'A custom grind of Wagyu brisket and chuck. Incredibly juicy with rich fat dispersion, creating the most flavorful burger patties you can grill.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800',
    marblingScore: 'Wagyu Blend',
    aging: 'Freshly Ground Daily'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'John Smith',
    rating: 5,
    comment: 'The 45-day dry-aged Tomahawk is absolutely legendary. The deep beefy flavor and tenderness were unlike anything I have ever bought before. Ridas Meat is now my only choice!',
    date: 'July 5, 2026',
    cutReviewed: 'Heritage Tomahawk Steak'
  },
  {
    id: 'rev-2',
    author: 'Elena Rostova',
    rating: 5,
    comment: 'Unbelievable quality! The Miyazaki A5 Wagyu was authenticated with certification, and cooking it was an spiritual experience. It literally melted like butter.',
    date: 'June 28, 2026',
    cutReviewed: 'A5 Miyazaki Wagyu Striploin'
  },
  {
    id: 'rev-3',
    author: 'Marcus Vance',
    rating: 5,
    comment: 'Extremely professional delivery and the cuts were packed perfectly in vacuum-sealed temperature-controlled boxes. Ground Wagyu made the best burgers of my life.',
    date: 'June 15, 2026',
    cutReviewed: 'Premium Wagyu Blend Burgers'
  }
];

export const ADVANTAGES = [
  {
    title: '100% Certified Premium',
    description: 'We only source from high-welfare farms that practice sustainable grazing, raising cattle with zero added hormones or non-therapeutic antibiotics.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Artisanal Dry Aging',
    description: 'Our master butchers age beef in custom Himalayan salt brick chambers, temperature-locked to concentrate deep, nutty, umami undertones.',
    icon: 'Timer'
  },
  {
    title: 'Precision Cold Delivery',
    description: 'Every order is hand-cut, vacuum-sealed, and shipped in custom thermal insulation with active gel-pack cooling to guarantee fresh kitchen arrival.',
    icon: 'Truck'
  }
];
