import { motion } from "framer-motion";
import { Code2, Compass, MessagesSquare } from "lucide-react";
import SectionHeading from "./SectionHeading";

const principles = [
  {
    icon: Compass,
    title: "Strategia prima dell'estetica",
    text: "Ogni scelta parte da obiettivi, pubblico e messaggio. Il design arriva dopo, per rendere tutto più efficace.",
  },
  {
    icon: MessagesSquare,
    title: "Comunicazione diretta",
    text: "Parli sempre con la persona che progetta e sviluppa il sito, senza passaggi inutili o risposte impersonali.",
  },
  {
    icon: Code2,
    title: "Cura anche nel codice",
    text: "Struttura pulita, componenti riutilizzabili e attenzione a prestazioni, accessibilità e responsive design.",
  },
];

export default function About() {
  return (
    <section id="chi-sono" className="section about-section">
      <div className="container about-grid">
        <div>
          <SectionHeading eyebrow="Chi sono" title="Un approccio personale, con standard professionali." />

          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Sono <strong>Leonardo Sereni</strong>, web developer con base a Roma.
              Dopo un percorso intensivo full-stack di oltre 600 ore, mi sono
              specializzato nella progettazione e nello sviluppo di esperienze web
              moderne, chiare e semplici da usare.
            </p>
            <p>
              Seguo personalmente ogni fase: dall'idea iniziale alla struttura,
              dal design allo sviluppo, fino alla pubblicazione e alle modifiche
              successive. L'obiettivo è costruire qualcosa che rappresenti davvero
              il tuo lavoro, non soltanto riempire una pagina.
            </p>

            <div className="about-signature">
              <span className="signature-mark">LS</span>
              <div><strong>Leonardo Sereni</strong><small>Founder & Web Developer</small></div>
            </div>
          </motion.div>
        </div>

        <div className="principles-list">
          {principles.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              className="principle-card"
              key={title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className="principle-icon"><Icon size={22} aria-hidden="true" /></div>
              <div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
