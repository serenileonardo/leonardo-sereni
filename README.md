# SERENI studio — sito portfolio

Portfolio personale di Leonardo Sereni, sviluppato con React e Vite.

## Avvio del progetto

Apri la cartella in Visual Studio Code e usa il terminale:

```bash
npm install
npm run dev
```

Vite mostrerà l'indirizzo locale da aprire nel browser, normalmente `http://localhost:5173`.

## Build di produzione

```bash
npm run build
```

I file pronti per la pubblicazione vengono generati nella cartella `dist`.

## Pubblicazione su Aruba

Carica **il contenuto interno della cartella `dist`** nella cartella principale dell'hosting, insieme al file `.htaccess` già incluso.

La cartella di produzione contiene anche:

- `robots.txt`
- `sitemap.xml`
- favicon
- web manifest
- immagine Open Graph 1200×630
- regole base di cache, sicurezza e routing React

## Struttura principale

- `src/components`: sezioni e componenti riutilizzabili
- `src/pages`: home, pagine legali e pagina 404
- `public`: file SEO, immagini pubbliche e configurazione Aruba
- `dist`: build pronta da caricare online

## Controlli

```bash
npm run lint
npm run build
```

Il progetto non utilizza più GSAP o Lenis: le animazioni sono gestite con Framer Motion e CSS, con supporto a `prefers-reduced-motion`.
