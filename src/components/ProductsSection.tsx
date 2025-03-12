import React from "react";
import { motion } from "framer-motion";

// Container (section) animation for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly faster stagger for smoother flow
    },
  },
};

// Child (card) animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }, // Slightly longer for elegance
  },
};

const ProductsSection: React.FC = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-gradient-to-b from-[#f9fafb] to-[#e6f0fa] py-20 px-6 overflow-hidden text-gray-800"
    >
      {/* Background accent shapes (softer and lighter) */}
      <div
        className="
          absolute
          top-[-120px]
          left-[-60px]
          w-[250px]
          h-[250px]
          rounded-full
          bg-[#0fbbea] // Soft teal accent
          opacity-15
          blur-3xl
          z-[-1]
        "
      />
      <div
        className="
          absolute
          bottom-[-120px]
          right-[-70px]
          w-[300px]
          h-[300px]
          rounded-full
          bg-[#0fbbea]
          opacity-15
          blur-3xl
          z-[-1]
        "
      />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-[#0fbbea]">
          Our Products
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          We Provide Solutions
        </h2>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* MAC Valves */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-xl shadow-md bg-gradient-to-br from-[#f7fafc] to-[#edf2f7] hover:shadow-xl transition-shadow border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-[#0fbbea]">MAC Valves</h3>
          <p className="text-gray-600 text-base mt-4 leading-relaxed">
            Known for high-speed reliability and unmatched precision, MAC Valves
            deliver best-in-class performance across numerous industries.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <img
              src="/assets/mac-valve1.png"
              alt="MAC Valve 1"
              className="w-1/3 h-16 object-cover rounded-lg"
            />
            <img
              src="/assets/mac-valve2.png"
              alt="MAC Valve 2"
              className="w-1/3 h-16 object-cover rounded-lg"
            />
          </div>
          <a
            href="https://www.macvalves.com/"
            className="inline-block mt-6 text-[#0fbbea] hover:text-[#3d7f7f] font-medium underline"
          >
            Know More →
          </a>
        </motion.div>

        {/* MAK Power */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-xl shadow-md bg-gradient-to-br from-[#f7fafc] to-[#edf2f7] hover:shadow-xl transition-shadow border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-[#0fbbea]">MAK Power</h3>
          <p className="text-gray-600 text-base mt-4 leading-relaxed">
            A leader in energy solutions, from backup systems to advanced
            renewable technologies, ensuring you stay powered up when it matters
            most.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <img
              src="/assets/mak-power1.png"
              alt="MAK Power 1"
              className="w-1/3 h-16 object-cover rounded-lg"
            />
            <img
              src="/assets/mak-power2.png"
              alt="MAK Power 2"
              className="w-1/3 h-16 object-cover rounded-lg"
            />
          </div>
          <a
            href="https://makpower.com/"
            className="inline-block mt-6 text-[#0fbbea] hover:text-[#3d7f7f] font-medium underline"
          >
            Know More →
          </a>
        </motion.div>

        {/* PISCO Pneumatics */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-xl shadow-md bg-gradient-to-br from-[#f7fafc] to-[#edf2f7] hover:shadow-xl transition-shadow border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-[#0fbbea]">
            PISCO Pneumatics
          </h3>
          <p className="text-gray-600 text-base mt-4 leading-relaxed">
            Japanese-engineered fittings and tubing that redefine reliability,
            ensuring peak performance and advanced control in pneumatic systems.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <img
              src="/assets/pisco1.png"
              alt="PISCO Pneumatics 1"
              className="w-1/3 h-16 object-cover rounded-lg"
            />
            <img
              src="/assets/pisco2.png"
              alt="PISCO Pneumatics 2"
              className="w-1/3 h-16 object-cover rounded-lg"
            />
          </div>
          <a
            href="https://www.pisco.co.jp/en/"
            className="inline-block mt-6 text-[#0fbbea] hover:text-[#3d7f7f] font-medium underline"
          >
            Know More →
          </a>
        </motion.div>

        {/* Simpheonix */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-xl shadow-md bg-gradient-to-br from-[#f7fafc] to-[#edf2f7] hover:shadow-xl transition-shadow border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-[#0fbbea]">Simpheonix</h3>
          <p className="text-gray-600 text-base mt-4 leading-relaxed">
            Advanced automation solutions including VFDs, HMIs, inverters, and
            PLCs, powering efficient and streamlined industrial processes.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <img
              src="/assets/sympheonix1.png"
              alt="Simpheonix 1"
              className="w-1/3 h-16 object-cover rounded-lg"
            />
            <img
              src="/assets/sympheonix2.png"
              alt="Simpheonix 2"
              className="w-1/3 h-16 object-cover rounded-lg"
            />
          </div>
          <a
            href="https://www.simphoenix.com/"
            className="inline-block mt-6 text-[#0fbbea] hover:text-[#3d7f7f] font-medium underline"
          >
            Know More →
          </a>
        </motion.div>

        {/* VP Instruments */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-xl shadow-md bg-gradient-to-br from-[#f7fafc] to-[#edf2f7] hover:shadow-xl transition-shadow border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-[#0fbbea]">
            VP Instruments
          </h3>
          <p className="text-gray-600 text-base mt-4 leading-relaxed">
            Precision flow measurement instruments for optimized efficiency,
            reduced energy consumption, and robust quality control.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <img
              src="/assets/vp-instrument1.png"
              alt="VP Instrument 1"
              className="w-1/3 h-16 object-cover rounded-lg"
            />
            <img
              src="/assets/vp-instrument2.png"
              alt="VP Instrument 2"
              className="w-1/3 h-16 object-cover rounded-lg"
            />
          </div>
          <a
            href="https://www.vpinstruments.com/"
            className="inline-block mt-6 text-[#0fbbea] hover:text-[#3d7f7f] font-medium underline"
          >
            Know More →
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductsSection;
