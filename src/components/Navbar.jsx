import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuLinks = [
  {
    label: "Chi Sono",
    href: "/#about",
  },
  {
    label: "Servizi",
    href: "/#stack",
  },
  {
    label: "Portfolio",
    href: "/#portfolio",
  },
  {
    label: "Contatti",
    href: "/#contact",
  },
];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="navbar"
      >
        <a href="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Leonardo Sereni Logo" />

          <div>
            <span className="brand-main">SERENI</span>
            <span className="brand-sub">Studio</span>
          </div>
        </a>

        <div className="links">
          {menuLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Apri menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="mobile-menu-links">
              {menuLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <span>0{index + 1}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="mobile-menu-actions">
              <a
                href="https://wa.me/393393542788"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                WhatsApp
              </a>

              <a
                href="mailto:serenileonardo.web@gmail.com"
                className="btn-secondary"
                onClick={closeMenu}
              >
                Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}