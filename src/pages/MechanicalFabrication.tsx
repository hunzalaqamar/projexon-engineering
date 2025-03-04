import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const MechanicalFabrication: React.FC = () => {
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
          backgroundImage: `url('/assets/mechanicalbg.jpg')`, // Replace with actual high-quality hero image
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
              Precision Mechanical Fabrication
            </h1>
            <p className="text-2xl mb-8 font-light drop-shadow-md">
              Crafting Excellence for Industrial Needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact-us")}
              className="bg-[#0fbbea] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0ea0c8] transition-colors shadow-lg"
            >
              See Our Craftsmanship
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
              Precision Fabrication for Industrial Success
            </h2>
            <p className="text-gray-800 text-xl leading-relaxed">
              Our Mechanical Fabrication service specializes in the precision
              fabrication of mechanical components, structural assemblies, and
              custom parts to meet the rigorous demands of industrial
              applications. Leveraging state-of-the-art equipment and expertise
              in materials like steel and aluminum, we ensure durability,
              accuracy, and performance. Projexon Engineering delivers custom
              solutions for industries like oil & gas, manufacturing, and more,
              using advanced technologies such as servo motors and drives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-[#0fbbea] relative overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0fbbea]/20 via-[#2b49a1]/10 to-transparent rounded-2xl opacity-60" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <h3 className="text-xl font-semibold text-[#2b49a1] tracking-tight drop-shadow-md">
                Ready to Optimize Your Projects?
              </h3>
              <p className="text-gray-800 text-base leading-relaxed max-w-sm">
                Connect with us to explore how our expert consultancy can drive
                your engineering success. Let’s build something extraordinary
                together!
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#0fbbea",
                  boxShadow: "0 8px 15px rgba(75, 192, 200, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact-us")}
                className="inline-flex items-center justify-center bg-[#2b49a1] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:text-black transition-all duration-300 text-lg relative overflow-hidden group"
              >
                <span className="relative z-10 mr-3">Contact Us Now</span>
                <FaArrowRight className="relative z-10 text-lg" />
                <span className="absolute inset-0 bg-[#0fbbea]/30 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full origin-center" />
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default MechanicalFabrication;
