import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import WhyDifferent from "./WhyDifferent";
import ContactForm from "./ContactForm";
import CustomerFeedbackSection from "./CustomerFeedbackSection";
import EsteemedClientsSection from "./EsteemedClientsSection";
import { useEffect } from "react";
import VisionMissionSection from "./VisionMissionSection";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about-us">
        <AboutSection />
      </section>
      <section id="vision-mission">
        <VisionMissionSection />
      </section>
      <ProductsSection />
      <WhyDifferent />
      <CustomerFeedbackSection />
      <EsteemedClientsSection />
      <section id="contact-us">
        <ContactForm />
      </section>
    </>
  );
}

export default Home;
