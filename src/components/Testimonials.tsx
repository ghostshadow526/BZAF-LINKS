/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import TestimonialsSection, { TestimonialsData } from './ui/community-testimonial';

const testimonialsData: TestimonialsData = {
  title: "Don't just take our word for it",
  subtitle:
    "See what our clients are saying about how our premium cuts and services have transformed their dining",
  rows: [
    {
      id: "row1",
      speed: "50s",
      direction: "left",
      testimonials: [
        {
          id: "t1",
          quote:
            "This premium butchery completely changed how I approach our family feasts. The dry-aged Tomahawk is incredibly delicious!",
          authorName: "Sarah Alao",
          authorTitle: "Culinary Blogger",
          avatarUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: "t2",
          quote:
            "I've bought from countless meat shops, and this is the first one that consistently delivers perfection. Simply premium and reliable.",
          authorName: "Babajide Adebayo",
          authorTitle: "Head Chef, Lagos Lounge",
          avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: "t3",
          quote:
            "The bulk corporate catering packages are a game-changer. Our entire retreat team was extremely satisfied with the cuts.",
          authorName: "Amara Eke",
          authorTitle: "Tech Founder",
          avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        },
      ],
    },
    {
      id: "row2",
      speed: "40s",
      direction: "right",
      testimonials: [
        {
          id: "t4",
          quote:
            "The customized steak cuts are stunning. The marbled Wagyu options feel less like a meal and more like a work of art.",
          authorName: "Tunde Okafor",
          authorTitle: "Gastronomy Enthusiast",
          avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: "t5",
          quote:
            "Simple ordering, no clutter, does exactly what they promise. The home delivery packaging is robust and secure.",
          authorName: "Chioma Nze",
          authorTitle: "Hospitality Executive",
          avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: "t6",
          quote:
            "Seeing the consistent grade of meat they provide week-in, week-out is amazing. Outstanding work!",
          authorName: "Oluwaseun Alabi",
          authorTitle: "Quality Inspector",
          avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        },
      ],
    },
    {
      id: "row3",
      speed: "60s",
      direction: "left",
      testimonials: [
        {
          id: "t7",
          quote:
            "I love that we can track our custom cuts. In an industry where origins are often hidden, this transparency feels safe.",
          authorName: "Emeka Nwosu",
          authorTitle: "Sourcing Advocate",
          avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: "t8",
          quote:
            "Finally, a premium vendor that isn't bloated with unneeded overhead. They stay completely focused on premium quality meat.",
          authorName: "Halima Yusuf",
          authorTitle: "Food Columnist",
          avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        },
        {
          id: "t9",
          quote:
            "The community customer service support is warm and wholesome. It is definitely the best place for serious meat lovers.",
          authorName: "Olumide Balogun",
          authorTitle: "Fitness Trainer",
          avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        },
      ],
    },
  ],
};

export default function Testimonials() {
  return (
    <section 
      id="reviews" 
      className="py-24 bg-brand-dark bg-cover bg-center relative scroll-mt-16 overflow-hidden"
      style={{ backgroundImage: "url('https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/reviews.jpg')" }}
    >
      {/* Soft overlay to guarantee high-contrast text readability */}
      <div className="absolute inset-0 bg-black/45 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        <TestimonialsSection data={testimonialsData} />
      </div>
    </section>
  );
}
