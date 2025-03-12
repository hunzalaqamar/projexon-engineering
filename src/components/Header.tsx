import React, { useState, useRef } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const hideTimer = useRef<number | null>(null);
  const navigate = useNavigate();

  const toggleNav = () => setNavOpen(!navOpen);

  const handleMouseEnter = (dropdown: string) => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = (dropdown: string) => {
    hideTimer.current = window.setTimeout(() => {
      if (activeDropdown === dropdown) {
        setActiveDropdown(null);
      }
      hideTimer.current = null;
    }, 100);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleNavigation = (path: string) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      navigate(path);
      if (navOpen) {
        setNavOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 ">
      <div className="bg-white  border-2 border-gray-300 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
          {/* Logo / Brand */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <img
              src="/assets/peslogonobg.png"
              alt="Pes Logo"
              className="h-10 lg:h-14 w-auto"
            />
            <div className="ml-2 flex flex-row ">
              <span className="text-[#26a9e1] text-lg lg:text-3xl font-bold leading-tight tracking-tight ">
                Projexon
              </span>
              <span className="text-lg ml-1 text-black lg:text-3xl font-bold leading-tight tracking-tight ">
                Engineering
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex space-x-6 text-black font-medium">
            <li
              className="hover:text-[#0fbbea] transition-colors cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              <span>Home</span>
            </li>
            <li
              className="relative hover:text-[#0fbbea] transition-colors cursor-pointer"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={() => handleMouseLeave("products")}
            >
              <span>Products</span>
              {activeDropdown === "products" && (
                <ul className="absolute top-8 left-0 bg-white text-black rounded shadow py-2 w-52">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      handleNavigation("https://www.macvalves.com/")
                    }
                  >
                    MAC Valves
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigation("https://makpower.com/")}
                  >
                    MAK Power
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      handleNavigation("https://www.pisco.co.jp/en/")
                    }
                  >
                    PISCO Pneumatics
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      handleNavigation("https://www.simphoenix.com/")
                    }
                  >
                    Sympheonix
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      handleNavigation("https://www.vpinstruments.com/")
                    }
                  >
                    VP Instruments
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      handleNavigation("https://www.siemens.com/global/en.html")
                    }
                  >
                    Siemens PLC Card
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      handleNavigation("https://www.siemens.com/global/en.html")
                    }
                  >
                    Servo Motor/Drive
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigation("https://www.ab.com/")}
                  >
                    Allen Bradley
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative hover:text-[#0fbbea] transition-colors cursor-pointer"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={() => handleMouseLeave("services")}
            >
              <span>Services</span>
              {activeDropdown === "services" && (
                <ul className="absolute top-8 left-0 bg-white text-black rounded shadow py-2 w-52">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigation("/engineering-consultancy")}
                  >
                    Engineering Consultancy
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigation("/mechanical-fabrication")}
                  >
                    Mechanical Fabrication
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      handleNavigation("/installation-and-commissioning")
                    }
                  >
                    Installation & Commissioning
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      handleNavigation("/plc-software-programming")
                    }
                  >
                    PLC Software Programming
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigation("/repair-electronics")}
                  >
                    Repair Electronics
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigation("/engineering-services")}
                  >
                    Engineering Services
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative hover:text-[#0fbbea] transition-colors cursor-pointer"
              onMouseEnter={() => handleMouseEnter("careers")}
              onMouseLeave={() => handleMouseLeave("careers")}
            >
              <span>Careers</span>
              {activeDropdown === "careers" && (
                <ul className="absolute top-8 left-0 bg-white text-black rounded shadow py-2 w-52">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigation("/apply-for-internship")}
                  >
                    Apply for Internship
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative hover:text-[#0fbbea] transition-colors cursor-pointer"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={() => handleMouseLeave("industries")}
            >
              <span>Industries</span>
              {activeDropdown === "industries" && (
                <ul className="absolute top-8 left-0 bg-white text-black rounded shadow py-2 w-52">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigation("/oil-and-gas")}
                  >
                    Oil & Gas
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigation("/textile")}
                  >
                    Textile
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigation("/food-and-beverage")}
                  >
                    Food & Beverage
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigation("/pharmaceutical")}
                  >
                    Pharmaceutical
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigation("/chemical-industries")}
                  >
                    Chemical Industries
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavigation("/power-industries")}
                  >
                    Power Industries
                  </li>
                </ul>
              )}
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <button
              className="hidden md:inline-block bg-[#0fbbea] text-black px-4 py-2 rounded hover:bg-[#0ea0c8] transition-colors cursor-pointer"
              onClick={() => handleNavigation("/contact-us")}
            >
              Let's Talk
            </button>
            <button
              className="text-black text-2xl xl:hidden rounded-lg"
              onClick={toggleNav}
              aria-label="Toggle Navigation"
            >
              {navOpen ? <IoCloseSharp /> : <FiMenu />}
            </button>
          </div>
        </nav>

        {navOpen && (
          <div className="xl:hidden bg-white text-black">
            <ul className="flex flex-col space-y-4 p-4">
              <li
                className="hover:text-[#0fbbea] transition-colors cursor-pointer"
                onClick={() => handleNavigation("/")}
              >
                <span>Home</span>
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full hover:text-[#0fbbea] transition-colors"
                  onClick={() => toggleDropdown("products")}
                >
                  <span>Products</span>
                  <FiChevronDown className="ml-2" />
                </button>
                {activeDropdown === "products" && (
                  <ul className="mt-2 py-2 w-full">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() =>
                        handleNavigation("https://www.macvalves.com/")
                      }
                    >
                      MAC Valves
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() => handleNavigation("https://makpower.com/")}
                    >
                      MAK Power
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() =>
                        handleNavigation("https://www.pisco.co.jp/en/")
                      }
                    >
                      PISCO Pneumatics
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() =>
                        handleNavigation("https://www.simphoenix.com/")
                      }
                    >
                      Sympheonix
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() =>
                        handleNavigation("https://www.vpinstruments.com/")
                      }
                    >
                      VP Instruments
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() =>
                        handleNavigation(
                          "https://www.siemens.com/global/en.html"
                        )
                      }
                    >
                      Siemens PLC Card
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() =>
                        handleNavigation(
                          "https://www.siemens.com/global/en.html"
                        )
                      }
                    >
                      Servo Motor/Drive
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() => handleNavigation("https://www.ab.com/")}
                    >
                      Allen Bradley
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full hover:text-[#0fbbea] transition-colors"
                  onClick={() => toggleDropdown("services")}
                >
                  <span>Services</span>
                  <FiChevronDown className="ml-2" />
                </button>
                {activeDropdown === "services" && (
                  <ul className="mt-2 py-2 w-full">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() =>
                        handleNavigation("/engineering-consultancy")
                      }
                    >
                      Engineering Consultancy
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() =>
                        handleNavigation("/mechanical-fabrication")
                      }
                    >
                      Mechanical Fabrication
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() =>
                        handleNavigation("/installation-and-commissioning")
                      }
                    >
                      Installation & Commissioning
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() =>
                        handleNavigation("/plc-software-programming")
                      }
                    >
                      PLC Software Programming
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() => handleNavigation("/repair-electronics")}
                    >
                      Repair Electronics
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() => handleNavigation("/engineering-services")}
                    >
                      Engineering Services
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full hover:text-[#0fbbea] transition-colors"
                  onClick={() => toggleDropdown("careers")}
                >
                  <span>Careers</span>
                  <FiChevronDown className="ml-2" />
                </button>
                {activeDropdown === "careers" && (
                  <ul className="mt-2 py-2 w-full">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() => handleNavigation("/apply-for-internship")}
                    >
                      Apply for Internship
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full hover:text-[#0fbbea] transition-colors"
                  onClick={() => toggleDropdown("industries")}
                >
                  <span>Industries</span>
                  <FiChevronDown className="ml-2" />
                </button>
                {activeDropdown === "industries" && (
                  <ul className="mt-2 py-2 w-full">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() => handleNavigation("/oil-and-gas")}
                    >
                      Oil & Gas
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() => handleNavigation("/textile")}
                    >
                      Textile
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() => handleNavigation("/food-and-beverage")}
                    >
                      Food & Beverage
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() => handleNavigation("/pharmaceutical")}
                    >
                      Pharmaceutical
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() => handleNavigation("/chemical-industries")}
                    >
                      Chemical Industries
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea] cursor-pointer"
                      onClick={() => handleNavigation("/power-industries")}
                    >
                      Power Industries
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
