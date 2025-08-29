import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cafeImages = [
    '/cafe-interior.jpg',
    '/cafe-exterior.jpg',
    '/cafe-interior.jpg' // Using interior again as fallback
  ];

  return (
    <section id="about" className="py-8 sm:py-12 md:py-20 bg-cream dark:bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Image Carousel - Added responsive height */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-64 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              {cafeImages.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Cafe ${index === 0 ? 'interior' : 'exterior'} ${index + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === 0 ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ))}
              
              {/* Floating steam effect */}
              <div className="absolute top-4 left-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-20, -40, -20],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    className="absolute w-1 h-6 bg-white/50 rounded-full"
                    style={{ left: `${i * 4}px` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content - Adjusted for new cafe, responsive text sizes */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-6 h-6 sm:w-8 sm:h-8 mr-3"
              >
                ☕
              </motion.div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 dark:text-cream">
                About Enphoria
              </h2>
            </div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-sm sm:text-base md:text-lg text-neutral dark:text-cream/80 mb-4 sm:mb-6 leading-relaxed"
            >
              At Enphoria Coffee, we believe that every cup tells a story. As a newly opened cafe in 2025, 
              we're excited to bring fresh, premium coffee experiences to our community, from carefully sourced beans 
              to expertly prepared beverages.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-sm sm:text-base md:text-lg text-neutral dark:text-cream/80 mb-6 sm:mb-8 leading-relaxed"
            >
              Our passionate baristas blend traditional brewing methods with modern techniques 
              to create moments of pure coffee bliss. Join us for our grand opening and be part of our journey!
            </motion.p>

            {/* Removed experience stats; added inviting CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center sm:text-left"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-800 dark:bg-primary-500 text-cream dark:text-charcoal px-4 py-2 sm:px-6 sm:py-3 rounded-full font-body font-semibold text-sm sm:text-base shadow-lg hover:bg-primary-700 dark:hover:bg-primary-400 transition-all duration-300"
              >
                Visit Us Today
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;