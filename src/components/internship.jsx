import React from 'react';
import {
  Shield,
  Code2,
  Network,
  Lock,
  Terminal,
  ChevronRight,
  GraduationCap,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Instagram,
  Youtube
} from 'lucide-react';
import { motion } from 'framer-motion';

// First, add this CSS at the top of your file or in your styles
const marqueeStyles = {
  '@keyframes scroll': {
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(-100%)' }
  }
};

export default function internship() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const roadmapData = [
    {
      title: "Uncover the Digital Battlefield!",
      description: "Understand the ever-growing need for cybersecurity and explore the most common threats lurking in the digital world. From malware to phishing, discover the tools that protect businesses and individuals from cyber-attacks.",
      icon: Shield,
      color: "bg-[#00ff00]"
    },
    {
      title: "Hack Like a Pro – Legally!",
      description: "Step into the shoes of an ethical hacker and learn how to ethically break into systems. Understand the hacker’s mindset, discover the legal boundaries, and get familiar with the tools that are used touncover vulnerabilities.",
      icon: Code2,
      color: "bg-[#00ff00]"
    },
    {
      title: "The Backbone of Cybersecurity!",
      description: "Get to grips with how networks function and the key elements that make them secure. Learnessential networking concepts like IP addressing, subnetting, and security protocols, and gain the skills to protect network infrastructures from attacks.",
      icon: Terminal,
      color: "bg-[#00ff00]"
    },
    {
      title: "Bug Bounty Programs Turn Bugs Into Rewards",
      description: "Get introduced to the world of bug bounty hunting. Learn how to identify vulnerabilities, reportthem, and earn rewards. Discover how platforms like HackerOne and Bugcrowd are shaping the future of cybersecurity.",
      icon: Lock,
      color: "bg-[#00ff00]"
    },
    {
      title: "VAPT (Vulnerability Assessment and Penetration Testing) Find, Break, Fix!",
      description: "Master the VAPT process to identify weaknesses in systems. Learn how to assess vulnerabilities, conduct penetration tests, and craft effective strategies to secure systems from potential threats.",
      icon: Network,
      color: "bg-[#00ff00]"
    },
    {
      title: "From Theory to Practice – Hacking in Action!",
      description: "Take on complex real-world challenges by working on advanced web application security, firewalls, and exploit development. Sharpen your skills with Capture the Flag (CTF) challenges and put your knowledge to the test in real-time simulations.",
      icon: Terminal,
      color: "bg-[#00ff00]"
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-[#03060F] text-[#00ff00] border-b border-[#00ff00]/20 sticky top-0 z-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="./src/assets/hacfy1.png"
                alt="HacFy Logo" 
                className="h-8 w-8 mr-2"
              />
              <span className="font-bold text-xl">HacFy</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-[#00ff00]/80 transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff00] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="hover:text-[#00ff00]/80 transition-colors relative group">
                Programs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff00] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="hover:text-[#00ff00]/80 transition-colors relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff00] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="hover:text-[#00ff00]/80 transition-colors relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff00] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <button className="bg-[#00ff00] text-black px-4 py-2 rounded-md hover:bg-[#00ff00]/80 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-[#00ff00]/20">
                Apply Now
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#00ff00] hover:text-[#00ff00]/80"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-[#00ff00]/20 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="hover:text-[#00ff00]/80 transition-all duration-300 hover:pl-2 relative group">
                  Home
                  <span className="absolute left-0 w-0.5 h-0 bg-[#00ff00] transition-all duration-300 group-hover:h-full"></span>
                </a>
                <a href="#" className="hover:text-[#00ff00]/80 transition-all duration-300 hover:pl-2 relative group">
                  Programs
                  <span className="absolute left-0 w-0.5 h-0 bg-[#00ff00] transition-all duration-300 group-hover:h-full"></span>
                </a>
                <a href="#" className="hover:text-[#00ff00]/80 transition-all duration-300 hover:pl-2 relative group">
                  About
                  <span className="absolute left-0 w-0.5 h-0 bg-[#00ff00] transition-all duration-300 group-hover:h-full"></span>
                </a>
                <a href="#" className="hover:text-[#00ff00]/80 transition-all duration-300 hover:pl-2 relative group">
                  Contact
                  <span className="absolute left-0 w-0.5 h-0 bg-[#00ff00] transition-all duration-300 group-hover:h-full"></span>
                </a>
                <button className="bg-[#00ff00] text-black px-4 py-2 rounded-md hover:bg-[#00ff00]/80 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-[#00ff00]/20 w-full">
                  Apply Now
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          onClick={() => window.history.back()}
          className="mt-4 w-10 h-10 rounded-full bg-[#03060F] border-2 border-[#00ff00] flex items-center justify-center hover:bg-[#00ff00]/10 transition-colors group"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="h-5 w-5 rotate-180 text-[#00ff00] group-hover:text-[#00ff00]" />
        </motion.button>
      </div>

      {/* Hero Section */}
      <div className="bg-[#03060F] py-20 border-b border-[#00ff00]/20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold text-[#00ff00] mb-6">
              Internships
            </h1>
            
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ 
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="bg-[#03060F] p-4 rounded-lg inline-block mb-12"
            >
              <p className="text-xl text-white/80 font-mono">
                <span className="text-[#00ff00]">&gt;</span> Launch your career in cybersecurity with hands-on experience_
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Updated Scrolling Text */}
        <div className="relative overflow-hidden py-6">
          <div className="flex">
            <motion.div
              animate={{
                x: [0, -100 * 16], // Multiply by text width
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex flex-nowrap gap-16 pr-16"
            >
              {[...Array(12)].map((_, i) => (
                <span 
                  key={i} 
                  className="text-[#00ff00] font-bold text-3xl uppercase whitespace-nowrap"
                >
                  Register Now
                </span>
              ))}
            </motion.div>

            {/* Duplicate for seamless loop */}
            <motion.div
              animate={{
                x: [0, -100 * 16], // Multiply by text width
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex flex-nowrap gap-16 pr-16"
            >
              {[...Array(12)].map((_, i) => (
                <span 
                  key={i} 
                  className="text-[#00ff00] font-bold text-3xl uppercase whitespace-nowrap"
                >
                  Register Now
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#03060F] text-[#00ff00] p-8 font-mono w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#03060F] rounded-lg p-6 border-2 border-[#00ff00]/20 hover:border-[#00ff00]/60 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Hands-on Experience</h3>
              <p className="text-white/80 mb-4">
                Get practical experience with real-world cybersecurity tools and techniques. Work on actual projects and learn from industry experts.
              </p>
              <button className="text-black bg-[#00ff00] px-4 py-2 rounded-md hover:bg-[#00ff00]/80 transition-all duration-300 flex items-center gap-2">
                Read More <ChevronRight size={16} />
              </button>
            </div>

            <div className="bg-[#03060F] rounded-lg p-6 border-2 border-[#00ff00]/20 hover:border-[#00ff00]/60 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Industry Certification</h3>
              <p className="text-white/80 mb-4">
                Prepare for globally recognized cybersecurity certifications while gaining practical knowledge through our structured program.
              </p>
              <button className="text-black bg-[#00ff00] px-4 py-2 rounded-md hover:bg-[#00ff00]/80 transition-all duration-300 flex items-center gap-2">
                Read More <ChevronRight size={16} />
              </button>
            </div>

            <div className="bg-[#03060F] rounded-lg p-6 border-2 border-[#00ff00]/20 hover:border-[#00ff00]/60 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Career Growth</h3>
              <p className="text-white/80 mb-4">
                Launch your cybersecurity career with mentorship, networking opportunities, and guidance from industry professionals.
              </p>
              <button className="text-black bg-[#00ff00] px-4 py-2 rounded-md hover:bg-[#00ff00]/80 transition-all duration-300 flex items-center gap-2">
                Read More <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="w-12 h-12 text-[#00ff00] animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-[#00ff00]">
              HacFy Internship Roadmap
            </h1>
            <p className="text-white/80 text-lg max-w-5xl mx-auto">
              &#62; Step into the world of cybersecurity with our hands-on internship program. Dive deep into the
realms of ethical hacking, bug bounty, VAPT, and more. Get ready to gain real-world experience
and equip yourself with the skills that will make you a cybersecurity expert!
            </p>
          </div>

          <div className="space-y-8">
            {roadmapData.map((day, index) => {
              const Icon = day.icon;
              return (
                <div
                  key={index}
                  className="relative flex items-start group"
                >
                  <div className={`
                    ${day.color} rounded-full p-3 shadow-lg shadow-[#00ff00]/20
                    transform transition-all duration-300
                    group-hover:scale-110 group-hover:rotate-12
                  `}>
                    <Icon className="w-6 h-6 text-black" />
                  </div>

                  <div className="ml-6 flex-1">
                    <div className="bg-[#03060F] rounded-lg p-6 border-2 border-[#00ff00]/20
                      transform transition-all duration-300 ease-in-out
                      hover:bg-[#03060F] hover:translate-x-2 hover:border-[#00ff00]/60
                      hover:shadow-lg hover:shadow-[#00ff00]/10
                      hover:scale-[1.02]"
                    >
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold text-[#00ff00]">{day.title}</h3>
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </div>

                  {index < roadmapData.length - 1 && (
                    <div className="absolute left-6 top-14 w-0.5 h-24 bg-gradient-to-b from-[#00ff00]/50 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[#00ff00]/80">
              &#62; Ready to start your cybersecurity journey? This comprehensive program will give you
              the foundation you need to excel in the field.
            </p>
          </div>

          {/* New Animated Apply Button */}
          <div className="flex justify-center items-center py-20">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff00] to-[#00ff00]/50 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-12 py-4 bg-[#03060F] rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="text-[#00ff00] text-lg font-semibold pr-6">Apply Now</span>
                <span className="text-[#00ff00]/60 pl-6 group-hover:text-[#00ff00] transition duration-200">
                  Start Your Journey &rarr;
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#03060F] text-[#00ff00] border-t border-[#00ff00]/20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                  src="./src/assets/hacfy1.png"
                  alt="HacFy Logo" 
                  className="h-8 w-8 mr-2"
                />
                <span className="font-bold text-xl">HacFy</span>
              </div>
              <p className="text-white/80">
                Empowering the next generation of cybersecurity experts through hands-on learning.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-[#00ff00] transition-colors">Programs</a></li>
                <li><a href="#" className="hover:text-[#00ff00] transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-[#00ff00] transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-[#00ff00] transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-white/80">
                <li>info@hacfy.com</li>
                <li>+91 8660767853</li>
                <li>Mijar, Moodbedri</li>
                <li>Manglore-574225</li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="hover:text-[#00ff00] transition-colors relative group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute -inset-2 bg-[#00ff00]/10 rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <Github className="h-6 w-6 relative z-10" />
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/company/hacfy" 
                  className="hover:text-[#00ff00] transition-colors relative group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute -inset-2 bg-[#00ff00]/10 rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <Linkedin className="h-6 w-6 relative z-10" />
                </motion.a>
                
                <motion.a 
                  href="https://www.instagram.com/hacfy.co/" 
                  className="hover:text-[#00ff00] transition-colors relative group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute -inset-2 bg-[#00ff00]/10 rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <Instagram className="h-6 w-6 relative z-10" />
                </motion.a>
                
                <motion.a 
                  href="mailto:info@hacfy.com" 
                  className="hover:text-[#00ff00] transition-colors relative group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute -inset-2 bg-[#00ff00]/10 rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <Mail className="h-6 w-6 relative z-10" />
                </motion.a>


                <motion.a 
                  href="https://www.youtube.com/@HacFy" 
                  className="hover:text-[#00ff00] transition-colors relative group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute -inset-2 bg-[#00ff00]/10 rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <Youtube className="h-6 w-6 relative z-10" />
                </motion.a>
                
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#00ff00]/20 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} HacFy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

