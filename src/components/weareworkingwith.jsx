import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clients } from '@/constants';
import { Stare } from '@/assets';

const ClientSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === clients.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[40rem] flex justify-center items-center bg-gradient-to-b from-transparent to-[#0a0a0a] overflow-hidden">
      <h1 className='absolute top-2 md:top-10 text-4xl md:text-5xl font-bold mb-4 text-white z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
        Testimonials
      </h1>

      <AnimatePresence mode="wait">
        {clients.map((client, index) =>
          index === currentIndex ? (
            <motion.div
              key={client.id}
              className="absolute w-[90%] h-[400px] sm:h-[450px] md:h-[500px] max-w-3xl mx-auto flex flex-col bg-[#1a1a1a]/80 backdrop-blur-lg border border-gray-800 p-4 sm:p-6 md:p-10 justify-between items-center text-center rounded-2xl shadow-2xl shadow-purple-500/10"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <motion.img
                src={Stare}
                className='h-8 sm:h-10 md:h-14 py-1 mb-3 sm:mb-4 md:mb-8 text-purple-500'
                alt="Star Icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />
              <div className="flex-grow overflow-y-auto px-2 max-h-[50%] mb-4">
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed italic">
                  "{client.testimonial}"
                </p>
              </div>
              <motion.div 
                className='flex items-center border-t border-gray-800 pt-4 md:pt-6 w-full justify-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.img
                  src={client.url}
                  alt={client.alt}
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover ring-4 ring-purple-500/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                />
                <div className='ml-3 sm:ml-4 md:ml-6 text-left'>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5">{client.name}</h2>
                  <p className='text-xs sm:text-sm md:text-md text-purple-400'>{client.work}</p>
                </div>
              </motion.div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClientSlider;
