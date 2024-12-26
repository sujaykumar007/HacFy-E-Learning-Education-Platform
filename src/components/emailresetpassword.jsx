import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";

const ResetPasswordEmail = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false); // State for the loader
  const [error, setError] = useState(""); // State for error message
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
    setError(""); // Clear previous errors

    try {
      const { email } = formData;
      const response = await axios.post("https://hacfy-e-learning-education-platform-i28h.onrender.com/api/auth/forgotPassword", { email });

      if (response.data.valid) {
        localStorage.setItem("email", response.data.email);
        navigate("/resetOtp");
      } else {
        setError("Invalid OTP. Please try again.");
        navigate("/resetPasswordEmail");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      navigate("/resetPasswordEmail");
    } finally {
      setLoading(false);
    }
  };

  // Show full-page loader while loading
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
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <img src="logo.png" alt="Phylum" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Enter your registered email
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="shadow-sm -space-y-px">
            <div className="rounded-lg">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="rounded-sm appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="hacfy@gmail.com"
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
              Send OTP
            </button>
          </div>
        </form>
        <div className="text-center mt-6"></div>
      </div>
    </motion.div>
  );
};

export default ResetPasswordEmail;
