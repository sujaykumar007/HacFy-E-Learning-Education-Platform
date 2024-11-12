import React from "react";
import { SectionWrapper } from "@/hoc";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { Card_profile, Contact_link } from "@/constants";

const Team = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {Card_profile.map((imag, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", "spring", index * 1 / 6, 1.6)}
          className="h-80 w-56 border rounded-lg relative"
        >
          <div className="h-full w-full">
            <img src={imag.img} alt="" className="object-cover h-full w-full" />
            <span className="absolute top-6 left-5">
              <ul>
                {Contact_link.map((link, idx) => (
                  <li key={idx} className="pb-4">
                    <a href={link.linke} target="_blank" rel="noopener noreferrer">
                      <img src={link.img} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Team, "");
