import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Palette, Gift, Instagram, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ART_PIECES, INSTAGRAM_POSTS, TESTIMONIALS } from '../constants';
import { ArtCard } from '../components/ArtCard';
import { Carousel } from '../components/Carousel';
import { PaperFlower } from '../components/PaperFlower';

export const Home = () => {
  const featuredPieces = ART_PIECES.filter(p => p.featured);

  return (
    <div className="space-y-24 pb-24 relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="book-page p-12 leather-border"
            >
              <PaperFlower className="top-2 right-2 w-16 h-16 opacity-20" rotate={45} />
              <span className="inline-flex items-center space-x-2 text-brand-clay font-medium tracking-widest uppercase text-xs mb-6 bg-brand-clay/5 px-3 py-1 rounded-full border border-brand-clay/10">
                <Sparkles className="w-4 h-4" />
                <span>Handwritten Love & Bespoke Crafts</span>
              </span>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-olive leading-[0.9] mb-8">
                Letters of <br />
                <span className="italic text-brand-clay underline decoration-brand-clay/30 underline-offset-8">Love</span> & <br />
                Handmade.
              </h1>
              <p className="text-xl text-black max-w-md mb-10 leading-relaxed font-serif italic font-bold">
                Crafting soulful messages and bespoke couple gifts that turn your shared memories into timeless treasures.
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
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 bg-[#c9bc9c] shadow-2xl rounded-sm rotate-1"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-inner border border-brand-olive/10">
                <motion.img
                  src="https://picsum.photos/seed/artist-hero/1200/1500"
                  alt="Featured Artwork"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-10 -left-10 glass-card p-8 rounded-3xl max-w-[240px] hidden md:block"
              >
                <p className="font-serif text-xl italic text-brand-olive mb-2">"Art is the only way to run away without leaving home."</p>
                <span className="text-xs uppercase tracking-widest font-bold text-brand-clay">— Twyla Tharp</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Art Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <PaperFlower className="-top-10 -left-10 w-24 h-24" rotate={-15} />
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-olive mb-4">Crafted with Love</h2>
            <p className="text-brand-ink italic font-serif font-semibold">Bespoke gifts for your most cherished moments.</p>
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
          <p className="text-brand-olive/80">The latest additions to our curated collection.</p>
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
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Seal Your Love in Ink</h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed font-serif italic">
              From personalized love letters on vintage parchment to custom couple illustrations, we help you express what words alone cannot.
            </p>
            <Link to="/custom" className="inline-flex items-center px-8 py-4 bg-brand-clay text-white rounded-full font-medium hover:scale-105 transition-transform">
              Start Your Custom Order <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-olive mb-4">Loved by Our Customers</h2>
          <p className="text-brand-olive/80 font-serif italic">Real stories from customers who turned their memories into art.</p>
        </div>
        
        <Carousel 
          options={{ slidesToScroll: 1, align: 'start' }}
          slideClassName="sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -10 }}
              className="bg-[#e8dcc4] rounded-[32px] overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.05)] border border-brand-olive/5 h-full flex flex-col mx-2"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={t.imageUrl} 
                  alt={`Artwork for ${t.customerName}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex text-brand-clay mb-4">
                  {Array(t.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-brand-olive/90 font-serif italic mb-6 flex-grow leading-relaxed">
                  "{t.feedback}"
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-olive/5">
                  <div>
                    <h4 className="font-bold text-brand-olive">{t.customerName}</h4>
                    {t.location && <p className="text-xs text-brand-olive/70 uppercase tracking-widest">{t.location}</p>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
        
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-secondary">
            Share Your Story
          </Link>
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
              <p className="text-brand-olive/80">Join the waiting list to be the first to know about upcoming sessions.</p>
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
            href="https://instagram.com/artistic_2_4" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-clay font-medium hover:underline flex items-center justify-center"
          >
            @artistic_2_4 <Instagram className="ml-2 w-4 h-4" />
          </a>
        </div>
        <Carousel 
          options={{ slidesToScroll: 1, align: 'start' }}
          slideClassName="flex-[0_0_50%] md:flex-[0_0_25%] lg:flex-[0_0_16.666%]"
        >
          {INSTAGRAM_POSTS.map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="aspect-square rounded-2xl overflow-hidden shadow-sm mx-2"
            >
              <motion.img 
                src={url} 
                alt={`Instagram post ${i + 1}`} 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </motion.div>
          ))}
        </Carousel>
      </section>
    </div>
  );
};
