import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const timelineData = [
  {
    year: "1980",
    title: "Foundation",
    description:
      "The early beginnings of our company, focusing on innovative engineering solutions.",
  },
  {
    year: "1984",
    title: "Country-Level Expansion",
    description:
      "Opened multiple offices worldwide, establishing a global footprint in industrial services.",
  },
  {
    year: "1989",
    title: "Breakthrough Technology",
    description:
      "Launched a series of advanced automation products, revolutionizing the industry.",
  },
  {
    year: "2003",
    title: "Sustainable Initiatives",
    description:
      "Adopted eco-friendly processes, emphasizing long-term sustainability and responsible engineering.",
  },
  {
    year: "2023",
    title: "Modern Integration",
    description:
      "Integrated AI-driven solutions for next-level efficiency, cementing our position as an industry leader.",
  },
];

const stats = [
  {
    icon: "👤", // You can replace with SVG or image for the user icon
    number: 100,
    label: "Happy Clients",
    start: 0,
  },
  {
    icon: "✅", // You can replace with SVG or image for the checkmark
    number: 100,
    label: "Successful Projects",
    start: 0,
  },
  {
    icon: "👥", // You can replace with SVG or image for the team icon
    number: 30,
    label: "Team Members",
    start: 0,
  },
  {
    icon: "⏱️", // You can replace with SVG or image for the clock/hour icon
    number: 2880,
    label: "Working hrs",
    start: 0,
  },
];

const WhyDifferent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const handleMilestoneClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    // Trigger animation when the component is in view (simplified for this example)
    const timer = setTimeout(() => setIsVisible(true), 500); // Delay to simulate scroll or load
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="w-full bg-white py-16 px-4 text-black">
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-4">
              <p className="text-sm uppercase text-gray-500 tracking-wider">
                Why Us
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                Why We Are Different
              </h2>
              <p className="font-semibold text-gray-700">
                Trust. Diligence. Sustainability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Projexon Engineering Solutions is currently working with a
                Pakistan’s leading and reputable national and multinational
                organizations. We at Projexon Engineering Solutions believes in
                long term professional future relationship based upon quality,
                commitment, dedication and use of contemporary state of the art
                technology expedient for both client and Projexon Engineering
                Solutions.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/assets/why-us-worker.jpg"
                alt="Workers in factory"
                className="object-cover w-full max-w-xl rounded shadow-lg"
              />
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mt-12 border-t border-gray-300 pt-8">
            <h3 className="text-center text-xl font-semibold mb-8">
              Our Journey
            </h3>

            {/* Timeline Container */}
            <div className="relative flex justify-between items-center w-full overflow-hidden px-4 sm:px-8">
              {/* Horizontal line */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 -z-10" />

              {/* Milestones */}
              {timelineData.map((milestone, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={milestone.year}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => handleMilestoneClick(index)}
                  >
                    {/* Circle */}
                    <div
                      className={`w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center transition-colors
                      ${
                        isActive
                          ? "bg-orange-500 text-white"
                          : "bg-white text-orange-500"
                      }
                    `}
                    >
                      {/* Could put an icon or check here if desired */}
                    </div>
                    {/* Year Label */}
                    <p
                      className={`mt-2 text-sm ${
                        isActive ? "font-bold text-orange-600" : "text-gray-700"
                      }`}
                    >
                      {milestone.year}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Active Milestone Content */}
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-gray-900">
                {timelineData[activeIndex].title}
              </p>
              <p className="text-sm text-gray-600 max-w-xl mx-auto mt-2">
                {timelineData[activeIndex].description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <div className="border-b border-green-500 w-16 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            In numbers, PES's happy clients, successful projects, team members &
            working progress.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
              >
                <span className="text-4xl mb-4">{stat.icon}</span>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {isVisible && (
                    <CountUp
                      start={stat.start}
                      end={stat.number}
                      duration={2.5} // Animation duration in seconds
                      separator=","
                      decimals={0}
                    />
                  )}
                  +
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyDifferent;
