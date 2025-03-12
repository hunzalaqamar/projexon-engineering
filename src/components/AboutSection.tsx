import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AboutSection: React.FC = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="
        relative
        w-full
        bg-gradient-to-b
        from-[#f9fafb] // Off-white
        to-[#e6f0fa] // Light blue
        py-24
        px-6
        text-gray-800
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          top-[-8rem]
          left-[-8rem]
          w-[250px]
          h-[250px]
          rounded-full
          bg-[#0fbbea] // Soft teal accent
          opacity-10
          blur-2xl
          z-[-1]
        "
      />
      <div
        className="
          absolute
          bottom-[-8rem]
          right-[-8rem]
          w-[250px]
          h-[250px]
          rounded-full
          bg-[#0fbbea]
          opacity-10
          blur-2xl
          z-[-1]
        "
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-lg uppercase tracking-widest text-[#0fbbea]">
            About Company
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Projexon Engineering Solutions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-prose">
            Projexon Engineering Solutions is a fully qualified engineering firm
            exclusively distributing{" "}
            <strong className="text-gray-800">MAC Valves</strong>,{" "}
            <strong className="text-gray-800">PISCO Pneumatic Japan</strong>,{" "}
            <strong className="text-gray-800">
              MAK Power Technology Canada
            </strong>
            , <strong className="text-gray-800">VP Instruments</strong>,{" "}
            <strong className="text-gray-800">PHD Pneumatics</strong>, and{" "}
            <strong className="text-gray-800">Simphoenix China</strong> in
            Pakistan. We collaborate with{" "}
            <strong className="text-gray-800">MAC Valve USA</strong> to deliver
            reliable automation solutions, tailored to your industry’s needs.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-prose">
            At Projexon Engineering, we push the boundaries of innovation,
            ensuring your machinery is not only upgraded but also future-proof.
            With an expert team committed to delivering top-tier solutions on
            time—every time—we help you shape the future you envision.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center space-y-8"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            src="/assets/industrial-coil.png" // Replace with your image path
            alt="Engineering Solution"
            className="
              w-full
              max-w-md
              object-cover
              rounded-xl
              shadow-lg
              border
              border-[#4a9a9a]/20
            "
          />
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="
              relative
              bg-white/80
              text-gray-800
              w-full
              max-w-md
              h-[200px]
              rounded-xl
              overflow-hidden
              flex
              flex-col
              items-center
              justify-center
              shadow-xl
              backdrop-blur-sm
            "
          >
            <div
              className="
                absolute
                top-0
                right-0
                w-[120px]
                h-[120px]
                bg-[#4a9a9a]/20
                rounded-full
                translate-x-1/2
                -translate-y-1/3
              "
            />
            <h3 className="text-5xl font-bold mb-2 z-10 text-[#4a9a9a]">15</h3>
            <p className="text-xl uppercase tracking-widest z-10">Years</p>
            <p className="mt-2 text-lg z-10">Experience</p>
          </motion.div>
          <div className="grid grid-cols-3 gap-4 w-full max-w-md">
            <motion.img
              src="/assets/valve.png" // Replace with your image path
              alt="Industrial Valve"
              className="object-cover h-20 w-full rounded-xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="/assets/power-equipment.png" // Replace with your image path
              alt="Power Equipment"
              className="object-cover h-20 w-full rounded-xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="/assets/vp-instrument.png" // Replace with your image path
              alt="VP Instrument"
              className="object-cover h-20 w-full rounded-xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
