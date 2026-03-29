import React from 'react';
import { motion } from 'motion/react';
import { Search, MessageCircle, CheckCircle, Truck } from 'lucide-react';

export const HowToOrder = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-olive mb-6">How to Order</h1>
        <p className="text-brand-ink text-lg font-semibold">
          Simple steps to bring a piece of art into your home. Follow our guide to start your journey with Ruchi Collections.
        </p>
      </div>

      <section className="bg-[#e8dcc4] rounded-[60px] p-12 md:p-20 border border-brand-olive/5 shadow-[inset_0_0_50px_rgba(0,0,0,0.05)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              step: "01",
              title: "Explore",
              description: "Browse our collection of unique, handcrafted artworks on the home page or shop section.",
              icon: <Search className="w-8 h-8" />
            },
            {
              step: "02",
              title: "Order",
              description: "Click the 'WhatsApp Order' button on the artwork you wish to purchase to start a chat.",
              icon: <MessageCircle className="w-8 h-8" />
            },
            {
              step: "03",
              title: "Confirm",
              description: "We'll discuss details like size, pricing, and any custom touches directly via WhatsApp.",
              icon: <CheckCircle className="w-8 h-8" />
            },
            {
              step: "04",
              title: "Delivery",
              description: "Once your piece is ready, it will be carefully packaged and shipped to your doorstep.",
              icon: <Truck className="w-8 h-8" />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="w-16 h-16 bg-brand-clay text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-5xl font-serif font-bold text-brand-olive/10 group-hover:text-brand-clay/20 transition-colors">
                  {item.step}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-olive mb-4">{item.title}</h3>
              <p className="text-brand-olive/70 font-serif italic text-lg leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="mt-20 text-center">
        <p className="text-brand-olive font-serif italic text-xl mb-8">Ready to find your perfect piece?</p>
        <a href="/shop" className="btn-primary inline-flex items-center">
          Go to Shop
        </a>
      </div>
    </div>
  );
};
