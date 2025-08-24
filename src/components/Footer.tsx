import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiTwitter, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-primary-800 dark:bg-charcoal text-cream py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-1.jpg" 
                alt="Enphoria Coffee Logo" 
                className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover"
              />
              <span className="font-heading font-bold text-lg md:text-xl">Enphoria Coffee</span>
            </div>
            <p className="font-body text-sm md:text-base text-cream/80 leading-relaxed">
              Crafting exceptional coffee experiences since 2015. 
              Every cup tells a story of passion and dedication.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-heading font-semibold text-base md:text-lg">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Menu', 'Gallery', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block font-body text-sm md:text-base text-cream/80 hover:text-accent transition-colors duration-200"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-heading font-semibold text-base md:text-lg">Connect</h3>
            <div className="space-y-2 font-body text-sm md:text-base text-cream/80">
              <p>123 Coffee Street</p>
              <p>Bean City, BC 12345</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-cream/80 hover:text-accent transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="md:size-20" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-cream/20 pt-6 md:pt-8 text-center"
        >
          <p className="font-body text-xs md:text-sm text-cream/60 flex items-center justify-center space-x-1">
            <span>© 2024 Enphoria Coffee. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-accent"
            >
              <FiHeart size={14} className="md:size-16" />
            </motion.span>
            <span>for coffee lovers</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;