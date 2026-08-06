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

## Verifica

- [ ] `npm run lint` — **NON eseguito**: nessun runtime Node sulla macchina (`npm`/`node` assenti
      dal PATH) e daemon Docker non attivo per il fallback in container.
- [ ] `npm run build` (tsc + vite) — stesso motivo.
- [x] Conteggio progetti coerente con i filtri: 19 totali → AI/ML 4, Data 6, NLP 3, Security 2,
      Software 4. Nessuna categoria orfana rispetto a `CATEGORIES`.
- [x] Revisione statica dei tipi: `Skill` ora richiede `icon`/`accent` e tutte e 4 le voci li
      hanno; `Record<SkillIcon, …>` e `Record<SkillAccent, …>` sono esaustivi (il compilatore
      segnala se una chiave manca); nessun import inutilizzato in `Skills.tsx` (`Code2` resta
      usato dalla mappa) e `Sparkles` è usato in `ProjectCard`.
- [x] `git check-ignore docs/README-2.md` → regola attiva.

## Review

**Cosa è cambiato**

- 5 progetti nuovi (Graphagate, ZTALeaks, synThor, Charge-a-Sloth, Pack-a-Mail) + Pack-a-Punch
  riscritto sulla base del README (BERT italiano, ONNX Runtime, distillation, ~110 req/s).
- Categoria **Security** con accento blu dedicato (`--accent-blue`), nuovo filtro nella sezione
  Projects. Graphagate è classificato Security e non AI/ML: la natura ML resta leggibile dai badge
  tecnologici, mentre così il filtro Security ha massa critica e il taglio cybersecurity emerge.
- Flag `featured` + ordinamento featured-first (sort stabile, l'ordine di scrittura è preservato
  dentro i due gruppi) e badge "Featured" sulla card.
- **Bug corretto** in `Skills.tsx`: le mappe icone/colori erano chiavate su categorie inesistenti
  (`Languages`, `Tools`, …), quindi ogni card cadeva sul fallback giallo/Code2. Risolto alla
  radice spostando `icon`/`accent` nel dato con union type: una futura rinomina di categoria non
  può più rompere silenziosamente lo stile.
- Skills: gruppo "Backend & DevOps" → "Serving & DevOps" con vLLM, ONNX Runtime, Ollama, MongoDB;
  aggiunti PyTorch Geometric, Hugging Face, Unsloth all'area AI; HTMX al frontend.
- `docs/README*.md` ignorato (i README dei progetti privati non finiscono nel repo pubblico;
  `cv.pdf`/`cv.tex`, già tracciati, restano dov'erano).

**Non fatto (in attesa)**

- Nessun `githubUrl`: da decidere quali repo sono pubblici. Il campo e la UI del link esistono già.
