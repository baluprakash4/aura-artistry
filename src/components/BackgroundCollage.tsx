import React from 'react';
import { motion } from 'motion/react';
import { Paperclip } from 'lucide-react';

export const BackgroundCollage = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden select-none opacity-40">
      {/* Newspaper scrap top left */}
      <div className="absolute top-0 left-0 w-64 h-80 -translate-x-10 -translate-y-10 rotate-[-5deg] bg-[#e6dfd1] p-6 shadow-lg border border-black/5">
        <div className="font-serif text-[10px] leading-tight text-black/40 overflow-hidden h-full">
          {Array(20).fill(0).map((_, i) => (
            <p key={i} className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          ))}
        </div>
        <Paperclip className="absolute top-4 right-4 w-8 h-8 text-gray-600/40 rotate-45" />
      </div>

      {/* Vintage building top right */}
      <div className="absolute top-0 right-0 w-80 h-64 translate-x-10 -translate-y-5 rotate-[3deg] shadow-xl border-4 border-white">
        <img 
          src="https://picsum.photos/seed/vintage-building/800/600?grayscale" 
          alt="Vintage Building" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Street scene bottom left */}
      <div className="absolute bottom-0 left-0 w-96 h-72 -translate-x-10 translate-y-10 rotate-[2deg] shadow-2xl border-8 border-white">
        <img 
          src="https://picsum.photos/seed/vintage-street/800/600?grayscale" 
          alt="Vintage Street" 
          className="w-full h-full object-cover opacity-70"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Newspaper scrap bottom right */}
      <div className="absolute bottom-0 right-0 w-72 h-96 translate-x-5 translate-y-10 rotate-[-8deg] bg-[#e6dfd1] p-8 shadow-lg border border-black/5">
        <div className="font-serif text-[12px] leading-relaxed text-black/30 overflow-hidden h-full">
          {Array(15).fill(0).map((_, i) => (
            <p key={i} className="mb-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          ))}
        </div>
      </div>

      {/* Lotus flower bottom right */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-10 right-10 w-48 h-48 z-10"
      >
        <img 
          src="https://picsum.photos/seed/lotus/400/400?sepia=1" 
          alt="Lotus" 
          className="w-full h-full object-contain drop-shadow-2xl grayscale brightness-75 contrast-125"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Subtle paper stains */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-clay/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-brand-olive/5 rounded-full blur-[150px]" />
    </div>
  );
};
