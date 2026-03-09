import React from 'react';
import { motion } from 'motion/react';
import { Upload, Send, CheckCircle2 } from 'lucide-react';

export const CustomOrder = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="book-page p-12 leather-border"
        >
          <CheckCircle2 className="w-20 h-20 text-brand-clay mx-auto mb-6" />
          <h2 className="text-4xl font-serif font-bold text-brand-olive mb-4">Request Sealed!</h2>
          <p className="text-brand-olive/70 mb-8 leading-relaxed font-serif italic">
            Your request has been recorded on our parchment. I'll review your vision and get back to you within 2-3 business days to discuss the details and pricing.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="btn-primary"
          >
            Send Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-olive mb-8">Custom Art <br /><span className="italic text-brand-clay">Requests</span></h1>
          <p className="text-brand-olive/60 text-lg mb-12 leading-relaxed">
            Whether it's a portrait of a loved one, a landscape of a special place, or a unique gift for a celebration, I'd love to help bring your vision to life.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-brand-clay/10 flex items-center justify-center flex-shrink-0 text-brand-clay font-bold">1</div>
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-olive mb-2">Share Your Vision</h3>
                <p className="text-brand-olive/60">Tell me about the subject, style, and size you're looking for.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-brand-clay/10 flex items-center justify-center flex-shrink-0 text-brand-clay font-bold">2</div>
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-olive mb-2">Review & Quote</h3>
                <p className="text-brand-olive/60">I'll send you a detailed quote and timeline based on your requirements.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-brand-clay/10 flex items-center justify-center flex-shrink-0 text-brand-clay font-bold">3</div>
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-olive mb-2">Creation Process</h3>
                <p className="text-brand-olive/60">Once approved, I'll start working on your piece, sharing updates along the way.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="book-page p-8 md:p-12 leather-border"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">Name</label>
                <input required type="text" className="w-full px-6 py-4 bg-brand-cream/30 border border-black/10 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-clay/20" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">Email</label>
                <input required type="email" className="w-full px-6 py-4 bg-brand-cream/30 border border-black/10 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-clay/20" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">Phone (Optional)</label>
              <input type="tel" className="w-full px-6 py-4 bg-brand-cream/30 border border-black/10 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-clay/20" />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">Description of Gift</label>
              <textarea required rows={4} className="w-full px-6 py-4 bg-brand-cream/30 border border-black/10 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-clay/20 resize-none font-serif italic" placeholder="Describe what you have in mind..."></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">Reference Image</label>
              <div className="border-2 border-dashed border-black/10 rounded-sm p-8 text-center hover:bg-black/5 transition-colors cursor-pointer group">
                <Upload className="w-8 h-8 text-brand-olive/20 mx-auto mb-2 group-hover:text-brand-clay transition-colors" />
                <p className="text-sm text-brand-olive/40">Click to upload or drag and drop</p>
              </div>
            </div>

            <button type="submit" className="w-full btn-primary flex items-center justify-center py-5">
              Submit Order Request <Send className="ml-2 w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
