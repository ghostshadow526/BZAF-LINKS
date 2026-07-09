/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MeatProduct {
  id: string;
  name: string;
  category: 'Steaks' | 'Roasts' | 'Ground' | 'Wagyu';
  pricePerLb: number;
  description: string;
  image: string;
  marblingScore?: string;
  aging?: string;
  isFeatured?: boolean;
}

export interface CartItem {
  id: string; // combination of product.id + weight to allow same product with different weights
  product: MeatProduct;
  quantity: number;
  weight: number; // in lbs
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  cutReviewed?: string;
}

export interface OrderDetails {
  name: string;
  email: string;
  phone: string;
  deliveryMethod: 'pickup' | 'delivery';
  address?: string;
  notes?: string;
}
