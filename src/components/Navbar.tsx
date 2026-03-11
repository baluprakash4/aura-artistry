import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils';
import { AnnouncementBanner } from './AnnouncementBanner';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Custom Art', path: '/custom' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-leather text-[#e8dcc4] border-b border-black/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col group relative overflow-hidden">
              <motion.div 
                className="flex overflow-hidden"
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                {"RU.CHI".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      initial: { y: "100%" },
                      animate: { y: 0 },
                      hover: { 
                        y: [0, -4, 0],
                        transition: { duration: 0.4, ease: "easeInOut" }
                      }
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.02,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="inline-block font-serif text-2xl font-bold tracking-tight text-[#e8dcc4] transition-colors duration-500 group-hover:text-white"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cream/60 -mt-1"
              >
                @artistic_2_4
              </motion.span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  location.pathname === link.path ? "text-white border-b border-white" : "text-[#e8dcc4]/80"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#e8dcc4]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-leather border-b border-black/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 text-base font-medium",
                  location.pathname === link.path ? "text-white" : "text-[#e8dcc4]/80"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
      <AnnouncementBanner />
    </nav>
  );
};
