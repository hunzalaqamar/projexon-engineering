// src/components/EsteemedClientsSection.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Manually add your client logos here (replace with actual URLs or local image paths)
const clientLogos = [
  "/assets/dawnbread.png",
  "/assets/nipponpaint.png",
  "/assets/tapaltea.png",
  "/assets/goplogo.png",
  "/assets/cocacola.png",
  "/assets/pepsico.png",
  "/assets/sbp.png",
  "/assets/gloriajeans.png",
  "/assets/rajasahib.png",
  "/assets/indushospital.png",
];

const EsteemedClientsSection: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Slower speed for a smooth slide
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous slide
    cssEase: "linear", // Smooth, continuous motion
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Our Esteemed Clients
        </h2>
        <div className="border-b border-green-500 w-16 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          PES is a maintenance/service provider for major leading multinational
          organizations in the field of Energy, Retail, Renewables &
          Electrification Business.
        </p>
        <div className="overflow-hidden">
          <Slider {...settings}>
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="px-2 flex justify-center items-center"
              >
                {" "}
                {/* Reduced from px-4 to px-2 */}
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="max-h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default EsteemedClientsSection;
