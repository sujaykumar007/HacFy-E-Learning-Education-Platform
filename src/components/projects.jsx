import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { Services_data } from "@/constants";
import { textVariant } from "@/utils/motion";
import { useNavigate } from "react-router-dom";
import { styles } from "@/style";

const ProjectCard = ({ index, name, main_img, description }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={{
        initial: { opacity: 1, scale: 1 },
        hover: { opacity: 1, scale: 1.01, transition: { duration: 0.1 } },
      }}
      initial="initial"
      whileHover="hover"
      className="md:p-5 py-5 relative text-lg rounded-lg border border-zinc-500"
    >
      <div className="lg:flex  items-center lg:space-y-4">
        <div className="lg:flex  flex-wrap">
          <div className="lg:w-1/4 m-3 overflow-hidden rounded-lg">
            <img src={main_img} alt={name} className="w-full h-auto" />
          </div>
          <div className="lg:w-2/4 lg:border-x-2 lg:border-x-zinc-700 p-6">
            <h1 className="font-bold md:text-2xl lg:text-3xl">{name}</h1>
            <div className="md:pt-4 text-sm md:text-lg lg:text-lg text-white font-normal">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className=" flex w-full lg:w-1/2 l justify-center items-center">
          <button
      onClick={() => navigate(`/project/${index}`)}
          className={`${styles.buttonred}
           font-semibold text-lg  px-4 py-3 max-h-16`}>
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" animate="show" className=" ">
        <h2 className={styles.sectionHeadText}>
          Choose your cybersecurity career path and achieve your professional goals
        </h2>
        <p className={styles.sectionSubText}>
          Empowering professionals worldwide to achieve their cybersecurity career aspirations
        </p>
      </motion.div>
      <motion.div className="relative flex mt-10 flex-wrap gap-7 justify-center">
        {Services_data.map((card, index) => (
          <ProjectCard key={`card-${index}`} index={index} {...card} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, "");
