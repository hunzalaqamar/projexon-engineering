import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/hero-bg.jpg')`, // Replace with actual high-quality hero image
        }}
      >
        <div
          className="absolute inset-0 bg-black flex items-center justify-center"
          style={{ opacity: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white px-4"
          >
            <p className="text-orange-500 uppercase text-xs sm:text-sm tracking-widest mb-2 font-light drop-shadow-md">
              Empowering Your Industry with Cutting-Edge Solutions, Breathing
              New Life into Every Machine
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6 tracking-tight drop-shadow-xl">
              We’re Building the Foundations
              <br className="hidden md:block" />
              for a Brighter Industrial Future
            </h1>
            <p className="text-[#2b49a1] text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-light max-w-2xl sm:max-w-3xl drop-shadow-md">
              Picture a future where every machine anticipates your next
              move—seamlessly adapting, optimizing resources, and propelling
              your operations to new heights.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact-us")}
              className="bg-[#0fbbea] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#0ea0c8] transition-colors shadow-lg"
            >
              Let’s Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
