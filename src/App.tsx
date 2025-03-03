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
import InternshipForm from "./components/InternshipForm";
import OilAndGas from "./pages/OilAndGas";
import Textile from "./pages/Textile";
import FoodAndBeverage from "./pages/FoodAndBeverage";
import Pharmaceutical from "./pages/Pharmaceutical";
import ChemicalIndustries from "./pages/ChemicalIndustries";
import PowerIndustries from "./pages/PowerIndustries";
import ContactUs from "./pages/ContactUs";

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
          <Route path="/apply-for-internship" element={<InternshipForm />} />
          <Route path="/oil-and-gas" element={<OilAndGas />} />
          <Route path="/textile" element={<Textile />} />
          <Route path="/food-and-beverage" element={<FoodAndBeverage />} />
          <Route path="/pharmaceutical" element={<Pharmaceutical />} />
          <Route path="/chemical-industries" element={<ChemicalIndustries />} />
          <Route path="/power-industries" element={<PowerIndustries />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </motion.div>

      <Footer />
    </>
  );
}

export default App;
