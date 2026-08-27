# Experimental Pharmacology Lab — CAL Simulation Software

An open-source, browser-based Computer Assisted Learning (CAL) tool for
experimental pharmacology, in the spirit of the animal-experiment simulation
software used in Indian pharmacy colleges — rebuilt as a static web app you
can host for free on GitHub Pages.

No backend, no build step: plain HTML/CSS/JS.

## What's in v0.1

- `index.html` — home page listing **all ~150 models** from the standard
  PCI-recommended experimental pharmacology syllabus, organized into 18
  categories (CNS, inflammation, cardiovascular, GI, respiratory, endocrine,
  renal, hepatic, hematology, antioxidant, anticancer, antimicrobial, wound
  healing, antiarthritic, antipyretic, reproductive, toxicology, in-vitro
  preparations).
- **10 fully interactive simulations** (marked ● live on the home page):
  1. Hot Plate Test
  2. Tail-Flick Test
  3. Acetic Acid-Induced Writhing Test
  4. Carrageenan-Induced Paw Edema
  5. Elevated Plus Maze
  6. Forced Swim Test
  7. Maximal Electroshock Seizure (MES) Test
  8. Rotarod Test
  9. Pylorus Ligation-Induced Ulcer (Shay Model)
  10. Actophotometer Test

  Each lets a student pick a treatment/dose from a dropdown matching real
  pharmacology practicals, "run" the trial, and get a physiologically
  plausible reading (with normal biological variability), logged into a
  running data table with group means and % change vs. control — the same
  numbers a student would report in a lab notebook.
- The remaining ~140 models are listed as **○ planned** — a roadmap, not
  filler — so the catalog stays honest about what's real vs. what's next.

## Running it locally

No install needed. Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. Create a new repo on GitHub (e.g. `pharm-lab`).
2. Push this folder as the repo contents:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: pharmacology CAL simulation software"
   git branch -M main
   git remote add origin https://github.com/<your-username>/pharm-lab.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set **Source** to `main` branch,
   `/ (root)` folder, and save.
4. Your site will be live at `https://<your-username>.github.io/pharm-lab/`.

## Adding a new model (contribution guide)

Each simulation is a single self-contained HTML file. To add one:

1. Copy an existing page from `models/` that's structurally closest to your
   new model (e.g. a latency-based test → copy `hot-plate.html`; a
   count/index-based test → copy `writhing.html`; a time-course test → copy
   `paw-edema.html`; a binary pass/fail test → copy `mes.html`).
2. Update:
   - The `<title>`, header eyebrow/category, and the "principle" paragraph
     (mechanism + why it's used).
   - The `drug` `<select>` options — use real drugs/doses from the
     experiment's standard protocol.
   - The `compute...()` JS function — set a realistic control baseline and
     per-drug effect multipliers/probabilities based on the pharmacology
     (this is the part markers actually check, so get the direction and
     rough magnitude of the effect right).
3. Save it in `models/your-model-name.html`.
4. In `data/models-data.js`, find your model's entry (or add one) and set:
   ```js
   { name: "Your Model Name", status: "live", href: "models/your-model-name.html" }
   ```
5. Refresh `index.html` — the card updates automatically (the catalog page
   is generated from `models-data.js`, nothing else to edit).

## Design notes

- All simulated values include realistic biological variability (Gaussian
  noise around a mean), so repeated trials of the same treatment don't give
  identical numbers — closer to how a real practical behaves.
- Cut-off times/values are enforced where the real protocol uses them (e.g.
  15 s hot plate, 10 s tail-flick, 180 s rotarod), consistent with animal
  welfare limits in the original wet-lab protocols.
- This is a teaching tool, not a source of drug-effect data — dose-response
  numbers are illustrative and tuned for pedagogical clarity, not fit to
  primary literature.

## License

MIT — free to use, adapt, and extend for teaching.
