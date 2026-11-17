# Raphael AI Pages

## Descrizione
Questo progetto è una semplice pagina web che mostra tre pulsanti per salutare in italiano, inglese e spagnolo. Ogni pulsante visualizza un alert con il saluto corrispondente.

## Struttura del progetto
- [`index.html`](index.html) – Pagina principale con i pulsanti e lo script inline.
- [`style.css`](style.css) – Stili minimalisti, layout centrato, hover sui pulsanti e responsività di base.
- [`tests/button.test.js`](tests/button.test.js) – Test Playwright che verifica la presenza dei pulsanti, il corretto messaggio di alert, la navigazione da tastiera e il focus.
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
Il comando avvierà Playwright, aprirà un browser headless, verificherà la presenza dei tre pulsanti, controllerà che gli alert mostrino i saluti corretti e testerà la navigazione da tastiera (Tab, focus-visible e attivazione con Enter):
- **Italiano** → `Ciao!`
- **English** → `Hello!`
- **Español** → `¡Hola!`

## Generare una preview
Apri semplicemente `index.html` nel tuo browser oppure usa il server locale descritto sopra. Non è necessario alcun build step aggiuntivo.

## Accessibilità e Mobile

### Mobile
La pagina è responsive grazie alle media query presenti in `style.css` (per schermi < 600px). I pulsanti si adattano con un layout fluido, dimensioni adeguate al tap e spaziatura ottimizzata.

### Accessibilità e navigazione da tastiera
- **Elementi nativi**: I pulsanti utilizzano il tag semantico `<button>` e sono arricchiti con attributi `aria-label` descrittivi.
- **Focus visibile**: È implementato uno stile `:focus-visible` chiaro e conforme agli standard WCAG AA per il contrasto dei colori.
- **Interazione da tastiera**: I pulsanti sono raggiungibili tramite il tasto **Tab** e attivabili con **Enter** e **Space**.

### Istruzioni per testare la navigazione da tastiera
1. Apri `index.html` nel browser.
2. Premi il tasto **Tab** per spostare il focus sui pulsanti e verifica che l'indicatore di focus sia chiaramente visibile.
3. Premi **Enter** o **Spazio** per attivare il pulsante e visualizzare l'alert corrispondente.
4. Esegui i test automatizzati con Playwright digitando `npm test`.

---

*Questo README è stato aggiornato da Deku per includere la sezione completa di Accessibilità e navigazione da tastiera.*