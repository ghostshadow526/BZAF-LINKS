/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MeatProduct {
  id: string;
  name: string;
  category: 'Steaks' | 'Roasts' | 'Ground' | 'Wagyu';
  description: string;
  image: string;
  marblingScore?: string;
  aging?: string;
  isFeatured?: boolean;
}

export interface ReservationDetails {
  date: string;
  time: string;
  adults: number;
  children: number;
  foodIntolerances: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  cutReviewed?: string;
}

