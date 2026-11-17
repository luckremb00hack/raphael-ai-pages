# Raphael AI Pages

## Descrizione
Questo progetto è una semplice pagina web che mostra tre pulsanti per salutare in italiano, inglese e spagnolo. Ogni pulsante visualizza un alert con il saluto corrispondente.

## Struttura del progetto
- [`index.html`](index.html) – Pagina principale con i pulsanti e lo script inline.
- [`style.css`](style.css) – Stili minimalisti, layout centrato, hover sui pulsanti e responsività di base.
- [`tests/button.test.js`](tests/button.test.js) – Test Playwright che verifica la presenza dei pulsanti e il corretto messaggio di alert.
- [`package.json`](package.json) – Script npm per eseguire i test con Playwright.

## Prerequisiti
- **Node.js** (>= 18) e **npm** installati.
- **Playwright** (installato tramite npm).

## Installazione
```bash
npm install
```
Questo comando installa le dipendenze necessarie, inclusi Playwright e il server di sviluppo.

## Avvio del server locale
Per visualizzare la pagina in locale puoi usare uno dei seguenti comandi:

- Con **serve** (installabile globalmente):
```bash
npx serve .
```
- Con il server HTTP di Python (se preferisci):
```bash
python -m http.server 8000
```
Apri il browser e naviga a `http://localhost:5000` (serve) o `http://localhost:8000` (Python).

## Esecuzione dei test
Playwright è configurato per eseguire i test definiti in `tests/button.test.js`.
```bash
npm test
```
Il comando avvierà Playwright, aprirà un browser headless, verificherà la presenza dei tre pulsanti e controllerà che gli alert mostrino i saluti corretti:
- **Italiano** → `Ciao!`
- **English** → `Hello!`
- **Español** → `¡Hola!`

## Generare una preview
Apri semplicemente `index.html` nel tuo browser oppure usa il server locale descritto sopra. Non è necessario alcun build step aggiuntivo.

## Note sulle versioni
- **Node.js**: 18.x o superiore.
- **Playwright**: la versione installata tramite `npm install` (verifica in `package.json`).
- **Browser**: Playwright utilizza Chromium, Firefox e WebKit di default.

---

*Questo README è stato aggiornato da Vega per includere istruzioni di build, preview e test.*