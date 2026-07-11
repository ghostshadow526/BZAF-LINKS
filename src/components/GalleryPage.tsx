import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, X, Maximize2, ArrowLeft, Image as ImageIcon, Film } from 'lucide-react';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';
import MarqueeTicker from './MarqueeTicker';

const galleryItems = [
  {
    type: 'video',
    url: 'https://ik.imagekit.io/qjg532nyu/SaveClip.App_AQP5qJr34mfIQECzrEP4B3UWqzI2xUedbEvxLRNzu9SYbA7ZXkZhUq9Dc2HvWBKrpcldzh0bJro0e5HKzwkoAK4.mp4?updatedAt=1783684465084',
    title: 'Precision Grilling',
    description: 'Our master chefs executing the perfect sear over custom open-fire wood embers.',
    aspect: 'md:col-span-3 h-80 sm:h-[400px]',
  },
  {
    type: 'video',
    url: 'https://ik.imagekit.io/qjg532nyu/SaveClip.App_AQNI853ncs3tZA4UtzWS9ZbrM4dZsIJZAAX9YRRoP3SetFeMLjVgeuh1wk0RNrf5-DUaLT-hpPxKOW6QbzZ005jnO9vDGV8yWDbDN_Q.mp4?updatedAt=1783684451415',
    title: 'Sizzling Ribeye',
    description: 'Deep marbling melting into rich flavor as our dry-aged steak reaches peak temperature.',
    aspect: 'md:col-span-3 h-80 sm:h-[400px]',
  },
  {
    type: 'image',
    url: 'https://ik.imagekit.io/qjg532nyu/SaveClip.App_626056605_17852896833665304_8183431117483770257_n.jpg',
    title: 'Gourmet Selection',
    description: 'Expertly curated cuts showcases, ready for artisan preparation.',
    aspect: 'md:col-span-2 h-72 sm:h-96',
  },
  {
    type: 'video',
    url: 'https://ik.imagekit.io/qjg532nyu/SaveClip.App_AQPpznz4s-psBTmqvlMeo90WRahu1PF55XXCQFQbq7LytwrW2R4z2lmmaDKzDgRz0CAb5on4YHHWEu3q6oj5nGs.mp4?updatedAt=1783684443922',
    title: 'Artisanal Slicing',
    description: 'Precision portion carving by our master butcher for optimal texture and thickness.',
    aspect: 'md:col-span-2 h-72 sm:h-96',
  },
  {
    type: 'image',
    url: 'https://ik.imagekit.io/qjg532nyu/SaveClip.App_607955676_17847751059665304_6053646897915253429_n.jpg',
    title: 'Premium Dry-Age',
    description: 'The spectacular result of our signature temperature and humidity-controlled curing cellar.',
    aspect: 'md:col-span-2 h-72 sm:h-96',
  },
  {
    type: 'image',
    url: 'https://ik.imagekit.io/qjg532nyu/SaveClip.App_683813119_17873001843665304_7294268599617156664_n.jpg',
    title: 'Exquisite Plate Presentation',
    description: 'Delicate plating showcasing the rich texture and succulent glaze of our artisan steaks.',
    aspect: 'md:col-span-2 h-72 sm:h-96',
  },
  {
    type: 'image',
    url: 'https://ik.imagekit.io/qjg532nyu/SaveClip.App_691323498_17874230589665304_8107377242495579773_n.jpg',
    title: 'The Master Touch',
    description: 'Carefully selecting premium marbled grains to ensure absolute perfection in every single bite.',
    aspect: 'md:col-span-2 h-72 sm:h-96',
  },
  {
    type: 'image',
    url: 'https://ik.imagekit.io/qjg532nyu/SaveClip.App_670944458_17874919524665304_3974679016813774294_n.jpg',
    title: 'Signature Kitchen Service',
    description: 'Gourmet prep stations operating under pristine conditions to craft exquisite culinary masterpieces.',
    aspect: 'md:col-span-2 h-72 sm:h-96',
  }
];

interface GalleryPageProps {
  onBackToHome: () => void;
  onBookClick: () => void;
}

export default function GalleryPage({ onBackToHome, onBookClick }: GalleryPageProps) {
  const [activeMediaUrl, setActiveMediaUrl] = useState<string | null>(null);
  const [activeMediaType, setActiveMediaType] = useState<'image' | 'video' | null>(null);
  const [activeItemTitle, setActiveItemTitle] = useState<string>('');
  const [activeItemDesc, setActiveItemDesc] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'images' | 'videos'>('all');

  const filteredItems = galleryItems.filter(item => {
    if (filter === 'images') return item.type === 'image';
    if (filter === 'videos') return item.type === 'video';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0e0e11] pt-32 pb-24 relative overflow-hidden" id="gallery-page-view">
      {/* Visual Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-brand-red/5 via-transparent to-transparent pointer-events-none z-0" />
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/ghostshadow526/BZAF-LINKS/main/navwall.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="gallery-page-container">
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16" id="gallery-header-section">
          <div className="space-y-3">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-[#a5583a] hover:text-brand-red transition-colors uppercase group cursor-pointer"
              id="gallery-back-btn"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </button>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none" id="gallery-title-main">
              Our Gallery
            </h1>
            <p className="text-gray-400 text-sm font-light max-w-xl">
              An immersive sensory experience showcasing our premium selection of master-carved cuts, our dedicated aging cellar, and the incredible art of preparation.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex items-center space-x-2 bg-white/5 border border-white/10 p-1.5 rounded-lg self-start md:self-center" id="gallery-filters">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all cursor-pointer ${
                filter === 'all' 
                  ? 'bg-brand-red text-white font-extrabold shadow-md' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All Media
            </button>
            <button
              onClick={() => setFilter('images')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all cursor-pointer flex items-center space-x-2 ${
                filter === 'images' 
                  ? 'bg-brand-red text-white font-extrabold shadow-md' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <ImageIcon size={12} />
              <span>Images</span>
            </button>
            <button
              onClick={() => setFilter('videos')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all cursor-pointer flex items-center space-x-2 ${
                filter === 'videos' 
                  ? 'bg-brand-red text-white font-extrabold shadow-md' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Film size={12} />
              <span>Videos</span>
            </button>
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6" id="gallery-masonry-bento">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.url}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                setActiveMediaUrl(item.url);
                setActiveMediaType(item.type as 'image' | 'video');
                setActiveItemTitle(item.title);
                setActiveItemDesc(item.description);
              }}
              className={`${item.aspect} relative group rounded-lg overflow-hidden border border-white/5 bg-[#121216] cursor-pointer shadow-xl hover:shadow-2xl hover:border-white/15 transition-all duration-300`}
            >
              {item.type === 'video' ? (
                <div className="w-full h-full relative font-sans">
                  <video
                    src={item.url}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                  
                  {/* Play Indicator Badge */}
                  <div className="absolute top-4 right-4 p-2 bg-black/70 rounded-full border border-white/10 text-white z-10 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 shadow-md">
                    <Play size={14} className="fill-current" />
                  </div>
                </div>
              ) : (
                <div className="w-full h-full relative font-sans">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                  
                  {/* Zoom Indicator Badge */}
                  <div className="absolute top-4 right-4 p-2 bg-black/70 rounded-full border border-white/10 text-white z-10 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 shadow-md">
                    <Maximize2 size={14} />
                  </div>
                </div>
              )}

            </motion.div>
          ))}
        </div>

        {/* Empty state if filtering has no results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-24 border border-white/5 bg-white/[0.01] rounded-lg" id="gallery-empty">
            <p className="text-gray-500 font-mono uppercase tracking-wider text-sm">No items found matching the selected filter.</p>
          </div>
        )}
      </div>

      {/* Reviews and Contact Section Right Beneath */}
      <div className="relative z-20 my-4">
        <MarqueeTicker />
      </div>
      <div className="w-full relative z-10" id="gallery-testimonials-section">
        <Testimonials />
      </div>
      <div className="w-full relative z-10" id="gallery-contact-section">
        <ContactSection onBookClick={onBookClick} />
      </div>

      {/* Full Immersive Lightbox Modal */}
      {activeMediaUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
          id="gallery-lightbox"
          onClick={() => {
            setActiveMediaUrl(null);
            setActiveMediaType(null);
          }}
        >
          {/* Close button top right */}
          <button
            className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-brand-red hover:text-white border border-white/10 rounded-full transition-all text-gray-400 z-50 cursor-pointer shadow-lg"
            onClick={() => {
              setActiveMediaUrl(null);
              setActiveMediaType(null);
            }}
            id="lightbox-close-btn"
          >
            <X size={20} />
          </button>

          {/* Media Core Block */}
          <div
            className="relative max-w-5xl w-full max-h-[75vh] flex items-center justify-center rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
            id="lightbox-content-box"
          >
            {activeMediaType === 'video' ? (
              <video
                src={activeMediaUrl}
                className="w-full max-h-[70vh] object-contain"
                controls
                autoPlay
                loop
                referrerPolicy="no-referrer"
              />
            ) : (
              <img
                src={activeMediaUrl}
                alt={activeItemTitle}
                className="w-full max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            )}
          </div>

          {/* Lightbox Info Panel - Removed */}
        </div>
      )}
    </div>
  );
}
