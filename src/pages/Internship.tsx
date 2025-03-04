import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For animations
import emailjs from "@emailjs/browser"; // For EmailJS

const Internship: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    cnic: "",
    address: "",
    internshipDepartment: "",
    gender: "",
    cvLink: "", // Matches {{cvLink}} in template
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isChecked) {
      setError("Please confirm that you accept terms and conditions.");
      return;
    }
    if (!formData.cvLink) {
      setError("Please provide a Google Drive link for your CV.");
      return;
    }
    const isValidGoogleDriveLink = formData.cvLink.includes("drive.google.com");
    if (!isValidGoogleDriveLink) {
      setError("Please provide a valid Google Drive link.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_APP_EMAILJS_INTERNSHIP_TEMPLATE_ID!,
        {
          from_name: formData.name, // Matches {{from_name}} - applicant's name
          to_name: "Projexon Team", // Matches {{to_name}} - hardcoded recipient name (adjust as needed)
          name: formData.name, // Matches {{name}}
          email: formData.email, // Matches {{email}}
          mobile: formData.mobile, // Matches {{mobile}}
          cnic: formData.cnic, // Matches {{cnic}}
          address: formData.address || "Not provided", // Matches {{address}}
          internshipDepartment: formData.internshipDepartment, // Matches {{internshipDepartment}}
          gender: formData.gender, // Matches {{gender}}
          cvLink: formData.cvLink, // Matches {{cvLink}}
          to_email: "internships@projexon.com", // Replace with actual company email
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY!
      );

      if (result.text === "OK") {
        setSuccess("Application submitted successfully! We'll review it soon.");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          cnic: "",
          address: "",
          internshipDepartment: "",
          gender: "",
          cvLink: "",
        });
        navigate("/");
      } else {
        throw new Error("Failed to submit the application. Please try again.");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit the application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/internshipbg.jpg')`,
          zIndex: -1,
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-30"
          style={{ opacity: 0.5 }}
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 lg:mt-28">
          {/* Left Card: General Internship Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800 h-fit"
          >
            <h2 className="text-4xl font-bold text-[#2b49a1] mb-6 tracking-tight">
              Unleash Your Potential
              <br className="hidden md:block" />
              with Projexon Internships
            </h2>
            <blockquote className="text-lg italic text-gray-600 mb-4">
              “Join Projexon Engineering to transform industries with innovation
              and precision—your career starts here.”
            </blockquote>
            <p className="text-sm md:text-base text-gray-700">
              During your internship, you’ll:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mt-2 space-y-2">
              <li>Work on cutting-edge automation projects.</li>
              <li>
                Gain hands-on experience with MAC Valves and PISCO Pneumatics.
              </li>
              <li>
                Learn industry-best practices for sustainable engineering.
              </li>
              <li>Collaborate with experts to solve real-world challenges.</li>
            </ul>
          </motion.div>

          {/* Right Card: Internship Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800"
          >
            <h1 className="text-3xl font-bold text-[#2b49a1] mb-6 text-center">
              Internship Application
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Applicant Information Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-[#0fbbea] focus:border-[#0fbbea] transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-[#0fbbea] focus:border-[#0fbbea] transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-[#0fbbea] focus:border-[#0fbbea] transition-all"
                    required
                    placeholder="03xxxxxxxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Internship Department
                  </label>
                  <input
                    type="text"
                    name="internshipDepartment"
                    value={formData.internshipDepartment}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-[#0fbbea] focus:border-[#0fbbea] transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    C.N.I.C
                  </label>
                  <input
                    type="text"
                    name="cnic"
                    value={formData.cnic}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-[#0fbbea] focus:border-[#0fbbea] transition-all"
                    required
                    placeholder="XXXX-XXXXXXX-X"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-[#0fbbea] focus:border-[#0fbbea] transition-all"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Address (Optional)
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-[#0fbbea] focus:border-[#0fbbea] transition-all h-24"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Google Drive CV Link
                </label>
                <p className="text-xs text-gray-500 mt-1 mb-2">
                  Please provide a publicly accessible Google Drive link to your
                  CV (PDF format).
                </p>
                <input
                  type="url"
                  name="cvLink"
                  value={formData.cvLink}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-[#0fbbea] focus:border-[#0fbbea] transition-all"
                  placeholder="https://drive.google.com/file/d/..."
                  required
                />
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 text-[#0fbbea] border-gray-300 rounded focus:ring-[#0fbbea]"
                />
                <label className="text-sm text-gray-700">
                  I accept the terms and conditions
                </label>
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center mt-2">{error}</p>
              )}
              {success && (
                <p className="text-green-500 text-sm text-center mt-2">
                  {success}
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2b49a1] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#0fbbea] transition-colors mt-6 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
