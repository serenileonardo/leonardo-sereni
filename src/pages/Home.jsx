
import Background from "../components/Background";
import CursorGlow from "../components/CursorGlow";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseMe from "../components/WhyChooseMe";
import Process from "../components/Process";
import TechStack from "../components/TechStack";
import Portfolio from "../components/Portfolio";
import Stats from "../components/Stats";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      
      <Background />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <WhyChooseMe />
      <Process />
      <TechStack />
      <Portfolio />
      <Stats />
      <WhatsAppButton />
      <Footer />
    </>
  );
}