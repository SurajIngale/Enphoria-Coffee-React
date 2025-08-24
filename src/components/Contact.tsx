import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
    },
    {
      icon: FiMail,
      title: 'Email',
      details: 'hello@enphoria.coffee',
      action: 'mailto:hello@enphoria.coffee',
    },
    {
      icon: FiMapPin,
      title: 'Address',
      details: '123 Coffee Street, Bean City, BC 12345',
      action: '#',
    },
    {
      icon: FiClock,
      title: 'Hours',
      details: 'Mon-Fri: 7AM-8PM, Weekends: 8AM-9PM',
      action: '#',
    },
  ];

  const hours = [
    { day: 'Monday - Friday', time: '7:00 AM - 8:00 PM', isOpen: true },
    { day: 'Saturday', time: '8:00 AM - 9:00 PM', isOpen: true },
    { day: 'Sunday', time: '8:00 AM - 9:00 PM', isOpen: true },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-cream dark:bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 dark:text-cream mb-4">
            Visit Us
          </h2>
          <p className="font-body text-base md:text-lg text-neutral dark:text-cream/80 max-w-2xl mx-auto">
            Come experience the perfect blend of exceptional coffee and warm hospitality. 
            We're always excited to welcome new friends.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.action}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 md:p-6 bg-primary-50 dark:bg-primary-900/30 rounded-2xl hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary-800 dark:bg-primary-500 text-cream dark:text-charcoal rounded-xl flex items-center justify-center">
                    <item.icon size={18} className="md:size-20" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base md:text-lg text-primary-800 dark:text-cream">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm md:text-base text-neutral dark:text-cream/80">
                      {item.details}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Opening Hours */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-primary-50 dark:bg-primary-900/30 rounded-2xl p-4 md:p-6"
            >
              <h3 className="font-heading text-lg md:text-xl font-semibold text-primary-800 dark:text-cream mb-4">
                Opening Hours
              </h3>
              <div className="space-y-3">
                {hours.map((hour, index) => (
                  <motion.div
                    key={index}
                    initial={{ rotateX: -90, opacity: 0 }}
                    animate={isInView ? { rotateX: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex justify-between items-center py-2 border-b border-primary-200 dark:border-primary-700 last:border-b-0"
                  >
                    <span className="font-body text-sm md:text-base text-neutral dark:text-cream/80">
                      {hour.day}
                    </span>
                    <span className="font-body font-medium text-sm md:text-base text-primary-800 dark:text-cream">
                      {hour.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-80 md:h-96 lg:h-full min-h-80"
          >
            <div className="relative h-full bg-primary-100 dark:bg-primary-900/40 rounded-2xl overflow-hidden shadow-lg">
              {/* Map placeholder - replace with actual embedded map */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-900 flex items-center justify-center">
                <div className="text-center px-4">
                  <FiMapPin size={32} className="mx-auto text-primary-800 dark:text-cream mb-4 md:size-48" />
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-primary-800 dark:text-cream mb-2">
                    Find Us Here
                  </h3>
                  <p className="font-body text-sm md:text-base text-neutral dark:text-cream/80">
                    123 Coffee Street<br />
                    Bean City, BC 12345
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-primary-800 dark:bg-primary-500 text-cream dark:text-charcoal px-4 py-2 md:px-6 md:py-2 rounded-full font-body font-medium text-sm md:text-base hover:bg-primary-700 dark:hover:bg-primary-400 transition-colors duration-200"
                  >
                    Get Directions
                  </motion.button>
                </div>
              </div>
              
              {/* Animated location pin */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent"
              >
                <FiMapPin size={24} className="md:size-32" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;