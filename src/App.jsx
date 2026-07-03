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

function App() {
  return (
    <>
      <CursorGlow />
      <Background />
      <Navbar />
      <Hero />
      <About />
      <WhyChooseMe />
      <Process />
      <TechStack />
      <Portfolio />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}

export default App;