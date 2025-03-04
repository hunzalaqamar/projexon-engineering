import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // For animations
import { FaWhatsapp, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser"; // For EmailJS

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: import.meta.env.VITE_APP_EMAILJS_USER_ID!,
          message: formData.message,
          to_email: formData.email,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY!
      );

      if (result.text === "OK") {
        setSuccess("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        throw new Error("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <header
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/contactusbg.jpg')`,
          opacity: 0.9,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:mt-28">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800"
            >
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                  Let’s Collaborate on Something
                  <br className="hidden md:block" />
                  <span className="text-[#0fbbea] ml-1">Great</span> Together
                </h2>
                <p className="text-sm md:text-base text-gray-300">
                  Reach out to explore how Projexon Engineering can elevate your
                  industry.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:info@projexon.pk"
                  className="text-sm md:text-base cursor-pointer hover:text-[#0fbbea] transition-colors"
                >
                  info@projexon.pk
                </a>
                <p className="text-sm md:text-base hover:text-[#0fbbea] transition-colors cursor-pointer">
                  +923044122703
                </p>
                <p className="text-sm md:text-base">
                  720-G4, Johar Town, Lahore, Pakistan
                </p>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-[#0fbbea] focus:border-[#0fbbea] transition-all"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@domain.com"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-[#0fbbea] focus:border-[#0fbbea] transition-all"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us how we can assist you..."
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-[#0fbbea] focus:border-[#0fbbea] transition-all"
                    required
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center border border-[#0fbbea] text-[#0fbbea] font-medium py-3 px-6 rounded-lg shadow-md transition-colors hover:bg-[#0fbbea] hover:text-white ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <FaPaperPlane className="mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/923044122703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-green-500 text-green-500 font-medium py-3 px-6 rounded-lg shadow-md transition-colors hover:bg-green-500 hover:text-white"
                  >
                    <FaWhatsapp className="mr-2" />
                    WhatsApp
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:+923044122703"
                    className="inline-flex items-center justify-center border border-red-500 text-red-500 font-medium py-3 px-6 rounded-lg shadow-md transition-colors hover:bg-red-500 hover:text-white"
                  >
                    <FaPhoneAlt className="mr-2" />
                    Call Us
                  </motion.a>
                </div>

                {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                {success && (
                  <p className="text-green-500 text-sm mt-4">{success}</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default ContactUs;
