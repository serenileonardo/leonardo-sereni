import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="navbar"
    >
      <div className="logo">SERENI<span>studio</span></div>

      <div className="links">
        <a href="#about">Chi Sono</a>
        <a href="#stack">Stack</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contatti</a>
      </div>
    </motion.nav>
  );
}