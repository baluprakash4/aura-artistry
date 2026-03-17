import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Paperclip, Info, RotateCcw } from 'lucide-react';
import { ArtPiece } from '../types';
import { cn } from '../utils';

interface ArtCardProps {
  piece: ArtPiece;
  className?: string;
}

export const ArtCard: React.FC<ArtCardProps> = ({ piece, className }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const randomRotation = React.useMemo(() => (Math.random() * 4 - 2).toFixed(1), []);

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const message = `Hi! I'm interested in ordering the artwork: ${piece.title}. Please share the order details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919885739887?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("perspective-1000 w-full h-full min-h-[500px]", className)}
      style={{ rotate: `${randomRotation}deg` }}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        className="relative w-full h-full preserve-3d cursor-pointer"
        onClick={handleFlip}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-[#e8dcc4] rounded-sm shadow-md border border-brand-olive/5 flex flex-col">
          <div className="aspect-[3/4] overflow-hidden relative rounded-sm">
            <Paperclip className="absolute top-1 right-1 w-6 h-6 text-gray-600/30 z-20 rotate-45 pointer-events-none" />
            <motion.img
              src={piece.imageUrl}
              alt={piece.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <button 
                onClick={handleWhatsAppOrder}
                className="bg-brand-olive text-brand-cream p-4 rounded-full shadow-lg transform translate-y-4 hover:translate-y-0 transition-transform duration-500 flex items-center space-x-2 font-bold"
              >
                <MessageSquare className="w-6 h-6" />
                <span>Order</span>
              </button>
            </div>
            {piece.featured && (
              <span className="absolute top-4 left-4 bg-brand-clay text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <div className="p-6 bg-[#e8dcc4] shadow-inner flex-grow flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-serif text-xl font-bold text-brand-olive">{piece.title}</h3>
              <span className="font-sans font-bold text-brand-clay">₹{piece.price}</span>
            </div>
            <p className="text-brand-olive/70 text-sm line-clamp-2 mb-4 leading-relaxed font-serif italic">
              {piece.description}
            </p>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-widest text-brand-olive/40 font-bold">
                {piece.category}
              </span>
              <button 
                onClick={handleFlip}
                className="text-brand-olive hover:text-brand-clay transition-colors flex items-center text-sm font-bold group"
              >
                View Details <Info className="ml-1 w-4 h-4 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden bg-[#e8dcc4] rounded-sm shadow-xl border-2 border-brand-clay/20 p-8 flex flex-col rotate-y-180"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }}
        >
          <div className="flex justify-between items-center mb-6 border-b border-brand-olive/10 pb-4">
            <h3 className="font-serif text-2xl font-bold text-brand-olive italic">Artwork Specs</h3>
            <button onClick={handleFlip} className="text-brand-clay hover:rotate-180 transition-transform duration-500">
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6 flex-grow">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-clay mb-1 block">Dimensions</label>
              <p className="text-brand-olive font-serif italic text-lg">{piece.details?.size || 'Custom Size'}</p>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-clay mb-1 block">The Effort</label>
              <p className="text-brand-olive font-serif italic text-lg">{piece.details?.effort || 'Handcrafted with Love'}</p>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-clay mb-1 block">Materials Used</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {piece.details?.materials.map((m, i) => (
                  <span key={i} className="px-3 py-1 bg-brand-olive/5 border border-brand-olive/10 rounded-full text-xs text-brand-olive font-medium">
                    {m}
                  </span>
                )) || <span className="text-brand-olive/60 italic">Natural & Recycled Materials</span>}
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-brand-olive/10">
            <button 
              onClick={handleWhatsAppOrder}
              className="w-full py-3 bg-brand-olive text-white rounded-full font-bold flex items-center justify-center hover:bg-brand-clay transition-colors shadow-lg"
            >
              <MessageSquare className="mr-2 w-4 h-4" /> WhatsApp Order
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
