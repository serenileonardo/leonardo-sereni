import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error("Errore React:", error);
      console.error("Info errore:", info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-fallback">
          <h1>Qualcosa è andato storto.</h1>

          <p>
            Si è verificato un errore durante il caricamento del sito.
            Puoi ricaricare la pagina oppure tornare alla home.
          </p>

          <a href="/" className="btn-primary">
            Torna alla Home
          </a>
        </main>
      );
    }

    return this.props.children;
  }
}