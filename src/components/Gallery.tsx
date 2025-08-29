// Updated Gallery.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [selectedImage, setSelectedImage] = useState(null);

  // Generate array of image paths from 1.jpg to 39.jpg
  const galleryImages = Array.from({ length: 38 }, (_, i) => `/${i + 1}.jpg`);
  
  // Split images into two rows
  const firstRowImages = galleryImages.slice(0, 19);
  const secondRowImages = galleryImages.slice(19);

  // Start animation when component mounts or isInView changes
  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  // Animation variants for continuous scrolling
  const scrollVariants = {
    animate: {
      x: ["-50%", 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
    hover: {
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="gallery" className="py-12 md:py-20 bg-primary-50 dark:bg-primary-900/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 dark:text-cream mb-4">
            Gallery
          </h2>
          <p className="font-body text-base md:text-lg text-neutral dark:text-cream/80 max-w-2xl mx-auto">
            Take a visual journey through our coffee culture, from perfectly crafted drinks 
            to the warm atmosphere of our cafe.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-4 md:space-y-6">
          {/* First Row */}
          <motion.div
            className="flex gap-4 md:gap-6"
            variants={scrollVariants}
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => controls.start("animate")}
            initial={{ x: 0 }}
          >
            {firstRowImages.concat(firstRowImages).map((image, index) => (
              <motion.div
                key={`first-${index}`}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group flex-shrink-0"
                style={{ width: '200px', height: '200px' }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-cream/90 text-primary-800 px-3 py-1 md:px-4 md:py-2 rounded-full font-body font-medium text-sm md:text-base"
                  >
                    View Image
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row */}
          <motion.div
            className="flex gap-4 md:gap-6"
            variants={scrollVariants}
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => controls.start("animate")}
            initial={{ x: 0 }}
          >
            {secondRowImages.concat(secondRowImages).map((image, index) => (
              <motion.div
                key={`second-${index}`}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group flex-shrink-0"
                style={{ width: '200px', height: '200px' }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 20}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-cream/90 text-primary-800 px-3 py-1 md:px-4 md:py-2 rounded-full font-body font-medium text-sm md:text-base"
                  >
                    View Image
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Modal for selected image */}
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
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;