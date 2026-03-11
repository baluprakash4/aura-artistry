import React from 'react';
import { motion } from 'motion/react';
import { Heart, BookOpen, Award, Gift, Sparkles, Palette } from 'lucide-react';

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative z-10">
            <motion.img 
              src="https://picsum.photos/seed/artist-portrait/1200/1500" 
              alt="The Artist" 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-10 -left-10 w-40 h-40 bg-brand-clay/20 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-olive/10 rounded-full blur-3xl" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8 book-page p-12 leather-border"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-clay">The Story Behind the Art</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-olive leading-tight">
            The <span className="italic text-brand-clay">Scribe</span> of <br /> Hearts
          </h1>
          <div className="space-y-6 text-lg text-brand-ink leading-relaxed font-serif italic font-semibold">
            <p>
              Every love story is unique, and I believe it deserves to be told with the same care and beauty as a fine art piece.
            </p>
            <p>
              My work focuses on the intersection of calligraphy, illustration, and handmade crafts. I specialize in creating bespoke couple gifts—from hand-bound journals of your shared history to delicate illustrations that capture your most intimate moments.
            </p>
            <p>
              Using vintage-inspired materials like shaded parchment and deep ink, I aim to create pieces that feel like they've been cherished for generations.
            </p>
          </div>
          
          <div className="pt-8 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-3xl font-bold text-brand-olive">10+</h4>
              <p className="text-sm text-brand-olive/70 uppercase tracking-widest font-bold">Years Experience</p>
            </div>
            <div>
              <h4 className="font-serif text-3xl font-bold text-brand-olive">500+</h4>
              <p className="text-sm text-brand-olive/70 uppercase tracking-widest font-bold">Pieces Created</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Ruchi Collections */}
      <section className="mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-olive mb-4">Why Choose Ruchi Collections</h2>
          <p className="text-brand-olive/80 font-serif italic">Preserving memories through passionate artistic craftsmanship.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Handcrafted With Love",
              description: "Every piece is carefully made by hand, ensuring a unique touch that machines simply can't replicate.",
              icon: <Heart className="w-8 h-8" />
            },
            {
              title: "Personalized Art Stories",
              description: "We don't just make art; we tell your story through custom designs tailored to your specific memories.",
              icon: <BookOpen className="w-8 h-8" />
            },
            {
              title: "Premium Quality Materials",
              description: "From vintage parchment to archival inks, we use only the finest materials to ensure your art lasts a lifetime.",
              icon: <Award className="w-8 h-8" />
            },
            {
              title: "Unique Gifts for Special Moments",
              description: "Find the perfect gift for anniversaries, birthdays, or just to say 'I love you' in a way they'll never forget.",
              icon: <Gift className="w-8 h-8" />
            },
            {
              title: "Creative Storytelling",
              description: "Our designs are infused with narrative elements that capture the essence of your most cherished experiences.",
              icon: <Sparkles className="w-8 h-8" />
            },
            {
              title: "Attention to Detail",
              description: "We obsess over every stroke and texture to ensure the final piece is nothing short of a masterpiece.",
              icon: <Palette className="w-8 h-8" />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#e8dcc4] p-10 rounded-[40px] shadow-[inset_0_0_30px_rgba(0,0,0,0.05)] border border-brand-olive/5 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-brand-clay/10 rounded-2xl flex items-center justify-center text-brand-clay mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-olive mb-4">{item.title}</h3>
              <p className="text-brand-olive/80 leading-relaxed font-serif italic">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
