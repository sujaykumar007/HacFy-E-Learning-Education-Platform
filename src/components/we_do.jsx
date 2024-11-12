import React from "react";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "@/hoc";
import { motion } from "framer-motion";
import { styles } from "@/style";
import {wedo} from '@/constants'
function Wedo() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCTION</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="w-full flex overflow-x-auto"
      >
        
          {wedo.map((wedos)=>(
            <div className="flex my-2 mr-4 items-center " key={wedos.headname}>
            <img src={wedos.img} alt="" className="w-20"/>
            <div className="pl-3">
              <p className ={`${styles.sectionSubText} `}>{wedos.headname}</p>
              <span>Read More </span>
            </div>
            </div>

          ))}
          
        
      </motion.div>
    </>
  );
}

export default SectionWrapper(Wedo, "");
