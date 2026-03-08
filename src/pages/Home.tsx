import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Palette, Gift, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ART_PIECES, INSTAGRAM_POSTS } from '../constants';
import { ArtCard } from '../components/ArtCard';
import { Carousel } from '../components/Carousel';

export const Home = () => {
  const featuredPieces = ART_PIECES.filter(p => p.featured);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-clay/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center space-x-2 text-brand-clay font-medium tracking-widest uppercase text-xs mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Fine Art & Handcrafted Gifts</span>
              </span>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-olive leading-[0.9] mb-8">
                Where Every <br />
                <span className="italic text-brand-clay">Stroke</span> Tells <br />
                A Story.
              </h1>
              <p className="text-lg text-brand-olive/60 max-w-md mb-10 leading-relaxed">
                Discover a collection of soulful paintings and bespoke handmade creations designed to bring warmth and wonder into your space.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/shop" className="btn-primary flex items-center justify-center">
                  Shop Collection <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/custom" className="btn-secondary flex items-center justify-center">
                  Order Custom Art
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/artist-hero/1200/1500"
                  alt="Featured Artwork"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-3xl max-w-[240px] hidden md:block">
                <p className="font-serif text-xl italic text-brand-olive mb-2">"Art is the only way to run away without leaving home."</p>
                <span className="text-xs uppercase tracking-widest font-bold text-brand-clay">— Twyla Tharp</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Art Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-olive mb-4">Featured Pieces</h2>
            <p className="text-brand-olive/60">Handpicked artworks from my latest collection.</p>
          </div>
          <Link to="/shop" className="text-brand-olive font-medium hover:text-brand-clay transition-colors flex items-center">
            View All <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPieces.map((piece) => (
            <ArtCard key={piece.id} piece={piece} />
          ))}
        </div>
      </section>

      {/* Animated Carousel Section */}
      <section className="bg-brand-olive/5 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-olive mb-4">New Arrivals</h2>
          <p className="text-brand-olive/60">The latest additions to our curated collection.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel slideClassName="sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
            {ART_PIECES.map((piece) => (
              <ArtCard key={piece.id} piece={piece} className="h-full" />
            ))}
          </Carousel>
        </div>
      </section>

      {/* Custom Gifts Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-olive rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-clay rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <Gift className="w-12 h-12 text-brand-clay mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Create Something Unique</h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Looking for a one-of-a-kind gift? I specialize in custom portraits, personalized illustrations, and bespoke handmade crafts tailored to your vision.
            </p>
            <Link to="/custom" className="inline-flex items-center px-8 py-4 bg-brand-clay text-white rounded-full font-medium hover:scale-105 transition-transform">
              Start Your Custom Order <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Workshops Coming Soon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-y border-brand-olive/10 py-12 flex flex-col md:row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-brand-clay/10 rounded-2xl">
              <Palette className="w-6 h-6 text-brand-clay" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-brand-olive">Art Workshops Coming Soon</h3>
              <p className="text-brand-olive/60">Join the waiting list to be the first to know about upcoming sessions.</p>
            </div>
          </div>
          <Link to="/workshops" className="btn-secondary">
            Join Waiting List
          </Link>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-olive mb-4">Follow the Journey</h2>
          <a
            href="https://instagram.com/chitha.diaries_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-clay font-medium hover:underline flex items-center justify-center"
          >
            @chitha.diaries_ <Instagram className="ml-2 w-4 h-4" />
          </a>
        </div>
        <Carousel
          options={{ slidesToScroll: 1, align: 'start' }}
          slideClassName="flex-[0_0_50%] md:flex-[0_0_25%] lg:flex-[0_0_16.666%]"
        >
          {INSTAGRAM_POSTS.map((url, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-sm mx-2"
            >
              <img src={url} alt={`Instagram post ${i + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </Carousel>
      </section>
    </div>
  );
};
