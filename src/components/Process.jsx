import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Ascolto",
      desc: "Analizzo l’idea e capisco gli obiettivi del progetto.",
    },
    {
      num: "02",
      title: "Progetto",
      desc: "Creo una struttura e un design orientato alla conversione.",
    },
    {
      num: "03",
      title: "Sviluppo",
      desc: "Trasformo il design in un sito veloce e moderno.",
    },
    {
      num: "04",
      title: "Consegna",
      desc: "Pubblico il progetto e ti seguo anche dopo il lancio.",
    },
  ];

  return (
    <section id="process">

      <h2 className="section-title">Processo di lavoro</h2>

      <div className="process-grid">

        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="process-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="process-num">{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}