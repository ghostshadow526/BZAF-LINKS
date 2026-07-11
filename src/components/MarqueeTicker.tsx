/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Truck, Users, Thermometer, Globe, Award, Scale } from 'lucide-react';

export interface TickerItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  subtitle: string;
  colorClass: string;
}

const tickerItems: TickerItem[] = [
  {
    icon: ShieldCheck,
    title: '100% CERTIFIED BEEF',
    subtitle: 'USDA PRIME & CHOICE',
    colorClass: 'text-emerald-400',
  },
  {
    icon: Truck,
    title: 'SAME-DAY DISPATCH',
    subtitle: 'COLD-CHAIN LOGISTICS',
    colorClass: 'text-amber-400',
  },
  {
    icon: Users,
    title: '500+ PARTNERS',
    subtitle: 'RESTAURANTS & HOTELS',
    colorClass: 'text-sky-400',
  },
  {
    icon: Thermometer,
    title: '-18°C MONITORED',
    subtitle: 'CONTIUNOUS COLD STORAGE', // matching user's spelling "CONTIUNOUS COLD STORAGE"
    colorClass: 'text-cyan-400',
  },
  {
    icon: Globe,
    title: 'NATIONWIDE FREIGHT',
    subtitle: 'COAST-TO-COAST DELIVERY',
    colorClass: 'text-teal-400',
  },
  {
    icon: Award,
    title: 'SQF LEVEL 3',
    subtitle: 'CERTIFIED SAFETY RATING',
    colorClass: 'text-yellow-400',
  },
  {
    icon: Scale,
    title: '10K+ TONS ANNUALLY',
    subtitle: 'BULK WHOLESALE CAPACITY',
    colorClass: 'text-rose-400',
  },
];

export default function MarqueeTicker() {
  return (
    <div className="w-full bg-brand-dark/95 border-y border-white/5 py-4 overflow-hidden relative select-none" id="marquee-ticker-container">
      {/* Absolute left & right soft gradients for seamless blending edge */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

      {/* Ticker Flex container */}
      <div className="flex whitespace-nowrap min-w-full">
        {/* Row 1 */}
        <div className="flex items-center space-x-12 animate-scroll-horizontal shrink-0" style={{ animationDuration: '30s' }}>
          {tickerItems.map((item, idx) => (
            <div key={`t1-${idx}`} className="inline-flex items-center space-x-3.5 mx-4" id={`ticker-item-1-${idx}`}>
              <item.icon size={22} className={`${item.colorClass} shrink-0`} />
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono font-black text-white tracking-wider uppercase leading-none">{item.title}</span>
                <span className="text-[10px] font-sans font-light text-gray-400 tracking-wide uppercase mt-1">{item.subtitle}</span>
              </div>
              {/* Divider element between items */}
              <div className="h-6 w-[1px] bg-white/10 ml-8" />
            </div>
          ))}
        </div>

        {/* Duplicate Row 2 for seamless infinite loop */}
        <div className="flex items-center space-x-12 animate-scroll-horizontal shrink-0" style={{ animationDuration: '30s' }} aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <div key={`t2-${idx}`} className="inline-flex items-center space-x-3.5 mx-4" id={`ticker-item-2-${idx}`}>
              <item.icon size={22} className={`${item.colorClass} shrink-0`} />
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono font-black text-white tracking-wider uppercase leading-none">{item.title}</span>
                <span className="text-[10px] font-sans font-light text-gray-400 tracking-wide uppercase mt-1">{item.subtitle}</span>
              </div>
              {/* Divider element between items */}
              <div className="h-6 w-[1px] bg-white/10 ml-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
