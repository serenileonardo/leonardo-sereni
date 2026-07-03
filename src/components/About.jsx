import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">

      <motion.h2
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
      >
        Non realizzo semplici siti web.
      </motion.h2>

      <motion.h3
        className="gradient-text"
        initial={{ opacity:0, y:50 }}
        whileInView={{ opacity:1, y:0 }}
      >
        Costruisco la tua presenza online.
      </motion.h3>

      <p>
        Ogni progetto nasce con un obiettivo:
        trasformare visitatori in clienti.
        Design moderno, prestazioni elevate
        ed esperienza utente curata nei dettagli.
      </p>

    </section>
  );
}