// Fixed Specialties.tsx - Responsive
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Specialties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const specialties = [
    {
      name: 'Cold Coffee Crush',
      description: 'Refreshing chilled coffee blended with ice and cream',
      image: '/1.jpg',
      price: '$3.99',
    },
    {
      name: 'Berry Blast Milkshake',
      description: 'Delicious milkshake made with fresh strawberries and blueberries',
      image: '/4.jpg',
      price: '$4.50',
    },
    {
      name: 'Cheese Burst Pizza',
      description: 'Classic pizza with a gooey, cheesy molten center',
      image: '/14.jpg',
      price: '$9.99',
    },
    {
      name: 'Mexican Cheesy Fries',
      description: 'Crispy fries topped with cheese and Mexican spices',
      image: '/18.jpg',
      price: '$5.25',
    },
    {
      name: 'Paneer Tikka Roll',
      description: 'Grilled paneer wrapped with veggies and sauces',
      image: '/26.jpg',
      price: '$6.75',
    },
    {
      name: 'Hazelnut Cold Coffee',
      description: 'Icy cold coffee blended with hazelnut flavor',
      image: '/39.jpg',
      price: '$4.25',
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-20 bg-cream dark:bg-charcoal overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 md:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 dark:text-cream mb-3 sm:mb-4">
            Our Specialties
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg text-neutral dark:text-cream/80 max-w-2xl mx-auto px-2">
            Beyond exceptional coffee, we offer a delicious selection of freshly prepared foods 
            to complement your coffee experience.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex overflow-x-auto space-x-3 sm:space-x-4 md:space-x-6 pb-4 sm:pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {specialties.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 15px 35px rgba(16, 185, 129, 0.2)'
                }}
                className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 bg-primary-50 dark:bg-primary-900/30 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg snap-start"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 bg-accent text-charcoal px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-full font-semibold text-xs sm:text-sm md:text-base">
                    {item.price}
                  </div>
                </div>

                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="font-heading text-base sm:text-lg md:text-xl font-semibold text-primary-800 dark:text-cream mb-1.5 sm:mb-2 leading-tight">
                    {item.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm md:text-base text-neutral dark:text-cream/80 leading-relaxed mb-3 sm:mb-4">
                    {item.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary-800 dark:bg-primary-500 text-cream dark:text-charcoal py-1.5 sm:py-2 rounded-lg font-body font-medium text-xs sm:text-sm md:text-base hover:bg-primary-700 dark:hover:bg-primary-400 transition-colors duration-200"
                  >
                    Order Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center mt-4 sm:mt-6 md:mt-8"
          >
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary-800 dark:text-cream text-xs sm:text-sm md:text-sm font-body"
            >
              ← Scroll to explore more →
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;