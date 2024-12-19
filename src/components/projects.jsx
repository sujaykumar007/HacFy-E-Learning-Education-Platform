import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { textVariant } from "@/utils/motion";
import { sev1, sev2, sev3 } from "@/assets";

const ProjectCard = ({ index, name, main_img, description }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={{
        initial: { opacity: 1, scale: 0.95 },
        hover: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
      }}
      initial="initial"
      whileHover="hover"
      className="md:p-5 py-5 relative text-lg rounded-lg border border-white/20 w-full lg:w-[30%] flex flex-col group transform transition-all duration-500 ease-in-out"
    >
      <div className="lg:flex flex-col items-center">
        <div className="w-full overflow-hidden rounded-lg h-48">
          <img src={main_img} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h1 className="font-bold md:text-2xl lg:text-3xl text-white">{name}</h1>
          <div className="md:pt-4 text-sm md:text-lg lg:text-lg text-white/80 font-normal max-h-0 group-hover:max-h-[500px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
            <p>{description}</p>
          </div>
        </div>
        <div className="p-6 max-h-0 group-hover:max-h-[100px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
          <button
            onClick={() => navigate(`/project/${index}`)}
            className="bg-transparent hover:bg-red-600 text-white hover:text-white border-2 border-white hover:border-red-600 font-semibold text-lg px-4 py-3 rounded-lg transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      name: "Cybersecurity and Ethical Hacking",
      main_img: sev1,
      description: "Learn the fundamentals of cybersecurity and ethical hacking, including how to identify vulnerabilities, secure systems, and conduct penetration tests. Gain hands-on experience with real-world tools and techniques to defend against cyber threats."
  },
  {
      name: "Incident Response and Management",
      main_img: sev2,
      description: "Skills to detect, analyze, and respond to cybersecurity incidents effectively."
  },
  {
      name: "Cloud and IOT Security",
      main_img: sev3,
      description: " Understanding cloud and IoT, protecting dataand defending against emerging threats."
  },
    // {
    //   name: "Specialized Tracks",
    //   main_img: "/hacfy1.png",
    //   description: "Focus on specific areas like Cloud Security, Network Security, or Application Security. Deep dive into specialized tools and techniques for your chosen domain."
    // }
  ];

  return (
    <div className="bg-[#02060f] py-16 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={textVariant()} initial="hidden" animate="show">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose your cybersecurity career path and achieve your professional goals
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Empowering professionals worldwide to achieve their cybersecurity career aspirations
          </p>
        </motion.div>
        <motion.div className="relative flex mt-10 flex-wrap gap-7 justify-center">
          {projectsData.map((card, index) => (
            <ProjectCard key={`card-${index}`} index={index} {...card} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;