import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative z-10">
            <img
              src="https://picsum.photos/seed/artist-portrait/1200/1500"
              alt="The Artist"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-clay/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-olive/10 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-clay">The Story Behind the Art</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-olive leading-tight">
            Meet <span className="italic text-brand-clay">Ruchitha</span> <br /> Karuturi
          </h1>
          <div className="space-y-6 text-lg text-brand-olive/70 leading-relaxed">
            <p>
              My journey with art began in the quiet corners of my grandmother's garden, where I first learned to see the intricate patterns in a leaf and the subtle shifts of light at dusk.
            </p>
            <p>
              With over a decade of experience in fine arts, I've dedicated my life to capturing those fleeting moments of beauty that often go unnoticed. My work is a dialogue between the organic world and human emotion.
            </p>
            <p>
              Every piece I create, whether it's a large-scale oil painting or a small handcrafted gift, is infused with intention and a deep respect for the materials I use. I believe that art should not just decorate a space, but transform it.
            </p>
          </div>

          <div className="pt-8 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-3xl font-bold text-brand-olive">10+</h4>
              <p className="text-sm text-brand-olive/40 uppercase tracking-widest font-bold">Years Experience</p>
            </div>
            <div>
              <h4 className="font-serif text-3xl font-bold text-brand-olive">500+</h4>
              <p className="text-sm text-brand-olive/40 uppercase tracking-widest font-bold">Pieces Created</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
