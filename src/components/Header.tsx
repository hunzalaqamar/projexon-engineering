import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Menu icon (install react-icons if needed)
import { IoCloseSharp } from "react-icons/io5"; // Close icon

interface HeaderProps {
  // If you want to pass props (e.g., logo, nav links) you can define them here
}

const Header: React.FC<HeaderProps> = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleProducts = () => setProductsOpen(!productsOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-black">
      <div className="backdrop-blur-sm bg-transparent">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-black flex flex-row justify-center items-center">
            <img
              src="/assets/peslogo.png"
              alt="Pes Logo"
              className="h-14 w-auto"
            />{" "}
            <span className="text-[#0fbbea] text-xl lg:text-3xl">Projexon</span>
            <span className="text-xl lg:text-3xl ml-1">Engineering</span>
          </div>

          <ul className="hidden md:flex space-x-6 text-black font-medium">
            <li className="hover:text-[#0fbbea] transition-colors">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-[#0fbbea] transition-colors">
              <a href="#about-us">About Us</a>
            </li>
            <li className="hover:text-[#0fbbea] transition-colors">
              <a href="#contact-us">Contact Us</a>
            </li>
            <li
              className="relative hover:text-[#0fbbea] transition-colors cursor-pointer"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <span>Products</span>
              {productsOpen && (
                <ul className="absolute top-8 left-0 bg-black text-black rounded shadow py-2 w-40">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#product1">Product 1</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#product2">Product 2</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="#product3">Product 3</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          <button
            className="text-black text-2xl md:hidden"
            onClick={toggleNav}
            aria-label="Toggle Navigation"
          >
            {navOpen ? <IoCloseSharp /> : <FiMenu />}
          </button>
        </nav>

        {navOpen && (
          <div className="md:hidden bg-white text-black">
            <ul className="flex flex-col space-y-4 p-4">
              <li className="hover:text-[#0fbbea] transition-colors">
                <a href="#home" onClick={toggleNav}>
                  Home
                </a>
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
              <li>
                <button
                  className="flex items-center space-x-2 hover:text-[#0fbbea] transition-colors"
                  onClick={toggleProducts}
                >
                  <span>Products</span>
                </button>
                {productsOpen && (
                  <ul className="mt-2 ml-4 space-y-2">
                    <li className="hover:text-[#0fbbea] transition-colors">
                      <a href="#product1" onClick={toggleNav}>
                        Product 1
                      </a>
                    </li>
                    <li className="hover:text-[#0fbbea] transition-colors">
                      <a href="#product2" onClick={toggleNav}>
                        Product 2
                      </a>
                    </li>
                    <li className="hover:text-[#0fbbea] transition-colors">
                      <a href="#product3" onClick={toggleNav}>
                        Product 3
                      </a>
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
