import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCar, 
  FaShoppingCart, 
  FaChartLine, 
  FaIndustry, 
  FaMedkit,
  FaLaptopCode, 
  FaTruckMoving, 
  FaGraduationCap, 
  FaHotel, 
  FaLandmark 
} from 'react-icons/fa';

const industries = [
  { 
    Icon: FaCar,
    name: 'Automobile & Telecom',
    color: '#4F46E5' // indigo-600
  },
  { 
    Icon: FaShoppingCart,
    name: 'E-Commerce',
    color: '#2563EB' // blue-600
  },
  { 
    Icon: FaChartLine,
    name: 'Fintech',
    color: '#7C3AED' // violet-600
  },
  { 
    Icon: FaIndustry,
    name: 'Manufacturing',
    color: '#EA580C' // orange-600
  },
  { 
    Icon: FaMedkit,
    name: 'Healthcare',
    color: '#DC2626' // red-600
  },
  { 
    Icon: FaLaptopCode,
    name: 'Technology',
    color: '#0891B2' // cyan-600
  },
  { 
    Icon: FaTruckMoving,
    name: 'Supply Chain & Logistics',
    color: '#16A34A' // green-600
  },
  { 
    Icon: FaGraduationCap,
    name: 'Education',
    color: '#9333EA' // purple-600
  },
  { 
    Icon: FaHotel,
    name: 'Travel & Hospitality',
    color: '#2563EB' // blue-600
  },
  { 
    Icon: FaLandmark,
    name: 'Government & Public Sector',
    color: '#4F46E5' // indigo-600
  },
];

const IndustriesWeServe = () => {
  return (
    <div className="py-20 px-4 md:px-8">
      <h2 className="text-4xl font-bold mb-12 max-w-7xl mx-auto">INDUSTRIES WE SERVE</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              className="mb-4 relative"
              whileHover={{ 
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
            >
              <industry.Icon 
                className="text-5xl"
                style={{ color: industry.color }}
              />
            </motion.div>
            <p className="text-center text-sm font-medium">{industry.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe; 