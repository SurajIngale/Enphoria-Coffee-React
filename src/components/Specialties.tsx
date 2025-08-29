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
      price: '₹199',
    },
    {
      name: 'Berry Blast Milkshake',
      description: 'Delicious milkshake made with fresh strawberries and blueberries',
      image: '/4.jpg',
      price: '₹225',
    },
    {
      name: 'Cheese Burst Pizza',
      description: 'Classic pizza with a gooey, cheesy molten center',
      image: '/14.jpg',
      price: '₹499',
    },
    {
      name: 'Mexican Cheesy Fries',
      description: 'Crispy fries topped with cheese and Mexican spices',
      image: '/18.jpg',
      price: '₹262',
    },
    {
      name: 'Paneer Tikka Roll',
      description: 'Grilled paneer wrapped with veggies and sauces',
      image: '/26.jpg',
      price: '₹337',
    },
    {
      name: 'Hazelnut Cold Coffee',
      description: 'Icy cold coffee blended with hazelnut flavor',
      image: '/2.jpg',
      price: '₹212',
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-20 bg-cream dark:bg-charcoal overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 md:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 dark:text-cream mb-3 sm:mb-4">
            Our Specialties
          </h2>
          <p className="font-body text-base sm:text-lg md:text-lg text-neutral dark:text-cream/80 max-w-2xl mx-auto px-2">
            Beyond exceptional coffee, we offer a delicious selection of freshly prepared foods 
            to complement your coffee experience.
          </p>
        </motion.div>

        <div ref={ref} className="relative w-full">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex overflow-x-auto space-x-4 sm:space-x-5 md:space-x-6 pb-4 sm:pb-6 snap-x snap-mandatory scrollbar-hide w-full"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {specialties.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 15px 35px rgba(16, 185, 129, 0.2)'
                }}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-primary-50 dark:bg-primary-900/30 rounded-2xl overflow-hidden shadow-lg snap-start flex flex-col"
              >
                <div className="relative overflow-hidden group flex-grow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback for missing images
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='10' fill='%23999'%3EImage%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 right-3 bg-accent text-charcoal px-3 py-1 rounded-full font-semibold text-sm md:text-base shadow-md">
                    {item.price}
                  </div>
                </div>

                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="font-heading text-lg sm:text-xl md:text-xl font-semibold text-primary-800 dark:text-cream mb-2 leading-tight">
                    {item.name}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-neutral dark:text-cream/80 leading-relaxed mb-4 flex-grow">
                    {item.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary-800 dark:bg-primary-500 text-cream dark:text-charcoal py-2.5 sm:py-3 rounded-lg font-body font-medium text-sm sm:text-base hover:bg-primary-700 dark:hover:bg-primary-400 transition-colors duration-200 shadow-md"
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
            className="flex justify-center mt-5 sm:mt-6 md:mt-8"
          >
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary-800 dark:text-cream text-sm sm:text-base font-body bg-primary-100 dark:bg-primary-900/40 px-4 py-2 rounded-full"
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