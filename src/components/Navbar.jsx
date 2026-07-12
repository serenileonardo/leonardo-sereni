import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const menuLinks = [
  { label: "Servizi", href: "/#servizi" },
  { label: "Progetti", href: "/#progetti" },
  { label: "Chi sono", href: "/#chi-sono" },
  { label: "Metodo", href: "/#metodo" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.classList.toggle("menu-open", isOpen);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        className="navbar-shell"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <nav className="navbar" aria-label="Navigazione principale">
          <a href="/" className="brand" aria-label="SERENI studio, torna alla home">
            <span className="brand-mark" aria-hidden="true">LS</span>
            <span className="brand-copy">
              <strong>SERENI</strong>
              <small>digital studio</small>
            </span>
          </a>

          <div className="desktop-nav">
            {menuLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>

          <a className="nav-cta" href="/#contatti">
            Parliamone
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              className="mobile-backdrop"
              type="button"
              aria-label="Chiudi menu"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              id="mobile-navigation"
              className="mobile-menu"
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="mobile-menu-label">Navigazione</div>
              <div className="mobile-menu-links">
                {menuLinks.map((link, index) => (
                  <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                    <span>0{index + 1}</span>
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mobile-menu-actions">
                <a className="button button--primary" href="/#contatti" onClick={() => setIsOpen(false)}>
                  Inizia un progetto
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
