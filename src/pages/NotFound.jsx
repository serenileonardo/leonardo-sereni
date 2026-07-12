export default function NotFound() {
  return (
    <main className="not-found">
      <span className="brand-mark" aria-hidden="true">LS</span>
      <span className="not-found-label">Errore 404</span>
      <h1>Questa pagina non esiste.</h1>
      <p>
        Il link che hai aperto potrebbe essere sbagliato o non più disponibile.
        Puoi tornare alla home oppure contattarmi direttamente.
      </p>
      <div className="hero-buttons">
        <a href="/" className="btn-secondary">Torna alla home</a>
        <a
          href="https://wa.me/393393542788"
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Scrivimi su WhatsApp
        </a>
      </div>
    </main>
  );
}
