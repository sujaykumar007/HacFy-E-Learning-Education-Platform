import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {arrow} from '../assets'
const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    termsAndConditions: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800"
    >
    <Link to='/' className=' absolute top-4 left-4 text-blue-700  hover:underline duration-300 hover:fill-red-800'> <img src={arrow} className='top-3 w-11' alt="" /></Link>

      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <img src="logo.png" alt="Phylum" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">Create your account</h2>
          <p className="mt-2 text-sm text-gray-400">Created for developers by developers</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md grid gap-6 shadow-sm -space-y-px">
            <div>
              <label htmlFor="fullName" className="sr-only">Full name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="Phone" className="sr-only">Email address</label>
              <input
                id="Phone"
                name="phone"
                type="phone"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="phone number"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="termsAndConditions"
                name="termsAndConditions"
                type="checkbox"
                required
                checked={formData.termsAndConditions}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="termsAndConditions" className="ml-2 block text-sm text-gray-200">
                I agree to the Terms & Conditions
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create my account
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RegistrationPage;
