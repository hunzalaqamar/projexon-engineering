import { motion } from "framer-motion"; // For animations (ensure framer-motion is installed)
import { FaEye, FaCompass } from "react-icons/fa"; // For vision and mission icons (install with `npm install react-icons`)

const VisionMissionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#2b49a1] text-center mb-16 tracking-tight drop-shadow-sm">
          Our Vision & Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#0fbbea] relative overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0fbbea]/5 to-transparent rounded-2xl opacity-50" />
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <FaEye className="text-3xl text-[#0fbbea] mr-4" />
                <h3 className="text-2xl font-semibold text-[#2b49a1] tracking-tight">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                To be deeply devoted to pursuing business and financial success
                while creating a positive, lasting impact on the world around
                you.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#0fbbea] relative overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0fbbea]/5 to-transparent rounded-2xl opacity-50" />
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <FaCompass className="text-3xl text-[#0fbbea] mr-4" />
                <h3 className="text-2xl font-semibold text-[#2b49a1] tracking-tight">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                To become Pakistan's premier contracting company, wholeheartedly
                dedicated to delighting our customers. At Projexon, we aim to
                unlock greater financial prosperity while fostering a nurturing
                environment where our employees can thrive, grow, and find
                fulfillment. With unwavering commitment to honesty, reliability,
                and integrity, we embrace cutting-edge technologies and
                industry-leading practices to deliver innovative solutions that
                empower our clients to succeed in today’s dynamic marketplace.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
