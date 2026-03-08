import React from 'react';
import { motion } from 'motion/react';
import { Filter, Search } from 'lucide-react';
import { ART_PIECES } from '../constants';
import { ArtCard } from '../components/ArtCard';
import { ArtCategory } from '../types';
import { cn } from '../utils';

export const Shop = () => {
  const [filter, setFilter] = React.useState<ArtCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const categories: (ArtCategory | 'all')[] = ['all', 'paintings', 'custom gifts', 'handmade crafts'];

  const filteredPieces = ART_PIECES.filter(piece => {
    const matchesFilter = filter === 'all' || piece.category === filter;
    const matchesSearch = piece.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         piece.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-olive mb-6">The Gallery</h1>
        <p className="text-brand-olive/60 max-w-xl mx-auto text-lg">
          Browse through my collection of original paintings, handcrafted items, and unique gift ideas.
        </p>
      </header>

      <div className="flex flex-col md:row justify-between items-center mb-12 space-y-6 md:space-y-0">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all capitalize",
                filter === cat 
                  ? "bg-brand-olive text-white shadow-md" 
                  : "bg-white text-brand-olive/60 hover:bg-brand-olive/5 border border-brand-olive/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-olive/40" />
          <input
            type="text"
            placeholder="Search artwork..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-brand-olive/10 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-clay/20 transition-all text-sm"
          />
        </div>
      </div>

      {filteredPieces.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPieces.map((piece) => (
            <ArtCard key={piece.id} piece={piece} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-brand-olive/40 text-xl font-serif italic">No pieces found matching your criteria.</p>
          <button 
            onClick={() => {setFilter('all'); setSearchQuery('');}}
            className="mt-4 text-brand-clay font-medium hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};
