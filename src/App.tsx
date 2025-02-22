import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </motion.div>

      <Footer />
    </>
  );
}

export default App;
