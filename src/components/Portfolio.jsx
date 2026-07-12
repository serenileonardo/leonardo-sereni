import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const project = {
  id: "alpha",
  eyebrow: "Sito aziendale · Costruzioni",
  title: "Alpha Costruzioni Box",
  description:
    "Un sito vetrina moderno realizzato per presentare l'azienda, valorizzare i cantieri sul territorio di Roma e rendere più semplice il contatto con potenziali clienti.",
  results: [
    "Mappa interattiva dei cantieri",
    "Navigazione semplice e intuitiva",
    "Contatto diretto tramite WhatsApp",
    "Ottimizzazione per smartphone e tablet",
  ],
  tags: ["React", "Responsive Design", "UX/UI"],
  href: "https://www.alphacostruzionibox.it/",
  linkLabel: "Visita il sito",
};

function ProjectPreview() {
  return (
    <div
      className="project-preview project-preview--alpha"
      aria-hidden="true"
    >
      <div className="preview-browser-bar">
        <span />
        <span />
        <span />
        <div>alphacostruzionibox.it</div>
      </div>

      <div className="alpha-preview-content">
        <div className="alpha-preview-nav">
          <strong>ALPHA</strong>
          <span>Costruzioni Box</span>
        </div>

        <div className="alpha-preview-hero">
          <small>DA PIU' DI 10 ANNI A ROMA</small>

          <h4>
            Spazi solidi.
            <br />
            Valore nel tempo.
          </h4>

          <span className="preview-button">
            Scopri i cantieri
          </span>
        </div>

        <div className="alpha-preview-map">
          <span className="map-road map-road--one" />
          <span className="map-road map-road--two" />

          <i className="map-pin map-pin--one" />
          <i className="map-pin map-pin--two" />
          <i className="map-pin map-pin--three" />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section
      id="progetti"
      className="section projects-section"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Un progetto svolto"
          title="Un sito costruito attorno all'identità e agli obiettivi del cliente."
          text="Un esempio concreto del mio metodo di lavoro: analisi, progettazione, sviluppo e ottimizzazione dell'esperienza su ogni dispositivo."
        />

        <div className="projects-list">
          <motion.article
            className="project-card project-card--alpha"
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.65 }}
          >
            <div className="project-media">
              <ProjectPreview />
            </div>

            <div className="project-content">
              <span className="project-eyebrow">
                {project.eyebrow}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <ul className="project-results">
                {project.results.map((result) => (
                  <li key={result}>
                    <Check
                      size={15}
                      aria-hidden="true"
                    />

                    {result}
                  </li>
                ))}
              </ul>

              <div className="project-bottom">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.linkLabel}

                  <ExternalLink
                    size={17}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}