import { motion } from "framer-motion";

export default function TechStack() {

  const tech = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Vite",
    "Git",
    "GitHub"
  ];

  return (
    <section id="stack">

      <h2 className="section-title">
        Come realizzo i miei progetti.
      </h2>

      <div className="stack-grid">

        {tech.map((item, i) => (
          <motion.div
            key={i}
            className="stack-card"
            whileHover={{ scale: 1.1 }}
          >
            {item}
          </motion.div>
        ))}

      </div>

    </section>
  );
}