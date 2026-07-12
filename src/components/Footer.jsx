import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand-col">
          <a href="/" className="brand brand--footer" aria-label="SERENI studio, home">
            <span className="brand-mark" aria-hidden="true">LS</span>
            <span className="brand-copy"><strong>SERENI</strong><small>digital studio</small></span>
          </a>
          <p>Siti web moderni, veloci e costruiti intorno alle persone e agli obiettivi reali del progetto.</p>
          <span className="footer-location">Roma, Italia · Disponibile da remoto</span>
        </div>

        <div className="footer-col">
          <h3>Esplora</h3>
          <a href="/#servizi">Servizi</a>
          <a href="/#progetti">Progetti</a>
          <a href="/#chi-sono">Chi sono</a>
          <a href="/#metodo">Metodo</a>
        </div>

        <div className="footer-col">
          <h3>Contatti</h3>
          <a href="https://wa.me/393393542788" target="_blank" rel="noopener noreferrer"><FaWhatsapp />WhatsApp</a>
          <a href="mailto:serenileonardo.web@gmail.com"><FiMail />Email</a>
          <a href="https://github.com/serenileonardo" target="_blank" rel="noopener noreferrer"><FaGithub />GitHub</a>
        </div>

        <div className="footer-col">
          <h3>Informazioni</h3>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/cookie-policy">Cookie Policy</a>
          <a href="/termini-e-condizioni">Termini e condizioni</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {currentYear} SERENI studio · Leonardo Sereni</p>
        <p>Progettato e sviluppato con cura a Roma.</p>
      </div>
    </footer>
  );
}
