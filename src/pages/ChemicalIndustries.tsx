import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ChemicalIndustries: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/chemicalbg.jpg')`, // Replace with actual high-quality hero image
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
              Chemical Industry Innovation
            </h1>
            <p className="text-2xl mb-8 font-light drop-shadow-md">
              Sustainable Engineering for Chemical Excellence
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
              Pioneering Chemical Solutions with Projexon
            </h2>
            <p className="text-gray-800 text-xl leading-relaxed">
              Projexon Engineering leads the Chemical Industries with
              sustainable, safe, and efficient engineering solutions. Our
              advanced automation, powered by MAK Power and VP Instruments,
              optimizes chemical production, reduces environmental impact, and
              enhances safety protocols. We deliver precision pneumatic systems
              and instrumentation to drive innovation, ensuring your chemical
              operations meet global standards and exceed expectations.
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
              src="/assets/chemical1.jpg" // Replace with actual high-quality image
              alt="Chemical Reactor System"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            <p className="absolute bottom-6 left-6 text-white text-lg font-light italic drop-shadow-md">
              Advanced reactors for sustainable chemical production.
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default ChemicalIndustries;
