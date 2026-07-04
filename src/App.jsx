import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseMe from "./components/WhyChooseMe";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Background from "./components/Background";
import CursorGlow from "./components/CursorGlow";
import Stats from "./components/Stats";
import Loader from "./components/Loader";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Loader />
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
      <CTA />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;