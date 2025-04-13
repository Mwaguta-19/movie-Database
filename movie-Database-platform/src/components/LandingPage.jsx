import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg"; // adjust path if needed

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      {/* Logo */}
      <div className="mb-8">
        <img src={logo} alt="Logo" className="h-24 w-auto mx-auto" />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        Get Best Movies!
      </h1>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm sm:max-w-md justify-center">
        <button
          onClick={handleGetStarted}
          className="w-full sm:w-auto bg-red-600 text-white font-semibold py-3 px-6 rounded hover:bg-red-700 transition"
        >
          Get Started
        </button>

        <button className="w-full sm:w-auto bg-red-600 text-white font-semibold py-3 px-6 rounded hover:bg-red-700 transition">
          Sign Up
        </button>
      </div>

      {/* Forgot Password Link */}
      <a
        href="#"
        className="underline text-sm hover:text-gray-400 mt-4 text-center"
      >
        Forgot Password?
      </a>
    </div>
  );
};

export default LandingPage;
