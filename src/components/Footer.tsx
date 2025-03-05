import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };

  return (
    <footer className="relative bg-black text-white py-16 px-4 overflow-hidden">
      {/* Accent Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-2xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500 rounded-full opacity-20 blur-2xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
          {/* Branding & Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/peslogonobg.png"
                alt="Projexon Engineering"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">Projexon Engineering</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              720-G4, Johar Town Lahore, Pakistan
              <br />
              <br />
              <a
                href="mailto:info@projexon.pk"
                className="text-sm md:text-base cursor-pointer"
              >
                info@projexon.pk
              </a>{" "}
              <br />
              <a
                href="tel:+923044122703"
                className="text-sm md:text-base cursor-pointer"
              >
                Ph: +923044122703
              </a>
            </p>
          </div>
          {/* Main Menu in a Row */}
          <div className="bg-black py-8">
            <div className="container mx-auto px-4">
              <h3 className="text-sm font-semibold uppercase mb-6 text-gray-200 text-center md:text-left">
                Main Menu
              </h3>
              <ul className="grid grid-cols-1 gap-8 md:grid-cols-5 text-gray-300 text-sm md:text-base">
                {/* Home */}
                <li className="flex flex-col space-y-2">
                  <span
                    className="hover:text-white transition-colors cursor-pointer font-medium"
                    onClick={() => handleNavigation("/")}
                  >
                    Home
                  </span>
                </li>

                {/* Products */}
                <li className="flex flex-col space-y-2">
                  <span className="hover:text-white transition-colors cursor-pointer font-medium">
                    Products
                  </span>
                  <ul className="text-gray-400 space-y-2">
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          handleNavigation("https://www.macvalves.com/")
                        }
                      >
                        MAC Valves
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          handleNavigation("https://makpower.com/")
                        }
                      >
                        MAK Power
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          handleNavigation("https://www.pisco.co.jp/en/")
                        }
                      >
                        PISCO Pneumatics
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          handleNavigation("https://www.simphoenix.com/")
                        }
                      >
                        Sympheonix
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          handleNavigation("https://www.vpinstruments.com/")
                        }
                      >
                        VP Instruments
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          handleNavigation(
                            "https://www.siemens.com/global/en.html"
                          )
                        }
                      >
                        Siemens PLC Card
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          handleNavigation(
                            "https://www.siemens.com/global/en.html"
                          )
                        }
                      >
                        Servo Motor/Drive
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() => handleNavigation("https://www.ab.com/")}
                      >
                        Allen Bradley
                      </span>
                    </li>
                  </ul>
                </li>

                {/* Services */}
                <li className="flex flex-col space-y-2">
                  <span
                    className="hover:text-white transition-colors cursor-pointer font-medium"
                    onClick={() => handleNavigation("#services")}
                  >
                    Services
                  </span>
                  <ul className="text-gray-400 space-y-2">
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          handleNavigation("/engineering-consultancy")
                        }
                      >
                        Engineering Consultancy
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          handleNavigation("/mechanical-fabrication")
                        }
                      >
                        Mechanical Fabrication
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          handleNavigation("/installation-and-commissioning")
                        }
                      >
                        Installation & Commissioning
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          handleNavigation("/plc-software-programming")
                        }
                      >
                        PLC Software Programming
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() => handleNavigation("/repair-electronics")}
                      >
                        Repair Electronics
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          handleNavigation("/engineering-services")
                        }
                      >
                        Engineering Services
                      </span>
                    </li>
                  </ul>
                </li>

                {/* Careers */}
                <li className="flex flex-col space-y-2">
                  <span className="hover:text-white transition-colors cursor-pointer font-medium">
                    Careers
                  </span>
                  <ul className="text-gray-400 space-y-2">
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() =>
                          handleNavigation("/apply-for-internship")
                        }
                      >
                        Apply for Internship
                      </span>
                    </li>
                  </ul>
                </li>

                {/* Industries */}
                <li className="flex flex-col space-y-2">
                  <span className="hover:text-white transition-colors cursor-pointer font-medium">
                    Industries
                  </span>
                  <ul className="text-gray-400 space-y-2">
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() => handleNavigation("/oil-and-gas")}
                      >
                        Oil & Gas
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() => handleNavigation("/textile")}
                      >
                        Textile
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() => handleNavigation("/food-and-beverage")}
                      >
                        Food & Beverage
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() => handleNavigation("/pharmaceutical")}
                      >
                        Pharmaceutical
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() => handleNavigation("/chemical-industries")}
                      >
                        Chemical Industries
                      </span>
                    </li>
                    <li>
                      <span
                        className="hover:text-white transition-colors cursor-pointer"
                        onClick={() => handleNavigation("/power-industries")}
                      >
                        Power Industries
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 border-t border-gray-700 pt-4">
          <p>© 2025 Projexon Engineering. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              onClick={() => navigate("/privacy-policy")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              onClick={() => navigate("/terms-of-use")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use
            </a>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              onClick={() => navigate("#")}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <FaFacebookF />
            </a>
            <a
              onClick={() =>
                window.open("https://wa.me/+923004100604", "_blank")
              }
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
