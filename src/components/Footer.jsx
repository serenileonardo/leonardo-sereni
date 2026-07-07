import logo from "../assets/logo.png";
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-cta">
          <h4>Hai un progetto in mente?</h4>

          <p>
            Parliamone insieme e trasformiamolo in qualcosa di concreto.
          </p>

          <div className="footer-buttons">
            <a
              href="https://wa.me/393393542788"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scrivimi su WhatsApp
            </a>

            <a
              href="mailto:serenileonardo.web@gmail.com"
              className="btn-secondary"
            >
              Scrivimi via Email
            </a>
          </div>
        </div>

        <div className="footer-grid">

          <div className="footer-col">
            <h4>Contatti</h4>

            <a
              href="https://wa.me/393393542788"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a href="mailto:serenileonardo.web@gmail.com">
              <FiMail />
              serenileonardo.web@gmail.com
            </a>
          </div>

          <div className="footer-col">
            <h4>Navigazione</h4>

            <a href="#about">Chi sono</a>
            <a href="#stack">Servizi</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contatti</a>
          </div>

          <div className="footer-col">
            <h4>Legale</h4>

            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cookie-policy">Cookie Policy</a>
            <a href="/termini-e-condizioni">Termini e Condizioni</a>
          </div>

          <div className="footer-col">
            <h4>Social</h4>

            <a
              href="https://github.com/serenileonardo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
              LinkedIn
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} SERENI studio · Leonardo Sereni. Tutti i diritti riservati.
          </p>

          <p>
            Web Developer · Roma, Italia
          </p>
        </div>

      </div>
    </footer>
  );
}