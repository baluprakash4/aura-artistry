import React from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export const PigeonAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {/* Bird 1: Top Left to Bottom Right (Criss-cross) */}
      <motion.div
        initial={{ x: "-20%", y: "20%", rotate: 20, opacity: 0 }}
        animate={{ 
          x: "120%", 
          y: "80%",
          rotate: [20, 10, 30, 20],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          repeatDelay: 300, // 5 minutes
          ease: "easeInOut",
          rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute flex items-center space-x-2"
      >
        <div className="relative">
          <svg viewBox="0 0 24 24" className="w-14 h-14 text-brand-clay fill-current opacity-90 drop-shadow-lg">
            <path d="M21 12c0-1.66-1.34-3-3-3h-2.18c-.41-1.16-1.52-2-2.82-2H9c-1.3 0-2.41.84-2.82 2H4c-1.66 0-3 1.34-3 3s1.34 3 3 3h2.18c.41 1.16 1.52 2 2.82 2h4c1.3 0 2.41-.84 2.82-2H18c1.66 0 3-1.34 3-3z" />
          </svg>
          <motion.div
            animate={{ scaleY: [1, 0.2, 1], y: [0, -5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full"
          >
             <svg viewBox="0 0 24 24" className="w-14 h-14 text-brand-clay fill-current opacity-50">
                <path d="M12 2L4 12h16L12 2z" />
             </svg>
          </motion.div>
        </div>
        <motion.div
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="bg-white p-1.5 shadow-xl border-2 border-brand-clay/30 rotate-12 backdrop-blur-sm"
        >
          <Mail className="w-4 h-4 text-brand-clay" />
        </motion.div>
      </motion.div>

      {/* Bird 2: Bottom Right to Top Left (Criss-cross) */}
      <motion.div
        initial={{ x: "120%", y: "90%", rotate: -160, opacity: 0 }}
        animate={{ 
          x: "-20%", 
          y: "15%",
          rotate: [-160, -170, -150, -160],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ 
          duration: 30, 
          delay: 60, 
          repeat: Infinity, 
          repeatDelay: 300, 
          ease: "easeInOut",
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute flex items-center space-x-2"
      >
        <div className="relative scale-y-[-1]">
          <svg viewBox="0 0 24 24" className="w-16 h-16 text-brand-clay fill-current opacity-85 drop-shadow-lg">
            <path d="M21 12c0-1.66-1.34-3-3-3h-2.18c-.41-1.16-1.52-2-2.82-2H9c-1.3 0-2.41.84-2.82 2H4c-1.66 0-3 1.34-3 3s1.34 3 3 3h2.18c.41 1.16 1.52 2 2.82 2h4c1.3 0 2.41-.84 2.82-2H18c1.66 0 3-1.34 3-3z" />
          </svg>
          <motion.div
            animate={{ scaleY: [1, 0.3, 1], y: [0, -4, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full"
          >
             <svg viewBox="0 0 24 24" className="w-16 h-16 text-brand-clay fill-current opacity-40">
                <path d="M12 2L4 12h16L12 2z" />
             </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Bird 3: Middle Left to Middle Right (Horizontal Drift) */}
      <motion.div
        initial={{ x: "-20%", y: "50%", rotate: 0, opacity: 0 }}
        animate={{ 
          x: "120%", 
          y: ["50%", "45%", "55%", "50%"],
          rotate: [0, 5, -5, 0],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ 
          duration: 35, 
          delay: 120,
          repeat: Infinity, 
          repeatDelay: 300,
          ease: "linear",
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute flex items-center space-x-2"
      >
        <div className="relative">
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-brand-clay fill-current opacity-80 drop-shadow-lg">
            <path d="M21 12c0-1.66-1.34-3-3-3h-2.18c-.41-1.16-1.52-2-2.82-2H9c-1.3 0-2.41.84-2.82 2H4c-1.66 0-3 1.34-3 3s1.34 3 3 3h2.18c.41 1.16 1.52 2 2.82 2h4c1.3 0 2.41-.84 2.82-2H18c1.66 0 3-1.34 3-3z" />
          </svg>
          <motion.div
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full"
          >
             <svg viewBox="0 0 24 24" className="w-12 h-12 text-brand-clay fill-current opacity-30">
                <path d="M12 2L4 12h16L12 2z" />
             </svg>
          </motion.div>
        </div>
        <div className="bg-white p-1 shadow-xl border-2 border-brand-clay/20 rotate-3 backdrop-blur-[1px]">
          <Mail className="w-3 h-3 text-brand-clay" />
        </div>
      </motion.div>

      {/* Bird 4: Bottom Left to Top Right (Steep Criss-cross) */}
      <motion.div
        initial={{ x: "-20%", y: "95%", rotate: -45, opacity: 0 }}
        animate={{ 
          x: "120%", 
          y: "15%",
          rotate: [-45, -35, -55, -45],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ 
          duration: 22, 
          delay: 180,
          repeat: Infinity, 
          repeatDelay: 300,
          ease: "easeInOut"
        }}
        className="absolute flex items-center space-x-2"
      >
        <div className="relative">
          <svg viewBox="0 0 24 24" className="w-13 h-13 text-brand-clay fill-current opacity-75 drop-shadow-lg">
            <path d="M21 12c0-1.66-1.34-3-3-3h-2.18c-.41-1.16-1.52-2-2.82-2H9c-1.3 0-2.41.84-2.82 2H4c-1.66 0-3 1.34-3 3s1.34 3 3 3h2.18c.41 1.16 1.52 2 2.82 2h4c1.3 0 2.41-.84 2.82-2H18c1.66 0 3-1.34 3-3z" />
          </svg>
          <motion.div
            animate={{ scaleY: [1, 0.2, 1] }}
            transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full"
          >
             <svg viewBox="0 0 24 24" className="w-13 h-13 text-brand-clay fill-current opacity-30">
                <path d="M12 2L4 12h16L12 2z" />
             </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Bird 5: Top Right to Bottom Left (Steep Criss-cross) */}
      <motion.div
        initial={{ x: "120%", y: "15%", rotate: 160, opacity: 0 }}
        animate={{ 
          x: "-20%", 
          y: "85%",
          rotate: [160, 170, 150, 160],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ 
          duration: 28, 
          delay: 240,
          repeat: Infinity, 
          repeatDelay: 300,
          ease: "easeInOut"
        }}
        className="absolute flex items-center space-x-2"
      >
        <div className="relative scale-y-[-1]">
          <svg viewBox="0 0 24 24" className="w-15 h-15 text-brand-clay fill-current opacity-90 drop-shadow-lg">
            <path d="M21 12c0-1.66-1.34-3-3-3h-2.18c-.41-1.16-1.52-2-2.82-2H9c-1.3 0-2.41.84-2.82 2H4c-1.66 0-3 1.34-3 3s1.34 3 3 3h2.18c.41 1.16 1.52 2 2.82 2h4c1.3 0 2.41-.84 2.82-2H18c1.66 0 3-1.34 3-3z" />
          </svg>
          <motion.div
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full"
          >
             <svg viewBox="0 0 24 24" className="w-15 h-15 text-brand-clay fill-current opacity-40">
                <path d="M12 2L4 12h16L12 2z" />
             </svg>
          </motion.div>
        </div>
        <div className="bg-white p-1.5 shadow-xl border-2 border-brand-clay/30 -rotate-12 backdrop-blur-[1px]">
          <Mail className="w-3.5 h-3.5 text-brand-clay" />
        </div>
      </motion.div>
    </div>
  );
};
