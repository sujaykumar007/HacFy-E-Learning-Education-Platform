import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { arrow } from "../assets";

import { BallTriangle } from "react-loader-spinner";

const RegistrationPage = () => {
  const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match. Please try again.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const { fullName, email, phone, password } = formData;
      const response = await axios.post(" https://hacfy-e-learning-education-platform-i28h.onrender.com/api/auth/register",
        { fullName, email, phone, password });

      setMessage(response.data.message);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });

      if (response.status === 201) {
        localStorage.setItem("email", response.data.email);
        navigate("/verifyEmail");
      }
    } catch (error) {
      setMessage(
        error.response
          ? error.response.data.message
          : "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800"
    >
      <Link
        to="/"
        className="absolute top-4 left-4 text-blue-700 hover:underline duration-300 hover:fill-red-800"
      >
        <img src={arrow} className="top-3 w-11" alt="Back" />
      </Link>

      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <img src="logo.png" alt="Phylum" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Create your account
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md grid gap-6 shadow-sm -space-y-px">
            <div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full name"
                className="appearance-none rounded-sm w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
              />
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email address"
                className="appearance-none rounded-sm w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
              />
            </div>
            <div>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone number"
                className="appearance-none rounded-sm w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="appearance-none rounded-sm w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
              />
            </div>
            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="appearance-none rounded-sm w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md"
          >
            Create my account
          </button>
        </form>

        {message && <p className="mt-4 text-center text-gray-200">{message}</p>}

        <div className="text-center mt-6">
          <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RegistrationPage;
