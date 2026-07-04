import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="navbar"
    >
      <div className="brand">
        <img src={logo} alt="LS" />
        <div>
          <span className="brand-main">SERENI</span>
          <span className="brand-sub">studio</span>
        </div>
      </div>
      <div className="links">
        <a href="#about">Chi Sono</a>
        <a href="#stack">Stack</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contatti</a>
      </div>
    </motion.nav>
  );
}