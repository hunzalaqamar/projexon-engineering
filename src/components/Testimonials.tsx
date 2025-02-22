import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  feedback: string; // Single paragraph describing their experience
}

const testimonials: Testimonial[] = [
  {
    name: "Daniel Smith",
    role: "Senior Engineer",
    image: "/assets/daniel-smith.jpg",
    feedback:
      "We faced recurring downtime and needed a modern approach to keep our plant on schedule. Projexon introduced high-precision automation parts and managed a rapid installation. Our production soared, and deadlines are now a breeze—truly exceeding our expectations!",
  },
  {
    name: "Maria Johnson",
    role: "Operations Manager",
    image: "/assets/maria-johnson.jpg",
    feedback:
      "Expanding our line meant tackling inefficiencies head-on. Projexon analyzed every bottleneck, recommended advanced upgrades, and guided our team through the transition. The improvements were immediate and impressive, saving us both time and costs in the long run.",
  },
  {
    name: "Samuel Johnson",
    role: "Project Lead",
    image: "/assets/sam-johnson.jpg",
    feedback:
      "Our project demanded specialized valves under a tight deadline. Projexon came through with top-tier parts and a flawless setup process. Their swift response and expertise helped us meet critical goals, securing new opportunities for our company.",
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, role, image, feedback } = testimonials[activeIndex];

  return (
    <section
      className="
    bg-gradient-to-t from-[#9a8478] to-[#1e130c]
    text-white
    min-h-[60vh]
    py-24
    px-4
    mt-20
    flex
    items-center
  "
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-3xl uppercase text-white/80 tracking-wider">
            Public Testimonial
          </p>
          {/* <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Public Feedback About Projexon
          </h2> */}
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
          {/* Image */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
            <img
              src={image}
              alt={name}
              className="h-48 w-48 object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Textual Content */}
          <div className="w-full lg:w-3/4 space-y-4">
            <p className="leading-relaxed text-base md:text-lg font-medium">
              {feedback}
            </p>
            <p className="font-semibold mt-2">
              {name}
              <span className="text-sm text-white/80 ml-2">| {role}</span>
            </p>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={handlePrev}
                className="
                  bg-white/20
                  hover:bg-white/30
                  p-2
                  rounded-full
                  text-white
                  transition-colors
                "
                aria-label="Previous Testimonial"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="
                  bg-white/20
                  hover:bg-white/30
                  p-2
                  rounded-full
                  text-white
                  transition-colors
                "
                aria-label="Next Testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
