import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ 
        isScrolled
          ? 'bg-cream/95 dark:bg-charcoal/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img 
              src="/logo-1.jpg" 
              alt="Enphoria Coffee Logo" 
              className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover"
            />
            <span className="font-heading font-bold text-lg md:text-xl text-primary-800 dark:text-cream">
              Enphoria Coffee
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="font-body text-sm lg:text-base text-primary-800 dark:text-cream hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-1.5 md:p-2 rounded-full bg-primary-800 dark:bg-primary-500 text-cream dark:text-charcoal transition-colors duration-200"
            >
              {isDarkMode ? <FiSun size={16} className="md:size-18" /> : <FiMoon size={16} className="md:size-18" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-1.5 rounded-full bg-primary-800 dark:bg-primary-500 text-cream dark:text-charcoal"
            >
              {isDarkMode ? <FiSun size={14} /> : <FiMoon size={14} />}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-800 dark:text-cream"
            >
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ x: 10 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-body text-base text-primary-800 dark:text-cream hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;