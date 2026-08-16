# Todo — Aggiornamento portfolio con i nuovi progetti

Fonte: `docs/README*.md` (6 progetti). Obiettivo: aggiungere i progetti mancanti seguendo i
pattern esistenti + migliorie concordate con l'utente.

## Decisioni prese (confermate dall'utente)

- Nuova categoria **Security** (filtro + colore dedicato) → ZTALeaks e Graphagate.
- **Nessun link GitHub** per ora (progetti non tutti open source): `githubUrl` resta inutilizzato.
- Migliorie approvate: fix bug Skills, flag `featured` + ordinamento, stats/skills aggiornate,
  `docs/` escluso dal repo, **vLLM** aggiunto allo stack.

## Progetti da aggiungere

- [x] **Graphagate** (README.md) — Security — TGN per anomaly detection non supervisionata su accessi ZTA
- [x] **ZTALeaks** (README-2.md) — Security — ZTA NIST SP 800-207 a microservizi (team, UnivPM)
- [x] **Pack-a-Mail** (README-3.md) — Software — servizio Go per invio massivo email + dashboard
- [x] **Charge-a-Sloth** (README-4.md) — AI/ML — fine-tuning QLoRA di VLM con Unsloth
- [x] **synThor** (README-5.md) — Data — generatore di dataset sintetici per OCR/VLM
- [x] **Pack-a-Punch** (README-6.md) — già presente → descrizione arricchita (BERT italiano, ONNX)

## Modifiche al codice

- [x] `.gitignore` — escludere `docs/` (README privati + CV dal deploy GitHub Pages)
- [x] `src/index.css` — `--accent-blue` / `--accent-blue-glow` (light + dark)
- [x] `src/types/index.ts` — categoria `'Security'`, campo `featured?: boolean`
- [x] `src/data/projects.ts` — 5 nuovi progetti, Pack-a-Punch riscritto, `featured`, skills aggiornate
- [x] `src/components/Sections/Projects.tsx` — filtro `Security`, ordinamento featured-first
- [x] `src/components/UI/ProjectCard.tsx` — colore `Security`, badge `Featured`
- [x] `src/components/Sections/Skills.tsx` — **fix bug**: mappe icone/colori su chiavi inesistenti
- [x] `src/components/Sections/About.tsx` — stat progetti `10+` → `19+`

## Creazione CV in LaTeX (Italiano e Inglese)

- [x] Scrivere `docs/cv_gabriele_vianello_it.tex`
- [x] Scrivere `docs/cv_gabriele_vianello_en.tex`
- [x] Compilare entrambi i file in PDF.
- [x] Rimuovere il vecchio CV.

---

# Todo — Download CV dal sito web

Obiettivo: Rendere il CV in PDF (compilato da LaTeX) scaricabile dal sito con un button/icona dedicato ed elegante.

## Piano di lavoro

- [x] **1. Gestione Asset Statici**:
  - [x] Creare la cartella `public/` (standard Vite)
  - [x] Copiare `docs/cv_gabriele_vianello_it.pdf` e `docs/cv_gabriele_vianello_en.pdf` in `public/`
  - [x] Assicurare la corretta risoluzione dei percorsi con `import.meta.env.BASE_URL` (`/Portfolio/`) per la compatibilità con GitHub Pages e ambienti locali

- [x] **2. Componenti UI & Design**:
  - [x] Creare il componente interattivo `src/components/UI/CVDownloadDropdown.tsx` con menu popover a tendina per la selezione lingua (🇬🇧 English / 🇮🇹 Italiano), chiusura su click outside / Escape e animazioni fluide Framer Motion
  - [x] Integrare il pulsante principale `Download CV` nella sezione **Hero** (`src/components/Sections/Hero.tsx`) accanto a "View Projects" e alle icone social
  - [x] Integrare il pulsante/badge `CV` nella **Navbar** (`src/components/Layout/Navbar.tsx`) sia nella navigazione desktop che nel menu mobile
  - [x] Allineare i link di contatto in `src/components/Sections/Contact.tsx` con email e profilo LinkedIn corretti

- [x] **3. Verifica & Test**:
  - [x] Controllo statico TypeScript superato (`tsc --noEmit` exit code 0)
  - [x] Linting superato (`eslint` exit code 0, 0 warning, 0 errori)
  - [x] Verifica attributi di download (`download="CV_Gabriele_Vianello_EN.pdf"` / `download="CV_Gabriele_Vianello_IT.pdf"`, `target="_blank"`, `rel="noopener noreferrer"`)
  - [x] Verifica asset in `public/` e `dist/`

- [x] **4. Documentazione & Review**:
  - [x] Aggiornare `tasks/todo.md` con il log delle modifiche e la sezione Review

## Review

**Cosa è stato implementato**

1. **Asset statici**: Creata la cartella `public/` e inseriti entrambi i PDF compilati da LaTeX:
   - `public/cv_gabriele_vianello_en.pdf` (versione Inglese)
   - `public/cv_gabriele_vianello_it.pdf` (versione Italiana)
2. **Componente `CVDownloadDropdown` (`src/components/UI/CVDownloadDropdown.tsx`)**:
   - Menu a tendina/popover con design glassmorphism perfettamente integrato con il tema del sito (Light/Dark mode).
   - Supporto per due varianti: `hero` (pulsante completo con icona, testo e freccia) e `navbar` (badge compatto ed elegante).
   - Selezione rapida tra versione Inglese (🇬🇧 EN) e Italiana (🇮🇹 IT) con indicazione visiva "LaTeX PDF", icona di download e feedback di download effettuato (icona check verde animata).
   - Chiusura automatica al click esterno (outside click) e alla pressione del tasto `Escape`.
   - Risoluzione robusta dei percorsi con `import.meta.env.BASE_URL` per funzionare sia in locale che nel deploy GitHub Pages sotto la base `/Portfolio/`.
3. **Integrazione nelle sezioni**:
   - **Hero (`src/components/Sections/Hero.tsx`)**: aggiunto il pulsante "Download CV" affiancato al pulsante "View Projects" e al gruppo di icone social.
   - **Navbar (`src/components/Layout/Navbar.tsx`)**: aggiunto il trigger compatto sia per la barra desktop che per il menu overlay mobile.
   - **Contact (`src/components/Sections/Contact.tsx`)**: allineati email e LinkedIn reali per coerenza con l'Hero.
