import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  "/assets/unilever.png",
  "/assets/mezanbev.png",
  "/assets/pmi.png",
  "/assets/ghani.png",
  "/assets/fcep.png",
  "/assets/pabc.png",
  "/assets/gadoon.png",
  "/assets/sg.png",
  "/assets/lottee.png",
  "/assets/cn.svg",
  "/assets/cnp.png",
  "/assets/mf.png",
  "/assets/hbpep.png",
  "/assets/ontex.png",
  "/assets/haleeb.png",
  "/assets/treet.png",
  "/assets/fc.png",
  "/assets/pj.png",
];

const EsteemedClientsSection: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
              <div key={index} className="p-2 flex justify-center items-center">
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-16 w-auto object-contain md:h-20 lg:h-24"
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
