import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../utils';

interface PaperFlowerProps {
  className?: string;
  delay?: number;
  scale?: number;
  rotate?: number;
}

export const PaperFlower: React.FC<PaperFlowerProps> = ({ className, delay = 0, scale = 1, rotate = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 * scale, rotate: rotate - 10 }}
      animate={{ opacity: 0.4, scale: scale, rotate: rotate }}
      transition={{ duration: 2, delay: delay, ease: "easeOut" }}
      className={cn("paper-flower absolute", className)}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-brand-clay">
        {/* Simple stylized flower */}
        <path d="M50 50 Q60 20 50 10 Q40 20 50 50" />
        <path d="M50 50 Q80 40 90 50 Q80 60 50 50" />
        <path d="M50 50 Q60 80 50 90 Q40 80 50 50" />
        <path d="M50 50 Q20 40 10 50 Q20 60 50 50" />
        <path d="M50 50 Q75 25 85 35 Q75 45 50 50" />
        <path d="M50 50 Q75 75 65 85 Q55 75 50 50" />
        <path d="M50 50 Q25 75 15 65 Q25 55 50 50" />
        <path d="M50 50 Q25 25 35 15 Q45 25 50 50" />
        <circle cx="50" cy="50" r="5" />
      </svg>
    </motion.div>
  );
};

export const DaisyFlower: React.FC<PaperFlowerProps> = ({ className, delay = 0, scale = 1, rotate = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 * scale, rotate: rotate - 15 }}
      animate={{ opacity: 0.5, scale: scale, rotate: rotate }}
      transition={{ duration: 2.5, delay: delay, ease: "easeOut" }}
      className={cn("paper-flower absolute", className)}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Daisy Petals */}
        <g className="text-brand-cream fill-current">
          {Array(12).fill(0).map((_, i) => (
            <path 
              key={i} 
              d="M50 50 Q60 10 50 0 Q40 10 50 50" 
              transform={`rotate(${i * 30} 50 50)`} 
            />
          ))}
        </g>
        {/* Daisy Center */}
        <circle cx="50" cy="50" r="12" className="text-brand-clay fill-current" />
      </svg>
    </motion.div>
  );
};

export const FlowerDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Original Flowers - Adjusted to avoid logo area */}
      <PaperFlower className="top-[15%] left-[10%] w-32 h-32" rotate={15} delay={0.5} />
      <PaperFlower className="top-[15%] right-[5%] w-24 h-24" rotate={-10} delay={0.7} scale={0.8} />
      <PaperFlower className="top-1/4 right-[-20px] w-48 h-48" rotate={-20} delay={1} scale={1.2} />
      <PaperFlower className="top-[40%] left-[2%] w-20 h-20" rotate={30} delay={1.2} scale={0.7} />
      <PaperFlower className="bottom-1/3 left-[-30px] w-40 h-40" rotate={45} delay={1.5} />
      <PaperFlower className="bottom-[20%] right-[15%] w-28 h-28" rotate={10} delay={1.8} scale={0.9} />
      <PaperFlower className="bottom-10 right-10 w-36 h-36" rotate={-10} delay={2} />
      <PaperFlower className="top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 opacity-5" rotate={0} delay={2.5} scale={0.8} />
      <PaperFlower className="top-[70%] left-[10%] w-32 h-32" rotate={-40} delay={2.2} scale={1.1} />
      <PaperFlower className="top-[25%] left-[40%] w-16 h-16 opacity-20" rotate={100} delay={2.8} scale={0.6} />

      {/* Daisy Flowers - Adjusted to avoid logo area */}
      <DaisyFlower className="top-[30%] left-[20%] w-20 h-20" rotate={5} delay={1.2} />
      <DaisyFlower className="top-[60%] right-[10%] w-28 h-28" rotate={-15} delay={1.5} scale={1.1} />
      <DaisyFlower className="bottom-[15%] left-[15%] w-24 h-24" rotate={20} delay={2.1} scale={0.9} />
      <DaisyFlower className="top-[45%] right-[25%] w-16 h-16 opacity-30" rotate={40} delay={2.4} scale={0.7} />
      <DaisyFlower className="bottom-[40%] left-[40%] w-32 h-32 opacity-20" rotate={-10} delay={3} scale={1.2} />
    </div>
  );
};
