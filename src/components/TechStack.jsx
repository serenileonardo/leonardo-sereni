import { motion } from "framer-motion";
import {
  Rocket,
  Smartphone,
  Palette,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Rocket size={34} />,
    title: "Velocità",
    text: "Siti rapidi nel caricamento, ottimizzati per offrire un'esperienza fluida e professionale.",
  },
  {
    icon: <Smartphone size={34} />,
    title: "Responsive",
    text: "Ogni progetto è progettato per adattarsi perfettamente a smartphone, tablet e desktop.",
  },
  {
    icon: <Palette size={34} />,
    title: "Design Moderno",
    text: "Interfacce eleganti, curate nei dettagli e studiate per valorizzare il tuo brand.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Affidabilità",
    text: "Codice pulito, tecnologie moderne e attenzione alla qualità in ogni fase dello sviluppo.",
  },
];

const tech = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Bootstrap",
  "Vite",
  "Git",
  "GitHub",
  "Responsive Design",
  "SEO Base",
];

export default function TechStack() {
  const repeatedTech = [...tech, ...tech];

  return (
    <section id="stack">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Come realizzo i miei progetti
      </motion.h2>

      <motion.p
        className="stack-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Ogni sito web che sviluppo nasce con un obiettivo preciso:
        offrire un'esperienza moderna, veloce e professionale,
        capace di trasmettere fiducia e valorizzare il tuo business.
      </motion.p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="tech-box">
        <h3>Tecnologie utilizzate</h3>

        <div className="tech-carousel">
          <div className="tech-track">
            {repeatedTech.map((item, index) => (
              <span key={`${item}-${index}`} className="tech-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}