import { motion } from "framer-motion";
import { Accessibility, Gauge, Smartphone } from "lucide-react";
import SectionHeading from "./SectionHeading";

const qualities = [
  { icon: Gauge, title: "Prestazioni", text: "Pagine leggere, struttura ordinata e attenzione ai tempi di caricamento." },
  { icon: Smartphone, title: "Responsive", text: "Ogni elemento viene progettato per funzionare bene da smartphone a desktop." },
  { icon: Accessibility, title: "Accessibilità", text: "Contrasti, testi, navigazione e interazioni pensati per essere più semplici da usare." },
];

const tech = ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Node.js", "Express", "MySQL", "Git", "GitHub", "Vite", "SEO tecnico base"];

export default function TechStack() {
  return (
    <section className="section tech-section">
      <div className="container tech-layout">
        <div>
          <SectionHeading
            eyebrow="Dietro le quinte"
            title="Tecnologia al servizio del risultato, non il contrario."
            text="Scelgo strumenti moderni e affidabili, ma al cliente consegno soprattutto un'esperienza semplice, veloce e facile da gestire."
          />

          <div className="tech-pills" aria-label="Tecnologie utilizzate">
            {tech.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>

        <div className="quality-stack">
          {qualities.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              className="quality-card"
              key={title}
              initial={{ opacity: 0, x: 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.09 }}
            >
              <Icon size={23} aria-hidden="true" />
              <div><h3>{title}</h3><p>{text}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
