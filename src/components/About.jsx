import React from 'react';
import { SectionWrapper } from '@/hoc';
import { motion } from 'framer-motion';
import { styles } from '@/style';
import { textVariant, textVariants } from '@/utils/motion';
import { projectData } from '@/constants';
import { image, tick } from '@/assets';

function About() {
  return (
    <>
      <div className='w-full grid lg:grid-cols-2'>
        <motion.div
          variants={textVariants(-10, 1)}
          className='order-first lg:order-last w-full h-full '
        >
          <img src={image} alt="" className="w-full h-auto  rounded-xl" />
        </motion.div>
        <div className="w-full py-5 md:py-0 px-3 flex flex-wrap lg:order-first">
          <motion.div initial="hidden" animate="show" className='-my-3'>
            <motion.div variants={textVariants(-35, 1)} className='pb-5'>
              <p className={styles.sectionSubText}>About us</p>
              <h2 className={styles.sectionHeadText}>Why Choose Us?</h2>
            </motion.div>
            {projectData.map((prog, index) => (
              <motion.div key={index} variants={textVariants(-30, 1)} className="flex py-2 md:py-4 gap-1">
                <img src={tick} alt="" className='w-5  md:w-6 ' />
                <p className=' text-xs md:text-xl'>{prog.description}</p>
              </motion.div>
            ))}
            <motion.button
              variants={textVariants(-10, 1.5)}
              className={`${styles.buttonred} font-semibold text-lg ml-3 mt-5 px-4 py-2 md:px-4 md:py-3`}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(About,"about");
