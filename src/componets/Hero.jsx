import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { styles } from "@/style"; // Ensure this is correctly imported
import { Link } from "react-router-dom";
import React, { useState } from "react";
import videoSrc from "@/assets/video.mp4";


const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleButtonClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="relative pt-4 sm:pt-28 md:pt-40 flex flex-wrap lg:h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoSrc}
        autoPlay
        loop
        muted
      />
      
      {/* <div
        className="absolute inset-0 bg-auto sm:bg-contain lg:bg-cover bg-opacity-20 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('/assets/bg2.jpg')`, // Path relative to the public folder
        }}
      ></div> */}

      <div className="md:w-3/4 lg:w-1/2 h-full text-white px-6 md:px-20 lg:px-40 flex items-center z-10">
        <div>
          <motion.div variants={textVariant()}>
            <h3 className={`${styles.heroHeadText} mt-20 sm:m-auto`}>
              Empowering Cybersecurity Education.
            </h3>
            <p className={`${styles.heroSubText}`}>
              Empowering Your Digital Defense with Comprehensive Cybersecurity
              Education. Our Courses cover everything from the basics to
              advanced strategies, ensuring you're well-equipped to protect the
              digital world.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 pt-4 pb-5 md:pt-5">
            <button
              className="bg-red-600 hover:bg-red-700 text-white w-40 text-sm md:w-auto font-medium md:font-semibold md:text-lg px-4 py-3 rounded-lg"
              onClick={handleButtonClick}
            >
              Watch the Video
            </button>

            <Link to="/demo" className="md:block">
              <button className="bg-red-600 hidden md:block hover:bg-red-700 text-white font-semibold text-lg px-4 py-3 rounded-lg">
                Request A Demo
              </button>
            </Link>

            {showVideo && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
                <div className="relative w-3/4 h-3/4">
                  <button
                    onClick={handleCloseVideo}
                    className="font-extrabold text-1xl absolute -top-5 -right-5 border-red-800 p-3 w-10 h-10 flex justify-center items-center bg-red-500 rounded-full"
                  >
                    x
                  </button>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/6RDz_bV2yXs?si=WdftR-KjFaPiMFFM"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Demo Video"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
