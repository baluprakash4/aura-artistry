import React from 'react';
import { Instagram, Mail, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-olive/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-brand-olive mb-4 tracking-tight">AURA & ARTISTRY</h2>
            <p className="text-brand-olive/60 max-w-md leading-relaxed">
              Capturing the essence of nature and emotion through fine art and handcrafted gifts. 
              Each piece is a journey, a story told in colors and textures.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold text-brand-olive mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-brand-olive/60 hover:text-brand-clay transition-colors">Shop All</Link></li>
              <li><Link to="/custom" className="text-brand-olive/60 hover:text-brand-clay transition-colors">Custom Orders</Link></li>
              <li><Link to="/workshops" className="text-brand-olive/60 hover:text-brand-clay transition-colors">Workshops</Link></li>
              <li><Link to="/about" className="text-brand-olive/60 hover:text-brand-clay transition-colors">About Me</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-brand-olive mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/balu_nerella" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-brand-olive/5 rounded-full hover:bg-brand-olive/10 transition-colors"
              >
                <Instagram className="w-5 h-5 text-brand-olive" />
              </a>
              <a 
                href="https://wa.me/9123456789" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-brand-olive/5 rounded-full hover:bg-brand-olive/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-brand-olive" />
              </a>
              <a 
                href="mailto:prakashnerella.tech@gmail.com" 
                className="p-2 bg-brand-olive/5 rounded-full hover:bg-brand-olive/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-brand-olive" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-olive/5 flex flex-col md:row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-brand-olive/40">
            © {new Date().getFullYear()} Aura & Artistry. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-brand-olive/40">
            <a href="#" className="hover:text-brand-olive transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-olive transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
