import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Landing Page",
    desc: "Esperienze moderne orientate alla conversione.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "E-Commerce",
    desc: "Performance e design per aumentare le vendite.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
  {
    title: "Web App",
    desc: "Applicazioni scalabili e intuitive.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">

      <h2 className="section-title">
        Progetti Digitali
      </h2>

      <div className="portfolio-grid">

        {projects.map((project, index) => (

          <div
            key={index}
            className="portfolio-card"
          >
            <img
              src={project.image}
              alt=""
            />

            <div className="overlay">

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <ArrowUpRight />

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}