import React from "react";
import { motion } from "framer-motion";

// Container (section) animation for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger children with 0.2s delay
      staggerChildren: 0.2,
    },
  },
};

// Child (card) animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProductsSection: React.FC = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-black text-white py-16 px-4 overflow-hidden"
    >
      {/* Background accent shapes (optional) */}
      <div
        className="
          absolute
          top-[-100px]
          left-[-50px]
          w-[200px]
          h-[200px]
          bg-orange-600
          rounded-full
          filter
          blur-3xl
          opacity-30
          z-[-1]
        "
      />
      <div
        className="
          absolute
          bottom-[-100px]
          right-[-60px]
          w-[250px]
          h-[250px]
          bg-orange-500
          rounded-full
          filter
          blur-3xl
          opacity-30
          z-[-1]
        "
      />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-sm uppercase text-orange-500 tracking-widest">
          Our Products
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          We Provide Solutions
        </h2>
      </div>

      {/* Products Grid 
          1 col on small, 2 cols on medium (>=640px),
          3 cols on large (>=1024px).
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* MAC Valves */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded shadow-lg bg-gradient-to-b from-[#111111] to-[#1a1a1a] hover:shadow-2xl transition-shadow"
        >
          <h3 className="text-xl font-semibold text-orange-400">MAC Valves</h3>
          <p className="text-gray-300 text-sm mt-3 leading-relaxed">
            Known for high-speed reliability and unmatched precision, MAC Valves
            deliver best-in-class performance across numerous industries.
          </p>
          <div className="flex space-x-2 mt-4">
            <img
              src="/assets/mac-valve1.png"
              alt="MAC Valve 1"
              className="w-1/2 h-20 object-cover rounded"
            />
            <img
              src="/assets/mac-valve2.png"
              alt="MAC Valve 2"
              className="w-1/2 h-20 object-cover rounded"
            />
          </div>
          <a
            href="https://www.macvalves.com/"
            className="inline-block mt-4 text-orange-400 hover:text-orange-300 font-medium"
          >
            Know More &rarr;
          </a>
        </motion.div>

        {/* MAK Power */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded shadow-lg bg-gradient-to-b from-[#111111] to-[#1a1a1a] hover:shadow-2xl transition-shadow"
        >
          <h3 className="text-xl font-semibold text-orange-400">MAK Power</h3>
          <p className="text-gray-300 text-sm mt-3 leading-relaxed">
            A leader in energy solutions, from backup systems to advanced
            renewable technologies, ensuring you stay powered up when it matters
            most.
          </p>
          <div className="flex space-x-2 mt-4">
            <img
              src="/assets/mak-power1.png"
              alt="MAK Power 1"
              className="w-1/2 h-20 object-cover rounded"
            />
            <img
              src="/assets/mak-power2.png"
              alt="MAK Power 2"
              className="w-1/2 h-20 object-cover rounded"
            />
          </div>
          <a
            href="https://makpower.com/"
            className="inline-block mt-4 text-orange-400 hover:text-orange-300 font-medium"
          >
            Know More &rarr;
          </a>
        </motion.div>

        {/* PISCO Pneumatics */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded shadow-lg bg-gradient-to-b from-[#111111] to-[#1a1a1a] hover:shadow-2xl transition-shadow"
        >
          <h3 className="text-xl font-semibold text-orange-400">
            PISCO Pneumatics
          </h3>
          <p className="text-gray-300 text-sm mt-3 leading-relaxed">
            Japanese-engineered fittings and tubing that redefine reliability,
            ensuring peak performance and advanced control in pneumatic systems.
          </p>
          <div className="flex space-x-2 mt-4">
            <img
              src="/assets/pisco1.png"
              alt="PISCO Pneumatics 1"
              className="w-1/2 h-20 object-cover rounded"
            />
            <img
              src="/assets/pisco2.png"
              alt="PISCO Pneumatics 2"
              className="w-1/2 h-20 object-cover rounded"
            />
          </div>
          <a
            href="https://www.pisco.co.jp/en/"
            className="inline-block mt-4 text-orange-400 hover:text-orange-300 font-medium"
          >
            Know More &rarr;
          </a>
        </motion.div>

        {/* Sympheonix */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded shadow-lg bg-gradient-to-b from-[#111111] to-[#1a1a1a] hover:shadow-2xl transition-shadow"
        >
          <h3 className="text-xl font-semibold text-orange-400">Simpheonix</h3>
          <p className="text-gray-300 text-sm mt-3 leading-relaxed">
            Advanced automation solutions including VFDs, HMIs, inverters, and
            PLCs, powering efficient and streamlined industrial processes.
          </p>
          <div className="flex space-x-2 mt-4">
            <img
              src="/assets/sympheonix1.png"
              alt="Simpheonix 1"
              className="w-1/2 h-20 object-cover rounded"
            />
            <img
              src="/assets/sympheonix2.png"
              alt="Simpheonix 2"
              className="w-1/2 h-20 object-cover rounded"
            />
          </div>
          <a
            href="https://www.simphoenix.com/"
            className="inline-block mt-4 text-orange-400 hover:text-orange-300 font-medium"
          >
            Know More &rarr;
          </a>
        </motion.div>

        {/* VP Instruments */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded shadow-lg bg-gradient-to-b from-[#111111] to-[#1a1a1a] hover:shadow-2xl transition-shadow"
        >
          <h3 className="text-xl font-semibold text-orange-400">
            VP Instruments
          </h3>
          <p className="text-gray-300 text-sm mt-3 leading-relaxed">
            Precision flow measurement instruments for optimized efficiency,
            reduced energy consumption, and robust quality control.
          </p>
          <div className="flex space-x-2 mt-4">
            <img
              src="/assets/vp-instrument1.png"
              alt="VP Instrument 1"
              className="w-1/2 h-20 object-cover rounded"
            />
            <img
              src="/assets/vp-instrument2.png"
              alt="VP Instrument 2"
              className="w-1/2 h-20 object-cover rounded"
            />
          </div>
          <a
            href="https://www.vpinstruments.com/"
            className="inline-block mt-4 text-orange-400 hover:text-orange-300 font-medium"
          >
            Know More &rarr;
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductsSection;
