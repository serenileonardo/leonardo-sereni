import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";

const benefits = ["Design su misura", "Responsive", "Assistenza diretta"];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="hero-kicker">
            <span className="status-dot" aria-hidden="true" />
            Web developer · Roma e da remoto
          </div>

          <h1 id="hero-title">
            Creo siti web moderni che fanno <span>crescere la tua attività.</span>
          </h1>

          <p className="hero-lead">
            Aiuto aziende, professionisti e attività locali a presentarsi online
            con siti veloci, professionali e progettati per trasformare le visite
            in contatti reali.
          </p>

          <div className="hero-actions">
            <a
              href="https://wa.me/393393542788?text=Ciao%20Leonardo%2C%20vorrei%20parlarti%20di%20un%20progetto%20web."
              className="button button--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} aria-hidden="true" />
              Parliamo del tuo progetto
            </a>

            <a href="#progetti" className="button button--ghost">
              Guarda i miei lavori
              <ArrowDownRight size={19} aria-hidden="true" />
            </a>
          </div>

          <ul className="hero-benefits" aria-label="Caratteristiche del servizio">
            {benefits.map((benefit) => (
              <li key={benefit}>
                <Check size={15} aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 44, rotate: 1.5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          aria-hidden="true"
        >
          <div className="hero-orbit hero-orbit--one" />
          <div className="hero-orbit hero-orbit--two" />

          <div className="browser-card">
            <div className="browser-topbar">
              <div className="browser-dots"><span /><span /><span /></div>
              <div className="browser-url">serenistudio.it</div>
              <div className="browser-action"><ArrowUpRight size={14} /></div>
            </div>

            <div className="browser-page">
              <div className="browser-nav">
                <div className="browser-logo">LS</div>
                <div className="browser-nav-lines"><span /><span /><span /></div>
              </div>

              <div className="browser-hero">
                <span className="browser-eyebrow">DIGITAL EXPERIENCE</span>
                <div className="browser-title-line browser-title-line--long" />
                <div className="browser-title-line" />
                <div className="browser-text-line" />
                <div className="browser-text-line browser-text-line--short" />
                <div className="browser-buttons"><span /><span /></div>
              </div>

              <div className="browser-panels">
                <div><span>01</span><strong>Strategy</strong></div>
                <div><span>02</span><strong>Design</strong></div>
                <div><span>03</span><strong>Build</strong></div>
              </div>
            </div>
          </div>

          <div className="floating-card floating-card--top">
            <span className="floating-icon">↗</span>
            <div><small>Esperienza</small><strong>Mobile first</strong></div>
          </div>

          <div className="floating-card floating-card--bottom">
            <div className="performance-ring"><span>✓</span></div>
            <div><small>Obiettivo</small><strong>Più contatti</strong></div>
          </div>
        </motion.div>
      </div>

      <a className="hero-scroll" href="#servizi" aria-label="Scorri alla sezione servizi">
        <span>Scopri di più</span>
        <ArrowDownRight size={18} />
      </a>
    </section>
  );
}
