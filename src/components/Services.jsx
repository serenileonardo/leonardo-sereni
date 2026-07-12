import { motion } from "framer-motion";
import { Building2, Gauge, LayoutTemplate, RefreshCcw } from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    number: "01",
    icon: Building2,
    title: "Siti aziendali",
    text: "Una presenza online solida e credibile per raccontare il tuo lavoro e facilitare il contatto.",
    points: ["Design personalizzato", "Struttura chiara", "Contatti immediati"],
  },
  {
    number: "02",
    icon: LayoutTemplate,
    title: "Landing page",
    text: "Pagine focalizzate su un servizio, un lancio o una campagna, costruite per ottenere richieste.",
    points: ["Messaggio diretto", "Call to action", "Percorso ottimizzato"],
  },
  {
    number: "03",
    icon: RefreshCcw,
    title: "Restyling",
    text: "Rinnovo siti datati o poco efficaci migliorando immagine, navigazione e resa su smartphone.",
    points: ["Nuova identità", "Mobile first", "Contenuti ordinati"],
  },
  {
    number: "04",
    icon: Gauge,
    title: "Manutenzione",
    text: "Aggiornamenti, modifiche e assistenza tecnica per mantenere il progetto curato nel tempo.",
    points: ["Supporto diretto", "Interventi rapidi", "Evoluzione continua"],
  },
];

export default function Services() {
  return (
    <section id="servizi" className="section services-section">
      <div className="container">
        <SectionHeading
          eyebrow="Cosa posso realizzare per te"
          title="Il sito giusto non deve solo essere bello. Deve lavorare per il tuo business."
          text="Ogni progetto parte dai tuoi obiettivi e viene costruito su misura, senza soluzioni copia e incolla."
        />

        <div className="services-grid">
          {services.map(({ number, icon: Icon, title, text, points }, index) => (
            <motion.article
              className="service-card"
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="service-card-top">
                <div className="service-icon"><Icon size={25} aria-hidden="true" /></div>
                <span className="service-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>
                {points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
