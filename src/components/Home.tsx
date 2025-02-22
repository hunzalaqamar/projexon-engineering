import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import WhyDifferent from "./WhyDifferent";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about-us">
        <AboutSection />
      </section>
      <ProductsSection />
      <WhyDifferent />
      <Testimonials />
      <section id="contact-us">
        <ContactForm />
      </section>
    </>
  );
}

export default Home;
