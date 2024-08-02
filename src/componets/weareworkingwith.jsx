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
    <div className="relative w-full h-[36rem] flex justify-center items-center">
      <h1 className=' absolute   md:top-36 top-24  text-4xl font-semibold mb-4 text-white z-10'>Testimonials</h1>

      <AnimatePresence>
        {clients.map((client, index) =>
          index === currentIndex ? (
            
            <motion.div
              key={client.id}
              className="absolute w-full h-full flex flex-col  bg-gradient-to-r from-gray-900 via-gray-950 to-black overflow-hidden p-6 justify-center items-center text-center bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={Stare}
                className='h-12 py-1 mb-4'
                alt="Star Icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <p className="text-xl mb-4 text-white max-w-screen-md line-clamp-4 flex">{client.testimonial} </p>
              <motion.div className='flex items-center'>
                <motion.img
                  src={client.url}
                  alt={client.alt}
                  className="w-16 h-16 rounded-full  object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <div className='ml-4 mt-3 text-left'>
                  <h2 className="text-xl font-semibold text-white">{client.name}</h2>
                  <p className='text-md text-white'>{client.work}</p>
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
