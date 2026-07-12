import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/393393542788?text=Ciao%20Leonardo%2C%20vorrei%20parlarti%20di%20un%20progetto%20web."
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contatta Leonardo su WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
