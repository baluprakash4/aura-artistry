import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Plus } from 'lucide-react';
import { ArtPiece } from '../types';
import { cn } from '../utils';

interface ArtCardProps {
  piece: ArtPiece;
  className?: string;
}

export const ArtCard: React.FC<ArtCardProps> = ({ piece, className }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500", className)}
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img
          src={piece.imageUrl}
          alt={piece.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <button className="bg-white text-brand-olive p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
        {piece.featured && (
          <span className="absolute top-4 left-4 bg-brand-clay text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-semibold text-brand-olive">{piece.title}</h3>
          <span className="font-sans font-medium text-brand-clay">${piece.price}</span>
        </div>
        <p className="text-brand-olive/60 text-sm line-clamp-2 mb-4 leading-relaxed">
          {piece.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-[10px] uppercase tracking-widest text-brand-olive/40 font-bold">
            {piece.category}
          </span>
          <button className="text-brand-olive hover:text-brand-clay transition-colors flex items-center text-sm font-medium">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};
