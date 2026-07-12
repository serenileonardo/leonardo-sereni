import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const steps = [
  { number: "01", title: "Ascolto", text: "Capisco attività, obiettivi, pubblico e ciò che rende il tuo progetto diverso." },
  { number: "02", title: "Direzione", text: "Definisco struttura, contenuti e stile visivo prima di iniziare lo sviluppo." },
  { number: "03", title: "Sviluppo", text: "Costruisco il sito, curo il responsive e verifico ogni interazione sui diversi dispositivi." },
  { number: "04", title: "Lancio", text: "Pubblico il progetto, controllo gli ultimi dettagli e resto disponibile per il supporto." },
];

export default function Process() {
  return (
    <section id="metodo" className="section process-section">
      <div className="container">
        <SectionHeading
          eyebrow="Un processo chiaro"
          title="Sai sempre cosa stiamo facendo e perché."
          text="Un flusso semplice riduce incomprensioni, velocizza le decisioni e porta a un risultato più coerente."
        />

        <div className="process-line" aria-hidden="true" />
        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.article
              className="process-card"
              key={step.number}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.09 }}
            >
              <span className="process-dot" aria-hidden="true" />
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
