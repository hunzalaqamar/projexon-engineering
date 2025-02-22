import React, { useState, useRef } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const hideTimer = useRef<number | null>(null);
  const navigate = useNavigate();

  const toggleNav = () => setNavOpen(!navOpen);

  const handleProductsMouseEnter = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    setProductsOpen(true);
  };

  const handleProductsMouseLeave = () => {
    hideTimer.current = window.setTimeout(() => {
      setProductsOpen(false);
      hideTimer.current = null;
    }, 50);
  };

  const toggleProducts = () => setProductsOpen(!productsOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-sm bg-transparent">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo / Brand */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/assets/peslogo.png"
              alt="Pes Logo"
              className="h-14 w-auto"
            />
            <div className="ml-2 flex flex-col lg:flex-row">
              <span className="text-[#0fbbea] text-xl lg:text-3xl font-bold">
                Projexon
              </span>
              <span className="text-xl text-white lg:text-3xl font-bold lg:ml-1">
                Engineering
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white font-medium">
            <li className="hover:text-[#0fbbea] transition-colors">
              <a href="#home">Home</a>
            </li>
            <li
              className="relative hover:text-[#0fbbea] transition-colors cursor-pointer"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <span>Products</span>
              {productsOpen && (
                <ul className="absolute top-8 left-0 bg-white text-black rounded shadow py-2 w-52">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a
                      href="https://www.macvalves.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MAC Valves
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a
                      href="https://makpower.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MAK Power
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a
                      href="https://www.pisco.co.jp/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PISCO Pneumatics
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a
                      href="https://www.simphoenix.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sympheonix
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a
                      href="https://www.vpinstruments.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VP Instruments
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="hover:text-[#0fbbea] transition-colors">
              <a href="#about-us">About Us</a>
            </li>
            <li className="hover:text-[#0fbbea] transition-colors">
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>

          {/* Right: Let's Talk + Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="#contact-us"
              className="hidden md:inline-block bg-[#0fbbea] text-white px-4 py-2 rounded hover:bg-[#0ea0c8] transition-colors"
            >
              Let's Talk
            </a>
            <a
              href="#contact-us"
              className="md:hidden bg-[#0fbbea] text-white px-3 py-2 rounded hover:bg-[#0ea0c8] transition-colors"
            >
              Let's Talk
            </a>
            <button
              className="text-white text-2xl md:hidden rounded-lg"
              onClick={toggleNav}
              aria-label="Toggle Navigation"
            >
              {navOpen ? <IoCloseSharp /> : <FiMenu />}
            </button>
          </div>
        </nav>

        {navOpen && (
          <div className="md:hidden bg-white text-black">
            <ul className="flex flex-col space-y-4 p-4">
              <li className="hover:text-[#0fbbea] transition-colors">
                <a href="#home" onClick={toggleNav}>
                  Home
                </a>
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full hover:text-[#0fbbea] transition-colors"
                  onClick={toggleProducts}
                >
                  <span>Products</span>
                  <FiChevronDown className="ml-2" />
                </button>
                {productsOpen && (
                  <ul className="mt-2 py-2 w-full">
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea]">
                      <a
                        href="https://www.macvalves.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleNav}
                      >
                        MAC Valves
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea]">
                      <a
                        href="https://makpower.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleNav}
                      >
                        MAK Power
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea]">
                      <a
                        href="https://www.pisco.co.jp/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleNav}
                      >
                        PISCO Pneumatics
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea]">
                      <a
                        href="https://www.simphoenix.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleNav}
                      >
                        Sympheonix
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#0fbbea]">
                      <a
                        href="https://www.vpinstruments.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleNav}
                      >
                        VP Instruments
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="hover:text-[#0fbbea] transition-colors">
                <a href="#about-us" onClick={toggleNav}>
                  About Us
                </a>
              </li>
              <li className="hover:text-[#0fbbea] transition-colors">
                <a href="#contact-us" onClick={toggleNav}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
