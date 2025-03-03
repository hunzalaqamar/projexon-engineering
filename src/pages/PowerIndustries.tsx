import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PowerIndustries: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/powerbg.jpg')`, // Replace with actual high-quality hero image
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
            className="text-center text-white"
          >
            <h1 className="text-6xl font-bold mb-4 tracking-tight drop-shadow-xl">
              Power Industry Leadership
            </h1>
            <p className="text-2xl mb-8 font-light drop-shadow-md">
              Reliable Engineering for a Sustainable Future
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact-us")}
              className="bg-[#0fbbea] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0ea0c8] transition-colors shadow-lg"
            >
              Discover Our Solutions
            </motion.button>
          </motion.div>
        </div>
      </header>

      {/* Content Section */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        <section className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-100"
          >
            <h2 className="text-4xl font-semibold text-[#2b49a1] mb-6 tracking-tight">
              Powering the Future with Projexon Engineering
            </h2>
            <p className="text-gray-800 text-xl leading-relaxed">
              Projexon Engineering drives the Power Industries with reliable,
              sustainable, and efficient engineering solutions. Our automation
              and pneumatic systems, enhanced by Sympheonix and MAC Valves,
              optimize power generation, transmission, and distribution,
              ensuring minimal downtime and environmental impact. We deliver
              cutting-edge technologies to support renewable energy integration
              and maintain grid stability, positioning your operations as
              industry leaders.
            </p>
          </motion.div>

          {/* Additional Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/assets/power1.jpg" // Replace with actual high-quality image
              alt="Power Turbine System"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            <p className="absolute bottom-6 left-6 text-white text-lg font-light italic drop-shadow-md">
              High-efficiency turbines for sustainable power generation.
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default PowerIndustries;
