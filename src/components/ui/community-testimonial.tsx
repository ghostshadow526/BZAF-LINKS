/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  avatarUrl: string;
}

export interface TestimonialsRow {
  id: string;
  speed: string;
  direction: "left" | "right";
  testimonials: Testimonial[];
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  rows: TestimonialsRow[];
}

interface TestimonialCardProps {
  key?: string | number;
  quote: string;
  authorName: string;
  authorTitle: string;
  avatarUrl?: string;
}

interface HorizontalScrollerProps {
  key?: string | number;
  children: React.ReactNode;
  speed?: string;
  direction?: "left" | "right";
}

interface TestimonialsSectionProps {
  data: TestimonialsData;
}

/**
 * TestimonialCard
 * Props: quote, authorName, authorTitle, avatarUrl
 */
export const TestimonialCard = ({ quote, authorName, authorTitle }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card flex flex-col items-start gap-4 p-6 bg-[#15151b] border border-white/5 hover:border-white/10 transition-all rounded-lg shadow-lg w-96 flex-shrink-0" id={`testimonial-${authorName.replace(/\s+/g, '-').toLowerCase()}`}>
      <p className="text-gray-300 text-xs sm:text-sm font-light italic leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-4 mt-2">
        <div>
          <h4 className="text-white font-display font-bold text-base">{authorName}</h4>
          <p className="text-gray-400 text-[10px] font-mono tracking-wide uppercase mt-0.5">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

/**
 * HorizontalScroller
 * Props: children, speed (e.g., "40s"), direction ("left" | "right")
 */
export const HorizontalScroller = ({ children, speed = "40s", direction = "left" }: HorizontalScrollerProps) => {
  const animationClass =
    direction === "right" ? "animate-scroll-horizontal-reverse" : "animate-scroll-horizontal";

  // Use inline style with a fallback or standard typing
  const styleVariables = {
    "--scroll-duration": speed,
  } as React.CSSProperties;

  return (
    <div className="w-full overflow-hidden group relative mask-fade" id={`scroller-${direction}`}>
      <div className={`flex ${animationClass}`} style={styleVariables}>
        <div className="flex items-stretch justify-center gap-8 px-4">{children}</div>
        <div className="flex items-stretch justify-center gap-8 px-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

/**
 * TestimonialsSection
 * Props: data { title, subtitle, rows[] }
 */
export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  return (
    <section className="testimonials-section relative flex flex-col items-center gap-12 p-10 w-full max-w-7xl mx-auto scroll-mt-16" id="reviews">
      <div className="flex flex-col items-center gap-4 text-center z-10 max-w-2xl">
        <h2
          className="text-3xl sm:text-4xl font-black text-white leading-tight uppercase tracking-tight font-display"
          style={{ opacity: 0, animation: "fadeInUp 0.7s ease-out 0.2s forwards" }}
          id="testimonials-title"
        >
          {data.title}
        </h2>
        <p
          className="text-xs sm:text-sm text-gray-300 font-light"
          style={{ opacity: 0, animation: "fadeInUp 0.7s ease-out 0.4s forwards" }}
          id="testimonials-subtitle"
        >
          {data.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-8 z-10 w-full max-w-6xl">
        {data.rows.map((row) => (
          <HorizontalScroller key={row.id} speed={row.speed} direction={row.direction}>
            {row.testimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                authorName={t.authorName}
                authorTitle={t.authorTitle}
                avatarUrl={t.avatarUrl}
              />
            ))}
          </HorizontalScroller>
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 85% 67% at 50% 100%, rgba(218,41,28,0.15) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />
    </section>
  );
}
