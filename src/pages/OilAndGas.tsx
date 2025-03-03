import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For animations (install with `npm install framer-motion`)

const OilAndGas: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/oilbg.jpg')`, // Replace with actual high-quality hero image
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
              Oil & Gas Innovation
            </h1>
            <p className="text-2xl mb-8 font-light drop-shadow-md">
              Driving Efficiency and Sustainability in Energy
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
              Transforming Oil & Gas with Projexon Engineering
            </h2>
            <p className="text-gray-800 text-xl leading-relaxed">
              At Projexon Engineering, we redefine the Oil & Gas sector with
              cutting-edge solutions for upstream exploration, midstream
              logistics, and downstream refining. Our advanced automation
              systems, powered by state-of-the-art MAC Valves and PISCO
              Pneumatics, enhance extraction efficiency, ensure pipeline safety,
              and minimize environmental impact. We specialize in precision
              instrumentation from VP Instruments to optimize operational uptime
              and sustainability, positioning your operations as leaders in the
              energy transition.
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
              src="/assets/oil1.jpg" // Replace with actual high-quality image
              alt="Offshore Oil Platform"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            <p className="absolute bottom-6 left-6 text-white text-lg font-light italic drop-shadow-md">
              Pioneering offshore oil solutions for a greener future.
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default OilAndGas;
