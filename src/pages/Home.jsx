import Background from "../components/Background";
import CursorGlow from "../components/CursorGlow";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Process from "../components/Process";
import TechStack from "../components/TechStack";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <TechStack />
        <FAQ />
        <ContactCTA />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
