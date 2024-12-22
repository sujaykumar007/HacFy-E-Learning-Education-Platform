import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const VerifyEmail = () => {
  const [formData, setFormData] = useState({
    otp: '',
  });
  const [loading, setLoading] = useState(false); // State for the loader
  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activate loader
    setError(''); // Clear previous errors

    try {
      const userEmail = localStorage.getItem("email")
      const response = await axios.post('https://hacfy-e-learning-education-platform-i28h.onrender.com/api/auth/verifyEmail',{
            email: userEmail,
            otp: formData.otp,
          }); 
      // console.log(response)
      if (response.data.valid) {
        navigate('/login'); // Navigate to register page
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false); // Deactivate loader
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800"
    >
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <img src="logo.png" alt="Phylum" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Enter OTP
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="shadow-sm -space-y-px">
            <div className="rounded-lg">
              <label htmlFor="otp" className="sr-only">
                OTP
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                autoComplete="one-time-code"
                required
                value={formData.otp}
                onChange={handleInputChange}
                className="rounded-sm appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="OTP sent to your mail"
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group ca relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                    ></path>
                  </svg>
                  Verifying...
                </div>
              ) : (
                "Verify OTP"
              )}
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <Link
            to="/emailconfirmation"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Change Email
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default VerifyEmail;
