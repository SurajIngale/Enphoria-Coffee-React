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
    <section id="about" className="py-20 bg-cream dark:bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
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

          {/* Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-8 h-8 mr-3"
              >
                ☕
              </motion.div>
              <h2 className="font-heading text-4xl font-bold text-primary-800 dark:text-cream">
                About Enphoria
              </h2>
            </div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-lg text-neutral dark:text-cream/80 mb-6 leading-relaxed"
            >
              At Enphoria Coffee, we believe that every cup tells a story. Since our founding in 2015, 
              we've been dedicated to crafting the perfect coffee experience, from carefully sourced beans 
              to expertly prepared beverages.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-lg text-neutral dark:text-cream/80 mb-8 leading-relaxed"
            >
              Our passionate baristas use traditional brewing methods combined with modern techniques 
              to create moments of pure coffee bliss. Every visit to Enphoria is designed to be 
              a sensory journey that awakens your senses and enriches your day.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent mb-2">10+</div>
                <div className="font-body text-neutral dark:text-cream/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-accent mb-2">50k+</div>
                <div className="font-body text-neutral dark:text-cream/80">Happy Customers</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;