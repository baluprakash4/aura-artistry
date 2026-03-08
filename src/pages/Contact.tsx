import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, Instagram, Send, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-olive mb-6">Get in Touch</h1>
        <p className="text-brand-olive/60 text-lg">
          Have a question about a piece, want to discuss a custom project, or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-brand-olive/5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-brand-olive">Contact Info</h3>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-clay/10 rounded-2xl text-brand-clay">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-brand-olive/40">Email</p>
                <a href="mailto:karuturi.ruchitha@gmail.com" className="text-brand-olive font-medium hover:text-brand-clay transition-colors">
                  karuturi.ruchitha@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-clay/10 rounded-2xl text-brand-clay">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-brand-olive/40">Call / SMS</p>
                <div className="flex space-x-3">
                  <a href="tel:9398781261" className="text-brand-olive font-medium hover:text-brand-clay transition-colors">

                  </a>
                  <span className="text-brand-olive/20">|</span>
                  <a href="sms: 9398781261" className="text-brand-olive font-medium hover:text-brand-clay transition-colors">
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
                <p className="text-xs uppercase tracking-widest font-bold text-brand-olive/40">Instagram</p>
                <a
                  href="https://instagram.com/chitha.diaries_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-olive font-medium hover:text-brand-clay transition-colors"
                >
                  chitha.diaries_
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-brand-clay/10 rounded-2xl text-brand-clay">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-brand-olive/40">Studio</p>
                <p className="text-brand-olive font-medium">Portland, Oregon</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://wa.me/9123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 bg-[#25D366] text-white rounded-full font-bold flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
            >
              <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp
            </a>
            <a
              href="tel:9123456789"
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
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-brand-olive/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">Name</label>
                  <input required type="text" className="w-full px-6 py-4 bg-brand-cream/50 border border-brand-olive/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-clay/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">Email</label>
                  <input required type="email" className="w-full px-6 py-4 bg-brand-cream/50 border border-brand-olive/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-clay/20" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">Subject</label>
                <input required type="text" className="w-full px-6 py-4 bg-brand-cream/50 border border-brand-olive/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-clay/20" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">Message</label>
                <textarea required rows={6} className="w-full px-6 py-4 bg-brand-cream/50 border border-brand-olive/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-clay/20 resize-none"></textarea>
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
