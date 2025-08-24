import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const MenuHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const menuItems = [
    {
      image: '/menu-1.jpg',
    },
    {
      image: '/menu-2.jpg',
    },
    {
      image: '/menu-3.jpg',
    },
    {
      image: '/menu-4.jpg',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="menu" className="py-20 bg-primary-50 dark:bg-primary-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-800 dark:text-cream mb-4">
            Menu Highlights
          </h2>
          <p className="font-body text-lg text-neutral dark:text-cream/80 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee beverages, 
            crafted with passion and served with love.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(16, 185, 129, 0.15)' 
              }}
              className="bg-cream dark:bg-charcoal rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div 
                className="relative overflow-hidden group" 
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={`Menu item ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-cream/90 text-primary-800 px-4 py-2 rounded-full font-body font-medium"
                  >
                    View Image
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for selected menu image */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Menu item"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ×
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MenuHighlights;