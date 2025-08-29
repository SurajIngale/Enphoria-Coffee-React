import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FiArrowDown } from 'react-icons/fi';

export const Hero = () => {
  const steamRef = useRef<HTMLDivElement>(null);
  const beansRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Steam Animation
    if (steamRef.current) {
      const steamElements = steamRef.current.children;
      gsap.fromTo(steamElements,
        {
          y: 0,
          opacity: 0.8,
          scale: 1,
        },
        {
          y: -100,
          opacity: 0,
          scale: 0.3,
          duration: 3,
          stagger: 0.3,
          repeat: -1,
          ease: 'power2.out',
        }
      );
    }

    // Coffee beans parallax - only on desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768 && beansRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        
        gsap.to(beansRef.current.children, {
          x: x,
          y: y,
          duration: 1,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }
    };

    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (window.innerWidth > 768) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const coffeeBeans = Array.from({ length: window.innerWidth > 768 ? 15 : 6 }, (_, i) => i);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-primary-50 to-primary-100 dark:from-charcoal dark:via-primary-900 dark:to-primary-800"></div>
      
      {/* Floating Coffee Beans - Responsive */}
      <div ref={beansRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {coffeeBeans.map((bean) => (
          <motion.div
            key={bean}
            initial={{ x: -100, y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) }}
            animate={{
              x: typeof window !== 'undefined' ? window.innerWidth + 100 : 1200,
              rotate: 360,
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 12,
              ease: 'linear',
            }}
            className="absolute w-1.5 h-3 sm:w-2 sm:h-4 md:w-3 md:h-5 bg-primary-800 dark:bg-primary-400 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 sm:mb-6 md:mb-8"
        >
          <img 
            src="/logo-1.jpg" 
            alt="Enphoria Coffee Logo" 
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 bg-primary-800 dark:bg-primary-400 rounded-full flex items-center justify-center object-cover border-4 border-primary-700 dark:border-primary-500 shadow-lg"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-800 dark:text-cream mb-4 sm:mb-5 md:mb-6 leading-tight px-2"
        >
          Enphoria Coffee
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg sm:text-xl md:text-2xl lg:text-2xl text-neutral dark:text-cream/80 mb-6 sm:mb-7 md:mb-8 px-4"
        >
          Coffee Moments That Matter
        </motion.p>

        {/* Steam Animation */}
        <div className="relative mb-6 sm:mb-8 md:mb-12">
          <div
            ref={steamRef}
            className="absolute left-1/2 transform -translate-x-1/2 -top-10 sm:-top-12 md:-top-16"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-6 sm:w-2 sm:h-8 md:w-2.5 md:h-10 bg-white/40 rounded-full"
                style={{ left: `${i * 6 - 12}px` }}
              />
            ))}
          </div>
        </div>

        <div className="mb-16 sm:mb-20 md:mb-24"> {/* Added spacing to prevent overlap */}
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-800 dark:bg-primary-500 text-cream dark:text-charcoal px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-full font-body font-semibold text-base sm:text-lg md:text-xl shadow-lg hover:bg-primary-700 dark:hover:bg-primary-400 transition-all duration-300"
          >
            Order Now
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary-800 dark:text-cream cursor-pointer"
          >
            <FiArrowDown size={24} className="sm:size-28 md:size-32" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;