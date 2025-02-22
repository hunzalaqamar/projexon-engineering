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
        bg-gradient-to-r
        from-[#ff9f62]
        to-[#fec168]
        py-20
        px-4
        text-black
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          top-[-5rem]
          left-[-5rem]
          w-[200px]
          h-[200px]
          rounded-full
          bg-[#ffffff44]
          blur-3xl
          z-[-1]
        "
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center space-y-4 md:pr-6"
        >
          <p className="text-xl uppercase tracking-wider text-gray-700">
            About Company
          </p>
          <h2 className="text-4xl md:text-3xl font-bold leading-tight">
            Projexon Engineering Solutions
          </h2>
          <p className="text-gray-800 text-sm md:text-base leading-relaxed">
            Projexon Engineering Solutions is a fully qualified engineering firm
            exclusively distributing <strong>MAC Valves</strong>,{" "}
            <strong>PISCO Pneumatic Japan</strong>,{" "}
            <strong>MAK Power Technology Canada</strong>,{" "}
            <strong>VP Instruments</strong>, <strong>PHD Pneumatics</strong>,
            and <strong>Simphoenix China</strong> in Pakistan. We collaborate
            with <strong>MAC Valve USA</strong> to deliver reliable automation
            solutions, tailored to your industry’s needs.
          </p>
          <p>
            At Projexon Engineering, we push the boundaries of innovation,
            ensuring your machinery is not only upgraded but also future-proof.
            With an expert team committed to delivering top-tier solutions on
            time—every time—we help you shape the future you envision.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="
            relative
            flex
            flex-col
            items-center
            justify-center
            md:border-l
            md:border-r
            border-gray-300
            py-4
          "
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            src="/assets/industrial-coil.png"
            alt="Industrial Coil"
            className="
              w-full
              max-w-sm
              object-cover
              h-auto
              rounded
              shadow-lg
              mb-6
            "
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center"
        >
          <div
            className="
              relative
              bg-black
              text-white
              w-full
              max-w-xs
              h-[300px]
              rounded-lg
              overflow-hidden
              flex
              flex-col
              items-center
              justify-center
              shadow-lg
            "
          >
            <div
              className="
                absolute
                top-0
                right-0
                w-[140px]
                h-[140px]
                bg-[#ff7a40]
                rounded-full
                translate-x-1/2
                -translate-y-1/3
              "
            />
            <h3 className="text-5xl font-bold mb-2 z-10">15</h3>
            <p className="text-xl uppercase tracking-wider z-10">Years</p>
            <p className="mt-1 text-base z-10">Experience</p>
          </div>

          <div className="grid grid-cols-3 gap-2 w-full max-w-xs mt-6">
            <motion.img
              src="/assets/valve.png"
              alt="Industrial Valve"
              className="object-cover h-20 w-full rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="/assets/power-equipment.png"
              alt="Power Equipment"
              className="object-cover h-20 w-full rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="/assets/vp-instrument.png"
              alt="VP Instrument"
              className="object-cover h-20 w-full rounded"
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
