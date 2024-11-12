import { SectionWrapper } from '@/hoc'
import { Services_data } from "../constants";
import { motion } from "framer-motion";
import { fadeIn,textVariant } from "../utils/motion";
import { Link, useNavigate } from "react-router-dom";
import { styles } from '@/style';

const ProjectCardes = ({
  index,
  name,
  main_img,
  description,
}) => {
const Navigate = useNavigate();

  return (
    

    <motion.div variants={fadeIn('up', 'spring', index * 1/6, 1.6)} className= "max-w-sm mx-auto   shadow-md   rounded-lg overflow-hidden bg-gradient-to-br from-blue-950  to-black  duration-300">
      <img className= "w-full h-48 object-cover" src={main_img}  alt="Card Image"/>
      <div className= "p-4">
        <h2 className= "text-xl font-semibold mb-2">{name}</h2>
        <p className= "text-gray-200 mb-4">{description}</p>
        <Link to='/career'>
        <button className= "px-4 py-2 text-sm sm:text-base md:text-lg font-medium border border-gray-800 bg-red-500 hover:bg-red-600 text-white rounded-md">
          read more 
        </button>
        </Link>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>  </p>
        <h2 className={styles.sectionHeadText}>HACFY offers a Wide Range of Powerful Career Tracks to build your cybersecurity Career</h2>
      </motion.div>
    <motion.div className="relative flex flex-wrap gap-7 pt-5  justify-center ">
      {Services_data.map((cards, index) => (
        <ProjectCardes key={`card-${index}`} index={index} {...cards} />
      ))}
    </motion.div>
    </>
  );}
export default SectionWrapper(Services,"")