import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contatti" className="contact-section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-glow" aria-hidden="true" />
          <span className="contact-eyebrow"><i />Disponibile per nuovi progetti</span>
          <h2>Hai un'idea? Rendiamola concreta, professionale e pronta a farsi notare.</h2>
          <p>Raccontami cosa vuoi realizzare. Ti rispondo personalmente e capiamo insieme la strada migliore.</p>

          <div className="contact-actions">
            <a
              className="button button--light"
              href="https://wa.me/393393542788?text=Ciao%20Leonardo%2C%20vorrei%20parlarti%20di%20un%20progetto%20web."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} aria-hidden="true" />
              Scrivimi su WhatsApp
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="button button--contact-ghost" href="mailto:serenileonardo.web@gmail.com">
              <Mail size={19} aria-hidden="true" />
              Invia una email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
