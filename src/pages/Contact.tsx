import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, Instagram, Send, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-olive mb-6">Get in Touch</h1>
        <p className="text-brand-ink text-lg font-semibold">
          Have a question about a piece, want to discuss a custom project, or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-[#e8dcc4] p-8 rounded-[40px] shadow-[inset_0_0_30px_rgba(0,0,0,0.05)] border border-brand-olive/5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-brand-olive">Contact Info</h3>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-clay/10 rounded-2xl text-brand-clay">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-brand-olive/90">Email</p>
                <a href="mailto:prakashnerella.tech@gmail.com" className="text-brand-olive font-medium hover:text-brand-clay transition-colors">
                  prakashnerella.tech@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-clay/10 rounded-2xl text-brand-clay">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-brand-olive/90">Call / SMS</p>
                <div className="flex space-x-3">
                  <a href="tel:9885739887" className="text-brand-olive font-medium hover:text-brand-clay transition-colors">
                    9885739887
                  </a>
                  <span className="text-brand-olive/20">|</span>
                  <a href="sms:9885739887" className="text-brand-olive font-medium hover:text-brand-clay transition-colors">
                    SMS
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-clay/10 rounded-2xl text-brand-clay">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-brand-olive/90">Instagram</p>
                <a 
                  href="https://instagram.com/artistic_2_4" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-olive font-medium hover:text-brand-clay transition-colors"
                >
                  @artistic_2_4
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-clay/10 rounded-2xl text-brand-clay">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-brand-olive/90">Studio</p>
                <p className="text-brand-olive font-medium">Portland, Oregon</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a 
              href="https://wa.me/919885739887?text=Hi!%20I'm%20interested%20in%20your%20beautiful%20artwork.%20Could%20you%20please%20share%20more%20details%20and%20pricing?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-4 bg-brand-clay text-white rounded-full font-bold flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="mr-2 w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg> WhatsApp
            </a>
            <a 
              href="tel:9885739887" 
              className="py-4 bg-brand-olive text-white rounded-full font-bold flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
            >
              <Phone className="mr-2 w-5 h-5" /> Call Now
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#e8dcc4] p-8 md:p-12 rounded-[40px] shadow-[inset_0_0_50px_rgba(0,0,0,0.05)] border border-brand-olive/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/70 ml-1">Name</label>
                  <input required type="text" className="w-full px-6 py-4 bg-brand-cream/80 border border-brand-olive/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-clay/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/70 ml-1">Email</label>
                  <input required type="email" className="w-full px-6 py-4 bg-brand-cream/80 border border-brand-olive/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-clay/20" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/70 ml-1">Subject</label>
                <input required type="text" className="w-full px-6 py-4 bg-brand-cream/80 border border-brand-olive/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-clay/20" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/70 ml-1">Message</label>
                <textarea required rows={6} className="w-full px-6 py-4 bg-brand-cream/80 border border-brand-olive/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-clay/20 resize-none"></textarea>
              </div>

              <button type="submit" className="w-full btn-primary flex items-center justify-center py-5">
                Send Message <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
