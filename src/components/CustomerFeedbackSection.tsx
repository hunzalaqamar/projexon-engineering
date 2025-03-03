import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Mr. Naveed Bashir",
    title: "Maintenance Manager, Dawn Bread",
    logo: "/assets/dawnbread.png", // Replace with Dawn Bread logo or import
    quote:
      "I would like to compliment Projexon for providing excellent Engineering Solutions / Services to us. Projexon has always facilitated us by providing innovative solutions for our complex needs as and when required. I appreciate the timely completion and the excellent workmanship of Team Projexon.",
    companyTagline:
      "We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better.",
  },
  {
    name: "Mr. Mueed Alam",
    title: "Maintenance Manager, Tapal Tea (Pvt.) Ltd.",
    logo: "/assets/tapaltea.png", // Replace with Tapal Tea logo or import
    quote:
      "It’s a pleasure to work with a company who know the meaning of efficiency and effectiveness. Projexon has served us in diverse areas from Power Generation to E&M Contracting & Services. PES staff has consistently made an extra effort to assist us in completing our projects on time. We have always been able to rely on your flexibility and courteous service of Projexon.",
    companyTagline: "Excellence in every interaction, every time.",
  },
  // Add more testimonials as needed
  {
    name: "Mr. G.R Shahid",
    title: "Procurement Manager, Nippon Paint Pakistan (Pvt.) Ltd.",
    logo: "/assets/nipponpaint.png", // Replace with Nippon Paint logo or import
    quote:
      "We sincerely appreciate the friendly business relationship with Projexon since long. Projexon has been our first choice for Diesel Genset Services, E&M Contracting & Switchgear needs. We wish to retain our cordial relations with Projexon as our premier services partner.",
    companyTagline:
      "We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better.",
  },
];

const CustomerFeedbackSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Customer Feedback
        </h2>
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-100 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.name} logo`}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-green-500"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6 border-l-4 border-green-500 pl-4 text-lg">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm text-gray-500 font-light">
                  {testimonial.companyTagline}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedbackSection;
