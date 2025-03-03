import { useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const ContactForm: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-[#1B3B47] text-white py-16 px-4 min-h-[100px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Let’s talk on something <br className="hidden md:block" />
              <span className="text-[#4bc0c8]">great</span> together
            </h2>
            <a
              href="mailto:info@projexon.pk"
              className="text-sm md:text-base cursor-pointer"
            >
              info@projexon.pk
            </a>
            <p className="text-sm md:text-base mt-3">+923044122703</p>
            <p className="text-sm md:text-base">
              720-G4, Johar Town, Lahore, Pakistan
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Jhon Smith"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#4bc0c8] focus:border-[#4bc0c8]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@gmail.com"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#4bc0c8] focus:border-[#4bc0c8]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us more..."
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#4bc0c8] focus:border-[#4bc0c8]"
              ></textarea>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                type="submit"
                className="
      inline-flex 
      items-center 
      justify-center 
      border 
      border-[#4bc0c8] 
      text-[#4bc0c8] 
      font-medium 
      py-2 
      px-4 
      rounded 
      shadow-md 
      transition-colors 
      hover:bg-[#4bc0c8] 
      hover:text-white
      cursor-pointer
    "
              >
                <FaPaperPlane className="mr-2" />
                Send message
              </button>

              {/* WhatsApp (Green Outline) */}
              <a
                href="https://wa.me/923044122703"
                target="_blank"
                rel="noopener noreferrer"
                className="
      inline-flex 
      items-center 
      justify-center 
      border 
      border-green-500 
      text-green-500 
      font-medium 
      py-2 
      px-4 
      rounded 
      shadow-md 
      transition-colors 
      hover:bg-green-500 
      hover:text-white
    "
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp
              </a>

              <a
                href="tel:+923044122703"
                className="
      inline-flex 
      items-center 
      justify-center 
      border 
      border-red-500 
      text-red-500 
      font-medium 
      py-2 
      px-4 
      rounded 
      shadow-md 
      transition-colors 
      hover:bg-red-500 
      hover:text-white
    "
              >
                <FaPhoneAlt className="mr-2" />
                Call Us
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
