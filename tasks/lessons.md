# Lessons

Regole ricavate da correzioni/bug reali su questo progetto. Rileggerle a inizio sessione.

## 1. In questo repo NON c'è Tailwind

**Contesto (2026-08-16).** I componenti sono scritti con classi in stile Tailwind, ma non esistono
`tailwindcss`, `postcss`, né `tailwind.config.*`. L'unico stile reale è `src/index.css`, scritto a
mano, che re-implementa **solo un sottoinsieme** di quei nomi di classe.

**Conseguenza.** Ogni classe non presente in `src/index.css` è **silenziosamente inerte**: niente
errore, niente warning, solo un componente sformattato. Erano morte, tra le altre:
`bg-[var(--…)]`, `text-[var(--…)]`, `rounded-xl`, `rounded-lg`, `shadow-sm`, `shadow-2xl`,
`inline-flex`, `inline-block`, `md:hidden`, tutte le `sm:*`, tutte le utility con decimali
(`gap-1.5`, `p-2.5`, `w-3.5`) e le larghezze `w-56` / `w-64`.

**Regola.** Prima di usare una classe in un `.tsx`, verificarla:

```sh
grep -nE '^\.<classe>[ ,{:+]' src/index.css     # es. ^\.rounded-xl[ ,{:+]
grep -n 'md\\:hidden' src/index.css             # le responsive sono escapate: .md\:flex
```

Per un componente nuovo, **non** inseguire decine di utility mancanti: scrivere classi di
componente dedicate in `src/index.css`, come già fanno `.btn-primary`, `.glass-card`,
`.tech-badge`, `.orb`, `.cv-trigger`.

**Attenzione all'ordine sorgente.** Le utility hanno tutte specificità (0,1,0): vince l'ultima
dichiarata. `.md\:hidden` deve stare **dopo** `.flex` (615) perché `flex md:hidden` funzioni.

## 2. `.border` non disegna nulla

`src/index.css` definisce `.border { border-width: 1px }` senza `border-style`. Poiché il default è
`border-style: none`, **tutti** i `className="border …"` del sito non mostrano alcun bordo. Nelle
classi di componente dichiarare il bordo per esteso (`border: 1px solid var(--glass-border)`).
Sistemare `.border` globalmente è possibile ma farebbe comparire bordi in decine di componenti:
va fatto come intervento a sé, con verifica visiva.

## 3. Attenzione a `overflow: hidden` sui contenitori dei popover

`<section id="hero">` ha `overflow-hidden` (per contenere gli orb animati): qualunque popover
`position: absolute` che si apra verso il basso viene **clippato**. Per i menu dentro Hero o dentro
l'overlay mobile, aprire verso l'alto (`bottom: 100%`).

## 4. `download` + `target="_blank"` non vanno insieme

Diversi browser ignorano l'attributo `download` quando il link apre una nuova scheda: il PDF viene
aperto invece che scaricato. Se il pulsante dice "Download", niente `target="_blank"`.

## 5. `node` non è installato su questa macchina

`npm` / `node` non sono nel PATH (né nvm/volta/fnm/homebrew). `npm run build`, `lint`, `dev` e
`preview` **non** sono eseguibili in sessione: la verifica va fatta staticamente (grep delle classi,
lettura del diff) e poi confermata dall'utente o dalla CI (`.github/workflows/deploy.yml`).
Non dichiarare mai "verificato" ciò che non è stato eseguito.
