import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
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
                src="/assets/peslogo.png"
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
          <div>
            <h3 className="text-sm font-semibold uppercase mb-3 text-gray-200">
              Main Menu
            </h3>
            <ul className="flex space-x-6 text-sm text-gray-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Our Projects
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 border-t border-gray-700 pt-4">
          <p>© 2025 Projexon Engineering. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="/terms-of-use"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </a>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/+923004100604"
              className="text-gray-400 hover:text-white transition-colors"
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
