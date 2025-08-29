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
      details: '+917058231834',
      action: 'tel:+917058231834',
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
      details: 'Atul Nagar, Warje, Pune, Maharashtra 411058',
      action: 'https://maps.google.com/?q=Enphoria+Coffee+Pune',
    },
    {
      icon: FiClock,
      title: 'Hours',
      details: 'Mon-Fri: 10AM-11PM, Weekends: 10AM-11PM',
      action: '#',
    },
  ];

  const hours = [
    { day: 'Monday - Friday', time: '10:00 AM - 11:00 PM', isOpen: true },
    { day: 'Saturday', time: '10:00 AM - 11:00 PM', isOpen: true },
    { day: 'Sunday', time: '10:00 AM - 11:00 PM', isOpen: true },
  ];

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-20 bg-cream dark:bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 md:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 dark:text-cream mb-3 sm:mb-4">
            Visit Us
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg text-neutral dark:text-cream/80 max-w-2xl mx-auto px-2">
            Come experience the perfect blend of exceptional coffee and warm hospitality. 
            We're always excited to welcome new friends.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.action}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 md:p-6 bg-primary-50 dark:bg-primary-900/30 rounded-xl sm:rounded-2xl hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary-800 dark:bg-primary-500 text-cream dark:text-charcoal rounded-lg sm:rounded-xl flex items-center justify-center">
                    <item.icon size={16} className="sm:size-18 md:size-20" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading font-semibold text-sm sm:text-base md:text-lg text-primary-800 dark:text-cream">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm md:text-base text-neutral dark:text-cream/80 break-words">
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
              className="bg-primary-50 dark:bg-primary-900/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6"
            >
              <h3 className="font-heading text-base sm:text-lg md:text-xl font-semibold text-primary-800 dark:text-cream mb-3 sm:mb-4">
                Opening Hours
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {hours.map((hour, index) => (
                  <motion.div
                    key={index}
                    initial={{ rotateX: -90, opacity: 0 }}
                    animate={isInView ? { rotateX: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex justify-between items-center py-1.5 sm:py-2 border-b border-primary-200 dark:border-primary-700 last:border-b-0"
                  >
                    <span className="font-body text-xs sm:text-sm md:text-base text-neutral dark:text-cream/80">
                      {hour.day}
                    </span>
                    <span className="font-body font-medium text-xs sm:text-sm md:text-base text-primary-800 dark:text-cream">
                      {hour.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-96"
          >
            <div className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              {/* Google Maps Embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.79090105935!2d73.78551647496222!3d18.493128282595155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf5cdd317843%3A0x8027665f01cb3d6d!2sEnphoria%20Coffee!5e0!3m2!1sen!2sus!4v1756486808176!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl sm:rounded-2xl"
                title="Enphoria Coffee Location"
              />
              
              {/* Overlay for mobile touch interaction improvement */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-cream/90 dark:bg-charcoal/90 text-primary-800 dark:text-cream px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium shadow-md">
                  Enphoria Coffee
                </div>
              </div>
            </div>
            
            {/* Fallback link for map */}
            <motion.div
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://maps.google.com/?q=Enphoria+Coffee+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-800 dark:bg-primary-500 text-cream dark:text-charcoal px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-lg font-body font-medium text-xs sm:text-sm md:text-base hover:bg-primary-700 dark:hover:bg-primary-400 transition-colors duration-200 shadow-md"
              >
                View in Maps
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;