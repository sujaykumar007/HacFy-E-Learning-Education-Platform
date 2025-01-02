import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { styles } from "@/style"; // Ensure this is correctly imported
import { Link } from "react-router-dom";
import videoSrc from "@/assets/video.mp4"; // Replace with your actual video path

// MAIN HERO PAGE
const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  // Lazy loading: Play video when it comes into the viewport
  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Intersecting observer to detect when video comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            handleVideoLoad(); // Start the video when it enters the viewport
            observer.disconnect(); // Stop observing after the video starts
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const handleButtonClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="relative pt-4 sm:pt-28 md:pt-40 flex flex-col lg:flex-wrap min-h-screen lg:h-screen">
      {/* Background Video (lazy load) */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoSrc}
        autoPlay
        loop
        muted
        preload="true"
        playsInline
        controls={false}
        style={{ pointerEvents: 'none' }}
      />

      {/* Full overlay with slight darkness */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Top gradient overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-[25%] z-[2]"
        style={{
          background: 'linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0) 100%)'
        }}
      />

      {/* Bottom gradient overlay - adjusted to be less intense near logos */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[40%] z-[2]"
        style={{
          background: 'linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0) 100%)'
        }}
      />

      <div className="md:w-3/4 lg:w-1/2 text-white px-6 md:px-20 lg:px-40 flex items-center z-[3] mb-20 lg:mb-0">
        <div>
          <motion.div variants={textVariant()}>
            <h3 className={`${styles.heroHeadText} mt-32 sm:mt-40 md:mt-20`}>
              A  Future Secured
            </h3>
            <p className={`${styles.heroSubText} pt-4 sm:pt-6 max-w-[90%] sm:max-w-full`}>
              Empowering Your Digital Defense with Comprehensive Cybersecurity
              Education. Our Courses cover everything from the basics to advanced strategies, ensuring you're well-equipped to protect the digital world.
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
                    src="https://www.youtube.com/embed/6RDz_bV2yXs?controls=0&autohide=1&showinfo=0&modestbranding=1&rel=0&autoplay=1&fs=0&disablekb=1&cc_load_policy=0&iv_load_policy=3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen
                    title="Demo Video"
                    style={{ pointerEvents: 'none' }} // Disable all mouse activities on the iframe
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Updated Clients Logo Slider section */}
      <div className="relative w-full pb-12 z-[3] mt-auto">
        <div className="container mx-auto px-4 max-w-[100vw] overflow-hidden">
          <div className="logos-slider relative">
            <div className="logos-slide flex animate-scroll whitespace-nowrap">
              {/* First set of logos - updated with better responsive handling */}
              <div className="flex items-center justify-center flex-shrink-0">
                <img src="/client1.png" alt="Client 1" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client2.png" alt="Client 2" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client3.png" alt="Client 3" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client4.png" alt="Client 4" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client5.png" alt="Client 5" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client6.png" alt="Client 6" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client7.png" alt="Client 7" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Second set - updated with better responsive handling */}
              <div className="flex items-center justify-center flex-shrink-0">
                <img src="/client1.png" alt="Client 1" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client2.png" alt="Client 2" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client4.png" alt="Client 4" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client5.png" alt="Client 5" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client6.png" alt="Client 6" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client7.png" alt="Client 7" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Third set - updated with better responsive handling */}
              <div className="flex items-center justify-center flex-shrink-0">
                <img src="/client1.png" alt="Client 1" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client2.png" alt="Client 2" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client4.png" alt="Client 4" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client5.png" alt="Client 5" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client6.png" alt="Client 6" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <img src="/client7.png" alt="Client 7" className="mx-6 sm:mx-12 h-8 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
