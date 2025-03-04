import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For animations (ensure framer-motion is installed)
import { FaArrowRight } from "react-icons/fa"; // For the button icon (install with `npm install react-icons`)

const ContactForm: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleContactClick = () => {
    navigate("/contact-us");
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#1B3B47] to-[#2d5a6a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                Let’s Collaborate on Something{" "}
                <br className="hidden md:block" />
                <span className="text-[#4bc0c8]">Great</span> Together
              </h2>
              <div className="space-y-3 text-lg">
                <a
                  href="mailto:info@projexon.pk"
                  className="cursor-pointer hover:text-[#4bc0c8] transition-colors"
                >
                  info@projexon.pk
                </a>
                <p className="hover:text-[#4bc0c8] transition-colors cursor-pointer">
                  +923044122703
                </p>
                <p>720-G4, Johar Town, Lahore, Pakistan</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#4bc0c8" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="inline-flex items-center justify-center bg-[#4bc0c8] text-black font-semibold py-4 px-8 rounded-full shadow-lg hover:text-white transition-all duration-300 text-xl"
            >
              <span className="mr-3">Get in Touch</span>
              <FaArrowRight className="text-xl" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
