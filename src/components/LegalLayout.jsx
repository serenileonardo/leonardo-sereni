import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "./Background";
import CursorGlow from "./CursorGlow";
import WhatsAppButton from "./WhatsAppButton";

export default function LegalLayout({ title, children }) {
  return (
    <>
      <Background />
      <CursorGlow />
      <Navbar />

      <main className="legal-page">
        <a href="/" className="legal-back">
          ← Torna al sito
        </a>

        <h1>{title}</h1>

        <div className="legal-content">
          {children}
        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}