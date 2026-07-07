import LegalLayout from "../components/LegalLayout";

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy">
      <p>
        Questo sito utilizza esclusivamente cookie tecnici necessari al corretto
        funzionamento del sito, se presenti.
      </p>

      <h2>Cookie tecnici</h2>
      <p>
        I cookie tecnici sono utilizzati per consentire la navigazione e il
        corretto funzionamento delle pagine. Per questi cookie non è richiesto
        il consenso preventivo dell’utente.
      </p>

      <h2>Cookie di profilazione o marketing</h2>
      <p>
        Al momento questo sito non utilizza cookie di profilazione, marketing o
        strumenti di tracciamento pubblicitario.
      </p>

      <h2>Analytics</h2>
      <p>
        Se in futuro verranno integrati strumenti di analisi, come Google
        Analytics o Meta Pixel, questa informativa sarà aggiornata e, ove
        necessario, verrà implementato un banner per la gestione del consenso.
      </p>

      <h2>Contatti</h2>
      <p>
        Per informazioni è possibile scrivere a:
        serenileonardo.web@gmail.com
      </p>

      <p>Ultimo aggiornamento: 2026.</p>
    </LegalLayout>
  );
}