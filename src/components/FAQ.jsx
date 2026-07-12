import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  { question: "Quanto tempo serve per realizzare un sito?", answer: "Dipende da struttura, contenuti e funzionalità. Un sito vetrina essenziale richiede normalmente meno tempo di un progetto con molte pagine o funzioni personalizzate. Dopo il primo confronto definisco un percorso e delle tempistiche chiare." },
  { question: "Il sito funzionerà bene da smartphone?", answer: "Sì. Il responsive design non è un'aggiunta finale: viene considerato fin dall'inizio e verificato su diverse dimensioni di schermo." },
  { question: "Mi aiuti anche con testi e struttura?", answer: "Sì. Posso aiutarti a ordinare le informazioni, rendere il messaggio più chiaro e costruire un percorso che accompagni l'utente verso il contatto." },
  { question: "Posso chiedere modifiche dopo la pubblicazione?", answer: "Sì. Possiamo concordare interventi singoli oppure un supporto continuativo, in base alle reali necessità del progetto." },
  { question: "Posso partire da un sito che ho già?", answer: "Certo. Valuto ciò che funziona, ciò che crea problemi e se conviene intervenire sull'esistente oppure ricostruire il progetto con una base più solida." },
];

export default function FAQ() {
  return (
    <section className="section faq-section">
      <div className="container faq-layout">
        <SectionHeading eyebrow="Domande frequenti" title="Le cose importanti, chiarite subito." text="Trasparenza e comunicazione fanno parte del progetto tanto quanto design e codice." />

        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary><span>{faq.question}</span><Plus size={20} aria-hidden="true" /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
