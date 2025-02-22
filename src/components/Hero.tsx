import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#1C1C1C] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-16 md:py-32">
        <div className="mt-8 md:mt-0 md:w-1/2">
          <p className="text-orange-400 uppercase text-sm tracking-widest mb-2">
            Empowering your industry with cutting-edge solutions, breathing new
            life into every machine.
          </p>
          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4">
            We’re Building the Foundations
            <br className="hidden md:block" />
            for a Brighter Industrial Future
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-6 max-w-lg">
            Picture a future where every machine anticipates your next
            move—seamlessly adapting, optimizing resources, and propelling your
            operations to new heights.
          </p>
          {/* <a
            href="#get-started"
            className="inline-block bg-[#0fbbea] hover:text-black text-white font-semibold py-3 px-6 rounded shadow transition-colors"
          >
            Let’s Get Started
          </a> */}
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            <img
              src="/assets/hero-bg.jpg"
              alt="automation"
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/40 rotate-45 translate-x-1/2 -translate-y-1/2 rounded-md hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
