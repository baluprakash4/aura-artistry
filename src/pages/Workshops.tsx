import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Palette, Sparkles, Send } from 'lucide-react';

export const Workshops = () => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      <div className="relative rounded-sm overflow-hidden bg-brand-leather text-[#e8dcc4] p-12 md:p-24 text-center mb-24 leather-border">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://picsum.photos/seed/workshop-bg/1920/1080?grayscale" 
            alt="Workshop background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 bg-brand-clay rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
            Coming Soon
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight">
            Creative <br /> <span className="italic text-brand-clay">Workshops</span>
          </h1>
          <p className="text-xl text-[#e8dcc4]/70 mb-12 leading-relaxed font-serif italic">
            I'm preparing a series of intimate, hands-on workshops where you can learn the techniques behind my art. From watercolor basics to advanced ceramic textures.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:row max-w-md mx-auto gap-4">
              <input 
                required
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-clay text-white placeholder:text-white/40"
              />
              <button type="submit" className="px-8 py-4 bg-brand-clay text-white rounded-full font-medium hover:scale-105 transition-transform">
                Join Waiting List
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl inline-block"
            >
              <p className="font-medium">✨ You're on the list! We'll be in touch soon.</p>
            </motion.div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-brand-clay/10 rounded-3xl flex items-center justify-center mx-auto text-brand-clay">
            <Palette className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-brand-olive">Technique Focus</h3>
          <p className="text-brand-olive/60 leading-relaxed">
            Learn specific brushwork, color mixing, and textural applications that define my style.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-brand-clay/10 rounded-3xl flex items-center justify-center mx-auto text-brand-clay">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-brand-olive">Intimate Groups</h3>
          <p className="text-brand-olive/60 leading-relaxed">
            Small class sizes ensure personalized attention and a supportive creative environment.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-brand-clay/10 rounded-3xl flex items-center justify-center mx-auto text-brand-clay">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-brand-olive">All Materials Provided</h3>
          <p className="text-brand-olive/60 leading-relaxed">
            Just bring your curiosity. We provide premium paints, canvases, and tools for every session.
          </p>
        </div>
      </div>
    </div>
  );
};
