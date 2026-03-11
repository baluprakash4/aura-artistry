import React from 'react';
import { motion } from 'motion/react';
import { Megaphone } from 'lucide-react';

export const AnnouncementBanner = () => {
  const currentMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date());

  const bannerContent = (
    <>
      <span className="text-sm font-medium tracking-wide">
        ✨ {currentMonth} Special Offer – Get 15% OFF on MRP! Order through WhatsApp. ✨
      </span>
      <span className="text-sm font-medium tracking-wide">
        🎨 Custom commissions are now open! Book your slot for {currentMonth} today. 🎨
      </span>
      <span className="text-sm font-medium tracking-wide">
        📜 New Vintage Scroll collection just arrived! Check the Shop. 📜
      </span>
    </>
  );

  return (
    <div className="bg-brand-clay text-brand-cream py-2 overflow-hidden border-y border-black/10 relative z-40">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <div className="flex-shrink-0 mr-4 bg-brand-leather/30 p-1 rounded-full">
          <Megaphone className="w-4 h-4" />
        </div>
        <div className="relative flex-grow overflow-hidden h-6">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute whitespace-nowrap flex items-center space-x-8"
          >
            <div className="flex items-center space-x-8">
              {bannerContent}
            </div>
            <div className="flex items-center space-x-8">
              {bannerContent}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
