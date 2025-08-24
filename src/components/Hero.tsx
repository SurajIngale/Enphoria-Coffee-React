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

    // Coffee beans parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (beansRef.current) {
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const coffeeBeans = Array.from({ length: 15 }, (_, i) => i);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-primary-50 to-primary-100 dark:from-charcoal dark:via-primary-900 dark:to-primary-800"></div>
      
      {/* Floating Coffee Beans */}
      <div ref={beansRef} className="absolute inset-0 pointer-events-none">
        {coffeeBeans.map((bean) => (
          <motion.div
            key={bean}
            initial={{ x: -100, y: Math.random() * window.innerHeight }}
            animate={{
              x: window.innerWidth + 100,
              rotate: 360,
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 12,
              ease: 'linear',
            }}
            className={`absolute w-3 h-5 bg-primary-800 dark:bg-primary-400 rounded-full opacity-20 animate-drift`}
            style={{
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >

            <img 
              src="/logo-1.jpg" 
              alt="Enphoria Coffee Logo" 
              className="w-32 h-32 mx-auto mb-6 bg-primary-800 dark:bg-primary-400 rounded-full flex items-center justify-center"
            />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-5xl md:text-7xl font-bold text-primary-800 dark:text-cream mb-6"
        >
          Enphoria Coffee
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-xl md:text-2xl text-neutral dark:text-cream/80 mb-8"
        >
          Coffee Moments That Matter
        </motion.p>

        {/* Steam Animation */}
        <div className="relative mb-12">
          <div
            ref={steamRef}
            className="absolute left-1/2 transform -translate-x-1/2 -top-20"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-8 bg-white/30 rounded-full"
                style={{ left: `${i * 8 - 16}px` }}
              />
            ))}
          </div>
        </div>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary-800 dark:bg-primary-500 text-cream dark:text-charcoal px-8 py-4 rounded-full font-body font-semibold text-lg shadow-lg hover:bg-primary-700 dark:hover:bg-primary-400 transition-all duration-300"
        >
          Order Now
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary-800 dark:text-cream cursor-pointer"
          >
            <FiArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;