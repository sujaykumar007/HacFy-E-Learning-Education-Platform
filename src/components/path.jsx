import React from 'react'
import {motion } from "framer-motion"
import {page}from "@/constants"
import { SectionWrapper } from '@/hoc'
import { styles } from '@/style'


const Path = () => {
  return (
    <div className='w-full h-1/3  text-black flex items-center justify-center' >
    {page.map((page,index)=>(
    <motion.div key={index}>
        <h1 className={`${styles.sectionHeadText} `}>{page.name}</h1>
        <div  className={`${styles.sectionSubText} flex  justify-center  items-center `} >
       <p><a shref={`${page.from}`}>{page.from}</a>:</p>
        <p>{page.to}</p>
        </div>
      
    </motion.div>))}
    </div>
  )
}

export default SectionWrapper(Path,"")