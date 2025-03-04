import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import OilAndGas from "./pages/OilAndGas";
import Textile from "./pages/Textile";
import FoodAndBeverage from "./pages/FoodAndBeverage";
import Pharmaceutical from "./pages/Pharmaceutical";
import ChemicalIndustries from "./pages/ChemicalIndustries";
import PowerIndustries from "./pages/PowerIndustries";
import ContactUs from "./pages/ContactUs";
import EngineeringConsultancy from "./pages/EngineeringConsultancy";
import MechanicalFabrication from "./pages/MechanicalFabrication";
import InstallationAndCommissioning from "./pages/InstallationAndCommissioning";
import PlcSoftwareProgramming from "./pages/PlcSoftwareProgramming";
import RepairElectronics from "./pages/RepairElectronics";
import EngineeringServices from "./pages/EngineeringServices";
import Internship from "./pages/Internship";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

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
          <Route path="/apply-for-internship" element={<Internship />} />
          <Route path="/oil-and-gas" element={<OilAndGas />} />
          <Route path="/textile" element={<Textile />} />
          <Route path="/food-and-beverage" element={<FoodAndBeverage />} />
          <Route path="/pharmaceutical" element={<Pharmaceutical />} />
          <Route path="/chemical-industries" element={<ChemicalIndustries />} />
          <Route path="/power-industries" element={<PowerIndustries />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/engineering-consultancy"
            element={<EngineeringConsultancy />}
          />
          <Route
            path="/mechanical-fabrication"
            element={<MechanicalFabrication />}
          />
          <Route
            path="/installation-and-commissioning"
            element={<InstallationAndCommissioning />}
          />
          <Route
            path="/plc-software-programming"
            element={<PlcSoftwareProgramming />}
          />
          <Route path="/repair-electronics" element={<RepairElectronics />} />
          <Route
            path="/engineering-services"
            element={<EngineeringServices />}
          />
        </Routes>
      </motion.div>

      <Footer />
    </>
  );
}

export default App;
