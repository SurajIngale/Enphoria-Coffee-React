import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Specialties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const specialties = [
    {
      name: 'Artisan Croissants',
      description: 'Freshly baked daily with French butter',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$3.50',
    },
    {
      name: 'Gourmet Sandwiches',
      description: 'Made with locally sourced ingredients',
      image: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$8.95',
    },
    {
      name: 'Specialty Cakes',
      description: 'Handcrafted desserts for special moments',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$4.25',
    },
    {
      name: 'Fresh Salads',
      description: 'Healthy options with seasonal vegetables',
      image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$7.50',
    },
    {
      name: 'Breakfast Bowls',
      description: 'Nutritious start to your morning',
      image: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$9.75',
    },
  ];

  return (
    <section className="py-20 bg-cream dark:bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-800 dark:text-cream mb-4">
            Our Specialties
          </h2>
          <p className="font-body text-lg text-neutral dark:text-cream/80 max-w-2xl mx-auto">
            Beyond exceptional coffee, we offer a delicious selection of freshly prepared foods 
            to complement your coffee experience.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            {specialties.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 15px 35px rgba(16, 185, 129, 0.2)'
                }}
                className="flex-shrink-0 w-72 bg-primary-50 dark:bg-primary-900/30 rounded-2xl overflow-hidden shadow-lg snap-start"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 right-4 bg-accent text-charcoal px-3 py-1 rounded-full font-semibold">
                    {item.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary-800 dark:text-cream mb-2">
                    {item.name}
                  </h3>
                  <p className="font-body text-neutral dark:text-cream/80 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary-800 dark:bg-primary-500 text-cream dark:text-charcoal py-2 rounded-lg font-body font-medium hover:bg-primary-700 dark:hover:bg-primary-400 transition-colors duration-200"
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
            className="flex justify-center mt-8"
          >
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary-800 dark:text-cream text-sm font-body"
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