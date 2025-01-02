import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/style";
import { fadeIn, textVariant } from "@/utils/motion";
// Import icons from react-icons
import { MdSecurity, MdWeb } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import { FaMobile } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";

const ServiceCard = ({ index, title, Icon }) => (
  <motion.div
   
    className="bg-black/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300 flex-1 min-w-[200px]"
  >
    <div className="flex flex-col items-center text-center gap-4">
      <div className="relative">
        <span className="absolute -top-3 -left-3 text-red-500 text-xl font-bold">
        </span>
        <Icon className="text-red-500 text-5xl" />
      </div>
      <h3 className="text-white text-lg font-medium mt-2">{title}</h3>
    </div>
  </motion.div>
);

const VAPTServices = () => {
  const services = [
    {
      title: "External and Internal Network Penetration Testing",
      icon: MdSecurity
    },
    {
      title: "Website Penetration Testing",
      icon: MdWeb
    },
    {
      title: "API Penetration Testing",
      icon: AiOutlineApi
    },
    {
      title: "Mobile Penetration Testing",
      icon: FaMobile
    },
    {
      title: "Cloud Penetration Testing",
      icon: FaCloud
    },
  ];

  return (
    <section className="relative w-full min-h-[400px] mx-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-left mb-12`}>
            HACFY VAPT SERVICES
          </h2>
        </motion.div>

        <div className="flex flex-row gap-4 overflow-x-auto pb-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index + 1}
              title={service.title}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VAPTServices; 